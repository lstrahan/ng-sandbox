/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
var MockBackendInterceptor = /** @class */ (function () {
    function MockBackendInterceptor() {
    }
    /**
     * @param {?} millisecs
     * @return {?}
     */
    MockBackendInterceptor.prototype.sleep = /**
     * @param {?} millisecs
     * @return {?}
     */
    function (millisecs) {
        /** @type {?} */
        var initiation = new Date().getTime();
        while ((new Date().getTime() - initiation) < millisecs) { }
    };
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    MockBackendInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(function () {
            // example GET endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'GET') {
                console.log("MOCK " + request.url);
                _this.sleep(500);
                /** @type {?} */
                var dataObj = [{ id: '1234', data: 'data goes here' }, { id: '5678', data: 'data goes here' }];
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // example GET endpoint with id
            if (request.url.match(/\/exampleEndpoint\/\d+$/) && request.method === 'GET') {
                console.log("MOCK " + request.url);
                _this.sleep(500);
                /** @type {?} */
                var urlParts = request.url.split('/');
                /** @type {?} */
                var id = parseInt(urlParts[urlParts.length - 1]);
                /** @type {?} */
                var dataObj = { id: id, data: 'data goes here' };
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // example POST endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'POST') {
                /** @type {?} */
                var reqBody = request.body;
                console.log("MOCK " + request.url, reqBody);
                _this.sleep(500);
                if (reqBody) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(reqBody) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }));
    };
    MockBackendInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockBackendInterceptor.ctorParameters = function () { return []; };
    return MockBackendInterceptor;
}());
export { MockBackendInterceptor };
/** @type {?} */
export var MockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackendInterceptor,
    multi: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1iYWNrZW5kLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL290aGVyL21vY2stYmFja2VuZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFlLFlBQVksRUFBMkMsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3SCxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUM7SUFHSTtJQUFnQixDQUFDOzs7OztJQUVqQixzQ0FBSzs7OztJQUFMLFVBQU0sU0FBUzs7WUFDUCxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDckMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUU7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBQXRELGlCQThDQztRQTdDRyx5REFBeUQ7UUFDekQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUUxQix1QkFBdUI7WUFDdkIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVEsT0FBTyxDQUFDLEdBQUssQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztvQkFDWixPQUFPLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFFO2dCQUNoRyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQy9FO3FCQUFNO29CQUNILE9BQU8sVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDdEQ7YUFDSjtZQUVELCtCQUErQjtZQUMvQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUSxPQUFPLENBQUMsR0FBSyxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUNaLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O29CQUNqQyxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztvQkFDNUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ2hELElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQU07b0JBQ0gsT0FBTyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDthQUNKO1lBRUQsd0JBQXdCO1lBQ3hCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTs7b0JBQ25FLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLE9BQU8sQ0FBQyxHQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQU07b0JBQ0gsT0FBTyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDthQUNKO1lBRUQsOENBQThDO1lBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBeERKLFVBQVU7Ozs7SUF5RFgsNkJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXhEWSxzQkFBc0I7O0FBMERuQyxNQUFNLEtBQUssbUJBQW1CLEdBQUc7O0lBRTdCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLHNCQUFzQjtJQUNoQyxLQUFLLEVBQUUsSUFBSTtDQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2NrQmFja2VuZEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHNsZWVwKG1pbGxpc2Vjcykge1xyXG4gICAgICAgIGxldCBpbml0aWF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgd2hpbGUgKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluaXRpYXRpb24pIDwgbWlsbGlzZWNzKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgICAgICAvLyB3cmFwIGluIGRlbGF5ZWQgb2JzZXJ2YWJsZSB0byBzaW11bGF0ZSBzZXJ2ZXIgYXBpIGNhbGxcclxuICAgICAgICByZXR1cm4gb2YobnVsbCkucGlwZShtZXJnZU1hcCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBleGFtcGxlIEdFVCBlbmRwb2ludFxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC51cmwuZW5kc1dpdGgoJy9leGFtcGxlRW5kcG9pbnQnKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNT0NLICR7cmVxdWVzdC51cmx9YCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YU9iaiA9IFsgeyBpZDogJzEyMzQnLCBkYXRhOiAnZGF0YSBnb2VzIGhlcmUnIH0sIHsgaWQ6ICc1Njc4JywgZGF0YTogJ2RhdGEgZ29lcyBoZXJlJyB9IF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXcgSHR0cFJlc3BvbnNlKHsgc3RhdHVzOiAyMDAsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoeyBlcnJvcjogeyBtZXNzYWdlOiAnRXJyb3InIH0gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGV4YW1wbGUgR0VUIGVuZHBvaW50IHdpdGggaWRcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QudXJsLm1hdGNoKC9cXC9leGFtcGxlRW5kcG9pbnRcXC9cXGQrJC8pICYmIHJlcXVlc3QubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1PQ0sgJHtyZXF1ZXN0LnVybH1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCB1cmxQYXJ0cyA9IHJlcXVlc3QudXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBwYXJzZUludCh1cmxQYXJ0c1t1cmxQYXJ0cy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YU9iaiA9IHsgaWQ6IGlkLCBkYXRhOiAnZGF0YSBnb2VzIGhlcmUnIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXcgSHR0cFJlc3BvbnNlKHsgc3RhdHVzOiAyMDAsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoeyBlcnJvcjogeyBtZXNzYWdlOiAnRXJyb3InIH0gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGV4YW1wbGUgUE9TVCBlbmRwb2ludFxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC51cmwuZW5kc1dpdGgoJy9leGFtcGxlRW5kcG9pbnQnKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxQm9keSA9IHJlcXVlc3QuYm9keTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNT0NLICR7cmVxdWVzdC51cmx9YCwgcmVxQm9keSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxQm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihuZXcgSHR0cFJlc3BvbnNlKHsgc3RhdHVzOiAyMDAsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcUJvZHkpIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoeyBlcnJvcjogeyBtZXNzYWdlOiAnRXJyb3InIH0gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHBhc3MgdGhyb3VnaCBhbnkgcmVxdWVzdHMgbm90IGhhbmRsZWQgYWJvdmVcclxuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG5cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgTW9ja0JhY2tlbmRQcm92aWRlciA9IHtcclxuICAgIC8vIHVzZSBmYWtlIGJhY2tlbmQgaW4gcGxhY2Ugb2YgSHR0cCBzZXJ2aWNlIGZvciBiYWNrZW5kLWxlc3MgZGV2ZWxvcG1lbnRcclxuICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgdXNlQ2xhc3M6IE1vY2tCYWNrZW5kSW50ZXJjZXB0b3IsXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG4iXX0=