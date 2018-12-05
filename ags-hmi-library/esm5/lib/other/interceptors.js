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
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    JwtInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
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
    };
    JwtInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    JwtInterceptor.ctorParameters = function () { return [
        { type: AuthenticationService }
    ]; };
    return JwtInterceptor;
}());
export { JwtInterceptor };
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
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, logService) {
        this.authenticationService = authenticationService;
        this.logService = logService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var self = this;
        return next.handle(request).pipe(catchError(function (err) {
            // NOTE: err.status is always 0. Research points to backend server not attaching CORS headers to response
            // see this article https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
            // and this https://stackoverflow.com/questions/29547003/angularjs-no-access-control-allow-origin-header-is-present-on-the-requested-r
            // adn this https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logOut();
            }
            else {
                _this.logService.error("ErrorInterceptor: err.status = " + err.status, err);
            }
            /** @type {?} */
            var error = err.error.message || err.statusText;
            return throwError(error);
        }));
    };
    ErrorInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ErrorInterceptor.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: LogService }
    ]; };
    return ErrorInterceptor;
}());
export { ErrorInterceptor };
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
var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    CacheInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                console.log(">>>>>>>>>>>> CACHE INTERCEPTOR", event);
            }
            return event;
        }));
    };
    CacheInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CacheInterceptor.ctorParameters = function () { return []; };
    return CacheInterceptor;
}());
export { CacheInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL290aGVyL2ludGVyY2VwdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsWUFBWSxFQUEyQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFHLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUtyRDtJQUdFLHdCQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7Ozs7OztJQUVyRSxrQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNGLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDOzs7OztnQkFLdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO2FBQ3hFLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWpCRixVQUFVOzs7O2dCQU5GLHFCQUFxQjs7SUF3QjlCLHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksY0FBYzs7Ozs7O0lBRWIsK0NBQW9EOzs7Ozs7O0FBb0JsRTtJQUdFLDBCQUFtQixxQkFBNEMsRUFBVSxVQUFzQjtRQUE1RSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7OztJQUVwRyxvQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFBdEQsaUJBbUJDOztZQWxCSyxJQUFJLEdBQUcsSUFBSTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLFVBQVUsQ0FBQyxVQUFBLEdBQUc7WUFDWix5R0FBeUc7WUFDekcsOEZBQThGO1lBQzlGLHNJQUFzSTtZQUN0SSxpR0FBaUc7WUFDakcsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsZ0RBQWdEO2dCQUNoRCxLQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0NBQWtDLEdBQUcsQ0FBQyxNQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDNUU7O2dCQUVLLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsVUFBVTtZQUNqRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJGLFVBQVU7Ozs7Z0JBN0JGLHFCQUFxQjtnQkFDckIsVUFBVTs7SUFxRG5CLHVCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksZ0JBQWdCOzs7SUFFZixpREFBbUQ7Ozs7O0lBQUUsc0NBQThCOzs7Ozs7O0FBNEJqRztJQUdFO0lBQWdCLENBQUM7Ozs7OztJQUVqQixvQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFFaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFxQjtZQUNyRCxJQUFJLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFTixDQUFDOztnQkFkRixVQUFVOzs7O0lBZVgsdUJBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogSldUIEludGVyY2VwdG9yOiBJbnNlcnQgSldUIGludG8gaGVhZGVyIG9mIGFsbCByZXF1ZXN0c1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEp3dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGlmIChyZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEF1dGhlbnRpY2F0aW9uU2VydmljZVByZWZpeCgpKSA9PT0gLTEpIHtcclxuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgIC8vIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAvLyAgICd0b2tlbic6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnRva2VuLFxyXG4gICAgICAgIC8vICAgJ1VzZXJOYW1lJzogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLnNldCgndG9rZW4nLCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS50b2tlbilcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBFcnJvciBJbnRlcmNlcHRvcjogSGFuZGxlIEhUVFAgZXJyb3JzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAvLyBOT1RFOiBlcnIuc3RhdHVzIGlzIGFsd2F5cyAwLiBSZXNlYXJjaCBwb2ludHMgdG8gYmFja2VuZCBzZXJ2ZXIgbm90IGF0dGFjaGluZyBDT1JTIGhlYWRlcnMgdG8gcmVzcG9uc2VcclxuICAgICAgICAvLyBzZWUgdGhpcyBhcnRpY2xlIGh0dHBzOi8vZGF2ZWNlZGRpYS5jb20vYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luLWNvcnMtZXJyb3JzLWluLWFuZ3VsYXIvXHJcbiAgICAgICAgLy8gYW5kIHRoaXMgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk1NDcwMDMvYW5ndWxhcmpzLW5vLWFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbi1oZWFkZXItaXMtcHJlc2VudC1vbi10aGUtcmVxdWVzdGVkLXJcclxuICAgICAgICAvLyBhZG4gdGhpcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0hlYWRlcnMvQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXHJcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgLy8gYXV0byBsb2dvdXQgaWYgNDAxIHJlc3BvbnNlIHJldHVybmVkIGZyb20gYXBpXHJcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmVycm9yKGBFcnJvckludGVyY2VwdG9yOiBlcnIuc3RhdHVzID0gJHtlcnIuc3RhdHVzfWAsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IGVyci5lcnJvci5tZXNzYWdlIHx8IGVyci5zdGF0dXNUZXh0O1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBEYXRhIFJlY29yZGVyIEludGVyY2VwdG9yXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FjaGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUodGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+PiBDQUNIRSBJTlRFUkNFUFRPUmAsIGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9KSk7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=