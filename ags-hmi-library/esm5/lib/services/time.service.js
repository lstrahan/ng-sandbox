/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var TimeService = /** @class */ (function () {
    function TimeService(http) {
        this.http = http;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    TimeService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**
     * @return {?}
     */
    TimeService.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.serviceUrl, { responseType: 'text' })
            .pipe(map(function (res) { return res; }));
    };
    TimeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TimeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ TimeService.ngInjectableDef = i0.defineInjectable({ factory: function TimeService_Factory() { return new TimeService(i0.inject(i1.HttpClient)); }, token: TimeService, providedIn: "root" });
    return TimeService;
}());
export { TimeService };
if (false) {
    /** @type {?} */
    TimeService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    TimeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RpbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckM7SUFPSSxxQkFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFJeEIsQ0FBQzs7Ozs7SUFFRCwwQkFBSTs7OztJQUFKLFVBQUssVUFBa0I7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUM1RCxJQUFJLENBQUMsR0FBRyxDQUNQLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FDWCxDQUFDLENBQUM7SUFFUCxDQUFDOztnQkF0Qk4sVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFOUSxVQUFVOzs7c0JBRG5CO0NBNkJDLEFBeEJELElBd0JDO1NBckJZLFdBQVc7OztJQUVwQixpQ0FBd0I7Ozs7O0lBR3BCLDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuXHJcbiAgICBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZpY2VVcmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcclxuICAgICAgICAgIC5waXBlKG1hcChcclxuICAgICAgICAgICAgcmVzID0+IHJlc1xyXG4gICAgICAgICAgKSk7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxufSJdfQ==