import { AccessWindowLimit } from './access-window-limit';

export class Capability {
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

    constructor(json?: any) {
        this.capabilityId = json.capabilityId;
        this.description = json.description;
        this.confidence = json.confidence;
        this.capabilityMapId = json.capabilityMapId;
        this.preExecutionTime = json.preExecutionTime;
        this.postExecutionTime = json.postExecutionTime;
        this.reliabilityProbability = json.reliabilityProbability;
        this.probabilityOfSuccess = json.probabilityOfSuccess;
        this.isDedicated = json.isDedicated;
        this.assessTime = json.assessTime;
        this.priority = json.priority;
        this.executionTime = json.executionTime;

        this.elevationMinLimit = json.elevationMinLimit;
        this.elevationMaxLimit = json.elevationMaxLimit;
        this.earthLimbAltLimit = json.earthLimbAltLimit;
        this.qualityScore = json.qualityScore;
        this.lunarExclusionAngle = json.lunarExclusionAngle;
        this.applyLightingConstraints = json.applyLightingConstraints;
        this.solarExclusionAngle = json.solarExclusionAngle;
        this.applySolarDarknessConstraint = json.applySolarDarknessConstraint;
        this.rangeMin = json.rangeMin;
        this.rangeMax = json.rangeMax;
        this.azimuthMinLimit = json.azimuthMinLimit;
        this.azimuthMaxLimit = json.azimuthMaxLimit;
    }
}

export class CapabilityMap {
    capabilityMapId: string = '';
    capabilityType: string = '';
    uciCapabilityTypeName: string = '';
    uciTaskTypeName: string = '';
    description: string = '';
    hasTarget: boolean = false;

    constructor(json?: any) {
        this.capabilityMapId = json.capabilityMapId ? json.capabilityMapId : '';
        this.capabilityType = json.capabilityType ? json.capabilityType : '';
        this.uciCapabilityTypeName = json.uciCapabilityTypeName ? json.uciCapabilityTypeName : '';
        this.uciTaskTypeName = json.uciTaskTypeName ? json.uciTaskTypeName : '';
        this.description = json.description ? json.description : '';
        this.hasTarget = json.hasTarget ? json.hasTarget : '' ;
    }
}

export class Observability {
    observingCapabilityMapId: string;
    observingCapabilityType: string;
    usedCapabilityMapId: string;
    usedCapabilityType: string;
    description: string;
    capabilityDomain: string;

    constructor(json?: any) {
        if (json != null) {
            this.observingCapabilityMapId = json.observingCapabilityMapId;
            this.observingCapabilityType = json.observingCapabilityType;
            this.usedCapabilityMapId = json.usedCapabilityMapId;
            this.usedCapabilityType = json.usedCapabilityType;
            this.description = json.description;
            this.capabilityDomain = json.capabilityDomain;
        }
    }
}
