/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
import moment from 'moment-es6';
import * as _ from 'lodash';
// you can get more validators from here https://github.com/yuyang041060120/ng2-validation
// this validator must be applied to a FormGroup because it is comparing 2 controls
/**
 * @param {?} startDateControlString
 * @param {?} endDateControlString
 * @return {?}
 */
function dateRangeValidator(startDateControlString, endDateControlString) {
    return function (group) {
        /** @type {?} */
        var startDateControl = group.controls[startDateControlString];
        /** @type {?} */
        var endDateControl = group.controls[endDateControlString];
        // tslint:disable-next-line:max-line-length
        // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> DateRangeValidator(${startDateControlString}, ${endDateControlString}): from.value = ${startDateControl.value}, to.value = ${endDateControl.value}`);
        if (moment(startDateControl.value).isAfter(endDateControl.value)) {
            return { 'dateRange': true };
        }
        return null;
    };
}
/**
 * @param {?} compareControlString
 * @return {?}
 */
function dateLessThanValidator(compareControlString) {
    return function (control) {
        if (!control.parent) {
            return;
        }
        /** @type {?} */
        var compareDateControl = control.parent.controls[compareControlString];
        // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> DateLessThanValidator(${compareControlString}): from.value = ${thisDateControl.value}, to.value = ${compareDateControl.value}`);
        if (moment(control.value).isAfter(compareDateControl.value)) {
            return { 'dateLessThan': true };
        }
        return null;
    };
}
/**
 * @param {?} compareControlString
 * @return {?}
 */
function dateGreaterThanValidator(compareControlString) {
    return function (control) {
        if (!control.parent) {
            return;
        }
        /** @type {?} */
        var compareDateControl = control.parent.controls[compareControlString];
        // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> DateGreaterThanValidator(${compareControlString}): from.value = ${thisDateControl.value}, to.value = ${compareDateControl.value}`);
        if (moment(control.value).isBefore(compareDateControl.value)) {
            return { 'dateGreaterThan': true };
        }
        return null;
    };
}
/**
 * @param {?} maxLines
 * @return {?}
 */
function maxNumLinesValidator(maxLines) {
    return function (control) {
        if (_.isNil(maxLines) || !_.isNil(Validators.required(control))) {
            return null;
        }
        /** @type {?} */
        var numLines = ((/** @type {?} */ (control.value))).split('\n').length;
        if (numLines > maxLines) {
            return { 'maxNumLines': true };
        }
        return null;
    };
}
/**
 * @param {?} ltParam
 * @return {?}
 */
