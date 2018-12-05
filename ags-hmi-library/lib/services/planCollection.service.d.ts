import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { PlanCollection } from '../models/planCollection';
import { PlanCollectionType } from '../models/planCollectionType';
export declare class PlanCollectionService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    loadAll(): Observable<PlanCollection[]>;
    loadAllTypes(): Observable<PlanCollectionType[]>;
    getAssetGroupType(missionType: string): Observable<string>;
    loadById(missionId: string): Observable<PlanCollection>;
    create(planCollection: PlanCollection): Observable<PlanCollection>;
    delete(id: string): Observable<string>;
    update(planCollection: PlanCollection): Observable<PlanCollection>;
}
