import { OptimizationMetric } from './optimizationMetric';
import { MissionTarget } from './missionTarget';
export declare class Optimization {
    missionUuid: string;
    coaId: string;
    coaName: string;
    coaStatus: string;
    draftCoaStartTime: any;
    startTime: string;
    endTime: string;
    collectAssesCollect: boolean;
    probabilityOfSuccess: number;
    optimizerMessage: string;
    optimizationMetricsUuid: string;
    optimizationMetrics: OptimizationMetric;
    missionTargets: MissionTarget;
    coaObjectives: any;
}
