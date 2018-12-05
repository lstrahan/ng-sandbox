/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { IconService } from '../../services/icon.service';
var StateIconComponent = /** @class */ (function () {
    function StateIconComponent(iconService) {
        this.iconService = iconService;
    }
    /**
     * @return {?}
     */
    StateIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.iconService.init();
    };
    StateIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-state-icon',
                    template: "\n    <mat-icon [svgIcon]=\"iconService.getIconNameFromState(state)\" [ngClass]=\"iconService.getStateClass(state)\"></mat-icon>\n    ",
                    styles: [":host{display:flex}"]
                }] }
    ];
    /** @nocollapse */
    StateIconComponent.ctorParameters = function () { return [
        { type: IconService }
    ]; };
    StateIconComponent.propDecorators = {
        state: [{ type: Input }]
    };
    return StateIconComponent;
}());
export { StateIconComponent };
if (false) {
    /** @type {?} */
    StateIconComponent.prototype.state;
    /** @type {?} */
    StateIconComponent.prototype.iconService;
}
var UciStateIconComponent = /** @class */ (function () {
    function UciStateIconComponent(iconService) {
        this.iconService = iconService;
    }
    /**
     * @return {?}
     */
    UciStateIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.iconService.init();
    };
    UciStateIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-uci-state-icon',
                    template: "\n    <mat-icon [svgIcon]=\"iconService.getIconNameFromUciState(state)\" [ngClass]=\"iconService.getUciStateClass(state)\"></mat-icon>\n    "
                }] }
    ];
    /** @nocollapse */
    UciStateIconComponent.ctorParameters = function () { return [
        { type: IconService }
    ]; };
    UciStateIconComponent.propDecorators = {
        state: [{ type: Input }]
    };
    return UciStateIconComponent;
}());
export { UciStateIconComponent };
if (false) {
    /** @type {?} */
    UciStateIconComponent.prototype.state;
    /** @type {?} */
    UciStateIconComponent.prototype.iconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0ZS1pY29uL3N0YXRlLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHMUQ7SUFXRSw0QkFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDOzs7O0lBRWhELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSx3SUFFUDs7aUJBRUo7Ozs7Z0JBVFEsV0FBVzs7O3dCQVlqQixLQUFLOztJQU9SLHlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FUWSxrQkFBa0I7OztJQUU3QixtQ0FBdUI7O0lBRVgseUNBQStCOztBQU83QztJQVVFLCtCQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7Ozs7SUFFaEQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDhJQUVQO2lCQUNKOzs7O2dCQTFCUSxXQUFXOzs7d0JBNkJqQixLQUFLOztJQU9SLDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVFkscUJBQXFCOzs7SUFFaEMsc0NBQXVCOztJQUVYLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1zdGF0ZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1pY29uIFtzdmdJY29uXT1cImljb25TZXJ2aWNlLmdldEljb25OYW1lRnJvbVN0YXRlKHN0YXRlKVwiIFtuZ0NsYXNzXT1cImljb25TZXJ2aWNlLmdldFN0YXRlQ2xhc3Moc3RhdGUpXCI+PC9tYXQtaWNvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zdGF0ZS1pY29uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXRlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHVibGljIGljb25TZXJ2aWNlOiBJY29uU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pY29uU2VydmljZS5pbml0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItdWNpLXN0YXRlLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwiaWNvblNlcnZpY2UuZ2V0SWNvbk5hbWVGcm9tVWNpU3RhdGUoc3RhdGUpXCIgW25nQ2xhc3NdPVwiaWNvblNlcnZpY2UuZ2V0VWNpU3RhdGVDbGFzcyhzdGF0ZSlcIj48L21hdC1pY29uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVWNpU3RhdGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IHN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWNvblNlcnZpY2U6IEljb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmljb25TZXJ2aWNlLmluaXQoKTtcclxuICB9XHJcbn1cclxuIl19