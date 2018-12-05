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
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router, logService) {
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
    AuthenticationService.prototype.init = /**
     * @param {?} serviceUrl
     * @param {?=} loginRoute
     * @return {?}
     */
    function (serviceUrl, loginRoute) {
        if (loginRoute === void 0) { loginRoute = '/login'; }
        this.serviceUrl = serviceUrl;
        this.loginRoute = loginRoute;
        this.username = this.getUsernameFromStorage();
        this.isCurrentlyLoggedIn = ((this.username != null) && (this.username.length > 0));
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.redirectToLoginPage = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl(this.loginRoute);
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getAuthenticationServicePrefix = /**
     * @return {?}
     */
    function () {
        return this.serviceUrl;
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getUsernameFromStorage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var username = '';
        /** @type {?} */
        var userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('userName') &&
            (userInfo.userName.length > 0)) {
            username = userInfo.userName;
        }
        return username;
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getDisplayNameFromStorage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var displayName = '';
        /** @type {?} */
        var userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('displayName') &&
            (userInfo.displayName.length > 0)) {
            displayName = userInfo.displayName;
        }
        return displayName;
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getTokenFromStorage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var token = '';
        /** @type {?} */
        var userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('token') &&
            (userInfo.token.length > 0)) {
            token = userInfo.token;
        }
        return token;
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getUserInfoFromStorage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var userInfo;
        userInfo = sessionStorage.getItem(this.USERINFO_KEY);
        return JSON.parse(userInfo);
    };
    /**
     * @param {?} userInfo
     * @return {?}
     */
    AuthenticationService.prototype.putUserInfoInStorage = /**
     * @param {?} userInfo
     * @return {?}
     */
    function (userInfo) {
        sessionStorage.setItem(this.USERINFO_KEY, userInfo);
    };
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isCurrentlyLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "currentUser", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getUsernameFromStorage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "displayName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getDisplayNameFromStorage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getTokenFromStorage();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getAllDomains = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_DOMAINS);
        this.logService.debug('AuthenticationService.getAllDomains() - url = ' + url);
        return this.http.get(url, this.HTTP_OPTIONS).pipe(tap(function (x) { return _this.logService.debug("retreived domain list"); }), map(function (res) { return (/** @type {?} */ (res.strings)); }));
    };
    /**
     * @param {?} userInfo
     * @param {?} domain
     * @return {?}
     */
    AuthenticationService.prototype.logIn = /**
     * @param {?} userInfo
     * @param {?} domain
     * @return {?}
     */
    function (userInfo, domain) {
        var _this = this;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.AUTHENICATE, domain);
        /** @type {?} */
        var authenticationRequest = new AuthenticationRequest(userInfo);
        return this.http.post(url, authenticationRequest, this.HTTP_OPTIONS)
            .pipe(tap(function (response) {
            _this.logService.debug('got authentication response ' + JSON.stringify(response));
            /** @type {?} */
            var authenticationResponse = new AuthenticationResponse(response);
            if (authenticationResponse.authenticated) {
                _this.putUserInfoInStorage(JSON.stringify({
                    userName: userInfo.userName,
                    displayName: authenticationResponse.displayName,
                    token: authenticationResponse.token,
                }));
                _this.isCurrentlyLoggedIn = true;
            }
        }, function (error) {
            _this.logService.warn('Error authenticating.  [' + error + ']');
        }));
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.logOut = /**
     * @return {?}
     */
    function () {
        localStorage.removeItem(this.USERINFO_KEY);
        this.username = '';
        this.isCurrentlyLoggedIn = false;
        sessionStorage.clear();
        this.redirectToLoginPage();
    };
    AuthenticationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Router },
        { type: LogService }
    ]; };
    /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.inject(i1.HttpClient), i0.inject(i2.Router), i0.inject(i3.LogService)); }, token: AuthenticationService, providedIn: "root" });
    return AuthenticationService;
}());
export { AuthenticationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUV6RjtJQXFCRSwrQkFBb0IsSUFBZ0IsRUFDMUIsTUFBYyxFQUNkLFVBQXNCO1FBRlosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWxCeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUc7WUFDckIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRU0saUJBQVksR0FBVyxVQUFVLENBQUM7UUFFbEMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FB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QUUxQyxvREFBb0M7Ozs7O0lBQ3BDLHlDQUE4Qjs7Ozs7SUFFbEIscUNBQXdCOzs7OztJQUNsQyx1Q0FBc0I7Ozs7O0lBQ3RCLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlcXVlc3QsIEF1dGhlbnRpY2F0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvYXV0aGVudGljYXRpb24nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIGxvZ2luUm91dGU6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgQVVUSEVOSUNBVEUgPSAnL2F1dGhlbnRpY2F0ZSc7XHJcbiAgcHJpdmF0ZSBHRVRfRE9NQUlOUyA9ICcvZG9tYWluJztcclxuICBwcml2YXRlIEhUVFBfT1BUSU9OUyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgVVNFUklORk9fS0VZOiBzdHJpbmcgPSAndXNlckluZm8nO1xyXG5cclxuICBwcml2YXRlIGlzQ3VycmVudGx5TG9nZ2VkSW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcsIGxvZ2luUm91dGUgPSAnL2xvZ2luJykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgIHRoaXMubG9naW5Sb3V0ZSA9IGxvZ2luUm91dGU7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5nZXRVc2VybmFtZUZyb21TdG9yYWdlKCk7XHJcbiAgICB0aGlzLmlzQ3VycmVudGx5TG9nZ2VkSW4gPSAoKHRoaXMudXNlcm5hbWUgIT0gbnVsbCkgJiYgKHRoaXMudXNlcm5hbWUubGVuZ3RoID4gMCkpO1xyXG4gIH1cclxuXHJcbiAgcmVkaXJlY3RUb0xvZ2luUGFnZSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5sb2dpblJvdXRlKTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhlbnRpY2F0aW9uU2VydmljZVByZWZpeCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VybmFtZUZyb21TdG9yYWdlKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdXNlcm5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gdGhpcy5nZXRVc2VySW5mb0Zyb21TdG9yYWdlKCk7XHJcblxyXG4gICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmhhc093blByb3BlcnR5KCd1c2VyTmFtZScpICYmXHJcbiAgICAgICh1c2VySW5mby51c2VyTmFtZS5sZW5ndGggPiAwKSkge1xyXG4gICAgICB1c2VybmFtZSA9IHVzZXJJbmZvLnVzZXJOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1c2VybmFtZTtcclxuICB9XHJcblxyXG4gIGdldERpc3BsYXlOYW1lRnJvbVN0b3JhZ2UoKTogc3RyaW5nIHtcclxuICAgIGxldCBkaXNwbGF5TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgdXNlckluZm8gPSB0aGlzLmdldFVzZXJJbmZvRnJvbVN0b3JhZ2UoKTtcclxuXHJcbiAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaGFzT3duUHJvcGVydHkoJ2Rpc3BsYXlOYW1lJykgJiZcclxuICAgICAgKHVzZXJJbmZvLmRpc3BsYXlOYW1lLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIGRpc3BsYXlOYW1lID0gdXNlckluZm8uZGlzcGxheU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5Gcm9tU3RvcmFnZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRva2VuOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCB1c2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9Gcm9tU3RvcmFnZSgpO1xyXG5cclxuICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5oYXNPd25Qcm9wZXJ0eSgndG9rZW4nKSAmJlxyXG4gICAgICAodXNlckluZm8udG9rZW4ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgdG9rZW4gPSB1c2VySW5mby50b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mb0Zyb21TdG9yYWdlKCk6IGFueSB7XHJcbiAgICBsZXQgdXNlckluZm86IGFueTtcclxuICAgIHVzZXJJbmZvID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLlVTRVJJTkZPX0tFWSk7XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodXNlckluZm8pO1xyXG4gIH1cclxuXHJcbiAgcHV0VXNlckluZm9JblN0b3JhZ2UodXNlckluZm86IGFueSk6IHZvaWQge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLlVTRVJJTkZPX0tFWSwgdXNlckluZm8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlcm5hbWVGcm9tU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc3BsYXlOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheU5hbWVGcm9tU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRva2VuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5Gcm9tU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldEFsbERvbWFpbnMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfRE9NQUlOUyk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRBbGxEb21haW5zKCkgLSB1cmwgPSAnICsgdXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgdGhpcy5IVFRQX09QVElPTlMpLnBpcGUoXHJcbiAgICAgIHRhcCh4ID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgcmV0cmVpdmVkIGRvbWFpbiBsaXN0YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5zdHJpbmdzIGFzIHN0cmluZ1tdKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2dJbih1c2VySW5mbywgZG9tYWluOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEF1dGhlbnRpY2F0aW9uUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuQVVUSEVOSUNBVEUsIGRvbWFpbik7XHJcbiAgICBsZXQgYXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uUmVxdWVzdCh1c2VySW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEF1dGhlbnRpY2F0aW9uUmVzcG9uc2U+KHVybCwgYXV0aGVudGljYXRpb25SZXF1ZXN0LCB0aGlzLkhUVFBfT1BUSU9OUylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKFxyXG4gICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ2dvdCBhdXRoZW50aWNhdGlvbiByZXNwb25zZSAnICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UgPSBuZXcgwqBBdXRoZW50aWNhdGlvblJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucHV0VXNlckluZm9JblN0b3JhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJJbmZvLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYXV0aGVudGljYXRpb25SZXNwb25zZS50b2tlbixcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLndhcm4oJ0Vycm9yIGF1dGhlbnRpY2F0aW5nLiAgWycgKyBlcnJvciArICddJyk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2dPdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLlVTRVJJTkZPX0tFWSk7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gJyc7XHJcbiAgICB0aGlzLmlzQ3VycmVudGx5TG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB0aGlzLnJlZGlyZWN0VG9Mb2dpblBhZ2UoKTtcclxuICB9XHJcbn1cclxuIl19