import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { map, tap, first, take, catchError, concatMap, endWith, last } from 'rxjs/operators';
import * as _ from 'lodash';

import { Customer } from './customer';
import { Util } from './util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  baseUrl: string = 'http://127.0.0.1';

  constructor(private http: HttpClient) { }

  getCustomerMap(): Observable<Map<string, string>> {
    console.log('CustomerService.getCustomerMap');
    const url = Util.urlJoin(this.baseUrl, '/customers');
    console.log(`    GET ${url}`);

    return this.http.get<any>(url, httpOptions).pipe(
      // first(),
      tap(res => console.log('    got customers', res)),
      map(res => new Map<string, string>(res.map(obj => [obj.key, obj.value]))),
      catchError(this.handleError<any>('CustomerService.getCustomerMap'))
    );
  }

  getCustomerById(id: string): Observable<Customer> {
    console.log('CustomerService.getCustomerById');
    const url = Util.urlJoin(this.baseUrl, `/customer/${id}`);
    console.log(`    GET ${url}`);

    return this.http.get<any>(url, httpOptions).pipe(
      // first(),
      tap(res => console.log('    got customer', res)),
      map(res => new Customer(res)),
      catchError(this.handleError<any>('CustomerService.getCustomerById'))
    );
  }

  sequentialDelete(ids: string[]): Observable<string> {
    console.log('CustomerService.sequentialCalls');
    const url1 = Util.urlJoin(this.baseUrl, `/customer/${ids[0]}`);
    const url2 = Util.urlJoin(this.baseUrl, `/customer/${ids[1]}`);
    console.log(`    DELETE ${url1}, then DELETE ${url2}`);

    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'text',
      body: {
        strings: ['1', '2']
      },
    };

    const reqArray: Observable<any>[] = [];
    reqArray.push(this.http.delete(url1, httpOptions));
    reqArray.push(this.http.delete(url2, deleteOptions));

    return concat(...reqArray).pipe(
      last(),
      tap(res => console.log('    deleted customer', res)),
      catchError(this.handleError<any>('CustomerService.sequentialCalls'))
    );
  }

  /*

    createCustomer(customer: Customer): Observable<Customer> {
      console.log('CustomerService.createCustomer');
      const url = Util.urlJoin(this.baseUrl, '/eventModel/event');
      console.log(`    POST ${url}`, customer);
      return this.http.post<Customer>(url, customer, httpOptions).pipe(
        tap(res => console.log(`    created event`, res)),
        map(res => new Customer(res)),
        catchError(this.handleError<Customer>('CustomerService.createCustomer'))
      );
    }

    updateCustomer(customer: Customer): Observable<Customer> {
      console.log('CustomerService.updateCustomer');
      const url = Util.urlJoin(this.baseUrl, '/eventModel/event');
      console.log(`    PUT ${url}`, customer);
      return this.http.put<Customer>(url, customer, httpOptions).pipe(
        tap(res => console.log(`    updated event`, res)),
        map(res => new Customer(res)),
        catchError(this.handleError<Customer>('CustomerService.updateCustomer'))
      );
    }

    deleteCustomer(id: string): Observable<any> {
      console.log('CustomerService.deleteCustomer');
      const url = Util.urlJoin(this.baseUrl, '/eventModel/event', id);
      console.log(`    DELETE ${url} ${id}`);
      return this.http.delete<any>(url, httpOptions).pipe(
        tap(res => console.log(`    deleted event`)),
        catchError(this.handleError<any>('CustomerService.deleteCustomer'))
      );
    }
  */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  stringSort(a: string, b: string) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  }
}