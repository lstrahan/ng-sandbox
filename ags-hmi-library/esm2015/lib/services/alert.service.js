/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';
import * as i0 from "@angular/core";
export class AlertService {
    constructor() { }
    /**
     * @private
     * @return {?}
     */
    get wss() {
        if (!this._wss || this._wss.closed) {
            console.log('AlertService: create WebSocketSubject');
            this._wss = new WebSocketSubject(this._wssConfig);
        }
        else {
            console.log('AlertService: WebSocketSubject already created');
        }
        return this._wss;
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        if (this._wss) {
            this._wss.unsubscribe();
            this._wss = null;
        }
        this._wssConfig = {
            url: serviceUrl,
            closeObserver: {
                next: (e) => {
                    console.log(`%c WEBSOCKET CLOSED `, `background: black; color: #fff; font-weight: bold;`, 'Attempting to reconnect...');
                }
            },
            openObserver: {
                next: (e) => {
                    console.log(`%c WEBSOCKET OPEN `, `background: green; color: #fff; font-weight: bold;`);
                }
            }
        };
        this.serviceUrl = serviceUrl;
    }
    /**
     * @return {?}
     */
    getMessages() {
        return this.wss.pipe(
        // Adds ability to reconnect a disconnected websocket
        // @see https://stackoverflow.com/a/44067972
        retry(), map(res => res) // this can be used to modify the incoming message
        );
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    sendMessage(msg) {
        this.wss.next(msg);
    }
}
AlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertService.ctorParameters = () => [];
/** @nocollapse */ AlertService.ngInjectableDef = i0.defineInjectable({ factory: function AlertService_Factory() { return new AlertService(); }, token: AlertService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype._wssConfig;
    /**
     * @type {?}
     * @private
     */
    AlertService.prototype._wss;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQTJCLE1BQU0sZ0JBQWdCLENBQUM7O0FBSzNFLE1BQU0sT0FBTyxZQUFZO0lBZXZCLGdCQUFnQixDQUFDOzs7OztJQVZqQixJQUFZLEdBQUc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBSUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxDQUFDLENBQWEsRUFBRSxFQUFFO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLG9EQUFvRCxFQUFFLDRCQUE0QixDQUFDLENBQUM7Z0JBQzFILENBQUM7YUFDRjtZQUNELFlBQVksRUFBRTtnQkFDWixJQUFJLEVBQUUsQ0FBQyxDQUFRLEVBQUUsRUFBRTtvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxvREFBb0QsQ0FBQyxDQUFDO2dCQUMxRixDQUFDO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtRQUNsQixxREFBcUQ7UUFDckQsNENBQTRDO1FBQzVDLEtBQUssRUFBRSxFQUNQLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtEQUFrRDtTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBRztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OztZQXRERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFHQyxrQ0FBbUI7Ozs7O0lBQ25CLGtDQUFnRDs7Ozs7SUFDaEQsNEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgV2ViU29ja2V0U3ViamVjdCwgV2ViU29ja2V0U3ViamVjdENvbmZpZyAgfSBmcm9tICdyeGpzL3dlYlNvY2tldCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw7XHJcbiAgcHJpdmF0ZSBfd3NzQ29uZmlnOiBXZWJTb2NrZXRTdWJqZWN0Q29uZmlnPGFueT47XHJcbiAgcHJpdmF0ZSBfd3NzOiBXZWJTb2NrZXRTdWJqZWN0PGFueT47XHJcbiAgcHJpdmF0ZSBnZXQgd3NzKCk6IFdlYlNvY2tldFN1YmplY3Q8YW55PiB7XHJcbiAgICBpZiAoIXRoaXMuX3dzcyB8fCB0aGlzLl93c3MuY2xvc2VkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBbGVydFNlcnZpY2U6IGNyZWF0ZSBXZWJTb2NrZXRTdWJqZWN0Jyk7XHJcbiAgICAgIHRoaXMuX3dzcyA9IG5ldyBXZWJTb2NrZXRTdWJqZWN0KHRoaXMuX3dzc0NvbmZpZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnQWxlcnRTZXJ2aWNlOiBXZWJTb2NrZXRTdWJqZWN0IGFscmVhZHkgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3dzcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fd3NzKSB7XHJcbiAgICAgIHRoaXMuX3dzcy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLl93c3MgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3dzc0NvbmZpZyA9IHtcclxuICAgICAgdXJsOiBzZXJ2aWNlVXJsLFxyXG4gICAgICBjbG9zZU9ic2VydmVyOiB7XHJcbiAgICAgICAgbmV4dDogKGU6IENsb3NlRXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBXRUJTT0NLRVQgQ0xPU0VEIGAsIGBiYWNrZ3JvdW5kOiBibGFjazsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkO2AsICdBdHRlbXB0aW5nIHRvIHJlY29ubmVjdC4uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3Blbk9ic2VydmVyOiB7XHJcbiAgICAgICAgbmV4dDogKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgV0VCU09DS0VUIE9QRU4gYCwgYGJhY2tncm91bmQ6IGdyZWVuOyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMud3NzLnBpcGUoXHJcbiAgICAgIC8vIEFkZHMgYWJpbGl0eSB0byByZWNvbm5lY3QgYSBkaXNjb25uZWN0ZWQgd2Vic29ja2V0XHJcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0MDY3OTcyXHJcbiAgICAgIHJldHJ5KCksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKSAvLyB0aGlzIGNhbiBiZSB1c2VkIHRvIG1vZGlmeSB0aGUgaW5jb21pbmcgbWVzc2FnZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKG1zZykge1xyXG4gICAgdGhpcy53c3MubmV4dChtc2cpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19