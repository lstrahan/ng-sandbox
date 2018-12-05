/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from '../../services/log.service';
import { AuthenticationResponse } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication.service';
export class LoginComponent {
    /**
     * @param {?} formBuilder
     * @param {?} router
     * @param {?} route
     * @param {?} logService
     * @param {?} authenticationService
     */
    constructor(formBuilder, router, route, logService, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.logService = logService;
        this.authenticationService = authenticationService;
        this.appName = '';
        this.returnUrl = '';
        this.ERROR_MESSAGES = {
            loginMessage: 'Unable to Sign In, try again.',
        };
        this.domainList = new Array();
        this.selectedDomain = 'cos';
        this.loginFailed = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.appName = this.route.snapshot.data['appName'];
        this.route.queryParams.subscribe(params => {
            this.returnUrl = params['return'] || '/';
        });
        /** @type {?} */
        let component = this;
        this.authenticationService.getAllDomains()
            .subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                component.domainList.push(response[i]);
            }
            component.selectedDomain = component.domainList[0];
        });
        this.createForm();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Set the focus to the username (mwt)
        this.username.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    createForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [
                // Validators.required,
                // Validators.minLength(1),
                // Validators.maxLength(50)
                ]],
            password: ['', [
                // Validators.required,
                // Validators.minLength(3),
                // Validators.maxLength(50)
                ]],
            domain: [{ value: this.selectedDomain, disabled: false }, [
                    Validators.required,
                ]],
        });
    }
    /**
     * @return {?}
     */
    logIn() {
        this.submitted = true;
        /** @type {?} */
        let username = this.loginForm.controls.username.value;
        /** @type {?} */
        let password = this.loginForm.controls.password.value;
        this.authenticationService.logIn({
            userName: username,
            password: password
        }, this.selectedDomain)
            .subscribe(res => {
            /** @type {?} */
            let authenticationResponse = new AuthenticationResponse(res);
            if (!authenticationResponse.authenticated) {
                this.loginFailed = true;
            }
            else {
                this.router.navigateByUrl(this.returnUrl);
            }
        }, err => {
            this.logService.debug('Error occured while authenticating.  ' + JSON.stringify(err));
            this.loginFailed = true;
        });
    }
    /**
     * @return {?}
     */
    handleOnFocus() {
        if (this.submitted) {
            this.submitted = false;
            this.loginFailed = false;
            this.loginForm.markAsPristine();
            this.loginForm.markAsUntouched();
        }
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-login',
                template: "<mat-card>\r\n\r\n  <!-- class for styling only -->\r\n  <form class=\"loginForm\" [formGroup]=\"loginForm\" #inputForm=\"ngForm\" (ngSubmit)=\"logIn()\" fxLayout=\"column\">\r\n\r\n    <div fxLayoutAlign=\"space-between start\">\r\n      <img id=\"logo\" src=\"assets/images/Boeing-logo-dark.svg\">\r\n      <h4 class=\"mat-subheading-1\">{{appName}}</h4>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"fill\" hideRequiredMarker=\"true\">\r\n      <input matInput #username formControlName=\"username\" (focus)=\"handleOnFocus()\">\r\n      <mat-label>Username</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <input matInput formControlName=\"password\" (focus)=\"handleOnFocus()\" type=\"password\">\r\n      <mat-label>Password</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-select [(value)]=\"selectedDomain\" formControlName=\"domain\">\r\n        <mat-option *ngFor=\"let domain of domainList\" [value]=\"domain\">\r\n          {{domain}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-label>Domain</mat-label>\r\n    </mat-form-field>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"left\">\r\n      <button mat-flat-button id=\"submit\" type=\"submit\" [disabled]=\"username.value.length === 0\">\r\n        SIGN IN\r\n      </button>\r\n    </div>\r\n    \r\n    <!-- Invalid login message. -->\r\n    <div [hidden]=\"!(submitted && loginFailed)\">\r\n      <mat-error id=\"formError\">{{ERROR_MESSAGES.loginMessage}}</mat-error>\r\n    </div>\r\n\r\n  </form>\r\n</mat-card>",
                styles: [".mat-form-field{width:100%}.mat-error{padding:10px;text-align:center}.mat-card{background:inherit}button#submit{width:100%}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Router },
    { type: ActivatedRoute },
    { type: LogService },
    { type: AuthenticationService }
];
LoginComponent.propDecorators = {
    appName: [{ type: Input }],
    username: [{ type: ViewChild, args: ['username',] }]
};
if (false) {
    /** @type {?} */
    LoginComponent.prototype.appName;
    /** @type {?} */
    LoginComponent.prototype.username;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.returnUrl;
    /** @type {?} */
    LoginComponent.prototype.ERROR_MESSAGES;
    /** @type {?} */
    LoginComponent.prototype.domainList;
    /** @type {?} */
    LoginComponent.prototype.selectedDomain;
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.loginFailed;
    /** @type {?} */
    LoginComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.logService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1CLFNBQVMsRUFBWSxLQUFLLEVBQUcsU0FBUyxFQUFHLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBUTlFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7OztJQWlCekIsWUFBb0IsV0FBd0IsRUFDbEMsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLFVBQXNCLEVBQ3RCLHFCQUE0QztRQUpsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBbkI3QyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFeEIsbUJBQWMsR0FBOEI7WUFDakQsWUFBWSxFQUFFLCtCQUErQjtTQUM5QyxDQUFDO1FBQ0ssZUFBVSxHQUFhLElBQUksS0FBSyxFQUFVLENBQUM7UUFDM0MsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHdkIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Is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S0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7OztZQXhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGlsREFBcUM7O2FBRXRDOzs7O1lBWG1CLFdBQVc7WUFDdEIsTUFBTTtZQUFFLGNBQWM7WUFFdEIsVUFBVTtZQUVWLHFCQUFxQjs7O3NCQVUzQixLQUFLO3VCQUNMLFNBQVMsU0FBQyxVQUFVOzs7O0lBRHJCLGlDQUE4Qjs7SUFDOUIsa0NBQTRDOzs7OztJQUU1QyxtQ0FBK0I7O0lBRS9CLHdDQUVFOztJQUNGLG9DQUFrRDs7SUFDbEQsd0NBQThCOztJQUU5QixtQ0FBNEI7O0lBQzVCLHFDQUFvQzs7SUFDcEMsbUNBQWtDOzs7OztJQUV0QixxQ0FBZ0M7Ozs7O0lBQzFDLGdDQUFzQjs7Ozs7SUFDdEIsK0JBQTZCOzs7OztJQUM3QixvQ0FBOEI7Ozs7O0lBQzlCLCtDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCAgT25Jbml0LCAgSW5wdXQsICBWaWV3Q2hpbGQsICBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0ICB7XHJcblxyXG4gIEBJbnB1dCgpIGFwcE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBWaWV3Q2hpbGQoJ3VzZXJuYW1lJykgdXNlcm5hbWU6IEVsZW1lbnRSZWY7XHJcbiAgXHJcbiAgcHJpdmF0ZSByZXR1cm5Vcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgRVJST1JfTUVTU0FHRVM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBsb2dpbk1lc3NhZ2U6ICdVbmFibGUgdG8gU2lnbiBJbiwgdHJ5IGFnYWluLicsXHJcbiAgfTtcclxuICBwdWJsaWMgZG9tYWluTGlzdDogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gIHB1YmxpYyBzZWxlY3RlZERvbWFpbiA9ICdjb3MnO1xyXG5cclxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIGxvZ2luRmFpbGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhWydhcHBOYW1lJ107XHJcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICB0aGlzLnJldHVyblVybCA9IHBhcmFtc1sncmV0dXJuJ10gfHwgJy8nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRBbGxEb21haW5zKClcclxuICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbXBvbmVudC5kb21haW5MaXN0LnB1c2gocmVzcG9uc2VbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbXBvbmVudC5zZWxlY3RlZERvbWFpbiA9IGNvbXBvbmVudC5kb21haW5MaXN0WzBdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyBTZXQgdGhlIGZvY3VzIHRvIHRoZSB1c2VybmFtZSAobXd0KVxyXG4gICAgdGhpcy51c2VybmFtZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1xyXG4gICAgICAgIC8vIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApXHJcbiAgICAgIF1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBbXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1heExlbmd0aCg1MClcclxuICAgICAgXV0sXHJcbiAgICAgIGRvbWFpbjogW3t2YWx1ZTogdGhpcy5zZWxlY3RlZERvbWFpbiwgZGlzYWJsZWQ6IGZhbHNlfSwgW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgIF1dLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dJbigpIHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9scy51c2VybmFtZS52YWx1ZTtcclxuICAgIGxldCBwYXNzd29yZCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xyXG5cclxuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ0luKHtcclxuICAgICAgdXNlck5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmR9LCB0aGlzLnNlbGVjdGVkRG9tYWluKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgYXV0aGVudGljYXRpb25SZXNwb25zZSA9IG5ld8KgQXV0aGVudGljYXRpb25SZXNwb25zZShyZXMpO1xyXG4gICAgICAgICAgaWYgKCFhdXRoZW50aWNhdGlvblJlc3BvbnNlLmF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmV0dXJuVXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Vycm9yIG9jY3VyZWQgd2hpbGUgYXV0aGVudGljYXRpbmcuICAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luRmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPbkZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubG9naW5GYWlsZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5sb2dpbkZvcm0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgdGhpcy5sb2dpbkZvcm0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==