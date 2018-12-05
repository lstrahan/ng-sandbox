export declare class Capability {
    capabilityId: string;
    description: string;
    confidence: string;
    capabilityMapId: string;
    preExecutionTime: number;
    postExecutionTime: number;
    reliabilityProbability: number;
    probabilityOfSuccess: number;
    isDedicated: boolean;
    assessTime: number;
    priority: number;
    executionTime: number;
    elevationMinLimit: number;
    elevationMaxLimit: number;
    earthLimbAltLimit: number;
    qualityScore: number;
    lunarExclusionAngle: number;
    applyLightingConstraints: boolean;
    solarExclusionAngle: number;
    applySolarDarknessConstraint: boolean;
    rangeMin: number;
    rangeMax: number;
    azimuthMinLimit: number;
    azimuthMaxLimit: number;
    constructor(json?: any);
}
export declare class CapabilityMap {
    capabilityMapId: string;
    capabilityType: string;
    uciCapabilityTypeName: string;
    uciTaskTypeName: string;
    description: string;
    hasTarget: boolean;
    constructor(json?: any);
}
export declare class Observability {
    observingCapabilityMapId: string;
    observingCapabilityType: string;
    usedCapabilityMapId: string;
    usedCapabilityType: string;
    description: string;
    capabilityDomain: string;
    constructor(json?: any);
}
