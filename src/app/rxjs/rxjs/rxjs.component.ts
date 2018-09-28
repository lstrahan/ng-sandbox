import { Component, OnInit } from '@angular/core';
// import {JsonObject, JsonProperty, JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
// import {JsonProperty, deserialize} from 'json-typescript-mapper';
import { ObjectMapper, JsonProperty, JsonIgnore } from 'json-object-mapper';
import { CustomerService } from '../../library/customer.service';
import { Customer } from '../../library/customer';

class MySubClass {
  parentId: string;
  address: string;
  city: string;
  @JsonProperty({ name: 'zipcode' })
  zip: string;

  constructor() {
    this.parentId = '';
    this.address = '';
    this.city = '';
    this.zip = '';
  }
}
class MyClass {
  id: string;
  firstname: string;
  @JsonProperty({ name: 'surname' })
  lastname: string;
  @JsonIgnore()
  localProperty: string;
  @JsonProperty({type: MySubClass})
  subdata: MySubClass[];

  constructor() {
    this.id = '';
    this.firstname = '';
    this.lastname = '';
    this.localProperty = 'this is an extra property';
    this.subdata = [];
  }
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  results: string;
  customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  getCustomers(): void {
    this.customerService.getCustomerMap().subscribe(res => {
      let str = '';
      // console.log('RxjsComponent::getCustomers', res);
      res.forEach((v, k, m) => str += `${k}: ${v}; `);
      this.results = str;
    });
  }

  getCustomerById(id: string): void {
    this.customerService.getCustomerById(id).subscribe(res => {
      this.customer = res;
      this.results = `${this.customer.id} ${this.customer.firstname} ${this.customer.lastname}`;
    });
  }


  deserializeClick() {
    const jsonObj = {
      id: '2',
      firstname: 'Lance',
      surname: 'Strahan',
      subdata: [
        {id: '2', address: '123 Some St', city: 'Monument', zipcode: '80132'},
        {id: '2', address: '567 Another St', city: 'Colorado Springs', zipcode: '80920'}
      ]
    };

    // const jsonConvert: JsonConvert = new JsonConvert();
    // jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
    // jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    // jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
    // let c: Customer = jsonConvert.deserialize(jsonObj, MyClass);
    
    // let c: Customer = deserialize(Customer, jsonObj);

    let c: MyClass = ObjectMapper.deserialize(MyClass, jsonObj);
    
    console.log('deserialized = ', c);
    console.log('serialized = ', ObjectMapper.serialize(c));
  }
}
