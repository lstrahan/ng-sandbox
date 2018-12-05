/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { LogService } from '../../services/log.service';
export class ProgressComponent {
    /**
     * @param {?} logService
     */
    constructor(logService) {
        this.logService = logService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hideComponent();
    }
    /**
     * @return {?}
     */
    hideComponent() {
        /** @type {?} */
        let el = document.getElementById('progressContainer');
        if (el) {
            el.style.display = 'none';
            this.logService.debug('set style of "progressContainer" to "none"');
        }
        else {
            this.logService.debug('unable to find element "progressContainer"');
        }
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-progress',
                template: "<!-- <div *ngIf=\"isSpinnerVisible\" id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> -->\r\n  <div id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>\r\n    <span>\r\n      <mat-spinner diameter=\"64\"></mat-spinner>\r\n    </span>\r\n  </div>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ags-lib-progress #progressContainer{position:absolute;background:rgba(42,42,42,.5);height:100%;width:100%;z-index:100;display:flex}ags-lib-progress #progressContainer div{margin:auto}ags-lib-progress #progressContainer div span>mat-spinner>svg>circle{stroke:#fff;stroke-width:5px;opacity:.75}"]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [
    { type: LogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressComponent.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTdEQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQzs7OztJQUVOLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGFBQWE7O1lBQ1AsRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFDckQsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUNyRTthQUNJO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK1VBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFQUSxVQUFVOzs7Ozs7O0lBWWIsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLXByb2dyZXNzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmhpZGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGhpZGVDb21wb25lbnQoKSB7XHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NDb250YWluZXInKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ3NldCBzdHlsZSBvZiBcInByb2dyZXNzQ29udGFpbmVyXCIgdG8gXCJub25lXCInKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ3VuYWJsZSB0byBmaW5kIGVsZW1lbnQgXCJwcm9ncmVzc0NvbnRhaW5lclwiJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==