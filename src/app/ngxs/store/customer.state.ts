import { State, Action, StateContext, Selector, Store, StateToken, createSelector, NgxsOnInit } from '@ngxs/store';
import * as _ from 'lodash';
import { AddCustomer, RemoveCustomer, LoadCustomerIndex, UpdateCustomerIndex, SelectCustomer } from './customer.actions';
import { CustomerService } from '../../library/customer.service';
import { tap } from 'rxjs/operators';

export interface CustomerStateModel {
  customerIndex: Map<string, string>;
  selectedId: string;
}

export const CUSTOMERS_STATE_TOKEN = new StateToken<CustomerStateModel>('customers');

@State<CustomerStateModel>({
  name: CUSTOMERS_STATE_TOKEN,
  defaults: {
    customerIndex: new Map<string, string>(),
    selectedId: ''
  }
})
export class CustomerState implements NgxsOnInit  {

  constructor(private store: Store, private customerService: CustomerService) { }

  @Selector([CUSTOMERS_STATE_TOKEN])
  static getCustomerIndex(state: CustomerStateModel): Map<string, string> {
    return state.customerIndex;
  }

  static getCustomerById(id: string) {
    return createSelector(
      [CUSTOMERS_STATE_TOKEN],
      (state: CustomerStateModel) => {
        return state.customerIndex.get(id);
      }
    );
  }

  // @Selector()
  // getCustomerById(id: string) {
  //   return this.store.selectSnapshot<string>(state => state.customers.customerIndex.get('ecc36ae7-e2c4-4b75-855b-aad52b7610fa'));
  // }

  ngxsOnInit(ctx?: StateContext<CustomerStateModel>) {
    console.log('>>>>>>>>>>>>>>>>>>>>>> ngxsOnInit');
    // ctx.dispatch(new LoadCustomerIndex());
  }

  @Action(LoadCustomerIndex)
  loadCustomerIndex(ctx: StateContext<CustomerStateModel>) {
    return this.customerService.getCustomerIndex().pipe(
      tap((result) => {
        ctx.patchState({ customerIndex: result });
      }));
  }

  // update customerIndex directly without making a service call. 
  @Action(UpdateCustomerIndex)
  updateCustomerIndex(ctx: StateContext<CustomerStateModel>, { payload }: UpdateCustomerIndex) {
    ctx.patchState({ customerIndex: payload });
  }

  @Action(AddCustomer)
  addCustomer(ctx: StateContext<CustomerStateModel>, { payload }: AddCustomer) {
    return this.customerService.createCustomer(payload).pipe(
      tap((result) => {
        // const newIndex = ctx.getState().customerIndex; // doesn't work. I think because Map type is mutable so it doesn't appear to change
        const clonedIndex = _.cloneDeep(ctx.getState().customerIndex);
        ctx.patchState({ customerIndex: clonedIndex.set(result.id, result.firstname + ' ' + result.lastname) });
      }));
  }

  @Action(RemoveCustomer)
  removeCustomer(ctx: StateContext<CustomerStateModel>, { payload }: RemoveCustomer) {
    return this.customerService.deleteCustomer(payload).pipe(
      tap((result) => {
        const clonedIndex = _.cloneDeep(ctx.getState().customerIndex);
        clonedIndex.delete(payload);
        ctx.patchState({ customerIndex: clonedIndex });
      }));
  }

  @Action(SelectCustomer)
  selectCustomer(ctx: StateContext<CustomerStateModel>, { payload }: SelectCustomer) {
    ctx.patchState({ selectedId: payload });
  }
}
