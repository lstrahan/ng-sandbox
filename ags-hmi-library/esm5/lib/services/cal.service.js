/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Util } from '../other/util';
import { LogService } from './log.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./log.service";
/** @type {?} */
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var CalService = /** @class */ (function () {
    function CalService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    CalService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**************************************************************************
     * GET /cal/task/byUciTaskId/${uciTaskId}
     **************************************************************************/
    /**
     * ***********************************************************************
     * GET /cal/task/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    CalService.prototype.getTask = /**
     * ***********************************************************************
     * GET /cal/task/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    function (uciTaskId) {
        var _this = this;
        this.logService.debug('CalService.getTask');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/cal/task/byUciTaskId/' + uciTaskId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Task successfully"); }), map(function (res) { return res; }));
    };
    /**************************************************************************
     * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
     **************************************************************************/
    /**
     * ***********************************************************************
     * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} planId
     * @param {?} uciTaskId
     * @return {?}
     */
    CalService.prototype.addTaskToPlan = /**
     * ***********************************************************************
     * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} planId
     * @param {?} uciTaskId
     * @return {?}
     */
    function (planId, uciTaskId) {
        var _this = this;
        this.logService.debug('CalService.addTaskToPlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/cal/task/' + planId + '/byUciTaskId/' + uciTaskId);
        return this.http.put(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    added Task successfully"); }), map(function (res) { return res; }));
    };
    /**************************************************************************
     * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
     **************************************************************************/
    /**
     * ***********************************************************************
     * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    CalService.prototype.rejectTask = /**
     * ***********************************************************************
     * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    function (uciTaskId) {
        var _this = this;
        this.logService.debug('CalService.rejectTask');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/cal/task/reject/byUciTaskId/' + uciTaskId);
        return this.http.put(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    Task rejected successfully"); }), map(function (res) { return res; }));
    };
    /**************************************************************************
     * Send task request
     * PUT cal/task/{eventId}/{planId}
     **************************************************************************/
    /**
     * ***********************************************************************
     * Send task request
     * PUT cal/task/{eventId}/{planId}
     * ************************************************************************
     * @param {?} eventId
     * @param {?} planId
     * @return {?}
     */
    CalService.prototype.sendTaskingRequest = /**
     * ***********************************************************************
     * Send task request
     * PUT cal/task/{eventId}/{planId}
     * ************************************************************************
     * @param {?} eventId
     * @param {?} planId
     * @return {?}
     */
    function (eventId, planId) {
        var _this = this;
        this.logService.debug('CalService.sendTaskRequest');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, "/cal/task/" + eventId + "/" + planId);
        console.log('   ' + url);
        return this.http.put(url, '', { responseType: 'text' }).pipe(tap(function (res) { return _this.logService.debug("    task request sent"); }), map(function (res) { return res; }));
    };
    CalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CalService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ CalService.ngInjectableDef = i0.defineInjectable({ factory: function CalService_Factory() { return new CalService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: CalService, providedIn: "root" });
    return CalService;
}());
export { CalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    CalService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    CalService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2FsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFFbEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBR3JDLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUVEO0lBT0Usb0JBQW9CLElBQWdCLEVBQzFCLFVBQXNCO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSHhCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFJaEMsQ0FBQzs7Ozs7SUFFRCx5QkFBSTs7OztJQUFKLFVBQUssVUFBa0I7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVEOztnRkFFNEU7Ozs7Ozs7O0lBQzVFLDRCQUFPOzs7Ozs7O0lBQVAsVUFBUSxTQUFpQjtRQUF6QixpQkFRQztRQVBDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O1lBQ3RDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO1FBRS9FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENB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Ozs7O0lBQ2xDLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL2NhbC90YXNrL2J5VWNpVGFza0lkLyR7dWNpVGFza0lkfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRUYXNrKHVjaVRhc2tJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYXNrPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0NhbFNlcnZpY2UuZ2V0VGFzaycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9jYWwvdGFzay9ieVVjaVRhc2tJZC8nICsgdWNpVGFza0lkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUYXNrPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBUYXNrIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUFVUIC9jYWwvdGFzay8ke3VjaVRhc2tJZH0vYnlVY2lUYXNrSWQvJHt1Y2lUYXNrSWR9XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZFRhc2tUb1BsYW4ocGxhbklkOiBzdHJpbmcsIHVjaVRhc2tJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0NhbFNlcnZpY2UuYWRkVGFza1RvUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9jYWwvdGFzay8nICsgcGxhbklkICsgJy9ieVVjaVRhc2tJZC8nICsgdWNpVGFza0lkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIFRhc2sgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL2NhbC90YXNrL3JlamVjdC9ieVVjaVRhc2tJZC8ke3VjaVRhc2tJZH1cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcmVqZWN0VGFzayh1Y2lUYXNrSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdDYWxTZXJ2aWNlLnJlamVjdFRhc2snKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvY2FsL3Rhc2svcmVqZWN0L2J5VWNpVGFza0lkLycgKyB1Y2lUYXNrSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgVGFzayByZWplY3RlZCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFNlbmQgdGFzayByZXF1ZXN0XHJcbiAgICogUFVUIGNhbC90YXNrL3tldmVudElkfS97cGxhbklkfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzZW5kVGFza2luZ1JlcXVlc3QoZXZlbnRJZDogc3RyaW5nLCBwbGFuSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdDYWxTZXJ2aWNlLnNlbmRUYXNrUmVxdWVzdCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgYC9jYWwvdGFzay8ke2V2ZW50SWR9LyR7cGxhbklkfWApO1xyXG4gICAgY29uc29sZS5sb2coJyAgICcgKyB1cmwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgJycsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB0YXNrIHJlcXVlc3Qgc2VudGApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=