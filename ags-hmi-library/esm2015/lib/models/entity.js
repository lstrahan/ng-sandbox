/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Capability } from './capability';
import { Vulnerability } from './vulnerability';
import { Domain } from './domain';
/* tslint:disable:no-use-before-declare */
export class Country {
    /**
     * @param {?=} json
     */
    constructor(json) {
        if (json) {
            this.fromJson(json);
        }
    }
    /**
     * @param {?} json
     * @return {?}
     */
    fromJson(json) {
        this.code = json[0];
        this.name = json[1];
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this);
    }
}
if (false) {
    /** @type {?} */
    Country.prototype.code;
    /** @type {?} */
    Country.prototype.name;
}
export class Entity {
    /**
     * @param {?} json
     */
    constructor(json) {
        this.entityType = '';
        this.name = '';
        this.description = '';
        this.owner = '';
        this.sic = '';
        this.countryCodeAlpha5 = '';
        this.affiliation = '';
        this.rgb = '';
        this.colorName = '';
        this.parentId = '';
        this.childrenIds = [];
        this.groupIds = [];
        this.capabilities = [];
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
if (false) {
    /** @type {?} */
    Entity.prototype.entityType;
    /** @type {?} */
    Entity.prototype.name;
    /** @type {?} */
    Entity.prototype.description;
    /** @type {?} */
    Entity.prototype.owner;
    /** @type {?} */
    Entity.prototype.sic;
    /** @type {?} */
    Entity.prototype.countryCodeAlpha5;
    /** @type {?} */
    Entity.prototype.affiliation;
    /** @type {?} */
    Entity.prototype.rgb;
    /** @type {?} */
    Entity.prototype.colorName;
    /** @type {?} */
    Entity.prototype.parentId;
    /** @type {?} */
    Entity.prototype.childrenIds;
    /** @type {?} */
    Entity.prototype.groupIds;
    /** @type {?} */
    Entity.prototype.capabilities;
    /** @type {?} */
    Entity.prototype.vulnerabilities;
    /** @type {?} */
    Entity.prototype.domain;
    /** @type {?} */
    Entity.prototype.agsEntityId;
}
export class PartialEntity {
    /**
     * @param {?} json
     */
    constructor(json) {
        this.entityId = '';
        this.name = '';
        this.countryName = '';
        this.domainType = '';
        this.owner = '';
        this.scc = '';
        this.affiliation = '';
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
if (false) {
    /** @type {?} */
    PartialEntity.prototype.entityId;
    /** @type {?} */
    PartialEntity.prototype.name;
    /** @type {?} */
    PartialEntity.prototype.countryName;
    /** @type {?} */
    PartialEntity.prototype.domainType;
    /** @type {?} */
    PartialEntity.prototype.owner;
    /** @type {?} */
    PartialEntity.prototype.scc;
    /** @type {?} */
    PartialEntity.prototype.affiliation;
    /** @type {?} */
    PartialEntity.prototype.groups;
    /** @type {?} */
    PartialEntity.prototype.capabilityTypes;
}
export class Group {
    /**
     * @param {?=} json
     */
    constructor(json) {
        this.groupName = '';
        this.groupId = '';
        this.groupName = json.groupName ? json.groupName : json.name;
        this.entityCount = json.entityCount;
        this.groupId = json.groupId ? json.groupId : json.id;
        this.name = json.name ? json.name : json.groupName;
        this.id = json.id ? json.id : json.groupId;
    }
}
if (false) {
    /** @type {?} */
    Group.prototype.groupName;
    /** @type {?} */
    Group.prototype.entityCount;
    /** @type {?} */
    Group.prototype.groupId;
    /** @type {?} */
    Group.prototype.name;
    /** @type {?} */
    Group.prototype.id;
}
// BaseEntity class is only intended to be used as a helper class for service calls.
export class BaseEntity {
    /**
     * @param {?} entity
     */
    constructor(entity) {
        this.agsEntityId = entity.agsEntityId;
        this.entityType = entity.entityType ? entity.entityType : '';
        this.name = entity.name;
        this.description = entity.description ? entity.description : '';
        this.owner = entity.owner ? entity.owner : '';
        this.sic = entity.sic ? entity.sic : '';
        this.domainType = entity.domain.domainType ? entity.domain.domainType : '';
    }
}
if (false) {
    /** @type {?} */
    BaseEntity.prototype.agsEntityId;
    /** @type {?} */
    BaseEntity.prototype.entityType;
    /** @type {?} */
    BaseEntity.prototype.name;
    /** @type {?} */
    BaseEntity.prototype.description;
    /** @type {?} */
    BaseEntity.prototype.owner;
    /** @type {?} */
    BaseEntity.prototype.sic;
    /** @type {?} */
    BaseEntity.prototype.domainType;
    /** @type {?} */
    BaseEntity.prototype.parentId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBR2xDLE1BQU0sT0FBTyxPQUFPOzs7O0lBSWhCLFlBQVksSUFBZTtRQUN2QixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFjO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDSjs7O0lBakJHLHVCQUFhOztJQUNiLHVCQUFhOztBQWtCakIsTUFBTSxPQUFPLE1BQU07Ozs7SUFvQmYsWUFBWSxJQUFTO1FBbkJyQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFB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QUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0NBQ0o7OztJQXJCRyxpQ0FBc0I7O0lBQ3RCLDZCQUFrQjs7SUFDbEIsb0NBQXlCOztJQUN6QixtQ0FBd0I7O0lBQ3hCLDhCQUFtQjs7SUFDbkIsNEJBQWlCOztJQUNqQixvQ0FBeUI7O0lBQ3pCLCtCQUFnQjs7SUFDaEIsd0NBQTBCOztBQWU5QixNQUFNLE9BQU8sS0FBSzs7OztJQVNkLFlBQVksSUFBVTtRQVJ0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFPakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25ELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQyxDQUFDO0NBQ0o7OztJQWZHLDBCQUF1Qjs7SUFDdkIsNEJBQW9COztJQUNwQix3QkFBcUI7O0lBR3JCLHFCQUFhOztJQUNiLG1CQUFXOzs7QUFZZixNQUFNLE9BQU8sVUFBVTs7OztJQVVuQixZQUFZLE1BQWM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7Q0FDSjs7O0lBbEJHLGlDQUFvQjs7SUFDcEIsZ0NBQW1COztJQUNuQiwwQkFBYTs7SUFDYixpQ0FBb0I7O0lBQ3BCLDJCQUFjOztJQUNkLHlCQUFZOztJQUNaLGdDQUFtQjs7SUFDbkIsOEJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FwYWJpbGl0eSB9IGZyb20gJy4vY2FwYWJpbGl0eSc7XHJcbmltcG9ydCB7IFZ1bG5lcmFiaWxpdHkgfSBmcm9tICcuL3Z1bG5lcmFiaWxpdHknO1xyXG5pbXBvcnQgeyBEb21haW4gfSBmcm9tICcuL2RvbWFpbic7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuZXhwb3J0IGNsYXNzIENvdW50cnkge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvbUpzb24oanNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyb21Kc29uKGpzb246IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0ganNvblswXTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICAgIGVudGl0eVR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBvd25lcjogc3RyaW5nID0gJyc7XHJcbiAgICBzaWM6IHN0cmluZyA9ICcnO1xyXG4gICAgY291bnRyeUNvZGVBbHBoYTU6IHN0cmluZyA9ICcnO1xyXG4gICAgYWZmaWxpYXRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgcmdiOiBzdHJpbmcgPSAnJztcclxuICAgIGNvbG9yTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwYXJlbnRJZDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY2hpbGRyZW5JZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBncm91cElkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGNhcGFiaWxpdGllczogQ2FwYWJpbGl0eVtdID0gW107XHJcbiAgICB2dWxuZXJhYmlsaXRpZXM6IFZ1bG5lcmFiaWxpdHlbXTtcclxuXHJcbiAgICBkb21haW46XHREb21haW47XHJcbiAgICBhZ3NFbnRpdHlJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5VHlwZSA9IGpzb24uZW50aXR5VHlwZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLm5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGpzb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5vd25lciA9IGpzb24ub3duZXI7XHJcbiAgICAgICAgdGhpcy5zaWMgPSBqc29uLnNpYztcclxuICAgICAgICB0aGlzLmNvdW50cnlDb2RlQWxwaGE1ID0ganNvbi5jb3VudHJ5Q29kZUFscGhhNTtcclxuICAgICAgICB0aGlzLmFmZmlsaWF0aW9uID0ganNvbi5hZmZpbGlhdGlvbjtcclxuICAgICAgICB0aGlzLnJnYiA9IGpzb24ucmdiO1xyXG4gICAgICAgIHRoaXMuY29sb3JOYW1lID0ganNvbi5jb2xvck5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRJZCA9IGpzb24ucGFyZW50SWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5JZHMgPSBqc29uLmNoaWxkcmVuSWRzID8ganNvbi5jaGlsZHJlbklkcyA6IFtdO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJZHMgPSBqc29uLmdyb3VwSWRzID8ganNvbi5ncm91cElkcyA6IFtdO1xyXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzID0ganNvbi5jYXBhYmlsaXRpZXMgPyBqc29uLmNhcGFiaWxpdGllcy5tYXAoeCA9PiBuZXcgQ2FwYWJpbGl0eSh4KSkgOiBbXTtcclxuICAgICAgICB0aGlzLnZ1bG5lcmFiaWxpdGllcyA9IGpzb24udnVsbmVyYWJpbGl0aWVzID8ganNvbi52dWxuZXJhYmlsaXRpZXMubWFwKHggPT4gbmV3IFZ1bG5lcmFiaWxpdHkoeCkpIDogW107XHJcblxyXG4gICAgICAgIHRoaXMuZG9tYWluID0ganNvbi5kb21haW4gPyBuZXcgRG9tYWluKGpzb24uZG9tYWluKSA6IG5ldyBEb21haW4oKTtcclxuICAgICAgICB0aGlzLmFnc0VudGl0eUlkID0ganNvbi5hZ3NFbnRpdHlJZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpYWxFbnRpdHkge1xyXG4gICAgZW50aXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBjb3VudHJ5TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBkb21haW5UeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIG93bmVyOiBzdHJpbmcgPSAnJztcclxuICAgIHNjYzogc3RyaW5nID0gJyc7XHJcbiAgICBhZmZpbGlhdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcbiAgICBjYXBhYmlsaXR5VHlwZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBqc29uLmFnc0VudGl0eUlkID8ganNvbi5hZ3NFbnRpdHlJZCA6ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGpzb24ubmFtZSA/IGpzb24ubmFtZSA6ICcnO1xyXG4gICAgICAgIHRoaXMuY291bnRyeU5hbWUgPSBqc29uLmNvdW50cnkgPyBqc29uLmNvdW50cnkgOiAnJztcclxuICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSBqc29uLmRvbWFpblR5cGUgPyBqc29uLmRvbWFpblR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLm93bmVyID0ganNvbi5vd25lciA/IGpzb24ub3duZXIgOiAnJztcclxuICAgICAgICB0aGlzLnNjYyA9IGpzb24uc2NjTnVtID8ganNvbi5zY2NOdW0udG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgIHRoaXMuYWZmaWxpYXRpb24gPSBqc29uLmFmZmlsaWF0aW9uID8ganNvbi5hZmZpbGlhdGlvbiA6ICcnO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0ganNvbi5ncm91cHMgPyBqc29uLmdyb3Vwcy5tYXAoeCA9PiBuZXcgR3JvdXAoeCkpIDogW107XHJcbiAgICAgICAgdGhpcy5jYXBhYmlsaXR5VHlwZXMgPSBqc29uLmNhcGFiaWxpdHlUeXBlcyA/IGpzb24uY2FwYWJpbGl0eVR5cGVzIDogW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cCB7XHJcbiAgICBncm91cE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZW50aXR5Q291bnQ6IG51bWJlcjtcclxuICAgIGdyb3VwSWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vTkVXIE1PREVMIERFRklOSVRJT05cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0ganNvbi5ncm91cE5hbWUgPyBqc29uLmdyb3VwTmFtZSA6IGpzb24ubmFtZTtcclxuICAgICAgICB0aGlzLmVudGl0eUNvdW50ID0ganNvbi5lbnRpdHlDb3VudDtcclxuICAgICAgICB0aGlzLmdyb3VwSWQgPSBqc29uLmdyb3VwSWQgPyBqc29uLmdyb3VwSWQgOiBqc29uLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGpzb24ubmFtZSA/IGpzb24ubmFtZSA6IGpzb24uZ3JvdXBOYW1lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLmlkID8ganNvbi5pZCA6IGpzb24uZ3JvdXBJZDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQmFzZUVudGl0eSBjbGFzcyBpcyBvbmx5IGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSBoZWxwZXIgY2xhc3MgZm9yIHNlcnZpY2UgY2FsbHMuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IHtcclxuICAgIGFnc0VudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgb3duZXI6IHN0cmluZztcclxuICAgIHNpYzogc3RyaW5nO1xyXG4gICAgZG9tYWluVHlwZTogc3RyaW5nO1xyXG4gICAgcGFyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIHRoaXMuYWdzRW50aXR5SWQgPSBlbnRpdHkuYWdzRW50aXR5SWQ7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlUeXBlID0gZW50aXR5LmVudGl0eVR5cGUgPyBlbnRpdHkuZW50aXR5VHlwZSA6ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGVudGl0eS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBlbnRpdHkuZGVzY3JpcHRpb24gPyBlbnRpdHkuZGVzY3JpcHRpb24gOiAnJztcclxuICAgICAgICB0aGlzLm93bmVyID0gZW50aXR5Lm93bmVyID8gZW50aXR5Lm93bmVyIDogJyc7XHJcbiAgICAgICAgdGhpcy5zaWMgPSBlbnRpdHkuc2ljID8gZW50aXR5LnNpYyA6ICcnO1xyXG4gICAgICAgIHRoaXMuZG9tYWluVHlwZSA9IGVudGl0eS5kb21haW4uZG9tYWluVHlwZSA/IGVudGl0eS5kb21haW4uZG9tYWluVHlwZSA6ICcnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==