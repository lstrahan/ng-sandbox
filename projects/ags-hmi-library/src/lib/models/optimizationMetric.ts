export class OptimizationMetric {
    planId: string;
    planDuration: number;
    totalMissionTime: number;
    totalTaskAttempts: number;
    avgTaskTime: number;
    medianTaskTime: number;
    avgProbTaskSuccess: number;
    minProbTaskSuccess: number;
    avgProbTaskAttrib: number;
    probMissionSuccess: number;
    numResourcesUsed: number;
    numTasksAssigned: number;
    numTasksUnassigned: number;
    planStartTime: string;
    planEndTime: string;
    optDebug: string;
    username: string;
}
