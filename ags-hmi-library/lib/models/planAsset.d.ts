import { Group } from './entity';
import { MissionTarget } from './missionTarget';
export declare class PlanAsset {
    byMissionTarget: MissionTarget[];
    entitys: any[];
    groups: Group[];
    planId: string;
    assetType: string;
}
