/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
function CacheContent() { }
if (false) {
    /** @type {?} */
    CacheContent.prototype.expiry;
    /** @type {?} */
    CacheContent.prototype.value;
}
/**
 * Cache Service is an observables based in-memory cache implementation
 * Keeps track of in-flight observables and sets a default expiry for cached values
 */
var CacheService = /** @class */ (function () {
    function CacheService() {
        this.cache = new Map();
        this.DEFAULT_MAX_AGE = 300000;
    }
    /**
     * Gets the value from cache if the key is provided.
     */
    /**
     * Gets the value from cache if the key is provided.
     * @param {?} key
     * @param {?=} fallback
     * @param {?=} maxAge
     * @return {?}
     */
    CacheService.prototype.get = /**
     * Gets the value from cache if the key is provided.
     * @param {?} key
     * @param {?=} fallback
     * @param {?=} maxAge
     * @return {?}
     */
    function (key, fallback, maxAge) {
        var _this = this;
        if (this.hasValidCachedValue(key)) {
            console.log("%cGetting from cache " + key, 'color: green');
            return of(this.cache.get(key).value);
        }
        if (!maxAge) {
            maxAge = this.DEFAULT_MAX_AGE;
        }
        if (fallback && fallback instanceof Observable) {
            console.log("%c Calling api for " + key, 'color: purple');
            return fallback.pipe(tap(function (value) { _this.set(key, value, maxAge); /*console.log(`%c added ${key}/${JSON.stringify(value).substr(0, 50)} to cache`, 'color: purple');*/ }));
        }
        else {
            return observableThrowError('Requested key is not available in Cache');
        }
    };
    /**
     * Sets the value with key in the cache
     * Notifies all observers of the new value
     */
    /**
     * Sets the value with key in the cache
     * Notifies all observers of the new value
     * @param {?} key
     * @param {?} value
     * @param {?=} maxAge
     * @return {?}
     */
    CacheService.prototype.set = /**
     * Sets the value with key in the cache
     * Notifies all observers of the new value
     * @param {?} key
     * @param {?} value
     * @param {?=} maxAge
     * @return {?}
     */
    function (key, value, maxAge) {
        if (maxAge === void 0) { maxAge = this.DEFAULT_MAX_AGE; }
        this.cache.set(key, { value: value, expiry: Date.now() + maxAge });
    };
    /**
     * Checks if the a key exists in cache
     */
    /**
     * Checks if the a key exists in cache
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.has = /**
     * Checks if the a key exists in cache
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.cache.has(key);
    };
    /**
    * Delete cache entry
    */
    /**
     * Delete cache entry
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.delete = /**
     * Delete cache entry
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.cache.delete(key);
    };
    /**
     * Checks if the key exists and has not expired.
     */
    /**
     * Checks if the key exists and has not expired.
     * @private
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.hasValidCachedValue = /**
     * Checks if the key exists and has not expired.
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.cache.has(key)) {
            if (this.cache.get(key).expiry < Date.now()) {
                this.cache.delete(key);
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    CacheService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ CacheService.ngInjectableDef = i0.defineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });
    return CacheService;
}());
export { CacheService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CacheService.prototype.cache;
    /** @type {?} */
    CacheService.prototype.DEFAULT_MAX_AGE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jYWNoZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLElBQUksb0JBQW9CLEVBQUcsVUFBVSxFQUFlLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXJDLDJCQUdDOzs7SUFGQyw4QkFBZTs7SUFDZiw2QkFBVzs7Ozs7O0FBT2I7SUFBQTtRQUlVLFVBQUssR0FBOEIsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFDbEUsb0JBQWUsR0FBVyxNQUFNLENBQUM7S0E0RDNDO0lBMURDOztPQUVHOzs7Ozs7OztJQUNILDBCQUFHOzs7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsUUFBMEIsRUFBRSxNQUFlO1FBQTVELGlCQWlCQztRQWZDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEdBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMzRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMvQjtRQUVELElBQUksUUFBUSxJQUFJLFFBQVEsWUFBWSxVQUFVLEVBQUU7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsR0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQzFELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLElBQU8sS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUUsb0dBQW9HLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvSzthQUFNO1lBQ0wsT0FBTyxvQkFBb0IsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7O0lBQ0gsMEJBQUc7Ozs7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBVSxFQUFFLE1BQXFDO1FBQXJDLHVCQUFBLEVBQUEsU0FBaUIsSUFBSSxDQUFDLGVBQWU7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCwwQkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFQTs7TUFFRTs7Ozs7O0lBQ0gsNkJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLDBDQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLEdBQVc7UUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O2dCQWhFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7dUJBaEJEO0NBK0VDLEFBakVELElBaUVDO1NBOURZLFlBQVk7Ozs7OztJQUN2Qiw2QkFBMkU7O0lBQzNFLHVDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7dGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgIE9ic2VydmFibGUgLCAgU3ViamVjdCAsICBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgQ2FjaGVDb250ZW50IHtcclxuICBleHBpcnk6IG51bWJlcjtcclxuICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQ2FjaGUgU2VydmljZSBpcyBhbiBvYnNlcnZhYmxlcyBiYXNlZCBpbi1tZW1vcnkgY2FjaGUgaW1wbGVtZW50YXRpb25cclxuICogS2VlcHMgdHJhY2sgb2YgaW4tZmxpZ2h0IG9ic2VydmFibGVzIGFuZCBzZXRzIGEgZGVmYXVsdCBleHBpcnkgZm9yIGNhY2hlZCB2YWx1ZXNcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjYWNoZTogTWFwPHN0cmluZywgQ2FjaGVDb250ZW50PiA9IG5ldyBNYXA8c3RyaW5nLCBDYWNoZUNvbnRlbnQ+KCk7XHJcbiAgcmVhZG9ubHkgREVGQVVMVF9NQVhfQUdFOiBudW1iZXIgPSAzMDAwMDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHZhbHVlIGZyb20gY2FjaGUgaWYgdGhlIGtleSBpcyBwcm92aWRlZC5cclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcsIGZhbGxiYWNrPzogT2JzZXJ2YWJsZTxhbnk+LCBtYXhBZ2U/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4gfCBTdWJqZWN0PGFueT4ge1xyXG5cclxuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2FjaGVkVmFsdWUoa2V5KSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWNHZXR0aW5nIGZyb20gY2FjaGUgJHtrZXl9YCwgJ2NvbG9yOiBncmVlbicpO1xyXG4gICAgICByZXR1cm4gb2YodGhpcy5jYWNoZS5nZXQoa2V5KS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFtYXhBZ2UpIHtcclxuICAgICAgbWF4QWdlID0gdGhpcy5ERUZBVUxUX01BWF9BR0U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZhbGxiYWNrICYmIGZhbGxiYWNrIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWMgQ2FsbGluZyBhcGkgZm9yICR7a2V5fWAsICdjb2xvcjogcHVycGxlJyk7XHJcbiAgICAgIHJldHVybiBmYWxsYmFjay5waXBlKHRhcCgodmFsdWUpID0+IHsgdGhpcy5zZXQoa2V5LCB2YWx1ZSwgbWF4QWdlKTsgIC8qY29uc29sZS5sb2coYCVjIGFkZGVkICR7a2V5fS8ke0pTT04uc3RyaW5naWZ5KHZhbHVlKS5zdWJzdHIoMCwgNTApfSB0byBjYWNoZWAsICdjb2xvcjogcHVycGxlJyk7Ki8gfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKCdSZXF1ZXN0ZWQga2V5IGlzIG5vdCBhdmFpbGFibGUgaW4gQ2FjaGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHZhbHVlIHdpdGgga2V5IGluIHRoZSBjYWNoZVxyXG4gICAqIE5vdGlmaWVzIGFsbCBvYnNlcnZlcnMgb2YgdGhlIG5ldyB2YWx1ZVxyXG4gICAqL1xyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbWF4QWdlOiBudW1iZXIgPSB0aGlzLkRFRkFVTFRfTUFYX0FHRSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZS5zZXQoa2V5LCB7IHZhbHVlOiB2YWx1ZSwgZXhwaXJ5OiBEYXRlLm5vdygpICsgbWF4QWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBhIGtleSBleGlzdHMgaW4gY2FjaGVcclxuICAgKi9cclxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlLmhhcyhrZXkpO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIERlbGV0ZSBjYWNoZSBlbnRyeVxyXG4gICAqL1xyXG4gIGRlbGV0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUga2V5IGV4aXN0cyBhbmQgaGFzIG5vdCBleHBpcmVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFzVmFsaWRDYWNoZWRWYWx1ZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgaWYgKHRoaXMuY2FjaGUuZ2V0KGtleSkuZXhwaXJ5IDwgRGF0ZS5ub3coKSkge1xyXG4gICAgICAgIHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=