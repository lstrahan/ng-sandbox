import { OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Annotation } from '../../models/annotation';
import { AnnotationService } from '../../services/annotation.service';
import { LogService } from '../../services/log.service';
export declare class AnnotationComponent implements OnInit, OnChanges {
    private formBuilder;
    private annotationService;
    private logService;
    objectId: string;
    annotationType: string;
    annotationsFormGroup: FormGroup;
    factAnnotations: Array<Annotation>;
    assumptionAnnotations: Array<Annotation>;
    constructor(formBuilder: FormBuilder, annotationService: AnnotationService, logService: LogService);
    ngOnInit(): void;
    ngOnChanges(): void;
    updateAnnotations(): void;
}
