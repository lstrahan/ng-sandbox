import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
export declare class DraftPlanService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    /**************************************************************************
     * POST /plan/draftPlan/${planId}
  
     **************************************************************************/
    draftPlan(planId: string): Observable<string>;
}
