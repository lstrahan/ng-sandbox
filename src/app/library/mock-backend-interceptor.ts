import { Injectable, InjectionToken } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import * as _ from 'lodash';
import { Util } from './util';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  customers = [
    { id: 'ecc36ae7-e2c4-4b75-855b-aad52b7610fa', firstname: 'John', lastname: 'Smith' },
    { id: '810d2ec0-5710-4c84-ad4b-89c47d94bef7', firstname: 'Bob', lastname: 'Roberts' },
    { id: '727e38d3-2157-456a-84a7-9311ebf8f465', firstname: 'Charles', lastname: 'Dickens' }
  ];
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(delay(500), mergeMap(() => {

      // GET customers
      if (request.url.endsWith('/customers') && request.method === 'GET') {
        console.log(`MOCK ${request.url}`);
        let dataObj = this.customers.map(item => ({ key: item.id, value: item.firstname + ' ' + item.lastname }));
        if (dataObj) {
          return of(new HttpResponse({ status: 200, body: dataObj }));
        } else {
          return throwError({ error: { message: 'Error' } });
        }
      }

      // GET customer/$id
      if (request.url.match(/\/customer\/\d+$/) && request.method === 'GET') {
        console.log(`MOCK ${request.url}`);
        let urlParts = request.url.split('/');
        let id = urlParts[urlParts.length - 1];
        let dataObj = _.defaultTo(this.customers.filter(item => item.id === id)[0], {});
        if (dataObj) {
          return of(new HttpResponse({ status: 200, body: dataObj }));
        } else {
          return throwError({ error: { message: 'Error' } });
        }
      }

      // POST customer
      if (request.url.endsWith('/customer') && request.method === 'POST') {
        let newCustomer = request.body;
        console.log(`MOCK ${request.url}`, newCustomer);
        if (newCustomer) {
          newCustomer.id = Util.newGuid();
          this.customers.push(newCustomer);
          return of(new HttpResponse({ status: 200, body: newCustomer }));
        } else {
          return throwError({ error: { message: 'Error' } });
        }
      }

      // DELETE customer/$id
      if (request.url.match(/\/customer\/\d+$/) && request.method === 'DELETE') {
        console.log(`MOCK ${request.url}`);
        let urlParts = request.url.split('/');
        let id = urlParts[urlParts.length - 1];
        this.customers = this.customers.filter(x => x.id !== id);
        return of(new HttpResponse({ status: 200, body: `success: id = ${id}` }));
      }

      // example POST endpoint
      if (request.url.endsWith('/exampleEndpoint') && request.method === 'POST') {
        let reqBody = request.body;
        console.log(`MOCK ${request.url}`, reqBody);
        if (reqBody) {
          return of(new HttpResponse({ status: 200, body: JSON.stringify(reqBody) }));
        } else {
          return throwError({ error: { message: 'Error' } });
        }
      }

      // pass through any requests not handled above
      return next.handle(request);

    }));
  }
}

export let MockBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptor,
  multi: true
};
