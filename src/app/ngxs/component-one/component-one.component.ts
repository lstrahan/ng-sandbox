import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngxs/store';

import { Customer } from '../../library/customer';
import { LoadCustomerIndex, AddCustomer } from '../store/customer.actions';

@Component({
  selector: 'my-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  customFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.customFormGroup = this.formBuilder.group({
      firstNameCtrl: [],
      lastNameCtrl: []
    });

    this.store.dispatch(new LoadCustomerIndex);
  }

  ngOnInit() { }

  addBtnClicked() {
    const newCustomer: Customer = new Customer();
    newCustomer.firstname = this.customFormGroup.get('firstNameCtrl').value;
    newCustomer.lastname = this.customFormGroup.get('lastNameCtrl').value;

    this.store.dispatch(new AddCustomer(newCustomer));
  }
}
