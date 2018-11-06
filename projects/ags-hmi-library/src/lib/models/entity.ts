import { Capability } from './capability';
import { Vulnerability } from './vulnerability';
import { Domain } from './domain';

/* tslint:disable:no-use-before-declare */
export class Country {
    code: string;
    name: string;

    constructor(json?: string[]) {
        if (json) {
            this.fromJson(json);
        }
    }

    fromJson(json: string[]) {
        this.code = json[0];
        this.name = json[1];
    }

    toString(): string {
        return JSON.stringify(this);
    }
}

export class Entity {
    entityType: string = '';
    name: string = '';
    description: string = '';
    owner: string = '';
    sic: string = '';
    countryCodeAlpha5: string = '';
    affiliation: string = '';
    rgb: string = '';
    colorName: string = '';
    parentId: string = '';

    childrenIds: string[] = [];
    groupIds: string[] = [];
    capabilities: Capability[] = [];
    vulnerabilities: Vulnerability[];

    domain:	Domain;
    agsEntityId: string;

    constructor(json: any) {
        this.entityType = json.entityType;
        this.name = json.name;
        this.description = json.description;
        this.owner = json.owner;
        this.sic = json.sic;
        this.countryCodeAlpha5 = json.countryCodeAlpha5;
        this.affiliation = json.affiliation;
        this.rgb = json.rgb;
        this.colorName = json.colorName;
        this.parentId = json.parentId;

        this.childrenIds = json.childrenIds ? json.childrenIds : [];
        this.groupIds = json.groupIds ? json.groupIds : [];
        this.capabilities = json.capabilities ? json.capabilities.map(x => new Capability(x)) : [];
        this.vulnerabilities = json.vulnerabilities ? json.vulnerabilities.map(x => new Vulnerability(x)) : [];

        this.domain = json.domain ? new Domain(json.domain) : new Domain();
        this.agsEntityId = json.agsEntityId;
    }
}

export class PartialEntity {
    entityId: string = '';
    name: string = '';
    countryName: string = '';
    domainType: string = '';
    owner: string = '';
    scc: string = '';
    affiliation: string = '';
    groups: Group[];
    capabilityTypes: string[];

    constructor(json: any) {
        this.entityId = json.agsEntityId ? json.agsEntityId : '';
        this.name = json.name ? json.name : '';
        this.countryName = json.country ? json.country : '';
        this.domainType = json.domainType ? json.domainType : '';
        this.owner = json.owner ? json.owner : '';
        this.scc = json.sccNum ? json.sccNum.toString() : '';
        this.affiliation = json.affiliation ? json.affiliation : '';
        this.groups = json.groups ? json.groups.map(x => new Group(x)) : [];
        this.capabilityTypes = json.capabilityTypes ? json.capabilityTypes : [];
    }
}

export class Group {
    groupName: string = '';
    entityCount: number;
    groupId: string = '';

    //NEW MODEL DEFINITION
    name: string;
    id: string;

    constructor(json?: any) {
        this.groupName = json.groupName ? json.groupName : json.name;
        this.entityCount = json.entityCount;
        this.groupId = json.groupId ? json.groupId : json.id;
        this.name = json.name ? json.name : json.groupName;
        this.id = json.id ? json.id : json.groupId;
    }
}

// BaseEntity class is only intended to be used as a helper class for service calls.
export class BaseEntity {
    agsEntityId: string;
    entityType: string;
    name: string;
    description: string;
    owner: string;
    sic: string;
    domainType: string;
    parentId: string;

    constructor(entity: Entity) {
        this.agsEntityId = entity.agsEntityId;
        this.entityType = entity.entityType ? entity.entityType : '';
        this.name = entity.name;
        this.description = entity.description ? entity.description : '';
        this.owner = entity.owner ? entity.owner : '';
        this.sic = entity.sic ? entity.sic : '';
        this.domainType = entity.domain.domainType ? entity.domain.domainType : '';
    }
}
