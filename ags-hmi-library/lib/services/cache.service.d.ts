import { Observable, Subject } from 'rxjs';
/**
 * Cache Service is an observables based in-memory cache implementation
 * Keeps track of in-flight observables and sets a default expiry for cached values
 */
export declare class CacheService {
    private cache;
    readonly DEFAULT_MAX_AGE: number;
    /**
     * Gets the value from cache if the key is provided.
     */
    get(key: string, fallback?: Observable<any>, maxAge?: number): Observable<any> | Subject<any>;
    /**
     * Sets the value with key in the cache
     * Notifies all observers of the new value
     */
    set(key: string, value: any, maxAge?: number): void;
    /**
     * Checks if the a key exists in cache
     */
    has(key: string): boolean;
    /**
    * Delete cache entry
    */
    delete(key: string): void;
    /**
     * Checks if the key exists and has not expired.
     */
    private hasValidCachedValue;
}
