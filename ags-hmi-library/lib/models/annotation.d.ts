export declare class Annotation {
    userLogon: string;
    lastUpdated: string;
    id: string;
    objectId: string;
    annotationType: string;
    noteType: string;
    narrative: string;
    confidence: number;
    constructor(json?: any);
    serialize(): Object;
}
