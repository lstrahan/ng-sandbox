import { Component, OnInit } from '@angular/core';
// import {JsonObject, JsonProperty, JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import { ObjectMapper, JsonProperty, JsonIgnore, Serializer } from 'json-object-mapper';
import {Expose, Exclude, Transform, classToPlain, Type} from 'class-transformer';
import * as moment from 'moment';
import {Moment} from 'moment';
import { CustomerService } from '../../library/customer.service';
import { Customer } from '../../library/customer';

// tslint:disable:max-line-length
// tslint:disable:no-inferrable-types

// class MyDateSerializer implements Serializer {
//   public serialize(value: Date): string {
//     return `"${value.toISOString()}"`;
//   }
// }

class MySubClass {
  id: string = '';
  parentId: string = '';
  address: string = '';
  city: string = '';
  @Expose({ name: 'zipcode' })
  zip: string = '';
  @Transform((value) => moment(value).utc().toISOString(), { toPlainOnly: true })
  date: Moment;
  @Exclude()
  propOnlyInModel: string = '';

  get getterShouldBeIgnored(): string {
    return `${this.address}, ${this.city} ${this.zip}`;
  }

  constructor(json?: any) {
    this.propOnlyInModel = 'initialized in constructor';
    if (json) {
      return MySubClass.deserialize(json);
    }
  }

  static deserialize(json: any): MySubClass {
    const obj = new MySubClass();

    obj.id = json.id;
    obj.parentId = json.parentId;
    obj.address = json.address;
    obj.city = json.city;
    obj.zip = json.zipcode;
    obj.date = moment(json.date);

    return obj;
  }
}
class MyClass {
  id: string = '';
  firstname: string = '';
  @Expose({ name: 'surname' })
  lastname: string = '';
  subdata: MySubClass[] = [];

  constructor(json?: any) {
    if (json) {
      return MyClass.deserialize(json);
    }
  }

  static deserialize(json: any): MyClass {
    const obj = new MyClass();
    obj.id = json.id;
    obj.firstname = json.firstname;
    obj.lastname = json.surname;
    for (let i = 0; i < json.subdata.length; i++) {
      obj.subdata.push(MySubClass.deserialize(json.subdata[i]));
    }

    return obj;
  }

  serialize(): any {
    return classToPlain(this);
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
      id: '1',
      firstname: 'Lance',
      surname: 'Strahan',
      subdata: [
        {id: '1', parentId: '1', address: '123 Some St', city: 'Monument', zipcode: '80132', date: `2018-01-01T09:30:00Z`, propOnlyInJson: 'this is only in JSON'},
        {id: '2', parentId: '1', address: '567 Another St', city: 'Colorado Springs', zipcode: '80920', date: `2018-02-02T09:20:00Z`, propOnlyInJson: 'this is only in JSON'}
      ]
    };

    const x: MyClass = new MyClass(jsonObj);
    console.log('deserialized x = ', x);

    const c: MyClass = MyClass.deserialize(jsonObj);
    console.log('deserialized = ', c);

    // const jsonConvert: JsonConvert = new JsonConvert();
    // jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
    // jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    // jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
    // let c: Customer = jsonConvert.deserialize(jsonObj, MyClass);

    // console.log('serialized = ', JSON.parse(ObjectMapper.serialize(c).toString()));

    console.log('serialized by class-transformer = ', c.serialize());
  }
}
