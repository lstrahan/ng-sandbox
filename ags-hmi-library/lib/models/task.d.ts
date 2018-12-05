import { MissionData } from './missionData';
export declare class Task {
    taskingOrderUuid: string;
    uciTaskId: string;
    name: string;
    type: string;
    missionData: MissionData[];
    taskId: string;
    taskDescription: string;
    taskType: string;
    entityId: string;
    precedence: number;
    priority: number;
    approvalRequired: boolean;
    status: string;
    planId: string;
}
