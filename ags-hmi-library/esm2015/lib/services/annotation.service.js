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
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class AnnotationService {
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
     * GET /annotation/{objectId}
     * get a list of Annotations
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    getAnnotations(id) {
        this.logService.debug('AnnotationService.getAnnotations()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, `/annotation/${id}`);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived annotation list`, res)), map(res => res.map(item => new Annotation(item))));
    }
    /**
     * ***********************************************************************
     * POST /annotation
     * create a new event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    createAnnotation(annotation) {
        this.logService.debug('AnnotationService.createAnnotation()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/annotation');
        this.logService.debug(`    POST ${url}`, annotation);
        return this.http.post(url, annotation.serialize(), httpOptions).pipe(tap(res => this.logService.debug(`    created annotation`, res)));
    }
    /**
     * ***********************************************************************
     * PUT /annotation
     * update event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    updateAnnotation(annotation) {
        this.logService.debug('AnnotationService.updateAnnotation()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/annotation');
        this.logService.debug(`    PUT ${url}`, annotation);
        return this.http.put(url, annotation.serialize(), httpOptions).pipe(tap(res => this.logService.debug(`    updated annotation`, res)), map(res => new Annotation(res)));
    }
}
AnnotationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AnnotationService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ AnnotationService.ngInjectableDef = i0.defineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: AnnotationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Fubm90YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7TUFFNUMsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ2pFO0FBS0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFJNUIsWUFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZwRSxlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRWdELENBQUM7Ozs7O0lBRXpFLElBQUksQ0FBQyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7Ozs7SUFNRCxjQUFjLENBQUMsRUFBVTtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDOztjQUN0RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxFQUFFLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUN2RSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsVUFBc0I7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7Y0FDeEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUVqRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsVUFBc0I7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7Y0FDeEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3RSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNoRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7O1lBckRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJRLFVBQVU7WUFHVixVQUFVOzs7OztJQWFqQix1Q0FBd0I7Ozs7O0lBRVosaUNBQXdCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yLCBPYnNlcnZhYmxlLCBvZiwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi9tb2RlbHMvYW5ub3RhdGlvbic7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uU2VydmljZSB7XHJcblxyXG4gIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkgeyB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9hbm5vdGF0aW9uL3tvYmplY3RJZH1cclxuICAgKiBnZXQgYSBsaXN0IG9mIEFubm90YXRpb25zXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFubm90YXRpb25zKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFubm90YXRpb25bXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uU2VydmljZS5nZXRBbm5vdGF0aW9ucygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCBgL2Fubm90YXRpb24vJHtpZH1gKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGFubm90YXRpb24gbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgQW5ub3RhdGlvbihpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUE9TVCAvYW5ub3RhdGlvblxyXG4gICAqIGNyZWF0ZSBhIG5ldyBldmVudFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjcmVhdGVBbm5vdGF0aW9uKGFubm90YXRpb246IEFubm90YXRpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uU2VydmljZS5jcmVhdGVBbm5vdGF0aW9uKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvYW5ub3RhdGlvbicpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUE9TVCAke3VybH1gLCBhbm5vdGF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgYW5ub3RhdGlvbi5zZXJpYWxpemUoKSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY3JlYXRlZCBhbm5vdGF0aW9uYCwgcmVzKSksXHJcbiAgICAgIC8vIG1hcChyZXMgPT4gbmV3IEFubm90YXRpb24ocmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL2Fubm90YXRpb25cclxuICAgKiB1cGRhdGUgZXZlbnRcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgdXBkYXRlQW5ub3RhdGlvbihhbm5vdGF0aW9uOiBBbm5vdGF0aW9uKTogT2JzZXJ2YWJsZTxBbm5vdGF0aW9uPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Fubm90YXRpb25TZXJ2aWNlLnVwZGF0ZUFubm90YXRpb24oKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9hbm5vdGF0aW9uJyk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBQVVQgJHt1cmx9YCwgYW5ub3RhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxBbm5vdGF0aW9uPih1cmwsIGFubm90YXRpb24uc2VyaWFsaXplKCksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgYW5ub3RhdGlvbmAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IG5ldyBBbm5vdGF0aW9uKHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19