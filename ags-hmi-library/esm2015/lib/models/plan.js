/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class PlanMinTaskData {
    /**
     * @param {?=} json
     */
    constructor(json) {
        this.assetEntityId = '';
        this.assetName = '';
        this.capability = '';
        this.capabilityId = '';
        this.missionTaskId = '';
        this.targetEntityId = '';
        this.targetName = '';
        this.startTime = new Date();
        this.endTime = new Date();
        if (json) {
            this.assetEntityId = _.isNil(json.assetEntityId) ? '' : json.assetEntityId;
            this.assetName = _.isNil(json.assetName) ? '' : json.assetName;
            this.capability = _.isNil(json.capability) ? '' : json.capability;
            this.capabilityId = _.isNil(json.capabilityId) ? '' : json.capabilityId;
            this.missionTaskId = _.isNil(json.missionTaskId) ? '' : json.missionTaskId;
            this.targetEntityId = _.isNil(json.targetEntityId) ? '' : json.targetEntityId;
            this.targetName = _.isNil(json.targetName) ? '' : json.targetName;
            this.startTime = new Date(json.startTime);
            this.endTime = new Date(json.endTime);
            this.isPlanned = json.isPlanned;
            // DELETE:
            this.assetEntityId = this.assetEntityId.trim();
            this.targetEntityId = this.targetEntityId.trim();
            //NEW SERVICE PROPERTIES
            this.planId = _.isNil(json.planId) ? '' : json.planId;
            this.isPlanned = _.isNil(json.isPlanned) ? false : json.isPlanned;
            this.missionUuid = _.isNil(json.missionUuid) ? '' : json.missionUuid;
            this.name = _.isNil(json.name) ? '' : json.name;
            this.planStatus = _.isNil(json.planStatus) ? '' : json.planStatus;
            this.type = _.isNil(json.type) ? '' : json.type;
        }
    }
}
if (false) {
    /** @type {?} */
    PlanMinTaskData.prototype.assetEntityId;
    /** @type {?} */
    PlanMinTaskData.prototype.assetName;
    /** @type {?} */
    PlanMinTaskData.prototype.capability;
    /** @type {?} */
    PlanMinTaskData.prototype.capabilityId;
    /** @type {?} */
    PlanMinTaskData.prototype.missionTaskId;
    /** @type {?} */
    PlanMinTaskData.prototype.targetEntityId;
    /** @type {?} */
    PlanMinTaskData.prototype.targetName;
    /** @type {?} */
    PlanMinTaskData.prototype.startTime;
    /** @type {?} */
    PlanMinTaskData.prototype.endTime;
    /** @type {?} */
    PlanMinTaskData.prototype.planId;
    /** @type {?} */
    PlanMinTaskData.prototype.isPlanned;
    /** @type {?} */
    PlanMinTaskData.prototype.missionUuid;
    /** @type {?} */
    PlanMinTaskData.prototype.name;
    /** @type {?} */
    PlanMinTaskData.prototype.planStatus;
    /** @type {?} */
    PlanMinTaskData.prototype.type;
    /** @type {?} */
    PlanMinTaskData.prototype.hmiTypeName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcGxhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsTUFBTSxPQUFPLGVBQWU7Ozs7SUFvQnhCLFlBQVksSUFBVTtRQW5CdEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFZdkIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBRWhDLFVBQVU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWpELHdCQUF3QjtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNuRDtJQUNMLENBQUM7Q0FDSjs7O0lBN0NHLHdDQUEyQjs7SUFDM0Isb0NBQXVCOztJQUN2QixxQ0FBd0I7O0lBQ3hCLHVDQUEwQjs7SUFDMUIsd0NBQTJCOztJQUMzQix5Q0FBNEI7O0lBQzVCLHFDQUF3Qjs7SUFDeEIsb0NBQTZCOztJQUM3QixrQ0FBMkI7O0lBRzNCLGlDQUFlOztJQUNmLG9DQUFpQjs7SUFDakIsc0NBQW9COztJQUNwQiwrQkFBYTs7SUFDYixxQ0FBbUI7O0lBQ25CLCtCQUFhOztJQUNiLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFuTWluVGFza0RhdGEge1xyXG4gICAgYXNzZXRFbnRpdHlJZDogc3RyaW5nID0gJyc7XHJcbiAgICBhc3NldE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgY2FwYWJpbGl0eTogc3RyaW5nID0gJyc7XHJcbiAgICBjYXBhYmlsaXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbWlzc2lvblRhc2tJZDogc3RyaW5nID0gJyc7XHJcbiAgICB0YXJnZXRFbnRpdHlJZDogc3RyaW5nID0gJyc7XHJcbiAgICB0YXJnZXROYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHN0YXJ0VGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBlbmRUaW1lOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIFxyXG4gICAgLy9ORVcgU0VSVklDRSBQUk9QRVJUSUVTXHJcbiAgICBwbGFuSWQ6IHN0cmluZztcclxuICAgIGlzUGxhbm5lZDogZmFsc2U7XHJcbiAgICBtaXNzaW9uVXVpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGxhblN0YXR1czogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaG1pVHlwZU5hbWU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2V0RW50aXR5SWQgPSBfLmlzTmlsKGpzb24uYXNzZXRFbnRpdHlJZCkgPyAnJyA6IGpzb24uYXNzZXRFbnRpdHlJZDtcclxuICAgICAgICAgICAgdGhpcy5hc3NldE5hbWUgPSBfLmlzTmlsKGpzb24uYXNzZXROYW1lKSA/ICcnIDoganNvbi5hc3NldE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwYWJpbGl0eSA9IF8uaXNOaWwoanNvbi5jYXBhYmlsaXR5KSA/ICcnIDoganNvbi5jYXBhYmlsaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmNhcGFiaWxpdHlJZCA9IF8uaXNOaWwoanNvbi5jYXBhYmlsaXR5SWQpID8gJycgOiBqc29uLmNhcGFiaWxpdHlJZDtcclxuICAgICAgICAgICAgdGhpcy5taXNzaW9uVGFza0lkID0gXy5pc05pbChqc29uLm1pc3Npb25UYXNrSWQpID8gJycgOiBqc29uLm1pc3Npb25UYXNrSWQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RW50aXR5SWQgPSBfLmlzTmlsKGpzb24udGFyZ2V0RW50aXR5SWQpID8gJycgOiBqc29uLnRhcmdldEVudGl0eUlkO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5hbWUgPSBfLmlzTmlsKGpzb24udGFyZ2V0TmFtZSkgPyAnJyA6IGpzb24udGFyZ2V0TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZShqc29uLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IG5ldyBEYXRlKGpzb24uZW5kVGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQbGFubmVkID0ganNvbi5pc1BsYW5uZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBERUxFVEU6XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXRFbnRpdHlJZCA9IHRoaXMuYXNzZXRFbnRpdHlJZC50cmltKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RW50aXR5SWQgPSB0aGlzLnRhcmdldEVudGl0eUlkLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIC8vTkVXIFNFUlZJQ0UgUFJPUEVSVElFU1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5JZCA9IF8uaXNOaWwoanNvbi5wbGFuSWQpID8gJycgOiBqc29uLnBsYW5JZDtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYW5uZWQgPSBfLmlzTmlsKGpzb24uaXNQbGFubmVkKSA/IGZhbHNlIDoganNvbi5pc1BsYW5uZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWlzc2lvblV1aWQgPSBfLmlzTmlsKGpzb24ubWlzc2lvblV1aWQpID8gJycgOiBqc29uLm1pc3Npb25VdWlkO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBfLmlzTmlsKGpzb24ubmFtZSkgPyAnJyA6IGpzb24ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wbGFuU3RhdHVzID0gXy5pc05pbChqc29uLnBsYW5TdGF0dXMpID8gJycgOiBqc29uLnBsYW5TdGF0dXM7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IF8uaXNOaWwoanNvbi50eXBlKSA/ICcnIDoganNvbi50eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=