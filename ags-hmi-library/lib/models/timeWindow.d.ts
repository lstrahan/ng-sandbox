export declare class TimeWindow {
    windowUuid: string;
    startTime: string;
    endTime: string;
    windowType: string;
    assetId: string;
    probSuccess: number;
    probAttribution: number;
    preExecutionTime: number;
    executionTime: number;
    postExecutionTime: number;
    required: true;
    reasonLowerProbSuccess: string;
    status: string;
    revNumber: string;
    numberOfCollects: number;
    quality: number;
}
