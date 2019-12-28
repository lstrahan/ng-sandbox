import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'my-simple-custom-form-control',
  templateUrl: './simple-custom-form-control.component.html',
  styleUrls: ['./simple-custom-form-control.component.scss']
})
export class SimpleCustomFormControlComponent implements ControlValueAccessor {

  value: string = '';
  @Input() label: string;

  // Implementation of ControlValueAccessor interface
  onChange: Function;
  onTouched: Function;

  writeValue(value) { this.value = value; } // pull data into this control (see notes below)

  registerOnChange(fn) { this.onChange = fn; }

  registerOnTouched(fn) { this.onTouched = fn; }
  // END: Implementation of ControlValueAccessor interface

  constructor( @Optional() @Self() public ngControl: NgControl) {
    // required for interaction with Angular forms
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; } 
  }

  // My functions
  onDataChanged(event: any) {
    this.onChange(this.value); // send data out of this control (see notes below)
  }
}

/*
  >>>>> writeValue(value) { this.value = value; } <<<<<
  this pulls data into this custom form control via the control
  registered with the 'formControlName' attribute
  <app-simple-custom-form-field formControlName="myCtrl" label="Name"></app-simple-custom-form-field>

  >>>>> this.onChange(this.value); <<<<<
  this sends the data out of this custom form control via the control
  registered with the 'formControlName' attribute
  <app-simple-custom-form-field formControlName="myCtrl" label="Name"></app-simple-custom-form-field>
*/
