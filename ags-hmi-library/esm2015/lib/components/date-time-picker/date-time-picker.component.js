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
export const MY_CUSTOM_FORMATS = {
    parseInput: 'YYYY-MM-DD HH:mm:ss',
    fullPickerInput: DateFormatPipe.format,
    datePickerInput: 'YYYY-MM',
    timePickerInput: 'hh:mm:ss',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMM YYYY',
};
export class DateTimePickerComponent {
    /////////////////////
    /**
     * @param {?} fm
     * @param {?} elRef
     * @param {?} ngControl
     */
    constructor(fm, elRef, ngControl) {
        this.fm = fm;
        this.elRef = elRef;
        this.ngControl = ngControl;
        this.id = `date-time-picker-${DateTimePickerComponent.nextId++}`;
        this.describedBy = '';
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'date-time-picker';
        this._required = false;
        this._disabled = false;
        this._momentValue = moment(); // usa a Moment object internally to store the date value
        // Implementation of MatFormFieldControl interface
        this.fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        } // required for interaction with Angular forms
        /////////////
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() { return this.focused || !this.empty; }
    /**
     * @param {?} inValue
     * @return {?}
     */
    writeValue(inValue) {
        console.log(`date-time-picker input string = ${inValue}`);
        this.value = inValue;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    //////////////////////
    // Implementation of MatFormFieldControl properties
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = 'value';
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._momentValue.utc().toISOString();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    set value(newVal) {
        this._momentValue = moment.utc(newVal);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get empty() {
        return !this._momentValue;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    }
    // Implementation of MatFormFieldControl methods
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    ////////////////////
    // My functions
    /**
     * @param {?} event
     * @return {?}
     */
    onDataChanged(event) {
        this._momentValue = moment.utc(this._momentValue.toObject()); // force to UTC
        console.log(`date-time-picker output string = ${this.value}`);
        this.onChange(this.value); // required for interaction with Angular forms
    }
}
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
DateTimePickerComponent.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ElementRef },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
DateTimePickerComponent.propDecorators = {
    shouldLabelFloat: [{ type: HostBinding, args: ['class.floating',] }],
    id: [{ type: HostBinding, args: ['id',] }],
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFjLFFBQVEsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUF3QixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sTUFBTSxNQUFNLFlBQVksQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVuRCxNQUFNLE9BQU8saUJBQWlCLEdBQUc7SUFDL0IsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxlQUFlLEVBQUUsY0FBYyxDQUFDLE1BQU07SUFDdEMsZUFBZSxFQUFFLFNBQVM7SUFDMUIsZUFBZSxFQUFFLFVBQVU7SUFDM0IsY0FBYyxFQUFFLFVBQVU7SUFDMUIsYUFBYSxFQUFFLFVBQVU7SUFDekIsa0JB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bmVudCBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBBbmd1bGFyIERhdGUgVGltZSBQaWNrZXIgKG5nLXBpY2stZGF0ZXRpbWUpXHJcbmh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL25nLXBpY2stZGF0ZXRpbWVcclxuaHR0cHM6Ly9kYW5pZWx5a3Bhbi5naXRodWIuaW8vZGF0ZS10aW1lLXBpY2tlci9cclxuXHJcblRoaXMgY29udHJvbCBPTkxZIHByb2R1Y2VzIFVUQyBkYXRlL3RpbWVzXHJcblxyXG5UaGVyZSBpcyBhIGxpbmUgb2YgY29kZSBpbiBvbkNoYW5nZXMoKSBtZXRob2QgdG8gZm9yY2UgdGhlIHZhbHVlIHRvIGEgVVRDIGRhdGUvdGltZS5cclxuVGhlIG5nLXBpY2stZGF0ZXRpbWUgY29udHJvbCAoPG93bC1kYXRlLXRpbWU+KSBpbnNpc3RzIG9uIGFwcGVuZGluZyB0aGUgbG9jYWwgdGltZXpvbmUgZXZlcnkgdGltZVxyXG55b3UgY2xpY2sgaXQuIFNvICdtb21lbnQudG9PYmplY3QoKScgaXMgdXRpbGl6ZWQgYmVjYXVzZSBpdCByZXR1cm5zIHRoZSBwYXJ0cyBvZiB0aGVcclxuZGF0ZSB3aXRob3V0IGEgdGltZXpvbmUuIFRoaXMgYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBhIG5ldyBtb21lbnQgb2JqZWN0IHdpdGhvdXQgYVxyXG5sb2NhbCB0aW1lem9uZS4gSXQncyBoYWNreSwgYnV0IGl0IGdldHMgdGhlIGpvYiBkb25lLiBNYXliZSBzb21lZGF5IEFuZ3VsYXIgTWF0ZXJpYWxcclxud2lsbCBjcmVhdGUgYSBkYXRldGltZSBwaWNrZXIgdGhhdCBjYW4gcHJvcGVybHkgaGFuZGxlIFVUQy4gOl4oXHJcblxyXG5tb21lbnQudG9PYmplY3QoKSA9IHtcclxuICAgIHllYXJzOiAyMDE1XHJcbiAgICBtb250aHM6IDZcclxuICAgIGRhdGU6IDI2LFxyXG4gICAgaG91cnM6IDEsXHJcbiAgICBtaW51dGVzOiA1MyxcclxuICAgIHNlY29uZHM6IDE0LFxyXG4gICAgbWlsbGlzZWNvbmRzOiA2MDBcclxufVxyXG5cclxuKi9cclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBIb3N0QmluZGluZywgZm9yd2FyZFJlZiwgT3B0aW9uYWwsIFNlbGYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtZXM2JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyLCBPV0xfREFURV9USU1FX0ZPUk1BVFMsIE9XTF9EQVRFX1RJTUVfTE9DQUxFIH0gZnJvbSAnbmctcGljay1kYXRldGltZSc7XHJcbmltcG9ydCB7IE1vbWVudERhdGVUaW1lQWRhcHRlciB9IGZyb20gJ25nLXBpY2stZGF0ZXRpbWUtbW9tZW50JztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdFBpcGUgfSBmcm9tICcuLi8uLi9vdGhlci9waXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTVlfQ1VTVE9NX0ZPUk1BVFMgPSB7XHJcbiAgcGFyc2VJbnB1dDogJ1lZWVktTU0tREQgSEg6bW06c3MnLFxyXG4gIGZ1bGxQaWNrZXJJbnB1dDogRGF0ZUZvcm1hdFBpcGUuZm9ybWF0LFxyXG4gIGRhdGVQaWNrZXJJbnB1dDogJ1lZWVktTU0nLFxyXG4gIHRpbWVQaWNrZXJJbnB1dDogJ2hoOm1tOnNzJyxcclxuICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcclxuICBkYXRlQTExeUxhYmVsOiAnTU1NIFlZWVknLFxyXG4gIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTSBZWVlZJyxcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1kYXRlLXRpbWUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IERhdGVUaW1lUGlja2VyQ29tcG9uZW50IH0sXHJcbiAgeyBwcm92aWRlOiBEYXRlVGltZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlVGltZUFkYXB0ZXIsIGRlcHM6IFtPV0xfREFURV9USU1FX0xPQ0FMRV0gfSxcclxuICB7IHByb3ZpZGU6IE9XTF9EQVRFX1RJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0NVU1RPTV9GT1JNQVRTIH1cclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8c3RyaW5nPiwgT25EZXN0cm95IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsb2F0aW5nJykgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7IHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7IH1cclxuICBASG9zdEJpbmRpbmcoJ2lkJykgaWQgPSBgZGF0ZS10aW1lLXBpY2tlci0ke0RhdGVUaW1lUGlja2VyQ29tcG9uZW50Lm5leHRJZCsrfWA7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeSA9ICcnO1xyXG5cclxuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBNYXRGb3JtRmllbGRDb250cm9sXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xyXG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xyXG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgZm9jdXNlZCA9IGZhbHNlO1xyXG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcclxuICBjb250cm9sVHlwZSA9ICdkYXRlLXRpbWUtcGlja2VyJztcclxuXHJcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgX21vbWVudFZhbHVlOiBtb21lbnQuTW9tZW50ID0gbW9tZW50KCk7IC8vIHVzYSBhIE1vbWVudCBvYmplY3QgaW50ZXJuYWxseSB0byBzdG9yZSB0aGUgZGF0ZSB2YWx1ZVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICBvbkNoYW5nZTogRnVuY3Rpb247XHJcbiAgb25Ub3VjaGVkOiBGdW5jdGlvbjtcclxuICB3cml0ZVZhbHVlKGluVmFsdWU6IHN0cmluZykgeyBcclxuICAgIGNvbnNvbGUubG9nKGBkYXRlLXRpbWUtcGlja2VyIGlucHV0IHN0cmluZyA9ICR7aW5WYWx1ZX1gKTtcclxuICAgIHRoaXMudmFsdWUgPSBpblZhbHVlO1xyXG4gIH1cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHsgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7IH1cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIE1hdEZvcm1GaWVsZENvbnRyb2wgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxyXG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9ICd2YWx1ZSc7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XHJcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9tb21lbnRWYWx1ZS51dGMoKS50b0lTT1N0cmluZygpO1xyXG4gIH1cclxuICBzZXQgdmFsdWUobmV3VmFsOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9tb21lbnRWYWx1ZSA9IG1vbWVudC51dGMobmV3VmFsKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbXB0eSgpIHtcclxuICAgIHJldHVybiAhdGhpcy5fbW9tZW50VmFsdWU7XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xyXG5cclxuICAgIC8vIEltcGxlbWVudGF0aW9uIG9mIE1hdEZvcm1GaWVsZENvbnRyb2wgaW50ZXJmYWNlXHJcbiAgICB0aGlzLmZtLm1vbml0b3IoZWxSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7IHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzOyB9IC8vIHJlcXVpcmVkIGZvciBpbnRlcmFjdGlvbiB3aXRoIEFuZ3VsYXIgZm9ybXNcclxuICAgIC8vLy8vLy8vLy8vLy9cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZm0uc3RvcE1vbml0b3JpbmcodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIE1hdEZvcm1GaWVsZENvbnRyb2wgbWV0aG9kc1xyXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XHJcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vIE15IGZ1bmN0aW9uc1xyXG5cclxuICBvbkRhdGFDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuX21vbWVudFZhbHVlID0gbW9tZW50LnV0Yyh0aGlzLl9tb21lbnRWYWx1ZS50b09iamVjdCgpKTsgLy8gZm9yY2UgdG8gVVRDXHJcbiAgICBjb25zb2xlLmxvZyhgZGF0ZS10aW1lLXBpY2tlciBvdXRwdXQgc3RyaW5nID0gJHt0aGlzLnZhbHVlfWApO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTsgLy8gcmVxdWlyZWQgZm9yIGludGVyYWN0aW9uIHdpdGggQW5ndWxhciBmb3Jtc1xyXG4gIH1cclxufVxyXG4iXX0=