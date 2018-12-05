/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
var PlanMinTaskData = /** @class */ (function () {
    function PlanMinTaskData(json) {
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
    return PlanMinTaskData;
}());
export { PlanMinTaskData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcGxhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUI7SUFvQkkseUJBQVksSUFBVTtRQW5CdEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFZdkIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBRWhDLFVBQVU7WUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWpELHdCQUF3QjtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7Ozs7SUE3Q0csd0NBQTJCOztJQUMzQixvQ0FBdUI7O0lBQ3ZCLHFDQUF3Qjs7SUFDeEIsdUNBQTBCOztJQUMxQix3Q0FBMkI7O0lBQzNCLHlDQUE0Qjs7SUFDNUIscUNBQXdCOztJQUN4QixvQ0FBNkI7O0lBQzdCLGtDQUEyQjs7SUFHM0IsaUNBQWU7O0lBQ2Ysb0NBQWlCOztJQUNqQixzQ0FBb0I7O0lBQ3BCLCtCQUFhOztJQUNiLHFDQUFtQjs7SUFDbkIsK0JBQWE7O0lBQ2Isc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYW5NaW5UYXNrRGF0YSB7XHJcbiAgICBhc3NldEVudGl0eUlkOiBzdHJpbmcgPSAnJztcclxuICAgIGFzc2V0TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBjYXBhYmlsaXR5OiBzdHJpbmcgPSAnJztcclxuICAgIGNhcGFiaWxpdHlJZDogc3RyaW5nID0gJyc7XHJcbiAgICBtaXNzaW9uVGFza0lkOiBzdHJpbmcgPSAnJztcclxuICAgIHRhcmdldEVudGl0eUlkOiBzdHJpbmcgPSAnJztcclxuICAgIHRhcmdldE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgc3RhcnRUaW1lOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGVuZFRpbWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgXHJcbiAgICAvL05FVyBTRVJWSUNFIFBST1BFUlRJRVNcclxuICAgIHBsYW5JZDogc3RyaW5nO1xyXG4gICAgaXNQbGFubmVkOiBmYWxzZTtcclxuICAgIG1pc3Npb25VdWlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwbGFuU3RhdHVzOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBobWlUeXBlTmFtZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXRFbnRpdHlJZCA9IF8uaXNOaWwoanNvbi5hc3NldEVudGl0eUlkKSA/ICcnIDoganNvbi5hc3NldEVudGl0eUlkO1xyXG4gICAgICAgICAgICB0aGlzLmFzc2V0TmFtZSA9IF8uaXNOaWwoanNvbi5hc3NldE5hbWUpID8gJycgOiBqc29uLmFzc2V0TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jYXBhYmlsaXR5ID0gXy5pc05pbChqc29uLmNhcGFiaWxpdHkpID8gJycgOiBqc29uLmNhcGFiaWxpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwYWJpbGl0eUlkID0gXy5pc05pbChqc29uLmNhcGFiaWxpdHlJZCkgPyAnJyA6IGpzb24uY2FwYWJpbGl0eUlkO1xyXG4gICAgICAgICAgICB0aGlzLm1pc3Npb25UYXNrSWQgPSBfLmlzTmlsKGpzb24ubWlzc2lvblRhc2tJZCkgPyAnJyA6IGpzb24ubWlzc2lvblRhc2tJZDtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRFbnRpdHlJZCA9IF8uaXNOaWwoanNvbi50YXJnZXRFbnRpdHlJZCkgPyAnJyA6IGpzb24udGFyZ2V0RW50aXR5SWQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TmFtZSA9IF8uaXNOaWwoanNvbi50YXJnZXROYW1lKSA/ICcnIDoganNvbi50YXJnZXROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKGpzb24uc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gbmV3IERhdGUoanNvbi5lbmRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYW5uZWQgPSBqc29uLmlzUGxhbm5lZDtcclxuXHJcbiAgICAgICAgICAgIC8vIERFTEVURTpcclxuICAgICAgICAgICAgdGhpcy5hc3NldEVudGl0eUlkID0gdGhpcy5hc3NldEVudGl0eUlkLnRyaW0oKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRFbnRpdHlJZCA9IHRoaXMudGFyZ2V0RW50aXR5SWQudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy9ORVcgU0VSVklDRSBQUk9QRVJUSUVTXHJcbiAgICAgICAgICAgIHRoaXMucGxhbklkID0gXy5pc05pbChqc29uLnBsYW5JZCkgPyAnJyA6IGpzb24ucGxhbklkO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxhbm5lZCA9IF8uaXNOaWwoanNvbi5pc1BsYW5uZWQpID8gZmFsc2UgOiBqc29uLmlzUGxhbm5lZDtcclxuICAgICAgICAgICAgdGhpcy5taXNzaW9uVXVpZCA9IF8uaXNOaWwoanNvbi5taXNzaW9uVXVpZCkgPyAnJyA6IGpzb24ubWlzc2lvblV1aWQ7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IF8uaXNOaWwoanNvbi5uYW1lKSA/ICcnIDoganNvbi5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5TdGF0dXMgPSBfLmlzTmlsKGpzb24ucGxhblN0YXR1cykgPyAnJyA6IGpzb24ucGxhblN0YXR1cztcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXy5pc05pbChqc29uLnR5cGUpID8gJycgOiBqc29uLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==