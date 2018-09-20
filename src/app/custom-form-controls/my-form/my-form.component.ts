import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
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
      ssnCtrl: []
    });
  }

  ngOnInit() {
    this.customFormGroup.get('nameCtrl').setValue('John Smith');
    this.customFormGroup.get('ssnCtrl').setValue('123-456-7890');
  }

  formSubmitClicked() {
    this.results = JSON.stringify(this.customFormGroup.value);
  }

}