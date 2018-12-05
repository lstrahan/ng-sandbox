/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { IconService } from '../../services/icon.service';
export class StateIconComponent {
    /**
     * @param {?} iconService
     */
    constructor(iconService) {
        this.iconService = iconService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.iconService.init();
    }
}
StateIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-state-icon',
                template: `
    <mat-icon [svgIcon]="iconService.getIconNameFromState(state)" [ngClass]="iconService.getStateClass(state)"></mat-icon>
    `,
                styles: [":host{display:flex}"]
            }] }
];
/** @nocollapse */
StateIconComponent.ctorParameters = () => [
    { type: IconService }
];
StateIconComponent.propDecorators = {
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StateIconComponent.prototype.state;
    /** @type {?} */
    StateIconComponent.prototype.iconService;
}
export class UciStateIconComponent {
    /**
     * @param {?} iconService
     */
    constructor(iconService) {
        this.iconService = iconService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.iconService.init();
    }
}
UciStateIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-uci-state-icon',
                template: `
    <mat-icon [svgIcon]="iconService.getIconNameFromUciState(state)" [ngClass]="iconService.getUciStateClass(state)"></mat-icon>
    `
            }] }
];
/** @nocollapse */
UciStateIconComponent.ctorParameters = () => [
    { type: IconService }
];
UciStateIconComponent.propDecorators = {
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UciStateIconComponent.prototype.state;
    /** @type {?} */
    UciStateIconComponent.prototype.iconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0ZS1pY29uL3N0YXRlLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFVMUQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUk3QixZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7Ozs7SUFFaEQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7S0FFUDs7YUFFSjs7OztZQVRRLFdBQVc7OztvQkFZakIsS0FBSzs7OztJQUFOLG1DQUF1Qjs7SUFFWCx5Q0FBK0I7O0FBYTdDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJaEMsWUFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDOzs7O0lBRWhELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7O0tBRVA7YUFDSjs7OztZQTFCUSxXQUFXOzs7b0JBNkJqQixLQUFLOzs7O0lBQU4sc0NBQXVCOztJQUVYLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1zdGF0ZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1pY29uIFtzdmdJY29uXT1cImljb25TZXJ2aWNlLmdldEljb25OYW1lRnJvbVN0YXRlKHN0YXRlKVwiIFtuZ0NsYXNzXT1cImljb25TZXJ2aWNlLmdldFN0YXRlQ2xhc3Moc3RhdGUpXCI+PC9tYXQtaWNvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zdGF0ZS1pY29uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXRlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHVibGljIGljb25TZXJ2aWNlOiBJY29uU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pY29uU2VydmljZS5pbml0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItdWNpLXN0YXRlLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwiaWNvblNlcnZpY2UuZ2V0SWNvbk5hbWVGcm9tVWNpU3RhdGUoc3RhdGUpXCIgW25nQ2xhc3NdPVwiaWNvblNlcnZpY2UuZ2V0VWNpU3RhdGVDbGFzcyhzdGF0ZSlcIj48L21hdC1pY29uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVWNpU3RhdGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IHN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWNvblNlcnZpY2U6IEljb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmljb25TZXJ2aWNlLmluaXQoKTtcclxuICB9XHJcbn1cclxuIl19