
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable, of, forkJoin, empty } from 'rxjs';

import { Util } from '../other/util';
import { LogService } from './log.service';
import { CacheService } from './cache.service';
import { Entity, PartialEntity, BaseEntity, Group, Country } from '../models/entity';
import { CapabilityMap, Observability } from '../models/capability';
import { Vulnerability } from '../models/vulnerability';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  serviceUrl: string = '';

  GET_ENTITY = '/entity/';
  GET_ENTITIES_BY_SUBSTRING = '/entity/getEntitiesBySubstring/';
  GET_ALL_CAPABILITY_TYPES = '/entity/getAllCapabilityTypes';
  GET_ALL_CAPABILITY_MAPS = '/entity/getAllCapabilityMaps';
  GET_ALL_VULNERABILITIES = '/entity/getAllVulnerabilities';
  GET_ALL_AFFILIATIONS = '/entity/getAllAffiliations';
  GET_ALL_COUNTRIES = '/entity/getAllCountries';
  CREATE_GROUP = '/entity/createGroupByGroupName';
  GET_ALL_ENTITY_GROUPS = '/entity/getAllEntityGroups';
  GET_ENTITIES_BY_GROUP = '/entity/getEntitiesByGroup/';

  GET_PARTIAL_ENTITIES_BY_GROUP = '/entity/getPartialEntitiesByGroup/';
  PARTIAL_ENTITIES_BY_SUBSTRINGS = '/entity/partial';

  UPDATE_ENTITY = '/entity/';
  ADD_OR_UPDATE_CAPABILITY_MAP = '/entity/addOrUpdateCapabilityMap';
  ADD_OR_UPDATE_OBSERVABILITY = '/entity/addOrUpdateObservability';

  DELETE_ENTITIES = '/entity/deleteEntitiesByIds';
  DELETE_CAPABILITY_MAPS = '/entity/deleteCapabilityMapsByIds';
  DELETE_OBSERVABILITY = '/entity/deleteObservability/';
  DELETE_GROUPS = '/entity/deleteGroupsByIds';

  DEFAULT_SEARCH_TYPES = ['name', 'group'];

  constructor(private http: HttpClient, private logService: LogService,
    private cacheService: CacheService) { }

  init(serviceUrl: string) {
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
  //     map(res => res.map(item => new PartialEntity(item))),
  //     catchError(this.handleError<any>('EntityService.getPartialEntitiesBySubstring'))
  //   );
  // }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getAllCapabilityTypes(useCache: boolean = true): Observable<string[]> {
    this.logService.debug('EntityService.getAllCapabilityTypes()');
    const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_CAPABILITY_TYPES);

    if (!useCache) {
      this.cacheService.delete(url);
    }

    return this.cacheService.get(url, this.http.get<any>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived capability type list`, res)),
      map((res) => { // sort the list
        return (res['strings'] as string[]).sort((n1, n2) => {
          return n1.toLowerCase().localeCompare(n2.toLowerCase());
        });
      }),
      catchError(this.handleError<any>('EntityService.getAllCapabilityTypes'))
    );
  }

  /**************************************************************************
   * GET /entity/getAllCapabilityMaps
   * get a list of CapabilityMap
   **************************************************************************/
  getAllCapabilityMaps(useCache: boolean = true): Observable<CapabilityMap[]> {
    this.logService.debug('EntityService.getAllCapabilityMaps()');
    const url = Util.urlJoin(this.serviceUrl, '/entity/getAllCapabilityMaps');

    if (!useCache) {
      this.cacheService.delete(url);
    }

    // compare function
    let compareCapabilityMap = (n1: CapabilityMap, n2: CapabilityMap) => {
      return n1.capabilityType.toLowerCase().localeCompare(n2.capabilityType.toLowerCase());
    };

    return this.cacheService.get(url, this.http.get<CapabilityMap[]>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived capability map list`, res)),
      map(res => res.map(item => new CapabilityMap(item)).sort(compareCapabilityMap)),
      catchError(this.handleError<any>('EntityService.getAllCapabilityMaps'))
    );
  }

  /**************************************************************************
   * GET /entity/getObservabilitiesByUsedCapabilityMapId
   * get a list of Observability
   **************************************************************************/
  getObservabilitiesByUsedCapabilityMapId(capabilityMapId: string): Observable<Observability[]> {
    this.logService.debug('EntityService.getObservabilitiesByUsedCapabilityMapId()');
    const url = Util.urlJoin(this.serviceUrl, '/entity/getObservabilitiesByUsedCapabilityMapId/', capabilityMapId);

    return this.http.get<any>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived capability map list`, res)),
      map(res => res.map(item => new Observability(item))),
      catchError(this.handleError<any>('EntityService.getObservabilitiesByUsedCapabilityMapId'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getAllVulnerabilities(useCache: boolean = true): Observable<Vulnerability[]> {
    this.logService.debug('EntityService.getAllVulnerabilities()');
    const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_VULNERABILITIES);

    if (!useCache) {
      this.cacheService.delete(url);
    }

    // compare function
    let compareVulnerability = (n1: Vulnerability, n2: Vulnerability) => {
      return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
    };

    return this.cacheService.get(url, this.http.get<Vulnerability[]>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived all vulnerabilities`, res)),
      map(res => res.map(item => new Vulnerability(item)).sort(compareVulnerability)),
      catchError(this.handleError<any>('EntityService.getAllVulnerabilities'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getCapabilitiesByObservableType(observableType: string, useCache: boolean = true): Observable<CapabilityMap[]> {
    this.logService.debug('EntityService.getCapabilitiesByObservableType()');
    const url = Util.urlJoin(this.serviceUrl, '/entity/getCapabilitiesByObserverType/', observableType);

    if (!useCache) {
      this.cacheService.delete(url);
    }

    return this.cacheService.get(url, this.http.get<CapabilityMap[]>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived capabilities list`, res)),
      map(res => res.map(item => new CapabilityMap(item))),
      catchError(this.handleError<any>('EntityService.getCapabilitiesByObservableType'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getAllAffiliations(useCache: boolean = true): Observable<string[]> {
    this.logService.debug('EntityService.getAllAffiliations()');
    const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_AFFILIATIONS);

    if (!useCache) {
      this.cacheService.delete(url);
    }

    return this.cacheService.get(url, this.http.get<any>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived affiliation list`, res)),
      map(res => {
        return res.map(item => {
          return item.affiliation;
        });
      }),
      catchError(this.handleError<any>('EntityService.getAllAffiliations'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getAllCountries(useCache: boolean = true): Observable<Country[]> {
    this.logService.debug('EntityService.getAllCountries()');
    const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_COUNTRIES);

    if (!useCache) {
      this.cacheService.delete(url);
    }

    // compare function
    let compareCountry = (n1: Country, n2: Country) => {
      return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
    };

    return this.cacheService.get(url, this.http.get<Country[]>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived country list`, res)),
      map(res => res.keyValuePairs.map(item => new Country(item)).sort(compareCountry)),
      catchError(this.handleError<any>('EntityService.getAllCountries'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  createGroup(group: Group, entityIds: string[]): Observable<any> {
    const url = Util.urlJoin(this.serviceUrl, this.CREATE_GROUP, encodeURIComponent(group.groupName));
    let component = this;

    let data = {
      strings: entityIds,
    };

    return this.http.post(url, data, httpOptions).pipe(
      tap(res => this.logService.debug(`    created group`, res)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getAllEntityGroups(useCache: boolean = true): Observable<Group[]> {
    this.logService.debug('EntityService.getAllEntityGroups()');
    const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_ENTITY_GROUPS);

    if (!useCache) {
      this.cacheService.delete(url);
    }

    // compare function
    let compareGroup = (n1: Group, n2: Group) => {
      return n1.groupName.toLowerCase().localeCompare(n2.groupName.toLowerCase());
    };

    return this.cacheService.get(url, this.http.get<Group[]>(url, httpOptions)).pipe(
      tap(res => this.logService.debug(`    retreived all groups`, res)),
      map(res => res.keyValuePairs.map(item => new Group(item)).sort(compareGroup)),
      catchError(this.handleError<any>('EntityService.getAllEntityGroups'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getEntity(id: string): Observable<Entity> {
    const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITY, id);
    this.logService.debug(url);

    return this.http.get<Entity>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived entity`, res)),
      map(x => new Entity(x)),
      catchError(this.handleError<any>('EntityService.getEntity'))
    );
  }
  
  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getEntityById(id: string): Observable<Entity> {
    this.logService.debug('EntityService.getEntityById()');
    const url = Util.urlJoin(this.serviceUrl, '/entity/getEntityById', id);

    return this.http.get<Entity>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived entity`, res)),
      map(x => new Entity(x)),
      catchError(this.handleError<any>('EntityService.getEntityById'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  addEntity(entity: Entity): Observable<any> {
    this.logService.debug('EntityService.addEntity()');
    const url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY);

    let component = this;
    return this.http.post(url, entity, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated entity ${entity.name}`, res)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  updateEntity(entity: Entity): Observable<any> {
    this.logService.debug('EntityService.updateEntity()');
    const url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY, entity.agsEntityId);

    let component = this;
    return this.http.put(url, entity, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated entity ${entity.name}`, res)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  addCapabilityMap(capabilityMap: CapabilityMap): Observable<any> {
    this.logService.debug('EntityService.addCapabilityMap');
    return this.updateCapabilityMap(capabilityMap);
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  updateCapabilityMap(capabilityMap: CapabilityMap): Observable<any> {
    this.logService.debug('EntityService.updateCapabilityMap()');
    const url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_CAPABILITY_MAP);

    let component = this;
    return this.http.post(url, capabilityMap, httpOptions).pipe(
      tap(res => this.logService.debug(`    updated capability map ${capabilityMap.capabilityType}`, res)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  getPartialEntitiesByGroup(group: string): Observable<PartialEntity[]> {
    this.logService.debug('EntityService.getPartialEntitiesByGroup()');
    const url = Util.urlJoin(this.serviceUrl, this.GET_PARTIAL_ENTITIES_BY_GROUP, encodeURIComponent(group));

    // compare function
    let comparePartialEntity = (n1: PartialEntity, n2: PartialEntity) => {
      return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
    };

    return this.http.get<PartialEntity[]>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived partial entity list by group`, res)),
      map(res => res.map(item => new PartialEntity(item)).sort(comparePartialEntity)),
      catchError(this.handleError<any>('EntityService.getPartialEntitiesByGroup()'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  partialEntitiesBySubstrings(strings: string[], searchTypes: string[] = this.DEFAULT_SEARCH_TYPES): Observable<PartialEntity[]> {
    this.logService.debug('EntityService.partialEntitiesBySubstrings()');
    const url = Util.urlJoin(this.serviceUrl, this.PARTIAL_ENTITIES_BY_SUBSTRINGS);

    let searchParms = {
      searchTypes: searchTypes,
      strings: strings,
    };

    // compare function
    let comparePartialEntity = (n1: PartialEntity, n2: PartialEntity) => {
      return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
    };

    return this.http.post<any>(url, searchParms, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived partial entity list by substrings`, res)),
      map(res => res.map(item => new PartialEntity(item)).sort(comparePartialEntity)),
      catchError(this.handleError<any>('EntityService.partialEntitiesBySubstrings'))
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  deleteEntities(entityIds: string[]) {
    this.logService.debug('EntityService.deleteEntities');
    const url = Util.urlJoin(this.serviceUrl, this.DELETE_ENTITIES);

    // NOTE:  In order to specify the return type of 'text', the generic
    //        signature had to be removed.
    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'text',
      body: {
        strings: entityIds
      },
    };

    let component = this;
    // return this.http.delete<any>(url, deleteOptions).pipe(
    return this.http.delete(url, deleteOptions).pipe(
      tap(res => this.logService.debug(`    deleted entities successfully`)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  deleteCapabilities(capabilityIds: string[]) {
    this.logService.debug('EntityService.deleteCapabilities');
    const url = Util.urlJoin(this.serviceUrl, this.DELETE_CAPABILITY_MAPS);

    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'text',
      body: {
        strings: capabilityIds
      },
    };

    let component = this;
    return this.http.delete(url, deleteOptions).pipe(
      tap(res => this.logService.debug(`    deleted capabilities successfully`)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  addObservabilities(observabilities: Observability[]): Observable<any> {
    if (!observabilities || observabilities.length === 0) {
      return of('addObservabilities received empty list.  Consider successful.');
    }

    let addRequests: Observable<string>[] = [];
    observabilities.forEach(o => {
      addRequests.push(this.addObservability(o));
    });

    return forkJoin(...addRequests);
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  addObservability(observability: Observability): Observable<string> {
    this.logService.debug('EntityService.addObservability');
    const url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_OBSERVABILITY);

    let component = this;
    return this.http.post(url, observability, httpOptions).pipe(
      tap(res => this.logService.debug(`    added observability successfully`, res)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  deleteObservabilities(observabilities: Observability[]): Observable<any> {
    if (!observabilities || observabilities.length === 0) {
      return of('deleteObservabilities received empty list.  Consider successful.');
    }

    let deleteRequests: Observable<string>[] = [];
    observabilities.forEach(o => {
      deleteRequests.push(this.deleteObservability(o));
    });

    return forkJoin(...deleteRequests);
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  deleteObservability(observability: Observability): Observable<string> {
    this.logService.debug('EntityService.deleteObservability');
    const url = Util.urlJoin(this.serviceUrl, this.DELETE_OBSERVABILITY, observability.observingCapabilityMapId, observability.usedCapabilityMapId);

    // NOTE:  In order to specify the return type of 'text', the generic
    //        signature had to be removed.
    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'text',
    };

    let component = this;
    return this.http.delete(url, deleteOptions).pipe(
      tap(res => this.logService.debug(`    deleted observability successfully`)),
      catchError(component.rethrowError)
    );
  }

  /**************************************************************************
   * 
   * 
   **************************************************************************/
  deleteGroups(groupIds: string[]): Observable<string> {
    this.logService.debug('EntityService.deleteGroups');
    const url = Util.urlJoin(this.serviceUrl, this.DELETE_GROUPS);

    // NOTE:  In order to specify the return type of 'text', the generic
    //        signature had to be removed.
    const deleteOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'text',
      body: {
        strings: groupIds
      },

    };

    let component = this;
    return this.http.delete(url, deleteOptions).pipe(
      tap(res => this.logService.debug(`    deleted groups successfully`)),
      catchError(component.rethrowError)
    );
  }

  // Rethrow error so client can react.
  private rethrowError(err: any) {
    // NOTE:  Not an error.
    if (err.status === 200 || err.status === 204) {
      return of(err);
    }

    if (err instanceof Response) {
      return observableThrowError(err);
    }
    return observableThrowError(err);
  }

  loadEntities(group: string): Observable<BaseEntity[]> {
    this.logService.debug('EntityService.loadEntities');
    const url = Util.urlJoin(this.serviceUrl, '/entity/getPartialEntitiesByGroup/' + encodeURIComponent(group));

    return this.http.get<BaseEntity[]>(url, httpOptions).pipe(
      tap(res => this.logService.debug(`    retreived event model ${name}`, res)),
      map(res => res),
      catchError(this.handleError<any>('EventModelService.getEventModelByName'))
    );
  }

  /**************************************************************************
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   **************************************************************************/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logService.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
