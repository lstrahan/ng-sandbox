import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../library/customer.service';
import { Customer } from '../../library/customer';

// tslint:disable:max-line-length
// tslint:disable:no-inferrable-types

@Component({
  selector: 'my-rxjs',
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
    this.customerService.getCustomerIndex().subscribe(res => {
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

  sequentialCalls(ids: string[]): void {
    this.customerService.sequentialDelete(ids).subscribe(res => {
      this.results = res;
    });
  }
}



