/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import * as i0 from "@angular/core";
import * as i1 from "./log.service";
var ProgressService = /** @class */ (function () {
    function ProgressService(logService) {
        this.logService = logService;
        this.pendingRequests = 0;
        this.containerName = 'progressContainer';
        this.element = null;
    }
    /**
     * @return {?}
     */
    ProgressService.prototype.getElement = /**
     * @return {?}
     */
    function () {
        if (this.element == null) {
            this.logService.debug('Default element for progress spinner = "' + this.containerName + '"');
            this.element = document.getElementById(this.containerName);
            if (!this.element) {
                this.logService.debug('Progress spinner element not found.  Ensure element is included in document.');
            }
        }
        return this.element;
    };
    /**
     * @param {?} isBusy
     * @return {?}
     */
    ProgressService.prototype.setBusy = /**
     * @param {?} isBusy
     * @return {?}
     */
    function (isBusy) {
        if (isBusy) {
            //Keep track of how many requests there have been to show the busy message.
            this.pendingRequests++;
            //If force is true show the busy message immediately.
            this.setVisible(true);
        }
        else {
            //Keep track of how many requests there have been to hide the busy message.
            if (this.pendingRequests > 0) {
                this.pendingRequests--;
            }
            //If there is no more outstanding busy requests or if force is true then hide the busy message.
            if (this.pendingRequests <= 0) {
                this.setVisible(false);
                this.pendingRequests = 0;
            }
        }
    };
    //Control the visibility of the busy message div.
    //Control the visibility of the busy message div.
    /**
     * @param {?} isVisible
     * @return {?}
     */
    ProgressService.prototype.setVisible = 
    //Control the visibility of the busy message div.
    /**
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        try {
            if (isVisible) {
                this.getElement().style.display = 'flex';
            }
            else {
                this.getElement().style.display = 'none';
            }
        }
        catch (err) {
            this.logService.warn('Unable to display spinner.  Is "ags-lib-progress" component included?');
        }
    };
    ProgressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ProgressService.ctorParameters = function () { return [
        { type: LogService }
    ]; };
    /** @nocollapse */ ProgressService.ngInjectableDef = i0.defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(i0.inject(i1.LogService)); }, token: ProgressService, providedIn: "root" });
    return ProgressService;
}());
export { ProgressService };
if (false) {
    /** @type {?} */
    ProgressService.prototype.pendingRequests;
    /** @type {?} */
    ProgressService.prototype.containerName;
    /** @type {?} */
    ProgressService.prototype.element;
    /**
     * @type {?}
     * @private
     */
    ProgressService.prototype.logService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wcm9ncmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUzQztJQVNFLHlCQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMaEMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxZQUFPLEdBQWdCLElBQUksQ0FBQztJQUk1QixDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7YUFDdkc7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGlDQUFPOzs7O0lBQVAsVUFBUSxNQUFlO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1YsMkVBQTJFO1lBQzNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixxREFBcUQ7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUNJO1lBQ0gsMkVBQTJFO1lBQzNFLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtZQUVELCtGQUErRjtZQUMvRixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztJQUVELGlEQUFpRDs7Ozs7O0lBQ2pELG9DQUFVOzs7Ozs7SUFBVixVQUFXLFNBQWtCO1FBQzNCLElBQUk7WUFDRixJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7YUFDMUM7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQzFDO1NBQ0Y7UUFDRCxPQUFNLEdBQUcsRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVFQUF1RSxDQUFDLENBQUM7U0FDL0Y7SUFDSCxDQUFDOztnQkE1REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7MEJBRG5CO0NBZ0VDLEFBN0RELElBNkRDO1NBMURZLGVBQWU7OztJQUUxQiwwQ0FBNEI7O0lBQzVCLHdDQUFvQzs7SUFDcEMsa0NBQTRCOzs7OztJQUcxQixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU2VydmljZSB7XHJcblxyXG4gIHBlbmRpbmdSZXF1ZXN0czogbnVtYmVyID0gMDtcclxuICBjb250YWluZXJOYW1lID0gJ3Byb2dyZXNzQ29udGFpbmVyJztcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRGVmYXVsdCBlbGVtZW50IGZvciBwcm9ncmVzcyBzcGlubmVyID0gXCInICsgdGhpcy5jb250YWluZXJOYW1lICsgJ1wiJyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVyTmFtZSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUHJvZ3Jlc3Mgc3Bpbm5lciBlbGVtZW50IG5vdCBmb3VuZC4gIEVuc3VyZSBlbGVtZW50IGlzIGluY2x1ZGVkIGluIGRvY3VtZW50LicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHNldEJ1c3koaXNCdXN5OiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNCdXN5KSB7XHJcbiAgICAgIC8vS2VlcCB0cmFjayBvZiBob3cgbWFueSByZXF1ZXN0cyB0aGVyZSBoYXZlIGJlZW4gdG8gc2hvdyB0aGUgYnVzeSBtZXNzYWdlLlxyXG4gICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cysrO1xyXG4gICAgICAvL0lmIGZvcmNlIGlzIHRydWUgc2hvdyB0aGUgYnVzeSBtZXNzYWdlIGltbWVkaWF0ZWx5LlxyXG4gICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy9LZWVwIHRyYWNrIG9mIGhvdyBtYW55IHJlcXVlc3RzIHRoZXJlIGhhdmUgYmVlbiB0byBoaWRlIHRoZSBidXN5IG1lc3NhZ2UuXHJcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdSZXF1ZXN0cyA+IDApIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cy0tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0lmIHRoZXJlIGlzIG5vIG1vcmUgb3V0c3RhbmRpbmcgYnVzeSByZXF1ZXN0cyBvciBpZiBmb3JjZSBpcyB0cnVlIHRoZW4gaGlkZSB0aGUgYnVzeSBtZXNzYWdlLlxyXG4gICAgICBpZiAodGhpcy5wZW5kaW5nUmVxdWVzdHMgPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0NvbnRyb2wgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGJ1c3kgbWVzc2FnZSBkaXYuXHJcbiAgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2Uud2FybignVW5hYmxlIHRvIGRpc3BsYXkgc3Bpbm5lci4gIElzIFwiYWdzLWxpYi1wcm9ncmVzc1wiIGNvbXBvbmVudCBpbmNsdWRlZD8nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19