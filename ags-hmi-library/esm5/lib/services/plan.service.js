/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var PlanService = /** @class */ (function () {
    function PlanService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    PlanService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
    /**************************************************************************
     * GET /min/task/byPlanId/${planId}
     * get PlanMinTaskData
     **************************************************************************/
    /**
     * ***********************************************************************
     * GET /min/task/byPlanId/${planId}
     * get PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getMinTaskDataByPlanId = /**
     * ***********************************************************************
     * GET /min/task/byPlanId/${planId}
     * get PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug("PlanService.getMinTaskDataByPlanId()");
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived PlanMinTaskData for planId " + planId, res); }), map(function (res) { return res['planMinTaskData'].map(function (item) { return new PlanMinTaskData(item); }); }));
    };
    /**************************************************************************
     * POST /min/task/byPlanId/${planId}
     * create PlanMinTaskData
     **************************************************************************/
    /**
     * ***********************************************************************
     * POST /min/task/byPlanId/${planId}
     * create PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    PlanService.prototype.createMinTaskDataByPlanId = /**
     * ***********************************************************************
     * POST /min/task/byPlanId/${planId}
     * create PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    function (planId, plan) {
        var _this = this;
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug("PlanService.createMinTaskDataByPlanId()");
        return this.http.post(url, plan, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    created PlanMinTaskData for planId " + planId, res); }), map(function (res) { return res['planMinTaskData'].map(function (item) { return new PlanMinTaskData(item); }); }));
    };
    /**************************************************************************
     * PUT /plan/min/task/byPlanId/${planId}
     * update PlanMinTaskData
     **************************************************************************/
    /**
     * ***********************************************************************
     * PUT /plan/min/task/byPlanId/${planId}
     * update PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    PlanService.prototype.updatePlanMinTaskData = /**
     * ***********************************************************************
     * PUT /plan/min/task/byPlanId/${planId}
     * update PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    function (planId, plan) {
        var _this = this;
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug("PlanService.updatePlanMinTaskData()");
        return this.http.put(url, plan, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated planId " + planId, res); }), map(function (res) { return res['planMinTaskData'].map(function (item) { return new PlanMinTaskData(item); }); }));
    };
    /**************************************************************************
     * DELETE /plan/min/task/byPlanId/${planId}
     * delete PlanMinTaskData
     **************************************************************************/
    /**
     * ***********************************************************************
     * DELETE /plan/min/task/byPlanId/${planId}
     * delete PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    PlanService.prototype.deletePlanMinTaskData = /**
     * ***********************************************************************
     * DELETE /plan/min/task/byPlanId/${planId}
     * delete PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    function (planId, plan) {
        var _this = this;
        // const url = `${this.serviceUrl}/plan/missionTarget/byPlanId/${planId}`;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/missionTarget/byPlanId/', planId);
        this.logService.debug("PlanService.deletePlanMinTaskData()");
        /** @type {?} */
        var bodyData = { strings: [plan.missionTaskId] };
        // HACK: the whole PlanMinTaskData stuff is all hacked up. Revisit this at some point
        return this.http.request('DELETE', url, tslib_1.__assign({}, httpOptions, { body: bodyData })).pipe(tap(function (res) { return _this.logService.debug("    deleted planId " + planId); }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PlanService.prototype.loadByMissionId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('PlanService.loadByMissionId');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/byMissionId/' + id);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res.plans; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PlanService.prototype.planAssetsByPlanId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('PlanService.planAssetsByPlanId');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/planAssets/' + id);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res.planAssets; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PlanService.prototype.missionTaskDisplay = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('PlanService.missionTaskDisplay');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/missionTaskDisplay/byPlanId/' + id);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res.missionTasks; }));
    };
    /**
     * @param {?} planId
     * @param {?} entityIds
     * @return {?}
     */
    PlanService.prototype.addMissionTaskToPlan = /**
     * @param {?} planId
     * @param {?} entityIds
     * @return {?}
     */
    function (planId, entityIds) {
        var _this = this;
        this.logService.debug('PlanService.addMissionTaskToPlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
        /** @type {?} */
        var param = {
            'strings': entityIds
        };
        return this.http.post(url, param, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res.missionTasks; }));
    };
    /**
     * @param {?} planId
     * @param {?} strings
     * @return {?}
     */
    PlanService.prototype.removeMissionTasksFromPlan = /**
     * @param {?} planId
     * @param {?} strings
     * @return {?}
     */
    function (planId, strings) {
        var _this = this;
        this.logService.debug('PlanService.removeMissionTasksFromPlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: {
                strings: strings
            }
        };
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted tasks successfully"); }), map(function (res) { return res.missionTasks; }));
    };
    /**
     * @param {?} plan
     * @return {?}
     */
    PlanService.prototype.copyPlan = /**
     * @param {?} plan
     * @return {?}
     */
    function (plan) {
        var _this = this;
        this.logService.debug('PlanService.copyPlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/copy/byPlanId/' + plan.planId);
        return this.http.put(url, plan, tslib_1.__assign({}, httpOptions, { responseType: 'text' })).pipe(tap(function (res) { return _this.logService.debug("    added plan successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getByPlanId = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.getByPlanId');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved plan successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} planAssets
     * @return {?}
     */
    PlanService.prototype.updatePlanAssets = /**
     * @param {?} planAssets
     * @return {?}
     */
    function (planAssets) {
        var _this = this;
        this.logService.debug('PlanService.addPlanAsset');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/planAssets');
        /** @type {?} */
        var param = {
            'planAssets': planAssets
        };
        return this.http.put(url, param, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    added PlanAsset successfully"); }), map(function (res) { return res.planAssets; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getOptimizationObjectives = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.getOptimizationObjectives');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Optimization Objectives successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getOptimizationMetrics = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.getOptimizationMetrics');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/metrics/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Optimization Metrics successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.deletePlan = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.deletePlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted plan successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} plan
     * @return {?}
     */
    PlanService.prototype.updatePlan = /**
     * @param {?} plan
     * @return {?}
     */
    function (plan) {
        var _this = this;
        this.logService.debug('PlanService.updatePlan');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan');
        return this.http.put(url, plan, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated Plan successfully"); }), map(function (res) { return res; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getRequestWindows = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.getRequestWindow');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/requestWindows/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Request Windows successfully"); }), map(function (res) { return res.accessWindows; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getDisplayWindows = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.getDisplayWindows');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/display/requestWindows/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Request Windows successfully"); }), map(function (res) { return res.displayWindows; }));
    };
    /**
     * @param {?} planId
     * @return {?}
     */
    PlanService.prototype.getTaskConstraints = /**
     * @param {?} planId
     * @return {?}
     */
    function (planId) {
        var _this = this;
        this.logService.debug('PlanService.getTaskConstraints');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints/byPlanId/' + planId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retrieved Task Constraint  successfully"); }), map(function (res) { return res.planMissionTaskConstaintsGroups; }));
    };
    /**
     * @param {?} constraints
     * @return {?}
     */
    PlanService.prototype.updateTaskConstraints = /**
     * @param {?} constraints
     * @return {?}
     */
    function (constraints) {
        var _this = this;
        this.logService.debug('PlanService.updateTaskConstraints');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints');
        return this.http.put(url, constraints, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated Task Constraint  successfully"); }), map(function (res) { return res.planMissionTaskConstaintsGroups; }));
    };
    /**
     * @param {?} optimizationObjective
     * @return {?}
     */
    PlanService.prototype.updateOptimizationObjectives = /**
     * @param {?} optimizationObjective
     * @return {?}
     */
    function (optimizationObjective) {
        var _this = this;
        this.logService.debug('PlanService.updateOptimizationObjectives');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives');
        return this.http.put(url, optimizationObjective, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated Optimization Objectives successfully"); }), map(function (res) { return res; }));
    };
    PlanService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PlanService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService }
    ]; };
    /** @nocollapse */ PlanService.ngInjectableDef = i0.defineInjectable({ factory: function PlanService_Factory() { return new PlanService(i0.inject(i1.HttpClient), i0.inject(i2.LogService)); }, token: PlanService, providedIn: "root" });
    return PlanService;
}());
export { PlanService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BsYW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0lBUzNDLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUVEO0lBT0UscUJBQW9CLElBQWdCLEVBQzFCLFVBQXNCO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSHhCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFJaEMsQ0FBQzs7Ozs7SUFFRCwwQkFBSTs7OztJQUFKLFVBQUssVUFBa0I7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Z0ZBRzRFOzs7Ozs7Ozs7SUFDNUUsNENBQXNCOzs7Ozs7OztJQUF0QixVQUF1QixNQUFjO1FBQXJDLGlCQVNDOzs7WUFQTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQ0FB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QiwyQkFBd0I7Ozs7O0lBQ2xDLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYW5NaW5UYXNrRGF0YSB9IGZyb20gJy4uL21vZGVscy9wbGFuJztcclxuaW1wb3J0IHsgUGxhbkFzc2V0IH0gZnJvbSAnLi4vbW9kZWxzL3BsYW5Bc3NldCc7XHJcbmltcG9ydCB7IE1pc3Npb25UYXNrIH0gZnJvbSAnLi4vbW9kZWxzL21pc3Npb25UYXNrJztcclxuaW1wb3J0IHsgT3B0aW1pemF0aW9uT2JqZWN0aXZlIH0gZnJvbSAnLi4vbW9kZWxzL29wdGltaXphdGlvbk9iamVjdGl2ZSc7XHJcbmltcG9ydCB7IE9wdGltaXphdGlvbk1ldHJpYyB9IGZyb20gJy4uL21vZGVscy9vcHRpbWl6YXRpb25NZXRyaWMnO1xyXG5pbXBvcnQgeyBBY2Nlc3NXaW5kb3cgfSBmcm9tICcuLi9tb2RlbHMvYWNjZXNzV2luZG93JztcclxuaW1wb3J0IHsgVGFza0NvbnN0cmFpbnQgfSBmcm9tICcuLi9tb2RlbHMvdGFza0NvbnN0cmFpbnQnO1xyXG5pbXBvcnQgeyBEaXNwbGF5V2luZG93IH0gZnJvbSAnLi4vbW9kZWxzL2Rpc3BsYXlXaW5kb3cnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1cclxuICAgKiBnZXQgUGxhbk1pblRhc2tEYXRhXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldE1pblRhc2tEYXRhQnlQbGFuSWQocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBsYW5NaW5UYXNrRGF0YVtdPiB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHt0aGlzLnNlcnZpY2VVcmx9L3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9YDtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taW4vdGFzay9ieVBsYW5JZC8nLCBwbGFuSWQpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGBQbGFuU2VydmljZS5nZXRNaW5UYXNrRGF0YUJ5UGxhbklkKClgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQbGFuTWluVGFza0RhdGFbXT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgUGxhbk1pblRhc2tEYXRhIGZvciBwbGFuSWQgJHtwbGFuSWR9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzWydwbGFuTWluVGFza0RhdGEnXS5tYXAoaXRlbSA9PiBuZXcgUGxhbk1pblRhc2tEYXRhKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQT1NUIC9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1cclxuICAgKiBjcmVhdGUgUGxhbk1pblRhc2tEYXRhXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNyZWF0ZU1pblRhc2tEYXRhQnlQbGFuSWQocGxhbklkOiBzdHJpbmcsIHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhW10+IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke3RoaXMuc2VydmljZVVybH0vcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pbi90YXNrL2J5UGxhbklkLycsIHBsYW5JZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYFBsYW5TZXJ2aWNlLmNyZWF0ZU1pblRhc2tEYXRhQnlQbGFuSWQoKWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQbGFuTWluVGFza0RhdGFbXT4odXJsLCBwbGFuLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBjcmVhdGVkIFBsYW5NaW5UYXNrRGF0YSBmb3IgcGxhbklkICR7cGxhbklkfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlc1sncGxhbk1pblRhc2tEYXRhJ10ubWFwKGl0ZW0gPT4gbmV3IFBsYW5NaW5UYXNrRGF0YShpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUFVUIC9wbGFuL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfVxyXG4gICAqIHVwZGF0ZSBQbGFuTWluVGFza0RhdGFcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgdXBkYXRlUGxhbk1pblRhc2tEYXRhKHBsYW5JZDogc3RyaW5nLCBwbGFuOiBQbGFuTWluVGFza0RhdGEpOiBPYnNlcnZhYmxlPFBsYW5NaW5UYXNrRGF0YVtdPiB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHt0aGlzLnNlcnZpY2VVcmx9L3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9YDtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taW4vdGFzay9ieVBsYW5JZC8nLCBwbGFuSWQpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGBQbGFuU2VydmljZS51cGRhdGVQbGFuTWluVGFza0RhdGEoKWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFBsYW5NaW5UYXNrRGF0YVtdPih1cmwsIHBsYW4sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgcGxhbklkICR7cGxhbklkfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlc1sncGxhbk1pblRhc2tEYXRhJ10ubWFwKGl0ZW0gPT4gbmV3IFBsYW5NaW5UYXNrRGF0YShpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogREVMRVRFIC9wbGFuL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfVxyXG4gICAqIGRlbGV0ZSBQbGFuTWluVGFza0RhdGFcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlUGxhbk1pblRhc2tEYXRhKHBsYW5JZDogc3RyaW5nLCBwbGFuOiBQbGFuTWluVGFza0RhdGEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2aWNlVXJsfS9wbGFuL21pc3Npb25UYXJnZXQvYnlQbGFuSWQvJHtwbGFuSWR9YDtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taXNzaW9uVGFyZ2V0L2J5UGxhbklkLycsIHBsYW5JZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYFBsYW5TZXJ2aWNlLmRlbGV0ZVBsYW5NaW5UYXNrRGF0YSgpYCk7XHJcbiAgICBsZXQgYm9keURhdGEgPSB7IHN0cmluZ3M6IFtwbGFuLm1pc3Npb25UYXNrSWRdIH07XHJcblxyXG4gICAgLy8gSEFDSzogdGhlIHdob2xlIFBsYW5NaW5UYXNrRGF0YSBzdHVmZiBpcyBhbGwgaGFja2VkIHVwLiBSZXZpc2l0IHRoaXMgYXQgc29tZSBwb2ludFxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0PGFueT4oJ0RFTEVURScsIHVybCwgeyAuLi5odHRwT3B0aW9ucywgYm9keTogYm9keURhdGEgfSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIHBsYW5JZCAke3BsYW5JZH1gKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2FkQnlNaXNzaW9uSWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UubG9hZEJ5TWlzc2lvbklkJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vYnlNaXNzaW9uSWQvJyArIGlkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGxhbkFzc2V0c0J5UGxhbklkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBsYW5Bc3NldFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLnBsYW5Bc3NldHNCeVBsYW5JZCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL3BsYW5Bc3NldHMvJyArIGlkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbkFzc2V0cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBtaXNzaW9uVGFza0Rpc3BsYXkoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8TWlzc2lvblRhc2tbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5taXNzaW9uVGFza0Rpc3BsYXknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taXNzaW9uVGFza0Rpc3BsYXkvYnlQbGFuSWQvJyArIGlkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWlzc2lvblRhc2tzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZE1pc3Npb25UYXNrVG9QbGFuKHBsYW5JZDogc3RyaW5nLCBlbnRpdHlJZHM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxNaXNzaW9uVGFza1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmFkZE1pc3Npb25UYXNrVG9QbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWlzc2lvblRhc2svYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAnc3RyaW5ncyc6IGVudGl0eUlkc1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIHBhcmFtLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5taXNzaW9uVGFza3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTWlzc2lvblRhc2tzRnJvbVBsYW4ocGxhbklkOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxNaXNzaW9uVGFza1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLnJlbW92ZU1pc3Npb25UYXNrc0Zyb21QbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWlzc2lvblRhc2svYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHN0cmluZ3M6IHN0cmluZ3NcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIHRhc2tzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWlzc2lvblRhc2tzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvcHlQbGFuKHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmNvcHlQbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vY29weS9ieVBsYW5JZC8nICsgcGxhbi5wbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgcGxhbiwgeyAuLi5odHRwT3B0aW9ucywgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBwbGFuIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnlQbGFuSWQocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBsYW5NaW5UYXNrRGF0YT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRCeVBsYW5JZCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBsYW5NaW5UYXNrRGF0YT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgcGxhbiBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYW5Bc3NldHMocGxhbkFzc2V0czogUGxhbkFzc2V0W10pOiBPYnNlcnZhYmxlPFBsYW5Bc3NldFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmFkZFBsYW5Bc3NldCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL3BsYW5Bc3NldHMnKTtcclxuXHJcbiAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICdwbGFuQXNzZXRzJzogcGxhbkFzc2V0c1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KHVybCwgcGFyYW0sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIFBsYW5Bc3NldCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnBsYW5Bc3NldHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW1pemF0aW9uT2JqZWN0aXZlcyhwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3B0aW1pemF0aW9uT2JqZWN0aXZlPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldE9wdGltaXphdGlvbk9iamVjdGl2ZXMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9vcHRpbWl6YXRpb25PYmplY3RpdmVzL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wdGltaXphdGlvbk9iamVjdGl2ZT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgT3B0aW1pemF0aW9uIE9iamVjdGl2ZXMgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpbWl6YXRpb25NZXRyaWNzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcHRpbWl6YXRpb25NZXRyaWM+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0T3B0aW1pemF0aW9uTWV0cmljcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21ldHJpY3MvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3B0aW1pemF0aW9uTWV0cmljPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBPcHRpbWl6YXRpb24gTWV0cmljcyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBsYW4ocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5kZWxldGVQbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxzdHJpbmc+KHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIHBsYW4gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQbGFuKHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLnVwZGF0ZVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbicpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4odXJsLCBwbGFuLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIFBsYW4gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXF1ZXN0V2luZG93cyhwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QWNjZXNzV2luZG93W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0UmVxdWVzdFdpbmRvdycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL3JlcXVlc3RXaW5kb3dzL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgUmVxdWVzdCBXaW5kb3dzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuYWNjZXNzV2luZG93cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXREaXNwbGF5V2luZG93cyhwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGlzcGxheVdpbmRvd1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldERpc3BsYXlXaW5kb3dzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vZGlzcGxheS9yZXF1ZXN0V2luZG93cy9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIFJlcXVlc3QgV2luZG93cyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLmRpc3BsYXlXaW5kb3dzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFRhc2tDb25zdHJhaW50cyhwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VGFza0NvbnN0cmFpbnRbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRUYXNrQ29uc3RyYWludHMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi90YXNrL2NvbnN0cmFpbnRzL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgVGFzayBDb25zdHJhaW50ICBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnBsYW5NaXNzaW9uVGFza0NvbnN0YWludHNHcm91cHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFza0NvbnN0cmFpbnRzKGNvbnN0cmFpbnRzOiBUYXNrQ29uc3RyYWludCk6IE9ic2VydmFibGU8VGFza0NvbnN0cmFpbnQ+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UudXBkYXRlVGFza0NvbnN0cmFpbnRzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vdGFzay9jb25zdHJhaW50cycpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4odXJsLCBjb25zdHJhaW50cywgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBUYXNrIENvbnN0cmFpbnQgIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbk1pc3Npb25UYXNrQ29uc3RhaW50c0dyb3VwcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcHRpbWl6YXRpb25PYmplY3RpdmVzKG9wdGltaXphdGlvbk9iamVjdGl2ZTogT3B0aW1pemF0aW9uT2JqZWN0aXZlKTogT2JzZXJ2YWJsZTxPcHRpbWl6YXRpb25PYmplY3RpdmU+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UudXBkYXRlT3B0aW1pemF0aW9uT2JqZWN0aXZlcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL29wdGltaXphdGlvbk9iamVjdGl2ZXMnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KHVybCwgb3B0aW1pemF0aW9uT2JqZWN0aXZlLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIE9wdGltaXphdGlvbiBPYmplY3RpdmVzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19