import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { Task } from '../models/task';
export declare class CalService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    /**************************************************************************
     * GET /cal/task/byUciTaskId/${uciTaskId}
     **************************************************************************/
    getTask(uciTaskId: string): Observable<Task>;
    /**************************************************************************
     * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
     **************************************************************************/
    addTaskToPlan(planId: string, uciTaskId: string): Observable<Object>;
    /**************************************************************************
     * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
     **************************************************************************/
    rejectTask(uciTaskId: string): Observable<Object>;
    /**************************************************************************
     * Send task request
     * PUT cal/task/{eventId}/{planId}
     **************************************************************************/
    sendTaskingRequest(eventId: string, planId: string): Observable<string>;
}
