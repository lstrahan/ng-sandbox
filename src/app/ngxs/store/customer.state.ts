import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import * as _ from 'lodash';
import { AddCustomer, RemoveCustomer, LoadAllCustomers as LoadCustomerIndex } from './customer.actions';
import { CustomerService } from '../../library/customer.service';
import { Customer } from '../../library/customer';
import { tap } from 'rxjs/operators';

export interface CustomerStatemodel {
    customerIndex: Map<string, string>;
}

@State<CustomerStatemodel>({
    name: 'customers',
    defaults: {
        customerIndex: new Map<string, string>(),
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
    addCustomer(ctx: StateContext<CustomerStatemodel>, { payload }: AddCustomer) {
        return this.customerService.createCustomer(payload).pipe(
            tap((result) => {
                // const newIndex = ctx.getState().customerIndex; // doesn't work. I think because Map type is mutable so it doesn't appear to change
                const clonedIndex = _.cloneDeep(ctx.getState().customerIndex);
                ctx.patchState({ customerIndex: clonedIndex.set(payload.id, payload.firstname + ' ' + payload.lastname) });
            }));
    }

    @Action(RemoveCustomer)
    removeCustomer(ctx: StateContext<CustomerStatemodel>, { payload }: RemoveCustomer) {
        return this.customerService.deleteCustomer(payload).pipe(
            tap((result) => {
                const clonedIndex = _.cloneDeep(ctx.getState().customerIndex);
                clonedIndex.delete(payload);
                ctx.patchState({ customerIndex: clonedIndex });
            }));
    }
}
