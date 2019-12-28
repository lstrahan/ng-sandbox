import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CustomerState } from '../store/customer.state';


@Component({
  selector: 'my-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  // this demonstrates 4 different ways to select a slice of the state
  @Select(CustomerState.getCustomerIndex) customerIndex1$: Observable<Map<string, string>>;
  @Select(state => state.customers.customerIndex) customerIndex2$: Observable<Map<string, string>>;
  customerIndex3$: Observable<Map<string, string>>;
  customerIndex4$: Observable<Map<string, string>>;
  
  constructor(private store: Store) {
    this.customerIndex3$ = this.store.select(state => state.customers.customerIndex);
    this.customerIndex4$ = this.store.select(CustomerState.getCustomerIndex);
  }

  ngOnInit() { }
}
