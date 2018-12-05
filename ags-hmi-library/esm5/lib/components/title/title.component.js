/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.onCancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TitleComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.onCancel.emit();
    };
    TitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-title',
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"title-container\">\r\n  <!-- Panel title -->\r\n  <div>\r\n    <h2 class=\"mat-title\">{{title}}</h2>\r\n  </div>\r\n  <div>\r\n    <button mat-icon-button matTooltip=\"Close\" (click)=\"onClick()\" >\r\n      <mat-icon>clear</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                    styles: [".title-container{margin-bottom:15px}.title-container .mat-title{margin:0}"]
                }] }
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return []; };
    TitleComponent.propDecorators = {
        title: [{ type: Input }],
        onCancel: [{ type: Output }]
    };
    return TitleComponent;
}());
export { TitleComponent };
if (false) {
    /** @type {?} */
    TitleComponent.prototype.title;
    /** @type {?} */
    TitleComponent.prototype.onCancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBVUU7UUFGVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUU5QixDQUFDOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHdXQUFxQzs7aUJBRXRDOzs7Ozt3QkFHRSxLQUFLOzJCQUNMLE1BQU07O0lBVVQscUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVpZLGNBQWM7OztJQUN6QiwrQkFBdUI7O0lBQ3ZCLGtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi10aXRsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpdGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aXRsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIl19