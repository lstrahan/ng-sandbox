import { Customer } from 'src/app/library/customer';

export class LoadAllCustomers {
    static readonly type = '[customers] load all';
    constructor() { }
}

export class AddCustomer {
    static readonly type = '[customers] add';
    constructor (public payload: Customer) { }
}

export class RemoveCustomer {
    static readonly type = '[customers] remove';
    constructor (public payload: string) { }
}
