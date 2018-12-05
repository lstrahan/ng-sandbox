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
var DraftPlanService = /** @class */ (function () {
    function DraftPlanService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    DraftPlanService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**************************************************************************
     * POST /plan/draftPlan/${planId}
  
     **************************************************************************/
    /**
     * ***********************************************************************
     * POST /plan/draftPlan/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    DraftPlanService.prototype.draftPlan = /**
     * ***********************************************************************
     * POST /plan/draftPlan/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.draftPlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/draftPlan/' + planId);
        return this.http.post(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    added PlanAsset successfully"); }), map(function (res) { return res; }));
    };
    DraftPlanService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DraftPlanService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ DraftPlanService.ngInjectableDef = i0.defineInjectable({ factory: function DraftPlanService_Factory() { return new DraftPlanService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: DraftPlanService, providedIn: "root" });
    return DraftPlanService;
}());
export { DraftPlanService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DraftPlanService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    DraftPlanService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DraftPlanService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZnRQbGFuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJhZnRQbGFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFFckMsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ2pFO0FBRUQ7SUFPRSwwQkFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUloQyxDQUFDOzs7OztJQUVELCtCQUFJOzs7O0lBQUosVUFBSyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztnRkFHNEU7Ozs7Ozs7O0lBQzVFLG9DQUFTOzs7Ozs7O0lBQVQsVUFBVSxNQUFjO1FBQXhCLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7WUFDekMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsR0FBRyxNQUFNLENBQUM7UUFFdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLEVBQ3JFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJRLFVBQVU7Z0JBS1YsVUFBVTs7OzJCQU5uQjtDQXlDQyxBQTdCRCxJQTZCQztTQTFCWSxnQkFBZ0I7Ozs7OztJQUUzQixzQ0FBZ0M7Ozs7O0lBRXBCLGdDQUF3Qjs7Ozs7SUFDbEMsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWZ0UGxhblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUE9TVCAvcGxhbi9kcmFmdFBsYW4vJHtwbGFuSWR9XHJcblxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkcmFmdFBsYW4ocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5kcmFmdFBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9kcmFmdFBsYW4vJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBQbGFuQXNzZXQgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=