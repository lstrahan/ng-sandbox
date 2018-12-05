/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { LogService } from './log.service';
import { Util } from '../other/util';
import { AuthenticationRequest, AuthenticationResponse } from '../models/authentication';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "./log.service";
export class AuthenticationService {
    /**
     * @param {?} http
     * @param {?} router
     * @param {?} logService
     */
    constructor(http, router, logService) {
        this.http = http;
        this.router = router;
        this.logService = logService;
        this.serviceUrl = '';
        this.loginRoute = '';
        this.AUTHENICATE = '/authenticate';
        this.GET_DOMAINS = '/domain';
        this.HTTP_OPTIONS = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'accept': 'application/json',
            })
        };
        this.USERINFO_KEY = 'userInfo';
        this.isCurrentlyLoggedIn = false;
        this.username = '';
    }
    /**
     * @param {?} serviceUrl
     * @param {?=} loginRoute
     * @return {?}
     */
    init(serviceUrl, loginRoute = '/login') {
        this.serviceUrl = serviceUrl;
        this.loginRoute = loginRoute;
        this.username = this.getUsernameFromStorage();
        this.isCurrentlyLoggedIn = ((this.username != null) && (this.username.length > 0));
    }
    /**
     * @return {?}
     */
    redirectToLoginPage() {
        this.router.navigateByUrl(this.loginRoute);
    }
    /**
     * @return {?}
     */
    getAuthenticationServicePrefix() {
        return this.serviceUrl;
    }
    /**
     * @return {?}
     */
    getUsernameFromStorage() {
        /** @type {?} */
        let username = '';
        /** @type {?} */
        let userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('userName') &&
            (userInfo.userName.length > 0)) {
            username = userInfo.userName;
        }
        return username;
    }
    /**
     * @return {?}
     */
    getDisplayNameFromStorage() {
        /** @type {?} */
        let displayName = '';
        /** @type {?} */
        let userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('displayName') &&
            (userInfo.displayName.length > 0)) {
            displayName = userInfo.displayName;
        }
        return displayName;
    }
    /**
     * @return {?}
     */
    getTokenFromStorage() {
        /** @type {?} */
        let token = '';
        /** @type {?} */
        let userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('token') &&
            (userInfo.token.length > 0)) {
            token = userInfo.token;
        }
        return token;
    }
    /**
     * @return {?}
     */
    getUserInfoFromStorage() {
        /** @type {?} */
        let userInfo;
        userInfo = sessionStorage.getItem(this.USERINFO_KEY);
        return JSON.parse(userInfo);
    }
    /**
     * @param {?} userInfo
     * @return {?}
     */
    putUserInfoInStorage(userInfo) {
        sessionStorage.setItem(this.USERINFO_KEY, userInfo);
    }
    /**
     * @return {?}
     */
    get isLoggedIn() {
        return this.isCurrentlyLoggedIn;
    }
    /**
     * @return {?}
     */
    get currentUser() {
        return this.getUsernameFromStorage();
    }
    /**
     * @return {?}
     */
    get displayName() {
        return this.getDisplayNameFromStorage();
    }
    /**
     * @return {?}
     */
    get token() {
        return this.getTokenFromStorage();
    }
    /**
     * @return {?}
     */
    getAllDomains() {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_DOMAINS);
        this.logService.debug('AuthenticationService.getAllDomains() - url = ' + url);
        return this.http.get(url, this.HTTP_OPTIONS).pipe(tap(x => this.logService.debug(`retreived domain list`)), map(res => (/** @type {?} */ (res.strings))));
    }
    /**
     * @param {?} userInfo
     * @param {?} domain
     * @return {?}
     */
    logIn(userInfo, domain) {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.AUTHENICATE, domain);
        /** @type {?} */
        let authenticationRequest = new AuthenticationRequest(userInfo);
        return this.http.post(url, authenticationRequest, this.HTTP_OPTIONS)
            .pipe(tap(response => {
            this.logService.debug('got authentication response ' + JSON.stringify(response));
            /** @type {?} */
            let authenticationResponse = new AuthenticationResponse(response);
            if (authenticationResponse.authenticated) {
                this.putUserInfoInStorage(JSON.stringify({
                    userName: userInfo.userName,
                    displayName: authenticationResponse.displayName,
                    token: authenticationResponse.token,
                }));
                this.isCurrentlyLoggedIn = true;
            }
        }, error => {
            this.logService.warn('Error authenticating.  [' + error + ']');
        }));
    }
    /**
     * @return {?}
     */
    logOut() {
        localStorage.removeItem(this.USERINFO_KEY);
        this.username = '';
        this.isCurrentlyLoggedIn = false;
        sessionStorage.clear();
        this.redirectToLoginPage();
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: Router },
    { type: LogService }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.inject(i1.HttpClient), i0.inject(i2.Router), i0.inject(i3.LogService)); }, token: AuthenticationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.loginRoute;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.AUTHENICATE;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.GET_DOMAINS;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.HTTP_OPTIONS;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.USERINFO_KEY;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.isCurrentlyLoggedIn;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.username;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthenticationService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUt6RixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFrQmhDLFlBQW9CLElBQWdCLEVBQzFCLE1BQWMsRUFDZCxVQUFzQjtRQUZaLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQnhCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFHLGVBQWUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixpQkFBWSxHQUFHO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsUUFBUSxFQUFFLGtCQUFrQjthQUM3QixDQUFDO1NBQ0gsQ0FBQztRQUVNLGlCQUFZLEdBQVcsVUFBVSxDQUFDO1FBRWxDLHdC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QUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7b0JBQzNCLFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxXQUFXO29CQUMvQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsS0FBSztpQkFDcEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzthQUNqQztRQUNILENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELE1BQU07UUFDSixZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFsSkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsVUFBVTtZQUNWLE1BQU07WUFHTixVQUFVOzs7Ozs7OztJQVNqQiwyQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFnQzs7Ozs7SUFDaEMsNENBQXNDOzs7OztJQUN0Qyw0Q0FBZ0M7Ozs7O0lBQ2hDLDZDQUtFOzs7OztJQUVGLDZDQUEwQzs7Ozs7SUFFMUMsb0RBQW9DOzs7OztJQUNwQyx5Q0FBOEI7Ozs7O0lBRWxCLHFDQUF3Qjs7Ozs7SUFDbEMsdUNBQXNCOzs7OztJQUN0QiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXF1ZXN0LCBBdXRoZW50aWNhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBsb2dpblJvdXRlOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIEFVVEhFTklDQVRFID0gJy9hdXRoZW50aWNhdGUnO1xyXG4gIHByaXZhdGUgR0VUX0RPTUFJTlMgPSAnL2RvbWFpbic7XHJcbiAgcHJpdmF0ZSBIVFRQX09QVElPTlMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBwcml2YXRlIFVTRVJJTkZPX0tFWTogc3RyaW5nID0gJ3VzZXJJbmZvJztcclxuXHJcbiAgcHJpdmF0ZSBpc0N1cnJlbnRseUxvZ2dlZEluID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nLCBsb2dpblJvdXRlID0gJy9sb2dpbicpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB0aGlzLmxvZ2luUm91dGUgPSBsb2dpblJvdXRlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHRoaXMuZ2V0VXNlcm5hbWVGcm9tU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluID0gKCh0aGlzLnVzZXJuYW1lICE9IG51bGwpICYmICh0aGlzLnVzZXJuYW1lLmxlbmd0aCA+IDApKTtcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0VG9Mb2dpblBhZ2UoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubG9naW5Sb3V0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoZW50aWNhdGlvblNlcnZpY2VQcmVmaXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcm5hbWVGcm9tU3RvcmFnZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHVzZXJuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCB1c2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9Gcm9tU3RvcmFnZSgpO1xyXG5cclxuICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5oYXNPd25Qcm9wZXJ0eSgndXNlck5hbWUnKSAmJlxyXG4gICAgICAodXNlckluZm8udXNlck5hbWUubGVuZ3RoID4gMCkpIHtcclxuICAgICAgdXNlcm5hbWUgPSB1c2VySW5mby51c2VyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlcm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXREaXNwbGF5TmFtZUZyb21TdG9yYWdlKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgZGlzcGxheU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gdGhpcy5nZXRVc2VySW5mb0Zyb21TdG9yYWdlKCk7XHJcblxyXG4gICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmhhc093blByb3BlcnR5KCdkaXNwbGF5TmFtZScpICYmXHJcbiAgICAgICh1c2VySW5mby5kaXNwbGF5TmFtZS5sZW5ndGggPiAwKSkge1xyXG4gICAgICBkaXNwbGF5TmFtZSA9IHVzZXJJbmZvLmRpc3BsYXlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG4gIGdldFRva2VuRnJvbVN0b3JhZ2UoKTogc3RyaW5nIHtcclxuICAgIGxldCB0b2tlbjogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgdXNlckluZm8gPSB0aGlzLmdldFVzZXJJbmZvRnJvbVN0b3JhZ2UoKTtcclxuXHJcbiAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaGFzT3duUHJvcGVydHkoJ3Rva2VuJykgJiZcclxuICAgICAgKHVzZXJJbmZvLnRva2VuLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHRva2VuID0gdXNlckluZm8udG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm9Gcm9tU3RvcmFnZSgpOiBhbnkge1xyXG4gICAgbGV0IHVzZXJJbmZvOiBhbnk7XHJcbiAgICB1c2VySW5mbyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5VU0VSSU5GT19LRVkpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJJbmZvKTtcclxuICB9XHJcblxyXG4gIHB1dFVzZXJJbmZvSW5TdG9yYWdlKHVzZXJJbmZvOiBhbnkpOiB2b2lkIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5VU0VSSU5GT19LRVksIHVzZXJJbmZvKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNDdXJyZW50bHlMb2dnZWRJbjtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50VXNlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFVzZXJuYW1lRnJvbVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlOYW1lRnJvbVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCB0b2tlbigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuRnJvbVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRBbGxEb21haW5zKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0RPTUFJTlMpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0QWxsRG9tYWlucygpIC0gdXJsID0gJyArIHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIHRoaXMuSFRUUF9PUFRJT05TKS5waXBlKFxyXG4gICAgICB0YXAoeCA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYHJldHJlaXZlZCBkb21haW4gbGlzdGApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuc3RyaW5ncyBhcyBzdHJpbmdbXSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9nSW4odXNlckluZm8sIGRvbWFpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvblJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkFVVEhFTklDQVRFLCBkb21haW4pO1xyXG4gICAgbGV0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvblJlcXVlc3QodXNlckluZm8pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBdXRoZW50aWNhdGlvblJlc3BvbnNlPih1cmwsIGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgdGhpcy5IVFRQX09QVElPTlMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChcclxuICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdnb3QgYXV0aGVudGljYXRpb24gcmVzcG9uc2UgJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblJlc3BvbnNlID0gbmV3IMKgQXV0aGVudGljYXRpb25SZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGlvblJlc3BvbnNlLmF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnB1dFVzZXJJbmZvSW5TdG9yYWdlKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VySW5mby51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBhdXRoZW50aWNhdGlvblJlc3BvbnNlLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNDdXJyZW50bHlMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nU2VydmljZS53YXJuKCdFcnJvciBhdXRoZW50aWNhdGluZy4gIFsnICsgZXJyb3IgKyAnXScpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9nT3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5VU0VSSU5GT19LRVkpO1xyXG4gICAgdGhpcy51c2VybmFtZSA9ICcnO1xyXG4gICAgdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdGhpcy5yZWRpcmVjdFRvTG9naW5QYWdlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==