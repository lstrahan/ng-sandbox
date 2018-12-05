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
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class CzmlService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * @param {?} planId
     * @param {?} targetId
     * @param {?=} missionId
     * @return {?}
     */
    getGroundTrackAndSensorVolume(planId, targetId, missionId) {
        /** @type {?} */
        let endpoint = `/czml/groundTrackAndSensorVolume/${planId}/${targetId}`;
        if (missionId) {
            endpoint = `${endpoint}/${missionId}`;
        }
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, endpoint);
        this.logService.debug('CzmlService.getGroundTrackAndSensorVolume()');
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug('    retrieved Czml')), map(res => res));
    }
    /**
     * Handle http operation that failed.
     *
     * @private
     * @template T
     * @param {?=} operation {string} name of the operation that failed
     * @param {?=} result {any} optional value to return as the observable result
     * @return {?}
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            this.logService.error(`${operation} failed: ${error.message}`);
            return of((/** @type {?} */ (result)));
        };
    }
}
CzmlService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CzmlService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ CzmlService.ngInjectableDef = i0.defineInjectable({ factory: function CzmlService_Factory() { return new CzmlService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: CzmlService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ptbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2N6bWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O01BRXBDLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUtELE1BQU0sT0FBTyxXQUFXOzs7OztJQUd0QixZQUNVLElBQWdCLEVBQ2hCLFVBQXNCO1FBRHRCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM1QixDQUFDOzs7OztJQUVMLElBQUksQ0FBQyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7O0lBRUQsNkJBQTZCLENBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsU0FBa0I7O1lBQzVFLFFBQVEsR0FBRyxvQ0FBb0MsTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUV2RSxJQUFJLFNBQVMsRUFBRTtZQUNiLFFBQVEsR0FBRyxHQUFHLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUN2Qzs7Y0FFSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7Ozs7SUFRTyxXQUFXLENBQUksU0FBUyxHQUFHLFdBQVcsRUFBRSxNQUFVO1FBQ3hELE9BQU8sQ0FBQyxLQUFVLEVBQWlCLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLFlBQVksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDL0QsT0FBTyxFQUFFLENBQUMsbUJBQUEsTUFBTSxFQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWlEsVUFBVTtZQUdWLFVBQVU7Ozs7Ozs7O0lBV2pCLGlDQUEyQjs7Ozs7SUFHekIsMkJBQXdCOzs7OztJQUN4QixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDem1sU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91bmRUcmFja0FuZFNlbnNvclZvbHVtZShwbGFuSWQ6IHN0cmluZywgdGFyZ2V0SWQ6IHN0cmluZywgbWlzc2lvbklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBlbmRwb2ludCA9IGAvY3ptbC9ncm91bmRUcmFja0FuZFNlbnNvclZvbHVtZS8ke3BsYW5JZH0vJHt0YXJnZXRJZH1gO1xyXG5cclxuICAgIGlmIChtaXNzaW9uSWQpIHtcclxuICAgICAgZW5kcG9pbnQgPSBgJHtlbmRwb2ludH0vJHttaXNzaW9uSWR9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCBlbmRwb2ludCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0N6bWxTZXJ2aWNlLmdldEdyb3VuZFRyYWNrQW5kU2Vuc29yVm9sdW1lKCknKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCcgICAgcmV0cmlldmVkIEN6bWwnKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEhhbmRsZSBodHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAqXHJcbiAgKiBAcGFyYW0gb3BlcmF0aW9uIHtzdHJpbmd9IG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICogQHBhcmFtIHJlc3VsdCB7YW55fSBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gYXMgdGhlIG9ic2VydmFibGUgcmVzdWx0XHJcbiAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmVycm9yKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=