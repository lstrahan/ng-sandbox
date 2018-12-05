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
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var TaskOrderService = /** @class */ (function () {
    function TaskOrderService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    TaskOrderService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**
     * @param {?} task
     * @return {?}
     */
    TaskOrderService.prototype.createTask = /**
     * @param {?} task
     * @return {?}
     */
    function (task) {
        var _this = this;
        this.logService.debug('TaskService.createTask');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.post(url, task, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }));
    };
    /**
     * @param {?} type
     * @return {?}
     */
    TaskOrderService.prototype.loadAll = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        this.logService.debug('TaskService.loadAll');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/taskingOrder/allOrders?type=' + type);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res.taskingOrders; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TaskOrderService.prototype.loadById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('TaskService.loadById');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TaskOrderService.prototype.deleteTaskingOrder = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('TaskService.deleteTaskingOrder');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted task order successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} task
     * @return {?}
     */
    TaskOrderService.prototype.updateTaskingOrder = /**
     * @param {?} task
     * @return {?}
     */
    function (task) {
        var _this = this;
        this.logService.debug('TaskService.updateTaskingOrder');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.put(url, task, httpOptions).pipe(tap(function (res) { return _this.logService.debug("     updated task " + task.taskingOrderUuid); }), map(function (res) { return res; }));
    };
    TaskOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TaskOrderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ TaskOrderService.ngInjectableDef = i0.defineInjectable({ factory: function TaskOrderService_Factory() { return new TaskOrderService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: TaskOrderService, providedIn: "root" });
    return TaskOrderService;
}());
export { TaskOrderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TaskOrderService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    TaskOrderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    TaskOrderService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Rhc2stb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBRS9CLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNuRTtBQUVEO0lBT0ksMEJBQW9CLElBQWdCLEVBQVUsVUFBc0I7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGNUQsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUV3QyxDQUFDOzs7OztJQUV6RSwrQkFBSTs7OztJQUFKLFVBQUssVUFBa0I7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsSUFBVTtRQUFyQixpQkFNQztRQUxHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O1lBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxFQUFFLElB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R0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUJBQXFCLElBQUksQ0FBQyxnQkFBa0IsQ0FBQyxFQUFuRSxDQUFtRSxDQUFDLEVBQy9FLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FDbEIsQ0FBQztJQUNOLENBQUM7O2dCQS9ESixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJNLFVBQVU7Z0JBR1YsVUFBVTs7OzJCQVZuQjtDQW1GQyxBQWpFRCxJQWlFQztTQTlEWSxnQkFBZ0I7Ozs7OztJQUV6QixzQ0FBZ0M7Ozs7O0lBRXBCLGdDQUF3Qjs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9tb2RlbHMvdGFzayc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIFRhc2tPcmRlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYXNrKHRhc2s6IFRhc2spOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmNyZWF0ZVRhc2snKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Rhc2tpbmdPcmRlcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUYXNrPih1cmwsIHRhc2ssIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBbGwodHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYXNrW10+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmxvYWRBbGwnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Rhc2tpbmdPcmRlci9hbGxPcmRlcnM/dHlwZT0nICsgdHlwZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy50YXNraW5nT3JkZXJzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VGFzaz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnVGFza1NlcnZpY2UubG9hZEJ5SWQnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Rhc2tpbmdPcmRlci8nICsgaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUYXNrPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFza2luZ09yZGVyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnVGFza1NlcnZpY2UuZGVsZXRlVGFza2luZ09yZGVyJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXIvJyArIGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxzdHJpbmc+KHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCB0YXNrIG9yZGVyIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNraW5nT3JkZXIodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnVGFza1NlcnZpY2UudXBkYXRlVGFza2luZ09yZGVyJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXInKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VGFzaz4odXJsLCB0YXNrLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICAgdXBkYXRlZCB0YXNrICR7dGFzay50YXNraW5nT3JkZXJVdWlkfWApKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19