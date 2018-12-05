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
    return (group) => {
        /** @type {?} */
        let startDateControl = group.controls[startDateControlString];
        /** @type {?} */
        let endDateControl = group.controls[endDateControlString];
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
    return (control) => {
        if (!control.parent) {
            return;
        }
        /** @type {?} */
        let compareDateControl = control.parent.controls[compareControlString];
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
    return (control) => {
        if (!control.parent) {
            return;
        }
        /** @type {?} */
        let compareDateControl = control.parent.controls[compareControlString];
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
    return (control) => {
        if (_.isNil(maxLines) || !_.isNil(Validators.required(control))) {
            return null;
        }
        /** @type {?} */
        let numLines = ((/** @type {?} */ (control.value))).split('\n').length;
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
    return (control) => {
        if (_.isNil(ltParam) || !_.isNil(Validators.required(control))) {
            return null;
        }
        /** @type {?} */
        let v = +control.value;
        return v < +ltParam ? null : { lt: true };
    };
}
/** @type {?} */
export const CustomValidators = {
    dateRangeValidator,
    dateLessThanValidator,
    dateGreaterThanValidator,
    maxNumLinesValidator,
    lt
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9vdGhlci92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTJDLFVBQVUsRUFBaUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLE1BQU0sTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0FBTTVCLFNBQVMsa0JBQWtCLENBQUMsc0JBQThCLEVBQUUsb0JBQTRCO0lBQ3BGLE9BQU8sQ0FBQyxLQUFnQixFQUFxQyxFQUFFOztZQUN2RCxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDOztZQUN6RCxjQUFjLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCwyQ0FBMkM7UUFDM0MsaU1BQWlNO1FBQ2pNLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxvQkFBNEI7SUFDdkQsT0FBTyxDQUFDLE9BQXdCLEVBQXFDLEVBQUU7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1lBQzVCLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1FBQ3RFLDRLQUE0SztRQUM1SyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMsd0JBQXdCLENBQUMsb0JBQTRCO0lBQzFELE9BQU8sQ0FBQyxPQUF3QixFQUFxQyxFQUFFO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUM1QixrQkFBa0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUN0RSwrS0FBK0s7UUFDL0ssSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDOzs7OztBQUVELFNBQVMsb0JBQW9CLENBQUMsUUFBZ0I7SUFDMUMsT0FBTyxDQUFDLE9BQXdCLEVBQXFDLEVBQUU7UUFDbkUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUM7U0FDZjs7WUFFRyxRQUFRLEdBQUcsQ0FBQyxtQkFBQSxPQUFPLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtRQUMzRCxJQUFJLFFBQVEsR0FBRyxRQUFRLEVBQUU7WUFDckIsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNsQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7O0FBRUQsU0FBUyxFQUFFLENBQUMsT0FBZTtJQUN2QixPQUFPLENBQUMsT0FBd0IsRUFBOEIsRUFBRTtRQUM1RCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQztTQUNmOztZQUVHLENBQUMsR0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUMsQ0FBQztBQUNOLENBQUM7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQixHQUFHO0lBQzVCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixFQUFFO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LWVzNic7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbi8vIHlvdSBjYW4gZ2V0IG1vcmUgdmFsaWRhdG9ycyBmcm9tIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL3l1eWFuZzA0MTA2MDEyMC9uZzItdmFsaWRhdGlvblxyXG5cclxuXHJcbi8vIHRoaXMgdmFsaWRhdG9yIG11c3QgYmUgYXBwbGllZCB0byBhIEZvcm1Hcm91cCBiZWNhdXNlIGl0IGlzIGNvbXBhcmluZyAyIGNvbnRyb2xzXHJcbmZ1bmN0aW9uIGRhdGVSYW5nZVZhbGlkYXRvcihzdGFydERhdGVDb250cm9sU3RyaW5nOiBzdHJpbmcsIGVuZERhdGVDb250cm9sU3RyaW5nOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGdyb3VwOiBGb3JtR3JvdXApOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydERhdGVDb250cm9sID0gZ3JvdXAuY29udHJvbHNbc3RhcnREYXRlQ29udHJvbFN0cmluZ107XHJcbiAgICAgICAgbGV0IGVuZERhdGVDb250cm9sID0gZ3JvdXAuY29udHJvbHNbZW5kRGF0ZUNvbnRyb2xTdHJpbmddO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+IERhdGVSYW5nZVZhbGlkYXRvcigke3N0YXJ0RGF0ZUNvbnRyb2xTdHJpbmd9LCAke2VuZERhdGVDb250cm9sU3RyaW5nfSk6IGZyb20udmFsdWUgPSAke3N0YXJ0RGF0ZUNvbnRyb2wudmFsdWV9LCB0by52YWx1ZSA9ICR7ZW5kRGF0ZUNvbnRyb2wudmFsdWV9YCk7XHJcbiAgICAgICAgaWYgKG1vbWVudChzdGFydERhdGVDb250cm9sLnZhbHVlKS5pc0FmdGVyKGVuZERhdGVDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnZGF0ZVJhbmdlJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVMZXNzVGhhblZhbGlkYXRvcihjb21wYXJlQ29udHJvbFN0cmluZzogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmICghY29udHJvbC5wYXJlbnQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IGNvbXBhcmVEYXRlQ29udHJvbCA9IGNvbnRyb2wucGFyZW50LmNvbnRyb2xzW2NvbXBhcmVDb250cm9sU3RyaW5nXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+IERhdGVMZXNzVGhhblZhbGlkYXRvcigke2NvbXBhcmVDb250cm9sU3RyaW5nfSk6IGZyb20udmFsdWUgPSAke3RoaXNEYXRlQ29udHJvbC52YWx1ZX0sIHRvLnZhbHVlID0gJHtjb21wYXJlRGF0ZUNvbnRyb2wudmFsdWV9YCk7XHJcbiAgICAgICAgaWYgKG1vbWVudChjb250cm9sLnZhbHVlKS5pc0FmdGVyKGNvbXBhcmVEYXRlQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2RhdGVMZXNzVGhhbic6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRlR3JlYXRlclRoYW5WYWxpZGF0b3IoY29tcGFyZUNvbnRyb2xTdHJpbmc6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wucGFyZW50KSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBjb21wYXJlRGF0ZUNvbnRyb2wgPSBjb250cm9sLnBhcmVudC5jb250cm9sc1tjb21wYXJlQ29udHJvbFN0cmluZ107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PiBEYXRlR3JlYXRlclRoYW5WYWxpZGF0b3IoJHtjb21wYXJlQ29udHJvbFN0cmluZ30pOiBmcm9tLnZhbHVlID0gJHt0aGlzRGF0ZUNvbnRyb2wudmFsdWV9LCB0by52YWx1ZSA9ICR7Y29tcGFyZURhdGVDb250cm9sLnZhbHVlfWApO1xyXG4gICAgICAgIGlmIChtb21lbnQoY29udHJvbC52YWx1ZSkuaXNCZWZvcmUoY29tcGFyZURhdGVDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnZGF0ZUdyZWF0ZXJUaGFuJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1heE51bUxpbmVzVmFsaWRhdG9yKG1heExpbmVzOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKF8uaXNOaWwobWF4TGluZXMpIHx8ICFfLmlzTmlsKFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbnVtTGluZXMgPSAoY29udHJvbC52YWx1ZSBhcyBzdHJpbmcpLnNwbGl0KCdcXG4nKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG51bUxpbmVzID4gbWF4TGluZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ21heE51bUxpbmVzJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGx0KGx0UGFyYW06IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPT4ge1xyXG4gICAgICAgIGlmIChfLmlzTmlsKGx0UGFyYW0pIHx8ICFfLmlzTmlsKFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHY6IG51bWJlciA9ICtjb250cm9sLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB2IDwgK2x0UGFyYW0gPyBudWxsIDogeyBsdDogdHJ1ZSB9O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbVZhbGlkYXRvcnMgPSB7XHJcbiAgICBkYXRlUmFuZ2VWYWxpZGF0b3IsXHJcbiAgICBkYXRlTGVzc1RoYW5WYWxpZGF0b3IsXHJcbiAgICBkYXRlR3JlYXRlclRoYW5WYWxpZGF0b3IsXHJcbiAgICBtYXhOdW1MaW5lc1ZhbGlkYXRvcixcclxuICAgIGx0XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19