/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Expose, classToPlain } from 'class-transformer';
var Annotation = /** @class */ (function () {
    function Annotation(json) {
        this.userLogon = '';
        this.lastUpdated = '';
        this.id = '';
        this.objectId = '';
        this.annotationType = '';
        this.noteType = '';
        this.narrative = '';
        this.confidence = 0;
        if (json) {
            this.userLogon = json.userLogon;
            this.lastUpdated = json.lastUpdated;
            this.id = json.annotationId;
            this.objectId = json.objectId;
            this.annotationType = json.annotationType;
            this.noteType = json.noteType;
            this.narrative = json.narrative;
            this.confidence = json.confidence;
        }
    }
    /**
     * @return {?}
     */
    Annotation.prototype.serialize = /**
     * @return {?}
     */
    function () {
        return classToPlain(this);
    };
    tslib_1.__decorate([
        Expose({ name: 'annotationId' }),
        tslib_1.__metadata("design:type", String)
    ], Annotation.prototype, "id", void 0);
    return Annotation;
}());
export { Annotation };
if (false) {
    /** @type {?} */
    Annotation.prototype.userLogon;
    /** @type {?} */
    Annotation.prototype.lastUpdated;
    /** @type {?} */
    Annotation.prototype.id;
    /** @type {?} */
    Annotation.prototype.objectId;
    /** @type {?} */
    Annotation.prototype.annotationType;
    /** @type {?} */
    Annotation.prototype.noteType;
    /** @type {?} */
    Annotation.prototype.narrative;
    /** @type {?} */
    Annotation.prototype.confidence;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYW5ub3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQ7SUFZRSxvQkFBWSxJQUFVO1FBWHBCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBSXZCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFFRCw4QkFBUzs7O0lBQVQ7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBdkJDO1FBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDOzswQ0FDZjtJQXdCcEIsaUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSxVQUFVOzs7SUFDbkIsK0JBQXVCOztJQUN2QixpQ0FBeUI7O0lBQ3pCLHdCQUNnQjs7SUFDaEIsOEJBQXNCOztJQUN0QixvQ0FBNEI7O0lBQzVCLDhCQUFzQjs7SUFDdEIsK0JBQXVCOztJQUN2QixnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEV4cG9zZSwgY2xhc3NUb1BsYWluIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbiB7XHJcbiAgICB1c2VyTG9nb246IHN0cmluZyA9ICcnO1xyXG4gICAgbGFzdFVwZGF0ZWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQEV4cG9zZSh7bmFtZTogJ2Fubm90YXRpb25JZCd9KVxyXG4gICAgaWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgb2JqZWN0SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgYW5ub3RhdGlvblR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbm90ZVR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbmFycmF0aXZlOiBzdHJpbmcgPSAnJztcclxuICAgIGNvbmZpZGVuY2U6XHRudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgaWYgKGpzb24pIHtcclxuICAgICAgdGhpcy51c2VyTG9nb24gPSBqc29uLnVzZXJMb2dvbjtcclxuICAgICAgdGhpcy5sYXN0VXBkYXRlZCA9IGpzb24ubGFzdFVwZGF0ZWQ7XHJcbiAgICAgIHRoaXMuaWQgPSBqc29uLmFubm90YXRpb25JZDtcclxuICAgICAgdGhpcy5vYmplY3RJZCA9IGpzb24ub2JqZWN0SWQ7XHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvblR5cGUgPSBqc29uLmFubm90YXRpb25UeXBlO1xyXG4gICAgICB0aGlzLm5vdGVUeXBlID0ganNvbi5ub3RlVHlwZTtcclxuICAgICAgdGhpcy5uYXJyYXRpdmUgPSBqc29uLm5hcnJhdGl2ZTtcclxuICAgICAgdGhpcy5jb25maWRlbmNlID0ganNvbi5jb25maWRlbmNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VyaWFsaXplKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzVG9QbGFpbih0aGlzKTtcclxuICB9XHJcbn1cclxuIl19