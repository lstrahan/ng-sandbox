import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../library/customer.service';

@Component({
  selector: 'ags-indexed-db',
  templateUrl: './indexed-db.component.html',
  styleUrls: ['./indexed-db.component.css']
})
export class IndexedDbComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  buttonClicked() {
    this.customerService.getCustomerMap().subscribe();

    this.myFunction<string>();
    this.myFunction<number>();
  }

  myFunction<T>() {
    console.log('myFunction()');
    let val: T;
    console.log(typeof val);
    switch (typeof val) {
      case 'string': console.log('it is a string'); break;
      case 'number': console.log('it is a number'); break;
      default: console.log(`I don't know`);
    }

  }
}
