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
export class DraftPlanService {
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
     * POST /plan/draftPlan/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    draftPlan(planId) {
        this.logService.debug('PlanService.draftPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/draftPlan/' + planId);
        return this.http.post(url, httpOptions).pipe(tap(res => this.logService.debug(`    added PlanAsset successfully`)), map(res => res));
    }
}
DraftPlanService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DraftPlanService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ DraftPlanService.ngInjectableDef = i0.defineInjectable({ factory: function DraftPlanService_Factory() { return new DraftPlanService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: DraftPlanService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZnRQbGFuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZHJhZnRQbGFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7TUFFckMsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ2pFO0FBS0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFJM0IsWUFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUloQyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQU1ELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2NBQ3pDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO1FBRXRFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxFQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFiUSxVQUFVO1lBS1YsVUFBVTs7Ozs7Ozs7SUFXakIsc0NBQWdDOzs7OztJQUVwQixnQ0FBd0I7Ozs7O0lBQ2xDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFmdFBsYW5TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBPU1QgL3BsYW4vZHJhZnRQbGFuLyR7cGxhbklkfVxyXG5cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZHJhZnRQbGFuKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZHJhZnRQbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vZHJhZnRQbGFuLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgYWRkZWQgUGxhbkFzc2V0IHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19