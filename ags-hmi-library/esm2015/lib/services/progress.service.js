/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import * as i0 from "@angular/core";
import * as i1 from "./log.service";
export class ProgressService {
    /**
     * @param {?} logService
     */
    constructor(logService) {
        this.logService = logService;
        this.pendingRequests = 0;
        this.containerName = 'progressContainer';
        this.element = null;
    }
    /**
     * @return {?}
     */
    getElement() {
        if (this.element == null) {
            this.logService.debug('Default element for progress spinner = "' + this.containerName + '"');
            this.element = document.getElementById(this.containerName);
            if (!this.element) {
                this.logService.debug('Progress spinner element not found.  Ensure element is included in document.');
            }
        }
        return this.element;
    }
    /**
     * @param {?} isBusy
     * @return {?}
     */
    setBusy(isBusy) {
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
    }
    //Control the visibility of the busy message div.
    /**
     * @param {?} isVisible
     * @return {?}
     */
    setVisible(isVisible) {
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
    }
}
ProgressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ProgressService.ctorParameters = () => [
    { type: LogService }
];
/** @nocollapse */ ProgressService.ngInjectableDef = i0.defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(i0.inject(i1.LogService)); }, token: ProgressService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wcm9ncmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszQyxNQUFNLE9BQU8sZUFBZTs7OztJQU0xQixZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMaEMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxZQUFPLEdBQWdCLElBQUksQ0FBQztJQUk1QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO2FBQ3ZHO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBZTtRQUNyQixJQUFJLE1BQU0sRUFBRTtZQUNWLDJFQUEyRTtZQUMzRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIscURBQXFEO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7YUFDSTtZQUNILDJFQUEyRTtZQUMzRSxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFFRCwrRkFBK0Y7WUFDL0YsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7Ozs7OztJQUdELFVBQVUsQ0FBQyxTQUFrQjtRQUMzQixJQUFJO1lBQ0YsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQzFDO2lCQUNJO2dCQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUMxQztTQUNGO1FBQ0QsT0FBTSxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFVBQVU7Ozs7O0lBT2pCLDBDQUE0Qjs7SUFDNUIsd0NBQW9DOztJQUNwQyxrQ0FBNEI7Ozs7O0lBRzFCLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTZXJ2aWNlIHtcclxuXHJcbiAgcGVuZGluZ1JlcXVlc3RzOiBudW1iZXIgPSAwO1xyXG4gIGNvbnRhaW5lck5hbWUgPSAncHJvZ3Jlc3NDb250YWluZXInO1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdEZWZhdWx0IGVsZW1lbnQgZm9yIHByb2dyZXNzIHNwaW5uZXIgPSBcIicgKyB0aGlzLmNvbnRhaW5lck5hbWUgKyAnXCInKTtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJOYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQcm9ncmVzcyBzcGlubmVyIGVsZW1lbnQgbm90IGZvdW5kLiAgRW5zdXJlIGVsZW1lbnQgaXMgaW5jbHVkZWQgaW4gZG9jdW1lbnQuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0QnVzeShpc0J1c3k6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0J1c3kpIHtcclxuICAgICAgLy9LZWVwIHRyYWNrIG9mIGhvdyBtYW55IHJlcXVlc3RzIHRoZXJlIGhhdmUgYmVlbiB0byBzaG93IHRoZSBidXN5IG1lc3NhZ2UuXHJcbiAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzKys7XHJcbiAgICAgIC8vSWYgZm9yY2UgaXMgdHJ1ZSBzaG93IHRoZSBidXN5IG1lc3NhZ2UgaW1tZWRpYXRlbHkuXHJcbiAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvL0tlZXAgdHJhY2sgb2YgaG93IG1hbnkgcmVxdWVzdHMgdGhlcmUgaGF2ZSBiZWVuIHRvIGhpZGUgdGhlIGJ1c3kgbWVzc2FnZS5cclxuICAgICAgaWYgKHRoaXMucGVuZGluZ1JlcXVlc3RzID4gMCkge1xyXG4gICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLS07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vSWYgdGhlcmUgaXMgbm8gbW9yZSBvdXRzdGFuZGluZyBidXN5IHJlcXVlc3RzIG9yIGlmIGZvcmNlIGlzIHRydWUgdGhlbiBoaWRlIHRoZSBidXN5IG1lc3NhZ2UuXHJcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdSZXF1ZXN0cyA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cyA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQ29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgYnVzeSBtZXNzYWdlIGRpdi5cclxuICBzZXRWaXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS53YXJuKCdVbmFibGUgdG8gZGlzcGxheSBzcGlubmVyLiAgSXMgXCJhZ3MtbGliLXByb2dyZXNzXCIgY29tcG9uZW50IGluY2x1ZGVkPycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=