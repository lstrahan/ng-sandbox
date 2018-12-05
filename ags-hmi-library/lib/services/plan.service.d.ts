import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { PlanMinTaskData } from '../models/plan';
import { PlanAsset } from '../models/planAsset';
import { MissionTask } from '../models/missionTask';
import { OptimizationObjective } from '../models/optimizationObjective';
import { OptimizationMetric } from '../models/optimizationMetric';
import { AccessWindow } from '../models/accessWindow';
import { TaskConstraint } from '../models/taskConstraint';
import { DisplayWindow } from '../models/displayWindow';
export declare class PlanService {
    private http;
    private logService;
    private serviceUrl;
    constructor(http: HttpClient, logService: LogService);
    init(serviceUrl: string): void;
    /**************************************************************************
     * GET /min/task/byPlanId/${planId}
     * get PlanMinTaskData
     **************************************************************************/
    getMinTaskDataByPlanId(planId: string): Observable<PlanMinTaskData[]>;
    /**************************************************************************
     * POST /min/task/byPlanId/${planId}
     * create PlanMinTaskData
     **************************************************************************/
    createMinTaskDataByPlanId(planId: string, plan: PlanMinTaskData): Observable<PlanMinTaskData[]>;
    /**************************************************************************
     * PUT /plan/min/task/byPlanId/${planId}
     * update PlanMinTaskData
     **************************************************************************/
    updatePlanMinTaskData(planId: string, plan: PlanMinTaskData): Observable<PlanMinTaskData[]>;
    /**************************************************************************
     * DELETE /plan/min/task/byPlanId/${planId}
     * delete PlanMinTaskData
     **************************************************************************/
    deletePlanMinTaskData(planId: string, plan: PlanMinTaskData): Observable<any>;
    loadByMissionId(id: string): Observable<PlanMinTaskData[]>;
    planAssetsByPlanId(id: string): Observable<PlanAsset[]>;
    missionTaskDisplay(id: string): Observable<MissionTask[]>;
    addMissionTaskToPlan(planId: string, entityIds: string[]): Observable<MissionTask[]>;
    removeMissionTasksFromPlan(planId: string, strings: string[]): Observable<MissionTask[]>;
    copyPlan(plan: PlanMinTaskData): Observable<string>;
    getByPlanId(planId: string): Observable<PlanMinTaskData>;
    updatePlanAssets(planAssets: PlanAsset[]): Observable<PlanAsset[]>;
    getOptimizationObjectives(planId: string): Observable<OptimizationObjective>;
    getOptimizationMetrics(planId: string): Observable<OptimizationMetric>;
    deletePlan(planId: string): Observable<string>;
    updatePlan(plan: PlanMinTaskData): Observable<PlanMinTaskData>;
    getRequestWindows(planId: string): Observable<AccessWindow[]>;
    getDisplayWindows(planId: string): Observable<DisplayWindow[]>;
    getTaskConstraints(planId: string): Observable<TaskConstraint[]>;
    updateTaskConstraints(constraints: TaskConstraint): Observable<TaskConstraint>;
    updateOptimizationObjectives(optimizationObjective: OptimizationObjective): Observable<OptimizationObjective>;
}
