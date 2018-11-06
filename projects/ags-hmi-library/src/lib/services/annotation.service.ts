import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable, of, forkJoin } from 'rxjs';
import { LogService } from './log.service';
import { Util } from '../other/util';
import { Annotation } from '../models/annotation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  serviceUrl: string = '';

  constructor(private http: HttpClient, private logService: LogService) { }

  init(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  /**************************************************************************
   * GET /annotation/{objectId}
   * get a list of Annotations
   **************************************************************************/
  getAnnotations(id: string): Observable<Annotation[]> {
    this.logService.debug('AnnotationService.getAnnotations()');
    const url = Util.urlJoin(this.serviceUrl, `/annotation/${id}`);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived annotation list`, res)),
      map(res => res.map(item => new Annotation(item))),
      catchError(this.handleError<any>('AnnotationService.getAnnotations'))
    );
  }

  /**************************************************************************
   * POST /annotation
   * create a new event
   **************************************************************************/
  createAnnotation(annotation: Annotation): Observable<any> {
    this.logService.debug('AnnotationService.createAnnotation()');
    const url = Util.urlJoin(this.serviceUrl, '/annotation');
    this.logService.debug(`    POST ${url}`, annotation);
    return this.http.post<any>(url, annotation.serialize(), httpOptions).pipe(
      tap(res => this.logService.debug(`    created annotation`, res)),
      // map(res => new Annotation(res)),
      catchError(this.handleError<Annotation>('AnnotationService.createAnnotation'))
    );
  }

  /**************************************************************************
   * PUT /annotation
   * update event
   **************************************************************************/
  updateAnnotation(annotation: Annotation): Observable<Annotation> {
    this.logService.debug('AnnotationService.updateAnnotation()');
    const url = Util.urlJoin(this.serviceUrl, '/annotation');
    this.logService.debug(`    PUT ${url}`, annotation);
    return this.http.put<Annotation>(url, annotation.serialize(), httpOptions).pipe(
      tap(res => this.logService.debug(`    updated annotation`, res)),
      map(res => new Annotation(res)),
      catchError(this.handleError<Annotation>('AnnotationService.updateAnnotation'))
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
