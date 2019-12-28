import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { AddCustomer, LoadCustomerIndex as LoadCustomerIndex } from './customer.actions';
import { CustomerService } from '../../library/customer.service';
import { Customer } from '../../library/customer';
import { tap } from 'rxjs/operators';

export interface CustomerStatemodel {
    customerIndex: Map<string, string>;
}

@State<CustomerStatemodel>({
    name: 'customers',
    defaults: {
        customerIndex: new Map<string, string>()
    }
})
export class CustomerState {

    constructor(private store: Store, private customerService: CustomerService) { }

    @Selector()
    static getCustomerIndex(state: CustomerStatemodel) {
        return state.customerIndex;
    }

    @Action(LoadCustomerIndex)
    loadCustomerIndex({ patchState }: StateContext<CustomerStatemodel>) {
        return this.customerService.getCustomerIndex().pipe(
            tap((result) => {
                patchState({ customerIndex: result });
            }));
    }

    @Action(AddCustomer)
    addCustomer({ getState, patchState }: StateContext<CustomerStatemodel>, { payload }: AddCustomer) {
        return this.customerService.createCustomer(payload).pipe(
            tap((result) => {
                // patchState({ customerIndex: getState().customerIndex.set(result.id, result.firstname + ' ' + result.lastname) });
                this.store.dispatch(new LoadCustomerIndex);
            }));
    }
}
