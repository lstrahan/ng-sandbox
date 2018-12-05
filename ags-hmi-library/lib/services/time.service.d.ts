import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class TimeService {
    private http;
    serviceUrl: string;
    constructor(http: HttpClient);
    init(serviceUrl: string): void;
    getTime(): Observable<any>;
}
