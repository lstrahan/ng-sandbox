import { PlanSubType } from './planSubType';
import { AlertType } from './alertType';
import { TaskSubType } from './taskSubType';
export declare class Alert {
    alertType: AlertType;
    description: string;
    uuid: string;
    planSubType: {
        type: PlanSubType;
    };
    taskSubType: TaskSubType;
    domain: string;
    assetStatusSubType: {
        statusType: string;
        uuid: string;
        type: string;
        assetName: string;
        assetId: string;
        assetType: string;
        assetState: string;
        domain: string;
        owner: string;
        capabilityStatusList: {
            capabilityStatusSummaries: {
                capabilityID: string;
                capabilityType: string;
                capabilityStatus: string;
                effectiveTime: string;
            };
        };
        assetPosition: {
            source: string;
            orbitType: string;
            latitude: string;
            longitude: string;
            altitude: string;
        };
        lastUpdateTime: string;
    };
}
