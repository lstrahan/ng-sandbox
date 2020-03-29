import { Customer } from 'src/app/library/customer';

export class LoadCustomerIndex {
    static readonly type = '[customers] loadIndex';
    constructor() { }
}

export class UpdateCustomerIndex {
  static readonly type = '[customers] updateIndex';
  constructor(public payload: Map<string, string>) { }
}

export class AddCustomer {
    static readonly type = '[customers] add';
    constructor (public payload: Customer) { }
}

export class RemoveCustomer {
    static readonly type = '[customers] remove';
    constructor (public payload: string) { }
}

export class SelectCustomer {
  static readonly type = '[customers] select';
  constructor (public payload: string) { }
}
