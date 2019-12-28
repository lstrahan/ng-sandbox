import { Customer } from 'src/app/library/customer';

export class LoadCustomerIndex {
    static readonly type = '[customers] load index';
    constructor() { }
}

export class AddCustomer {
    static readonly type = '[customers] add';
    constructor (public payload: Customer) { }
}
