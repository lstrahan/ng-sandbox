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
export class ChipDisplayComponent {
    //
    /**
     * @param {?} ngControl
     * @param {?} logService
     */
    constructor(ngControl, logService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selectedItems = value;
        this.determineRemainingSelectableItems();
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
     * @return {?}
     */
    ngOnInit() { }
    // Gets fired on changes to all inputs, but only need to take some action when
    // selectable items get changed.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectableItems) {
            // If remaining items list hasn't yet been populated, do that now.
            if (!this.remainingSelectableItems) {
                this.remainingSelectableItems = this.selectableItems.slice(0, this.selectableItems.length);
            }
            this.determineRemainingSelectableItems();
        }
    }
    // Item selected from list
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.selectedItems.push(item);
        this.determineRemainingSelectableItems();
        this.onChange(this.selectedItems);
    }
    // Item removed from displayed chips
    /**
     * @param {?} item
     * @return {?}
     */
    onRemoved(item) {
        /** @type {?} */
        const index = this.selectedItems.indexOf(item);
        if (index >= 0) {
            this.selectedItems.splice(index, 1);
        }
        this.determineRemainingSelectableItems();
        this.onChange(this.selectedItems);
    }
    // If "Allow duplicates" flag is "true", keep selectable list the same.
    // If "Allow duplicates" flag is "false", remove selected items from selectable list.
    /**
     * @return {?}
     */
    determineRemainingSelectableItems() {
        if (!this.selectedItems || !this.selectableItems) {
            return;
        }
        if (!this.allowDuplicates) {
            this.remainingSelectableItems = this.selectableItems.filter(x => {
                return !this.findItemInList(x, this.selectedItems);
            });
        }
    }
    // Search for equality of items by comparing value in KeyValue pair
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    findItemInList(item, list) {
        if (!item || list.length === 0) {
            return false;
        }
        /** @type {?} */
        let itemValueType = typeof item.value;
        /** @type {?} */
        let listValueType = typeof list[0].value;
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
    }
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    compareNumbers(item, list) {
        /** @type {?} */
        let index = list.length;
        while (index--) {
            if (list[index].value === item.value) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    compareStrings(item, list) {
        /** @type {?} */
        let index = list.length;
        while (index--) {
            if (list[index].value.localeCompare(item.value) === 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    compareObjects(item, list) {
        /** @type {?} */
        let index = list.length;
        while (index--) {
            if (list[index].value[this.equalityProperty] === item.value[this.equalityProperty]) {
                return true;
            }
        }
        return false;
    }
}
ChipDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-chip-display',
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n  \r\n  <mat-form-field appearance=\"fill\" disabled=\"!enabled\">\r\n    <mat-chip-list placeholder=\"label\">\r\n      <mat-chip *ngFor=\"let selectedItem of selectedItems\" \r\n          [selectable]=\"true\" \r\n          [removable]=\"true\" \r\n          (removed)=\"onRemoved(selectedItem)\">\r\n        {{ selectedItem.key }}\r\n        <mat-icon matChipRemove>cancel</mat-icon>\r\n      </mat-chip>\r\n      <div>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"selectableMenu\"\r\n            [disabled]=\"!enabled\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-chip-list>\r\n    <mat-label>{{ label }}</mat-label>\r\n  </mat-form-field>\r\n\r\n  <mat-menu #selectableMenu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let selectableItem of remainingSelectableItems\" \r\n        (click)=\"onSelected(selectableItem)\">\r\n      {{ selectableItem.key }}\r\n    </button>\r\n  </mat-menu>\r\n  \r\n</div>\r\n  ",
                encapsulation: ViewEncapsulation.None,
                styles: ["ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div{flex-grow:1}ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div button{float:right}"]
            }] }
];
/** @nocollapse */
ChipDisplayComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: LogService }
];
ChipDisplayComponent.propDecorators = {
    label: [{ type: Input }],
    selectableItems: [{ type: Input }],
    allowDuplicates: [{ type: Input }],
    enabled: [{ type: Input }],
    equalityProperty: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoaXAtZGlzcGxheS9jaGlwLWRpc3BsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxTQUFTLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUXhELE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQWlDL0IsWUFDNkIsU0FBb0IsRUFDdkMsVUFBc0I7UUFESCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3ZDLGVBQVUsR0FBVixVQUFVLENBQVk7O1FBaEN2QixVQUFLLEdBQVcsRUFBRSxDQUFDOztRQU1uQixvQkFBZSxHQUFZLElBQUksQ0FBQzs7UUFFaEMsWUFBTyxHQUFZLElBQUksQ0FBQzs7UUFFeEIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBd0JuQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7Ozs7SUFmSCxVQUFVLENBQUMsS0FBOEI7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztJQUM1QyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFD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QUFLOzhCQUVMLEtBQUs7c0JBRUwsS0FBSzsrQkFFTCxLQUFLOzs7O0lBVk4scUNBQTRCOztJQUk1QiwrQ0FBa0Q7O0lBRWxELCtDQUF5Qzs7SUFFekMsdUNBQWlDOztJQUVqQyxnREFBdUM7O0lBR3ZDLDZDQUF1Qzs7SUFFdkMsd0RBQWtEOztJQUVsRCx3Q0FBbUI7O0lBQ25CLHlDQUFvQjs7SUFhbEIseUNBQStDOzs7OztJQUMvQywwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICogIERpc3BsYXlzIGEgbGlzdCBvZiBpdGVtcyBhcyBBbmd1bGFyIE1hdGVyaWFsIGNoaXBzLlxyXG4gKiAgLSBhIGJ1dHRvbiBpcyBwcmVzc2VkIHRvIGRpc3BsYXkgbGlzdCBvZiBzZWxlY3RhYmxlIGl0ZW1zXHJcbiAqICAtIFwib25DaGFuZ2VcIiBpcyBmaXJlZCB1cG9uIHNlbGVjdGlvbiBmcm9tIGxpc3QgKGVpdGhlciBieSBtb3VzZSBvciA8ZW50ZXI+KVxyXG4gKiAgLSBlYWNoIGNoaXAgaGFzIGFuIGVtYmVkZGVkIGljb24gd2hpY2ggcmVtb3ZlcyBjaGlwIGZyb20gbGlzdFxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItY2hpcC1kaXNwbGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGlwLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpcERpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAvLyBMYWJlbCB0byBiZSBkaXNwbGF5ZWQgYXMgcGxhY2Vob2xkZXJcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgLy8gTGlzdCBvZiBpdGVtcyBmcm9tIHdoaWNoIHRvIGNob29zZS5cclxuICAvLyBrZXkgPSBkaXNwbGF5ZWQgdmFsdWUgKGUuZy4gZ3JvdXAgbmFtZSlcclxuICAvLyB2YWx1ZSA9IGFzIGEgcnVsZSwgdGhlIGludGVybmFsIEdVSUQgKGUuZy4gZ3JvdXAgSUQpXHJcbiAgQElucHV0KCkgc2VsZWN0YWJsZUl0ZW1zOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXTtcclxuICAvLyBDYW4gYW4gaXRlbSBiZSBhZGRlZCBtb3JlIHRoYW4gb25jZT9cclxuICBASW5wdXQoKSBhbGxvd0R1cGxpY2F0ZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vIElzIGNvbnRyb2wgZGlzYWJsZWQ/XHJcbiAgQElucHV0KCkgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gUHJvcGVydHkgbmFtZSBvbiB3aGljaCB0byBiYXNlIGVxdWFsaXR5XHJcbiAgQElucHV0KCkgZXF1YWxpdHlQcm9wZXJ0eTogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgLy8gXCJzZWxlY3RlZEl0ZW1zXCIgaXMgdXBkYXRlZCBieSBzZXR0aW5nIHZhbHVlIG9mIGZvcm0gY29udHJvbCBhbmQgbm90IHZpYSBpbnB1dCBwYXJtc1xyXG4gIHNlbGVjdGVkSXRlbXM6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xyXG4gIC8vIFwicmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zXCIgaXMgZGVwZW5kZW50IG9uIHZhbHVlIG9mIFwiYWxsb3dEdXBsaWNhdGVzXCJcclxuICByZW1haW5pbmdTZWxlY3RhYmxlSXRlbXM6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xyXG5cclxuICBvbkNoYW5nZTogRnVuY3Rpb247XHJcbiAgb25Ub3VjaGVkOiBGdW5jdGlvbjtcclxuXHJcbiAgLy9cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBtZXRob2RzXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W10pIHsgXHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxyXG4gIC8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICBcclxuICAgICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHsgXHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICAvLyBHZXRzIGZpcmVkIG9uIGNoYW5nZXMgdG8gYWxsIGlucHV0cywgYnV0IG9ubHkgbmVlZCB0byB0YWtlIHNvbWUgYWN0aW9uIHdoZW5cclxuICAvLyBzZWxlY3RhYmxlIGl0ZW1zIGdldCBjaGFuZ2VkLlxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGFibGVJdGVtcykge1xyXG4gICAgICAvLyBJZiByZW1haW5pbmcgaXRlbXMgbGlzdCBoYXNuJ3QgeWV0IGJlZW4gcG9wdWxhdGVkLCBkbyB0aGF0IG5vdy5cclxuICAgICAgaWYgKCF0aGlzLnJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcykge1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zID0gdGhpcy5zZWxlY3RhYmxlSXRlbXMuc2xpY2UoMCwgdGhpcy5zZWxlY3RhYmxlSXRlbXMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRldGVybWluZVJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSBzZWxlY3RlZCBmcm9tIGxpc3RcclxuICBvblNlbGVjdGVkKGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55Pikge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB0aGlzLmRldGVybWluZVJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcygpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSByZW1vdmVkIGZyb20gZGlzcGxheWVkIGNoaXBzXHJcbiAgb25SZW1vdmVkKGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55Pikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZXRlcm1pbmVSZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMoKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIElmIFwiQWxsb3cgZHVwbGljYXRlc1wiIGZsYWcgaXMgXCJ0cnVlXCIsIGtlZXAgc2VsZWN0YWJsZSBsaXN0IHRoZSBzYW1lLlxyXG4gIC8vIElmIFwiQWxsb3cgZHVwbGljYXRlc1wiIGZsYWcgaXMgXCJmYWxzZVwiLCByZW1vdmUgc2VsZWN0ZWQgaXRlbXMgZnJvbSBzZWxlY3RhYmxlIGxpc3QuXHJcbiAgZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMgfHwgIXRoaXMuc2VsZWN0YWJsZUl0ZW1zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuYWxsb3dEdXBsaWNhdGVzKSB7XHJcbiAgICAgIHRoaXMucmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zID0gdGhpcy5zZWxlY3RhYmxlSXRlbXMuZmlsdGVyKHggPT4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5maW5kSXRlbUluTGlzdCh4LCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNlYXJjaCBmb3IgZXF1YWxpdHkgb2YgaXRlbXMgYnkgY29tcGFyaW5nIHZhbHVlIGluIEtleVZhbHVlIHBhaXJcclxuICBmaW5kSXRlbUluTGlzdChpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgaWYgKCFpdGVtIHx8IGxpc3QubGVuZ3RoID09PSAwKSAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1WYWx1ZVR5cGUgPSB0eXBlb2YgaXRlbS52YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWVUeXBlID0gdHlwZW9mIGxpc3RbMF0udmFsdWU7XHJcbiAgICBpZiAoaXRlbVZhbHVlVHlwZSAhPT0gbGlzdFZhbHVlVHlwZSkge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2Uud2FybignQ2hpcCBkaXNwbGF5IGNvbXBhcmluZyB1bmVxdWFsIHR5cGVzLiAgRW5zdXJlIHNlbGVjdGFibGUgaXRlbXMgYW5kIHNlbGVjdGVkIGl0ZW1zIGFyZSBvZiBzYW1lIHR5cGUuJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbVZhbHVlVHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZU51bWJlcnMoaXRlbSwgbGlzdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpdGVtVmFsdWVUeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlU3RyaW5ncyhpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGl0ZW1WYWx1ZVR5cGUgPT09ICdvYmplY3QnICYmIHRoaXMuZXF1YWxpdHlQcm9wZXJ0eSAmJlxyXG4gICAgICBpdGVtLnZhbHVlLmhhc093blByb3BlcnR5KHRoaXMuZXF1YWxpdHlQcm9wZXJ0eSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZU9iamVjdHMoaXRlbSwgbGlzdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcGFyZU51bWJlcnMoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+LCBsaXN0OiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGluZGV4ID0gbGlzdC5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xyXG4gICAgICBpZiAobGlzdFtpbmRleF0udmFsdWUgPT09IGl0ZW0udmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZVN0cmluZ3MoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+LCBsaXN0OiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGluZGV4ID0gbGlzdC5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xyXG4gICAgICBpZiAobGlzdFtpbmRleF0udmFsdWUubG9jYWxlQ29tcGFyZShpdGVtLnZhbHVlKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlT2JqZWN0cyhpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xyXG4gICAgICBpZiAobGlzdFtpbmRleF0udmFsdWVbdGhpcy5lcXVhbGl0eVByb3BlcnR5XSA9PT0gaXRlbS52YWx1ZVt0aGlzLmVxdWFsaXR5UHJvcGVydHldKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19