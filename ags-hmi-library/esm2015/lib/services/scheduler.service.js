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
export class SchedulerService {
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
     * GET /schedule/solverTypes/${missionType}
     * ************************************************************************
     * @param {?} missionType
     * @return {?}
     */
    getSolverTypes(missionType) {
        this.logService.debug('SchedulerService.getSolverTypes');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/schedule/solverTypes/' + missionType);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Solver Types successfully`)), map(res => res.strings));
    }
}
SchedulerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SchedulerService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ SchedulerService.ngInjectableDef = i0.defineInjectable({ factory: function SchedulerService_Factory() { return new SchedulerService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: SchedulerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchedulerService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    SchedulerService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    SchedulerService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZWR1bGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7TUFFckMsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2hFO0FBS0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFJM0IsWUFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUloQyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQUtELGNBQWMsQ0FBQyxXQUFtQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDOztjQUNuRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztRQUVqRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsRUFDNUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJRLFVBQVU7WUFLVixVQUFVOzs7Ozs7OztJQVdqQixzQ0FBZ0M7Ozs7O0lBRXBCLGdDQUF3Qjs7Ozs7SUFDbEMsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL3NjaGVkdWxlL3NvbHZlclR5cGVzLyR7bWlzc2lvblR5cGV9XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldFNvbHZlclR5cGVzKG1pc3Npb25UeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1NjaGVkdWxlclNlcnZpY2UuZ2V0U29sdmVyVHlwZXMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvc2NoZWR1bGUvc29sdmVyVHlwZXMvJyArIG1pc3Npb25UeXBlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIFNvbHZlciBUeXBlcyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnN0cmluZ3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19