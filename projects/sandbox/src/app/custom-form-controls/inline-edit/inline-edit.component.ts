import { Component, Optional, Self, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'ags-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})

export class InlineEditComponent implements ControlValueAccessor {

  value: string = '';
  isReadOnly: boolean = true;

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
  onInputChanged(event: any) {
    this.onChange(this.value); // send data out of this control (see notes below)
  }

  clearInput() {
    this.value = '';
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
