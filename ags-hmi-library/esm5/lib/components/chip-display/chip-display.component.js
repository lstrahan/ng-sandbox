/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 *  Displays a list of items as Angular Material chips.
 *  - a button is pressed to display list of selectable items
 *  - "onChange" is fired upon selection from list (either by mouse or <enter>)
 *  - each chip has an embedded icon which removes chip from list
 */
import { Component, ViewEncapsulation, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { LogService } from '../../services/log.service';
var ChipDisplayComponent = /** @class */ (function () {
    //
    function ChipDisplayComponent(ngControl, logService) {
        this.ngControl = ngControl;
        this.logService = logService;
        // Label to be displayed as placeholder
        this.label = '';
        // Can an item be added more than once?
        this.allowDuplicates = true;
        // Is control disabled?
        this.enabled = true;
        // Property name on which to base equality
        this.equalityProperty = '';
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    //
    // ControlValueAccessor methods
    //
    // ControlValueAccessor methods
    /**
     * @param {?} value
     * @return {?}
     */
    ChipDisplayComponent.prototype.writeValue = 
    //
    // ControlValueAccessor methods
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedItems = value;
        this.determineRemainingSelectableItems();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ChipDisplayComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    ChipDisplayComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @return {?}
     */
    ChipDisplayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    // Gets fired on changes to all inputs, but only need to take some action when
    // selectable items get changed.
    // Gets fired on changes to all inputs, but only need to take some action when
    // selectable items get changed.
    /**
     * @param {?} changes
     * @return {?}
     */
    ChipDisplayComponent.prototype.ngOnChanges = 
    // Gets fired on changes to all inputs, but only need to take some action when
    // selectable items get changed.
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.selectableItems) {
            // If remaining items list hasn't yet been populated, do that now.
            if (!this.remainingSelectableItems) {
                this.remainingSelectableItems = this.selectableItems.slice(0, this.selectableItems.length);
            }
            this.determineRemainingSelectableItems();
        }
    };
    // Item selected from list
    // Item selected from list
    /**
     * @param {?} item
     * @return {?}
     */
    ChipDisplayComponent.prototype.onSelected = 
    // Item selected from list
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selectedItems.push(item);
        this.determineRemainingSelectableItems();
        this.onChange(this.selectedItems);
    };
    // Item removed from displayed chips
    // Item removed from displayed chips
    /**
     * @param {?} item
     * @return {?}
     */
    ChipDisplayComponent.prototype.onRemoved = 
    // Item removed from displayed chips
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this.selectedItems.indexOf(item);
        if (index >= 0) {
            this.selectedItems.splice(index, 1);
        }
        this.determineRemainingSelectableItems();
        this.onChange(this.selectedItems);
    };
    // If "Allow duplicates" flag is "true", keep selectable list the same.
    // If "Allow duplicates" flag is "false", remove selected items from selectable list.
    // If "Allow duplicates" flag is "true", keep selectable list the same.
    // If "Allow duplicates" flag is "false", remove selected items from selectable list.
    /**
     * @return {?}
     */
    ChipDisplayComponent.prototype.determineRemainingSelectableItems = 
    // If "Allow duplicates" flag is "true", keep selectable list the same.
    // If "Allow duplicates" flag is "false", remove selected items from selectable list.
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.selectedItems || !this.selectableItems) {
            return;
        }
        if (!this.allowDuplicates) {
            this.remainingSelectableItems = this.selectableItems.filter(function (x) {
                return !_this.findItemInList(x, _this.selectedItems);
            });
        }
    };
    // Search for equality of items by comparing value in KeyValue pair
    // Search for equality of items by comparing value in KeyValue pair
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    ChipDisplayComponent.prototype.findItemInList = 
    // Search for equality of items by comparing value in KeyValue pair
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    function (item, list) {
        if (!item || list.length === 0) {
            return false;
        }
        /** @type {?} */
        var itemValueType = typeof item.value;
        /** @type {?} */
        var listValueType = typeof list[0].value;
        if (itemValueType !== listValueType) {
            this.logService.warn('Chip display comparing unequal types.  Ensure selectable items and selected items are of same type.');
            return false;
        }
        if (itemValueType === 'number') {
            return this.compareNumbers(item, list);
        }
        else if (itemValueType === 'string') {
            return this.compareStrings(item, list);
        }
        else if (itemValueType === 'object' && this.equalityProperty &&
            item.value.hasOwnProperty(this.equalityProperty)) {
            return this.compareObjects(item, list);
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    ChipDisplayComponent.prototype.compareNumbers = /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    function (item, list) {
        /** @type {?} */
        var index = list.length;
        while (index--) {
            if (list[index].value === item.value) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    ChipDisplayComponent.prototype.compareStrings = /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    function (item, list) {
        /** @type {?} */
        var index = list.length;
        while (index--) {
            if (list[index].value.localeCompare(item.value) === 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    ChipDisplayComponent.prototype.compareObjects = /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    function (item, list) {
        /** @type {?} */
        var index = list.length;
        while (index--) {
            if (list[index].value[this.equalityProperty] === item.value[this.equalityProperty]) {
                return true;
            }
        }
        return false;
    };
    ChipDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-chip-display',
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n  \r\n  <mat-form-field appearance=\"fill\" disabled=\"!enabled\">\r\n    <mat-chip-list placeholder=\"label\">\r\n      <mat-chip *ngFor=\"let selectedItem of selectedItems\" \r\n          [selectable]=\"true\" \r\n          [removable]=\"true\" \r\n          (removed)=\"onRemoved(selectedItem)\">\r\n        {{ selectedItem.key }}\r\n        <mat-icon matChipRemove>cancel</mat-icon>\r\n      </mat-chip>\r\n      <div>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"selectableMenu\"\r\n            [disabled]=\"!enabled\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-chip-list>\r\n    <mat-label>{{ label }}</mat-label>\r\n  </mat-form-field>\r\n\r\n  <mat-menu #selectableMenu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let selectableItem of remainingSelectableItems\" \r\n        (click)=\"onSelected(selectableItem)\">\r\n      {{ selectableItem.key }}\r\n    </button>\r\n  </mat-menu>\r\n  \r\n</div>\r\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div{flex-grow:1}ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div button{float:right}"]
                }] }
    ];
    /** @nocollapse */
    ChipDisplayComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: LogService }
    ]; };
    ChipDisplayComponent.propDecorators = {
        label: [{ type: Input }],
        selectableItems: [{ type: Input }],
        allowDuplicates: [{ type: Input }],
        enabled: [{ type: Input }],
        equalityProperty: [{ type: Input }]
    };
    return ChipDisplayComponent;
}());
export { ChipDisplayComponent };
if (false) {
    /** @type {?} */
    ChipDisplayComponent.prototype.label;
    /** @type {?} */
    ChipDisplayComponent.prototype.selectableItems;
    /** @type {?} */
    ChipDisplayComponent.prototype.allowDuplicates;
    /** @type {?} */
    ChipDisplayComponent.prototype.enabled;
    /** @type {?} */
    ChipDisplayComponent.prototype.equalityProperty;
    /** @type {?} */
    ChipDisplayComponent.prototype.selectedItems;
    /** @type {?} */
    ChipDisplayComponent.prototype.remainingSelectableItems;
    /** @type {?} */
    ChipDisplayComponent.prototype.onChange;
    /** @type {?} */
    ChipDisplayComponent.prototype.onTouched;
    /** @type {?} */
    ChipDisplayComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    ChipDisplayComponent.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoaXAtZGlzcGxheS9jaGlwLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxTQUFTLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhEO0lBcUNFLEVBQUU7SUFFRiw4QkFDNkIsU0FBb0IsRUFDdkMsVUFBc0I7UUFESCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3ZDLGVBQVUsR0FBVixVQUFVLENBQVk7O1FBaEN2QixVQUFLLEdBQVcsRUFBRSxDQUFDOztRQU1uQixvQkFBZSxHQUFZLElBQUksQ0FBQzs7UUFFaEMsWUFBTyxHQUFZLElBQUksQ0FBQzs7UUFFeEIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBd0JuQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7SUFqQkgsRUFBRTtJQUNGLCtCQUErQjs7Ozs7OztJQUMvQix5Q0FBVTs7Ozs7OztJQUFWLFVBQVcsS0FBOEI7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFDRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFD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QUFDLEVBQUU7Z0JBQ2xGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBdkpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxzaENBQTRDO29CQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVJRLFNBQVMsdUJBMkNiLFFBQVEsWUFBSSxJQUFJO2dCQTFDWixVQUFVOzs7d0JBV2hCLEtBQUs7a0NBSUwsS0FBSztrQ0FFTCxLQUFLOzBCQUVMLEtBQUs7bUNBRUwsS0FBSzs7SUFxSVIsMkJBQUM7Q0FBQSxBQXhKRCxJQXdKQztTQWxKWSxvQkFBb0I7OztJQUcvQixxQ0FBNEI7O0lBSTVCLCtDQUFrRDs7SUFFbEQsK0NBQXlDOztJQUV6Qyx1Q0FBaUM7O0lBRWpDLGdEQUF1Qzs7SUFHdkMsNkNBQXVDOztJQUV2Qyx3REFBa0Q7O0lBRWxELHdDQUFtQjs7SUFDbkIseUNBQW9COztJQWFsQix5Q0FBK0M7Ozs7O0lBQy9DLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG4gKiAgRGlzcGxheXMgYSBsaXN0IG9mIGl0ZW1zIGFzIEFuZ3VsYXIgTWF0ZXJpYWwgY2hpcHMuXHJcbiAqICAtIGEgYnV0dG9uIGlzIHByZXNzZWQgdG8gZGlzcGxheSBsaXN0IG9mIHNlbGVjdGFibGUgaXRlbXNcclxuICogIC0gXCJvbkNoYW5nZVwiIGlzIGZpcmVkIHVwb24gc2VsZWN0aW9uIGZyb20gbGlzdCAoZWl0aGVyIGJ5IG1vdXNlIG9yIDxlbnRlcj4pXHJcbiAqICAtIGVhY2ggY2hpcCBoYXMgYW4gZW1iZWRkZWQgaWNvbiB3aGljaCByZW1vdmVzIGNoaXAgZnJvbSBsaXN0XHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPcHRpb25hbCwgU2VsZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1jaGlwLWRpc3BsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoaXAtZGlzcGxheS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGlwRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIC8vIExhYmVsIHRvIGJlIGRpc3BsYXllZCBhcyBwbGFjZWhvbGRlclxyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICAvLyBMaXN0IG9mIGl0ZW1zIGZyb20gd2hpY2ggdG8gY2hvb3NlLlxyXG4gIC8vIGtleSA9IGRpc3BsYXllZCB2YWx1ZSAoZS5nLiBncm91cCBuYW1lKVxyXG4gIC8vIHZhbHVlID0gYXMgYSBydWxlLCB0aGUgaW50ZXJuYWwgR1VJRCAoZS5nLiBncm91cCBJRClcclxuICBASW5wdXQoKSBzZWxlY3RhYmxlSXRlbXM6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xyXG4gIC8vIENhbiBhbiBpdGVtIGJlIGFkZGVkIG1vcmUgdGhhbiBvbmNlP1xyXG4gIEBJbnB1dCgpIGFsbG93RHVwbGljYXRlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gSXMgY29udHJvbCBkaXNhYmxlZD9cclxuICBASW5wdXQoKSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAvLyBQcm9wZXJ0eSBuYW1lIG9uIHdoaWNoIHRvIGJhc2UgZXF1YWxpdHlcclxuICBASW5wdXQoKSBlcXVhbGl0eVByb3BlcnR5OiBzdHJpbmcgPSAnJztcclxuICBcclxuICAvLyBcInNlbGVjdGVkSXRlbXNcIiBpcyB1cGRhdGVkIGJ5IHNldHRpbmcgdmFsdWUgb2YgZm9ybSBjb250cm9sIGFuZCBub3QgdmlhIGlucHV0IHBhcm1zXHJcbiAgc2VsZWN0ZWRJdGVtczogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W107XHJcbiAgLy8gXCJyZW1haW5pbmdTZWxlY3RhYmxlSXRlbXNcIiBpcyBkZXBlbmRlbnQgb24gdmFsdWUgb2YgXCJhbGxvd0R1cGxpY2F0ZXNcIlxyXG4gIHJlbWFpbmluZ1NlbGVjdGFibGVJdGVtczogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W107XHJcblxyXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG5cclxuICAvL1xyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG1ldGhvZHNcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSkgeyBcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5kZXRlcm1pbmVSZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMoKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XHJcbiAgLy9cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIFxyXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkgeyBcclxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIC8vIEdldHMgZmlyZWQgb24gY2hhbmdlcyB0byBhbGwgaW5wdXRzLCBidXQgb25seSBuZWVkIHRvIHRha2Ugc29tZSBhY3Rpb24gd2hlblxyXG4gIC8vIHNlbGVjdGFibGUgaXRlbXMgZ2V0IGNoYW5nZWQuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0YWJsZUl0ZW1zKSB7XHJcbiAgICAgIC8vIElmIHJlbWFpbmluZyBpdGVtcyBsaXN0IGhhc24ndCB5ZXQgYmVlbiBwb3B1bGF0ZWQsIGRvIHRoYXQgbm93LlxyXG4gICAgICBpZiAoIXRoaXMucmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMgPSB0aGlzLnNlbGVjdGFibGVJdGVtcy5zbGljZSgwLCB0aGlzLnNlbGVjdGFibGVJdGVtcy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJdGVtIHNlbGVjdGVkIGZyb20gbGlzdFxyXG4gIG9uU2VsZWN0ZWQoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyBJdGVtIHJlbW92ZWQgZnJvbSBkaXNwbGF5ZWQgY2hpcHNcclxuICBvblJlbW92ZWQoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRldGVybWluZVJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcygpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgXCJBbGxvdyBkdXBsaWNhdGVzXCIgZmxhZyBpcyBcInRydWVcIiwga2VlcCBzZWxlY3RhYmxlIGxpc3QgdGhlIHNhbWUuXHJcbiAgLy8gSWYgXCJBbGxvdyBkdXBsaWNhdGVzXCIgZmxhZyBpcyBcImZhbHNlXCIsIHJlbW92ZSBzZWxlY3RlZCBpdGVtcyBmcm9tIHNlbGVjdGFibGUgbGlzdC5cclxuICBkZXRlcm1pbmVSZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtcyB8fCAhdGhpcy5zZWxlY3RhYmxlSXRlbXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5hbGxvd0R1cGxpY2F0ZXMpIHtcclxuICAgICAgdGhpcy5yZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMgPSB0aGlzLnNlbGVjdGFibGVJdGVtcy5maWx0ZXIoeCA9PiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZpbmRJdGVtSW5MaXN0KHgsIHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2VhcmNoIGZvciBlcXVhbGl0eSBvZiBpdGVtcyBieSBjb21wYXJpbmcgdmFsdWUgaW4gS2V5VmFsdWUgcGFpclxyXG4gIGZpbmRJdGVtSW5MaXN0KGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55PiwgbGlzdDogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W10pOiBib29sZWFuIHtcclxuXHJcbiAgICBpZiAoIWl0ZW0gfHwgbGlzdC5sZW5ndGggPT09IDApICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbVZhbHVlVHlwZSA9IHR5cGVvZiBpdGVtLnZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZVR5cGUgPSB0eXBlb2YgbGlzdFswXS52YWx1ZTtcclxuICAgIGlmIChpdGVtVmFsdWVUeXBlICE9PSBsaXN0VmFsdWVUeXBlKSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS53YXJuKCdDaGlwIGRpc3BsYXkgY29tcGFyaW5nIHVuZXF1YWwgdHlwZXMuICBFbnN1cmUgc2VsZWN0YWJsZSBpdGVtcyBhbmQgc2VsZWN0ZWQgaXRlbXMgYXJlIG9mIHNhbWUgdHlwZS4nKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtVmFsdWVUeXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlTnVtYmVycyhpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGl0ZW1WYWx1ZVR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVTdHJpbmdzKGl0ZW0sIGxpc3QpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXRlbVZhbHVlVHlwZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5lcXVhbGl0eVByb3BlcnR5ICYmXHJcbiAgICAgIGl0ZW0udmFsdWUuaGFzT3duUHJvcGVydHkodGhpcy5lcXVhbGl0eVByb3BlcnR5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlT2JqZWN0cyhpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wYXJlTnVtYmVycyhpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleC0tKSB7XHJcbiAgICAgIGlmIChsaXN0W2luZGV4XS52YWx1ZSA9PT0gaXRlbS52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlU3RyaW5ncyhpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleC0tKSB7XHJcbiAgICAgIGlmIChsaXN0W2luZGV4XS52YWx1ZS5sb2NhbGVDb21wYXJlKGl0ZW0udmFsdWUpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVPYmplY3RzKGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55PiwgbGlzdDogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W10pOiBib29sZWFuIHtcclxuICAgIGxldCBpbmRleCA9IGxpc3QubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleC0tKSB7XHJcbiAgICAgIGlmIChsaXN0W2luZGV4XS52YWx1ZVt0aGlzLmVxdWFsaXR5UHJvcGVydHldID09PSBpdGVtLnZhbHVlW3RoaXMuZXF1YWxpdHlQcm9wZXJ0eV0pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=