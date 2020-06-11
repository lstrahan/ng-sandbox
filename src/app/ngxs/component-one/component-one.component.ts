import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngxs/store';

import { Customer } from '../../library/customer';
import { AddCustomer, LoadCustomerIndex, SelectCustomer } from '../store/customer.actions';
import { CustomerStateModel, CustomerState } from '../store/customer.state';

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
      lastNameCtrl: [],
      idCtrl: []
    });
  }

  ngOnInit() { }

  addBtnClicked() {
    const newCustomer: Customer = new Customer();
    newCustomer.firstname = this.customFormGroup.get('firstNameCtrl').value;
    newCustomer.lastname = this.customFormGroup.get('lastNameCtrl').value;

    this.store.dispatch(new AddCustomer(newCustomer));
  }

  selectBtnClicked() {
    const id = this.customFormGroup.get('idCtrl').value;
    this.store.dispatch(new SelectCustomer(id));

    const x = this.store.selectSnapshot<Map<string, string>>(CustomerState.getCustomerIndex);
    console.log(`selectSnapshot `, x);
  }
}
