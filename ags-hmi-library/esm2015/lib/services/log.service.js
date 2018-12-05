/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
import { Injectable, isDevMode } from '@angular/core';
import * as i0 from "@angular/core";
export class LogService {
    constructor() {
        this.isLocalhost = false;
        this.isDevMode = false;
        this.isLocalhost = window.location.hostname.toLocaleLowerCase() === 'localhost';
        this.isDevMode = isDevMode();
    }
    // displays in the console. will not display in a production build
    /**
     * @param {...?} msg
     * @return {?}
     */
    debug(...msg) {
        if (!this.isDevMode) {
            return;
        }
        console.log(...msg);
    }
    // only display if running on localhost
    /**
     * @param {...?} msg
     * @return {?}
     */
    local(...msg) {
        if (!this.isLocalhost) {
            return;
        }
        console.log(...msg);
    }
    /**
     * @param {...?} msg
     * @return {?}
     */
    info(...msg) {
        console.log(...msg);
    }
    /**
     * @param {...?} msg
     * @return {?}
     */
    warn(...msg) {
        console.warn(...msg);
    }
    /**
     * @param {...?} msg
     * @return {?}
     */
    error(...msg) {
        console.error(...msg);
    }
    /**
     * @param {?} background
     * @param {?} msg
     * @return {?}
     */
    highlight(background, msg) {
        console.log(`%c ${msg} `, `background: ${background}; color: #000; font-weight: bold;`);
    }
}
LogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LogService.ctorParameters = () => [];
/** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LogService.prototype.isLocalhost;
    /** @type {?} */
    LogService.prototype.isDevMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3RELE1BQU0sT0FBTyxVQUFVO0lBS3JCO1FBSEEsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsR0FBVTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsR0FBVTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxHQUFVO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLEdBQVU7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsR0FBVTtRQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFVBQWtCLEVBQUUsR0FBVztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsZUFBZSxVQUFVLG1DQUFtQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7O1lBM0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUdDLGlDQUE2Qjs7SUFDN0IsK0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xyXG5cclxuICBpc0xvY2FsaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRGV2TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaXNMb2NhbGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2xvY2FsaG9zdCc7XHJcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzcGxheXMgaW4gdGhlIGNvbnNvbGUuIHdpbGwgbm90IGRpc3BsYXkgaW4gYSBwcm9kdWN0aW9uIGJ1aWxkXHJcbiAgZGVidWcoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgLy8gb25seSBkaXNwbGF5IGlmIHJ1bm5pbmcgb24gbG9jYWxob3N0XHJcbiAgbG9jYWwoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9jYWxob3N0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICBpbmZvKC4uLm1zZzogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKC4uLm1zZzogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2FybiguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5lcnJvciguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0KGJhY2tncm91bmQ6IHN0cmluZywgbXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGAlYyAke21zZ30gYCwgYGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZH07IGNvbG9yOiAjMDAwOyBmb250LXdlaWdodDogYm9sZDtgKTtcclxuICB9XHJcbn1cclxuIl19