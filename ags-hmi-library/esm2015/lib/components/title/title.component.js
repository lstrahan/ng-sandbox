/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class TitleComponent {
    constructor() {
        this.onCancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onClick() {
        this.onCancel.emit();
    }
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-title',
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"title-container\">\r\n  <!-- Panel title -->\r\n  <div>\r\n    <h2 class=\"mat-title\">{{title}}</h2>\r\n  </div>\r\n  <div>\r\n    <button mat-icon-button matTooltip=\"Close\" (click)=\"onClick()\" >\r\n      <mat-icon>clear</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                styles: [".title-container{margin-bottom:15px}.title-container .mat-title{margin:0}"]
            }] }
];
/** @nocollapse */
TitleComponent.ctorParameters = () => [];
TitleComponent.propDecorators = {
    title: [{ type: Input }],
    onCancel: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TitleComponent.prototype.title;
    /** @type {?} */
    TitleComponent.prototype.onCancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLE1BQU0sT0FBTyxjQUFjO0lBSXpCO1FBRlUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFOUIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHdXQUFxQzs7YUFFdEM7Ozs7O29CQUdFLEtBQUs7dUJBQ0wsTUFBTTs7OztJQURQLCtCQUF1Qjs7SUFDdkIsa0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=