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
var SchedulerService = /** @class */ (function () {
    function SchedulerService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    SchedulerService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**************************************************************************
     * GET /schedule/solverTypes/${missionType}
     **************************************************************************/
    /**
     * ***********************************************************************
     * GET /schedule/solverTypes/${missionType}
     * ************************************************************************
     * @param {?} missionType
     * @return {?}
     */
    SchedulerService.prototype.getSolverTypes = /**
     * ***********************************************************************
     * GET /schedule/solverTypes/${missionType}
     * ************************************************************************
     * @param {?} missionType
     * @return {?}
     */
    function (missionType) {
        var _this = this;
        this.logService.debug('SchedulerService.getSolverTypes');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/schedule/solverTypes/' + missionType);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Solver Types successfully"); }), map(function (res) { return res.strings; }));
    };
    SchedulerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SchedulerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ SchedulerService.ngInjectableDef = i0.defineInjectable({ factory: function SchedulerService_Factory() { return new SchedulerService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: SchedulerService, providedIn: "root" });
    return SchedulerService;
}());
export { SchedulerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2NoZWR1bGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFFckMsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2hFO0FBRUQ7SUFPRSwwQkFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUloQyxDQUFDOzs7OztJQUVELCtCQUFJOzs7O0lBQUosVUFBSyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O2dGQUU0RTs7Ozs7Ozs7SUFDNUUseUNBQWM7Ozs7Ozs7SUFBZCxVQUFlLFdBQW1CO1FBQWxDLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7WUFDbkQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSx3QkFBd0IsR0FBRyxXQUFXLENBQUM7UUFFakYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLEVBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxPQUFPLEVBQVgsQ0FBVyxDQUFDLENBQ3hCLENBQUM7SUFDSixDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiUSxVQUFVO2dCQUtWLFVBQVU7OzsyQkFObkI7Q0F3Q0MsQUE1QkQsSUE0QkM7U0F6QlksZ0JBQWdCOzs7Ozs7SUFFM0Isc0NBQWdDOzs7OztJQUVwQixnQ0FBd0I7Ozs7O0lBQ2xDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlclNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9zY2hlZHVsZS9zb2x2ZXJUeXBlcy8ke21pc3Npb25UeXBlfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRTb2x2ZXJUeXBlcyhtaXNzaW9uVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdTY2hlZHVsZXJTZXJ2aWNlLmdldFNvbHZlclR5cGVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3NjaGVkdWxlL3NvbHZlclR5cGVzLycgKyBtaXNzaW9uVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBTb2x2ZXIgVHlwZXMgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5zdHJpbmdzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==