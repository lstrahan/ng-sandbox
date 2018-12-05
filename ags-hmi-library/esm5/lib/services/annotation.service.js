/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { LogService } from './log.service';
import { Util } from '../other/util';
import { Annotation } from '../models/annotation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./log.service";
/** @type {?} */
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var AnnotationService = /** @class */ (function () {
    function AnnotationService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    AnnotationService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**************************************************************************
     * GET /annotation/{objectId}
     * get a list of Annotations
     **************************************************************************/
    /**
     * ***********************************************************************
     * GET /annotation/{objectId}
     * get a list of Annotations
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    AnnotationService.prototype.getAnnotations = /**
     * ***********************************************************************
     * GET /annotation/{objectId}
     * get a list of Annotations
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('AnnotationService.getAnnotations()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, "/annotation/" + id);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived annotation list", res); }), map(function (res) { return res.map(function (item) { return new Annotation(item); }); }));
    };
    /**************************************************************************
     * POST /annotation
     * create a new event
     **************************************************************************/
    /**
     * ***********************************************************************
     * POST /annotation
     * create a new event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    AnnotationService.prototype.createAnnotation = /**
     * ***********************************************************************
     * POST /annotation
     * create a new event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    function (annotation) {
        var _this = this;
        this.logService.debug('AnnotationService.createAnnotation()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/annotation');
        this.logService.debug("    POST " + url, annotation);
        return this.http.post(url, annotation.serialize(), httpOptions).pipe(tap(function (res) { return _this.logService.debug("    created annotation", res); }));
    };
    /**************************************************************************
     * PUT /annotation
     * update event
     **************************************************************************/
    /**
     * ***********************************************************************
     * PUT /annotation
     * update event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    AnnotationService.prototype.updateAnnotation = /**
     * ***********************************************************************
     * PUT /annotation
     * update event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    function (annotation) {
        var _this = this;
        this.logService.debug('AnnotationService.updateAnnotation()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/annotation');
        this.logService.debug("    PUT " + url, annotation);
        return this.http.put(url, annotation.serialize(), httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated annotation", res); }), map(function (res) { return new Annotation(res); }));
    };
    AnnotationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AnnotationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ AnnotationService.ngInjectableDef = i0.defineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: AnnotationService, providedIn: "root" });
    return AnnotationService;
}());
export { AnnotationService };
if (false) {
    /** @type {?} */
    AnnotationService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    AnnotationService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AnnotationService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Fubm90YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUFFNUMsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ2pFO0FBRUQ7SUFPRSwyQkFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZwRSxlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRWdELENBQUM7Ozs7O0lBRXpFLGdDQUFJOzs7O0lBQUosVUFBSyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztnRkFHNEU7Ozs7Ozs7OztJQUM1RSwwQ0FBYzs7Ozs7Ozs7SUFBZCxVQUFlLEVBQVU7UUFBekIsaUJBUUM7UUFQQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDOztZQUN0RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFlLEVBQUksQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEdBQUcsQ0FBQyxFQUEzRCxDQUEyRCxDQUFDLEVBQ3ZFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDO0lBRUQ7OztnRkFHNEU7Ozs7Ozs7OztJQUM1RSw0Q0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQWlCLFVBQXNCO1FBQXZDLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7WUFDeEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBWSxHQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FFakUsQ0FBQztJQUNKLENBQUM7SUFFRDs7O2dGQUc0RTs7Ozs7Ozs7O0lBQzVFLDRDQUFnQjs7Ozs7Ozs7SUFBaEIsVUFBaUIsVUFBc0I7UUFBdkMsaUJBUUM7UUFQQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDOztZQUN4RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFXLEdBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxFQUNoRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBckRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBYlEsVUFBVTtnQkFHVixVQUFVOzs7NEJBSm5CO0NBbUVDLEFBdkRELElBdURDO1NBcERZLGlCQUFpQjs7O0lBRTVCLHVDQUF3Qjs7Ozs7SUFFWixpQ0FBd0I7Ozs7O0lBQUUsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUsIG9mLCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hbm5vdGF0aW9uJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL2Fubm90YXRpb24ve29iamVjdElkfVxyXG4gICAqIGdldCBhIGxpc3Qgb2YgQW5ub3RhdGlvbnNcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QW5ub3RhdGlvbnMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QW5ub3RhdGlvbltdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Fubm90YXRpb25TZXJ2aWNlLmdldEFubm90YXRpb25zKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIGAvYW5ub3RhdGlvbi8ke2lkfWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgYW5ub3RhdGlvbiBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBBbm5vdGF0aW9uKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQT1NUIC9hbm5vdGF0aW9uXHJcbiAgICogY3JlYXRlIGEgbmV3IGV2ZW50XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNyZWF0ZUFubm90YXRpb24oYW5ub3RhdGlvbjogQW5ub3RhdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Fubm90YXRpb25TZXJ2aWNlLmNyZWF0ZUFubm90YXRpb24oKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9hbm5vdGF0aW9uJyk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBQT1NUICR7dXJsfWAsIGFubm90YXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBhbm5vdGF0aW9uLnNlcmlhbGl6ZSgpLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBjcmVhdGVkIGFubm90YXRpb25gLCByZXMpKSxcclxuICAgICAgLy8gbWFwKHJlcyA9PiBuZXcgQW5ub3RhdGlvbihyZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBVVCAvYW5ub3RhdGlvblxyXG4gICAqIHVwZGF0ZSBldmVudFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICB1cGRhdGVBbm5vdGF0aW9uKGFubm90YXRpb246IEFubm90YXRpb24pOiBPYnNlcnZhYmxlPEFubm90YXRpb24+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvblNlcnZpY2UudXBkYXRlQW5ub3RhdGlvbigpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2Fubm90YXRpb24nKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFBVVCAke3VybH1gLCBhbm5vdGF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PEFubm90YXRpb24+KHVybCwgYW5ub3RhdGlvbi5zZXJpYWxpemUoKSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBhbm5vdGF0aW9uYCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gbmV3IEFubm90YXRpb24ocmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=