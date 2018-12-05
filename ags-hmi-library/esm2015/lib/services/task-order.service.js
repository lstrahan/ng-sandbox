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
export class TaskOrderService {
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
     * @param {?} task
     * @return {?}
     */
    createTask(task) {
        this.logService.debug('TaskService.createTask');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.post(url, task, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)));
    }
    /**
     * @param {?} type
     * @return {?}
     */
    loadAll(type) {
        this.logService.debug('TaskService.loadAll');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/allOrders?type=' + type);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.taskingOrders));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadById(id) {
        this.logService.debug('TaskService.loadById');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteTaskingOrder(id) {
        this.logService.debug('TaskService.deleteTaskingOrder');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted task order successfully`)), map(res => res));
    }
    /**
     * @param {?} task
     * @return {?}
     */
    updateTaskingOrder(task) {
        this.logService.debug('TaskService.updateTaskingOrder');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.put(url, task, httpOptions).pipe(tap(res => this.logService.debug(`     updated task ${task.taskingOrderUuid}`)), map(res => res));
    }
}
TaskOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TaskOrderService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ TaskOrderService.ngInjectableDef = i0.defineInjectable({ factory: function TaskOrderService_Factory() { return new TaskOrderService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: TaskOrderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Rhc2stb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O01BRS9CLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNuRTtBQUtELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSXpCLFlBQW9CLElBQWdCLEVBQVUsVUFBc0I7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGNUQsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUV3QyxDQUFDOzs7OztJQUV6RSxJQUFJLENBQUMsVUFBa0I7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBVTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOztjQUMxQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUs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SUFDTixDQUFDOzs7WUEvREosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYk0sVUFBVTtZQUdWLFVBQVU7Ozs7Ozs7O0lBYWYsc0NBQWdDOzs7OztJQUVwQixnQ0FBd0I7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBUYXNrT3JkZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFzayh0YXNrOiBUYXNrKTogT2JzZXJ2YWJsZTxUYXNrPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdUYXNrU2VydmljZS5jcmVhdGVUYXNrJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VGFzaz4odXJsLCB0YXNrLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWxsKHR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8VGFza1tdPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdUYXNrU2VydmljZS5sb2FkQWxsJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXIvYWxsT3JkZXJzP3R5cGU9JyArIHR5cGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMudGFza2luZ09yZGVycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmxvYWRCeUlkJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXIvJyArIGlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGFzaz4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tpbmdPcmRlcihpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmRlbGV0ZVRhc2tpbmdPcmRlcicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvdGFza2luZ09yZGVyLycgKyBpZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8c3RyaW5nPih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgdGFzayBvcmRlciBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza2luZ09yZGVyKHRhc2s6IFRhc2spOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLnVwZGF0ZVRhc2tpbmdPcmRlcicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvdGFza2luZ09yZGVyJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFRhc2s+KHVybCwgdGFzaywgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgIHVwZGF0ZWQgdGFzayAke3Rhc2sudGFza2luZ09yZGVyVXVpZH1gKSksXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==