/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Util } from '../other/util';
import { LogService } from './log.service';
import { PlanMinTaskData } from '../models/plan';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./log.service";
/** @type {?} */
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class PlanService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * GET /min/task/byPlanId/${planId}
     * get PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    getMinTaskDataByPlanId(planId) {
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug(`PlanService.getMinTaskDataByPlanId()`);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived PlanMinTaskData for planId ${planId}`, res)), map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))));
    }
    /**
     * ***********************************************************************
     * POST /min/task/byPlanId/${planId}
     * create PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    createMinTaskDataByPlanId(planId, plan) {
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug(`PlanService.createMinTaskDataByPlanId()`);
        return this.http.post(url, plan, httpOptions).pipe(tap(res => this.logService.debug(`    created PlanMinTaskData for planId ${planId}`, res)), map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))));
    }
    /**
     * ***********************************************************************
     * PUT /plan/min/task/byPlanId/${planId}
     * update PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    updatePlanMinTaskData(planId, plan) {
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug(`PlanService.updatePlanMinTaskData()`);
        return this.http.put(url, plan, httpOptions).pipe(tap(res => this.logService.debug(`    updated planId ${planId}`, res)), map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))));
    }
    /**
     * ***********************************************************************
     * DELETE /plan/min/task/byPlanId/${planId}
     * delete PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    deletePlanMinTaskData(planId, plan) {
        // const url = `${this.serviceUrl}/plan/missionTarget/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTarget/byPlanId/', planId);
        this.logService.debug(`PlanService.deletePlanMinTaskData()`);
        /** @type {?} */
        let bodyData = { strings: [plan.missionTaskId] };
        // HACK: the whole PlanMinTaskData stuff is all hacked up. Revisit this at some point
        return this.http.request('DELETE', url, Object.assign({}, httpOptions, { body: bodyData })).pipe(tap(res => this.logService.debug(`    deleted planId ${planId}`)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadByMissionId(id) {
        this.logService.debug('PlanService.loadByMissionId');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/byMissionId/' + id);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.plans));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    planAssetsByPlanId(id) {
        this.logService.debug('PlanService.planAssetsByPlanId');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/planAssets/' + id);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.planAssets));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    missionTaskDisplay(id) {
        this.logService.debug('PlanService.missionTaskDisplay');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTaskDisplay/byPlanId/' + id);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.missionTasks));
    }
    /**
     * @param {?} planId
     * @param {?} entityIds
     * @return {?}
     */
    addMissionTaskToPlan(planId, entityIds) {
        this.logService.debug('PlanService.addMissionTaskToPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
        /** @type {?} */
        let param = {
            'strings': entityIds
        };
        return this.http.post(url, param, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.missionTasks));
    }
    /**
     * @param {?} planId
     * @param {?} strings
     * @return {?}
     */
    removeMissionTasksFromPlan(planId, strings) {
        this.logService.debug('PlanService.removeMissionTasksFromPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: {
                strings: strings
            }
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted tasks successfully`)), map(res => res.missionTasks));
    }
    /**
     * @param {?} plan
     * @return {?}
     */
    copyPlan(plan) {
        this.logService.debug('PlanService.copyPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/copy/byPlanId/' + plan.planId);
        return this.http.put(url, plan, Object.assign({}, httpOptions, { responseType: 'text' })).pipe(tap(res => this.logService.debug(`    added plan successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getByPlanId(planId) {
        this.logService.debug('PlanService.getByPlanId');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved plan successfully`)), map(res => res));
    }
    /**
     * @param {?} planAssets
     * @return {?}
     */
    updatePlanAssets(planAssets) {
        this.logService.debug('PlanService.addPlanAsset');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/planAssets');
        /** @type {?} */
        let param = {
            'planAssets': planAssets
        };
        return this.http.put(url, param, httpOptions).pipe(tap(res => this.logService.debug(`    added PlanAsset successfully`)), map(res => res.planAssets));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getOptimizationObjectives(planId) {
        this.logService.debug('PlanService.getOptimizationObjectives');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Optimization Objectives successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getOptimizationMetrics(planId) {
        this.logService.debug('PlanService.getOptimizationMetrics');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/metrics/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Optimization Metrics successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    deletePlan(planId) {
        this.logService.debug('PlanService.deletePlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted plan successfully`)), map(res => res));
    }
    /**
     * @param {?} plan
     * @return {?}
     */
    updatePlan(plan) {
        this.logService.debug('PlanService.updatePlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan');
        return this.http.put(url, plan, httpOptions).pipe(tap(res => this.logService.debug(`    updated Plan successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getRequestWindows(planId) {
        this.logService.debug('PlanService.getRequestWindow');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/requestWindows/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Request Windows successfully`)), map(res => res.accessWindows));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getDisplayWindows(planId) {
        this.logService.debug('PlanService.getDisplayWindows');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/display/requestWindows/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Request Windows successfully`)), map(res => res.displayWindows));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getTaskConstraints(planId) {
        this.logService.debug('PlanService.getTaskConstraints');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retrieved Task Constraint  successfully`)), map(res => res.planMissionTaskConstaintsGroups));
    }
    /**
     * @param {?} constraints
     * @return {?}
     */
    updateTaskConstraints(constraints) {
        this.logService.debug('PlanService.updateTaskConstraints');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints');
        return this.http.put(url, constraints, httpOptions).pipe(tap(res => this.logService.debug(`    updated Task Constraint  successfully`)), map(res => res.planMissionTaskConstaintsGroups));
    }
    /**
     * @param {?} optimizationObjective
     * @return {?}
     */
    updateOptimizationObjectives(optimizationObjective) {
        this.logService.debug('PlanService.updateOptimizationObjectives');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives');
        return this.http.put(url, optimizationObjective, httpOptions).pipe(tap(res => this.logService.debug(`    updated Optimization Objectives successfully`)), map(res => res));
    }
}
PlanService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlanService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ PlanService.ngInjectableDef = i0.defineInjectable({ factory: function PlanService_Factory() { return new PlanService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: PlanService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlanService.prototype.serviceUrl;
    /**
     * @type {?}
     * @private
     */
    PlanService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    PlanService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BsYW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7TUFTM0MsV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ2pFO0FBS0QsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBSXRCLFlBQW9CLElBQWdCLEVBQzFCLFVBQXNCO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSHhCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFJaEMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBa0I7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7Ozs7Ozs7O0lBTUQsc0JBQXNCLENBQUMsTUFBYzs7O2NBRTdCLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxDQUFDO1FBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFFOUQsT0FBTyxJQUFJLENB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QUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDO1FBRW5FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsRUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQ2hELENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRCQUE0QixDQUFDLHFCQUE0QztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDOztjQUM1RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDhCQUE4QixDQUFDO1FBRXpFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDckUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxFQUNyRixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7OztZQXZRRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFyQlEsVUFBVTtZQUtWLFVBQVU7Ozs7Ozs7O0lBbUJqQixpQ0FBZ0M7Ozs7O0lBRXBCLDJCQUF3Qjs7Ozs7SUFDbEMsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxhbk1pblRhc2tEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL3BsYW4nO1xyXG5pbXBvcnQgeyBQbGFuQXNzZXQgfSBmcm9tICcuLi9tb2RlbHMvcGxhbkFzc2V0JztcclxuaW1wb3J0IHsgTWlzc2lvblRhc2sgfSBmcm9tICcuLi9tb2RlbHMvbWlzc2lvblRhc2snO1xyXG5pbXBvcnQgeyBPcHRpbWl6YXRpb25PYmplY3RpdmUgfSBmcm9tICcuLi9tb2RlbHMvb3B0aW1pemF0aW9uT2JqZWN0aXZlJztcclxuaW1wb3J0IHsgT3B0aW1pemF0aW9uTWV0cmljIH0gZnJvbSAnLi4vbW9kZWxzL29wdGltaXphdGlvbk1ldHJpYyc7XHJcbmltcG9ydCB7IEFjY2Vzc1dpbmRvdyB9IGZyb20gJy4uL21vZGVscy9hY2Nlc3NXaW5kb3cnO1xyXG5pbXBvcnQgeyBUYXNrQ29uc3RyYWludCB9IGZyb20gJy4uL21vZGVscy90YXNrQ29uc3RyYWludCc7XHJcbmltcG9ydCB7IERpc3BsYXlXaW5kb3cgfSBmcm9tICcuLi9tb2RlbHMvZGlzcGxheVdpbmRvdyc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFuU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfVxyXG4gICAqIGdldCBQbGFuTWluVGFza0RhdGFcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0TWluVGFza0RhdGFCeVBsYW5JZChwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhW10+IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke3RoaXMuc2VydmljZVVybH0vcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pbi90YXNrL2J5UGxhbklkLycsIHBsYW5JZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYFBsYW5TZXJ2aWNlLmdldE1pblRhc2tEYXRhQnlQbGFuSWQoKWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBsYW5NaW5UYXNrRGF0YVtdPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBQbGFuTWluVGFza0RhdGEgZm9yIHBsYW5JZCAke3BsYW5JZH1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXNbJ3BsYW5NaW5UYXNrRGF0YSddLm1hcChpdGVtID0+IG5ldyBQbGFuTWluVGFza0RhdGEoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBPU1QgL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfVxyXG4gICAqIGNyZWF0ZSBQbGFuTWluVGFza0RhdGFcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY3JlYXRlTWluVGFza0RhdGFCeVBsYW5JZChwbGFuSWQ6IHN0cmluZywgcGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGFbXT4ge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2aWNlVXJsfS9wbGFuL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfWA7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJywgcGxhbklkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgUGxhblNlcnZpY2UuY3JlYXRlTWluVGFza0RhdGFCeVBsYW5JZCgpYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBsYW5NaW5UYXNrRGF0YVtdPih1cmwsIHBsYW4sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGNyZWF0ZWQgUGxhbk1pblRhc2tEYXRhIGZvciBwbGFuSWQgJHtwbGFuSWR9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzWydwbGFuTWluVGFza0RhdGEnXS5tYXAoaXRlbSA9PiBuZXcgUGxhbk1pblRhc2tEYXRhKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9XHJcbiAgICogdXBkYXRlIFBsYW5NaW5UYXNrRGF0YVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICB1cGRhdGVQbGFuTWluVGFza0RhdGEocGxhbklkOiBzdHJpbmcsIHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhW10+IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke3RoaXMuc2VydmljZVVybH0vcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pbi90YXNrL2J5UGxhbklkLycsIHBsYW5JZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYFBsYW5TZXJ2aWNlLnVwZGF0ZVBsYW5NaW5UYXNrRGF0YSgpYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UGxhbk1pblRhc2tEYXRhW10+KHVybCwgcGxhbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBwbGFuSWQgJHtwbGFuSWR9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzWydwbGFuTWluVGFza0RhdGEnXS5tYXAoaXRlbSA9PiBuZXcgUGxhbk1pblRhc2tEYXRhKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBERUxFVEUgL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9XHJcbiAgICogZGVsZXRlIFBsYW5NaW5UYXNrRGF0YVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVQbGFuTWluVGFza0RhdGEocGxhbklkOiBzdHJpbmcsIHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHt0aGlzLnNlcnZpY2VVcmx9L3BsYW4vbWlzc2lvblRhcmdldC9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pc3Npb25UYXJnZXQvYnlQbGFuSWQvJywgcGxhbklkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgUGxhblNlcnZpY2UuZGVsZXRlUGxhbk1pblRhc2tEYXRhKClgKTtcclxuICAgIGxldCBib2R5RGF0YSA9IHsgc3RyaW5nczogW3BsYW4ubWlzc2lvblRhc2tJZF0gfTtcclxuXHJcbiAgICAvLyBIQUNLOiB0aGUgd2hvbGUgUGxhbk1pblRhc2tEYXRhIHN0dWZmIGlzIGFsbCBoYWNrZWQgdXAuIFJldmlzaXQgdGhpcyBhdCBzb21lIHBvaW50XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PignREVMRVRFJywgdXJsLCB7IC4uLmh0dHBPcHRpb25zLCBib2R5OiBib2R5RGF0YSB9KS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgcGxhbklkICR7cGxhbklkfWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxvYWRCeU1pc3Npb25JZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGFbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5sb2FkQnlNaXNzaW9uSWQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9ieU1pc3Npb25JZC8nICsgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFucylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwbGFuQXNzZXRzQnlQbGFuSWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbkFzc2V0W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UucGxhbkFzc2V0c0J5UGxhbklkJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vcGxhbkFzc2V0cy8nICsgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFuQXNzZXRzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG1pc3Npb25UYXNrRGlzcGxheShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxNaXNzaW9uVGFza1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLm1pc3Npb25UYXNrRGlzcGxheScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pc3Npb25UYXNrRGlzcGxheS9ieVBsYW5JZC8nICsgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5taXNzaW9uVGFza3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkTWlzc2lvblRhc2tUb1BsYW4ocGxhbklkOiBzdHJpbmcsIGVudGl0eUlkczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPE1pc3Npb25UYXNrW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuYWRkTWlzc2lvblRhc2tUb1BsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taXNzaW9uVGFzay9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICdzdHJpbmdzJzogZW50aXR5SWRzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgcGFyYW0sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1pc3Npb25UYXNrcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVNaXNzaW9uVGFza3NGcm9tUGxhbihwbGFuSWQ6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPE1pc3Npb25UYXNrW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UucmVtb3ZlTWlzc2lvblRhc2tzRnJvbVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taXNzaW9uVGFzay9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogc3RyaW5nc1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgdGFza3Mgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5taXNzaW9uVGFza3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29weVBsYW4ocGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuY29weVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9jb3B5L2J5UGxhbklkLycgKyBwbGFuLnBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBwbGFuLCB7IC4uLmh0dHBPcHRpb25zLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIHBsYW4gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRCeVBsYW5JZChwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldEJ5UGxhbklkJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGxhbk1pblRhc2tEYXRhPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBwbGFuIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxhbkFzc2V0cyhwbGFuQXNzZXRzOiBQbGFuQXNzZXRbXSk6IE9ic2VydmFibGU8UGxhbkFzc2V0W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuYWRkUGxhbkFzc2V0Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vcGxhbkFzc2V0cycpO1xyXG5cclxuICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgJ3BsYW5Bc3NldHMnOiBwbGFuQXNzZXRzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4odXJsLCBwYXJhbSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgYWRkZWQgUGxhbkFzc2V0IHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbkFzc2V0cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpbWl6YXRpb25PYmplY3RpdmVzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcHRpbWl6YXRpb25PYmplY3RpdmU+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0T3B0aW1pemF0aW9uT2JqZWN0aXZlcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL29wdGltaXphdGlvbk9iamVjdGl2ZXMvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3B0aW1pemF0aW9uT2JqZWN0aXZlPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBPcHRpbWl6YXRpb24gT2JqZWN0aXZlcyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGltaXphdGlvbk1ldHJpY3MocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9wdGltaXphdGlvbk1ldHJpYz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRPcHRpbWl6YXRpb25NZXRyaWNzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWV0cmljcy9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcHRpbWl6YXRpb25NZXRyaWM+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIE9wdGltaXphdGlvbiBNZXRyaWNzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGxhbihwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmRlbGV0ZVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHN0cmluZz4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgcGxhbiBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYW4ocGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGE+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UudXBkYXRlUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55Pih1cmwsIHBsYW4sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgUGxhbiBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFJlcXVlc3RXaW5kb3dzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxBY2Nlc3NXaW5kb3dbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRSZXF1ZXN0V2luZG93Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vcmVxdWVzdFdpbmRvd3MvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBSZXF1ZXN0IFdpbmRvd3Mgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5hY2Nlc3NXaW5kb3dzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldERpc3BsYXlXaW5kb3dzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaXNwbGF5V2luZG93W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0RGlzcGxheVdpbmRvd3MnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9kaXNwbGF5L3JlcXVlc3RXaW5kb3dzL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgUmVxdWVzdCBXaW5kb3dzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuZGlzcGxheVdpbmRvd3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza0NvbnN0cmFpbnRzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYXNrQ29uc3RyYWludFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldFRhc2tDb25zdHJhaW50cycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL3Rhc2svY29uc3RyYWludHMvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBUYXNrIENvbnN0cmFpbnQgIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbk1pc3Npb25UYXNrQ29uc3RhaW50c0dyb3VwcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYXNrQ29uc3RyYWludHMoY29uc3RyYWludHM6IFRhc2tDb25zdHJhaW50KTogT2JzZXJ2YWJsZTxUYXNrQ29uc3RyYWludD4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS51cGRhdGVUYXNrQ29uc3RyYWludHMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi90YXNrL2NvbnN0cmFpbnRzJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55Pih1cmwsIGNvbnN0cmFpbnRzLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIFRhc2sgQ29uc3RyYWludCAgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFuTWlzc2lvblRhc2tDb25zdGFpbnRzR3JvdXBzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9wdGltaXphdGlvbk9iamVjdGl2ZXMob3B0aW1pemF0aW9uT2JqZWN0aXZlOiBPcHRpbWl6YXRpb25PYmplY3RpdmUpOiBPYnNlcnZhYmxlPE9wdGltaXphdGlvbk9iamVjdGl2ZT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS51cGRhdGVPcHRpbWl6YXRpb25PYmplY3RpdmVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vb3B0aW1pemF0aW9uT2JqZWN0aXZlcycpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4odXJsLCBvcHRpbWl6YXRpb25PYmplY3RpdmUsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgT3B0aW1pemF0aW9uIE9iamVjdGl2ZXMgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=