/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { LogService } from '../services/log.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/authentication.service";
import * as i2 from "../services/log.service";
export class AuthGuard {
    /**
     * @param {?} authenticationService
     * @param {?} logService
     */
    constructor(authenticationService, logService) {
        this.authenticationService = authenticationService;
        this.logService = logService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (!this.authenticationService.isLoggedIn) {
            this.logService.debug('guard - not logged in!!');
            this.authenticationService.redirectToLoginPage();
            return false;
        }
        return true;
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: LogService }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(i1.AuthenticationService), i0.inject(i2.LogService)); }, token: AuthGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9vdGhlci9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUtyRCxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFFcEIsWUFBb0IscUJBQTRDLEVBQ3RELFVBQXNCO1FBRFosMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ2hDLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FDVCxJQUE0QixFQUM1QixLQUEwQjtRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2pELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxxQkFBcUI7WUFDckIsVUFBVTs7Ozs7Ozs7SUFPTCwwQ0FBb0Q7Ozs7O0lBQzlELCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG5cclxuICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbikge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ2d1YXJkIC0gbm90IGxvZ2dlZCBpbiEhJyk7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VG9Mb2dpblBhZ2UoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=