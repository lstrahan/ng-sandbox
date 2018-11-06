/* 
 *  Displays a list of items as Angular Material chips.
 *  - a button is pressed to display list of selectable items
 *  - "onChange" is fired upon selection from list (either by mouse or <enter>)
 *  - each chip has an embedded icon which removes chip from list
 */
import { Component, OnInit, ViewEncapsulation, Input, Optional, Self, OnChanges } from '@angular/core';
import { KeyValue } from '@angular/common';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'ags-lib-chip-display',
  templateUrl: './chip-display.component.html',
  styleUrls: ['./chip-display.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChipDisplayComponent implements OnInit, OnChanges, ControlValueAccessor {

  // Label to be displayed as placeholder
  @Input() label: string = '';
  // List of items from which to choose.
  // key = displayed value (e.g. group name)
  // value = as a rule, the internal GUID (e.g. group ID)
  @Input() selectableItems: KeyValue<string, any>[];
  // Can an item be added more than once?
  @Input() allowDuplicates: boolean = true;
  // Is control disabled?
  @Input() enabled: boolean = true;
  // Property name on which to base equality
  @Input() equalityProperty: string = '';
  
  // "selectedItems" is updated by setting value of form control and not via input parms
  selectedItems: KeyValue<string, any>[];
  // "remainingSelectableItems" is dependent on value of "allowDuplicates"
  remainingSelectableItems: KeyValue<string, any>[];

  onChange: Function;
  onTouched: Function;

  //
  // ControlValueAccessor methods
  writeValue(value: KeyValue<string, any>[]) { 
    this.selectedItems = value;
    this.determineRemainingSelectableItems();
  }
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }
  //

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private logService: LogService) {
  
      if (this.ngControl != null) { 
        this.ngControl.valueAccessor = this;
      }
    }

  ngOnInit() {}

  // Gets fired on changes to all inputs, but only need to take some action when
  // selectable items get changed.
  ngOnChanges(changes) {
    if (changes.selectableItems) {
      // If remaining items list hasn't yet been populated, do that now.
      if (!this.remainingSelectableItems) {
        this.remainingSelectableItems = this.selectableItems.slice(0, this.selectableItems.length);
      }
      this.determineRemainingSelectableItems();
    }
  }

  // Item selected from list
  onSelected(item: KeyValue<string, any>) {
    this.selectedItems.push(item);
    this.determineRemainingSelectableItems();
    this.onChange(this.selectedItems);
  }

  // Item removed from displayed chips
  onRemoved(item: KeyValue<string, any>) {
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
    this.determineRemainingSelectableItems();
    this.onChange(this.selectedItems);
  }

  // If "Allow duplicates" flag is "true", keep selectable list the same.
  // If "Allow duplicates" flag is "false", remove selected items from selectable list.
  determineRemainingSelectableItems(): void {
    if (!this.selectedItems || !this.selectableItems) {
      return;
    }

    if (!this.allowDuplicates) {
      this.remainingSelectableItems = this.selectableItems.filter(x => {
        return !this.findItemInList(x, this.selectedItems);
      });
    }
  }

  // Search for equality of items by comparing value in KeyValue pair
  findItemInList(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean {

    if (!item || list.length === 0)  {
      return false;
    }

    let itemValueType = typeof item.value;
    let listValueType = typeof list[0].value;
    if (itemValueType !== listValueType) {
      this.logService.warn('Chip display comparing unequal types.  Ensure selectable items and selected items are of same type.');
      return false;
    }

    if (itemValueType === 'number') {
      return this.compareNumbers(item, list);
    }
    else if (itemValueType === 'string') {
      return this.compareStrings(item, list);
    }
    else if (itemValueType === 'object' && this.equalityProperty &&
      item.value.hasOwnProperty(this.equalityProperty)) {
      return this.compareObjects(item, list);
    }
    else {
      return false;
    }
  }

  compareNumbers(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean {
    let index = list.length;
    while (index--) {
      if (list[index].value === item.value) {
        return true;
      }
    }
    return false;
  }

  compareStrings(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean {
    let index = list.length;
    while (index--) {
      if (list[index].value.localeCompare(item.value) === 0) {
        return true;
      }
    }
    return false;
  }

  compareObjects(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean {
    let index = list.length;

    while (index--) {
      if (list[index].value[this.equalityProperty] === item.value[this.equalityProperty]) {
        return true;
      }
    }
    return false;
  }
}
