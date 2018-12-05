/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
export class MockBackendInterceptor {
    constructor() { }
    /**
     * @param {?} millisecs
     * @return {?}
     */
    sleep(millisecs) {
        /** @type {?} */
        let initiation = new Date().getTime();
        while ((new Date().getTime() - initiation) < millisecs) { }
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {
            // example GET endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'GET') {
                console.log(`MOCK ${request.url}`);
                this.sleep(500);
                /** @type {?} */
                let dataObj = [{ id: '1234', data: 'data goes here' }, { id: '5678', data: 'data goes here' }];
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // example GET endpoint with id
            if (request.url.match(/\/exampleEndpoint\/\d+$/) && request.method === 'GET') {
                console.log(`MOCK ${request.url}`);
                this.sleep(500);
                /** @type {?} */
                let urlParts = request.url.split('/');
                /** @type {?} */
                let id = parseInt(urlParts[urlParts.length - 1]);
                /** @type {?} */
                let dataObj = { id: id, data: 'data goes here' };
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
                let reqBody = request.body;
                console.log(`MOCK ${request.url}`, reqBody);
                this.sleep(500);
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
    }
}
MockBackendInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockBackendInterceptor.ctorParameters = () => [];
/** @type {?} */
export let MockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackendInterceptor,
    multi: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1iYWNrZW5kLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL290aGVyL21vY2stYmFja2VuZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFlLFlBQVksRUFBMkMsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3SCxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsTUFBTSxPQUFPLHNCQUFzQjtJQUUvQixnQkFBZ0IsQ0FBQzs7Ozs7SUFFakIsS0FBSyxDQUFDLFNBQVM7O1lBQ1AsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFFO0lBQzlELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ2xELHlEQUF5RDtRQUN6RCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUUvQix1QkFBdUI7WUFDdkIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUNaLE9BQU8sR0FBRyxDQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLENBQUU7Z0JBQ2hHLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQU07b0JBQ0gsT0FBTyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDthQUNKO1lBRUQsK0JBQStCO1lBQy9CLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztvQkFDWixRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztvQkFDakMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs7b0JBQzVDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO2dCQUNoRCxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQy9FO3FCQUFNO29CQUNILE9BQU8sVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDdEQ7YUFDSjtZQUVELHdCQUF3QjtZQUN4QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7O29CQUNuRSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQU07b0JBQ0gsT0FBTyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDthQUNKO1lBRUQsOENBQThDO1lBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBeERKLFVBQVU7Ozs7O0FBMkRYLE1BQU0sS0FBSyxtQkFBbUIsR0FBRzs7SUFFN0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsc0JBQXNCO0lBQ2hDLEtBQUssRUFBRSxJQUFJO0NBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tCYWNrZW5kSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgc2xlZXAobWlsbGlzZWNzKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB3aGlsZSAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5pdGlhdGlvbikgPCBtaWxsaXNlY3MpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIC8vIHdyYXAgaW4gZGVsYXllZCBvYnNlcnZhYmxlIHRvIHNpbXVsYXRlIHNlcnZlciBhcGkgY2FsbFxyXG4gICAgICAgIHJldHVybiBvZihudWxsKS5waXBlKG1lcmdlTWFwKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGV4YW1wbGUgR0VUIGVuZHBvaW50XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC5lbmRzV2l0aCgnL2V4YW1wbGVFbmRwb2ludCcpICYmIHJlcXVlc3QubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1PQ0sgJHtyZXF1ZXN0LnVybH1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhT2JqID0gWyB7IGlkOiAnMTIzNCcsIGRhdGE6ICdkYXRhIGdvZXMgaGVyZScgfSwgeyBpZDogJzU2NzgnLCBkYXRhOiAnZGF0YSBnb2VzIGhlcmUnIH0gXTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7IGVycm9yOiB7IG1lc3NhZ2U6ICdFcnJvcicgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZXhhbXBsZSBHRVQgZW5kcG9pbnQgd2l0aCBpZFxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC51cmwubWF0Y2goL1xcL2V4YW1wbGVFbmRwb2ludFxcL1xcZCskLykgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTU9DSyAke3JlcXVlc3QudXJsfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybFBhcnRzID0gcmVxdWVzdC51cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhT2JqID0geyBpZDogaWQsIGRhdGE6ICdkYXRhIGdvZXMgaGVyZScgfTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7IGVycm9yOiB7IG1lc3NhZ2U6ICdFcnJvcicgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZXhhbXBsZSBQT1NUIGVuZHBvaW50XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC5lbmRzV2l0aCgnL2V4YW1wbGVFbmRwb2ludCcpICYmIHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXFCb2R5ID0gcmVxdWVzdC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1PQ0sgJHtyZXF1ZXN0LnVybH1gLCByZXFCb2R5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXFCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCwgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSkgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7IGVycm9yOiB7IG1lc3NhZ2U6ICdFcnJvcicgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcGFzcyB0aHJvdWdoIGFueSByZXF1ZXN0cyBub3QgaGFuZGxlZCBhYm92ZVxyXG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcblxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBNb2NrQmFja2VuZFByb3ZpZGVyID0ge1xyXG4gICAgLy8gdXNlIGZha2UgYmFja2VuZCBpbiBwbGFjZSBvZiBIdHRwIHNlcnZpY2UgZm9yIGJhY2tlbmQtbGVzcyBkZXZlbG9wbWVudFxyXG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICB1c2VDbGFzczogTW9ja0JhY2tlbmRJbnRlcmNlcHRvcixcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcbiJdfQ==