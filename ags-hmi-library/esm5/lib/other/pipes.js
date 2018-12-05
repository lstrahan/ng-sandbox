/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
import { Pipe } from '@angular/core';
import moment from 'moment-es6';
import { DomSanitizer } from '@angular/platform-browser';
/*
This pipe will format a date and convert it to UTC unless 'forceUtc' parameter
is set to false. If the date is empty, null, or invalid it will return 'defaultVal'
*/
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    /**
     * @param {?} theDate
     * @param {?=} defaultVal
     * @param {?=} forceUtc
     * @return {?}
     */
    DateFormatPipe.prototype.transform = /**
     * @param {?} theDate
     * @param {?=} defaultVal
     * @param {?=} forceUtc
     * @return {?}
     */
    function (theDate, defaultVal, forceUtc) {
        if (defaultVal === void 0) { defaultVal = 'n/a'; }
        if (forceUtc === void 0) { forceUtc = true; }
        if (!moment(theDate).isValid()) {
            return defaultVal;
        }
        if (forceUtc) {
            return moment.utc(theDate).format(DateFormatPipe.format).toUpperCase();
        }
        else {
            return moment(theDate).format(DateFormatPipe.format + ' ZZ').toUpperCase();
        }
    };
    DateFormatPipe.format = 'YYYY-MM-DD HH:mm:ss';
    DateFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'agsDateFormat'
                },] }
    ];
    return DateFormatPipe;
}());
export { DateFormatPipe };
if (false) {
    /** @type {?} */
    DateFormatPipe.format;
}
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    /**
     * @param {?} s
     * @return {?}
     */
    TruncatePipe.prototype.transform = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        if (!s) {
            return '';
        }
        if (s.length < 100) {
            return s;
        }
        return s.slice(0, 99) + '...';
    };
    TruncatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'trunc'
                },] }
    ];
    return TruncatePipe;
}());
export { TruncatePipe };
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    /**
     * @param {?} array
     * @param {?=} asc
     * @return {?}
     */
    OrderByPipe.prototype.transform = /**
     * @param {?} array
     * @param {?=} asc
     * @return {?}
     */
    function (array, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (asc) { // ascending
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1, item2);
            });
        }
        else { // descending
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2, item1);
            });
        }
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderByPipe.prototype.orderByComparator = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        else {
            return 0;
        }
    };
    OrderByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'orderBy'
                },] }
    ];
    return OrderByPipe;
}());
export { OrderByPipe };
// NOTE:  Adds class "search-highlight" to span containing search term.
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @param {?} searchTerms
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} searchTerms
     * @return {?}
     */
    function (text, searchTerms) {
        if (searchTerms && text) {
            /** @type {?} */
            var s = searchTerms;
            if (Array.isArray(searchTerms)) {
                if (searchTerms.length === 0) {
                    return text;
                }
                s = searchTerms.join(' ');
            }
            /** @type {?} */
            var pattern = s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(function (t) {
                return t.length > 0;
            }).join('|');
            /** @type {?} */
            var regex = new RegExp(pattern, 'gi');
            text = text.replace(/ /g, '&nbsp');
            return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, function (match) { return "<span class=\"search-highlight\">" + match + "</span>"; }));
        }
        else {
            return text;
        }
    };
    HighlightPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'highlight'
                },] }
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return HighlightPipe;
}());
export { HighlightPipe };
if (false) {
    /** @type {?} */
    HighlightPipe.prototype.sanitizer;
}
// Removes an item from a list (array) of items.  Mostly used to remove a string
// from a list, it will also work to remove an object from a list of objects
// as long as there is a 'name' property on the object
var RemoveItemPipe = /** @class */ (function () {
    function RemoveItemPipe() {
    }
    // Returns an array of items
    // Returns an array of items
    /**
     * @param {?} items
     * @param {?} itemToRemove
     * @return {?}
     */
    RemoveItemPipe.prototype.transform = 
    // Returns an array of items
    /**
     * @param {?} items
     * @param {?} itemToRemove
     * @return {?}
     */
    function (items, itemToRemove) {
        if (!Array.isArray(items)) {
            return items;
        }
        if (Array.isArray(items) && items.length === 0) {
            return items;
        }
        if (typeof items[0] === 'string') {
            return items.filter(function (item) {
                return item.localeCompare(itemToRemove) !== 0;
            });
        }
        else if (items[0].hasOwnProperty('name') && itemToRemove.hasOwnProperty('name')) {
            return items.filter(function (item) {
                return item.name.localeCompare(itemToRemove.name) !== 0;
            });
        }
    };
    RemoveItemPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'remove'
                },] }
    ];
    return RemoveItemPipe;
}());
export { RemoveItemPipe };
/** @type {?} */
export var CustomPipes = {
    DateFormatPipe: DateFormatPipe,
    TruncatePipe: TruncatePipe,
    OrderByPipe: OrderByPipe,
    RemoveItemPipe: RemoveItemPipe
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvb3RoZXIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFNbkU7SUFBQTtJQWtCQSxDQUFDOzs7Ozs7O0lBWEMsa0NBQVM7Ozs7OztJQUFULFVBQVUsT0FBc0MsRUFBRSxVQUEwQixFQUFFLFFBQXdCO1FBQXBELDJCQUFBLEVBQUEsa0JBQTBCO1FBQUUseUJBQUEsRUFBQSxlQUF3QjtRQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlCLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4RTthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUU7SUFDSCxDQUFDO0lBWk0scUJBQU0sR0FBVyxxQkFBcUIsQ0FBQzs7Z0JBTC9DLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsZUFBZTtpQkFDdEI7O0lBZ0JELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSxjQUFjOzs7SUFFekIsc0JBQThDOztBQWVoRDtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFUQyxnQ0FBUzs7OztJQUFULFVBQVUsQ0FBUztRQUNqQixJQUFJLENBQUMs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Q0FBQztZQUFoRCxDQUFnRCxDQUNqRCxDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkF6QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmOztJQXlCRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO1NBeEJZLGNBQWM7O0FBMEIzQixNQUFNLEtBQU8sV0FBVyxHQUFHO0lBQ3pCLGNBQWMsZ0JBQUE7SUFDZCxZQUFZLGNBQUE7SUFDWixXQUFXLGFBQUE7SUFDWCxjQUFjLGdCQUFBO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtZXM2JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuLypcclxuVGhpcyBwaXBlIHdpbGwgZm9ybWF0IGEgZGF0ZSBhbmQgY29udmVydCBpdCB0byBVVEMgdW5sZXNzICdmb3JjZVV0YycgcGFyYW1ldGVyXHJcbmlzIHNldCB0byBmYWxzZS4gSWYgdGhlIGRhdGUgaXMgZW1wdHksIG51bGwsIG9yIGludmFsaWQgaXQgd2lsbCByZXR1cm4gJ2RlZmF1bHRWYWwnXHJcbiovXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYWdzRGF0ZUZvcm1hdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHN0YXRpYyBmb3JtYXQ6IHN0cmluZyA9ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcclxuXHJcbiAgdHJhbnNmb3JtKHRoZURhdGU6IG1vbWVudC5Nb21lbnQgfCBEYXRlIHwgc3RyaW5nLCBkZWZhdWx0VmFsOiBzdHJpbmcgPSAnbi9hJywgZm9yY2VVdGM6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcclxuICAgIGlmICghbW9tZW50KHRoZURhdGUpLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9yY2VVdGMpIHtcclxuICAgICAgcmV0dXJuIG1vbWVudC51dGModGhlRGF0ZSkuZm9ybWF0KERhdGVGb3JtYXRQaXBlLmZvcm1hdCkudG9VcHBlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtb21lbnQodGhlRGF0ZSkuZm9ybWF0KERhdGVGb3JtYXRQaXBlLmZvcm1hdCArICcgWlonKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cnVuYydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGlmIChzLmxlbmd0aCA8IDEwMCkge1xyXG4gICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHJldHVybiBzLnNsaWNlKDAsIDk5KSArICcuLi4nO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvcmRlckJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGFycmF5LCBhc2MgPSB0cnVlKSB7XHJcblxyXG4gICAgaWYgKGFzYykgeyAvLyBhc2NlbmRpbmdcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXkpLnNvcnQoKGl0ZW0xOiBzdHJpbmcsIGl0ZW0yOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckJ5Q29tcGFyYXRvcihpdGVtMSwgaXRlbTIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7IC8vIGRlc2NlbmRpbmdcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXkpLnNvcnQoKGl0ZW0xOiBzdHJpbmcsIGl0ZW0yOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckJ5Q29tcGFyYXRvcihpdGVtMiwgaXRlbTEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBvcmRlckJ5Q29tcGFyYXRvcihhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAoYS50b0xvd2VyQ2FzZSgpIDwgYi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoYS50b0xvd2VyQ2FzZSgpID4gYi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOT1RFOiAgQWRkcyBjbGFzcyBcInNlYXJjaC1oaWdobGlnaHRcIiB0byBzcGFuIGNvbnRhaW5pbmcgc2VhcmNoIHRlcm0uXHJcbkBQaXBlKHtcclxuICAgbmFtZTogJ2hpZ2hsaWdodCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XHJcblxyXG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHNlYXJjaFRlcm1zKTogU2FmZUh0bWwge1xyXG4gICAgaWYgKHNlYXJjaFRlcm1zICYmIHRleHQpIHtcclxuICAgICAgbGV0IHMgPSBzZWFyY2hUZXJtcztcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlYXJjaFRlcm1zKSkge1xyXG4gICAgICAgIGlmIChzZWFyY2hUZXJtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzID0gc2VhcmNoVGVybXMuam9pbignICcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBsZXQgcGF0dGVybiA9IHMucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcclxuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoJyAnKS5maWx0ZXIoKHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0Lmxlbmd0aCA+IDA7XHJcbiAgICAgIH0pLmpvaW4oJ3wnKTtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnaScpO1xyXG5cclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvIC9nLCAnJm5ic3AnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxyXG4gICAgICAgICAgdGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gpID0+IGA8c3BhbiBjbGFzcz1cInNlYXJjaC1oaWdobGlnaHRcIj4ke21hdGNofTwvc3Bhbj5gKVxyXG4gICAgICApO1xyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGEgbGlzdCAoYXJyYXkpIG9mIGl0ZW1zLiAgTW9zdGx5IHVzZWQgdG8gcmVtb3ZlIGEgc3RyaW5nXHJcbi8vIGZyb20gYSBsaXN0LCBpdCB3aWxsIGFsc28gd29yayB0byByZW1vdmUgYW4gb2JqZWN0IGZyb20gYSBsaXN0IG9mIG9iamVjdHNcclxuLy8gYXMgbG9uZyBhcyB0aGVyZSBpcyBhICduYW1lJyBwcm9wZXJ0eSBvbiB0aGUgb2JqZWN0XHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmVtb3ZlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlSXRlbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgLy8gUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtc1xyXG4gIHRyYW5zZm9ybShpdGVtczogYW55W10sIGl0ZW1Ub1JlbW92ZTogYW55KTogYW55W10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpdGVtc1swXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IFxyXG4gICAgICAgIGl0ZW0ubG9jYWxlQ29tcGFyZShpdGVtVG9SZW1vdmUpICE9PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpdGVtc1swXS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIGl0ZW1Ub1JlbW92ZS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBcclxuICAgICAgICBpdGVtLm5hbWUubG9jYWxlQ29tcGFyZShpdGVtVG9SZW1vdmUubmFtZSkgIT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tUGlwZXMgPSB7XHJcbiAgRGF0ZUZvcm1hdFBpcGUsXHJcbiAgVHJ1bmNhdGVQaXBlLFxyXG4gIE9yZGVyQnlQaXBlLFxyXG4gIFJlbW92ZUl0ZW1QaXBlXHJcbn07XHJcbiJdfQ==