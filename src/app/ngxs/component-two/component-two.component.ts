import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CustomerState, CUSTOMERS_STATE_TOKEN } from '../store/customer.state';
import { RemoveCustomer } from '../store/customer.actions';
import { map } from 'rxjs/operators';


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
  // method 3 using State Token (part 1)
  customers3$: Observable<Map<string, string>>;
  // method 4 (part 1)
  customers4$: Observable<Map<string, string>>;

  @Select(state => state.customers.selectedId) selectedId$: Observable<string>;

  selectedName: string = '';

  constructor(private store: Store) { }

  ngOnInit() {
    // method 3 (part 2)
    this.customers3$ = this.store.select(CUSTOMERS_STATE_TOKEN).pipe(map(res => res.customerIndex));
    // method 4 (part 2)
    this.customers4$ = this.store.select(CustomerState.getCustomerIndex);

    this.selectedId$.subscribe(id => {
      this.store.select(CustomerState.getCustomerById(id))
        .subscribe(x => this.selectedName = x);
    })
  }

  deleteCustomer(id: string) {
    console.log('delete ', id);
    this.store.dispatch(new RemoveCustomer(id));
  }
}
