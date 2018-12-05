/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Capability } from './capability';
import { Vulnerability } from './vulnerability';
import { Domain } from './domain';
/* tslint:disable:no-use-before-declare */
var /* tslint:disable:no-use-before-declare */
Country = /** @class */ (function () {
    function Country(json) {
        if (json) {
            this.fromJson(json);
        }
    }
    /**
     * @param {?} json
     * @return {?}
     */
    Country.prototype.fromJson = /**
     * @param {?} json
     * @return {?}
     */
    function (json) {
        this.code = json[0];
        this.name = json[1];
    };
    /**
     * @return {?}
     */
    Country.prototype.toString = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this);
    };
    return Country;
}());
/* tslint:disable:no-use-before-declare */
export { Country };
if (false) {
    /** @type {?} */
    Country.prototype.code;
    /** @type {?} */
    Country.prototype.name;
}
var Entity = /** @class */ (function () {
    function Entity(json) {
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
        this.capabilities = json.capabilities ? json.capabilities.map(function (x) { return new Capability(x); }) : [];
        this.vulnerabilities = json.vulnerabilities ? json.vulnerabilities.map(function (x) { return new Vulnerability(x); }) : [];
        this.domain = json.domain ? new Domain(json.domain) : new Domain();
        this.agsEntityId = json.agsEntityId;
    }
    return Entity;
}());
export { Entity };
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
var PartialEntity = /** @class */ (function () {
    function PartialEntity(json) {
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
        this.groups = json.groups ? json.groups.map(function (x) { return new Group(x); }) : [];
        this.capabilityTypes = json.capabilityTypes ? json.capabilityTypes : [];
    }
    return PartialEntity;
}());
export { PartialEntity };
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
var Group = /** @class */ (function () {
    function Group(json) {
        this.groupName = '';
        this.groupId = '';
        this.groupName = json.groupName ? json.groupName : json.name;
        this.entityCount = json.entityCount;
        this.groupId = json.groupId ? json.groupId : json.id;
        this.name = json.name ? json.name : json.groupName;
        this.id = json.id ? json.id : json.groupId;
    }
    return Group;
}());
export { Group };
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
var 
// BaseEntity class is only intended to be used as a helper class for service calls.
BaseEntity = /** @class */ (function () {
    function BaseEntity(entity) {
        this.agsEntityId = entity.agsEntityId;
        this.entityType = entity.entityType ? entity.entityType : '';
        this.name = entity.name;
        this.description = entity.description ? entity.description : '';
        this.owner = entity.owner ? entity.owner : '';
        this.sic = entity.sic ? entity.sic : '';
        this.domainType = entity.domain.domainType ? entity.domain.domainType : '';
    }
    return BaseEntity;
}());
// BaseEntity class is only intended to be used as a helper class for service calls.
export { BaseEntity };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBR2xDOztJQUlJLGlCQUFZLElBQWU7UUFDdkIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQkFBUTs7OztJQUFSLFVBQVMsSUFBYztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsMEJBQVE7OztJQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQzs7Ozs7SUFqQkcsdUJBQWE7O0lBQ2IsdUJBQWE7O0FBa0JqQjtJQW9CSSxnQkFBWSxJQUFTO1FBbkJyQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQU81QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUV2RyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEMsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7O0lBdkNHLDRCQUF3Qjs7SUFDeEIsc0JBQWtCOztJQUNsQiw2QkFBeUI7O0lBQ3pCLHVCQUFtQjs7SUFDbkIscUJBQWlCOztJQUNqQixtQ0FBK0I7O0lBQy9CLDZCQUF5Qjs7SUFDekIscUJBQWlCOztJQUNqQiwyQkFBdUI7O0lBQ3ZCLDBCQUFzQjs7SUFFdEIsNkJBQTJCOztJQUMzQiwwQkFBd0I7O0lBQ3hCLDhCQUFnQzs7SUFDaEMsaUNBQWlDOztJQUVqQyx3QkFBZTs7SUFDZiw2QkFBb0I7O0FBd0J4QjtJQVdJLHVCQUFZLElBQVM7UUFWckIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBS3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVFLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7Ozs7SUFyQkcsaUNBQXNCOztJQUN0Qiw2QkFBa0I7O0lBQ2xCLG9DQUF5Qjs7SUFDekIsbUNBQXdCOztJQUN4Qiw4QkFBbUI7O0lBQ25CLDRCQUFpQjs7SUFDakIsb0NBQXlCOztJQUN6QiwrQkFBZ0I7O0lBQ2hCLHdDQUEwQjs7QUFlOUI7SUFTSSxlQUFZLElBQVU7UUFSdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBT2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0MsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7O0lBZkcsMEJBQXVCOztJQUN2Qiw0QkFBb0I7O0lBQ3BCLHdCQUFxQjs7SUFHckIscUJBQWE7O0lBQ2IsbUJBQVc7OztBQVlmOzs7SUFVSSxvQkFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDOzs7OztJQWxCRyxpQ0FBb0I7O0lBQ3BCLGdDQUFtQjs7SUFDbkIsMEJBQWE7O0lBQ2IsaUNBQW9COztJQUNwQiwyQkFBYzs7SUFDZCx5QkFBWTs7SUFDWixnQ0FBbUI7O0lBQ25CLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcGFiaWxpdHkgfSBmcm9tICcuL2NhcGFiaWxpdHknO1xyXG5pbXBvcnQgeyBWdWxuZXJhYmlsaXR5IH0gZnJvbSAnLi92dWxuZXJhYmlsaXR5JztcclxuaW1wb3J0IHsgRG9tYWluIH0gZnJvbSAnLi9kb21haW4nO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJ5IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogc3RyaW5nW10pIHtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmZyb21Kc29uKGpzb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmcm9tSnNvbihqc29uOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGpzb25bMF07XHJcbiAgICAgICAgdGhpcy5uYW1lID0ganNvblsxXTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgb3duZXI6IHN0cmluZyA9ICcnO1xyXG4gICAgc2ljOiBzdHJpbmcgPSAnJztcclxuICAgIGNvdW50cnlDb2RlQWxwaGE1OiBzdHJpbmcgPSAnJztcclxuICAgIGFmZmlsaWF0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIHJnYjogc3RyaW5nID0gJyc7XHJcbiAgICBjb2xvck5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgcGFyZW50SWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNoaWxkcmVuSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZ3JvdXBJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBjYXBhYmlsaXRpZXM6IENhcGFiaWxpdHlbXSA9IFtdO1xyXG4gICAgdnVsbmVyYWJpbGl0aWVzOiBWdWxuZXJhYmlsaXR5W107XHJcblxyXG4gICAgZG9tYWluOlx0RG9tYWluO1xyXG4gICAgYWdzRW50aXR5SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVudGl0eVR5cGUgPSBqc29uLmVudGl0eVR5cGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0ganNvbi5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBqc29uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBqc29uLm93bmVyO1xyXG4gICAgICAgIHRoaXMuc2ljID0ganNvbi5zaWM7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5Q29kZUFscGhhNSA9IGpzb24uY291bnRyeUNvZGVBbHBoYTU7XHJcbiAgICAgICAgdGhpcy5hZmZpbGlhdGlvbiA9IGpzb24uYWZmaWxpYXRpb247XHJcbiAgICAgICAgdGhpcy5yZ2IgPSBqc29uLnJnYjtcclxuICAgICAgICB0aGlzLmNvbG9yTmFtZSA9IGpzb24uY29sb3JOYW1lO1xyXG4gICAgICAgIHRoaXMucGFyZW50SWQgPSBqc29uLnBhcmVudElkO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuSWRzID0ganNvbi5jaGlsZHJlbklkcyA/IGpzb24uY2hpbGRyZW5JZHMgOiBbXTtcclxuICAgICAgICB0aGlzLmdyb3VwSWRzID0ganNvbi5ncm91cElkcyA/IGpzb24uZ3JvdXBJZHMgOiBbXTtcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdGllcyA9IGpzb24uY2FwYWJpbGl0aWVzID8ganNvbi5jYXBhYmlsaXRpZXMubWFwKHggPT4gbmV3IENhcGFiaWxpdHkoeCkpIDogW107XHJcbiAgICAgICAgdGhpcy52dWxuZXJhYmlsaXRpZXMgPSBqc29uLnZ1bG5lcmFiaWxpdGllcyA/IGpzb24udnVsbmVyYWJpbGl0aWVzLm1hcCh4ID0+IG5ldyBWdWxuZXJhYmlsaXR5KHgpKSA6IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmRvbWFpbiA9IGpzb24uZG9tYWluID8gbmV3IERvbWFpbihqc29uLmRvbWFpbikgOiBuZXcgRG9tYWluKCk7XHJcbiAgICAgICAgdGhpcy5hZ3NFbnRpdHlJZCA9IGpzb24uYWdzRW50aXR5SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWFsRW50aXR5IHtcclxuICAgIGVudGl0eUlkOiBzdHJpbmcgPSAnJztcclxuICAgIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgY291bnRyeU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZG9tYWluVHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBvd25lcjogc3RyaW5nID0gJyc7XHJcbiAgICBzY2M6IHN0cmluZyA9ICcnO1xyXG4gICAgYWZmaWxpYXRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG4gICAgY2FwYWJpbGl0eVR5cGVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVudGl0eUlkID0ganNvbi5hZ3NFbnRpdHlJZCA/IGpzb24uYWdzRW50aXR5SWQgOiAnJztcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLm5hbWUgPyBqc29uLm5hbWUgOiAnJztcclxuICAgICAgICB0aGlzLmNvdW50cnlOYW1lID0ganNvbi5jb3VudHJ5ID8ganNvbi5jb3VudHJ5IDogJyc7XHJcbiAgICAgICAgdGhpcy5kb21haW5UeXBlID0ganNvbi5kb21haW5UeXBlID8ganNvbi5kb21haW5UeXBlIDogJyc7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IGpzb24ub3duZXIgPyBqc29uLm93bmVyIDogJyc7XHJcbiAgICAgICAgdGhpcy5zY2MgPSBqc29uLnNjY051bSA/IGpzb24uc2NjTnVtLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICB0aGlzLmFmZmlsaWF0aW9uID0ganNvbi5hZmZpbGlhdGlvbiA/IGpzb24uYWZmaWxpYXRpb24gOiAnJztcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGpzb24uZ3JvdXBzID8ganNvbi5ncm91cHMubWFwKHggPT4gbmV3IEdyb3VwKHgpKSA6IFtdO1xyXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0eVR5cGVzID0ganNvbi5jYXBhYmlsaXR5VHlwZXMgPyBqc29uLmNhcGFiaWxpdHlUeXBlcyA6IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdXAge1xyXG4gICAgZ3JvdXBOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGVudGl0eUNvdW50OiBudW1iZXI7XHJcbiAgICBncm91cElkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAvL05FVyBNT0RFTCBERUZJTklUSU9OXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IGpzb24uZ3JvdXBOYW1lID8ganNvbi5ncm91cE5hbWUgOiBqc29uLm5hbWU7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlDb3VudCA9IGpzb24uZW50aXR5Q291bnQ7XHJcbiAgICAgICAgdGhpcy5ncm91cElkID0ganNvbi5ncm91cElkID8ganNvbi5ncm91cElkIDoganNvbi5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLm5hbWUgPyBqc29uLm5hbWUgOiBqc29uLmdyb3VwTmFtZTtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZCA/IGpzb24uaWQgOiBqc29uLmdyb3VwSWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEJhc2VFbnRpdHkgY2xhc3MgaXMgb25seSBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgaGVscGVyIGNsYXNzIGZvciBzZXJ2aWNlIGNhbGxzLlxyXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSB7XHJcbiAgICBhZ3NFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgZW50aXR5VHlwZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIG93bmVyOiBzdHJpbmc7XHJcbiAgICBzaWM6IHN0cmluZztcclxuICAgIGRvbWFpblR5cGU6IHN0cmluZztcclxuICAgIHBhcmVudElkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFbnRpdHkpIHtcclxuICAgICAgICB0aGlzLmFnc0VudGl0eUlkID0gZW50aXR5LmFnc0VudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuZW50aXR5VHlwZSA9IGVudGl0eS5lbnRpdHlUeXBlID8gZW50aXR5LmVudGl0eVR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLm5hbWUgPSBlbnRpdHkubmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZW50aXR5LmRlc2NyaXB0aW9uID8gZW50aXR5LmRlc2NyaXB0aW9uIDogJyc7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IGVudGl0eS5vd25lciA/IGVudGl0eS5vd25lciA6ICcnO1xyXG4gICAgICAgIHRoaXMuc2ljID0gZW50aXR5LnNpYyA/IGVudGl0eS5zaWMgOiAnJztcclxuICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSBlbnRpdHkuZG9tYWluLmRvbWFpblR5cGUgPyBlbnRpdHkuZG9tYWluLmRvbWFpblR5cGUgOiAnJztcclxuICAgIH1cclxufVxyXG4iXX0=