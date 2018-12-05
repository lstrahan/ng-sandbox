/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class HeaderService {
    /**
     * @param {?} titleService
     */
    constructor(titleService) {
        this.titleService = titleService;
        this._headerPrimaryTitle = '';
        this._headerSubTitle = '';
        this.headerTitle = new BehaviorSubject(titleService.getTitle());
        this.breadcrumb = new BehaviorSubject({});
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set headerPrimaryTitle(value) {
        this._headerPrimaryTitle = value;
        this.titleService.setTitle(value + ' - ' + this.appName); // this is what gets displayed in the browser tab
        this.updateHeaderTitle();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set headerSubTitle(value) {
        this._headerSubTitle = value;
        this.updateHeaderTitle();
        this.updateBreadcrumb();
    }
    /**
     * @param {?} appName
     * @return {?}
     */
    init(appName) {
        this.appName = appName;
    }
    // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
    /**
     * @return {?}
     */
    updateHeaderTitle() {
        /** @type {?} */
        let title = this._headerPrimaryTitle;
        if (this._headerSubTitle) {
            title += ' [' + this._headerSubTitle + ']';
        }
        this.headerTitle.next(title);
    }
    /*
       * Updates the breadcrumb when the title is updated.
       *
       * @returns {object} An object consisting of the primary title, and the subtitle
       */
    /**
     * @return {?}
     */
    updateBreadcrumb() {
        this.breadcrumb.next({
            primaryTitle: this._headerPrimaryTitle,
            subtitle: this._headerSubTitle,
        });
    }
}
HeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HeaderService.ctorParameters = () => [
    { type: Title }
];
/** @nocollapse */ HeaderService.ngInjectableDef = i0.defineInjectable({ factory: function HeaderService_Factory() { return new HeaderService(i0.inject(i1.Title)); }, token: HeaderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HeaderService.prototype.appName;
    /** @type {?} */
    HeaderService.prototype.headerTitle;
    /** @type {?} */
    HeaderService.prototype.breadcrumb;
    /**
     * @type {?}
     * @private
     */
    HeaderService.prototype._headerPrimaryTitle;
    /**
     * @type {?}
     * @private
     */
    HeaderService.prototype._headerSubTitle;
    /**
     * @type {?}
     * @private
     */
    HeaderService.prototype.titleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxhQUFhOzs7O0lBb0J4QixZQUFvQixZQUFtQjtRQUFuQixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQWYvQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFlM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBUyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBZkQsSUFBVyxrQkFBa0IsQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpREFBaUQ7UUFDM0csSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxJQUFXLGNBQWMsQ0FBQyxLQUFLO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBT0QsSUFBSSxDQUFDLE9BQWU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFHRCxpQkFBaUI7O1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7Ozs7SUFPRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQixZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLEtBQUs7Ozs7O0lBUVosZ0NBQXVCOztJQUN2QixvQ0FBNEM7O0lBQzVDLG1DQUEyQzs7Ozs7SUFDM0MsNENBQWlDOzs7OztJQUNqQyx3Q0FBNkI7Ozs7O0lBY2pCLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgVGhlIEJvZWluZyBDb21wYW55XHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBCb2VpbmcgQ29tcGFueSAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclNlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgYXBwTmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBoZWFkZXJUaXRsZTogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XHJcbiAgcHVibGljIGJyZWFkY3J1bWI6IEJlaGF2aW9yU3ViamVjdDxvYmplY3Q+O1xyXG4gIHByaXZhdGUgX2hlYWRlclByaW1hcnlUaXRsZSA9ICcnO1xyXG4gIHByaXZhdGUgX2hlYWRlclN1YlRpdGxlID0gJyc7XHJcblxyXG4gIHB1YmxpYyBzZXQgaGVhZGVyUHJpbWFyeVRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9oZWFkZXJQcmltYXJ5VGl0bGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbHVlICsgJyAtICcgKyB0aGlzLmFwcE5hbWUpOyAvLyB0aGlzIGlzIHdoYXQgZ2V0cyBkaXNwbGF5ZWQgaW4gdGhlIGJyb3dzZXIgdGFiXHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRlclRpdGxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGhlYWRlclN1YlRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9oZWFkZXJTdWJUaXRsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVIZWFkZXJUaXRsZSgpO1xyXG4gICAgdGhpcy51cGRhdGVCcmVhZGNydW1iKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUpIHtcclxuICAgIHRoaXMuaGVhZGVyVGl0bGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odGl0bGVTZXJ2aWNlLmdldFRpdGxlKCkpO1xyXG4gICAgdGhpcy5icmVhZGNydW1iID0gbmV3IEJlaGF2aW9yU3ViamVjdDxvYmplY3Q+KHt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoYXBwTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFwcE5hbWUgPSBhcHBOYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8gc2VlIGh0dHBzOi8va2VuZGFsZWl2LmNvbS9zdWJzY3JpYmluZy10by1icm93c2VyLXRpdGxlLWNoYW5nZXMtdXNpbmctYW5ndWxhci9cclxuICB1cGRhdGVIZWFkZXJUaXRsZSgpIHtcclxuICAgIGxldCB0aXRsZSA9IHRoaXMuX2hlYWRlclByaW1hcnlUaXRsZTtcclxuICAgIGlmICh0aGlzLl9oZWFkZXJTdWJUaXRsZSkge1xyXG4gICAgICB0aXRsZSArPSAnIFsnICsgdGhpcy5faGVhZGVyU3ViVGl0bGUgKyAnXSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlYWRlclRpdGxlLm5leHQodGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBVcGRhdGVzIHRoZSBicmVhZGNydW1iIHdoZW4gdGhlIHRpdGxlIGlzIHVwZGF0ZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3QgY29uc2lzdGluZyBvZiB0aGUgcHJpbWFyeSB0aXRsZSwgYW5kIHRoZSBzdWJ0aXRsZVxyXG4gICAqL1xyXG4gIHVwZGF0ZUJyZWFkY3J1bWIoKSB7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWIubmV4dCh7XHJcbiAgICAgIHByaW1hcnlUaXRsZTogdGhpcy5faGVhZGVyUHJpbWFyeVRpdGxlLFxyXG4gICAgICBzdWJ0aXRsZTogdGhpcy5faGVhZGVyU3ViVGl0bGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19