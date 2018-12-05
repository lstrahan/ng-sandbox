import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { CacheService } from './cache.service';
import { Entity, PartialEntity, BaseEntity, Group, Country } from '../models/entity';
import { CapabilityMap, Observability } from '../models/capability';
import { Vulnerability } from '../models/vulnerability';
export declare class EntityService {
    private http;
    private logService;
    private cacheService;
    serviceUrl: string;
    GET_ENTITY: string;
    GET_ENTITIES_BY_SUBSTRING: string;
    GET_ALL_CAPABILITY_TYPES: string;
    GET_ALL_CAPABILITY_MAPS: string;
    GET_ALL_VULNERABILITIES: string;
    GET_ALL_AFFILIATIONS: string;
    GET_ALL_COUNTRIES: string;
    CREATE_GROUP: string;
    GET_ALL_ENTITY_GROUPS: string;
    GET_ENTITIES_BY_GROUP: string;
    GET_PARTIAL_ENTITIES_BY_GROUP: string;
    PARTIAL_ENTITIES_BY_SUBSTRINGS: string;
    UPDATE_ENTITY: string;
    ADD_OR_UPDATE_CAPABILITY_MAP: string;
    ADD_OR_UPDATE_OBSERVABILITY: string;
    DELETE_ENTITIES: string;
    DELETE_CAPABILITY_MAPS: string;
    DELETE_OBSERVABILITY: string;
    DELETE_GROUPS: string;
    DEFAULT_SEARCH_TYPES: string[];
    constructor(http: HttpClient, logService: LogService, cacheService: CacheService);
    init(serviceUrl: string): void;
    /**************************************************************************
     *
     *
     **************************************************************************/
    /**************************************************************************
     *
     *
     **************************************************************************/
    getAllCapabilityTypes(useCache?: boolean): Observable<string[]>;
    /**************************************************************************
     * GET /entity/getAllCapabilityMaps
     * get a list of CapabilityMap
     **************************************************************************/
    getAllCapabilityMaps(useCache?: boolean): Observable<CapabilityMap[]>;
    /**************************************************************************
     * GET /entity/getObservabilitiesByUsedCapabilityMapId
     * get a list of Observability
     **************************************************************************/
    getObservabilitiesByUsedCapabilityMapId(capabilityMapId: string): Observable<Observability[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getAllVulnerabilities(useCache?: boolean): Observable<Vulnerability[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getCapabilitiesByObservableType(observableType: string, useCache?: boolean): Observable<CapabilityMap[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getAllAffiliations(useCache?: boolean): Observable<string[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getAllCountries(useCache?: boolean): Observable<Country[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    createGroup(group: Group, entityIds: string[]): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getAllEntityGroups(useCache?: boolean): Observable<Group[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getEntity(id: string): Observable<Entity>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getEntityById(id: string): Observable<Entity>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    addEntity(entity: Entity): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    updateEntity(entity: Entity): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    addCapabilityMap(capabilityMap: CapabilityMap): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    updateCapabilityMap(capabilityMap: CapabilityMap): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    getPartialEntitiesByGroup(group: string): Observable<PartialEntity[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    partialEntitiesBySubstrings(strings: string[], searchTypes?: string[]): Observable<PartialEntity[]>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    deleteEntities(entityIds: string[]): Observable<string>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    deleteCapabilities(capabilityIds: string[]): Observable<string>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    addObservabilities(observabilities: Observability[]): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    addObservability(observability: Observability): Observable<string>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    deleteObservabilities(observabilities: Observability[]): Observable<any>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    deleteObservability(observability: Observability): Observable<string>;
    /**************************************************************************
     *
     *
     **************************************************************************/
    deleteGroups(groupIds: string[]): Observable<string>;
    private rethrowError;
    loadEntities(group: string): Observable<BaseEntity[]>;
}
