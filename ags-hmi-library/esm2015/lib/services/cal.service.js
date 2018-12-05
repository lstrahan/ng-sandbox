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
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class CalService {
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
     * ***********************************************************************
     * GET /cal/task/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    getTask(uciTaskId) {
        this.logService.debug('CalService.getTask');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/cal/task/byUciTaskId/' + uciTaskId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Task successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} planId
     * @param {?} uciTaskId
     * @return {?}
     */
    addTaskToPlan(planId, uciTaskId) {
        this.logService.debug('CalService.addTaskToPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/cal/task/' + planId + '/byUciTaskId/' + uciTaskId);
        return this.http.put(url, httpOptions).pipe(tap(res => this.logService.debug(`    added Task successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    rejectTask(uciTaskId) {
        this.logService.debug('CalService.rejectTask');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/cal/task/reject/byUciTaskId/' + uciTaskId);
        return this.http.put(url, httpOptions).pipe(tap(res => this.logService.debug(`    Task rejected successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * Send task request
     * PUT cal/task/{eventId}/{planId}
     * ************************************************************************
     * @param {?} eventId
     * @param {?} planId
     * @return {?}
     */
    sendTaskingRequest(eventId, planId) {
        this.logService.debug('CalService.sendTaskRequest');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, `/cal/task/${eventId}/${planId}`);
        console.log('   ' + url);
        return this.http.put(url, '', { responseType: 'text' }).pipe(tap(res => this.logService.debug(`    task request sent`)), map(res => res));
    }
}
CalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CalService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ CalService.ngInjectableDef = i0.defineInjectable({ factory: function CalService_Factory() { return new CalService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: CalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2FsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFFbEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O01BR3JDLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUtELE1BQU0sT0FBTyxVQUFVOzs7OztJQUlyQixZQUFvQixJQUFnQixFQUMxQixVQUFzQjtRQURaLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUh4QixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBSWhDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7O0lBS0QsT0FBTyxDQUFDLFNBQWlCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O2NBQ3RDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO1FBRS9FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxFQUNwRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQUtELGFBQWEsQ0FBQyxNQUFjLEVBQUUsU0FBaUI7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Y0FDNUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLEdBQUcsTUFBTSxHQUFHLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFFOUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEVBQ2hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFLRCxVQUFVLENBQUMsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Y0FDekMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsR0FBRyxTQUFTLENBQUM7UUFFdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLEVBQ25FLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLE9BQWUsRUFBRSxNQUFjO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7O2NBQzlDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7UUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQzFELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7O1lBbkVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWRRLFVBQVU7WUFLVixVQUFVOzs7Ozs7OztJQVlqQixnQ0FBZ0M7Ozs7O0lBRXBCLDBCQUF3Qjs7Ozs7SUFDbEMsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9tb2RlbHMvdGFzayc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvY2FsL3Rhc2svYnlVY2lUYXNrSWQvJHt1Y2lUYXNrSWR9XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldFRhc2sodWNpVGFza0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQ2FsU2VydmljZS5nZXRUYXNrJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2NhbC90YXNrL2J5VWNpVGFza0lkLycgKyB1Y2lUYXNrSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFRhc2s+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIFRhc2sgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL2NhbC90YXNrLyR7dWNpVGFza0lkfS9ieVVjaVRhc2tJZC8ke3VjaVRhc2tJZH1cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgYWRkVGFza1RvUGxhbihwbGFuSWQ6IHN0cmluZywgdWNpVGFza0lkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQ2FsU2VydmljZS5hZGRUYXNrVG9QbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2NhbC90YXNrLycgKyBwbGFuSWQgKyAnL2J5VWNpVGFza0lkLycgKyB1Y2lUYXNrSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgYWRkZWQgVGFzayBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBVVCAvY2FsL3Rhc2svcmVqZWN0L2J5VWNpVGFza0lkLyR7dWNpVGFza0lkfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICByZWplY3RUYXNrKHVjaVRhc2tJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0NhbFNlcnZpY2UucmVqZWN0VGFzaycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9jYWwvdGFzay9yZWplY3QvYnlVY2lUYXNrSWQvJyArIHVjaVRhc2tJZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBUYXNrIHJlamVjdGVkIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogU2VuZCB0YXNrIHJlcXVlc3RcclxuICAgKiBQVVQgY2FsL3Rhc2sve2V2ZW50SWR9L3twbGFuSWR9XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHNlbmRUYXNraW5nUmVxdWVzdChldmVudElkOiBzdHJpbmcsIHBsYW5JZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0NhbFNlcnZpY2Uuc2VuZFRhc2tSZXF1ZXN0Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCBgL2NhbC90YXNrLyR7ZXZlbnRJZH0vJHtwbGFuSWR9YCk7XHJcbiAgICBjb25zb2xlLmxvZygnICAgJyArIHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCAnJywgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHRhc2sgcmVxdWVzdCBzZW50YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==