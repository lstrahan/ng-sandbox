/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { throwError as observableThrowError, of, forkJoin } from 'rxjs';
import { Util } from '../other/util';
import { LogService } from './log.service';
import { CacheService } from './cache.service';
import { Entity, PartialEntity, Group, Country } from '../models/entity';
import { CapabilityMap, Observability } from '../models/capability';
import { Vulnerability } from '../models/vulnerability';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./log.service";
import * as i3 from "./cache.service";
/** @type {?} */
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class EntityService {
    /**
     * @param {?} http
     * @param {?} logService
     * @param {?} cacheService
     */
    constructor(http, logService, cacheService) {
        this.http = http;
        this.logService = logService;
        this.cacheService = cacheService;
        this.serviceUrl = '';
        this.GET_ENTITY = '/entity/';
        this.GET_ENTITIES_BY_SUBSTRING = '/entity/getEntitiesBySubstring/';
        this.GET_ALL_CAPABILITY_TYPES = '/entity/getAllCapabilityTypes';
        this.GET_ALL_CAPABILITY_MAPS = '/entity/getAllCapabilityMaps';
        this.GET_ALL_VULNERABILITIES = '/entity/getAllVulnerabilities';
        this.GET_ALL_AFFILIATIONS = '/entity/getAllAffiliations';
        this.GET_ALL_COUNTRIES = '/entity/getAllCountries';
        this.CREATE_GROUP = '/entity/createGroupByGroupName';
        this.GET_ALL_ENTITY_GROUPS = '/entity/getAllEntityGroups';
        this.GET_ENTITIES_BY_GROUP = '/entity/getEntitiesByGroup/';
        this.GET_PARTIAL_ENTITIES_BY_GROUP = '/entity/getPartialEntitiesByGroup/';
        this.PARTIAL_ENTITIES_BY_SUBSTRINGS = '/entity/partial';
        this.UPDATE_ENTITY = '/entity/';
        this.ADD_OR_UPDATE_CAPABILITY_MAP = '/entity/addOrUpdateCapabilityMap';
        this.ADD_OR_UPDATE_OBSERVABILITY = '/entity/addOrUpdateObservability';
        this.DELETE_ENTITIES = '/entity/deleteEntitiesByIds';
        this.DELETE_CAPABILITY_MAPS = '/entity/deleteCapabilityMapsByIds';
        this.DELETE_OBSERVABILITY = '/entity/deleteObservability/';
        this.DELETE_GROUPS = '/entity/deleteGroupsByIds';
        this.DEFAULT_SEARCH_TYPES = ['name', 'group'];
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**************************************************************************
       *
       *
       **************************************************************************/
    // getPartialEntitiesBySubstring(substring: ByteString): Observable<PartialEntity[]> {
    //   this.logService.debug('EntityService.getPartialEntitiesBySubstring()');
    //   const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITIES_BY_SUBSTRING, substring);
    //   return this.cacheService.get(url, this.http.get<PartialEntity[]>(url, httpOptions)).pipe(
    //     tap(res => this.logService.debug(`    retreived entity list by substring`, res)),
    //     map(res => res.map(item => new PartialEntity(item)))
    //   );
    // }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllCapabilityTypes(useCache = true) {
        this.logService.debug('EntityService.getAllCapabilityTypes()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_CAPABILITY_TYPES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived capability type list`, res)), map((res) => {
            return ((/** @type {?} */ (res['strings']))).sort((n1, n2) => {
                return n1.toLowerCase().localeCompare(n2.toLowerCase());
            });
        }));
    }
    /**
     * ***********************************************************************
     * GET /entity/getAllCapabilityMaps
     * get a list of CapabilityMap
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllCapabilityMaps(useCache = true) {
        this.logService.debug('EntityService.getAllCapabilityMaps()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getAllCapabilityMaps');
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareCapabilityMap = (n1, n2) => {
            return n1.capabilityType.toLowerCase().localeCompare(n2.capabilityType.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived capability map list`, res)), map(res => res.map(item => new CapabilityMap(item)).sort(compareCapabilityMap)));
    }
    /**
     * ***********************************************************************
     * GET /entity/getObservabilitiesByUsedCapabilityMapId
     * get a list of Observability
     * ************************************************************************
     * @param {?} capabilityMapId
     * @return {?}
     */
    getObservabilitiesByUsedCapabilityMapId(capabilityMapId) {
        this.logService.debug('EntityService.getObservabilitiesByUsedCapabilityMapId()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getObservabilitiesByUsedCapabilityMapId/', capabilityMapId);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived capability map list`, res)), map(res => res.map(item => new Observability(item))));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllVulnerabilities(useCache = true) {
        this.logService.debug('EntityService.getAllVulnerabilities()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_VULNERABILITIES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareVulnerability = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived all vulnerabilities`, res)), map(res => res.map(item => new Vulnerability(item)).sort(compareVulnerability)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observableType
     * @param {?=} useCache
     * @return {?}
     */
    getCapabilitiesByObservableType(observableType, useCache = true) {
        this.logService.debug('EntityService.getCapabilitiesByObservableType()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getCapabilitiesByObserverType/', observableType);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived capabilities list`, res)), map(res => res.map(item => new CapabilityMap(item))));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllAffiliations(useCache = true) {
        this.logService.debug('EntityService.getAllAffiliations()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_AFFILIATIONS);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived affiliation list`, res)), map(res => {
            return res.map(item => {
                return item.affiliation;
            });
        }));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllCountries(useCache = true) {
        this.logService.debug('EntityService.getAllCountries()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_COUNTRIES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareCountry = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived country list`, res)), map(res => res.keyValuePairs.map(item => new Country(item)).sort(compareCountry)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @param {?} entityIds
     * @return {?}
     */
    createGroup(group, entityIds) {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.CREATE_GROUP, encodeURIComponent(group.groupName));
        /** @type {?} */
        let component = this;
        /** @type {?} */
        let data = {
            strings: entityIds,
        };
        return this.http.post(url, data, httpOptions).pipe(tap(res => this.logService.debug(`    created group`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllEntityGroups(useCache = true) {
        this.logService.debug('EntityService.getAllEntityGroups()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_ENTITY_GROUPS);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareGroup = (n1, n2) => {
            return n1.groupName.toLowerCase().localeCompare(n2.groupName.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(res => this.logService.debug(`    retreived all groups`, res)), map(res => res.keyValuePairs.map(item => new Group(item)).sort(compareGroup)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    getEntity(id) {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITY, id);
        this.logService.debug(url);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived entity`, res)), map(x => new Entity(x)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    getEntityById(id) {
        this.logService.debug('EntityService.getEntityById()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getEntityById', id);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived entity`, res)), map(x => new Entity(x)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    addEntity(entity) {
        this.logService.debug('EntityService.addEntity()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY);
        /** @type {?} */
        let component = this;
        return this.http.post(url, entity, httpOptions).pipe(tap(res => this.logService.debug(`    updated entity ${entity.name}`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    updateEntity(entity) {
        this.logService.debug('EntityService.updateEntity()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY, entity.agsEntityId);
        /** @type {?} */
        let component = this;
        return this.http.put(url, entity, httpOptions).pipe(tap(res => this.logService.debug(`    updated entity ${entity.name}`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    addCapabilityMap(capabilityMap) {
        this.logService.debug('EntityService.addCapabilityMap');
        return this.updateCapabilityMap(capabilityMap);
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    updateCapabilityMap(capabilityMap) {
        this.logService.debug('EntityService.updateCapabilityMap()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_CAPABILITY_MAP);
        /** @type {?} */
        let component = this;
        return this.http.post(url, capabilityMap, httpOptions).pipe(tap(res => this.logService.debug(`    updated capability map ${capabilityMap.capabilityType}`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @return {?}
     */
    getPartialEntitiesByGroup(group) {
        this.logService.debug('EntityService.getPartialEntitiesByGroup()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_PARTIAL_ENTITIES_BY_GROUP, encodeURIComponent(group));
        // compare function
        /** @type {?} */
        let comparePartialEntity = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived partial entity list by group`, res)), map(res => res.map(item => new PartialEntity(item)).sort(comparePartialEntity)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} strings
     * @param {?=} searchTypes
     * @return {?}
     */
    partialEntitiesBySubstrings(strings, searchTypes = this.DEFAULT_SEARCH_TYPES) {
        this.logService.debug('EntityService.partialEntitiesBySubstrings()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.PARTIAL_ENTITIES_BY_SUBSTRINGS);
        /** @type {?} */
        let searchParms = {
            searchTypes: searchTypes,
            strings: strings,
        };
        // compare function
        /** @type {?} */
        let comparePartialEntity = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.http.post(url, searchParms, httpOptions).pipe(tap(res => this.logService.debug(`    retreived partial entity list by substrings`, res)), map(res => res.map(item => new PartialEntity(item)).sort(comparePartialEntity)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entityIds
     * @return {?}
     */
    deleteEntities(entityIds) {
        this.logService.debug('EntityService.deleteEntities');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_ENTITIES);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: entityIds
            },
        };
        /** @type {?} */
        let component = this;
        // return this.http.delete<any>(url, deleteOptions).pipe(
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted entities successfully`)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityIds
     * @return {?}
     */
    deleteCapabilities(capabilityIds) {
        this.logService.debug('EntityService.deleteCapabilities');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_CAPABILITY_MAPS);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: capabilityIds
            },
        };
        /** @type {?} */
        let component = this;
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted capabilities successfully`)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    addObservabilities(observabilities) {
        if (!observabilities || observabilities.length === 0) {
            return of('addObservabilities received empty list.  Consider successful.');
        }
        /** @type {?} */
        let addRequests = [];
        observabilities.forEach(o => {
            addRequests.push(this.addObservability(o));
        });
        return forkJoin(...addRequests);
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    addObservability(observability) {
        this.logService.debug('EntityService.addObservability');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_OBSERVABILITY);
        /** @type {?} */
        let component = this;
        return this.http.post(url, observability, httpOptions).pipe(tap(res => this.logService.debug(`    added observability successfully`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    deleteObservabilities(observabilities) {
        if (!observabilities || observabilities.length === 0) {
            return of('deleteObservabilities received empty list.  Consider successful.');
        }
        /** @type {?} */
        let deleteRequests = [];
        observabilities.forEach(o => {
            deleteRequests.push(this.deleteObservability(o));
        });
        return forkJoin(...deleteRequests);
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    deleteObservability(observability) {
        this.logService.debug('EntityService.deleteObservability');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_OBSERVABILITY, observability.observingCapabilityMapId, observability.usedCapabilityMapId);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
        };
        /** @type {?} */
        let component = this;
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted observability successfully`)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} groupIds
     * @return {?}
     */
    deleteGroups(groupIds) {
        this.logService.debug('EntityService.deleteGroups');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_GROUPS);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: groupIds
            },
        };
        /** @type {?} */
        let component = this;
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted groups successfully`)));
    }
    // Rethrow error so client can react.
    /**
     * @private
     * @param {?} err
     * @return {?}
     */
    rethrowError(err) {
        // NOTE:  Not an error.
        if (err.status === 200 || err.status === 204) {
            return of(err);
        }
        if (err instanceof Response) {
            return observableThrowError(err);
        }
        return observableThrowError(err);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    loadEntities(group) {
        this.logService.debug('EntityService.loadEntities');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getPartialEntitiesByGroup/' + encodeURIComponent(group));
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res));
    }
}
EntityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService },
    { type: CacheService }
];
/** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i1.HttpClient), i0.inject(i2.LogService), i0.inject(i3.CacheService)); }, token: EntityService, providedIn: "root" });
if (false) {
    /** @type {?} */
    EntityService.prototype.serviceUrl;
    /** @type {?} */
    EntityService.prototype.GET_ENTITY;
    /** @type {?} */
    EntityService.prototype.GET_ENTITIES_BY_SUBSTRING;
    /** @type {?} */
    EntityService.prototype.GET_ALL_CAPABILITY_TYPES;
    /** @type {?} */
    EntityService.prototype.GET_ALL_CAPABILITY_MAPS;
    /** @type {?} */
    EntityService.prototype.GET_ALL_VULNERABILITIES;
    /** @type {?} */
    EntityService.prototype.GET_ALL_AFFILIATIONS;
    /** @type {?} */
    EntityService.prototype.GET_ALL_COUNTRIES;
    /** @type {?} */
    EntityService.prototype.CREATE_GROUP;
    /** @type {?} */
    EntityService.prototype.GET_ALL_ENTITY_GROUPS;
    /** @type {?} */
    EntityService.prototype.GET_ENTITIES_BY_GROUP;
    /** @type {?} */
    EntityService.prototype.GET_PARTIAL_ENTITIES_BY_GROUP;
    /** @type {?} */
    EntityService.prototype.PARTIAL_ENTITIES_BY_SUBSTRINGS;
    /** @type {?} */
    EntityService.prototype.UPDATE_ENTITY;
    /** @type {?} */
    EntityService.prototype.ADD_OR_UPDATE_CAPABILITY_MAP;
    /** @type {?} */
    EntityService.prototype.ADD_OR_UPDATE_OBSERVABILITY;
    /** @type {?} */
    EntityService.prototype.DELETE_ENTITIES;
    /** @type {?} */
    EntityService.prototype.DELETE_CAPABILITY_MAPS;
    /** @type {?} */
    EntityService.prototype.DELETE_OBSERVABILITY;
    /** @type {?} */
    EntityService.prototype.DELETE_GROUPS;
    /** @type {?} */
    EntityService.prototype.DEFAULT_SEARCH_TYPES;
    /**
     * @type {?}
     * @private
     */
    EntityService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    EntityService.prototype.logService;
    /**
     * @type {?}
     * @private
     */
    EntityService.prototype.cacheService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLElBQUksb0JBQW9CLEVBQWMsRUFBRSxFQUFFLFFBQVEsRUFBUyxNQUFNLE1BQU0sQ0FBQztBQUUzRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFjLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O01BRWxELFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUtELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUE2QnhCLFlBQW9CLElBQWdCLEVBQVUsVUFBc0IsRUFDMUQsWUFBMEI7UUFEaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDMUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUE1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QTZEOztJQUM3RCw2Q0FBc0Q7O0lBQ3RELHNDQUE0Qzs7SUFFNUMsNkNBQXlDOzs7OztJQUU3Qiw2QkFBd0I7Ozs7O0lBQUUsbUNBQThCOzs7OztJQUNsRSxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUsIG9mLCBmb3JrSm9pbiwgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbnRpdHksIFBhcnRpYWxFbnRpdHksIEJhc2VFbnRpdHksIEdyb3VwLCBDb3VudHJ5IH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eSc7XHJcbmltcG9ydCB7IENhcGFiaWxpdHlNYXAsIE9ic2VydmFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvY2FwYWJpbGl0eSc7XHJcbmltcG9ydCB7IFZ1bG5lcmFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvdnVsbmVyYWJpbGl0eSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIHtcclxuXHJcbiAgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIEdFVF9FTlRJVFkgPSAnL2VudGl0eS8nO1xyXG4gIEdFVF9FTlRJVElFU19CWV9TVUJTVFJJTkcgPSAnL2VudGl0eS9nZXRFbnRpdGllc0J5U3Vic3RyaW5nLyc7XHJcbiAgR0VUX0FMTF9DQVBBQklMSVRZX1RZUEVTID0gJy9lbnRpdHkvZ2V0QWxsQ2FwYWJpbGl0eVR5cGVzJztcclxuICBHRVRfQUxMX0NBUEFCSUxJVFlfTUFQUyA9ICcvZW50aXR5L2dldEFsbENhcGFiaWxpdHlNYXBzJztcclxuICBHRVRfQUxMX1ZVTE5FUkFCSUxJVElFUyA9ICcvZW50aXR5L2dldEFsbFZ1bG5lcmFiaWxpdGllcyc7XHJcbiAgR0VUX0FMTF9BRkZJTElBVElPTlMgPSAnL2VudGl0eS9nZXRBbGxBZmZpbGlhdGlvbnMnO1xyXG4gIEdFVF9BTExfQ09VTlRSSUVTID0gJy9lbnRpdHkvZ2V0QWxsQ291bnRyaWVzJztcclxuICBDUkVBVEVfR1JPVVAgPSAnL2VudGl0eS9jcmVhdGVHcm91cEJ5R3JvdXBOYW1lJztcclxuICBHRVRfQUxMX0VOVElUWV9HUk9VUFMgPSAnL2VudGl0eS9nZXRBbGxFbnRpdHlHcm91cHMnO1xyXG4gIEdFVF9FTlRJVElFU19CWV9HUk9VUCA9ICcvZW50aXR5L2dldEVudGl0aWVzQnlHcm91cC8nO1xyXG5cclxuICBHRVRfUEFSVElBTF9FTlRJVElFU19CWV9HUk9VUCA9ICcvZW50aXR5L2dldFBhcnRpYWxFbnRpdGllc0J5R3JvdXAvJztcclxuICBQQVJUSUFMX0VOVElUSUVTX0JZX1NVQlNUUklOR1MgPSAnL2VudGl0eS9wYXJ0aWFsJztcclxuXHJcbiAgVVBEQVRFX0VOVElUWSA9ICcvZW50aXR5Lyc7XHJcbiAgQUREX09SX1VQREFURV9DQVBBQklMSVRZX01BUCA9ICcvZW50aXR5L2FkZE9yVXBkYXRlQ2FwYWJpbGl0eU1hcCc7XHJcbiAgQUREX09SX1VQREFURV9PQlNFUlZBQklMSVRZID0gJy9lbnRpdHkvYWRkT3JVcGRhdGVPYnNlcnZhYmlsaXR5JztcclxuXHJcbiAgREVMRVRFX0VOVElUSUVTID0gJy9lbnRpdHkvZGVsZXRlRW50aXRpZXNCeUlkcyc7XHJcbiAgREVMRVRFX0NBUEFCSUxJVFlfTUFQUyA9ICcvZW50aXR5L2RlbGV0ZUNhcGFiaWxpdHlNYXBzQnlJZHMnO1xyXG4gIERFTEVURV9PQlNFUlZBQklMSVRZID0gJy9lbnRpdHkvZGVsZXRlT2JzZXJ2YWJpbGl0eS8nO1xyXG4gIERFTEVURV9HUk9VUFMgPSAnL2VudGl0eS9kZWxldGVHcm91cHNCeUlkcyc7XHJcblxyXG4gIERFRkFVTFRfU0VBUkNIX1RZUEVTID0gWyduYW1lJywgJ2dyb3VwJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSkgeyB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvLyBnZXRQYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZyhzdWJzdHJpbmc6IEJ5dGVTdHJpbmcpOiBPYnNlcnZhYmxlPFBhcnRpYWxFbnRpdHlbXT4ge1xyXG4gIC8vICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldFBhcnRpYWxFbnRpdGllc0J5U3Vic3RyaW5nKCknKTtcclxuICAvLyAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0VOVElUSUVTX0JZX1NVQlNUUklORywgc3Vic3RyaW5nKTtcclxuXHJcbiAgLy8gICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxQYXJ0aWFsRW50aXR5W10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gIC8vICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBlbnRpdHkgbGlzdCBieSBzdWJzdHJpbmdgLCByZXMpKSxcclxuICAvLyAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IFBhcnRpYWxFbnRpdHkoaXRlbSkpKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsQ2FwYWJpbGl0eVR5cGVzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxDYXBhYmlsaXR5VHlwZXMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfQUxMX0NBUEFCSUxJVFlfVFlQRVMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgY2FwYWJpbGl0eSB0eXBlIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKChyZXMpID0+IHsgLy8gc29ydCB0aGUgbGlzdFxyXG4gICAgICAgIHJldHVybiAocmVzWydzdHJpbmdzJ10gYXMgc3RyaW5nW10pLnNvcnQoKG4xLCBuMikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG4xLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL2VudGl0eS9nZXRBbGxDYXBhYmlsaXR5TWFwc1xyXG4gICAqIGdldCBhIGxpc3Qgb2YgQ2FwYWJpbGl0eU1hcFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxDYXBhYmlsaXR5TWFwcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPENhcGFiaWxpdHlNYXBbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbENhcGFiaWxpdHlNYXBzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldEFsbENhcGFiaWxpdHlNYXBzJyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZUNhcGFiaWxpdHlNYXAgPSAobjE6IENhcGFiaWxpdHlNYXAsIG4yOiBDYXBhYmlsaXR5TWFwKSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5jYXBhYmlsaXR5VHlwZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIuY2FwYWJpbGl0eVR5cGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PENhcGFiaWxpdHlNYXBbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNhcGFiaWxpdHkgbWFwIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IENhcGFiaWxpdHlNYXAoaXRlbSkpLnNvcnQoY29tcGFyZUNhcGFiaWxpdHlNYXApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvZW50aXR5L2dldE9ic2VydmFiaWxpdGllc0J5VXNlZENhcGFiaWxpdHlNYXBJZFxyXG4gICAqIGdldCBhIGxpc3Qgb2YgT2JzZXJ2YWJpbGl0eVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRPYnNlcnZhYmlsaXRpZXNCeVVzZWRDYXBhYmlsaXR5TWFwSWQoY2FwYWJpbGl0eU1hcElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9ic2VydmFiaWxpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldE9ic2VydmFiaWxpdGllc0J5VXNlZENhcGFiaWxpdHlNYXBJZCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRPYnNlcnZhYmlsaXRpZXNCeVVzZWRDYXBhYmlsaXR5TWFwSWQvJywgY2FwYWJpbGl0eU1hcElkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNhcGFiaWxpdHkgbWFwIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IE9ic2VydmFiaWxpdHkoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsVnVsbmVyYWJpbGl0aWVzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8VnVsbmVyYWJpbGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsVnVsbmVyYWJpbGl0aWVzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9WVUxORVJBQklMSVRJRVMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVWdWxuZXJhYmlsaXR5ID0gKG4xOiBWdWxuZXJhYmlsaXR5LCBuMjogVnVsbmVyYWJpbGl0eSkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEubmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8VnVsbmVyYWJpbGl0eVtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgYWxsIHZ1bG5lcmFiaWxpdGllc2AsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgVnVsbmVyYWJpbGl0eShpdGVtKSkuc29ydChjb21wYXJlVnVsbmVyYWJpbGl0eSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRDYXBhYmlsaXRpZXNCeU9ic2VydmFibGVUeXBlKG9ic2VydmFibGVUeXBlOiBzdHJpbmcsIHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8Q2FwYWJpbGl0eU1hcFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0Q2FwYWJpbGl0aWVzQnlPYnNlcnZhYmxlVHlwZSgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRDYXBhYmlsaXRpZXNCeU9ic2VydmVyVHlwZS8nLCBvYnNlcnZhYmxlVHlwZSk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxDYXBhYmlsaXR5TWFwW10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBjYXBhYmlsaXRpZXMgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgQ2FwYWJpbGl0eU1hcChpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxBZmZpbGlhdGlvbnModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbEFmZmlsaWF0aW9ucygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfQUZGSUxJQVRJT05TKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGFmZmlsaWF0aW9uIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5hZmZpbGlhdGlvbjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbENvdW50cmllcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbENvdW50cmllcygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfQ09VTlRSSUVTKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlQ291bnRyeSA9IChuMTogQ291bnRyeSwgbjI6IENvdW50cnkpID0+IHtcclxuICAgICAgcmV0dXJuIG4xLm5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PENvdW50cnlbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNvdW50cnkgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5rZXlWYWx1ZVBhaXJzLm1hcChpdGVtID0+IG5ldyBDb3VudHJ5KGl0ZW0pKS5zb3J0KGNvbXBhcmVDb3VudHJ5KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNyZWF0ZUdyb3VwKGdyb3VwOiBHcm91cCwgZW50aXR5SWRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkNSRUFURV9HUk9VUCwgZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwLmdyb3VwTmFtZSkpO1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHN0cmluZ3M6IGVudGl0eUlkcyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY3JlYXRlZCBncm91cGAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxFbnRpdHlHcm91cHModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxHcm91cFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsRW50aXR5R3JvdXBzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9FTlRJVFlfR1JPVVBTKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlR3JvdXAgPSAobjE6IEdyb3VwLCBuMjogR3JvdXApID0+IHtcclxuICAgICAgcmV0dXJuIG4xLmdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIuZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxHcm91cFtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgYWxsIGdyb3Vwc2AsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5rZXlWYWx1ZVBhaXJzLm1hcChpdGVtID0+IG5ldyBHcm91cChpdGVtKSkuc29ydChjb21wYXJlR3JvdXApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0RW50aXR5KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eT4ge1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfRU5USVRZLCBpZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGVudGl0eWAsIHJlcykpLFxyXG4gICAgICBtYXAoeCA9PiBuZXcgRW50aXR5KHgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0RW50aXR5QnlJZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbnRpdHk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRFbnRpdHlCeUlkKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldEVudGl0eUJ5SWQnLCBpZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBlbnRpdHlgLCByZXMpKSxcclxuICAgICAgbWFwKHggPT4gbmV3IEVudGl0eSh4KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuYWRkRW50aXR5KCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuVVBEQVRFX0VOVElUWSk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBlbnRpdHksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgZW50aXR5ICR7ZW50aXR5Lm5hbWV9YCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHVwZGF0ZUVudGl0eShlbnRpdHk6IEVudGl0eSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UudXBkYXRlRW50aXR5KCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuVVBEQVRFX0VOVElUWSwgZW50aXR5LmFnc0VudGl0eUlkKTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgZW50aXR5LCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIGVudGl0eSAke2VudGl0eS5uYW1lfWAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBhZGRDYXBhYmlsaXR5TWFwKGNhcGFiaWxpdHlNYXA6IENhcGFiaWxpdHlNYXApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmFkZENhcGFiaWxpdHlNYXAnKTtcclxuICAgIHJldHVybiB0aGlzLnVwZGF0ZUNhcGFiaWxpdHlNYXAoY2FwYWJpbGl0eU1hcCk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHVwZGF0ZUNhcGFiaWxpdHlNYXAoY2FwYWJpbGl0eU1hcDogQ2FwYWJpbGl0eU1hcCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UudXBkYXRlQ2FwYWJpbGl0eU1hcCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkFERF9PUl9VUERBVEVfQ0FQQUJJTElUWV9NQVApO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgY2FwYWJpbGl0eU1hcCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBjYXBhYmlsaXR5IG1hcCAke2NhcGFiaWxpdHlNYXAuY2FwYWJpbGl0eVR5cGV9YCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldFBhcnRpYWxFbnRpdGllc0J5R3JvdXAoZ3JvdXA6IHN0cmluZyk6IE9ic2VydmFibGU8UGFydGlhbEVudGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0UGFydGlhbEVudGl0aWVzQnlHcm91cCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9QQVJUSUFMX0VOVElUSUVTX0JZX0dST1VQLCBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXApKTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZVBhcnRpYWxFbnRpdHkgPSAobjE6IFBhcnRpYWxFbnRpdHksIG4yOiBQYXJ0aWFsRW50aXR5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5uYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQYXJ0aWFsRW50aXR5W10+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIHBhcnRpYWwgZW50aXR5IGxpc3QgYnkgZ3JvdXBgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IFBhcnRpYWxFbnRpdHkoaXRlbSkpLnNvcnQoY29tcGFyZVBhcnRpYWxFbnRpdHkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmdzKHN0cmluZ3M6IHN0cmluZ1tdLCBzZWFyY2hUeXBlczogc3RyaW5nW10gPSB0aGlzLkRFRkFVTFRfU0VBUkNIX1RZUEVTKTogT2JzZXJ2YWJsZTxQYXJ0aWFsRW50aXR5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5wYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZ3MoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5QQVJUSUFMX0VOVElUSUVTX0JZX1NVQlNUUklOR1MpO1xyXG5cclxuICAgIGxldCBzZWFyY2hQYXJtcyA9IHtcclxuICAgICAgc2VhcmNoVHlwZXM6IHNlYXJjaFR5cGVzLFxyXG4gICAgICBzdHJpbmdzOiBzdHJpbmdzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZVBhcnRpYWxFbnRpdHkgPSAobjE6IFBhcnRpYWxFbnRpdHksIG4yOiBQYXJ0aWFsRW50aXR5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5uYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIHNlYXJjaFBhcm1zLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgcGFydGlhbCBlbnRpdHkgbGlzdCBieSBzdWJzdHJpbmdzYCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBQYXJ0aWFsRW50aXR5KGl0ZW0pKS5zb3J0KGNvbXBhcmVQYXJ0aWFsRW50aXR5KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZUVudGl0aWVzKGVudGl0eUlkczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5kZWxldGVFbnRpdGllcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5ERUxFVEVfRU5USVRJRVMpO1xyXG5cclxuICAgIC8vIE5PVEU6ICBJbiBvcmRlciB0byBzcGVjaWZ5IHRoZSByZXR1cm4gdHlwZSBvZiAndGV4dCcsIHRoZSBnZW5lcmljXHJcbiAgICAvLyAgICAgICAgc2lnbmF0dXJlIGhhZCB0byBiZSByZW1vdmVkLlxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcgYXMgJ3RleHQnLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogZW50aXR5SWRzXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55Pih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBlbnRpdGllcyBzdWNjZXNzZnVsbHlgKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZUNhcGFiaWxpdGllcyhjYXBhYmlsaXR5SWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmRlbGV0ZUNhcGFiaWxpdGllcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5ERUxFVEVfQ0FQQUJJTElUWV9NQVBTKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyBhcyAndGV4dCcsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBzdHJpbmdzOiBjYXBhYmlsaXR5SWRzXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgY2FwYWJpbGl0aWVzIHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgYWRkT2JzZXJ2YWJpbGl0aWVzKG9ic2VydmFiaWxpdGllczogT2JzZXJ2YWJpbGl0eVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmICghb2JzZXJ2YWJpbGl0aWVzIHx8IG9ic2VydmFiaWxpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG9mKCdhZGRPYnNlcnZhYmlsaXRpZXMgcmVjZWl2ZWQgZW1wdHkgbGlzdC4gIENvbnNpZGVyIHN1Y2Nlc3NmdWwuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFkZFJlcXVlc3RzOiBPYnNlcnZhYmxlPHN0cmluZz5bXSA9IFtdO1xyXG4gICAgb2JzZXJ2YWJpbGl0aWVzLmZvckVhY2gobyA9PiB7XHJcbiAgICAgIGFkZFJlcXVlc3RzLnB1c2godGhpcy5hZGRPYnNlcnZhYmlsaXR5KG8pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JrSm9pbiguLi5hZGRSZXF1ZXN0cyk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZE9ic2VydmFiaWxpdHkob2JzZXJ2YWJpbGl0eTogT2JzZXJ2YWJpbGl0eSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuYWRkT2JzZXJ2YWJpbGl0eScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5BRERfT1JfVVBEQVRFX09CU0VSVkFCSUxJVFkpO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHN0cmluZz4odXJsLCBvYnNlcnZhYmlsaXR5LCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBvYnNlcnZhYmlsaXR5IHN1Y2Nlc3NmdWxseWAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVPYnNlcnZhYmlsaXRpZXMob2JzZXJ2YWJpbGl0aWVzOiBPYnNlcnZhYmlsaXR5W10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKCFvYnNlcnZhYmlsaXRpZXMgfHwgb2JzZXJ2YWJpbGl0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gb2YoJ2RlbGV0ZU9ic2VydmFiaWxpdGllcyByZWNlaXZlZCBlbXB0eSBsaXN0LiAgQ29uc2lkZXIgc3VjY2Vzc2Z1bC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVsZXRlUmVxdWVzdHM6IE9ic2VydmFibGU8c3RyaW5nPltdID0gW107XHJcbiAgICBvYnNlcnZhYmlsaXRpZXMuZm9yRWFjaChvID0+IHtcclxuICAgICAgZGVsZXRlUmVxdWVzdHMucHVzaCh0aGlzLmRlbGV0ZU9ic2VydmFiaWxpdHkobykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcmtKb2luKC4uLmRlbGV0ZVJlcXVlc3RzKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlT2JzZXJ2YWJpbGl0eShvYnNlcnZhYmlsaXR5OiBPYnNlcnZhYmlsaXR5KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5kZWxldGVPYnNlcnZhYmlsaXR5Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkRFTEVURV9PQlNFUlZBQklMSVRZLCBvYnNlcnZhYmlsaXR5Lm9ic2VydmluZ0NhcGFiaWxpdHlNYXBJZCwgb2JzZXJ2YWJpbGl0eS51c2VkQ2FwYWJpbGl0eU1hcElkKTtcclxuXHJcbiAgICAvLyBOT1RFOiAgSW4gb3JkZXIgdG8gc3BlY2lmeSB0aGUgcmV0dXJuIHR5cGUgb2YgJ3RleHQnLCB0aGUgZ2VuZXJpY1xyXG4gICAgLy8gICAgICAgIHNpZ25hdHVyZSBoYWQgdG8gYmUgcmVtb3ZlZC5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnIGFzICd0ZXh0JyxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBvYnNlcnZhYmlsaXR5IHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlR3JvdXBzKGdyb3VwSWRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZGVsZXRlR3JvdXBzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkRFTEVURV9HUk9VUFMpO1xyXG5cclxuICAgIC8vIE5PVEU6ICBJbiBvcmRlciB0byBzcGVjaWZ5IHRoZSByZXR1cm4gdHlwZSBvZiAndGV4dCcsIHRoZSBnZW5lcmljXHJcbiAgICAvLyAgICAgICAgc2lnbmF0dXJlIGhhZCB0byBiZSByZW1vdmVkLlxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcgYXMgJ3RleHQnLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogZ3JvdXBJZHNcclxuICAgICAgfSxcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgZ3JvdXBzIHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFJldGhyb3cgZXJyb3Igc28gY2xpZW50IGNhbiByZWFjdC5cclxuICBwcml2YXRlIHJldGhyb3dFcnJvcihlcnI6IGFueSkge1xyXG4gICAgLy8gTk9URTogIE5vdCBhbiBlcnJvci5cclxuICAgIGlmIChlcnIuc3RhdHVzID09PSAyMDAgfHwgZXJyLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICAgIHJldHVybiBvZihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEVudGl0aWVzKGdyb3VwOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJhc2VFbnRpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmxvYWRFbnRpdGllcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9lbnRpdHkvZ2V0UGFydGlhbEVudGl0aWVzQnlHcm91cC8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QmFzZUVudGl0eVtdPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==