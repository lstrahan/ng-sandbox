import { TaskConstraint } from './taskConstraint';
import { Group, Entity } from './entity';

export class MissionTarget {
    primaryTaskId: string;
    groups: Group[];
    entitys: any[];

    coaUuid: string;
    missionPairUuid: string;
    capability: string;
    numberOfCollects: number;
    priority: number;
    taskType: string;
    optTrackingId: string;
    optimizer: string;
    platformUuid: string;
    targetCategoryId: number;
    targetEntityId: string;
    previousTaskUuid: string;
    relativeNoEarlierThan: number;
    relativeNoLaterThan: number;
    primaryTask: string;

    targetConstraints: TaskConstraint;
    accessWindows: Window[];
    requestWindows: Window[];


    //implement this object when known
    supportTasks: any;
}
