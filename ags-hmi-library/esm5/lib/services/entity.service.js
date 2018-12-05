/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var EntityService = /** @class */ (function () {
    function EntityService(http, logService, cacheService) {
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
    EntityService.prototype.init = /**
     * @param {?} serviceUrl
     * @return {?}
     */
    function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    };
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
    /**************************************************************************
     *
     *
     **************************************************************************/
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
    EntityService.prototype.getAllCapabilityTypes = /**************************************************************************
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
    function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getAllCapabilityTypes()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_CAPABILITY_TYPES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived capability type list", res); }), map(function (res) {
            return ((/** @type {?} */ (res['strings']))).sort(function (n1, n2) {
                return n1.toLowerCase().localeCompare(n2.toLowerCase());
            });
        }));
    };
    /**************************************************************************
     * GET /entity/getAllCapabilityMaps
     * get a list of CapabilityMap
     **************************************************************************/
    /**
     * ***********************************************************************
     * GET /entity/getAllCapabilityMaps
     * get a list of CapabilityMap
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    EntityService.prototype.getAllCapabilityMaps = /**
     * ***********************************************************************
     * GET /entity/getAllCapabilityMaps
     * get a list of CapabilityMap
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getAllCapabilityMaps()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/entity/getAllCapabilityMaps');
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        var compareCapabilityMap = function (n1, n2) {
            return n1.capabilityType.toLowerCase().localeCompare(n2.capabilityType.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived capability map list", res); }), map(function (res) { return res.map(function (item) { return new CapabilityMap(item); }).sort(compareCapabilityMap); }));
    };
    /**************************************************************************
     * GET /entity/getObservabilitiesByUsedCapabilityMapId
     * get a list of Observability
     **************************************************************************/
    /**
     * ***********************************************************************
     * GET /entity/getObservabilitiesByUsedCapabilityMapId
     * get a list of Observability
     * ************************************************************************
     * @param {?} capabilityMapId
     * @return {?}
     */
    EntityService.prototype.getObservabilitiesByUsedCapabilityMapId = /**
     * ***********************************************************************
     * GET /entity/getObservabilitiesByUsedCapabilityMapId
     * get a list of Observability
     * ************************************************************************
     * @param {?} capabilityMapId
     * @return {?}
     */
    function (capabilityMapId) {
        var _this = this;
        this.logService.debug('EntityService.getObservabilitiesByUsedCapabilityMapId()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/entity/getObservabilitiesByUsedCapabilityMapId/', capabilityMapId);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived capability map list", res); }), map(function (res) { return res.map(function (item) { return new Observability(item); }); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    EntityService.prototype.getAllVulnerabilities = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getAllVulnerabilities()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_VULNERABILITIES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        var compareVulnerability = function (n1, n2) {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived all vulnerabilities", res); }), map(function (res) { return res.map(function (item) { return new Vulnerability(item); }).sort(compareVulnerability); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observableType
     * @param {?=} useCache
     * @return {?}
     */
    EntityService.prototype.getCapabilitiesByObservableType = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observableType
     * @param {?=} useCache
     * @return {?}
     */
    function (observableType, useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getCapabilitiesByObservableType()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/entity/getCapabilitiesByObserverType/', observableType);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived capabilities list", res); }), map(function (res) { return res.map(function (item) { return new CapabilityMap(item); }); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    EntityService.prototype.getAllAffiliations = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getAllAffiliations()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_AFFILIATIONS);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived affiliation list", res); }), map(function (res) {
            return res.map(function (item) {
                return item.affiliation;
            });
        }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    EntityService.prototype.getAllCountries = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getAllCountries()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_COUNTRIES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        var compareCountry = function (n1, n2) {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived country list", res); }), map(function (res) { return res.keyValuePairs.map(function (item) { return new Country(item); }).sort(compareCountry); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @param {?} entityIds
     * @return {?}
     */
    EntityService.prototype.createGroup = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @param {?} entityIds
     * @return {?}
     */
    function (group, entityIds) {
        var _this = this;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.CREATE_GROUP, encodeURIComponent(group.groupName));
        /** @type {?} */
        var component = this;
        /** @type {?} */
        var data = {
            strings: entityIds,
        };
        return this.http.post(url, data, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    created group", res); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    EntityService.prototype.getAllEntityGroups = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        this.logService.debug('EntityService.getAllEntityGroups()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_ENTITY_GROUPS);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        var compareGroup = function (n1, n2) {
            return n1.groupName.toLowerCase().localeCompare(n2.groupName.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions)).pipe(tap(function (res) { return _this.logService.debug("    retreived all groups", res); }), map(function (res) { return res.keyValuePairs.map(function (item) { return new Group(item); }).sort(compareGroup); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    EntityService.prototype.getEntity = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_ENTITY, id);
        this.logService.debug(url);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived entity", res); }), map(function (x) { return new Entity(x); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    EntityService.prototype.getEntityById = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.logService.debug('EntityService.getEntityById()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/entity/getEntityById', id);
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived entity", res); }), map(function (x) { return new Entity(x); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    EntityService.prototype.addEntity = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        var _this = this;
        this.logService.debug('EntityService.addEntity()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY);
        /** @type {?} */
        var component = this;
        return this.http.post(url, entity, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated entity " + entity.name, res); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    EntityService.prototype.updateEntity = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        var _this = this;
        this.logService.debug('EntityService.updateEntity()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY, entity.agsEntityId);
        /** @type {?} */
        var component = this;
        return this.http.put(url, entity, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated entity " + entity.name, res); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    EntityService.prototype.addCapabilityMap = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    function (capabilityMap) {
        this.logService.debug('EntityService.addCapabilityMap');
        return this.updateCapabilityMap(capabilityMap);
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    EntityService.prototype.updateCapabilityMap = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    function (capabilityMap) {
        var _this = this;
        this.logService.debug('EntityService.updateCapabilityMap()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_CAPABILITY_MAP);
        /** @type {?} */
        var component = this;
        return this.http.post(url, capabilityMap, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    updated capability map " + capabilityMap.capabilityType, res); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @return {?}
     */
    EntityService.prototype.getPartialEntitiesByGroup = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        this.logService.debug('EntityService.getPartialEntitiesByGroup()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.GET_PARTIAL_ENTITIES_BY_GROUP, encodeURIComponent(group));
        // compare function
        /** @type {?} */
        var comparePartialEntity = function (n1, n2) {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived partial entity list by group", res); }), map(function (res) { return res.map(function (item) { return new PartialEntity(item); }).sort(comparePartialEntity); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} strings
     * @param {?=} searchTypes
     * @return {?}
     */
    EntityService.prototype.partialEntitiesBySubstrings = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} strings
     * @param {?=} searchTypes
     * @return {?}
     */
    function (strings, searchTypes) {
        var _this = this;
        if (searchTypes === void 0) { searchTypes = this.DEFAULT_SEARCH_TYPES; }
        this.logService.debug('EntityService.partialEntitiesBySubstrings()');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.PARTIAL_ENTITIES_BY_SUBSTRINGS);
        /** @type {?} */
        var searchParms = {
            searchTypes: searchTypes,
            strings: strings,
        };
        // compare function
        /** @type {?} */
        var comparePartialEntity = function (n1, n2) {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.http.post(url, searchParms, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived partial entity list by substrings", res); }), map(function (res) { return res.map(function (item) { return new PartialEntity(item); }).sort(comparePartialEntity); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entityIds
     * @return {?}
     */
    EntityService.prototype.deleteEntities = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entityIds
     * @return {?}
     */
    function (entityIds) {
        var _this = this;
        this.logService.debug('EntityService.deleteEntities');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.DELETE_ENTITIES);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: entityIds
            },
        };
        /** @type {?} */
        var component = this;
        // return this.http.delete<any>(url, deleteOptions).pipe(
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted entities successfully"); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityIds
     * @return {?}
     */
    EntityService.prototype.deleteCapabilities = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityIds
     * @return {?}
     */
    function (capabilityIds) {
        var _this = this;
        this.logService.debug('EntityService.deleteCapabilities');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.DELETE_CAPABILITY_MAPS);
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: capabilityIds
            },
        };
        /** @type {?} */
        var component = this;
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted capabilities successfully"); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    EntityService.prototype.addObservabilities = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    function (observabilities) {
        var _this = this;
        if (!observabilities || observabilities.length === 0) {
            return of('addObservabilities received empty list.  Consider successful.');
        }
        /** @type {?} */
        var addRequests = [];
        observabilities.forEach(function (o) {
            addRequests.push(_this.addObservability(o));
        });
        return forkJoin.apply(void 0, tslib_1.__spread(addRequests));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    EntityService.prototype.addObservability = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    function (observability) {
        var _this = this;
        this.logService.debug('EntityService.addObservability');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_OBSERVABILITY);
        /** @type {?} */
        var component = this;
        return this.http.post(url, observability, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    added observability successfully", res); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    EntityService.prototype.deleteObservabilities = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    function (observabilities) {
        var _this = this;
        if (!observabilities || observabilities.length === 0) {
            return of('deleteObservabilities received empty list.  Consider successful.');
        }
        /** @type {?} */
        var deleteRequests = [];
        observabilities.forEach(function (o) {
            deleteRequests.push(_this.deleteObservability(o));
        });
        return forkJoin.apply(void 0, tslib_1.__spread(deleteRequests));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    EntityService.prototype.deleteObservability = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    function (observability) {
        var _this = this;
        this.logService.debug('EntityService.deleteObservability');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.DELETE_OBSERVABILITY, observability.observingCapabilityMapId, observability.usedCapabilityMapId);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
        };
        /** @type {?} */
        var component = this;
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted observability successfully"); }));
    };
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} groupIds
     * @return {?}
     */
    EntityService.prototype.deleteGroups = /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} groupIds
     * @return {?}
     */
    function (groupIds) {
        var _this = this;
        this.logService.debug('EntityService.deleteGroups');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, this.DELETE_GROUPS);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        var deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: groupIds
            },
        };
        /** @type {?} */
        var component = this;
        return this.http.delete(url, deleteOptions).pipe(tap(function (res) { return _this.logService.debug("    deleted groups successfully"); }));
    };
    // Rethrow error so client can react.
    // Rethrow error so client can react.
    /**
     * @private
     * @param {?} err
     * @return {?}
     */
    EntityService.prototype.rethrowError = 
    // Rethrow error so client can react.
    /**
     * @private
     * @param {?} err
     * @return {?}
     */
    function (err) {
        // NOTE:  Not an error.
        if (err.status === 200 || err.status === 204) {
            return of(err);
        }
        if (err instanceof Response) {
            return observableThrowError(err);
        }
        return observableThrowError(err);
    };
    /**
     * @param {?} group
     * @return {?}
     */
    EntityService.prototype.loadEntities = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        this.logService.debug('EntityService.loadEntities');
        /** @type {?} */
        var url = Util.urlJoin(this.serviceUrl, '/entity/getPartialEntitiesByGroup/' + encodeURIComponent(group));
        return this.http.get(url, httpOptions).pipe(tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), map(function (res) { return res; }));
    };
    EntityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EntityService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LogService },
        { type: CacheService }
    ]; };
    /** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i1.HttpClient), i0.inject(i2.LogService), i0.inject(i3.CacheService)); }, token: EntityService, providedIn: "root" });
    return EntityService;
}());
export { EntityService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxJQUFJLG9CQUFvQixFQUFjLEVBQUUsRUFBRSxRQUFRLEVBQVMsTUFBTSxNQUFNLENBQUM7QUFFM0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBYyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQUVsRCxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakU7QUFFRDtJQWdDRSx1QkFBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxZQUEwQjtRQURoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMxRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTVCcEMsZUFBVSxHQUFXLEVBQUUs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eyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgT2JzZXJ2YWJsZSwgb2YsIGZvcmtKb2luLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVudGl0eSwgUGFydGlhbEVudGl0eSwgQmFzZUVudGl0eSwgR3JvdXAsIENvdW50cnkgfSBmcm9tICcuLi9tb2RlbHMvZW50aXR5JztcclxuaW1wb3J0IHsgQ2FwYWJpbGl0eU1hcCwgT2JzZXJ2YWJpbGl0eSB9IGZyb20gJy4uL21vZGVscy9jYXBhYmlsaXR5JztcclxuaW1wb3J0IHsgVnVsbmVyYWJpbGl0eSB9IGZyb20gJy4uL21vZGVscy92dWxuZXJhYmlsaXR5JztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlcnZpY2Uge1xyXG5cclxuICBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgR0VUX0VOVElUWSA9ICcvZW50aXR5Lyc7XHJcbiAgR0VUX0VOVElUSUVTX0JZX1NVQlNUUklORyA9ICcvZW50aXR5L2dldEVudGl0aWVzQnlTdWJzdHJpbmcvJztcclxuICBHRVRfQUxMX0NBUEFCSUxJVFlfVFlQRVMgPSAnL2VudGl0eS9nZXRBbGxDYXBhYmlsaXR5VHlwZXMnO1xyXG4gIEdFVF9BTExfQ0FQQUJJTElUWV9NQVBTID0gJy9lbnRpdHkvZ2V0QWxsQ2FwYWJpbGl0eU1hcHMnO1xyXG4gIEdFVF9BTExfVlVMTkVSQUJJTElUSUVTID0gJy9lbnRpdHkvZ2V0QWxsVnVsbmVyYWJpbGl0aWVzJztcclxuICBHRVRfQUxMX0FGRklMSUFUSU9OUyA9ICcvZW50aXR5L2dldEFsbEFmZmlsaWF0aW9ucyc7XHJcbiAgR0VUX0FMTF9DT1VOVFJJRVMgPSAnL2VudGl0eS9nZXRBbGxDb3VudHJpZXMnO1xyXG4gIENSRUFURV9HUk9VUCA9ICcvZW50aXR5L2NyZWF0ZUdyb3VwQnlHcm91cE5hbWUnO1xyXG4gIEdFVF9BTExfRU5USVRZX0dST1VQUyA9ICcvZW50aXR5L2dldEFsbEVudGl0eUdyb3Vwcyc7XHJcbiAgR0VUX0VOVElUSUVTX0JZX0dST1VQID0gJy9lbnRpdHkvZ2V0RW50aXRpZXNCeUdyb3VwLyc7XHJcblxyXG4gIEdFVF9QQVJUSUFMX0VOVElUSUVTX0JZX0dST1VQID0gJy9lbnRpdHkvZ2V0UGFydGlhbEVudGl0aWVzQnlHcm91cC8nO1xyXG4gIFBBUlRJQUxfRU5USVRJRVNfQllfU1VCU1RSSU5HUyA9ICcvZW50aXR5L3BhcnRpYWwnO1xyXG5cclxuICBVUERBVEVfRU5USVRZID0gJy9lbnRpdHkvJztcclxuICBBRERfT1JfVVBEQVRFX0NBUEFCSUxJVFlfTUFQID0gJy9lbnRpdHkvYWRkT3JVcGRhdGVDYXBhYmlsaXR5TWFwJztcclxuICBBRERfT1JfVVBEQVRFX09CU0VSVkFCSUxJVFkgPSAnL2VudGl0eS9hZGRPclVwZGF0ZU9ic2VydmFiaWxpdHknO1xyXG5cclxuICBERUxFVEVfRU5USVRJRVMgPSAnL2VudGl0eS9kZWxldGVFbnRpdGllc0J5SWRzJztcclxuICBERUxFVEVfQ0FQQUJJTElUWV9NQVBTID0gJy9lbnRpdHkvZGVsZXRlQ2FwYWJpbGl0eU1hcHNCeUlkcyc7XHJcbiAgREVMRVRFX09CU0VSVkFCSUxJVFkgPSAnL2VudGl0eS9kZWxldGVPYnNlcnZhYmlsaXR5Lyc7XHJcbiAgREVMRVRFX0dST1VQUyA9ICcvZW50aXR5L2RlbGV0ZUdyb3Vwc0J5SWRzJztcclxuXHJcbiAgREVGQVVMVF9TRUFSQ0hfVFlQRVMgPSBbJ25hbWUnLCAnZ3JvdXAnXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8vIGdldFBhcnRpYWxFbnRpdGllc0J5U3Vic3RyaW5nKHN1YnN0cmluZzogQnl0ZVN0cmluZyk6IE9ic2VydmFibGU8UGFydGlhbEVudGl0eVtdPiB7XHJcbiAgLy8gICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0UGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmcoKScpO1xyXG4gIC8vICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfRU5USVRJRVNfQllfU1VCU1RSSU5HLCBzdWJzdHJpbmcpO1xyXG5cclxuICAvLyAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PFBhcnRpYWxFbnRpdHlbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgLy8gICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGVudGl0eSBsaXN0IGJ5IHN1YnN0cmluZ2AsIHJlcykpLFxyXG4gIC8vICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgUGFydGlhbEVudGl0eShpdGVtKSkpXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxDYXBhYmlsaXR5VHlwZXModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbENhcGFiaWxpdHlUeXBlcygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfQ0FQQUJJTElUWV9UWVBFUyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBjYXBhYmlsaXR5IHR5cGUgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAoKHJlcykgPT4geyAvLyBzb3J0IHRoZSBsaXN0XHJcbiAgICAgICAgcmV0dXJuIChyZXNbJ3N0cmluZ3MnXSBhcyBzdHJpbmdbXSkuc29ydCgobjEsIG4yKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gbjEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvZW50aXR5L2dldEFsbENhcGFiaWxpdHlNYXBzXHJcbiAgICogZ2V0IGEgbGlzdCBvZiBDYXBhYmlsaXR5TWFwXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbENhcGFiaWxpdHlNYXBzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8Q2FwYWJpbGl0eU1hcFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsQ2FwYWJpbGl0eU1hcHMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9lbnRpdHkvZ2V0QWxsQ2FwYWJpbGl0eU1hcHMnKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlQ2FwYWJpbGl0eU1hcCA9IChuMTogQ2FwYWJpbGl0eU1hcCwgbjI6IENhcGFiaWxpdHlNYXApID0+IHtcclxuICAgICAgcmV0dXJuIG4xLmNhcGFiaWxpdHlUeXBlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5jYXBhYmlsaXR5VHlwZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8Q2FwYWJpbGl0eU1hcFtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgY2FwYWJpbGl0eSBtYXAgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgQ2FwYWJpbGl0eU1hcChpdGVtKSkuc29ydChjb21wYXJlQ2FwYWJpbGl0eU1hcCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9lbnRpdHkvZ2V0T2JzZXJ2YWJpbGl0aWVzQnlVc2VkQ2FwYWJpbGl0eU1hcElkXHJcbiAgICogZ2V0IGEgbGlzdCBvZiBPYnNlcnZhYmlsaXR5XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldE9ic2VydmFiaWxpdGllc0J5VXNlZENhcGFiaWxpdHlNYXBJZChjYXBhYmlsaXR5TWFwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T2JzZXJ2YWJpbGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0T2JzZXJ2YWJpbGl0aWVzQnlVc2VkQ2FwYWJpbGl0eU1hcElkKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldE9ic2VydmFiaWxpdGllc0J5VXNlZENhcGFiaWxpdHlNYXBJZC8nLCBjYXBhYmlsaXR5TWFwSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgY2FwYWJpbGl0eSBtYXAgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgT2JzZXJ2YWJpbGl0eShpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxWdWxuZXJhYmlsaXRpZXModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxWdWxuZXJhYmlsaXR5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxWdWxuZXJhYmlsaXRpZXMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfQUxMX1ZVTE5FUkFCSUxJVElFUyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZVZ1bG5lcmFiaWxpdHkgPSAobjE6IFZ1bG5lcmFiaWxpdHksIG4yOiBWdWxuZXJhYmlsaXR5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5uYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxWdWxuZXJhYmlsaXR5W10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBhbGwgdnVsbmVyYWJpbGl0aWVzYCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBWdWxuZXJhYmlsaXR5KGl0ZW0pKS5zb3J0KGNvbXBhcmVWdWxuZXJhYmlsaXR5KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldENhcGFiaWxpdGllc0J5T2JzZXJ2YWJsZVR5cGUob2JzZXJ2YWJsZVR5cGU6IHN0cmluZywgdXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxDYXBhYmlsaXR5TWFwW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRDYXBhYmlsaXRpZXNCeU9ic2VydmFibGVUeXBlKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldENhcGFiaWxpdGllc0J5T2JzZXJ2ZXJUeXBlLycsIG9ic2VydmFibGVUeXBlKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PENhcGFiaWxpdHlNYXBbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNhcGFiaWxpdGllcyBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBDYXBhYmlsaXR5TWFwKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbEFmZmlsaWF0aW9ucyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsQWZmaWxpYXRpb25zKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9BRkZJTElBVElPTlMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgYWZmaWxpYXRpb24gbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLmFmZmlsaWF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsQ291bnRyaWVzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsQ291bnRyaWVzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9DT1VOVFJJRVMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVDb3VudHJ5ID0gKG4xOiBDb3VudHJ5LCBuMjogQ291bnRyeSkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEubmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8Q291bnRyeVtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgY291bnRyeSBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLmtleVZhbHVlUGFpcnMubWFwKGl0ZW0gPT4gbmV3IENvdW50cnkoaXRlbSkpLnNvcnQoY29tcGFyZUNvdW50cnkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY3JlYXRlR3JvdXAoZ3JvdXA6IEdyb3VwLCBlbnRpdHlJZHM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuQ1JFQVRFX0dST1VQLCBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXAuZ3JvdXBOYW1lKSk7XHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgc3RyaW5nczogZW50aXR5SWRzLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBjcmVhdGVkIGdyb3VwYCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbEVudGl0eUdyb3Vwcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPEdyb3VwW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxFbnRpdHlHcm91cHMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfQUxMX0VOVElUWV9HUk9VUFMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVHcm91cCA9IChuMTogR3JvdXAsIG4yOiBHcm91cCkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEuZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5ncm91cE5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PEdyb3VwW10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBhbGwgZ3JvdXBzYCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLmtleVZhbHVlUGFpcnMubWFwKGl0ZW0gPT4gbmV3IEdyb3VwKGl0ZW0pKS5zb3J0KGNvbXBhcmVHcm91cCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRFbnRpdHkoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RW50aXR5PiB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9FTlRJVFksIGlkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1Zyh1cmwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVudGl0eT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZW50aXR5YCwgcmVzKSksXHJcbiAgICAgIG1hcCh4ID0+IG5ldyBFbnRpdHkoeCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRFbnRpdHlCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEVudGl0eUJ5SWQoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9lbnRpdHkvZ2V0RW50aXR5QnlJZCcsIGlkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGVudGl0eWAsIHJlcykpLFxyXG4gICAgICBtYXAoeCA9PiBuZXcgRW50aXR5KHgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgYWRkRW50aXR5KGVudGl0eTogRW50aXR5KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5hZGRFbnRpdHkoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5VUERBVEVfRU5USVRZKTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGVudGl0eSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBlbnRpdHkgJHtlbnRpdHkubmFtZX1gLCByZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgdXBkYXRlRW50aXR5KGVudGl0eTogRW50aXR5KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS51cGRhdGVFbnRpdHkoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5VUERBVEVfRU5USVRZLCBlbnRpdHkuYWdzRW50aXR5SWQpO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBlbnRpdHksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgZW50aXR5ICR7ZW50aXR5Lm5hbWV9YCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZENhcGFiaWxpdHlNYXAoY2FwYWJpbGl0eU1hcDogQ2FwYWJpbGl0eU1hcCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuYWRkQ2FwYWJpbGl0eU1hcCcpO1xyXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlQ2FwYWJpbGl0eU1hcChjYXBhYmlsaXR5TWFwKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgdXBkYXRlQ2FwYWJpbGl0eU1hcChjYXBhYmlsaXR5TWFwOiBDYXBhYmlsaXR5TWFwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS51cGRhdGVDYXBhYmlsaXR5TWFwKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuQUREX09SX1VQREFURV9DQVBBQklMSVRZX01BUCk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBjYXBhYmlsaXR5TWFwLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIGNhcGFiaWxpdHkgbWFwICR7Y2FwYWJpbGl0eU1hcC5jYXBhYmlsaXR5VHlwZX1gLCByZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0UGFydGlhbEVudGl0aWVzQnlHcm91cChncm91cDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXJ0aWFsRW50aXR5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRQYXJ0aWFsRW50aXRpZXNCeUdyb3VwKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX1BBUlRJQUxfRU5USVRJRVNfQllfR1JPVVAsIGVuY29kZVVSSUNvbXBvbmVudChncm91cCkpO1xyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlUGFydGlhbEVudGl0eSA9IChuMTogUGFydGlhbEVudGl0eSwgbjI6IFBhcnRpYWxFbnRpdHkpID0+IHtcclxuICAgICAgcmV0dXJuIG4xLm5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhcnRpYWxFbnRpdHlbXT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgcGFydGlhbCBlbnRpdHkgbGlzdCBieSBncm91cGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgUGFydGlhbEVudGl0eShpdGVtKSkuc29ydChjb21wYXJlUGFydGlhbEVudGl0eSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBwYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZ3Moc3RyaW5nczogc3RyaW5nW10sIHNlYXJjaFR5cGVzOiBzdHJpbmdbXSA9IHRoaXMuREVGQVVMVF9TRUFSQ0hfVFlQRVMpOiBPYnNlcnZhYmxlPFBhcnRpYWxFbnRpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLnBhcnRpYWxFbnRpdGllc0J5U3Vic3RyaW5ncygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLlBBUlRJQUxfRU5USVRJRVNfQllfU1VCU1RSSU5HUyk7XHJcblxyXG4gICAgbGV0IHNlYXJjaFBhcm1zID0ge1xyXG4gICAgICBzZWFyY2hUeXBlczogc2VhcmNoVHlwZXMsXHJcbiAgICAgIHN0cmluZ3M6IHN0cmluZ3MsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlUGFydGlhbEVudGl0eSA9IChuMTogUGFydGlhbEVudGl0eSwgbjI6IFBhcnRpYWxFbnRpdHkpID0+IHtcclxuICAgICAgcmV0dXJuIG4xLm5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgc2VhcmNoUGFybXMsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBwYXJ0aWFsIGVudGl0eSBsaXN0IGJ5IHN1YnN0cmluZ3NgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IFBhcnRpYWxFbnRpdHkoaXRlbSkpLnNvcnQoY29tcGFyZVBhcnRpYWxFbnRpdHkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlRW50aXRpZXMoZW50aXR5SWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmRlbGV0ZUVudGl0aWVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkRFTEVURV9FTlRJVElFUyk7XHJcblxyXG4gICAgLy8gTk9URTogIEluIG9yZGVyIHRvIHNwZWNpZnkgdGhlIHJldHVybiB0eXBlIG9mICd0ZXh0JywgdGhlIGdlbmVyaWNcclxuICAgIC8vICAgICAgICBzaWduYXR1cmUgaGFkIHRvIGJlIHJlbW92ZWQuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyBhcyAndGV4dCcsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBzdHJpbmdzOiBlbnRpdHlJZHNcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIGVudGl0aWVzIHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlQ2FwYWJpbGl0aWVzKGNhcGFiaWxpdHlJZHM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZGVsZXRlQ2FwYWJpbGl0aWVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkRFTEVURV9DQVBBQklMSVRZX01BUFMpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnIGFzICd0ZXh0JyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHN0cmluZ3M6IGNhcGFiaWxpdHlJZHNcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBjYXBhYmlsaXRpZXMgc3VjY2Vzc2Z1bGx5YCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBhZGRPYnNlcnZhYmlsaXRpZXMob2JzZXJ2YWJpbGl0aWVzOiBPYnNlcnZhYmlsaXR5W10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKCFvYnNlcnZhYmlsaXRpZXMgfHwgb2JzZXJ2YWJpbGl0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gb2YoJ2FkZE9ic2VydmFiaWxpdGllcyByZWNlaXZlZCBlbXB0eSBsaXN0LiAgQ29uc2lkZXIgc3VjY2Vzc2Z1bC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWRkUmVxdWVzdHM6IE9ic2VydmFibGU8c3RyaW5nPltdID0gW107XHJcbiAgICBvYnNlcnZhYmlsaXRpZXMuZm9yRWFjaChvID0+IHtcclxuICAgICAgYWRkUmVxdWVzdHMucHVzaCh0aGlzLmFkZE9ic2VydmFiaWxpdHkobykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcmtKb2luKC4uLmFkZFJlcXVlc3RzKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgYWRkT2JzZXJ2YWJpbGl0eShvYnNlcnZhYmlsaXR5OiBPYnNlcnZhYmlsaXR5KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5hZGRPYnNlcnZhYmlsaXR5Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkFERF9PUl9VUERBVEVfT0JTRVJWQUJJTElUWSk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8c3RyaW5nPih1cmwsIG9ic2VydmFiaWxpdHksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIG9ic2VydmFiaWxpdHkgc3VjY2Vzc2Z1bGx5YCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZU9ic2VydmFiaWxpdGllcyhvYnNlcnZhYmlsaXRpZXM6IE9ic2VydmFiaWxpdHlbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoIW9ic2VydmFiaWxpdGllcyB8fCBvYnNlcnZhYmlsaXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBvZignZGVsZXRlT2JzZXJ2YWJpbGl0aWVzIHJlY2VpdmVkIGVtcHR5IGxpc3QuICBDb25zaWRlciBzdWNjZXNzZnVsLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWxldGVSZXF1ZXN0czogT2JzZXJ2YWJsZTxzdHJpbmc+W10gPSBbXTtcclxuICAgIG9ic2VydmFiaWxpdGllcy5mb3JFYWNoKG8gPT4ge1xyXG4gICAgICBkZWxldGVSZXF1ZXN0cy5wdXNoKHRoaXMuZGVsZXRlT2JzZXJ2YWJpbGl0eShvKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ya0pvaW4oLi4uZGVsZXRlUmVxdWVzdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVPYnNlcnZhYmlsaXR5KG9ic2VydmFiaWxpdHk6IE9ic2VydmFiaWxpdHkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmRlbGV0ZU9ic2VydmFiaWxpdHknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuREVMRVRFX09CU0VSVkFCSUxJVFksIG9ic2VydmFiaWxpdHkub2JzZXJ2aW5nQ2FwYWJpbGl0eU1hcElkLCBvYnNlcnZhYmlsaXR5LnVzZWRDYXBhYmlsaXR5TWFwSWQpO1xyXG5cclxuICAgIC8vIE5PVEU6ICBJbiBvcmRlciB0byBzcGVjaWZ5IHRoZSByZXR1cm4gdHlwZSBvZiAndGV4dCcsIHRoZSBnZW5lcmljXHJcbiAgICAvLyAgICAgICAgc2lnbmF0dXJlIGhhZCB0byBiZSByZW1vdmVkLlxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcgYXMgJ3RleHQnLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIG9ic2VydmFiaWxpdHkgc3VjY2Vzc2Z1bGx5YCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVHcm91cHMoZ3JvdXBJZHM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5kZWxldGVHcm91cHMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuREVMRVRFX0dST1VQUyk7XHJcblxyXG4gICAgLy8gTk9URTogIEluIG9yZGVyIHRvIHNwZWNpZnkgdGhlIHJldHVybiB0eXBlIG9mICd0ZXh0JywgdGhlIGdlbmVyaWNcclxuICAgIC8vICAgICAgICBzaWduYXR1cmUgaGFkIHRvIGJlIHJlbW92ZWQuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyBhcyAndGV4dCcsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBzdHJpbmdzOiBncm91cElkc1xyXG4gICAgICB9LFxyXG5cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBncm91cHMgc3VjY2Vzc2Z1bGx5YCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0aHJvdyBlcnJvciBzbyBjbGllbnQgY2FuIHJlYWN0LlxyXG4gIHByaXZhdGUgcmV0aHJvd0Vycm9yKGVycjogYW55KSB7XHJcbiAgICAvLyBOT1RFOiAgTm90IGFuIGVycm9yLlxyXG4gICAgaWYgKGVyci5zdGF0dXMgPT09IDIwMCB8fCBlcnIuc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgcmV0dXJuIG9mKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVycik7XHJcbiAgfVxyXG5cclxuICBsb2FkRW50aXRpZXMoZ3JvdXA6IHN0cmluZyk6IE9ic2VydmFibGU8QmFzZUVudGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UubG9hZEVudGl0aWVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRQYXJ0aWFsRW50aXRpZXNCeUdyb3VwLycgKyBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXApKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCYXNlRW50aXR5W10+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19