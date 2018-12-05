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
var HeaderService = /** @class */ (function () {
    function HeaderService(titleService) {
        this.titleService = titleService;
        this._headerPrimaryTitle = '';
        this._headerSubTitle = '';
        this.headerTitle = new BehaviorSubject(titleService.getTitle());
        this.breadcrumb = new BehaviorSubject({});
    }
    Object.defineProperty(HeaderService.prototype, "headerPrimaryTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._headerPrimaryTitle = value;
            this.titleService.setTitle(value + ' - ' + this.appName); // this is what gets displayed in the browser tab
            this.updateHeaderTitle();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderService.prototype, "headerSubTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._headerSubTitle = value;
            this.updateHeaderTitle();
            this.updateBreadcrumb();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} appName
     * @return {?}
     */
    HeaderService.prototype.init = /**
     * @param {?} appName
     * @return {?}
     */
    function (appName) {
        this.appName = appName;
    };
    // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
    // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
    /**
     * @return {?}
     */
    HeaderService.prototype.updateHeaderTitle = 
    // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var title = this._headerPrimaryTitle;
        if (this._headerSubTitle) {
            title += ' [' + this._headerSubTitle + ']';
        }
        this.headerTitle.next(title);
    };
    /*
     * Updates the breadcrumb when the title is updated.
     *
     * @returns {object} An object consisting of the primary title, and the subtitle
     */
    /*
       * Updates the breadcrumb when the title is updated.
       *
       * @returns {object} An object consisting of the primary title, and the subtitle
       */
    /**
     * @return {?}
     */
    HeaderService.prototype.updateBreadcrumb = /*
       * Updates the breadcrumb when the title is updated.
       *
       * @returns {object} An object consisting of the primary title, and the subtitle
       */
    /**
     * @return {?}
     */
    function () {
        this.breadcrumb.next({
            primaryTitle: this._headerPrimaryTitle,
            subtitle: this._headerSubTitle,
        });
    };
    HeaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HeaderService.ctorParameters = function () { return [
        { type: Title }
    ]; };
    /** @nocollapse */ HeaderService.ngInjectableDef = i0.defineInjectable({ factory: function HeaderService_Factory() { return new HeaderService(i0.inject(i1.Title)); }, token: HeaderService, providedIn: "root" });
    return HeaderService;
}());
export { HeaderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRXZDO0lBdUJFLHVCQUFvQixZQUFtQjtRQUFuQixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQWYvQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFlM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBUyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFmRCxzQkFBVyw2Q0FBa0I7Ozs7O1FBQTdCLFVBQThCLEtBQUs7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlEQUFpRDtZQUMzRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFjOzs7OztRQUF6QixVQUEwQixLQUFLO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7OztJQU9ELDRCQUFJOzs7O0lBQUosVUFBSyxPQUFlO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnRkFBZ0Y7Ozs7O0lBQ2hGLHlDQUFpQjs7Ozs7SUFBakI7O1lBQ00sS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7O0lBQ0gsd0NBQWdCOzs7Ozs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxLQUFLOzs7d0JBUGQ7Q0E4REMsQUFwREQsSUFvREM7U0FqRFksYUFBYTs7O0lBRXhCLGdDQUF1Qjs7SUFDdkIsb0NBQTRDOztJQUM1QyxtQ0FBMkM7Ozs7O0lBQzNDLDRDQUFpQzs7Ozs7SUFDakMsd0NBQTZCOzs7OztJQWNqQixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGFwcE5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgaGVhZGVyVGl0bGU6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xyXG4gIHB1YmxpYyBicmVhZGNydW1iOiBCZWhhdmlvclN1YmplY3Q8b2JqZWN0PjtcclxuICBwcml2YXRlIF9oZWFkZXJQcmltYXJ5VGl0bGUgPSAnJztcclxuICBwcml2YXRlIF9oZWFkZXJTdWJUaXRsZSA9ICcnO1xyXG5cclxuICBwdWJsaWMgc2V0IGhlYWRlclByaW1hcnlUaXRsZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5faGVhZGVyUHJpbWFyeVRpdGxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh2YWx1ZSArICcgLSAnICsgdGhpcy5hcHBOYW1lKTsgLy8gdGhpcyBpcyB3aGF0IGdldHMgZGlzcGxheWVkIGluIHRoZSBicm93c2VyIHRhYlxyXG4gICAgdGhpcy51cGRhdGVIZWFkZXJUaXRsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBoZWFkZXJTdWJUaXRsZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5faGVhZGVyU3ViVGl0bGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSGVhZGVyVGl0bGUoKTtcclxuICAgIHRoaXMudXBkYXRlQnJlYWRjcnVtYigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7XHJcbiAgICB0aGlzLmhlYWRlclRpdGxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHRpdGxlU2VydmljZS5nZXRUaXRsZSgpKTtcclxuICAgIHRoaXMuYnJlYWRjcnVtYiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8b2JqZWN0Pih7fSk7XHJcbiAgfVxyXG5cclxuICBpbml0KGFwcE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5hcHBOYW1lID0gYXBwTmFtZTtcclxuICB9XHJcblxyXG4gIC8vIHNlZSBodHRwczovL2tlbmRhbGVpdi5jb20vc3Vic2NyaWJpbmctdG8tYnJvd3Nlci10aXRsZS1jaGFuZ2VzLXVzaW5nLWFuZ3VsYXIvXHJcbiAgdXBkYXRlSGVhZGVyVGl0bGUoKSB7XHJcbiAgICBsZXQgdGl0bGUgPSB0aGlzLl9oZWFkZXJQcmltYXJ5VGl0bGU7XHJcbiAgICBpZiAodGhpcy5faGVhZGVyU3ViVGl0bGUpIHtcclxuICAgICAgdGl0bGUgKz0gJyBbJyArIHRoaXMuX2hlYWRlclN1YlRpdGxlICsgJ10nO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oZWFkZXJUaXRsZS5uZXh0KHRpdGxlKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogVXBkYXRlcyB0aGUgYnJlYWRjcnVtYiB3aGVuIHRoZSB0aXRsZSBpcyB1cGRhdGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge29iamVjdH0gQW4gb2JqZWN0IGNvbnNpc3Rpbmcgb2YgdGhlIHByaW1hcnkgdGl0bGUsIGFuZCB0aGUgc3VidGl0bGVcclxuICAgKi9cclxuICB1cGRhdGVCcmVhZGNydW1iKCkge1xyXG4gICAgdGhpcy5icmVhZGNydW1iLm5leHQoe1xyXG4gICAgICBwcmltYXJ5VGl0bGU6IHRoaXMuX2hlYWRlclByaW1hcnlUaXRsZSxcclxuICAgICAgc3VidGl0bGU6IHRoaXMuX2hlYWRlclN1YlRpdGxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==