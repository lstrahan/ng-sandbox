import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
export declare class CzmlService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    getGroundTrackAndSensorVolume(planId: string, targetId: string, missionId?: string): Observable<any>;
    /**
    * Handle http operation that failed.
    *
    * @param operation {string} name of the operation that failed
    * @param result {any} optional value to return as the observable result
    */
    private handleError;
}
