/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { LogService } from './log.service';
import { Task } from '../models/task';
import { Util } from '../other/util';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
export class TaskOrderService {

    private serviceUrl: string = '';

    constructor(private http: HttpClient, private logService: LogService) { }

    init(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    createTask(task: Task): Observable<Task> {
        this.logService.debug('TaskService.createTask');
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.post<Task>(url, task, httpOptions).pipe(
            tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
            catchError(this.handleError<any>('TaskService.createTask'))
        );
    }

    loadAll(type: string): Observable<Task[]> {
        this.logService.debug('TaskService.loadAll');
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/allOrders?type=' + type);

        return this.http.get<any>(url, httpOptions).pipe(
            tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
            map(res => res.taskingOrders),
            catchError(this.handleError<any>('TaskService.loadAll'))
        );
    }

    loadById(id: string): Observable<Task> {
        this.logService.debug('TaskService.loadById');
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);

        return this.http.get<Task>(url, httpOptions).pipe(
            tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
            map(res => res),
            catchError(this.handleError<any>('TaskService.loadById'))
        );
    }

    deleteTaskingOrder(id: string): Observable<string> {
        this.logService.debug('TaskService.deleteTaskingOrder');
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);

        const deleteOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.delete(url, deleteOptions).pipe(
          tap(res => this.logService.debug(`    deleted task order successfully`)),
          map(res => res),
          catchError(this.handleError<any>('TaskService.deleteTaskingOrder'))
        );
      }

    updateTaskingOrder(task: Task): Observable<Task> {
        this.logService.debug('TaskService.updateTaskingOrder');
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder');

        return this.http.put(url, task, httpOptions).pipe(
            tap(res => this.logService.debug(`     updated task ${task.taskingOrderUuid}`)),
            map(res => res),
            catchError(this.handleError<any>('TaskService.updateTaskingOrder'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.logService.error(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
