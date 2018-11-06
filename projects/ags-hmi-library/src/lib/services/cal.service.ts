import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Util } from '../other/util';
import { LogService } from './log.service';
import { Task } from '../models/task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalService {

  private serviceUrl: string = '';

  constructor(private http: HttpClient,
    private logService: LogService) {
  }

  init(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  /**************************************************************************
   * GET /cal/task/byUciTaskId/${uciTaskId}
   **************************************************************************/
  getTask(uciTaskId: string): Observable<Task> {
    this.logService.debug('CalService.getTask');
    const url = Util.urlJoin(this.serviceUrl, '/cal/task/byUciTaskId/' + uciTaskId);

    return this.http.get<Task>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retrieved Task successfully`)),
      map(res => res),
      catchError(this.handleError<Task>('CalService.getTask'))
    );
  }

  /**************************************************************************
   * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
   **************************************************************************/
  addTaskToPlan(planId: string, uciTaskId: string) {
    this.logService.debug('CalService.addTaskToPlan');
    const url = Util.urlJoin(this.serviceUrl, '/cal/task/' + planId + '/byUciTaskId/' + uciTaskId);

    return this.http.put(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    added Task successfully`)),
      map(res => res),
      catchError(this.handleError<Task>('CalService.addTaskToPlan'))
    );
  }

  /**************************************************************************
   * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
   **************************************************************************/
  rejectTask(uciTaskId: string) {
    this.logService.debug('CalService.rejectTask');
    const url = Util.urlJoin(this.serviceUrl, '/cal/task/reject/byUciTaskId/' + uciTaskId);

    return this.http.put(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    Task rejected successfully`)),
      map(res => res),
      catchError(this.handleError<Task>('CalService.rejectTask'))
    );
  }

  /**************************************************************************
   * Send task request
   * PUT cal/task/{eventId}/{planId}
   **************************************************************************/
  sendTaskingRequest(eventId: string, planId: string) {
    this.logService.debug('CalService.sendTaskRequest');
    const url = Util.urlJoin(this.serviceUrl, `/cal/task/${eventId}/${planId}`);
    console.log('   ' + url);

    return this.http.put(url, '', { responseType: 'text' }).pipe(
      tap(res => this.logService.debug(`    task request sent`)),
      map(res => res),
      catchError(this.handleError<string>('CalService.sendTaskRequest'))
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
