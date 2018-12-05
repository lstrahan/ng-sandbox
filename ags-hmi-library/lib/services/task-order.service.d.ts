import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { Task } from '../models/task';
export declare class TaskOrderService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    createTask(task: Task): Observable<Task>;
    loadAll(type: string): Observable<Task[]>;
    loadById(id: string): Observable<Task>;
    deleteTaskingOrder(id: string): Observable<string>;
    updateTaskingOrder(task: Task): Observable<Task>;
}
