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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, route, logService, authenticationService) {
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
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // this.appName = this.route.snapshot.data['appName'];
        this.route.queryParams.subscribe(function (params) {
            _this.returnUrl = params['return'] || '/';
        });
        /** @type {?} */
        var component = this;
        this.authenticationService.getAllDomains()
            .subscribe(function (response) {
            for (var i = 0; i < response.length; i++) {
                component.domainList.push(response[i]);
            }
            component.selectedDomain = component.domainList[0];
        });
        this.createForm();
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // Set the focus to the username (mwt)
        this.username.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.createForm = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.logIn = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.submitted = true;
        /** @type {?} */
        var username = this.loginForm.controls.username.value;
        /** @type {?} */
        var password = this.loginForm.controls.password.value;
        this.authenticationService.logIn({
            userName: username,
            password: password
        }, this.selectedDomain)
            .subscribe(function (res) {
            /** @type {?} */
            var authenticationResponse = new AuthenticationResponse(res);
            if (!authenticationResponse.authenticated) {
                _this.loginFailed = true;
            }
            else {
                _this.router.navigateByUrl(_this.returnUrl);
            }
        }, function (err) {
            _this.logService.debug('Error occured while authenticating.  ' + JSON.stringify(err));
            _this.loginFailed = true;
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.handleOnFocus = /**
     * @return {?}
     */
    function () {
        if (this.submitted) {
            this.submitted = false;
            this.loginFailed = false;
            this.loginForm.markAsPristine();
            this.loginForm.markAsUntouched();
        }
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-login',
                    template: "<mat-card>\r\n\r\n  <!-- class for styling only -->\r\n  <form class=\"loginForm\" [formGroup]=\"loginForm\" #inputForm=\"ngForm\" (ngSubmit)=\"logIn()\" fxLayout=\"column\">\r\n\r\n    <div fxLayoutAlign=\"space-between start\">\r\n      <img id=\"logo\" src=\"assets/images/Boeing-logo-dark.svg\">\r\n      <h4 class=\"mat-subheading-1\">{{appName}}</h4>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"fill\" hideRequiredMarker=\"true\">\r\n      <input matInput #username formControlName=\"username\" (focus)=\"handleOnFocus()\">\r\n      <mat-label>Username</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <input matInput formControlName=\"password\" (focus)=\"handleOnFocus()\" type=\"password\">\r\n      <mat-label>Password</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-select [(value)]=\"selectedDomain\" formControlName=\"domain\">\r\n        <mat-option *ngFor=\"let domain of domainList\" [value]=\"domain\">\r\n          {{domain}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-label>Domain</mat-label>\r\n    </mat-form-field>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"left\">\r\n      <button mat-flat-button id=\"submit\" type=\"submit\" [disabled]=\"username.value.length === 0\">\r\n        SIGN IN\r\n      </button>\r\n    </div>\r\n    \r\n    <!-- Invalid login message. -->\r\n    <div [hidden]=\"!(submitted && loginFailed)\">\r\n      <mat-error id=\"formError\">{{ERROR_MESSAGES.loginMessage}}</mat-error>\r\n    </div>\r\n\r\n  </form>\r\n</mat-card>",
                    styles: [".mat-form-field{width:100%}.mat-error{padding:10px;text-align:center}.mat-card{background:inherit}button#submit{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Router },
        { type: ActivatedRoute },
        { type: LogService },
        { type: AuthenticationService }
    ]; };
    LoginComponent.propDecorators = {
        appName: [{ type: Input }],
        username: [{ type: ViewChild, args: ['username',] }]
    };
    return LoginComponent;
}());
export { LoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW1CLFNBQVMsRUFBWSxLQUFLLEVBQUcsU0FBUyxFQUFHLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTlFO0lBdUJFLHdCQUFvQixXQUF3QixFQUNsQyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsVUFBc0IsRUFDdEIscUJBQTRDO1FBSmxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFuQjdDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV4QixtQkFBYyxHQUE4QjtZQUNqRCxZQUFZLEVBQUUsK0JBQStCO1NBQzlDLENBQUM7UUFDSyxlQUFVLEdBQWEsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUMzQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUd2QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO0lB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QUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7O2dCQXhHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGlsREFBcUM7O2lCQUV0Qzs7OztnQkFYbUIsV0FBVztnQkFDdEIsTUFBTTtnQkFBRSxjQUFjO2dCQUV0QixVQUFVO2dCQUVWLHFCQUFxQjs7OzBCQVUzQixLQUFLOzJCQUNMLFNBQVMsU0FBQyxVQUFVOztJQWdHdkIscUJBQUM7Q0FBQSxBQXpHRCxJQXlHQztTQW5HWSxjQUFjOzs7SUFFekIsaUNBQThCOztJQUM5QixrQ0FBNEM7Ozs7O0lBRTVDLG1DQUErQjs7SUFFL0Isd0NBRUU7O0lBQ0Ysb0NBQWtEOztJQUNsRCx3Q0FBOEI7O0lBRTlCLG1DQUE0Qjs7SUFDNUIscUNBQW9DOztJQUNwQyxtQ0FBa0M7Ozs7O0lBRXRCLHFDQUFnQzs7Ozs7SUFDMUMsZ0NBQXNCOzs7OztJQUN0QiwrQkFBNkI7Ozs7O0lBQzdCLG9DQUE4Qjs7Ozs7SUFDOUIsK0NBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsICBPbkluaXQsICBJbnB1dCwgIFZpZXdDaGlsZCwgIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQgIHtcclxuXHJcbiAgQElucHV0KCkgYXBwTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQFZpZXdDaGlsZCgndXNlcm5hbWUnKSB1c2VybmFtZTogRWxlbWVudFJlZjtcclxuICBcclxuICBwcml2YXRlIHJldHVyblVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBFUlJPUl9NRVNTQUdFUzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgIGxvZ2luTWVzc2FnZTogJ1VuYWJsZSB0byBTaWduIEluLCB0cnkgYWdhaW4uJyxcclxuICB9O1xyXG4gIHB1YmxpYyBkb21haW5MaXN0OiBzdHJpbmdbXSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgcHVibGljIHNlbGVjdGVkRG9tYWluID0gJ2Nvcyc7XHJcblxyXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgbG9naW5GYWlsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2FwcE5hbWUnXTtcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgIHRoaXMucmV0dXJuVXJsID0gcGFyYW1zWydyZXR1cm4nXSB8fCAnLyc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEFsbERvbWFpbnMoKVxyXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29tcG9uZW50LmRvbWFpbkxpc3QucHVzaChyZXNwb25zZVtpXSk7XHJcbiAgICAgIH1cclxuICAgICAgY29tcG9uZW50LnNlbGVjdGVkRG9tYWluID0gY29tcG9uZW50LmRvbWFpbkxpc3RbMF07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIC8vIFNldCB0aGUgZm9jdXMgdG8gdGhlIHVzZXJuYW1lIChtd3QpXHJcbiAgICB0aGlzLnVzZXJuYW1lLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICB1c2VybmFtZTogWycnLCBbXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1heExlbmd0aCg1MClcclxuICAgICAgXV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIC8vIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgIC8vIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKVxyXG4gICAgICBdXSxcclxuICAgICAgZG9tYWluOiBbe3ZhbHVlOiB0aGlzLnNlbGVjdGVkRG9tYWluLCBkaXNhYmxlZDogZmFsc2V9LCBbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgXV0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ0luKCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGxldCB1c2VybmFtZSA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzLnVzZXJuYW1lLnZhbHVlO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHMucGFzc3dvcmQudmFsdWU7XHJcblxyXG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nSW4oe1xyXG4gICAgICB1c2VyTmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZH0sIHRoaXMuc2VsZWN0ZWREb21haW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblJlc3BvbnNlID0gbmV3wqBBdXRoZW50aWNhdGlvblJlc3BvbnNlKHJlcyk7XHJcbiAgICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uUmVzcG9uc2UuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luRmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZXR1cm5VcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXJyb3Igb2NjdXJlZCB3aGlsZSBhdXRoZW50aWNhdGluZy4gICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgIHRoaXMubG9naW5GYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9uRm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdWJtaXR0ZWQpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5sb2dpbkZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmxvZ2luRm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICB0aGlzLmxvZ2luRm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19