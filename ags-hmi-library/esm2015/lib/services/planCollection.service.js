/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { LogService } from './log.service';
import { Util } from '../other/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./log.service";
/** @type {?} */
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class PlanCollectionService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * @return {?}
     */
    loadAll() {
        this.logService.debug('PlanCollectionService.loadAll');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.planCollections));
    }
    /**
     * @return {?}
     */
    loadAllTypes() {
        this.logService.debug('PlanCollectionService.loadAllTypes');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/Type');
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived plan collection types ${name}`, res)), map(res => res.planTypes));
    }
    /**
     * @param {?} missionType
     * @return {?}
     */
    getAssetGroupType(missionType) {
        this.logService.debug('PlanCollectionService.loadAllTypes');
        return this.loadAllTypes().pipe(tap(res => this.logService.debug(`    retreived plan collection types ${name}`, res)), map(res => res.filter(p => p.hmiName === missionType)[0].assetGroup1));
    }
    /**
     * @param {?} missionId
     * @return {?}
     */
    loadById(missionId) {
        this.logService.debug('PlanCollectionService.loadById');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + missionId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res));
    }
    /**
     * @param {?} planCollection
     * @return {?}
     */
    create(planCollection) {
        this.logService.debug('PlanCollectionService.createPlanCollection');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.post(url, planCollection, httpOptions).pipe(tap(res => this.logService.debug(`    cerated Plan Collection ${name}`, res)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        this.logService.debug('PlanCollectionService.deletePlanCollection');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + id);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted Plan Collection successfully`)), map(res => res));
    }
    /**
     * @param {?} planCollection
     * @return {?}
     */
    update(planCollection) {
        this.logService.debug('PlanCollectionService.updatePlanCollection');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.put(url, planCollection, httpOptions).pipe(tap(res => this.logService.debug(`     updated Plan Collection ${planCollection.missionUUId}`)), map(res => res));
    }
}
PlanCollectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlanCollectionService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ PlanCollectionService.ngInjectableDef = i0.defineInjectable({ factory: function PlanCollectionService_Factory() { return new PlanCollectionService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: PlanCollectionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlanCollectionService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    PlanCollectionService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    PlanCollectionService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbkNvbGxlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wbGFuQ29sbGVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7TUFJL0IsV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ25FO0FBS0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFJOUIsWUFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUY1RCxlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRXdDLENBQUM7Ozs7O0lBRXpFLElBQUksQ0FBQyxVQUFrQjtRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7O2NBQ2pELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLENB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bnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IFBsYW5Db2xsZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3BsYW5Db2xsZWN0aW9uJztcclxuaW1wb3J0IHsgUGxhbkNvbGxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vbW9kZWxzL3BsYW5Db2xsZWN0aW9uVHlwZSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhbkNvbGxlY3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFsbCgpOiBPYnNlcnZhYmxlPFBsYW5Db2xsZWN0aW9uW10+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQWxsJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMucGxhbkNvbGxlY3Rpb25zKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFsbFR5cGVzKCk6IE9ic2VydmFibGU8UGxhbkNvbGxlY3Rpb25UeXBlW10+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQWxsVHlwZXMnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uL1R5cGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBwbGFuIGNvbGxlY3Rpb24gdHlwZXMgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5wbGFuVHlwZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldEdyb3VwVHlwZShtaXNzaW9uVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQWxsVHlwZXMnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEFsbFR5cGVzKCkucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgcGxhbiBjb2xsZWN0aW9uIHR5cGVzICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMuZmlsdGVyKHAgPT4gcC5obWlOYW1lID09PSBtaXNzaW9uVHlwZSlbMF0uYXNzZXRHcm91cDEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQnlJZChtaXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbkNvbGxlY3Rpb24+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQnlJZCcpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvUGxhbkNvbGxlY3Rpb24vYnlJZC8nICsgbWlzc2lvbklkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGxhbkNvbGxlY3Rpb24+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUocGxhbkNvbGxlY3Rpb246IFBsYW5Db2xsZWN0aW9uKTogT2JzZXJ2YWJsZTxQbGFuQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLmNyZWF0ZVBsYW5Db2xsZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQbGFuQ29sbGVjdGlvbj4odXJsLCBwbGFuQ29sbGVjdGlvbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY2VyYXRlZCBQbGFuIENvbGxlY3Rpb24gJHtuYW1lfWAsIHJlcykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuQ29sbGVjdGlvblNlcnZpY2UuZGVsZXRlUGxhbkNvbGxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uL2J5SWQvJyArIGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHN0cmluZz4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgUGxhbiBDb2xsZWN0aW9uIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUocGxhbkNvbGxlY3Rpb246IFBsYW5Db2xsZWN0aW9uKTogT2JzZXJ2YWJsZTxQbGFuQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLnVwZGF0ZVBsYW5Db2xsZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQbGFuQ29sbGVjdGlvbj4odXJsLCBwbGFuQ29sbGVjdGlvbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgIHVwZGF0ZWQgUGxhbiBDb2xsZWN0aW9uICR7cGxhbkNvbGxlY3Rpb24ubWlzc2lvblVVSWR9YCkpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=