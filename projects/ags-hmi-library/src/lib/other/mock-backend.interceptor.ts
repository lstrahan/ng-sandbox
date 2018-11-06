import { Injectable, InjectionToken } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    constructor() { }

    sleep(millisecs) {
        let initiation = new Date().getTime();
        while ((new Date().getTime() - initiation) < millisecs) {}
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // example GET endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'GET') {
                console.log(`MOCK ${request.url}`);
                this.sleep(500);
                let dataObj = [ { id: '1234', data: 'data goes here' }, { id: '5678', data: 'data goes here' } ];
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                } else {
                    return throwError({ error: { message: 'Error' } });
                }
            }

            // example GET endpoint with id
            if (request.url.match(/\/exampleEndpoint\/\d+$/) && request.method === 'GET') {
                console.log(`MOCK ${request.url}`);
                this.sleep(500);
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let dataObj = { id: id, data: 'data goes here' };
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                } else {
                    return throwError({ error: { message: 'Error' } });
                }
            }

            // example POST endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'POST') {
                let reqBody = request.body;
                console.log(`MOCK ${request.url}`, reqBody);
                this.sleep(500);
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
