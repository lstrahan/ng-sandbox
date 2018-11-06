/*
This custom component is a wrapper around the Angular Date Time Picker (ng-pick-datetime)
https://www.npmjs.com/package/ng-pick-datetime
https://danielykpan.github.io/date-time-picker/

This control ONLY produces UTC date/times

There is a line of code in onChanges() method to force the value to a UTC date/time.
The ng-pick-datetime control (<owl-date-time>) insists on appending the local timezone every time
you click it. So 'moment.toObject()' is utilized because it returns the parts of the
date without a timezone. This allows the creation of a new moment object without a
local timezone. It's hacky, but it gets the job done. Maybe someday Angular Material
will create a datetime picker that can properly handle UTC. :^(

moment.toObject() = {
    years: 2015
    months: 6
    date: 26,
    hours: 1,
    minutes: 53,
    seconds: 14,
    milliseconds: 600
}

*/

import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy, HostBinding, forwardRef, Optional, Self, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import moment from 'moment-es6';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
import { DateFormatPipe } from '../../other/pipes';

export const MY_CUSTOM_FORMATS = {
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  fullPickerInput: DateFormatPipe.format,
  datePickerInput: 'YYYY-MM',
  timePickerInput: 'hh:mm:ss',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'MMM YYYY',
  monthYearA11yLabel: 'MMM YYYY',
};

@Component({
  selector: 'ags-lib-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: DateTimePickerComponent },
  { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
  { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }
  ],
  encapsulation: ViewEncapsulation.None
})
export class DateTimePickerComponent implements ControlValueAccessor, MatFormFieldControl<string>, OnDestroy {
  @HostBinding('class.floating') get shouldLabelFloat() { return this.focused || !this.empty; }
  @HostBinding('id') id = `date-time-picker-${DateTimePickerComponent.nextId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';

  // Implementation of MatFormFieldControl
  // tslint:disable-next-line:member-ordering
  static nextId = 0;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'date-time-picker';

  private _placeholder: string;
  private _required = false;
  private _disabled = false;
  _momentValue: moment.Moment = moment(); // usa a Moment object internally to store the date value
  ///////////////////

  // Implementation of ControlValueAccessor
  onChange: Function;
  onTouched: Function;
  writeValue(inValue: string) { 
    console.log(`date-time-picker input string = ${inValue}`);
    this.value = inValue;
  }
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
  //////////////////////

  // Implementation of MatFormFieldControl properties
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
  get value(): string | null {
    return this._momentValue.utc().toISOString();
  }
  set value(newVal: string | null) {
    this._momentValue = moment.utc(newVal);
    this.stateChanges.next();
  }

  get empty() {
    return !this._momentValue;
  }
  /////////////////////

  constructor(private fm: FocusMonitor, private elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl) {

    // Implementation of MatFormFieldControl interface
    this.fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; } // required for interaction with Angular forms
    /////////////
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  // Implementation of MatFormFieldControl methods
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
  ////////////////////

  // My functions

  onDataChanged(event: any) {
    this._momentValue = moment.utc(this._momentValue.toObject()); // force to UTC
    console.log(`date-time-picker output string = ${this.value}`);
    this.onChange(this.value); // required for interaction with Angular forms
  }
}
