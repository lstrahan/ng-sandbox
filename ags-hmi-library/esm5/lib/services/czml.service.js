/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Util } from '../other/util';
import { LogService } from './log.service';
import { tap, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./log.service";
/** @type {?} */
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var CzmlService = /** @class */ (function () {
    function CzmlService(http, logService) {
        this.http = http;
        this.logService = logService;
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    CzmlService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**
     * @param {?} planId
     * @param {?} targetId
     * @param {?=} missionId
     * @return {?}
     */
    CzmlService.prototype.getGroundTrackAndSensorVolume = /**
     * @param {?} planId
     * @param {?} targetId
     * @param {?=} missionId
     * @return {?}
     */
    function (planId, targetId, missionId) {
        var _this = this;
        /** @type {?} */
        var endpoint = "/czml/groundTrackAndSensorVolume/" + planId + "/" + targetId;
        if (missionId) {
            endpoint = endpoint + "/" + missionId;
        }
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, endpoint);
        this.logService.debug('CzmlService.getGroundTrackAndSensorVolume()');
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug('    retrieved Czml'); }), map(function (res) { return res; }));
    };
    /**
    * Handle http operation that failed.
    *
    * @param operation {string} name of the operation that failed
    * @param result {any} optional value to return as the observable result
    */
    /**
     * Handle http operation that failed.
     *
     * @private
     * @template T
     * @param {?=} operation {string} name of the operation that failed
     * @param {?=} result {any} optional value to return as the observable result
     * @return {?}
     */
    CzmlService.prototype.handleError = /**
     * Handle http operation that failed.
     *
     * @private
     * @template T
     * @param {?=} operation {string} name of the operation that failed
     * @param {?=} result {any} optional value to return as the observable result
     * @return {?}
     */
    function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logService.error(operation + " failed: " + error.message);
            return of((/** @type {?} */ (result)));
        };
    };
    CzmlService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CzmlService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ CzmlService.ngInjectableDef = i0.defineInjectable({ factory: function CzmlService_Factory() { return new CzmlService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: CzmlService, providedIn: "root" });
    return CzmlService;
}());
export { CzmlService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CzmlService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    CzmlService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    CzmlService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ptbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2N6bWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0lBRXBDLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUVEO0lBTUUscUJBQ1UsSUFBZ0IsRUFDaEIsVUFBc0I7UUFEdEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzVCLENBQUM7Ozs7O0lBRUwsMEJBQUk7Ozs7SUFBSixVQUFLLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7SUFFRCxtREFBNkI7Ozs7OztJQUE3QixVQUE4QixNQUFjLEVBQUUsUUFBZ0IsRUFBRSxTQUFrQjtRQUFsRixpQkFjQzs7WUFiSyxRQUFRLEdBQUcsc0NBQW9DLE1BQU0sU0FBSSxRQUFVO1FBRXZFLElBQUksU0FBUyxFQUFFO1lBQ2IsUUFBUSxHQUFNLFFBQVEsU0FBSSxTQUFXLENBQUM7U0FDdkM7O1lBRUssR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUVyRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQTNDLENBQTJDLENBQUMsRUFDdkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztNQUtFOzs7Ozs7Ozs7O0lBQ00saUNBQVc7Ozs7Ozs7OztJQUFuQixVQUF1QixTQUF1QixFQUFFLE1BQVU7UUFBMUQsaUJBS0M7UUFMc0IsMEJBQUEsRUFBQSx1QkFBdUI7UUFDNUMsT0FBTyxVQUFDLEtBQVU7WUFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUksU0FBUyxpQkFBWSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7WUFDL0QsT0FBTyxFQUFFLENBQUMsbUJBQUEsTUFBTSxFQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOztnQkExQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaUSxVQUFVO2dCQUdWLFVBQVU7OztzQkFKbkI7Q0FzREMsQUEzQ0QsSUEyQ0M7U0F4Q1ksV0FBVzs7Ozs7O0lBQ3RCLGlDQUEyQjs7Ozs7SUFHekIsMkJBQXdCOzs7OztJQUN4QixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDem1sU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91bmRUcmFja0FuZFNlbnNvclZvbHVtZShwbGFuSWQ6IHN0cmluZywgdGFyZ2V0SWQ6IHN0cmluZywgbWlzc2lvbklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBlbmRwb2ludCA9IGAvY3ptbC9ncm91bmRUcmFja0FuZFNlbnNvclZvbHVtZS8ke3BsYW5JZH0vJHt0YXJnZXRJZH1gO1xyXG5cclxuICAgIGlmIChtaXNzaW9uSWQpIHtcclxuICAgICAgZW5kcG9pbnQgPSBgJHtlbmRwb2ludH0vJHttaXNzaW9uSWR9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCBlbmRwb2ludCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0N6bWxTZXJ2aWNlLmdldEdyb3VuZFRyYWNrQW5kU2Vuc29yVm9sdW1lKCknKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCcgICAgcmV0cmlldmVkIEN6bWwnKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEhhbmRsZSBodHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAqXHJcbiAgKiBAcGFyYW0gb3BlcmF0aW9uIHtzdHJpbmd9IG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICogQHBhcmFtIHJlc3VsdCB7YW55fSBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gYXMgdGhlIG9ic2VydmFibGUgcmVzdWx0XHJcbiAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmVycm9yKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=