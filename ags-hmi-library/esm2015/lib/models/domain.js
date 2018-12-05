/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Domain {
    /**
     * @param {?=} json
     */
    constructor(json) {
        this.domainType = '';
        this.agsEntityId = '';
        this.sccNum = '';
        this.orbitType = '';
        this.constellation = '';
        this.intlDesignator = '';
        this.launchSite = '';
        this.launchDate = '';
        this.decayDate = '';
        if (json) {
            this.domainType = json.domainType;
            this.agsEntityId = json.agsEntityId;
            this.sccNum = json.sccNum;
            this.orbitType = json.orbitType;
            this.constellation = json.constellation;
            this.intlDesignator = json.intlDesignator;
            this.launchSite = json.launchSite;
            this.launchDate = json.launchDate;
            this.decayDate = json.decayDate;
            this.tles = json.tles;
            this.waypoints = json.waypoints;
        }
        else {
            this.domainType = 'SPACE';
        }
    }
}
if (false) {
    /** @type {?} */
    Domain.prototype.domainType;
    /** @type {?} */
    Domain.prototype.agsEntityId;
    /** @type {?} */
    Domain.prototype.sccNum;
    /** @type {?} */
    Domain.prototype.orbitType;
    /** @type {?} */
    Domain.prototype.constellation;
    /** @type {?} */
    Domain.prototype.intlDesignator;
    /** @type {?} */
    Domain.prototype.launchSite;
    /** @type {?} */
    Domain.prototype.launchDate;
    /** @type {?} */
    Domain.prototype.decayDate;
    /** @type {?} */
    Domain.prototype.tles;
    /** @type {?} */
    Domain.prototype.waypoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9kb21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxNQUFNOzs7O0lBYWYsWUFBWSxJQUFVO1FBWnRCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBS25CLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNuQzthQUNJO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDN0I7SUFDTCxDQUFDO0NBQ0o7OztJQTlCRyw0QkFBd0I7O0lBQ3hCLDZCQUF5Qjs7SUFDekIsd0JBQW9COztJQUNwQiwyQkFBdUI7O0lBQ3ZCLCtCQUEyQjs7SUFDM0IsZ0NBQTRCOztJQUM1Qiw0QkFBd0I7O0lBQ3hCLDRCQUF3Qjs7SUFDeEIsMkJBQXVCOztJQUN2QixzQkFBWTs7SUFDWiwyQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRG9tYWluIHtcclxuICAgIGRvbWFpblR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgYWdzRW50aXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgc2NjTnVtOiBzdHJpbmcgPSAnJztcclxuICAgIG9yYml0VHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdGVsbGF0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGludGxEZXNpZ25hdG9yOiBzdHJpbmcgPSAnJztcclxuICAgIGxhdW5jaFNpdGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGF1bmNoRGF0ZTogc3RyaW5nID0gJyc7XHJcbiAgICBkZWNheURhdGU6IHN0cmluZyA9ICcnO1xyXG4gICAgdGxlczogYW55W107XHJcbiAgICB3YXlwb2ludHM6IGFueVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSBqc29uLmRvbWFpblR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuYWdzRW50aXR5SWQgPSBqc29uLmFnc0VudGl0eUlkO1xyXG4gICAgICAgICAgICB0aGlzLnNjY051bSA9IGpzb24uc2NjTnVtO1xyXG4gICAgICAgICAgICB0aGlzLm9yYml0VHlwZSA9IGpzb24ub3JiaXRUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0ZWxsYXRpb24gPSBqc29uLmNvbnN0ZWxsYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuaW50bERlc2lnbmF0b3IgPSBqc29uLmludGxEZXNpZ25hdG9yO1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaFNpdGUgPSBqc29uLmxhdW5jaFNpdGU7XHJcbiAgICAgICAgICAgIHRoaXMubGF1bmNoRGF0ZSA9IGpzb24ubGF1bmNoRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5kZWNheURhdGUgPSBqc29uLmRlY2F5RGF0ZTtcclxuICAgICAgICAgICAgdGhpcy50bGVzID0ganNvbi50bGVzO1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cyA9IGpzb24ud2F5cG9pbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kb21haW5UeXBlID0gJ1NQQUNFJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19