function lt(ltParam) {
    return function (control) {
        if (_.isNil(ltParam) || !_.isNil(Validators.required(control))) {
            return null;
        }
        /** @type {?} */
        var v = +control.value;
        return v < +ltParam ? null : { lt: true };
    };
}
/** @type {?} */
export var CustomValidators = {
    dateRangeValidator: dateRangeValidator,
    dateLessThanValidator: dateLessThanValidator,
    dateGreaterThanValidator: dateGreaterThanValidator,
    maxNumLinesValidator: maxNumLinesValidator,
    lt: lt
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9vdGhlci92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTJDLFVBQVUsRUFBaUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLE1BQU0sTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0FBTTVCLFNBQVMsa0JBQWtCLENBQUMsc0JBQThCLEVBQUUsb0JBQTRCO0lBQ3BGLE9BQU8sVUFBQyxLQUFnQjs7WUFDaEIsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQzs7WUFDekQsY0FBYyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7UUFDekQsMkNBQTJDO1FBQzNDLGlNQUFpTTtRQUNqTSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsb0JBQTRCO0lBQ3ZELE9BQU8sVUFBQyxPQUF3QjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTs7WUFDNUIsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7UUFDdEUsNEtBQTRLO1FBQzVLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNuQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7O0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxvQkFBNEI7SUFDMUQsT0FBTyxVQUFDLE9BQXdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUM1QixrQkFBa0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUN0RSwrS0FBK0s7UUFDL0ssSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMsb0JBQW9CLENBQUMsUUFBZ0I7SUFDMUMsT0FBTyxVQUFDLE9BQXdCO1FBQzVCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1lBRUcsUUFBUSxHQUFHLENBQUMsbUJBQUEsT0FBTyxDQUFDLEtBQUssRUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07UUFDM0QsSUFBSSxRQUFRLEdBQUcsUUFBUSxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMsRUFBRSxDQUFDLE9BQWU7SUFDdkIsT0FBTyxVQUFDLE9BQXdCO1FBQzVCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1lBRUcsQ0FBQyxHQUFXLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUc7SUFDNUIsa0JBQWtCLG9CQUFBO0lBQ2xCLHFCQUFxQix1QkFBQTtJQUNyQix3QkFBd0IsMEJBQUE7SUFDeEIsb0JBQW9CLHNCQUFBO0lBQ3BCLEVBQUUsSUFBQTtDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC1lczYnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vLyB5b3UgY2FuIGdldCBtb3JlIHZhbGlkYXRvcnMgZnJvbSBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS95dXlhbmcwNDEwNjAxMjAvbmcyLXZhbGlkYXRpb25cclxuXHJcblxyXG4vLyB0aGlzIHZhbGlkYXRvciBtdXN0IGJlIGFwcGxpZWQgdG8gYSBGb3JtR3JvdXAgYmVjYXVzZSBpdCBpcyBjb21wYXJpbmcgMiBjb250cm9sc1xyXG5mdW5jdGlvbiBkYXRlUmFuZ2VWYWxpZGF0b3Ioc3RhcnREYXRlQ29udHJvbFN0cmluZzogc3RyaW5nLCBlbmREYXRlQ29udHJvbFN0cmluZzogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcclxuICAgICAgICBsZXQgc3RhcnREYXRlQ29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW3N0YXJ0RGF0ZUNvbnRyb2xTdHJpbmddO1xyXG4gICAgICAgIGxldCBlbmREYXRlQ29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW2VuZERhdGVDb250cm9sU3RyaW5nXTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PiBEYXRlUmFuZ2VWYWxpZGF0b3IoJHtzdGFydERhdGVDb250cm9sU3RyaW5nfSwgJHtlbmREYXRlQ29udHJvbFN0cmluZ30pOiBmcm9tLnZhbHVlID0gJHtzdGFydERhdGVDb250cm9sLnZhbHVlfSwgdG8udmFsdWUgPSAke2VuZERhdGVDb250cm9sLnZhbHVlfWApO1xyXG4gICAgICAgIGlmIChtb21lbnQoc3RhcnREYXRlQ29udHJvbC52YWx1ZSkuaXNBZnRlcihlbmREYXRlQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2RhdGVSYW5nZSc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRlTGVzc1RoYW5WYWxpZGF0b3IoY29tcGFyZUNvbnRyb2xTdHJpbmc6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wucGFyZW50KSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBjb21wYXJlRGF0ZUNvbnRyb2wgPSBjb250cm9sLnBhcmVudC5jb250cm9sc1tjb21wYXJlQ29udHJvbFN0cmluZ107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PiBEYXRlTGVzc1RoYW5WYWxpZGF0b3IoJHtjb21wYXJlQ29udHJvbFN0cmluZ30pOiBmcm9tLnZhbHVlID0gJHt0aGlzRGF0ZUNvbnRyb2wudmFsdWV9LCB0by52YWx1ZSA9ICR7Y29tcGFyZURhdGVDb250cm9sLnZhbHVlfWApO1xyXG4gICAgICAgIGlmIChtb21lbnQoY29udHJvbC52YWx1ZSkuaXNBZnRlcihjb21wYXJlRGF0ZUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdkYXRlTGVzc1RoYW4nOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZUdyZWF0ZXJUaGFuVmFsaWRhdG9yKGNvbXBhcmVDb250cm9sU3RyaW5nOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnBhcmVudCkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgY29tcGFyZURhdGVDb250cm9sID0gY29udHJvbC5wYXJlbnQuY29udHJvbHNbY29tcGFyZUNvbnRyb2xTdHJpbmddO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGA+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4gRGF0ZUdyZWF0ZXJUaGFuVmFsaWRhdG9yKCR7Y29tcGFyZUNvbnRyb2xTdHJpbmd9KTogZnJvbS52YWx1ZSA9ICR7dGhpc0RhdGVDb250cm9sLnZhbHVlfSwgdG8udmFsdWUgPSAke2NvbXBhcmVEYXRlQ29udHJvbC52YWx1ZX1gKTtcclxuICAgICAgICBpZiAobW9tZW50KGNvbnRyb2wudmFsdWUpLmlzQmVmb3JlKGNvbXBhcmVEYXRlQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2RhdGVHcmVhdGVyVGhhbic6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXhOdW1MaW5lc1ZhbGlkYXRvcihtYXhMaW5lczogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmIChfLmlzTmlsKG1heExpbmVzKSB8fCAhXy5pc05pbChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG51bUxpbmVzID0gKGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nKS5zcGxpdCgnXFxuJykubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdtYXhOdW1MaW5lcyc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsdChsdFBhcmFtOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0+IHtcclxuICAgICAgICBpZiAoXy5pc05pbChsdFBhcmFtKSB8fCAhXy5pc05pbChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2OiBudW1iZXIgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICByZXR1cm4gdiA8ICtsdFBhcmFtID8gbnVsbCA6IHsgbHQ6IHRydWUgfTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21WYWxpZGF0b3JzID0ge1xyXG4gICAgZGF0ZVJhbmdlVmFsaWRhdG9yLFxyXG4gICAgZGF0ZUxlc3NUaGFuVmFsaWRhdG9yLFxyXG4gICAgZGF0ZUdyZWF0ZXJUaGFuVmFsaWRhdG9yLFxyXG4gICAgbWF4TnVtTGluZXNWYWxpZGF0b3IsXHJcbiAgICBsdFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==