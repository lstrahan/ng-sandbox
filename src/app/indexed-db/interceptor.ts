
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from 
'@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log(`>>>>>>>>>>>> CACHE INTERCEPTOR`);
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      console.log(`>>>>>>>>>>>> CACHE INTERCEPTOR`, event);
      if (event instanceof HttpResponse) {
        console.log(`>>>>>>>>>>>> CACHE INTERCEPTOR`, event);
      }
      return event;
    }));
  }
}