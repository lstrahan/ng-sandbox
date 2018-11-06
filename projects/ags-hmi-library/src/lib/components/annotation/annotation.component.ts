import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Annotation } from '../../models/annotation';
import { AnnotationService } from '../../services/annotation.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'ags-lib-annotations',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit, OnChanges {

  @Input() objectId: string = '';
  @Input() annotationType: string = ''; // EVENTLINK, EVENTMODEL, EVENT, OBSERVABILITY, PLAN, COA, TASK

  annotationsFormGroup: FormGroup;
  factAnnotations: Array<Annotation>;
  assumptionAnnotations: Array<Annotation>;

  constructor(private formBuilder: FormBuilder,
    private annotationService: AnnotationService,
    private logService: LogService) {

    // create the controls
    this.annotationsFormGroup = this.formBuilder.group({
      factsCtrl: [null, { updateOn: 'blur' }],
      assumptionsCtrl: [null, { updateOn: 'blur' }]
    });
  }

  ngOnInit() {
    // call function to update the annotations whenever data changes
    this.annotationsFormGroup.valueChanges.subscribe(x => {
      if (this.annotationsFormGroup.dirty && this.annotationsFormGroup.valid) {
        this.updateAnnotations();
        this.annotationsFormGroup.markAsPristine();
      }
    });
  }

  ngOnChanges() {
    this.logService.debug('AnnotationsComponent.ngOnChanges()');
    if (this.objectId) {
      // Get annotations for this event and populate the controls. If no annotations exist, create them
      this.annotationService.getAnnotations(this.objectId).subscribe(annotations => {
        this.factAnnotations = annotations.filter(x => x.noteType.toUpperCase() === 'FACT');
        this.assumptionAnnotations = annotations.filter(x => x.noteType.toUpperCase() === 'ASSUMPTION');

        // Create new fact and assumption annotations if none exist
        if (!this.factAnnotations || this.factAnnotations.length <= 0) {
          let newAnnotation = new Annotation();
          newAnnotation.objectId = this.objectId;
          newAnnotation.annotationType = this.annotationType;
          newAnnotation.noteType = 'Fact';
          newAnnotation.narrative = '';
          this.factAnnotations.push(newAnnotation);
        }
        this.annotationsFormGroup.controls['factsCtrl'].setValue(this.factAnnotations[0].narrative);

        if (!this.assumptionAnnotations || this.assumptionAnnotations.length <= 0) {
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

  updateAnnotations() {
    this.logService.debug('AnnotationsComponent::updateAnnotations()');
    
    let factsCtrl = this.annotationsFormGroup.controls['factsCtrl'];
    let assumptionsCtrl = this.annotationsFormGroup.controls['assumptionsCtrl'];

    if (factsCtrl.dirty) {
      this.factAnnotations[0].narrative = factsCtrl.value;

      // if the annotationId is empty that indicates that this is a new annotation
      if (!this.factAnnotations[0].id) {
        this.annotationService.createAnnotation(this.factAnnotations[0]).subscribe(res => {
          this.factAnnotations[0] = res;
        });
      } else {
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
      } else {
        this.annotationService.updateAnnotation(this.assumptionAnnotations[0]).subscribe(res => {
          this.assumptionAnnotations[0] = res;
        });
      }
    }
  }
}
