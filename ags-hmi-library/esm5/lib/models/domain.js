/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Domain = /** @class */ (function () {
    function Domain(json) {
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
    return Domain;
}());
export { Domain };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9kb21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBYUksZ0JBQVksSUFBVTtRQVp0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUtuQixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbkM7YUFDSTtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDOzs7O0lBOUJHLDRCQUF3Qjs7SUFDeEIsNkJBQXlCOztJQUN6Qix3QkFBb0I7O0lBQ3BCLDJCQUF1Qjs7SUFDdkIsK0JBQTJCOztJQUMzQixnQ0FBNEI7O0lBQzVCLDRCQUF3Qjs7SUFDeEIsNEJBQXdCOztJQUN4QiwyQkFBdUI7O0lBQ3ZCLHNCQUFZOztJQUNaLDJCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEb21haW4ge1xyXG4gICAgZG9tYWluVHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBhZ3NFbnRpdHlJZDogc3RyaW5nID0gJyc7XHJcbiAgICBzY2NOdW06IHN0cmluZyA9ICcnO1xyXG4gICAgb3JiaXRUeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0ZWxsYXRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgaW50bERlc2lnbmF0b3I6IHN0cmluZyA9ICcnO1xyXG4gICAgbGF1bmNoU2l0ZTogc3RyaW5nID0gJyc7XHJcbiAgICBsYXVuY2hEYXRlOiBzdHJpbmcgPSAnJztcclxuICAgIGRlY2F5RGF0ZTogc3RyaW5nID0gJyc7XHJcbiAgICB0bGVzOiBhbnlbXTtcclxuICAgIHdheXBvaW50czogYW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tYWluVHlwZSA9IGpzb24uZG9tYWluVHlwZTtcclxuICAgICAgICAgICAgdGhpcy5hZ3NFbnRpdHlJZCA9IGpzb24uYWdzRW50aXR5SWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2NjTnVtID0ganNvbi5zY2NOdW07XHJcbiAgICAgICAgICAgIHRoaXMub3JiaXRUeXBlID0ganNvbi5vcmJpdFR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RlbGxhdGlvbiA9IGpzb24uY29uc3RlbGxhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5pbnRsRGVzaWduYXRvciA9IGpzb24uaW50bERlc2lnbmF0b3I7XHJcbiAgICAgICAgICAgIHRoaXMubGF1bmNoU2l0ZSA9IGpzb24ubGF1bmNoU2l0ZTtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2hEYXRlID0ganNvbi5sYXVuY2hEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLmRlY2F5RGF0ZSA9IGpzb24uZGVjYXlEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnRsZXMgPSBqc29uLnRsZXM7XHJcbiAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzID0ganNvbi53YXlwb2ludHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSAnU1BBQ0UnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=