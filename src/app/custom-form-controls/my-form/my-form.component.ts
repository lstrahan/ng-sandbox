import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  customFormGroup: FormGroup;
  results: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.customFormGroup = this.formBuilder.group({
      nameCtrl: [],
      ssnCtrl: [],
      dateCtrl: [],
      selectWithClearCtrl: [],
      selectedDestinationCtrl: [],
      simpleStringCtrl: []
    });
  }

  ngOnInit() {
    this.customFormGroup.get('nameCtrl').setValue('John Smith');
    this.customFormGroup.get('ssnCtrl').setValue('123-456-7890');
    this.customFormGroup.get('dateCtrl').setValue('2018-01-01 19:00:00');
    this.customFormGroup.get('selectWithClearCtrl').setValue('select with clear');
    this.customFormGroup.get('simpleStringCtrl').setValue('bla bla bla');
  }

  formSubmitClicked() {
    console.log('results = ', this.customFormGroup.value);
    this.results = JSON.stringify(this.customFormGroup.value);
  }

  log(msg: string) {
    console.log(msg);
  }

}
