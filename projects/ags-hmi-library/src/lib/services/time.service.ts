import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TimeService {

    serviceUrl: string = '';

    constructor(
        private http: HttpClient) {
    }

    init(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    getTime(): Observable<any> {

        return this.http.get(this.serviceUrl, { responseType: 'text' })
          .pipe(map(
            res => res
          ));
    
      }

}