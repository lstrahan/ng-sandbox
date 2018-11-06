import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { LogService } from '../services/log.service';

/******************************************************************************
 * JWT Interceptor: Insert JWT into header of all requests
******************************************************************************/
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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

/******************************************************************************
 * Error Interceptor: Handle HTTP errors
******************************************************************************/
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService, private logService: LogService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let self = this;
    return next.handle(request).pipe(catchError(err => {
      // NOTE: err.status is always 0. Research points to backend server not attaching CORS headers to response
      // see this article https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
      // and this https://stackoverflow.com/questions/29547003/angularjs-no-access-control-allow-origin-header-is-present-on-the-requested-r
      // adn this https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logOut();
      } else {
        this.logService.error(`ErrorInterceptor: err.status = ${err.status}`, err);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}


/******************************************************************************
 * Data Recorder Interceptor
******************************************************************************/
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(`>>>>>>>>>>>> CACHE INTERCEPTOR`, event);
      }
      return event;
    }));

  }
}
