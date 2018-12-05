/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TimeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
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
     * @return {?}
     */
    getTime() {
        return this.http.get(this.serviceUrl, { responseType: 'text' })
            .pipe(map(res => res));
    }
}
TimeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TimeService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ TimeService.ngInjectableDef = i0.defineInjectable({ factory: function TimeService_Factory() { return new TimeService(i0.inject(i1.HttpClient)); }, token: TimeService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TimeService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    TimeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RpbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLckMsTUFBTSxPQUFPLFdBQVc7Ozs7SUFJcEIsWUFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFJeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBa0I7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELE9BQU87UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FDUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FDWCxDQUFDLENBQUM7SUFFUCxDQUFDOzs7WUF0Qk4sVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBTlEsVUFBVTs7Ozs7SUFTZixpQ0FBd0I7Ozs7O0lBR3BCLDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuXHJcbiAgICBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZpY2VVcmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcclxuICAgICAgICAgIC5waXBlKG1hcChcclxuICAgICAgICAgICAgcmVzID0+IHJlc1xyXG4gICAgICAgICAgKSk7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxufSJdfQ==