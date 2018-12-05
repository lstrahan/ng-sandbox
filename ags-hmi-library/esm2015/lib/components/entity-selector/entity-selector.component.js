/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, Self, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';
import { empty } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { PartialEntity } from '../../models/entity';
import { EntityService } from '../../services/entity.service';
import { LogService } from '../../services/log.service';
/** @type {?} */
const INVALID_ENTITY = new PartialEntity({
    name: '',
    agsEntityId: '',
});
export class EntitySelectorComponent {
    /**
     * @param {?} ngControl
     * @param {?} entityService
     * @param {?} logService
     */
    constructor(ngControl, entityService, logService) {
        this.ngControl = ngControl;
        this.entityService = entityService;
        this.logService = logService;
        this.label = '';
        this.name = '';
        this.id = '';
        this.entities = [];
        this.hasFocus = false;
        this.incomingEntity = INVALID_ENTITY;
        this.selectedEntity = INVALID_ENTITY;
        this.isSearching = false;
        this.createForm();
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    // ControlValueAccessor methods
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { this.selectedEntity.entityId = value; }
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
    createForm() {
        this.inputCtrl = new FormControl({ value: '', disabled: false }, { /* validators: Validators.required */});
        this.optionsCtrl = new FormControl();
        this.entitySelectionFormGroup = new FormGroup({
            inputCtrl: this.inputCtrl,
            optionsCtrl: this.optionsCtrl,
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this;
        this.inputCtrl.valueChanges.pipe(debounceTime(500), switchMap((term) => {
            /** @type {?} */
            let termType = typeof term;
            if (!term || (termType.localeCompare('string') !== 0) || (term.length < 2)) {
                component.entities = [];
                component.isSearching = false;
                return empty();
            }
            else {
                component.isSearching = true;
                component.entities = [];
                return component.entityService.partialEntitiesBySubstrings(term.split(' '));
            }
        }))
            .subscribe((result) => {
            component.isSearching = false;
            component.entities = result;
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.id) {
            this.incomingEntity = new PartialEntity({
                name: this.name,
                agsEntityId: this.id,
            });
        }
        else {
            this.incomingEntity = INVALID_ENTITY;
        }
        // Start with incoming equal to selected
        this.selectedEntity = this.incomingEntity;
        if (this.entitySelectionFormGroup) {
            this.entitySelectionFormGroup.reset({
                inputCtrl: this.incomingEntity,
            });
        }
    }
    /**
     * @param {?=} entity
     * @return {?}
     */
    displayEntityAs(entity) {
        if (entity && entity.name) {
            return entity.name.trim();
        }
        else {
            return '';
        }
    }
    // Ensure no list pops up when entering control.
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.entities = [];
        this.hasFocus = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.entitySelectionFormGroup.reset({
            inputCtrl: this.selectedEntity,
        });
        this.hasFocus = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelected(event) {
        this.selectedEntity = event.source.value;
        this.name = this.selectedEntity.name;
        this.id = this.selectedEntity.entityId;
        this.onChange(this.selectedEntity.entityId);
    }
    /**
     * @return {?}
     */
    onMouseDown() {
        this.selectedEntity = INVALID_ENTITY;
        this.name = '';
        this.id = '';
        this.onChange('');
        if (this.selectedEntity !== this.incomingEntity) {
            this.incomingEntity = INVALID_ENTITY;
        }
        this.entities = [];
        this.entitySelectionFormGroup.get('inputCtrl').setValue('', { emitEvent: false });
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getTitle(entity) {
        /** @type {?} */
        let title = '';
        title += 'SCC:  ' + (entity.scc ? entity.scc.trim() : '');
        title += '\nCountry:  ' + (entity.countryName ? entity.countryName.trim() : '');
        title += '\nAffiliation:  ' + (entity.affiliation ? entity.affiliation.trim() : '');
        return title;
    }
    /**
     * @param {?} entity
     * @param {?} searchTerm
     * @return {?}
     */
    formatResults(entity, searchTerm) {
        /** @type {?} */
        let result = '';
        /** @type {?} */
        let terms = searchTerm.split(' ');
        result += entity.name.trim();
        // Add SCC if present
        if (entity.scc) {
            result += ', ' + entity.scc;
        }
        /**
         * @param {?} termsToSearchFor
         * @param {?} stringToSearch
         * @return {?}
         */
        function areAllTermsFound(termsToSearchFor, stringToSearch) {
            /** @type {?} */
            let found = true;
            for (let i = 0; i < termsToSearchFor.length; i++) {
                if (stringToSearch.toUpperCase().indexOf(termsToSearchFor[i].toUpperCase()) < 0) {
                    found = false;
                    break;
                }
            }
            return found;
        }
        // Add matching group name(s)
        /** @type {?} */
        let groupText = '';
        /** @type {?} */
        let firstGroup = true;
        entity.groups.forEach(group => {
            if (areAllTermsFound(terms, group.groupName)) {
                if (!firstGroup) {
                    groupText += ', ';
                }
                groupText += group.groupName;
                firstGroup = false;
            }
        });
        if (groupText) {
            result += ' (' + groupText + ')';
        }
        return result;
    }
}
EntitySelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-entity-selector',
                template: "<form [formGroup]=\"entitySelectionFormGroup\">\r\n\r\n  <mat-form-field appearance=\"fill\">\r\n    <input type=\"text\" matInput formControlName=\"inputCtrl\" #inputRef\r\n        [matAutocomplete]=\"autoComplete\"\r\n        (blur)=\"onBlur($event)\"\r\n        (focus)=\"onFocus($event)\">\r\n    <button matSuffix mat-icon-button\r\n        *ngIf=\"inputRef.value.length > 0 && hasFocus\"\r\n        tabindex=\"-1\"\r\n        (mousedown)=\"onMouseDown()\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-error>WARNING:  Not a valid Entity</mat-error>\r\n\r\n\r\n    <mat-autocomplete #autoComplete=\"matAutocomplete\"\r\n        [displayWith]=\"displayEntityAs\"\r\n        [class.hidden]=\"entities.length == 0\">\r\n      <mat-option\r\n          *ngIf=\"!isSearching &&\r\n                (!entities || entities.length == 0)\"\r\n          [disabled]=\"true\">\r\n        No Suggestions Found\r\n      </mat-option>\r\n      <mat-option class=\"bower\"\r\n          *ngFor=\"let entity of entities\"\r\n          [value]=\"entity\"\r\n          matTooltip=\"{{ formatResults(entity, inputRef.value) }}\"\r\n          (onSelectionChange)=\"onSelected($event)\">\r\n        <div [innerHTML]=\"formatResults(entity, inputRef.value) | highlight: inputRef.value\"></div>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <mat-progress-bar style=\"top: -20px;\" *ngIf=\"isSearching\"\r\n    color=\"accent\" mode=\"indeterminate\">\r\n  </mat-progress-bar>\r\n\r\n</form>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["ags-lib-entity-selector{overflow-x:visible}ags-lib-entity-selector .mat-form-field{min-width:100%}ags-lib-entity-selector .mat-icon{font-size:18px!important}ags-lib-entity-selector .mat-select-content{background-color:#32cd32}.search-highlight{font-weight:700}.hidden{display:none}"]
            }] }
];
/** @nocollapse */
EntitySelectorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: EntityService },
    { type: LogService }
];
EntitySelectorComponent.propDecorators = {
    label: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EntitySelectorComponent.prototype.label;
    /** @type {?} */
    EntitySelectorComponent.prototype.name;
    /** @type {?} */
    EntitySelectorComponent.prototype.id;
    /** @type {?} */
    EntitySelectorComponent.prototype.onChange;
    /** @type {?} */
    EntitySelectorComponent.prototype.onTouched;
    /** @type {?} */
    EntitySelectorComponent.prototype.entitySelectionFormGroup;
    /** @type {?} */
    EntitySelectorComponent.prototype.inputCtrl;
    /** @type {?} */
    EntitySelectorComponent.prototype.optionsCtrl;
    /** @type {?} */
    EntitySelectorComponent.prototype.entities;
    /** @type {?} */
    EntitySelectorComponent.prototype.hasFocus;
    /** @type {?} */
    EntitySelectorComponent.prototype.incomingEntity;
    /** @type {?} */
    EntitySelectorComponent.prototype.selectedEntity;
    /** @type {?} */
    EntitySelectorComponent.prototype.isSearching;
    /** @type {?} */
    EntitySelectorComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    EntitySelectorComponent.prototype.entityService;
    /**
     * @type {?}
     * @private
     */
    EntitySelectorComponent.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2VudGl0eS1zZWxlY3Rvci9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixLQUFLLEVBQXFCLFFBQVEsRUFBVSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7TUFHbEQsY0FBYyxHQUFrQixJQUFJLGFBQWEsQ0FBQztJQUN0RCxJQUFJLEVBQUUsRUFBRTtJQUNSLFdBQVcsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFTRixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUF3QmxDLFlBQzZCLFNBQW9CLEVBQ3ZDLGFBQTRCLEVBQzVCLFVBQXNCO1FBRkgsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekJ2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQVN6QixhQUFRLEdBQW9CLEVBQUUsQ0FBQztR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QUFDLElBQUk7O2FBQ3RDOzs7O1lBbkJnQyxTQUFTLHVCQTZDckMsUUFBUSxZQUFJLElBQUk7WUF6Q1osYUFBYTtZQUNiLFVBQVU7OztvQkFpQmhCLEtBQUs7bUJBQ0wsS0FBSztpQkFDTCxLQUFLOzs7O0lBRk4sd0NBQTRCOztJQUM1Qix1Q0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFHekIsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBRXBCLDJEQUFvQzs7SUFDcEMsNENBQXVCOztJQUN2Qiw4Q0FBeUI7O0lBQ3pCLDJDQUErQjs7SUFDL0IsMkNBQTBCOztJQUMxQixpREFBK0M7O0lBQy9DLGlEQUErQzs7SUFDL0MsOENBQW9COztJQVFsQiw0Q0FBK0M7Ozs7O0lBQy9DLGdEQUFvQzs7Ozs7SUFDcEMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTmdDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhcnRpYWxFbnRpdHksIEdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0eSc7XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lbnRpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb24nO1xyXG5cclxuY29uc3QgSU5WQUxJRF9FTlRJVFk6IFBhcnRpYWxFbnRpdHkgPSBuZXcgUGFydGlhbEVudGl0eSh7XHJcbiAgbmFtZTogJycsXHJcbiAgYWdzRW50aXR5SWQ6ICcnLFxyXG59KTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItZW50aXR5LXNlbGVjdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIC8vIEBPdXRwdXQoKSBlbnRpdHlTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFydGlhbEVudGl0eT4oKTtcclxuXHJcbiAgb25DaGFuZ2U6IEZ1bmN0aW9uO1xyXG4gIG9uVG91Y2hlZDogRnVuY3Rpb247XHJcblxyXG4gIGVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIGlucHV0Q3RybDogRm9ybUNvbnRyb2w7XHJcbiAgb3B0aW9uc0N0cmw6IEZvcm1Db250cm9sO1xyXG4gIGVudGl0aWVzOiBQYXJ0aWFsRW50aXR5W10gPSBbXTtcclxuICBoYXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGluY29taW5nRW50aXR5OiBQYXJ0aWFsRW50aXR5ID0gSU5WQUxJRF9FTlRJVFk7XHJcbiAgc2VsZWN0ZWRFbnRpdHk6IFBhcnRpYWxFbnRpdHkgPSBJTlZBTElEX0VOVElUWTtcclxuICBpc1NlYXJjaGluZyA9IGZhbHNlO1xyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBtZXRob2RzXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZSkgeyB0aGlzLnNlbGVjdGVkRW50aXR5LmVudGl0eUlkID0gdmFsdWU7IH1cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgZW50aXR5U2VydmljZTogRW50aXR5U2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7IHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzOyB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5pbnB1dEN0cmwgPSBuZXcgRm9ybUNvbnRyb2woXHJcbiAgICAgIHsgdmFsdWU6ICcnLCBkaXNhYmxlZDogZmFsc2UgfSwgXHJcbiAgICAgIHsgLyogdmFsaWRhdG9yczogVmFsaWRhdG9ycy5yZXF1aXJlZCAqL31cclxuICAgICk7XHJcbiAgICB0aGlzLm9wdGlvbnNDdHJsID0gbmV3IEZvcm1Db250cm9sKCk7XHJcblxyXG4gICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgaW5wdXRDdHJsOiB0aGlzLmlucHV0Q3RybCxcclxuICAgICAgb3B0aW9uc0N0cmw6IHRoaXMub3B0aW9uc0N0cmwsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMuaW5wdXRDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgc3dpdGNoTWFwKCh0ZXJtKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlcm1UeXBlID0gdHlwZW9mIHRlcm07XHJcbiAgICAgICAgaWYgKCF0ZXJtIHx8ICh0ZXJtVHlwZS5sb2NhbGVDb21wYXJlKCdzdHJpbmcnKSAhPT0gMCkgfHwgKHRlcm0ubGVuZ3RoIDwgMikpIHtcclxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdGllcyA9IFtdO1xyXG4gICAgICAgICAgY29tcG9uZW50LmlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb21wb25lbnQuaXNTZWFyY2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0aWVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmVudGl0eVNlcnZpY2UucGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmdzKHRlcm0uc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpXHJcbiAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgY29tcG9uZW50LmlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbXBvbmVudC5lbnRpdGllcyA9IHJlc3VsdDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmluY29taW5nRW50aXR5ID0gbmV3IFBhcnRpYWxFbnRpdHkoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICBhZ3NFbnRpdHlJZDogdGhpcy5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5pbmNvbWluZ0VudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXJ0IHdpdGggaW5jb21pbmcgZXF1YWwgdG8gc2VsZWN0ZWRcclxuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmluY29taW5nRW50aXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cCkge1xyXG4gICAgICB0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cC5yZXNldCh7XHJcbiAgICAgICAgaW5wdXRDdHJsOiB0aGlzLmluY29taW5nRW50aXR5LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlFbnRpdHlBcyhlbnRpdHk/OiBQYXJ0aWFsRW50aXR5KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChlbnRpdHkgJiYgZW50aXR5Lm5hbWUpIHtcclxuICAgICAgcmV0dXJuIGVudGl0eS5uYW1lLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbnN1cmUgbm8gbGlzdCBwb3BzIHVwIHdoZW4gZW50ZXJpbmcgY29udHJvbC5cclxuICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICB0aGlzLmVudGl0aWVzID0gW107XHJcbiAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudCkge1xyXG4gICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAucmVzZXQoe1xyXG4gICAgICBpbnB1dEN0cmw6IHRoaXMuc2VsZWN0ZWRFbnRpdHksXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gZXZlbnQuc291cmNlLnZhbHVlO1xyXG4gICAgdGhpcy5uYW1lID0gdGhpcy5zZWxlY3RlZEVudGl0eS5uYW1lO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMuc2VsZWN0ZWRFbnRpdHkuZW50aXR5SWQ7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkRW50aXR5LmVudGl0eUlkKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICB0aGlzLmlkID0gJyc7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSgnJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRFbnRpdHkgIT09IHRoaXMuaW5jb21pbmdFbnRpdHkpIHtcclxuICAgICAgdGhpcy5pbmNvbWluZ0VudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbnRpdGllcyA9IFtdO1xyXG4gICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAuZ2V0KCdpbnB1dEN0cmwnKS5zZXRWYWx1ZSgnJywge2VtaXRFdmVudDogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKGVudGl0eTogUGFydGlhbEVudGl0eSkge1xyXG4gICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICB0aXRsZSArPSAnU0NDOiAgJyArIChlbnRpdHkuc2NjID8gZW50aXR5LnNjYy50cmltKCkgOiAnJyk7XHJcbiAgICB0aXRsZSArPSAnXFxuQ291bnRyeTogICcgKyAoZW50aXR5LmNvdW50cnlOYW1lID8gZW50aXR5LmNvdW50cnlOYW1lLnRyaW0oKSA6ICcnKTtcclxuICAgIHRpdGxlICs9ICdcXG5BZmZpbGlhdGlvbjogICcgKyAoZW50aXR5LmFmZmlsaWF0aW9uID8gZW50aXR5LmFmZmlsaWF0aW9uLnRyaW0oKSA6ICcnKTtcclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRSZXN1bHRzKGVudGl0eTogUGFydGlhbEVudGl0eSwgc2VhcmNoVGVybTogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgIGxldCB0ZXJtcyA9IHNlYXJjaFRlcm0uc3BsaXQoJyAnKTtcclxuICAgIHJlc3VsdCArPSBlbnRpdHkubmFtZS50cmltKCk7XHJcblxyXG4gICAgLy8gQWRkIFNDQyBpZiBwcmVzZW50XHJcbiAgICBpZiAoZW50aXR5LnNjYykge1xyXG4gICAgICByZXN1bHQgKz0gJywgJyArIGVudGl0eS5zY2M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXJlQWxsVGVybXNGb3VuZCh0ZXJtc1RvU2VhcmNoRm9yLCBzdHJpbmdUb1NlYXJjaCkge1xyXG4gICAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlcm1zVG9TZWFyY2hGb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9TZWFyY2gudG9VcHBlckNhc2UoKS5pbmRleE9mKHRlcm1zVG9TZWFyY2hGb3JbaV0udG9VcHBlckNhc2UoKSkgPCAwKSB7XHJcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIG1hdGNoaW5nIGdyb3VwIG5hbWUocylcclxuICAgIGxldCBncm91cFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IGZpcnN0R3JvdXA6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZW50aXR5Lmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcclxuXHJcbiAgICAgIGlmIChhcmVBbGxUZXJtc0ZvdW5kKHRlcm1zLCBncm91cC5ncm91cE5hbWUpKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdEdyb3VwKSB7XHJcbiAgICAgICAgICBncm91cFRleHQgKz0gJywgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JvdXBUZXh0ICs9IGdyb3VwLmdyb3VwTmFtZTtcclxuICAgICAgICBmaXJzdEdyb3VwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChncm91cFRleHQpIHtcclxuICAgICAgcmVzdWx0ICs9ICcgKCcgKyBncm91cFRleHQgKyAnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19