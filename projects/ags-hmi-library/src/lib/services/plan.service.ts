import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Util } from '../other/util';
import { LogService } from './log.service';
import { PlanMinTaskData } from '../models/plan';
import { PlanAsset } from '../models/planAsset';
import { MissionTask } from '../models/missionTask';
import { OptimizationObjective } from '../models/optimizationObjective';
import { OptimizationMetric } from '../models/optimizationMetric';
import { AccessWindow } from '../models/accessWindow';
import { TaskConstraint } from '../models/taskConstraint';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private serviceUrl: string = '';

  constructor(private http: HttpClient,
    private logService: LogService) {
  }

  init(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  /**************************************************************************
   * GET /min/task/byPlanId/${planId}
   * get PlanMinTaskData
   **************************************************************************/
  getMinTaskDataByPlanId(planId: string): Observable<PlanMinTaskData[]> {
    // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
    const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
    this.logService.debug(`PlanService.getMinTaskDataByPlanId()`);

    return this.http.get<PlanMinTaskData[]>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived PlanMinTaskData for planId ${planId}`, res)),
      map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))),
      catchError(this.handleError<any>('PlanService.getMinTaskDataByPlanId'))
    );
  }

  /**************************************************************************
   * POST /min/task/byPlanId/${planId}
   * create PlanMinTaskData
   **************************************************************************/
  createMinTaskDataByPlanId(planId: string, plan: PlanMinTaskData): Observable<PlanMinTaskData[]> {
    // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
    const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
    this.logService.debug(`PlanService.createMinTaskDataByPlanId()`);

    return this.http.post<PlanMinTaskData[]>(url, plan, httpOptions).pipe(
      tap(res => this.logService.debug(`    created PlanMinTaskData for planId ${planId}`, res)),
      map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))),
      catchError(this.handleError<any>('PlanService.createMinTaskDataByPlanId'))
    );
  }

  /**************************************************************************
   * PUT /plan/min/task/byPlanId/${planId}
   * update PlanMinTaskData
   **************************************************************************/
  updatePlanMinTaskData(planId: string, plan: PlanMinTaskData): Observable<PlanMinTaskData[]> {
    // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
    const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
    this.logService.debug(`PlanService.updatePlanMinTaskData()`);

    return this.http.put<PlanMinTaskData[]>(url, plan, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated planId ${planId}`, res)),
      map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))),
      catchError(this.handleError<PlanMinTaskData>('PlanService.updatePlanMinTaskData'))
    );
  }

  /**************************************************************************
   * DELETE /plan/min/task/byPlanId/${planId}
   * delete PlanMinTaskData
   **************************************************************************/
  deletePlanMinTaskData(planId: string, plan: PlanMinTaskData): Observable<any> {
    // const url = `${this.serviceUrl}/plan/missionTarget/byPlanId/${planId}`;
    const url = Util.urlJoin(this.serviceUrl, '/plan/missionTarget/byPlanId/', planId);
    this.logService.debug(`PlanService.deletePlanMinTaskData()`);
    let bodyData = { strings: [plan.missionTaskId] };

    // HACK: the whole PlanMinTaskData stuff is all hacked up. Revisit this at some point
    return this.http.request<any>('DELETE', url, { ...httpOptions, body: bodyData }).pipe(
      tap(res => this.logService.debug(`    deleted planId ${planId}`)),
      catchError(this.handleError<any>('EventModelService.deleteTransitionLine'))
    );
  }

  loadByMissionId(id: string): Observable<PlanMinTaskData[]> {
    this.logService.debug('PlanService.loadByMissionId');
    const url = Util.urlJoin(this.serviceUrl, '/plan/byMissionId/' + id);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
      map(res => res.plans),
      catchError(this.handleError<any>('PlanService.loadByMissionId'))
    );
  }

  planAssetsByPlanId(id: string): Observable<PlanAsset[]> {
    this.logService.debug('PlanService.planAssetsByPlanId');
    const url = Util.urlJoin(this.serviceUrl, '/plan/planAssets/' + id);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
      map(res => res.planAssets),
      catchError(this.handleError<any>('PlanService.planAssetsByPlanId'))
    );
  }

  missionTaskDisplay(id: string): Observable<MissionTask[]> {
    this.logService.debug('PlanService.missionTaskDisplay');
    const url = Util.urlJoin(this.serviceUrl, '/plan/missionTaskDisplay/byPlanId/' + id);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
      map(res => res.missionTasks),
      catchError(this.handleError<any>('PlanService.missionTaskDisplay'))
    );
  }

  addMissionTaskToPlan(planId: string, entityIds: string[]): Observable<MissionTask[]> {
    this.logService.debug('PlanService.addMissionTaskToPlan');
    const url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);

    let param = {
      'strings': entityIds
    };

    return this.http.post<any>(url, param, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
      map(res => res.missionTasks),
      catchError(this.handleError<any>('PlanService.addMissionTaskToPlan'))
    );
  }

  removeMissionTasksFromPlan(planId: string, strings: string[]): Observable<MissionTask[]> {
    this.logService.debug('PlanService.removeMissionTasksFromPlan');
    const url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);

    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        strings: strings
      }
    };

    return this.http.delete<any>(url, deleteOptions).pipe(
      tap(res => this.logService.debug(`    deleted tasks successfully`)),
      map(res => res.missionTasks),
      catchError(this.handleError<any>('PlanService.removeMissionTasksFromPlan'))
    );
  }

  copyPlan(plan: PlanMinTaskData): Observable<string> {
    this.logService.debug('PlanService.copyPlan');
    const url = Util.urlJoin(this.serviceUrl, '/plan/copy/byPlanId/' + plan.planId);

    return this.http.put(url, plan, { ...httpOptions, responseType: 'text' }).pipe(
      tap(res => this.logService.debug(`    added plan successfully`)),
      map(res => res),
      catchError(this.handleError<string>('PlanService.copyPlan'))
    );
  }

  getByPlanId(planId: string): Observable<PlanMinTaskData> {
    this.logService.debug('PlanService.getByPlanId');
    const url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);

    return this.http.get<PlanMinTaskData>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retrieved plan successfully`)),
      map(res => res),
      catchError(this.handleError<PlanMinTaskData>('PlanService.getByPlanId'))
    );
  }

  updatePlanAssets(planAssets: PlanAsset[]): Observable<PlanAsset[]> {
    this.logService.debug('PlanService.addPlanAsset');
    const url = Util.urlJoin(this.serviceUrl, '/plan/planAssets');

    let param = {
      'planAssets': planAssets
    };

    return this.http.put<any>(url, param, httpOptions).pipe(
      tap(res => this.logService.debug(`    added PlanAsset successfully`)),
      map(res => res.planAssets),
      catchError(this.handleError<PlanMinTaskData>('PlanService.addPlanAsset'))
    );
  }

  getOptimizationObjectives(planId: string): Observable<OptimizationObjective> {
    this.logService.debug('PlanService.getOptimizationObjectives');
    const url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives/byPlanId/' + planId);

    return this.http.get<OptimizationObjective>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retrieved Optimization Objectives successfully`)),
      map(res => res),
      catchError(this.handleError<OptimizationObjective>('PlanService.getOptimizationObjectives'))
    );
  }

  getOptimizationMetrics(planId: string): Observable<OptimizationMetric> {
    this.logService.debug('PlanService.getOptimizationMetrics');
    const url = Util.urlJoin(this.serviceUrl, '/plan/metrics/byPlanId/' + planId);

    return this.http.get<OptimizationMetric>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retrieved Optimization Metrics successfully`)),
      map(res => res),
      catchError(this.handleError<OptimizationMetric>('PlanService.getOptimizationMetrics'))
    );
  }

  deletePlan(planId: string): Observable<string> {
    this.logService.debug('PlanService.deletePlan');
    const url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);

    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.delete(url, deleteOptions).pipe(
      tap(res => this.logService.debug(`    deleted plan successfully`)),
      map(res => res),
      catchError(this.handleError<any>('PlanService.deletePlan'))
    )
  }

  updatePlan(plan: PlanMinTaskData): Observable<PlanMinTaskData> {
    this.logService.debug('PlanService.updatePlan');
    const url = Util.urlJoin(this.serviceUrl, '/plan');

    return this.http.put<any>(url, plan, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated Plan successfully`)),
      map(res => res),
      catchError(this.handleError<PlanMinTaskData>('PlanService.updatePlan'))
    );
  }

  getRequestWindows(planId: string): Observable<AccessWindow[]> {
    this.logService.debug('PlanService.getRequestWindow');
    const url = Util.urlJoin(this.serviceUrl, '/plan/requestWindows/byPlanId/' + planId);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retrieved Request Windows successfully`)),
      map(res => res.accessWindows),
      catchError(this.handleError<AccessWindow[]>('PlanService.getRequestWindow'))
    );
  }

  getTaskConstraints(planId: string): Observable<TaskConstraint[]> {
    this.logService.debug('PlanService.getTaskConstraints');
    const url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints/byPlanId/' + planId);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retrieved Task Constraint  successfully`)),
      map(res => res.planMissionTaskConstaintsGroups),
      catchError(this.handleError<TaskConstraint>('PlanService.getTaskConstraints'))
    );
  }

  updateTaskConstraints(constraints: TaskConstraint): Observable<TaskConstraint> {
    this.logService.debug('PlanService.updateTaskConstraints');
    const url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints');

    return this.http.put<any>(url, constraints, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated Task Constraint  successfully`)),
      map(res => res.planMissionTaskConstaintsGroups),
      catchError(this.handleError<TaskConstraint>('PlanService.updateTaskConstraints'))
    );
  }

  updateOptimizationObjectives(optimizationObjective: OptimizationObjective): Observable<OptimizationObjective> {
    this.logService.debug('PlanService.updateOptimizationObjectives');
    const url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives');

    return this.http.put<any>(url, optimizationObjective, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated Optimization Objectives successfully`)),
      map(res => res),
      catchError(this.handleError<OptimizationObjective>('PlanService.updateOptimizationObjectives'))
    );
  }

  /**************************************************************************
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   **************************************************************************/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logService.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
