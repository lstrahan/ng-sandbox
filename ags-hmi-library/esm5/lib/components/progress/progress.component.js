/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { LogService } from '../../services/log.service';
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(logService) {
        this.logService = logService;
    }
    /**
     * @return {?}
     */
    ProgressComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.hideComponent();
    };
    /**
     * @return {?}
     */
    ProgressComponent.prototype.hideComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = document.getElementById('progressContainer');
        if (el) {
            el.style.display = 'none';
            this.logService.debug('set style of "progressContainer" to "none"');
        }
        else {
            this.logService.debug('unable to find element "progressContainer"');
        }
    };
    ProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-progress',
                    template: "<!-- <div *ngIf=\"isSpinnerVisible\" id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> -->\r\n  <div id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>\r\n    <span>\r\n      <mat-spinner diameter=\"64\"></mat-spinner>\r\n    </span>\r\n  </div>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ags-lib-progress #progressContainer{position:absolute;background:rgba(42,42,42,.5);height:100%;width:100%;z-index:100;display:flex}ags-lib-progress #progressContainer div{margin:auto}ags-lib-progress #progressContainer div span>mat-spinner>svg>circle{stroke:#fff;stroke-width:5px;opacity:.75}"]
                }] }
    ];
    /** @nocollapse */
    ProgressComponent.ctorParameters = function () { return [
        { type: LogService }
    ]; };
    return ProgressComponent;
}());
export { ProgressComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProgressComponent.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQ7SUFTSSwyQkFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7Ozs7SUFFTiwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjs7WUFDTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRCxJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ3JFO2FBQ0k7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwrVUFBd0M7b0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBUFEsVUFBVTs7SUE2Qm5CLHdCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FwQmMsaUJBQWlCOzs7Ozs7SUFHMUIsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLXByb2dyZXNzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmhpZGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIGhpZGVDb21wb25lbnQoKSB7XHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NDb250YWluZXInKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ3NldCBzdHlsZSBvZiBcInByb2dyZXNzQ29udGFpbmVyXCIgdG8gXCJub25lXCInKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ3VuYWJsZSB0byBmaW5kIGVsZW1lbnQgXCJwcm9ncmVzc0NvbnRhaW5lclwiJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==