import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Util } from '../other/util';
import { LogService } from './log.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DraftPlanService {

  private serviceUrl: string = '';

  constructor(private http: HttpClient,
    private logService: LogService) {
  }

  init(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  /**************************************************************************
   * POST /plan/draftPlan/${planId}
   
   **************************************************************************/
  draftPlan(planId: string): Observable<string> {
    this.logService.debug('PlanService.draftPlan');
    const url = Util.urlJoin(this.serviceUrl, '/plan/draftPlan/' + planId);

    return this.http.post<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    added PlanAsset successfully`)),
      map(res => res),
      catchError(this.handleError<string>('PlanService.draftPlan'))
    );
  }

  /**************************************************************************
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   **************************************************************************/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logService.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
