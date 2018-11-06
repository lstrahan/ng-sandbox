import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Util } from '../other/util';
import { LogService } from './log.service';
import { tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CzmlService {
  private serviceUrl: string;

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) { }

  init(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  getGroundTrackAndSensorVolume(planId: string, targetId: string, missionId?: string): Observable<any> {
    let endpoint = `/czml/groundTrackAndSensorVolume/${planId}/${targetId}`;

    if (missionId) {
      endpoint = `${endpoint}/${missionId}`;
    }

    const url = Util.urlJoin(this.serviceUrl, endpoint);
    this.logService.debug('CzmlService.getGroundTrackAndSensorVolume()');

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug('    retrieved Czml')),
      map(res => res),
    );
  }

  /**
  * Handle http operation that failed.
  *
  * @param operation {string} name of the operation that failed
  * @param result {any} optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logService.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
