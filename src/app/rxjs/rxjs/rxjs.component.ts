import { Component, OnInit } from '@angular/core';
// import {JsonObject, JsonProperty, JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
// import {JsonProperty, deserialize} from 'json-typescript-mapper';
import { ObjectMapper, JsonProperty, JsonIgnore, Serializer } from 'json-object-mapper';
import { CustomerService } from '../../library/customer.service';
import { Customer } from '../../library/customer';

// tslint:disable:max-line-length
// tslint:disable:no-inferrable-types

class MyDateSerializer implements Serializer {
  public serialize(value: Date): string {
    return `"${value.toISOString()}"`;
  }
}

class MySubClass {
  parentId: string = '';
  address: string = '';
  city: string = '';
  @JsonProperty({ name: 'zipcode' })
  zip: string = '';
  @JsonProperty({type: Date, serializer: MyDateSerializer})
  date: Date = new Date();
  @JsonIgnore()
  propOnlyInModel: string = '';

  get fullAddress(): string {
    return `${this.address}, ${this.city} ${this.zip}`;
  }

  constructor(json: any) {
    this.parentId = json.parentId;
    this.address = json.address;
    this.city = json.city;
    this.zip = json.zipcode;
    this.date = new Date(json.date);
    this.propOnlyInModel = 'this property is only in the model';
  }
}
class MyClass {
  id: string = '';
  firstname: string = '';
  @JsonProperty({ name: 'surname' })
  lastname: string = '';
  @JsonProperty({type: MySubClass})
  subdata: MySubClass[] = [];

  constructor(json: any) {
    this.id = json.id;
    this.firstname = json.firstname;
    this.lastname = json.surname;
    for (let i = 0; i < json.subdata.length; i++) {
      this.subdata.push(new MySubClass(json.subdata[i]));
    }
  }
  
  serialize(): String {
    return ObjectMapper.serialize(this);
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
        {id: '2', address: '123 Some St', city: 'Monument', zipcode: '80132', date: `2018-01-01T09:30:00Z`, propOnlyInJson: 'this is only in JSON'},
        {id: '2', address: '567 Another St', city: 'Colorado Springs', zipcode: '80920', date: `2018-02-02T09:20:00Z`, propOnlyInJson: 'this is only in JSON'}
      ]
    };

    let c: MyClass = new MyClass(jsonObj);
    console.log('deserialized = ', c);

    // const jsonConvert: JsonConvert = new JsonConvert();
    // jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
    // jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    // jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
    // let c: Customer = jsonConvert.deserialize(jsonObj, MyClass);
    
    // let c: Customer = deserialize(Customer, jsonObj);

    console.log('serialized = ', JSON.parse(ObjectMapper.serialize(c).toString()));
  }
}
