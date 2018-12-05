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
var INVALID_ENTITY = new PartialEntity({
    name: '',
    agsEntityId: '',
});
var EntitySelectorComponent = /** @class */ (function () {
    function EntitySelectorComponent(ngControl, entityService, logService) {
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
    // ControlValueAccessor methods
    /**
     * @param {?} value
     * @return {?}
     */
    EntitySelectorComponent.prototype.writeValue = 
    // ControlValueAccessor methods
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) { this.selectedEntity.entityId = value; };
    /**
     * @param {?} fn
     * @return {?}
     */
    EntitySelectorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    EntitySelectorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @return {?}
     */
    EntitySelectorComponent.prototype.createForm = /**
     * @return {?}
     */
    function () {
        this.inputCtrl = new FormControl({ value: '', disabled: false }, { /* validators: Validators.required */});
        this.optionsCtrl = new FormControl();
        this.entitySelectionFormGroup = new FormGroup({
            inputCtrl: this.inputCtrl,
            optionsCtrl: this.optionsCtrl,
        });
    };
    /**
     * @return {?}
     */
    EntitySelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this;
        this.inputCtrl.valueChanges.pipe(debounceTime(500), switchMap(function (term) {
            /** @type {?} */
            var termType = typeof term;
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
            .subscribe(function (result) {
            component.isSearching = false;
            component.entities = result;
        });
    };
    /**
     * @return {?}
     */
    EntitySelectorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?=} entity
     * @return {?}
     */
    EntitySelectorComponent.prototype.displayEntityAs = /**
     * @param {?=} entity
     * @return {?}
     */
    function (entity) {
        if (entity && entity.name) {
            return entity.name.trim();
        }
        else {
            return '';
        }
    };
    // Ensure no list pops up when entering control.
    // Ensure no list pops up when entering control.
    /**
     * @param {?} event
     * @return {?}
     */
    EntitySelectorComponent.prototype.onFocus = 
    // Ensure no list pops up when entering control.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.entities = [];
        this.hasFocus = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EntitySelectorComponent.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.entitySelectionFormGroup.reset({
            inputCtrl: this.selectedEntity,
        });
        this.hasFocus = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EntitySelectorComponent.prototype.onSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectedEntity = event.source.value;
        this.name = this.selectedEntity.name;
        this.id = this.selectedEntity.entityId;
        this.onChange(this.selectedEntity.entityId);
    };
    /**
     * @return {?}
     */
    EntitySelectorComponent.prototype.onMouseDown = /**
     * @return {?}
     */
    function () {
        this.selectedEntity = INVALID_ENTITY;
        this.name = '';
        this.id = '';
        this.onChange('');
        if (this.selectedEntity !== this.incomingEntity) {
            this.incomingEntity = INVALID_ENTITY;
        }
        this.entities = [];
        this.entitySelectionFormGroup.get('inputCtrl').setValue('', { emitEvent: false });
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    EntitySelectorComponent.prototype.getTitle = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        /** @type {?} */
        var title = '';
        title += 'SCC:  ' + (entity.scc ? entity.scc.trim() : '');
        title += '\nCountry:  ' + (entity.countryName ? entity.countryName.trim() : '');
        title += '\nAffiliation:  ' + (entity.affiliation ? entity.affiliation.trim() : '');
        return title;
    };
    /**
     * @param {?} entity
     * @param {?} searchTerm
     * @return {?}
     */
    EntitySelectorComponent.prototype.formatResults = /**
     * @param {?} entity
     * @param {?} searchTerm
     * @return {?}
     */
    function (entity, searchTerm) {
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var terms = searchTerm.split(' ');
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
            var found = true;
            for (var i = 0; i < termsToSearchFor.length; i++) {
                if (stringToSearch.toUpperCase().indexOf(termsToSearchFor[i].toUpperCase()) < 0) {
                    found = false;
                    break;
                }
            }
            return found;
        }
        // Add matching group name(s)
        /** @type {?} */
        var groupText = '';
        /** @type {?} */
        var firstGroup = true;
        entity.groups.forEach(function (group) {
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
    };
    EntitySelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-entity-selector',
                    template: "<form [formGroup]=\"entitySelectionFormGroup\">\r\n\r\n  <mat-form-field appearance=\"fill\">\r\n    <input type=\"text\" matInput formControlName=\"inputCtrl\" #inputRef\r\n        [matAutocomplete]=\"autoComplete\"\r\n        (blur)=\"onBlur($event)\"\r\n        (focus)=\"onFocus($event)\">\r\n    <button matSuffix mat-icon-button\r\n        *ngIf=\"inputRef.value.length > 0 && hasFocus\"\r\n        tabindex=\"-1\"\r\n        (mousedown)=\"onMouseDown()\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-error>WARNING:  Not a valid Entity</mat-error>\r\n\r\n\r\n    <mat-autocomplete #autoComplete=\"matAutocomplete\"\r\n        [displayWith]=\"displayEntityAs\"\r\n        [class.hidden]=\"entities.length == 0\">\r\n      <mat-option\r\n          *ngIf=\"!isSearching &&\r\n                (!entities || entities.length == 0)\"\r\n          [disabled]=\"true\">\r\n        No Suggestions Found\r\n      </mat-option>\r\n      <mat-option class=\"bower\"\r\n          *ngFor=\"let entity of entities\"\r\n          [value]=\"entity\"\r\n          matTooltip=\"{{ formatResults(entity, inputRef.value) }}\"\r\n          (onSelectionChange)=\"onSelected($event)\">\r\n        <div [innerHTML]=\"formatResults(entity, inputRef.value) | highlight: inputRef.value\"></div>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <mat-progress-bar style=\"top: -20px;\" *ngIf=\"isSearching\"\r\n    color=\"accent\" mode=\"indeterminate\">\r\n  </mat-progress-bar>\r\n\r\n</form>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ags-lib-entity-selector{overflow-x:visible}ags-lib-entity-selector .mat-form-field{min-width:100%}ags-lib-entity-selector .mat-icon{font-size:18px!important}ags-lib-entity-selector .mat-select-content{background-color:#32cd32}.search-highlight{font-weight:700}.hidden{display:none}"]
                }] }
    ];
    /** @nocollapse */
    EntitySelectorComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: EntityService },
        { type: LogService }
    ]; };
    EntitySelectorComponent.propDecorators = {
        label: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }]
    };
    return EntitySelectorComponent;
}());
export { EntitySelectorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2VudGl0eS1zZWxlY3Rvci9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixLQUFLLEVBQXFCLFFBQVEsRUFBVSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUFHbEQsY0FBYyxHQUFrQixJQUFJLGFBQWEsQ0FBQztJQUN0RCxJQUFJLEVBQUUsRUFBRTtJQUNSLFdBQVcsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFHRjtJQThCRSxpQ0FDNkIsU0FBb0IsRUFDdkMsYUFBNEIsRUFDNUIsVUFBc0I7UUFGSCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF6QnZCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixPQUFFLEdBQVcsRUFBRSxDQUFDO1FBU3pCLGFBQVEsR0FBb0IsRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBWSxLQUFLLENB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QU0sQ0FBQztJQUNoQixDQUFDOztnQkFoTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG1qREFBK0M7b0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBbkJnQyxTQUFTLHVCQTZDckMsUUFBUSxZQUFJLElBQUk7Z0JBekNaLGFBQWE7Z0JBQ2IsVUFBVTs7O3dCQWlCaEIsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7O0lBdUxSLDhCQUFDO0NBQUEsQUFqTUQsSUFpTUM7U0EzTFksdUJBQXVCOzs7SUFFbEMsd0NBQTRCOztJQUM1Qix1Q0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFHekIsMkNBQW1COztJQUNuQiw0Q0FBb0I7O0lBRXBCLDJEQUFvQzs7SUFDcEMsNENBQXVCOztJQUN2Qiw4Q0FBeUI7O0lBQ3pCLDJDQUErQjs7SUFDL0IsMkNBQTBCOztJQUMxQixpREFBK0M7O0lBQy9DLGlEQUErQzs7SUFDL0MsOENBQW9COztJQVFsQiw0Q0FBK0M7Ozs7O0lBQy9DLGdEQUFvQzs7Ozs7SUFDcEMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTmdDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhcnRpYWxFbnRpdHksIEdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0eSc7XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lbnRpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb24nO1xyXG5cclxuY29uc3QgSU5WQUxJRF9FTlRJVFk6IFBhcnRpYWxFbnRpdHkgPSBuZXcgUGFydGlhbEVudGl0eSh7XHJcbiAgbmFtZTogJycsXHJcbiAgYWdzRW50aXR5SWQ6ICcnLFxyXG59KTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItZW50aXR5LXNlbGVjdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIC8vIEBPdXRwdXQoKSBlbnRpdHlTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFydGlhbEVudGl0eT4oKTtcclxuXHJcbiAgb25DaGFuZ2U6IEZ1bmN0aW9uO1xyXG4gIG9uVG91Y2hlZDogRnVuY3Rpb247XHJcblxyXG4gIGVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIGlucHV0Q3RybDogRm9ybUNvbnRyb2w7XHJcbiAgb3B0aW9uc0N0cmw6IEZvcm1Db250cm9sO1xyXG4gIGVudGl0aWVzOiBQYXJ0aWFsRW50aXR5W10gPSBbXTtcclxuICBoYXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGluY29taW5nRW50aXR5OiBQYXJ0aWFsRW50aXR5ID0gSU5WQUxJRF9FTlRJVFk7XHJcbiAgc2VsZWN0ZWRFbnRpdHk6IFBhcnRpYWxFbnRpdHkgPSBJTlZBTElEX0VOVElUWTtcclxuICBpc1NlYXJjaGluZyA9IGZhbHNlO1xyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBtZXRob2RzXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZSkgeyB0aGlzLnNlbGVjdGVkRW50aXR5LmVudGl0eUlkID0gdmFsdWU7IH1cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgZW50aXR5U2VydmljZTogRW50aXR5U2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7IHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzOyB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5pbnB1dEN0cmwgPSBuZXcgRm9ybUNvbnRyb2woXHJcbiAgICAgIHsgdmFsdWU6ICcnLCBkaXNhYmxlZDogZmFsc2UgfSwgXHJcbiAgICAgIHsgLyogdmFsaWRhdG9yczogVmFsaWRhdG9ycy5yZXF1aXJlZCAqL31cclxuICAgICk7XHJcbiAgICB0aGlzLm9wdGlvbnNDdHJsID0gbmV3IEZvcm1Db250cm9sKCk7XHJcblxyXG4gICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgaW5wdXRDdHJsOiB0aGlzLmlucHV0Q3RybCxcclxuICAgICAgb3B0aW9uc0N0cmw6IHRoaXMub3B0aW9uc0N0cmwsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMuaW5wdXRDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgc3dpdGNoTWFwKCh0ZXJtKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlcm1UeXBlID0gdHlwZW9mIHRlcm07XHJcbiAgICAgICAgaWYgKCF0ZXJtIHx8ICh0ZXJtVHlwZS5sb2NhbGVDb21wYXJlKCdzdHJpbmcnKSAhPT0gMCkgfHwgKHRlcm0ubGVuZ3RoIDwgMikpIHtcclxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdGllcyA9IFtdO1xyXG4gICAgICAgICAgY29tcG9uZW50LmlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb21wb25lbnQuaXNTZWFyY2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0aWVzID0gW107XHJcbiAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmVudGl0eVNlcnZpY2UucGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmdzKHRlcm0uc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpXHJcbiAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgY29tcG9uZW50LmlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbXBvbmVudC5lbnRpdGllcyA9IHJlc3VsdDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmluY29taW5nRW50aXR5ID0gbmV3IFBhcnRpYWxFbnRpdHkoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICBhZ3NFbnRpdHlJZDogdGhpcy5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5pbmNvbWluZ0VudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXJ0IHdpdGggaW5jb21pbmcgZXF1YWwgdG8gc2VsZWN0ZWRcclxuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmluY29taW5nRW50aXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cCkge1xyXG4gICAgICB0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cC5yZXNldCh7XHJcbiAgICAgICAgaW5wdXRDdHJsOiB0aGlzLmluY29taW5nRW50aXR5LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlFbnRpdHlBcyhlbnRpdHk/OiBQYXJ0aWFsRW50aXR5KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChlbnRpdHkgJiYgZW50aXR5Lm5hbWUpIHtcclxuICAgICAgcmV0dXJuIGVudGl0eS5uYW1lLnRyaW0oKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbnN1cmUgbm8gbGlzdCBwb3BzIHVwIHdoZW4gZW50ZXJpbmcgY29udHJvbC5cclxuICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICB0aGlzLmVudGl0aWVzID0gW107XHJcbiAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudCkge1xyXG4gICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAucmVzZXQoe1xyXG4gICAgICBpbnB1dEN0cmw6IHRoaXMuc2VsZWN0ZWRFbnRpdHksXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gZXZlbnQuc291cmNlLnZhbHVlO1xyXG4gICAgdGhpcy5uYW1lID0gdGhpcy5zZWxlY3RlZEVudGl0eS5uYW1lO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMuc2VsZWN0ZWRFbnRpdHkuZW50aXR5SWQ7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkRW50aXR5LmVudGl0eUlkKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICB0aGlzLmlkID0gJyc7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSgnJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRFbnRpdHkgIT09IHRoaXMuaW5jb21pbmdFbnRpdHkpIHtcclxuICAgICAgdGhpcy5pbmNvbWluZ0VudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbnRpdGllcyA9IFtdO1xyXG4gICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAuZ2V0KCdpbnB1dEN0cmwnKS5zZXRWYWx1ZSgnJywge2VtaXRFdmVudDogZmFsc2V9KTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKGVudGl0eTogUGFydGlhbEVudGl0eSkge1xyXG4gICAgbGV0IHRpdGxlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICB0aXRsZSArPSAnU0NDOiAgJyArIChlbnRpdHkuc2NjID8gZW50aXR5LnNjYy50cmltKCkgOiAnJyk7XHJcbiAgICB0aXRsZSArPSAnXFxuQ291bnRyeTogICcgKyAoZW50aXR5LmNvdW50cnlOYW1lID8gZW50aXR5LmNvdW50cnlOYW1lLnRyaW0oKSA6ICcnKTtcclxuICAgIHRpdGxlICs9ICdcXG5BZmZpbGlhdGlvbjogICcgKyAoZW50aXR5LmFmZmlsaWF0aW9uID8gZW50aXR5LmFmZmlsaWF0aW9uLnRyaW0oKSA6ICcnKTtcclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRSZXN1bHRzKGVudGl0eTogUGFydGlhbEVudGl0eSwgc2VhcmNoVGVybTogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICAgIGxldCB0ZXJtcyA9IHNlYXJjaFRlcm0uc3BsaXQoJyAnKTtcclxuICAgIHJlc3VsdCArPSBlbnRpdHkubmFtZS50cmltKCk7XHJcblxyXG4gICAgLy8gQWRkIFNDQyBpZiBwcmVzZW50XHJcbiAgICBpZiAoZW50aXR5LnNjYykge1xyXG4gICAgICByZXN1bHQgKz0gJywgJyArIGVudGl0eS5zY2M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXJlQWxsVGVybXNGb3VuZCh0ZXJtc1RvU2VhcmNoRm9yLCBzdHJpbmdUb1NlYXJjaCkge1xyXG4gICAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlcm1zVG9TZWFyY2hGb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3RyaW5nVG9TZWFyY2gudG9VcHBlckNhc2UoKS5pbmRleE9mKHRlcm1zVG9TZWFyY2hGb3JbaV0udG9VcHBlckNhc2UoKSkgPCAwKSB7XHJcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIG1hdGNoaW5nIGdyb3VwIG5hbWUocylcclxuICAgIGxldCBncm91cFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IGZpcnN0R3JvdXA6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZW50aXR5Lmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcclxuXHJcbiAgICAgIGlmIChhcmVBbGxUZXJtc0ZvdW5kKHRlcm1zLCBncm91cC5ncm91cE5hbWUpKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdEdyb3VwKSB7XHJcbiAgICAgICAgICBncm91cFRleHQgKz0gJywgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JvdXBUZXh0ICs9IGdyb3VwLmdyb3VwTmFtZTtcclxuICAgICAgICBmaXJzdEdyb3VwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChncm91cFRleHQpIHtcclxuICAgICAgcmVzdWx0ICs9ICcgKCcgKyBncm91cFRleHQgKyAnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19