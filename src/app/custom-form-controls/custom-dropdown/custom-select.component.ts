import {
  AfterViewInit, Component, ContentChildren, ElementRef, forwardRef,
  Input, QueryList, ViewChild, Optional, Self, HostBinding
} from '@angular/core';
import { ActiveDescendantKeyManager, FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';

import { CustomDropdownService } from './custom-dropdown.service';
import { CustomSelectOptionComponent } from './custom-select-option.component';
import { DropdownComponent } from './dropdown.component';
import { Subject } from 'rxjs';

// http://prideparrot.com/blog/archive/2019/3/how_to_create_custom_dropdown_cdk

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.html',
  styleUrls: ['./_custom-select.scss'],
  providers: [
    CustomDropdownService,
    { provide: MatFormFieldControl, useExisting: CustomSelectComponent }
  ]
})
export class CustomSelectComponent implements AfterViewInit, ControlValueAccessor, MatFormFieldControl<string> {

  // Implementation of MatFormFieldControl so that control can be used inside a <mat-form-field> container
  static nextId = 0;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'custom-mat-form-control';

  @HostBinding('class.floating') get shouldLabelFloat() { return this.focused || !this.empty; }
  @HostBinding('id') id = `custom-mat-form-control-${CustomSelectComponent.nextId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';

  @Input()
  public selected: string;

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = 'value';
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): string | null {
    return this._valuePart1;
  }
  set value(newVal: string | null) {
    this._valuePart1 = newVal;
    this.stateChanges.next();
  }
  _valuePart1: string = '';

  get empty() {
    return !this._valuePart1;
  }

  @ViewChild('input')
  public input: ElementRef;

  @ViewChild(DropdownComponent)
  public dropdown: DropdownComponent;

  @ContentChildren(CustomSelectOptionComponent)
  public options: QueryList<CustomSelectOptionComponent>;

  public selectedOption: CustomSelectOptionComponent;

  public displayText: string;

  public onChangeFn = (_: any) => { };

  public onTouchedFn = () => { };


  private keyManager: ActiveDescendantKeyManager<CustomSelectOptionComponent>;

  constructor(private fm: FocusMonitor, private elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl, private dropdownService: CustomDropdownService) {

    this.dropdownService.register(this);

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; } // required for interaction with Angular forms
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.selectedOption = this.options.toArray().find(option => option.key === this.selected);
      this.displayText = this.selectedOption ? this.selectedOption.value : '';
      this.keyManager = new ActiveDescendantKeyManager(this.options)
        .withHorizontalOrientation('ltr')
        .withVerticalOrientation()
        .withWrap();
    });
  }

  public showDropdown() {
    this.dropdown.show();

    if (!this.options.length) {
      return;
    }

    this.selected ? this.keyManager.setActiveItem(this.selectedOption) : this.keyManager.setFirstItemActive();
  }

  public hideDropdown() {
    this.dropdown.hide();
  }

  public onDropMenuIconClick(event: UIEvent) {
    event.stopPropagation();
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.click();
    }, 10);
  }

  public onKeyDown(event: KeyboardEvent) {
    if (['Enter', ' ', 'ArrowDown', 'Down', 'ArrowUp', 'Up'].indexOf(event.key) > -1) {
      if (!this.dropdown.showing) {
        this.showDropdown();
        return;
      }

      if (!this.options.length) {
        event.preventDefault();
        return;
      }
    }

    if (event.key === 'Enter' || event.key === ' ') {
      this.selectedOption = this.keyManager.activeItem;
      this.selected = this.selectedOption.key;
      this.displayText = this.selectedOption ? this.selectedOption.value : '';
      this.hideDropdown();
      this.onChange();
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      this.dropdown.showing && this.hideDropdown();
    } else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
      .indexOf(event.key) > -1) {
      this.keyManager.onKeydown(event);
    } else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
      this.dropdown.showing && event.preventDefault();
    }
  }

  public selectOption(option: CustomSelectOptionComponent) {
    this.keyManager.setActiveItem(option);
    this.selected = option.key;
    this.selectedOption = option;
    this.displayText = this.selectedOption ? this.selectedOption.value : '';
    this.hideDropdown();
    this.input.nativeElement.focus();
    this.onChange();
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.selected = obj;
  }

  public onTouched() {
    this.onTouchedFn();
  }

  public onChange() {
    this.onChangeFn(this.selected);
  }

  // Implementation of MatFormFieldControl so that control can be used inside a <mat-form-field> container
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
}
