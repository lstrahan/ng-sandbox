/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
import { Injectable, isDevMode } from '@angular/core';
import * as i0 from "@angular/core";
var LogService = /** @class */ (function () {
    function LogService() {
        this.isLocalhost = false;
        this.isDevMode = false;
        this.isLocalhost = window.location.hostname.toLocaleLowerCase() === 'localhost';
        this.isDevMode = isDevMode();
    }
    // displays in the console. will not display in a production build
    // displays in the console. will not display in a production build
    /**
     * @param {...?} msg
     * @return {?}
     */
    LogService.prototype.debug = 
    // displays in the console. will not display in a production build
    /**
     * @param {...?} msg
     * @return {?}
     */
    function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (!this.isDevMode) {
            return;
        }
        console.log.apply(console, tslib_1.__spread(msg));
    };
    // only display if running on localhost
    // only display if running on localhost
    /**
     * @param {...?} msg
     * @return {?}
     */
    LogService.prototype.local = 
    // only display if running on localhost
    /**
     * @param {...?} msg
     * @return {?}
     */
    function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (!this.isLocalhost) {
            return;
        }
        console.log.apply(console, tslib_1.__spread(msg));
    };
    /**
     * @param {...?} msg
     * @return {?}
     */
    LogService.prototype.info = /**
     * @param {...?} msg
     * @return {?}
     */
    function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log.apply(console, tslib_1.__spread(msg));
    };
    /**
     * @param {...?} msg
     * @return {?}
     */
    LogService.prototype.warn = /**
     * @param {...?} msg
     * @return {?}
     */
    function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.warn.apply(console, tslib_1.__spread(msg));
    };
    /**
     * @param {...?} msg
     * @return {?}
     */
    LogService.prototype.error = /**
     * @param {...?} msg
     * @return {?}
     */
    function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.error.apply(console, tslib_1.__spread(msg));
    };
    /**
     * @param {?} background
     * @param {?} msg
     * @return {?}
     */
    LogService.prototype.highlight = /**
     * @param {?} background
     * @param {?} msg
     * @return {?}
     */
    function (background, msg) {
        console.log("%c " + msg + " ", "background: " + background + "; color: #000; font-weight: bold;");
    };
    LogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LogService.ctorParameters = function () { return []; };
    /** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });
    return LogService;
}());
export { LogService };
if (false) {
    /** @type {?} */
    LogService.prototype.isLocalhost;
    /** @type {?} */
    LogService.prototype.isDevMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RDtJQVFFO1FBSEEsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGtFQUFrRTs7Ozs7O0lBQ2xFLDBCQUFLOzs7Ozs7SUFBTDtRQUFNLGFBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsd0JBQWE7O1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxtQkFBUSxHQUFHLEdBQUU7SUFDdEIsQ0FBQztJQUVELHVDQUF1Qzs7Ozs7O0lBQ3ZDLDBCQUFLOzs7Ozs7SUFBTDtRQUFNLGFBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsd0JBQWE7O1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxtQkFBUSxHQUFHLEdBQUU7SUFDdEIsQ0FBQzs7Ozs7SUFFRCx5QkFBSTs7OztJQUFKO1FBQUssYUFBYTthQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7WUFBYix3QkFBYTs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG1CQUFRLEdBQUcsR0FBRTtJQUN0QixDQUFDOzs7OztJQUVELHlCQUFJOzs7O0lBQUo7UUFBSyxhQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFiLHdCQUFhOztRQUNoQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sbUJBQVMsR0FBRyxHQUFFO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsMEJBQUs7Ozs7SUFBTDtRQUFNLGFBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsd0JBQWE7O1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLE9BQWIsT0FBTyxtQkFBVSxHQUFHLEdBQUU7SUFDeEIsQ0FBQzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxVQUFrQixFQUFFLEdBQVc7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFNLEdBQUcsTUFBRyxFQUFFLGlCQUFlLFVBQVUsc0NBQW1DLENBQUMsQ0FBQztJQUMxRixDQUFDOztnQkEzQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7cUJBVkQ7Q0FvREMsQUE1Q0QsSUE0Q0M7U0F6Q1ksVUFBVTs7O0lBRXJCLGlDQUE2Qjs7SUFDN0IsK0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xyXG5cclxuICBpc0xvY2FsaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRGV2TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaXNMb2NhbGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2xvY2FsaG9zdCc7XHJcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzcGxheXMgaW4gdGhlIGNvbnNvbGUuIHdpbGwgbm90IGRpc3BsYXkgaW4gYSBwcm9kdWN0aW9uIGJ1aWxkXHJcbiAgZGVidWcoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgLy8gb25seSBkaXNwbGF5IGlmIHJ1bm5pbmcgb24gbG9jYWxob3N0XHJcbiAgbG9jYWwoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9jYWxob3N0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICBpbmZvKC4uLm1zZzogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKC4uLm1zZzogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2FybiguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5lcnJvciguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0KGJhY2tncm91bmQ6IHN0cmluZywgbXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGAlYyAke21zZ30gYCwgYGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZH07IGNvbG9yOiAjMDAwOyBmb250LXdlaWdodDogYm9sZDtgKTtcclxuICB9XHJcbn1cclxuIl19