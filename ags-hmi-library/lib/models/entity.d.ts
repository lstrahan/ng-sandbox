import { Capability } from './capability';
import { Vulnerability } from './vulnerability';
import { Domain } from './domain';
export declare class Country {
    code: string;
    name: string;
    constructor(json?: string[]);
    fromJson(json: string[]): void;
    toString(): string;
}
export declare class Entity {
    entityType: string;
    name: string;
    description: string;
    owner: string;
    sic: string;
    countryCodeAlpha5: string;
    affiliation: string;
    rgb: string;
    colorName: string;
    parentId: string;
    childrenIds: string[];
    groupIds: string[];
    capabilities: Capability[];
    vulnerabilities: Vulnerability[];
    domain: Domain;
    agsEntityId: string;
    constructor(json: any);
}
export declare class PartialEntity {
    entityId: string;
    name: string;
    countryName: string;
    domainType: string;
    owner: string;
    scc: string;
    affiliation: string;
    groups: Group[];
    capabilityTypes: string[];
    constructor(json: any);
}
export declare class Group {
    groupName: string;
    entityCount: number;
    groupId: string;
    name: string;
    id: string;
    constructor(json?: any);
}
export declare class BaseEntity {
    agsEntityId: string;
    entityType: string;
    name: string;
    description: string;
    owner: string;
    sic: string;
    domainType: string;
    parentId: string;
    constructor(entity: Entity);
}
