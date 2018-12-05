import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
export declare class SchedulerService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    /**************************************************************************
     * GET /schedule/solverTypes/${missionType}
     **************************************************************************/
    getSolverTypes(missionType: string): Observable<string[]>;
}
