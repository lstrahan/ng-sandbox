import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { Annotation } from '../models/annotation';
export declare class AnnotationService {
    private http;
    private logService;
    serviceUrl: string;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    /**************************************************************************
     * GET /annotation/{objectId}
     * get a list of Annotations
     **************************************************************************/
    getAnnotations(id: string): Observable<Annotation[]>;
    /**************************************************************************
     * POST /annotation
     * create a new event
     **************************************************************************/
    createAnnotation(annotation: Annotation): Observable<any>;
    /**************************************************************************
     * PUT /annotation
     * update event
     **************************************************************************/
    updateAnnotation(annotation: Annotation): Observable<Annotation>;
}
