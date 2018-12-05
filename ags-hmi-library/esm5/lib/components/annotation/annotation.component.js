/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Annotation } from '../../models/annotation';
import { AnnotationService } from '../../services/annotation.service';
import { LogService } from '../../services/log.service';
var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent(formBuilder, annotationService, logService) {
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
    AnnotationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // call function to update the annotations whenever data changes
        this.annotationsFormGroup.valueChanges.subscribe(function (x) {
            if (_this.annotationsFormGroup.dirty && _this.annotationsFormGroup.valid) {
                _this.updateAnnotations();
                _this.annotationsFormGroup.markAsPristine();
            }
        });
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logService.debug('AnnotationsComponent.ngOnChanges()');
        if (this.objectId) {
            // Get annotations for this event and populate the controls. If no annotations exist, create them
            this.annotationService.getAnnotations(this.objectId).subscribe(function (annotations) {
                _this.factAnnotations = annotations.filter(function (x) { return x.noteType.toUpperCase() === 'FACT'; });
                _this.assumptionAnnotations = annotations.filter(function (x) { return x.noteType.toUpperCase() === 'ASSUMPTION'; });
                // Create new fact and assumption annotations if none exist
                if (!_this.factAnnotations || _this.factAnnotations.length <= 0) {
                    /** @type {?} */
                    var newAnnotation = new Annotation();
                    newAnnotation.objectId = _this.objectId;
                    newAnnotation.annotationType = _this.annotationType;
                    newAnnotation.noteType = 'Fact';
                    newAnnotation.narrative = '';
                    _this.factAnnotations.push(newAnnotation);
                }
                _this.annotationsFormGroup.controls['factsCtrl'].setValue(_this.factAnnotations[0].narrative);
                if (!_this.assumptionAnnotations || _this.assumptionAnnotations.length <= 0) {
                    /** @type {?} */
                    var newAnnotation = new Annotation();
                    newAnnotation.objectId = _this.objectId;
                    newAnnotation.annotationType = _this.annotationType;
                    newAnnotation.noteType = 'Assumption';
                    newAnnotation.narrative = '';
                    _this.assumptionAnnotations.push(newAnnotation);
                }
                _this.annotationsFormGroup.controls['assumptionsCtrl'].setValue(_this.assumptionAnnotations[0].narrative);
            });
        }
        else {
            throw new Error("AnnotationComponent: required input parameter 'objectId' is undefined");
        }
    };
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.updateAnnotations = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logService.debug('AnnotationsComponent::updateAnnotations()');
        /** @type {?} */
        var factsCtrl = this.annotationsFormGroup.controls['factsCtrl'];
        /** @type {?} */
        var assumptionsCtrl = this.annotationsFormGroup.controls['assumptionsCtrl'];
        if (factsCtrl.dirty) {
            this.factAnnotations[0].narrative = factsCtrl.value;
            // if the annotationId is empty that indicates that this is a new annotation
            if (!this.factAnnotations[0].id) {
                this.annotationService.createAnnotation(this.factAnnotations[0]).subscribe(function (res) {
                    _this.factAnnotations[0] = res;
                });
            }
            else {
                this.annotationService.updateAnnotation(this.factAnnotations[0]).subscribe(function (res) {
                    _this.factAnnotations[0] = res;
                });
            }
        }
        if (assumptionsCtrl.dirty) {
            this.assumptionAnnotations[0].narrative = assumptionsCtrl.value;
            if (!this.assumptionAnnotations[0].id) {
                this.annotationService.createAnnotation(this.assumptionAnnotations[0]).subscribe(function (res) {
                    _this.assumptionAnnotations[0] = res;
                });
            }
            else {
                this.annotationService.updateAnnotation(this.assumptionAnnotations[0]).subscribe(function (res) {
                    _this.assumptionAnnotations[0] = res;
                });
            }
        }
    };
    AnnotationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ags-lib-annotations',
                    template: "<form [formGroup]=\"annotationsFormGroup\" fxLayout=\"column\">\r\n  <!-- Facts -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"factsCtrl\"></textarea>\r\n    <mat-label>Facts</mat-label>\r\n  </mat-form-field>\r\n\r\n  <!-- Assumptions -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"assumptionsCtrl\"></textarea>\r\n    <mat-label>Assumptions</mat-label>\r\n  </mat-form-field>\r\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AnnotationComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AnnotationService },
        { type: LogService }
    ]; };
    AnnotationComponent.propDecorators = {
        objectId: [{ type: Input }],
        annotationType: [{ type: Input }]
    };
    return AnnotationComponent;
}());
export { AnnotationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RDtJQWNFLDZCQUFvQixXQUF3QixFQUNsQyxpQkFBb0MsRUFDcEMsVUFBc0I7UUFGWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixtQkFBYyxHQUFXLEVBQUUsQ0FBQyxDQUFDLCtEQUErRDtRQVVuRyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pELFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUN2QyxlQUFlLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsU0FB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Q0FBQyxVQUFBLEdBQUc7b0JBQ2xGLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ2xGLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7O2dCQXhHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isc2VBQTBDOztpQkFFM0M7Ozs7Z0JBVG1CLFdBQVc7Z0JBRXRCLGlCQUFpQjtnQkFDakIsVUFBVTs7OzJCQVNoQixLQUFLO2lDQUNMLEtBQUs7O0lBaUdSLDBCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0FwR1ksbUJBQW1COzs7SUFFOUIsdUNBQStCOztJQUMvQiw2Q0FBcUM7O0lBRXJDLG1EQUFnQzs7SUFDaEMsOENBQW1DOztJQUNuQyxvREFBeUM7Ozs7O0lBRTdCLDBDQUFnQzs7Ozs7SUFDMUMsZ0RBQTRDOzs7OztJQUM1Qyx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fubm90YXRpb24nO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fubm90YXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItYW5ub3RhdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbm5vdGF0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIG9iamVjdElkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBhbm5vdGF0aW9uVHlwZTogc3RyaW5nID0gJyc7IC8vIEVWRU5UTElOSywgRVZFTlRNT0RFTCwgRVZFTlQsIE9CU0VSVkFCSUxJVFksIFBMQU4sIENPQSwgVEFTS1xyXG5cclxuICBhbm5vdGF0aW9uc0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIGZhY3RBbm5vdGF0aW9uczogQXJyYXk8QW5ub3RhdGlvbj47XHJcbiAgYXNzdW1wdGlvbkFubm90YXRpb25zOiBBcnJheTxBbm5vdGF0aW9uPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGFubm90YXRpb25TZXJ2aWNlOiBBbm5vdGF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG5cclxuICAgIC8vIGNyZWF0ZSB0aGUgY29udHJvbHNcclxuICAgIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgZmFjdHNDdHJsOiBbbnVsbCwgeyB1cGRhdGVPbjogJ2JsdXInIH1dLFxyXG4gICAgICBhc3N1bXB0aW9uc0N0cmw6IFtudWxsLCB7IHVwZGF0ZU9uOiAnYmx1cicgfV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjYWxsIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgYW5ub3RhdGlvbnMgd2hlbmV2ZXIgZGF0YSBjaGFuZ2VzXHJcbiAgICB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLmRpcnR5ICYmIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAudmFsaWQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFubm90YXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uc0NvbXBvbmVudC5uZ09uQ2hhbmdlcygpJyk7XHJcbiAgICBpZiAodGhpcy5vYmplY3RJZCkge1xyXG4gICAgICAvLyBHZXQgYW5ub3RhdGlvbnMgZm9yIHRoaXMgZXZlbnQgYW5kIHBvcHVsYXRlIHRoZSBjb250cm9scy4gSWYgbm8gYW5ub3RhdGlvbnMgZXhpc3QsIGNyZWF0ZSB0aGVtXHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UuZ2V0QW5ub3RhdGlvbnModGhpcy5vYmplY3RJZCkuc3Vic2NyaWJlKGFubm90YXRpb25zID0+IHtcclxuICAgICAgICB0aGlzLmZhY3RBbm5vdGF0aW9ucyA9IGFubm90YXRpb25zLmZpbHRlcih4ID0+IHgubm90ZVR5cGUudG9VcHBlckNhc2UoKSA9PT0gJ0ZBQ1QnKTtcclxuICAgICAgICB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9ucyA9IGFubm90YXRpb25zLmZpbHRlcih4ID0+IHgubm90ZVR5cGUudG9VcHBlckNhc2UoKSA9PT0gJ0FTU1VNUFRJT04nKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBmYWN0IGFuZCBhc3N1bXB0aW9uIGFubm90YXRpb25zIGlmIG5vbmUgZXhpc3RcclxuICAgICAgICBpZiAoIXRoaXMuZmFjdEFubm90YXRpb25zIHx8IHRoaXMuZmFjdEFubm90YXRpb25zLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICBsZXQgbmV3QW5ub3RhdGlvbiA9IG5ldyBBbm5vdGF0aW9uKCk7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm9iamVjdElkID0gdGhpcy5vYmplY3RJZDtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24uYW5ub3RhdGlvblR5cGUgPSB0aGlzLmFubm90YXRpb25UeXBlO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5ub3RlVHlwZSA9ICdGYWN0JztcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ubmFycmF0aXZlID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmZhY3RBbm5vdGF0aW9ucy5wdXNoKG5ld0Fubm90YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLmNvbnRyb2xzWydmYWN0c0N0cmwnXS5zZXRWYWx1ZSh0aGlzLmZhY3RBbm5vdGF0aW9uc1swXS5uYXJyYXRpdmUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zIHx8IHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICBsZXQgbmV3QW5ub3RhdGlvbiA9IG5ldyBBbm5vdGF0aW9uKCk7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm9iamVjdElkID0gdGhpcy5vYmplY3RJZDtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24uYW5ub3RhdGlvblR5cGUgPSB0aGlzLmFubm90YXRpb25UeXBlO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5ub3RlVHlwZSA9ICdBc3N1bXB0aW9uJztcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ubmFycmF0aXZlID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9ucy5wdXNoKG5ld0Fubm90YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLmNvbnRyb2xzWydhc3N1bXB0aW9uc0N0cmwnXS5zZXRWYWx1ZSh0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXS5uYXJyYXRpdmUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFubm90YXRpb25Db21wb25lbnQ6IHJlcXVpcmVkIGlucHV0IHBhcmFtZXRlciAnb2JqZWN0SWQnIGlzIHVuZGVmaW5lZGApOyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFubm90YXRpb25zKCkge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uc0NvbXBvbmVudDo6dXBkYXRlQW5ub3RhdGlvbnMoKScpO1xyXG4gICAgXHJcbiAgICBsZXQgZmFjdHNDdHJsID0gdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5jb250cm9sc1snZmFjdHNDdHJsJ107XHJcbiAgICBsZXQgYXNzdW1wdGlvbnNDdHJsID0gdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5jb250cm9sc1snYXNzdW1wdGlvbnNDdHJsJ107XHJcblxyXG4gICAgaWYgKGZhY3RzQ3RybC5kaXJ0eSkge1xyXG4gICAgICB0aGlzLmZhY3RBbm5vdGF0aW9uc1swXS5uYXJyYXRpdmUgPSBmYWN0c0N0cmwudmFsdWU7XHJcblxyXG4gICAgICAvLyBpZiB0aGUgYW5ub3RhdGlvbklkIGlzIGVtcHR5IHRoYXQgaW5kaWNhdGVzIHRoYXQgdGhpcyBpcyBhIG5ldyBhbm5vdGF0aW9uXHJcbiAgICAgIGlmICghdGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0uaWQpIHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLmNyZWF0ZUFubm90YXRpb24odGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0gPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uU2VydmljZS51cGRhdGVBbm5vdGF0aW9uKHRoaXMuZmFjdEFubm90YXRpb25zWzBdKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZmFjdEFubm90YXRpb25zWzBdID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFzc3VtcHRpb25zQ3RybC5kaXJ0eSkge1xyXG4gICAgICB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXS5uYXJyYXRpdmUgPSBhc3N1bXB0aW9uc0N0cmwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdLmlkKSB7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uU2VydmljZS5jcmVhdGVBbm5vdGF0aW9uKHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UudXBkYXRlQW5ub3RhdGlvbih0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=