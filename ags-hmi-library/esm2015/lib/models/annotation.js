/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Expose, classToPlain } from 'class-transformer';
export class Annotation {
    /**
     * @param {?=} json
     */
    constructor(json) {
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
    serialize() {
        return classToPlain(this);
    }
}
tslib_1.__decorate([
    Expose({ name: 'annotationId' }),
    tslib_1.__metadata("design:type", String)
], Annotation.prototype, "id", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYW5ub3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFZckIsWUFBWSxJQUFVO1FBWHBCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBSXZCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBeEJHO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDOztzQ0FDZjs7O0lBSGhCLCtCQUF1Qjs7SUFDdkIsaUNBQXlCOztJQUN6Qix3QkFDZ0I7O0lBQ2hCLDhCQUFzQjs7SUFDdEIsb0NBQTRCOztJQUM1Qiw4QkFBc0I7O0lBQ3RCLCtCQUF1Qjs7SUFDdkIsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBFeHBvc2UsIGNsYXNzVG9QbGFpbiB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb24ge1xyXG4gICAgdXNlckxvZ29uOiBzdHJpbmcgPSAnJztcclxuICAgIGxhc3RVcGRhdGVkOiBzdHJpbmcgPSAnJztcclxuICAgIEBFeHBvc2Uoe25hbWU6ICdhbm5vdGF0aW9uSWQnfSlcclxuICAgIGlkOiBzdHJpbmcgPSAnJztcclxuICAgIG9iamVjdElkOiBzdHJpbmcgPSAnJztcclxuICAgIGFubm90YXRpb25UeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIG5vdGVUeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIG5hcnJhdGl2ZTogc3RyaW5nID0gJyc7XHJcbiAgICBjb25maWRlbmNlOlx0bnVtYmVyID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgIGlmIChqc29uKSB7XHJcbiAgICAgIHRoaXMudXNlckxvZ29uID0ganNvbi51c2VyTG9nb247XHJcbiAgICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBqc29uLmxhc3RVcGRhdGVkO1xyXG4gICAgICB0aGlzLmlkID0ganNvbi5hbm5vdGF0aW9uSWQ7XHJcbiAgICAgIHRoaXMub2JqZWN0SWQgPSBqc29uLm9iamVjdElkO1xyXG4gICAgICB0aGlzLmFubm90YXRpb25UeXBlID0ganNvbi5hbm5vdGF0aW9uVHlwZTtcclxuICAgICAgdGhpcy5ub3RlVHlwZSA9IGpzb24ubm90ZVR5cGU7XHJcbiAgICAgIHRoaXMubmFycmF0aXZlID0ganNvbi5uYXJyYXRpdmU7XHJcbiAgICAgIHRoaXMuY29uZmlkZW5jZSA9IGpzb24uY29uZmlkZW5jZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlcmlhbGl6ZSgpIHtcclxuICAgIHJldHVybiBjbGFzc1RvUGxhaW4odGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==