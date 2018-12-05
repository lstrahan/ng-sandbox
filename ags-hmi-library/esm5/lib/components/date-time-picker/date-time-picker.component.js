/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
This custom component is a wrapper around the Angular Date Time Picker (ng-pick-datetime)
https://www.npmjs.com/package/ng-pick-datetime
https://danielykpan.github.io/date-time-picker/

This control ONLY produces UTC date/times

There is a line of code in onChanges() method to force the value to a UTC date/time.
The ng-pick-datetime control (<owl-date-time>) insists on appending the local timezone every time
you click it. So 'moment.toObject()' is utilized because it returns the parts of the
date without a timezone. This allows the creation of a new moment object without a
local timezone. It's hacky, but it gets the job done. Maybe someday Angular Material
will create a datetime picker that can properly handle UTC. :^(

moment.toObject() = {
    years: 2015
    months: 6
    date: 26,
    hours: 1,
    minutes: 53,
    seconds: 14,
    milliseconds: 600
}

*/
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, HostBinding, Optional, Self, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import moment from 'moment-es6';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
import { DateFormatPipe } from '../../other/pipes';
/** @type {?} */
export var MY_CUSTOM_FORMATS = {
    parseInput: 'YYYY-MM-DD HH:mm:ss',
    fullPickerInput: DateFormatPipe.format,
    datePickerInput: 'YYYY-MM',
    timePickerInput: 'hh:mm:ss',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMM YYYY',
};
var DateTimePickerComponent = /** @class */ (function () {
    /////////////////////
    function DateTimePickerComponent(fm, elRef, ngControl) {
        var _this = this;
        this.fm = fm;
        this.elRef = elRef;
        this.ngControl = ngControl;
        this.id = "date-time-picker-" + DateTimePickerComponent.nextId++;
        this.describedBy = '';
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'date-time-picker';
        this._required = false;
        this._disabled = false;
        this._momentValue = moment(); // usa a Moment object internally to store the date value
        // Implementation of MatFormFieldControl interface
        this.fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        } // required for interaction with Angular forms
        /////////////
    }
    Object.defineProperty(DateTimePickerComponent.prototype, "shouldLabelFloat", {
        get: /**
         * @return {?}
         */
        function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} inValue
     * @return {?}
     */
    DateTimePickerComponent.prototype.writeValue = /**
     * @param {?} inValue
     * @return {?}
     */
    function (inValue) {
        console.log("date-time-picker input string = " + inValue);
        this.value = inValue;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DateTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this.disabled = isDisabled; };
    Object.defineProperty(DateTimePickerComponent.prototype, "placeholder", {
        //////////////////////
        // Implementation of MatFormFieldControl properties
        get: 
        //////////////////////
        // Implementation of MatFormFieldControl properties
        /**
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = 'value';
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._momentValue.utc().toISOString();
        },
        set: /**
         * @param {?} newVal
         * @return {?}
         */
        function (newVal) {
            this._momentValue = moment.utc(newVal);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return !this._momentValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    };
    // Implementation of MatFormFieldControl methods
    // Implementation of MatFormFieldControl methods
    /**
     * @param {?} ids
     * @return {?}
     */
    DateTimePickerComponent.prototype.setDescribedByIds = 
    // Implementation of MatFormFieldControl methods
    /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this.describedBy = ids.join(' ');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimePickerComponent.prototype.onContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    ////////////////////
    // My functions
    ////////////////////
    // My functions
    /**
     * @param {?} event
     * @return {?}
     */
    DateTimePickerComponent.prototype.onDataChanged = 
    ////////////////////
    // My functions
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._momentValue = moment.utc(this._momentValue.toObject()); // force to UTC
        console.log("date-time-picker output string = " + this.value);
        this.onChange(this.value); // required for interaction with Angular forms
    };
    // Implementation of MatFormFieldControl
    // tslint:disable-next-line:member-ordering
    DateTimePickerComponent.nextId = 0;
    DateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-date-time-picker',
                    template: "<div>\r\n  <input [(ngModel)]=\"_momentValue\" [owlDateTime]=\"dt\" (change)=\"onDataChanged($event)\">\r\n  <svg class=\"icon\" [owlDateTimeTrigger]=\"dt\" fill=\"currentColor\" focusable=\"false\" height=\"20px\" viewBox=\"0 0 24 24\"\r\n    width=\"20px\">\r\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path>\r\n  </svg>\r\n  <owl-date-time #dt (afterPickerClosed)=\"onDataChanged($event)\" showSecondsTimer=\"true\"></owl-date-time>\r\n  <!-- <input type=\"datetime-local\" step=\"1\" [(ngModel)]=\"value\"> -->\r\n</div>\r\n",
                    providers: [{ provide: MatFormFieldControl, useExisting: DateTimePickerComponent },
                        { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
                        { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["div .icon{position:absolute;right:0;top:0;cursor:pointer}div input{color:currentcolor;border:none;background:0 0;outline:0;font:inherit}"]
                }] }
    ];
    /** @nocollapse */
    DateTimePickerComponent.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ElementRef },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    DateTimePickerComponent.propDecorators = {
        shouldLabelFloat: [{ type: HostBinding, args: ['class.floating',] }],
        id: [{ type: HostBinding, args: ['id',] }],
        describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }]
    };
    return DateTimePickerComponent;
}());
export { DateTimePickerComponent };
if (false) {
    /** @type {?} */
    DateTimePickerComponent.nextId;
    /** @type {?} */
    DateTimePickerComponent.prototype.id;
    /** @type {?} */
    DateTimePickerComponent.prototype.describedBy;
    /** @type {?} */
    DateTimePickerComponent.prototype.stateChanges;
    /** @type {?} */
    DateTimePickerComponent.prototype.focused;
    /** @type {?} */
    DateTimePickerComponent.prototype.errorState;
    /** @type {?} */
    DateTimePickerComponent.prototype.controlType;
    /**
     * @type {?}
     * @private
     */
    DateTimePickerComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    DateTimePickerComponent.prototype._required;
    /**
     * @type {?}
     * @private
     */
    DateTimePickerComponent.prototype._disabled;
    /** @type {?} */
    DateTimePickerComponent.prototype._momentValue;
    /** @type {?} */
    DateTimePickerComponent.prototype.onChange;
    /** @type {?} */
    DateTimePickerComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    DateTimePickerComponent.prototype.fm;
    /**
     * @type {?}
     * @private
     */
    DateTimePickerComponent.prototype.elRef;
    /** @type {?} */
    DateTimePickerComponent.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFjLFFBQVEsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUF3QixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sTUFBTSxNQUFNLFlBQVksQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVuRCxNQUFNLEtBQU8saUJBQWlCLEdBQUc7SUFDL0IsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxlQUFlLEVBQUUsY0FBYyxDQUFDLE1BQU07SUFDdEMsZUFBZSxFQUFFLFNBQVM7SUFDMUIsZUFBZSxFQUFFLFVBQVU7SUFDM0IsY0FBYyxFQUFFLFVBQVU7SUFDMUIsYUFBYSxFQUFFLFVBQVU7SUFDekIsa0JB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Qzs7SUFDbkMsMENBQWdCOztJQUNoQiw2Q0FBbUI7O0lBQ25CLDhDQUFpQzs7Ozs7SUFFakMsK0NBQTZCOzs7OztJQUM3Qiw0Q0FBMEI7Ozs7O0lBQzFCLDRDQUEwQjs7SUFDMUIsK0NBQXVDOztJQUl2QywyQ0FBbUI7O0lBQ25CLDRDQUFvQjs7Ozs7SUE4Q1IscUNBQXdCOzs7OztJQUFFLHdDQUF5Qjs7SUFDN0QsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGhpcyBjdXN0b20gY29tcG9uZW50IGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIEFuZ3VsYXIgRGF0ZSBUaW1lIFBpY2tlciAobmctcGljay1kYXRldGltZSlcclxuaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbmctcGljay1kYXRldGltZVxyXG5odHRwczovL2RhbmllbHlrcGFuLmdpdGh1Yi5pby9kYXRlLXRpbWUtcGlja2VyL1xyXG5cclxuVGhpcyBjb250cm9sIE9OTFkgcHJvZHVjZXMgVVRDIGRhdGUvdGltZXNcclxuXHJcblRoZXJlIGlzIGEgbGluZSBvZiBjb2RlIGluIG9uQ2hhbmdlcygpIG1ldGhvZCB0byBmb3JjZSB0aGUgdmFsdWUgdG8gYSBVVEMgZGF0ZS90aW1lLlxyXG5UaGUgbmctcGljay1kYXRldGltZSBjb250cm9sICg8b3dsLWRhdGUtdGltZT4pIGluc2lzdHMgb24gYXBwZW5kaW5nIHRoZSBsb2NhbCB0aW1lem9uZSBldmVyeSB0aW1lXHJcbnlvdSBjbGljayBpdC4gU28gJ21vbWVudC50b09iamVjdCgpJyBpcyB1dGlsaXplZCBiZWNhdXNlIGl0IHJldHVybnMgdGhlIHBhcnRzIG9mIHRoZVxyXG5kYXRlIHdpdGhvdXQgYSB0aW1lem9uZS4gVGhpcyBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGEgbmV3IG1vbWVudCBvYmplY3Qgd2l0aG91dCBhXHJcbmxvY2FsIHRpbWV6b25lLiBJdCdzIGhhY2t5LCBidXQgaXQgZ2V0cyB0aGUgam9iIGRvbmUuIE1heWJlIHNvbWVkYXkgQW5ndWxhciBNYXRlcmlhbFxyXG53aWxsIGNyZWF0ZSBhIGRhdGV0aW1lIHBpY2tlciB0aGF0IGNhbiBwcm9wZXJseSBoYW5kbGUgVVRDLiA6XihcclxuXHJcbm1vbWVudC50b09iamVjdCgpID0ge1xyXG4gICAgeWVhcnM6IDIwMTVcclxuICAgIG1vbnRoczogNlxyXG4gICAgZGF0ZTogMjYsXHJcbiAgICBob3VyczogMSxcclxuICAgIG1pbnV0ZXM6IDUzLFxyXG4gICAgc2Vjb25kczogMTQsXHJcbiAgICBtaWxsaXNlY29uZHM6IDYwMFxyXG59XHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLCBmb3J3YXJkUmVmLCBPcHRpb25hbCwgU2VsZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC1lczYnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIsIE9XTF9EQVRFX1RJTUVfRk9STUFUUywgT1dMX0RBVEVfVElNRV9MT0NBTEUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuaW1wb3J0IHsgTW9tZW50RGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnbmctcGljay1kYXRldGltZS1tb21lbnQnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4uLy4uL290aGVyL3BpcGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNWV9DVVNUT01fRk9STUFUUyA9IHtcclxuICBwYXJzZUlucHV0OiAnWVlZWS1NTS1ERCBISDptbTpzcycsXHJcbiAgZnVsbFBpY2tlcklucHV0OiBEYXRlRm9ybWF0UGlwZS5mb3JtYXQsXHJcbiAgZGF0ZVBpY2tlcklucHV0OiAnWVlZWS1NTScsXHJcbiAgdGltZVBpY2tlcklucHV0OiAnaGg6bW06c3MnLFxyXG4gIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxyXG4gIGRhdGVBMTF5TGFiZWw6ICdNTU0gWVlZWScsXHJcbiAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NIFlZWVknLFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLWRhdGUtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSxcclxuICB7IHByb3ZpZGU6IERhdGVUaW1lQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVUaW1lQWRhcHRlciwgZGVwczogW09XTF9EQVRFX1RJTUVfTE9DQUxFXSB9LFxyXG4gIHsgcHJvdmlkZTogT1dMX0RBVEVfVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfQ1VTVE9NX0ZPUk1BVFMgfVxyXG4gIF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxzdHJpbmc+LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKSBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHsgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTsgfVxyXG4gIEBIb3N0QmluZGluZygnaWQnKSBpZCA9IGBkYXRlLXRpbWUtcGlja2VyLSR7RGF0ZVRpbWVQaWNrZXJDb21wb25lbnQubmV4dElkKyt9YDtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XHJcblxyXG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIE1hdEZvcm1GaWVsZENvbnRyb2xcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXHJcbiAgc3RhdGljIG5leHRJZCA9IDA7XHJcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xyXG4gIGNvbnRyb2xUeXBlID0gJ2RhdGUtdGltZS1waWNrZXInO1xyXG5cclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBfbW9tZW50VmFsdWU6IG1vbWVudC5Nb21lbnQgPSBtb21lbnQoKTsgLy8gdXNhIGEgTW9tZW50IG9iamVjdCBpbnRlcm5hbGx5IHRvIHN0b3JlIHRoZSBkYXRlIHZhbHVlXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG4gIHdyaXRlVmFsdWUoaW5WYWx1ZTogc3RyaW5nKSB7IFxyXG4gICAgY29uc29sZS5sb2coYGRhdGUtdGltZS1waWNrZXIgaW5wdXQgc3RyaW5nID0gJHtpblZhbHVlfWApO1xyXG4gICAgdGhpcy52YWx1ZSA9IGluVmFsdWU7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgeyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDsgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbCBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KClcclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XHJcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gJ3ZhbHVlJztcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cclxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vbWVudFZhbHVlLnV0YygpLnRvSVNPU3RyaW5nKCk7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZShuZXdWYWw6IHN0cmluZyB8IG51bGwpIHtcclxuICAgIHRoaXMuX21vbWVudFZhbHVlID0gbW9tZW50LnV0YyhuZXdWYWwpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVtcHR5KCkge1xyXG4gICAgcmV0dXJuICF0aGlzLl9tb21lbnRWYWx1ZTtcclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm06IEZvY3VzTW9uaXRvciwgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XHJcblxyXG4gICAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbCBpbnRlcmZhY2VcclxuICAgIHRoaXMuZm0ubW9uaXRvcihlbFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHsgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7IH0gLy8gcmVxdWlyZWQgZm9yIGludGVyYWN0aW9uIHdpdGggQW5ndWxhciBmb3Jtc1xyXG4gICAgLy8vLy8vLy8vLy8vL1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbCBtZXRob2RzXHJcbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcclxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gTXkgZnVuY3Rpb25zXHJcblxyXG4gIG9uRGF0YUNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fbW9tZW50VmFsdWUgPSBtb21lbnQudXRjKHRoaXMuX21vbWVudFZhbHVlLnRvT2JqZWN0KCkpOyAvLyBmb3JjZSB0byBVVENcclxuICAgIGNvbnNvbGUubG9nKGBkYXRlLXRpbWUtcGlja2VyIG91dHB1dCBzdHJpbmcgPSAke3RoaXMudmFsdWV9YCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpOyAvLyByZXF1aXJlZCBmb3IgaW50ZXJhY3Rpb24gd2l0aCBBbmd1bGFyIGZvcm1zXHJcbiAgfVxyXG59XHJcbiJdfQ==