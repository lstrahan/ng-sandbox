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
export class ExternalScheduleService {
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
     * POST /runInternalScheduler/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    runInternalScheduler(planId) {
        this.logService.debug('ExternalScheduleService.runInternalScheduler');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/runInternalScheduler/' + planId);
        return this.http.post(url, httpOptions).pipe(tap(res => this.logService.debug(`    RunInternal Scheduler successfull`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * POST /publishToLaso/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    publishToLaso(planId) {
        this.logService.debug('ExternalScheduleService.publishToLaso');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/publishToLaso/' + planId);
        return this.http.post(url, httpOptions).pipe(tap(res => this.logService.debug(`    Published To Laso successfully`)), map(res => res.status));
    }
    /**
     * ***********************************************************************
     * POST /spsEvent/${planId}
     * ************************************************************************
     * @param {?} spsEvent
     * @return {?}
     */
    create(spsEvent) {
        this.logService.debug('ExternalScheduleService.spsEvent');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/spsEvent');
        return this.http.post(url, spsEvent, httpOptions).pipe(tap(res => this.logService.debug(`    Stored sps Event successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * POST /publishToLaso/${planId}
     * ************************************************************************
     * @param {?} prohibitId
     * @return {?}
     */
    getLasoProhibit(prohibitId) {
        this.logService.debug('ExternalScheduleService.getLasoProhibit');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/getLasoProhibit/' + prohibitId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    Retrieved Laso Prohibit successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * POST /assetsWithMx/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    getAssetsWithMx(planId) {
        this.logService.debug('ExternalScheduleService.assetsWithMx');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/assetsWithMx/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    Retrieved assets with Mx successfully`)), map(res => res.strings));
    }
}
ExternalScheduleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExternalScheduleService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ ExternalScheduleService.ngInjectableDef = i0.defineInjectable({ factory: function ExternalScheduleService_Factory() { return new ExternalScheduleService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: ExternalScheduleService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExternalScheduleService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    ExternalScheduleService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ExternalScheduleService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWxTY2hlZHVsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4dGVybmFsU2NoZWR1bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztNQUdyQyxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakU7QUFLRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUlsQyxZQUFvQixJQUFnQixFQUMxQixVQUFzQjtRQURaLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUh4QixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBSWhDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7O0lBS0Qsb0JBQW9CLENBQUMsTUFBYztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDOztjQUNoRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztRQUU1RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxD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QVlqQiw2Q0FBZ0M7Ozs7O0lBRXBCLHVDQUF3Qjs7Ozs7SUFDbEMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3BzRXZlbnQgfSBmcm9tICcuLi9tb2RlbHMvc3BzRXZlbnQnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxTY2hlZHVsZVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBQT1NUIC9ydW5JbnRlcm5hbFNjaGVkdWxlci8ke3BsYW5JZH1cclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBydW5JbnRlcm5hbFNjaGVkdWxlcihwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0V4dGVybmFsU2NoZWR1bGVTZXJ2aWNlLnJ1bkludGVybmFsU2NoZWR1bGVyJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3J1bkludGVybmFsU2NoZWR1bGVyLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUnVuSW50ZXJuYWwgU2NoZWR1bGVyIHN1Y2Nlc3NmdWxsYCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFBPU1QgL3B1Ymxpc2hUb0xhc28vJHtwbGFuSWR9XHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcHVibGlzaFRvTGFzbyhwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0V4dGVybmFsU2NoZWR1bGVTZXJ2aWNlLnB1Ymxpc2hUb0xhc28nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcHVibGlzaFRvTGFzby8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFB1Ymxpc2hlZCBUbyBMYXNvIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuc3RhdHVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUE9TVCAvc3BzRXZlbnQvJHtwbGFuSWR9XHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY3JlYXRlKHNwc0V2ZW50OiBTcHNFdmVudCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0V4dGVybmFsU2NoZWR1bGVTZXJ2aWNlLnNwc0V2ZW50Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Nwc0V2ZW50Jyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBzcHNFdmVudCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgU3RvcmVkIHNwcyBFdmVudCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUE9TVCAvcHVibGlzaFRvTGFzby8ke3BsYW5JZH1cclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRMYXNvUHJvaGliaXQocHJvaGliaXRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTcHNFdmVudD4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFeHRlcm5hbFNjaGVkdWxlU2VydmljZS5nZXRMYXNvUHJvaGliaXQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZ2V0TGFzb1Byb2hpYml0LycgKyBwcm9oaWJpdElkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUmV0cmlldmVkIExhc28gUHJvaGliaXQgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFBPU1QgL2Fzc2V0c1dpdGhNeC8ke3BsYW5JZH1cclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBc3NldHNXaXRoTXgocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0V4dGVybmFsU2NoZWR1bGVTZXJ2aWNlLmFzc2V0c1dpdGhNeCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9hc3NldHNXaXRoTXgvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFJldHJpZXZlZCBhc3NldHMgd2l0aCBNeCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnN0cmluZ3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19