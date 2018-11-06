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
import { Util } from '../other/util';
import { PlanCollection } from '../models/planCollection';
import { PlanCollectionType } from '../models/planCollectionType';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class PlanCollectionService {

    private serviceUrl: string = '';

    constructor(private http: HttpClient, private logService: LogService) { }

    init(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    loadAll(): Observable<PlanCollection[]> {
        this.logService.debug('PlanCollectionService.loadAll');
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');

        return this.http.get<any>(url, httpOptions).pipe(
            tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
            map(res => res.planCollections),
            catchError(this.handleError<any>('PlanCollectionervice.loadAll'))
        );
    }

    loadAllTypes(): Observable<PlanCollectionType[]> {
        this.logService.debug('PlanCollectionService.loadAllTypes');
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/Type');

        return this.http.get<any>(url, httpOptions).pipe(
            tap(res => this.logService.debug(`    retreived plan collection types ${name}`, res)),
            map(res => res.planTypes),
            catchError(this.handleError<any>('PlanCollectionervice.loadAllTypes'))
        );
    }

    getAssetGroupType(missionType:string): Observable<string> {
        this.logService.debug('PlanCollectionService.loadAllTypes');

        return this.loadAllTypes().pipe(
            tap(res => this.logService.debug(`    retreived plan collection types ${name}`, res)),
            map(res => res.filter(p => p.hmiName == missionType)[0].assetGroup1),
            catchError(this.handleError<any>('PlanCollectionervice.loadAllTypes'))
        );
    }

    loadById(missionId: string): Observable<PlanCollection> {
        this.logService.debug('PlanCollectionService.loadById');
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + missionId);

        return this.http.get<PlanCollection>(url, httpOptions).pipe(
            tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
            map(res => res),
            catchError(this.handleError<any>('PlanCollectionService.loadById'))
        );
    }

    create(planCollection: PlanCollection): Observable<PlanCollection> {
        this.logService.debug('PlanCollectionService.createPlanCollection');
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.post<PlanCollection>(url, planCollection, httpOptions).pipe(
            tap(res => this.logService.debug(`    cerated Plan Collection ${name}`, res)),
            catchError(this.handleError<any>('PlanCollectionService.createTasPlanCollection'))
        );
    }

    delete(id: string): Observable<string> {
        this.logService.debug('PlanCollectionService.deletePlanCollection');
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + id);

        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.delete(url, deleteOptions).pipe(
            tap(res => this.logService.debug(`    deleted Plan Collection successfully`)),
            map(res => res),
            catchError(this.handleError<any>('PlanCollectionService.deletePlanCollection'))
        );
    }

    update(planCollection: PlanCollection): Observable<PlanCollection> {
        this.logService.debug('PlanCollectionService.updatePlanCollection');
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');

        return this.http.put(url, planCollection, httpOptions).pipe(
            tap(res => this.logService.debug(`     updated Plan Collection ${planCollection.missionUUId}`)),
            map(res => res),
            catchError(this.handleError<any>('PlanCollectionService.updatePlanCollection'))
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
