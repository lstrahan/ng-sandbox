/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { LogService } from '../services/log.service';
/**
 * ***************************************************************************
 * JWT Interceptor: Insert JWT into header of all requests
 * ****************************************************************************
 */
export class JwtInterceptor {
    /**
     * @param {?} authenticationService
     */
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.indexOf(this.authenticationService.getAuthenticationServicePrefix()) === -1) {
            request = request.clone({
                // setHeaders: {
                //   'token': this.authenticationService.token,
                //   'UserName': this.authenticationService.currentUser
                // }
                headers: request.headers.set('token', this.authenticationService.token)
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
JwtInterceptor.ctorParameters = () => [
    { type: AuthenticationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    JwtInterceptor.prototype.authenticationService;
}
/**
 * ***************************************************************************
 * Error Interceptor: Handle HTTP errors
 * ****************************************************************************
 */
export class ErrorInterceptor {
    /**
     * @param {?} authenticationService
     * @param {?} logService
     */
    constructor(authenticationService, logService) {
        this.authenticationService = authenticationService;
        this.logService = logService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        let self = this;
        return next.handle(request).pipe(catchError(err => {
            // NOTE: err.status is always 0. Research points to backend server not attaching CORS headers to response
            // see this article https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
            // and this https://stackoverflow.com/questions/29547003/angularjs-no-access-control-allow-origin-header-is-present-on-the-requested-r
            // adn this https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logOut();
            }
            else {
                this.logService.error(`ErrorInterceptor: err.status = ${err.status}`, err);
            }
            /** @type {?} */
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
ErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ErrorInterceptor.ctorParameters = () => [
    { type: AuthenticationService },
    { type: LogService }
];
if (false) {
    /** @type {?} */
    ErrorInterceptor.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    ErrorInterceptor.prototype.logService;
}
/**
 * ***************************************************************************
 * Data Recorder Interceptor
 * ****************************************************************************
 */
export class CacheInterceptor {
    constructor() { }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                console.log(`>>>>>>>>>>>> CACHE INTERCEPTOR`, event);
            }
            return event;
        }));
    }
}
CacheInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CacheInterceptor.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL290aGVyL2ludGVyY2VwdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsWUFBWSxFQUEyQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFHLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQU1yRCxNQUFNLE9BQU8sY0FBYzs7OztJQUV6QixZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7Ozs7OztJQUVyRSxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7O2dCQUt0QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBakJGLFVBQVU7Ozs7WUFORixxQkFBcUI7Ozs7Ozs7SUFTaEIsK0NBQW9EOzs7Ozs7O0FBcUJsRSxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUUzQixZQUFtQixxQkFBNEMsRUFBVSxVQUFzQjtRQUE1RSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7OztJQUVwRyxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjs7WUFDaEQsSUFBSSxHQUFHLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZix5R0FBeUc7WUFDekcsOEZBQThGO1lBQzlGLHNJQUFzSTtZQUN0SSxpR0FBaUc7WUFDakcsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsZ0RBQWdEO2dCQUNoRCxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1RTs7a0JBRUssS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxVQUFVO1lBQ2pELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUF4QkYsVUFBVTs7OztZQTdCRixxQkFBcUI7WUFDckIsVUFBVTs7OztJQStCTCxpREFBbUQ7Ozs7O0lBQUUsc0NBQThCOzs7Ozs7O0FBNkJqRyxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLGdCQUFnQixDQUFDOzs7Ozs7SUFFakIsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDekQsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQzs7O1lBZEYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBKV1QgSW50ZXJjZXB0b3I6IEluc2VydCBKV1QgaW50byBoZWFkZXIgb2YgYWxsIHJlcXVlc3RzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSnd0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgaWYgKHJlcXVlc3QudXJsLmluZGV4T2YodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0QXV0aGVudGljYXRpb25TZXJ2aWNlUHJlZml4KCkpID09PSAtMSkge1xyXG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgLy8gc2V0SGVhZGVyczoge1xyXG4gICAgICAgIC8vICAgJ3Rva2VuJzogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UudG9rZW4sXHJcbiAgICAgICAgLy8gICAnVXNlck5hbWUnOiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMuc2V0KCd0b2tlbicsIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnRva2VuKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEVycm9yIEludGVyY2VwdG9yOiBIYW5kbGUgSFRUUCBlcnJvcnNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcclxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgIC8vIE5PVEU6IGVyci5zdGF0dXMgaXMgYWx3YXlzIDAuIFJlc2VhcmNoIHBvaW50cyB0byBiYWNrZW5kIHNlcnZlciBub3QgYXR0YWNoaW5nIENPUlMgaGVhZGVycyB0byByZXNwb25zZVxyXG4gICAgICAgIC8vIHNlZSB0aGlzIGFydGljbGUgaHR0cHM6Ly9kYXZlY2VkZGlhLmNvbS9hY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4tY29ycy1lcnJvcnMtaW4tYW5ndWxhci9cclxuICAgICAgICAvLyBhbmQgdGhpcyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTU0NzAwMy9hbmd1bGFyanMtbm8tYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luLWhlYWRlci1pcy1wcmVzZW50LW9uLXRoZS1yZXF1ZXN0ZWQtclxyXG4gICAgICAgIC8vIGFkbiB0aGlzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvSGVhZGVycy9BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cclxuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAvLyBhdXRvIGxvZ291dCBpZiA0MDEgcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSBhcGlcclxuICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZXJyb3IoYEVycm9ySW50ZXJjZXB0b3I6IGVyci5zdGF0dXMgPSAke2Vyci5zdGF0dXN9YCwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyLmVycm9yLm1lc3NhZ2UgfHwgZXJyLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIERhdGEgUmVjb3JkZXIgSW50ZXJjZXB0b3JcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWNoZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSh0YXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgPj4+Pj4+Pj4+Pj4+IENBQ0hFIElOVEVSQ0VQVE9SYCwgZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBldmVudDtcclxuICAgIH0pKTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==