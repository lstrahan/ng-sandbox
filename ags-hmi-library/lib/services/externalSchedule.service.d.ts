import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { SpsEvent } from '../models/spsEvent';
export declare class ExternalScheduleService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    /**************************************************************************
    * POST /runInternalScheduler/${planId}
    **************************************************************************/
    runInternalScheduler(planId: string): Observable<string>;
    /**************************************************************************
    * POST /publishToLaso/${planId}
    **************************************************************************/
    publishToLaso(planId: string): Observable<string>;
    /**************************************************************************
    * POST /spsEvent/${planId}
    **************************************************************************/
    create(spsEvent: SpsEvent): Observable<string>;
    /**************************************************************************
    * POST /publishToLaso/${planId}
    **************************************************************************/
    getLasoProhibit(prohibitId: string): Observable<SpsEvent>;
    /**************************************************************************
    * POST /assetsWithMx/${planId}
    **************************************************************************/
    getAssetsWithMx(planId: string): Observable<string[]>;
}
