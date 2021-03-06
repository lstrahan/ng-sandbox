import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy, HostBinding, forwardRef, Optional, Self, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-date-time-picker-2',
  templateUrl: './date-time-picker-2.component.html',
  styleUrls: ['./date-time-picker-2.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: DateTimePickerComponent }],
  encapsulation: ViewEncapsulation.None
})
export class DateTimePickerComponent implements ControlValueAccessor, MatFormFieldControl<Date>, OnDestroy {
  @HostBinding('class.floating') get shouldLabelFloat() { return this.focused || !this.empty; }
  @HostBinding('id') id = `date-time-picker-${DateTimePickerComponent.nextId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';

  // Implementation of MatFormFieldControl so that control can be used inside a <mat-form-field> container
  // tslint:disable-next-line:member-ordering
  static nextId = 0;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'date-time-picker';

  private _placeholder: string;
  private _required = false;
  private _disabled = false;
  _value: Date = new Date();

  // Implementation of ControlValueAccessor to integrate with Angular Forms
  onChange: Function;
  onTouched: Function;
  writeValue(value) { console.log('writeValue(value) = ', value); this.value = new Date(value); }
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  // Implementation of MatFormFieldControl so that control can be used inside a <mat-form-field> container
  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = 'value';
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get value(): Date | null {
    return this._value;
  }
  set value(newVal: Date | null) {
    this._value = newVal;
    this.stateChanges.next();
  }

  get empty() {
    return !this._value;
  }

  constructor(private fm: FocusMonitor, private elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl) {

    this.fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; } // required for interaction with Angular forms
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
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

  // My functions

  onDataChanged(event: any) {
    console.log('onDataChanged');
    this.onChange(this._value); // required for interaction with Angular forms
  }
}
