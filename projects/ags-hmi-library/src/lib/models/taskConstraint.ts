export class TaskConstraint {
    targetConstraintUuid: string;
    reservedA: string;
    reservedB: string;
    isCollectAssessCollect: true;
    probabilityAttribution: number;
    probabilityCollection: number;
    probabilitySuccess: number;
    earliestStartTime: string;
    latestEndTime: string;
    deconflictionConstraints: string;
    useNonDedicated: true;

    capability: string;
    numberOfCollects: number;
    priority: number;

    missionTaskIds: string[];

    bandwidth: string;
    qualityThreshold: number;
}
