import { InjectionToken } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class MockBackendInterceptor implements HttpInterceptor {
    constructor();
    sleep(millisecs: any): void;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
export declare let MockBackendProvider: {
    provide: InjectionToken<HttpInterceptor[]>;
    useClass: typeof MockBackendInterceptor;
    multi: boolean;
};
