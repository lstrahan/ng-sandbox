import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CustomerState } from '../store/customer.state';
import { RemoveCustomer } from '../store/customer.actions';
import { Customer } from 'src/app/library/customer';


@Component({
  selector: 'my-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  // the following demonstrates 4 different ways to select a slice of the state
  // method 1
  @Select(CustomerState.getCustomerIndex) customerIndex1$: Observable<Map<string, string>>;
  // method 2
  @Select(state => state.customers.customerIndex) customerIndex2$: Observable<Map<string, string>>;
  // method 3 (part 1)
  customers3$: Observable<Map<string, string>>;
  // method 4 (part 1)
  customers4$: Observable<Map<string, string>>;
  
  constructor(private store: Store) {
    // method 3 (part 2)
    this.customers3$ = this.store.select(state => state.customers.customerIndex);
    // method 4 (part 2)
    this.customers4$ = this.store.select(CustomerState.getCustomerIndex);
  }

  ngOnInit() { }

  deleteCustomer(id: string) {
    console.log('delete ', id);
    this.store.dispatch(new RemoveCustomer(id));
  }
}
