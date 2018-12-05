/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Annotation } from '../../models/annotation';
import { AnnotationService } from '../../services/annotation.service';
import { LogService } from '../../services/log.service';
export class AnnotationComponent {
    /**
     * @param {?} formBuilder
     * @param {?} annotationService
     * @param {?} logService
     */
    constructor(formBuilder, annotationService, logService) {
        this.formBuilder = formBuilder;
        this.annotationService = annotationService;
        this.logService = logService;
        this.objectId = '';
        this.annotationType = ''; // EVENTLINK, EVENTMODEL, EVENT, OBSERVABILITY, PLAN, COA, TASK
        // create the controls
        this.annotationsFormGroup = this.formBuilder.group({
            factsCtrl: [null, { updateOn: 'blur' }],
            assumptionsCtrl: [null, { updateOn: 'blur' }]
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // call function to update the annotations whenever data changes
        this.annotationsFormGroup.valueChanges.subscribe(x => {
            if (this.annotationsFormGroup.dirty && this.annotationsFormGroup.valid) {
                this.updateAnnotations();
                this.annotationsFormGroup.markAsPristine();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.logService.debug('AnnotationsComponent.ngOnChanges()');
        if (this.objectId) {
            // Get annotations for this event and populate the controls. If no annotations exist, create them
            this.annotationService.getAnnotations(this.objectId).subscribe(annotations => {
                this.factAnnotations = annotations.filter(x => x.noteType.toUpperCase() === 'FACT');
                this.assumptionAnnotations = annotations.filter(x => x.noteType.toUpperCase() === 'ASSUMPTION');
                // Create new fact and assumption annotations if none exist
                if (!this.factAnnotations || this.factAnnotations.length <= 0) {
                    /** @type {?} */
                    let newAnnotation = new Annotation();
                    newAnnotation.objectId = this.objectId;
                    newAnnotation.annotationType = this.annotationType;
                    newAnnotation.noteType = 'Fact';
                    newAnnotation.narrative = '';
                    this.factAnnotations.push(newAnnotation);
                }
                this.annotationsFormGroup.controls['factsCtrl'].setValue(this.factAnnotations[0].narrative);
                if (!this.assumptionAnnotations || this.assumptionAnnotations.length <= 0) {
                    /** @type {?} */
                    let newAnnotation = new Annotation();
                    newAnnotation.objectId = this.objectId;
                    newAnnotation.annotationType = this.annotationType;
                    newAnnotation.noteType = 'Assumption';
                    newAnnotation.narrative = '';
                    this.assumptionAnnotations.push(newAnnotation);
                }
                this.annotationsFormGroup.controls['assumptionsCtrl'].setValue(this.assumptionAnnotations[0].narrative);
            });
        }
        else {
            throw new Error(`AnnotationComponent: required input parameter 'objectId' is undefined`);
        }
    }
    /**
     * @return {?}
     */
    updateAnnotations() {
        this.logService.debug('AnnotationsComponent::updateAnnotations()');
        /** @type {?} */
        let factsCtrl = this.annotationsFormGroup.controls['factsCtrl'];
        /** @type {?} */
        let assumptionsCtrl = this.annotationsFormGroup.controls['assumptionsCtrl'];
        if (factsCtrl.dirty) {
            this.factAnnotations[0].narrative = factsCtrl.value;
            // if the annotationId is empty that indicates that this is a new annotation
            if (!this.factAnnotations[0].id) {
                this.annotationService.createAnnotation(this.factAnnotations[0]).subscribe(res => {
                    this.factAnnotations[0] = res;
                });
            }
            else {
                this.annotationService.updateAnnotation(this.factAnnotations[0]).subscribe(res => {
                    this.factAnnotations[0] = res;
                });
            }
        }
        if (assumptionsCtrl.dirty) {
            this.assumptionAnnotations[0].narrative = assumptionsCtrl.value;
            if (!this.assumptionAnnotations[0].id) {
                this.annotationService.createAnnotation(this.assumptionAnnotations[0]).subscribe(res => {
                    this.assumptionAnnotations[0] = res;
                });
            }
            else {
                this.annotationService.updateAnnotation(this.assumptionAnnotations[0]).subscribe(res => {
                    this.assumptionAnnotations[0] = res;
                });
            }
        }
    }
}
AnnotationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-annotations',
                template: "<form [formGroup]=\"annotationsFormGroup\" fxLayout=\"column\">\r\n  <!-- Facts -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"factsCtrl\"></textarea>\r\n    <mat-label>Facts</mat-label>\r\n  </mat-form-field>\r\n\r\n  <!-- Assumptions -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"assumptionsCtrl\"></textarea>\r\n    <mat-label>Assumptions</mat-label>\r\n  </mat-form-field>\r\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
AnnotationComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AnnotationService },
    { type: LogService }
];
AnnotationComponent.propDecorators = {
    objectId: [{ type: Input }],
    annotationType: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AnnotationComponent.prototype.objectId;
    /** @type {?} */
    AnnotationComponent.prototype.annotationType;
    /** @type {?} */
    AnnotationComponent.prototype.annotationsFormGroup;
    /** @type {?} */
    AnnotationComponent.prototype.factAnnotations;
    /** @type {?} */
    AnnotationComponent.prototype.assumptionAnnotations;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype.annotationService;
    /**
     * @type {?}
     * @private
     */
    AnnotationComponent.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU94RCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFTOUIsWUFBb0IsV0FBd0IsRUFDbEMsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBRlosZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBVHZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBVyxFQUFFLENBQUMsQ0FBQywrREFBK0Q7UUFVbkcsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDdkMsZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFO2dCQUN0RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGlHQUFpRztZQUNqRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxZQUFZLENBQUMsQ0FBQztnQkFFaEcsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7O3dCQUN6RCxhQUFhLEdBQUcsSUFBSSxVQUFVLEVBQUU7b0JBQ3BDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDdkMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUNuRCxhQUFhLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFDaEMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMxQztnQkFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFOzt3QkFDckUsYUFBYSxHQUFHLElBQUksVUFBVSxFQUFFO29CQUNwQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3ZDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsYUFBYSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7b0JBQ3RDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQ0k7WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQzs7WUFFL0QsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDOztZQUMzRCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUUzRSxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUVwRCw0RUFBNEU7WUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDL0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO1lBRWhFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNyRixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3JGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7OztZQXhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isc2VBQTBDOzthQUUzQzs7OztZQVRtQixXQUFXO1lBRXRCLGlCQUFpQjtZQUNqQixVQUFVOzs7dUJBU2hCLEtBQUs7NkJBQ0wsS0FBSzs7OztJQUROLHVDQUErQjs7SUFDL0IsNkNBQXFDOztJQUVyQyxtREFBZ0M7O0lBQ2hDLDhDQUFtQzs7SUFDbkMsb0RBQXlDOzs7OztJQUU3QiwwQ0FBZ0M7Ozs7O0lBQzFDLGdEQUE0Qzs7Ozs7SUFDNUMseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9hbm5vdGF0aW9uJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbm5vdGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLWFubm90YXRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5ub3RhdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBvYmplY3RJZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYW5ub3RhdGlvblR5cGU6IHN0cmluZyA9ICcnOyAvLyBFVkVOVExJTkssIEVWRU5UTU9ERUwsIEVWRU5ULCBPQlNFUlZBQklMSVRZLCBQTEFOLCBDT0EsIFRBU0tcclxuXHJcbiAgYW5ub3RhdGlvbnNGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBmYWN0QW5ub3RhdGlvbnM6IEFycmF5PEFubm90YXRpb24+O1xyXG4gIGFzc3VtcHRpb25Bbm5vdGF0aW9uczogQXJyYXk8QW5ub3RhdGlvbj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBhbm5vdGF0aW9uU2VydmljZTogQW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGNvbnRyb2xzXHJcbiAgICB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGZhY3RzQ3RybDogW251bGwsIHsgdXBkYXRlT246ICdibHVyJyB9XSxcclxuICAgICAgYXNzdW1wdGlvbnNDdHJsOiBbbnVsbCwgeyB1cGRhdGVPbjogJ2JsdXInIH1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGFubm90YXRpb25zIHdoZW5ldmVyIGRhdGEgY2hhbmdlc1xyXG4gICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICBpZiAodGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5kaXJ0eSAmJiB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbm5vdGF0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvbnNDb21wb25lbnQubmdPbkNoYW5nZXMoKScpO1xyXG4gICAgaWYgKHRoaXMub2JqZWN0SWQpIHtcclxuICAgICAgLy8gR2V0IGFubm90YXRpb25zIGZvciB0aGlzIGV2ZW50IGFuZCBwb3B1bGF0ZSB0aGUgY29udHJvbHMuIElmIG5vIGFubm90YXRpb25zIGV4aXN0LCBjcmVhdGUgdGhlbVxyXG4gICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLmdldEFubm90YXRpb25zKHRoaXMub2JqZWN0SWQpLnN1YnNjcmliZShhbm5vdGF0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoeCA9PiB4Lm5vdGVUeXBlLnRvVXBwZXJDYXNlKCkgPT09ICdGQUNUJyk7XHJcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoeCA9PiB4Lm5vdGVUeXBlLnRvVXBwZXJDYXNlKCkgPT09ICdBU1NVTVBUSU9OJyk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZmFjdCBhbmQgYXNzdW1wdGlvbiBhbm5vdGF0aW9ucyBpZiBub25lIGV4aXN0XHJcbiAgICAgICAgaWYgKCF0aGlzLmZhY3RBbm5vdGF0aW9ucyB8fCB0aGlzLmZhY3RBbm5vdGF0aW9ucy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgbGV0IG5ld0Fubm90YXRpb24gPSBuZXcgQW5ub3RhdGlvbigpO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5vYmplY3RJZCA9IHRoaXMub2JqZWN0SWQ7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLmFubm90YXRpb25UeXBlID0gdGhpcy5hbm5vdGF0aW9uVHlwZTtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ubm90ZVR5cGUgPSAnRmFjdCc7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm5hcnJhdGl2ZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5jb250cm9sc1snZmFjdHNDdHJsJ10uc2V0VmFsdWUodGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9ucyB8fCB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9ucy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgbGV0IG5ld0Fubm90YXRpb24gPSBuZXcgQW5ub3RhdGlvbigpO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5vYmplY3RJZCA9IHRoaXMub2JqZWN0SWQ7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLmFubm90YXRpb25UeXBlID0gdGhpcy5hbm5vdGF0aW9uVHlwZTtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ubm90ZVR5cGUgPSAnQXNzdW1wdGlvbic7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm5hcnJhdGl2ZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5jb250cm9sc1snYXNzdW1wdGlvbnNDdHJsJ10uc2V0VmFsdWUodGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbm5vdGF0aW9uQ29tcG9uZW50OiByZXF1aXJlZCBpbnB1dCBwYXJhbWV0ZXIgJ29iamVjdElkJyBpcyB1bmRlZmluZWRgKTsgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbm5vdGF0aW9ucygpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvbnNDb21wb25lbnQ6OnVwZGF0ZUFubm90YXRpb25zKCknKTtcclxuICAgIFxyXG4gICAgbGV0IGZhY3RzQ3RybCA9IHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuY29udHJvbHNbJ2ZhY3RzQ3RybCddO1xyXG4gICAgbGV0IGFzc3VtcHRpb25zQ3RybCA9IHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuY29udHJvbHNbJ2Fzc3VtcHRpb25zQ3RybCddO1xyXG5cclxuICAgIGlmIChmYWN0c0N0cmwuZGlydHkpIHtcclxuICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlID0gZmFjdHNDdHJsLnZhbHVlO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIGFubm90YXRpb25JZCBpcyBlbXB0eSB0aGF0IGluZGljYXRlcyB0aGF0IHRoaXMgaXMgYSBuZXcgYW5ub3RhdGlvblxyXG4gICAgICBpZiAoIXRoaXMuZmFjdEFubm90YXRpb25zWzBdLmlkKSB7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uU2VydmljZS5jcmVhdGVBbm5vdGF0aW9uKHRoaXMuZmFjdEFubm90YXRpb25zWzBdKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZmFjdEFubm90YXRpb25zWzBdID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UudXBkYXRlQW5ub3RhdGlvbih0aGlzLmZhY3RBbm5vdGF0aW9uc1swXSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZhY3RBbm5vdGF0aW9uc1swXSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc3N1bXB0aW9uc0N0cmwuZGlydHkpIHtcclxuICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlID0gYXNzdW1wdGlvbnNDdHJsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXS5pZCkge1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UuY3JlYXRlQW5ub3RhdGlvbih0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLnVwZGF0ZUFubm90YXRpb24odGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0gPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19