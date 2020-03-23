import { Customer } from 'src/app/library/customer';

export class LoadCustomerIndex {
    static readonly type = '[customers] loadIndex';
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
