import * as _ from 'lodash';

export class PlanMinTaskData {
    assetEntityId: string = '';
    assetName: string = '';
    capability: string = '';
    capabilityId: string = '';
    missionTaskId: string = '';
    targetEntityId: string = '';
    targetName: string = '';
    startTime: Date = new Date();
    endTime: Date = new Date();
    
    //NEW SERVICE PROPERTIES
    planId: string;
    isPlanned: false;
    missionUuid: string;
    name: string;
    planStatus: string;
    type: string;
    hmiTypeName:string;

    constructor(json?: any) {
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
