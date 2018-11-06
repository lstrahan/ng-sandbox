import { Group } from './entity';
import { MissionTarget } from './missionTarget';

export class PlanAsset {
    byMissionTarget: MissionTarget[];
    entitys: any[];
    groups: Group[];
    planId: string;
    assetType: string;
}
