import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { LogService } from '../services/log.service';
/******************************************************************************
 * JWT Interceptor: Insert JWT into header of all requests
******************************************************************************/
export declare class JwtInterceptor implements HttpInterceptor {
    private authenticationService;
    constructor(authenticationService: AuthenticationService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
/******************************************************************************
 * Error Interceptor: Handle HTTP errors
******************************************************************************/
export declare class ErrorInterceptor implements HttpInterceptor {
    authenticationService: AuthenticationService;
    private logService;
    constructor(authenticationService: AuthenticationService, logService: LogService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
/******************************************************************************
 * Data Recorder Interceptor
******************************************************************************/
export declare class CacheInterceptor implements HttpInterceptor {
    constructor();
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
