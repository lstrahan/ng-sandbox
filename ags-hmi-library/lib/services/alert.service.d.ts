import { Observable } from 'rxjs';
export declare class AlertService {
    private serviceUrl;
    private _wssConfig;
    private _wss;
    private readonly wss;
    constructor();
    init(serviceUrl: string): void;
    getMessages(): Observable<any>;
    sendMessage(msg: any): void;
}
