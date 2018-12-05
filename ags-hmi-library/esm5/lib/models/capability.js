/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Capability = /** @class */ (function () {
    function Capability(json) {
        this.capabilityId = json.capabilityId;
        this.description = json.description;
        this.confidence = json.confidence;
        this.capabilityMapId = json.capabilityMapId;
        this.preExecutionTime = json.preExecutionTime;
        this.postExecutionTime = json.postExecutionTime;
        this.reliabilityProbability = json.reliabilityProbability;
        this.probabilityOfSuccess = json.probabilityOfSuccess;
        this.isDedicated = json.isDedicated;
        this.assessTime = json.assessTime;
        this.priority = json.priority;
        this.executionTime = json.executionTime;
        this.elevationMinLimit = json.elevationMinLimit;
        this.elevationMaxLimit = json.elevationMaxLimit;
        this.earthLimbAltLimit = json.earthLimbAltLimit;
        this.qualityScore = json.qualityScore;
        this.lunarExclusionAngle = json.lunarExclusionAngle;
        this.applyLightingConstraints = json.applyLightingConstraints;
        this.solarExclusionAngle = json.solarExclusionAngle;
        this.applySolarDarknessConstraint = json.applySolarDarknessConstraint;
        this.rangeMin = json.rangeMin;
        this.rangeMax = json.rangeMax;
        this.azimuthMinLimit = json.azimuthMinLimit;
        this.azimuthMaxLimit = json.azimuthMaxLimit;
    }
    return Capability;
}());
export { Capability };
if (false) {
    /** @type {?} */
    Capability.prototype.capabilityId;
    /** @type {?} */
    Capability.prototype.description;
    /** @type {?} */
    Capability.prototype.confidence;
    /** @type {?} */
    Capability.prototype.capabilityMapId;
    /** @type {?} */
    Capability.prototype.preExecutionTime;
    /** @type {?} */
    Capability.prototype.postExecutionTime;
    /** @type {?} */
    Capability.prototype.reliabilityProbability;
    /** @type {?} */
    Capability.prototype.probabilityOfSuccess;
    /** @type {?} */
    Capability.prototype.isDedicated;
    /** @type {?} */
    Capability.prototype.assessTime;
    /** @type {?} */
    Capability.prototype.priority;
    /** @type {?} */
    Capability.prototype.executionTime;
    /** @type {?} */
    Capability.prototype.elevationMinLimit;
    /** @type {?} */
    Capability.prototype.elevationMaxLimit;
    /** @type {?} */
    Capability.prototype.earthLimbAltLimit;
    /** @type {?} */
    Capability.prototype.qualityScore;
    /** @type {?} */
    Capability.prototype.lunarExclusionAngle;
    /** @type {?} */
    Capability.prototype.applyLightingConstraints;
    /** @type {?} */
    Capability.prototype.solarExclusionAngle;
    /** @type {?} */
    Capability.prototype.applySolarDarknessConstraint;
    /** @type {?} */
    Capability.prototype.rangeMin;
    /** @type {?} */
    Capability.prototype.rangeMax;
    /** @type {?} */
    Capability.prototype.azimuthMinLimit;
    /** @type {?} */
    Capability.prototype.azimuthMaxLimit;
}
var CapabilityMap = /** @class */ (function () {
    function CapabilityMap(json) {
        this.capabilityMapId = '';
        this.capabilityType = '';
        this.uciCapabilityTypeName = '';
        this.uciTaskTypeName = '';
        this.description = '';
        this.hasTarget = false;
        this.capabilityMapId = json.capabilityMapId ? json.capabilityMapId : '';
        this.capabilityType = json.capabilityType ? json.capabilityType : '';
        this.uciCapabilityTypeName = json.uciCapabilityTypeName ? json.uciCapabilityTypeName : '';
        this.uciTaskTypeName = json.uciTaskTypeName ? json.uciTaskTypeName : '';
        this.description = json.description ? json.description : '';
        this.hasTarget = json.hasTarget ? json.hasTarget : '';
    }
    return CapabilityMap;
}());
export { CapabilityMap };
if (false) {
    /** @type {?} */
    CapabilityMap.prototype.capabilityMapId;
    /** @type {?} */
    CapabilityMap.prototype.capabilityType;
    /** @type {?} */
    CapabilityMap.prototype.uciCapabilityTypeName;
    /** @type {?} */
    CapabilityMap.prototype.uciTaskTypeName;
    /** @type {?} */
    CapabilityMap.prototype.description;
    /** @type {?} */
    CapabilityMap.prototype.hasTarget;
}
var Observability = /** @class */ (function () {
    function Observability(json) {
        if (json != null) {
            this.observingCapabilityMapId = json.observingCapabilityMapId;
            this.observingCapabilityType = json.observingCapabilityType;
            this.usedCapabilityMapId = json.usedCapabilityMapId;
            this.usedCapabilityType = json.usedCapabilityType;
            this.description = json.description;
            this.capabilityDomain = json.capabilityDomain;
        }
    }
    return Observability;
}());
export { Observability };
if (false) {
    /** @type {?} */
    Observability.prototype.observingCapabilityMapId;
    /** @type {?} */
    Observability.prototype.observingCapabilityType;
    /** @type {?} */
    Observability.prototype.usedCapabilityMapId;
    /** @type {?} */
    Observability.prototype.usedCapabilityType;
    /** @type {?} */
    Observability.prototype.description;
    /** @type {?} */
    Observability.prototype.capabilityDomain;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwYWJpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FwYWJpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUEyQkksb0JBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVks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SSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDOzs7O0lBakJHLGlEQUFpQzs7SUFDakMsZ0RBQWdDOztJQUNoQyw0Q0FBNEI7O0lBQzVCLDJDQUEyQjs7SUFDM0Isb0NBQW9COztJQUNwQix5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2Nlc3NXaW5kb3dMaW1pdCB9IGZyb20gJy4vYWNjZXNzLXdpbmRvdy1saW1pdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FwYWJpbGl0eSB7XHJcbiAgICBjYXBhYmlsaXR5SWQ6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjb25maWRlbmNlOiBzdHJpbmc7XHJcbiAgICBjYXBhYmlsaXR5TWFwSWQ6IHN0cmluZztcclxuICAgIHByZUV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIHBvc3RFeGVjdXRpb25UaW1lOiBudW1iZXI7XHJcbiAgICByZWxpYWJpbGl0eVByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBwcm9iYWJpbGl0eU9mU3VjY2VzczogbnVtYmVyO1xyXG4gICAgaXNEZWRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBhc3Nlc3NUaW1lOiBudW1iZXI7XHJcbiAgICBwcmlvcml0eTogbnVtYmVyO1xyXG4gICAgZXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG5cclxuICAgIGVsZXZhdGlvbk1pbkxpbWl0OiBudW1iZXI7XHJcbiAgICBlbGV2YXRpb25NYXhMaW1pdDogbnVtYmVyO1xyXG4gICAgZWFydGhMaW1iQWx0TGltaXQ6IG51bWJlcjtcclxuICAgIHF1YWxpdHlTY29yZTogbnVtYmVyO1xyXG4gICAgbHVuYXJFeGNsdXNpb25BbmdsZTogbnVtYmVyO1xyXG4gICAgYXBwbHlMaWdodGluZ0NvbnN0cmFpbnRzOiBib29sZWFuO1xyXG4gICAgc29sYXJFeGNsdXNpb25BbmdsZTogbnVtYmVyO1xyXG4gICAgYXBwbHlTb2xhckRhcmtuZXNzQ29uc3RyYWludDogYm9vbGVhbjtcclxuICAgIHJhbmdlTWluOiBudW1iZXI7XHJcbiAgICByYW5nZU1heDogbnVtYmVyO1xyXG4gICAgYXppbXV0aE1pbkxpbWl0OiBudW1iZXI7XHJcbiAgICBhemltdXRoTWF4TGltaXQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jYXBhYmlsaXR5SWQgPSBqc29uLmNhcGFiaWxpdHlJZDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmNvbmZpZGVuY2UgPSBqc29uLmNvbmZpZGVuY2U7XHJcbiAgICAgICAgdGhpcy5jYXBhYmlsaXR5TWFwSWQgPSBqc29uLmNhcGFiaWxpdHlNYXBJZDtcclxuICAgICAgICB0aGlzLnByZUV4ZWN1dGlvblRpbWUgPSBqc29uLnByZUV4ZWN1dGlvblRpbWU7XHJcbiAgICAgICAgdGhpcy5wb3N0RXhlY3V0aW9uVGltZSA9IGpzb24ucG9zdEV4ZWN1dGlvblRpbWU7XHJcbiAgICAgICAgdGhpcy5yZWxpYWJpbGl0eVByb2JhYmlsaXR5ID0ganNvbi5yZWxpYWJpbGl0eVByb2JhYmlsaXR5O1xyXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHlPZlN1Y2Nlc3MgPSBqc29uLnByb2JhYmlsaXR5T2ZTdWNjZXNzO1xyXG4gICAgICAgIHRoaXMuaXNEZWRpY2F0ZWQgPSBqc29uLmlzRGVkaWNhdGVkO1xyXG4gICAgICAgIHRoaXMuYXNzZXNzVGltZSA9IGpzb24uYXNzZXNzVGltZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0ganNvbi5wcmlvcml0eTtcclxuICAgICAgICB0aGlzLmV4ZWN1dGlvblRpbWUgPSBqc29uLmV4ZWN1dGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZWxldmF0aW9uTWluTGltaXQgPSBqc29uLmVsZXZhdGlvbk1pbkxpbWl0O1xyXG4gICAgICAgIHRoaXMuZWxldmF0aW9uTWF4TGltaXQgPSBqc29uLmVsZXZhdGlvbk1heExpbWl0O1xyXG4gICAgICAgIHRoaXMuZWFydGhMaW1iQWx0TGltaXQgPSBqc29uLmVhcnRoTGltYkFsdExpbWl0O1xyXG4gICAgICAgIHRoaXMucXVhbGl0eVNjb3JlID0ganNvbi5xdWFsaXR5U2NvcmU7XHJcbiAgICAgICAgdGhpcy5sdW5hckV4Y2x1c2lvbkFuZ2xlID0ganNvbi5sdW5hckV4Y2x1c2lvbkFuZ2xlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlMaWdodGluZ0NvbnN0cmFpbnRzID0ganNvbi5hcHBseUxpZ2h0aW5nQ29uc3RyYWludHM7XHJcbiAgICAgICAgdGhpcy5zb2xhckV4Y2x1c2lvbkFuZ2xlID0ganNvbi5zb2xhckV4Y2x1c2lvbkFuZ2xlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTb2xhckRhcmtuZXNzQ29uc3RyYWludCA9IGpzb24uYXBwbHlTb2xhckRhcmtuZXNzQ29uc3RyYWludDtcclxuICAgICAgICB0aGlzLnJhbmdlTWluID0ganNvbi5yYW5nZU1pbjtcclxuICAgICAgICB0aGlzLnJhbmdlTWF4ID0ganNvbi5yYW5nZU1heDtcclxuICAgICAgICB0aGlzLmF6aW11dGhNaW5MaW1pdCA9IGpzb24uYXppbXV0aE1pbkxpbWl0O1xyXG4gICAgICAgIHRoaXMuYXppbXV0aE1heExpbWl0ID0ganNvbi5hemltdXRoTWF4TGltaXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXR5TWFwIHtcclxuICAgIGNhcGFiaWxpdHlNYXBJZDogc3RyaW5nID0gJyc7XHJcbiAgICBjYXBhYmlsaXR5VHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICB1Y2lDYXBhYmlsaXR5VHlwZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgdWNpVGFza1R5cGVOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGhhc1RhcmdldDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdHlNYXBJZCA9IGpzb24uY2FwYWJpbGl0eU1hcElkID8ganNvbi5jYXBhYmlsaXR5TWFwSWQgOiAnJztcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdHlUeXBlID0ganNvbi5jYXBhYmlsaXR5VHlwZSA/IGpzb24uY2FwYWJpbGl0eVR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLnVjaUNhcGFiaWxpdHlUeXBlTmFtZSA9IGpzb24udWNpQ2FwYWJpbGl0eVR5cGVOYW1lID8ganNvbi51Y2lDYXBhYmlsaXR5VHlwZU5hbWUgOiAnJztcclxuICAgICAgICB0aGlzLnVjaVRhc2tUeXBlTmFtZSA9IGpzb24udWNpVGFza1R5cGVOYW1lID8ganNvbi51Y2lUYXNrVHlwZU5hbWUgOiAnJztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbiA/IGpzb24uZGVzY3JpcHRpb24gOiAnJztcclxuICAgICAgICB0aGlzLmhhc1RhcmdldCA9IGpzb24uaGFzVGFyZ2V0ID8ganNvbi5oYXNUYXJnZXQgOiAnJyA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmlsaXR5IHtcclxuICAgIG9ic2VydmluZ0NhcGFiaWxpdHlNYXBJZDogc3RyaW5nO1xyXG4gICAgb2JzZXJ2aW5nQ2FwYWJpbGl0eVR5cGU6IHN0cmluZztcclxuICAgIHVzZWRDYXBhYmlsaXR5TWFwSWQ6IHN0cmluZztcclxuICAgIHVzZWRDYXBhYmlsaXR5VHlwZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNhcGFiaWxpdHlEb21haW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGpzb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmluZ0NhcGFiaWxpdHlNYXBJZCA9IGpzb24ub2JzZXJ2aW5nQ2FwYWJpbGl0eU1hcElkO1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmluZ0NhcGFiaWxpdHlUeXBlID0ganNvbi5vYnNlcnZpbmdDYXBhYmlsaXR5VHlwZTtcclxuICAgICAgICAgICAgdGhpcy51c2VkQ2FwYWJpbGl0eU1hcElkID0ganNvbi51c2VkQ2FwYWJpbGl0eU1hcElkO1xyXG4gICAgICAgICAgICB0aGlzLnVzZWRDYXBhYmlsaXR5VHlwZSA9IGpzb24udXNlZENhcGFiaWxpdHlUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jYXBhYmlsaXR5RG9tYWluID0ganNvbi5jYXBhYmlsaXR5RG9tYWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=