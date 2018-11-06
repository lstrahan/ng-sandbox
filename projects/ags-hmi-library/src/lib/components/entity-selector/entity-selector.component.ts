import { Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, Self, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgControl, ControlValueAccessor } from '@angular/forms';
import { empty } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { PartialEntity, Group } from '../../models/entity';
import { EntityService } from '../../services/entity.service';
import { LogService } from '../../services/log.service';
import { forEach } from '@angular/router/src/utils/collection';

const INVALID_ENTITY: PartialEntity = new PartialEntity({
  name: '',
  agsEntityId: '',
});


@Component({
  selector: 'ags-lib-entity-selector',
  templateUrl: './entity-selector.component.html',
  styleUrls: ['./entity-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EntitySelectorComponent implements ControlValueAccessor, OnInit, OnChanges {

  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  // @Output() entitySelected = new EventEmitter<PartialEntity>();

  onChange: Function;
  onTouched: Function;

  entitySelectionFormGroup: FormGroup;
  inputCtrl: FormControl;
  optionsCtrl: FormControl;
  entities: PartialEntity[] = [];
  hasFocus: boolean = false;
  incomingEntity: PartialEntity = INVALID_ENTITY;
  selectedEntity: PartialEntity = INVALID_ENTITY;
  isSearching = false;

  // ControlValueAccessor methods
  writeValue(value) { this.selectedEntity.entityId = value; }
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private entityService: EntityService,
    private logService: LogService) {
      this.createForm();

      if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
  }

  createForm() {
    this.inputCtrl = new FormControl(
      { value: '', disabled: false }, 
      { /* validators: Validators.required */}
    );
    this.optionsCtrl = new FormControl();

    this.entitySelectionFormGroup = new FormGroup({
      inputCtrl: this.inputCtrl,
      optionsCtrl: this.optionsCtrl,
    });
  }

  ngOnInit() {
    const component = this;
    this.inputCtrl.valueChanges.pipe(
      debounceTime(500),
      switchMap((term) => {
        let termType = typeof term;
        if (!term || (termType.localeCompare('string') !== 0) || (term.length < 2)) {
          component.entities = [];
          component.isSearching = false;
          return empty();
        }
        else {
          component.isSearching = true;
          component.entities = [];
          return component.entityService.partialEntitiesBySubstrings(term.split(' '));
        }
    }))
    .subscribe((result) => {
      component.isSearching = false;
      component.entities = result;
    });
  }

  ngOnChanges() {
    if (this.id) {
      this.incomingEntity = new PartialEntity({
        name: this.name,
        agsEntityId: this.id,
      });
    }
    else {
      this.incomingEntity = INVALID_ENTITY;
    }

    // Start with incoming equal to selected
    this.selectedEntity = this.incomingEntity;

    if (this.entitySelectionFormGroup) {
      this.entitySelectionFormGroup.reset({
        inputCtrl: this.incomingEntity,
      });
    }
  }

  displayEntityAs(entity?: PartialEntity): string | undefined {
    if (entity && entity.name) {
      return entity.name.trim();
    }
    else {
      return '';
    }
  }

  // Ensure no list pops up when entering control.
  onFocus(event) {
    this.entities = [];
    this.hasFocus = true;
  }

  onBlur(event) {
    this.entitySelectionFormGroup.reset({
      inputCtrl: this.selectedEntity,
    });

    this.hasFocus = false;
  }

  onSelected(event) {
    this.selectedEntity = event.source.value;
    this.name = this.selectedEntity.name;
    this.id = this.selectedEntity.entityId;

    this.onChange(this.selectedEntity.entityId);
  }

  onMouseDown() {
    this.selectedEntity = INVALID_ENTITY;
    this.name = '';
    this.id = '';

    this.onChange('');

    if (this.selectedEntity !== this.incomingEntity) {
      this.incomingEntity = INVALID_ENTITY;
    }
    this.entities = [];
    this.entitySelectionFormGroup.get('inputCtrl').setValue('', {emitEvent: false});
  }

  getTitle(entity: PartialEntity) {
    let title: string = '';

    title += 'SCC:  ' + (entity.scc ? entity.scc.trim() : '');
    title += '\nCountry:  ' + (entity.countryName ? entity.countryName.trim() : '');
    title += '\nAffiliation:  ' + (entity.affiliation ? entity.affiliation.trim() : '');

    return title;
  }

  formatResults(entity: PartialEntity, searchTerm: string) {
    let result: string = '';
    let terms = searchTerm.split(' ');
    result += entity.name.trim();

    // Add SCC if present
    if (entity.scc) {
      result += ', ' + entity.scc;
    }

    function areAllTermsFound(termsToSearchFor, stringToSearch) {
      let found = true;
      for (let i = 0; i < termsToSearchFor.length; i++) {
        if (stringToSearch.toUpperCase().indexOf(termsToSearchFor[i].toUpperCase()) < 0) {
          found = false;
          break;
        }
      }

      return found;
    }

    // Add matching group name(s)
    let groupText: string = '';
    let firstGroup: boolean = true;
    entity.groups.forEach(group => {

      if (areAllTermsFound(terms, group.groupName)) {
        if (!firstGroup) {
          groupText += ', ';
        }
        groupText += group.groupName;
        firstGroup = false;
      }
    });

    if (groupText) {
      result += ' (' + groupText + ')';
    }

    return result;
  }
}
