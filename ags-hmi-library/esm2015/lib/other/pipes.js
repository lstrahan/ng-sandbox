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
export class DateFormatPipe {
    /**
     * @param {?} theDate
     * @param {?=} defaultVal
     * @param {?=} forceUtc
     * @return {?}
     */
    transform(theDate, defaultVal = 'n/a', forceUtc = true) {
        if (!moment(theDate).isValid()) {
            return defaultVal;
        }
        if (forceUtc) {
            return moment.utc(theDate).format(DateFormatPipe.format).toUpperCase();
        }
        else {
            return moment(theDate).format(DateFormatPipe.format + ' ZZ').toUpperCase();
        }
    }
}
DateFormatPipe.format = 'YYYY-MM-DD HH:mm:ss';
DateFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'agsDateFormat'
            },] }
];
if (false) {
    /** @type {?} */
    DateFormatPipe.format;
}
export class TruncatePipe {
    /**
     * @param {?} s
     * @return {?}
     */
    transform(s) {
        if (!s) {
            return '';
        }
        if (s.length < 100) {
            return s;
        }
        return s.slice(0, 99) + '...';
    }
}
TruncatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'trunc'
            },] }
];
export class OrderByPipe {
    /**
     * @param {?} array
     * @param {?=} asc
     * @return {?}
     */
    transform(array, asc = true) {
        if (asc) { // ascending
            return Array.from(array).sort((item1, item2) => {
                return this.orderByComparator(item1, item2);
            });
        }
        else { // descending
            return Array.from(array).sort((item1, item2) => {
                return this.orderByComparator(item2, item1);
            });
        }
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    orderByComparator(a, b) {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
OrderByPipe.decorators = [
    { type: Pipe, args: [{
                name: 'orderBy'
            },] }
];
// NOTE:  Adds class "search-highlight" to span containing search term.
export class HighlightPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @param {?} searchTerms
     * @return {?}
     */
    transform(text, searchTerms) {
        if (searchTerms && text) {
            /** @type {?} */
            let s = searchTerms;
            if (Array.isArray(searchTerms)) {
                if (searchTerms.length === 0) {
                    return text;
                }
                s = searchTerms.join(' ');
            }
            /** @type {?} */
            let pattern = s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            /** @type {?} */
            const regex = new RegExp(pattern, 'gi');
            text = text.replace(/ /g, '&nbsp');
            return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, (match) => `<span class="search-highlight">${match}</span>`));
        }
        else {
            return text;
        }
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'highlight'
            },] }
];
/** @nocollapse */
HighlightPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    HighlightPipe.prototype.sanitizer;
}
// Removes an item from a list (array) of items.  Mostly used to remove a string
// from a list, it will also work to remove an object from a list of objects
// as long as there is a 'name' property on the object
export class RemoveItemPipe {
    // Returns an array of items
    /**
     * @param {?} items
     * @param {?} itemToRemove
     * @return {?}
     */
    transform(items, itemToRemove) {
        if (!Array.isArray(items)) {
            return items;
        }
        if (Array.isArray(items) && items.length === 0) {
            return items;
        }
        if (typeof items[0] === 'string') {
            return items.filter(item => item.localeCompare(itemToRemove) !== 0);
        }
        else if (items[0].hasOwnProperty('name') && itemToRemove.hasOwnProperty('name')) {
            return items.filter(item => item.name.localeCompare(itemToRemove.name) !== 0);
        }
    }
}
RemoveItemPipe.decorators = [
    { type: Pipe, args: [{
                name: 'remove'
            },] }
];
/** @type {?} */
export const CustomPipes = {
    DateFormatPipe,
    TruncatePipe,
    OrderByPipe,
    RemoveItemPipe
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvb3RoZXIvcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFTbkUsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFJekIsU0FBUyxDQUFDLE9BQXNDLEVBQUUsYUFBcUIsS0FBSyxFQUFFLFdBQW9CLElBQUk7UUFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM5QixPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUVELElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEU7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7QUFaTSxxQkFBTSxHQUFXLHFCQUFxQixDQUFDOztZQUwvQyxJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGVBQWU7YUFDdEI7Ozs7SUFHQyxzQkFBOEM7O0FBa0JoRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDdkIsU0FBUyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFD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WUExRVEsWUFBWTs7OztJQTRFUCxrQ0FBOEI7Ozs7O0FBb0M1QyxNQUFNLE9BQU8sY0FBYzs7Ozs7OztJQUd6QixTQUFTLENBQUMsS0FBWSxFQUFFLFlBQWlCO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDdkMsQ0FBQztTQUNIO2FBQ0ksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0UsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ2pELENBQUM7U0FDSDtJQUNILENBQUM7OztZQXpCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7YUFDZjs7O0FBMkJELE1BQU0sT0FBTyxXQUFXLEdBQUc7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztDQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LWVzNic7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbi8qXHJcblRoaXMgcGlwZSB3aWxsIGZvcm1hdCBhIGRhdGUgYW5kIGNvbnZlcnQgaXQgdG8gVVRDIHVubGVzcyAnZm9yY2VVdGMnIHBhcmFtZXRlclxyXG5pcyBzZXQgdG8gZmFsc2UuIElmIHRoZSBkYXRlIGlzIGVtcHR5LCBudWxsLCBvciBpbnZhbGlkIGl0IHdpbGwgcmV0dXJuICdkZWZhdWx0VmFsJ1xyXG4qL1xyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2Fnc0RhdGVGb3JtYXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBzdGF0aWMgZm9ybWF0OiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XHJcblxyXG4gIHRyYW5zZm9ybSh0aGVEYXRlOiBtb21lbnQuTW9tZW50IHwgRGF0ZSB8IHN0cmluZywgZGVmYXVsdFZhbDogc3RyaW5nID0gJ24vYScsIGZvcmNlVXRjOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIW1vbWVudCh0aGVEYXRlKS5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZvcmNlVXRjKSB7XHJcbiAgICAgIHJldHVybiBtb21lbnQudXRjKHRoZURhdGUpLmZvcm1hdChEYXRlRm9ybWF0UGlwZS5mb3JtYXQpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbW9tZW50KHRoZURhdGUpLmZvcm1hdChEYXRlRm9ybWF0UGlwZS5mb3JtYXQgKyAnIFpaJykudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndHJ1bmMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghcykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAocy5sZW5ndGggPCAxMDApIHtcclxuICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5zbGljZSgwLCA5OSkgKyAnLi4uJztcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnb3JkZXJCeSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVyQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShhcnJheSwgYXNjID0gdHJ1ZSkge1xyXG5cclxuICAgIGlmIChhc2MpIHsgLy8gYXNjZW5kaW5nXHJcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5KS5zb3J0KChpdGVtMTogc3RyaW5nLCBpdGVtMjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJCeUNvbXBhcmF0b3IoaXRlbTEsIGl0ZW0yKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgeyAvLyBkZXNjZW5kaW5nXHJcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5KS5zb3J0KChpdGVtMTogc3RyaW5nLCBpdGVtMjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJCeUNvbXBhcmF0b3IoaXRlbTIsIGl0ZW0xKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgb3JkZXJCeUNvbXBhcmF0b3IoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKGEudG9Mb3dlckNhc2UoKSA8IGIudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKGEudG9Mb3dlckNhc2UoKSA+IGIudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTk9URTogIEFkZHMgY2xhc3MgXCJzZWFyY2gtaGlnaGxpZ2h0XCIgdG8gc3BhbiBjb250YWluaW5nIHNlYXJjaCB0ZXJtLlxyXG5AUGlwZSh7XHJcbiAgIG5hbWU6ICdoaWdobGlnaHQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0odGV4dDogc3RyaW5nLCBzZWFyY2hUZXJtcyk6IFNhZmVIdG1sIHtcclxuICAgIGlmIChzZWFyY2hUZXJtcyAmJiB0ZXh0KSB7XHJcbiAgICAgIGxldCBzID0gc2VhcmNoVGVybXM7XHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hUZXJtcykpIHtcclxuICAgICAgICBpZiAoc2VhcmNoVGVybXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcyA9IHNlYXJjaFRlcm1zLmpvaW4oJyAnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgbGV0IHBhdHRlcm4gPSBzLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJyk7XHJcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnNwbGl0KCcgJykuZmlsdGVyKCh0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdC5sZW5ndGggPiAwO1xyXG4gICAgICB9KS5qb2luKCd8Jyk7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZ2knKTtcclxuXHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyAvZywgJyZuYnNwJyk7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcclxuICAgICAgICAgIHRleHQucmVwbGFjZShyZWdleCwgKG1hdGNoKSA9PiBgPHNwYW4gY2xhc3M9XCJzZWFyY2gtaGlnaGxpZ2h0XCI+JHttYXRjaH08L3NwYW4+YClcclxuICAgICAgKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIGxpc3QgKGFycmF5KSBvZiBpdGVtcy4gIE1vc3RseSB1c2VkIHRvIHJlbW92ZSBhIHN0cmluZ1xyXG4vLyBmcm9tIGEgbGlzdCwgaXQgd2lsbCBhbHNvIHdvcmsgdG8gcmVtb3ZlIGFuIG9iamVjdCBmcm9tIGEgbGlzdCBvZiBvYmplY3RzXHJcbi8vIGFzIGxvbmcgYXMgdGhlcmUgaXMgYSAnbmFtZScgcHJvcGVydHkgb24gdGhlIG9iamVjdFxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3JlbW92ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbW92ZUl0ZW1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIC8vIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXNcclxuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBpdGVtVG9SZW1vdmU6IGFueSk6IGFueVtdIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgaXRlbXNbMF0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBcclxuICAgICAgICBpdGVtLmxvY2FsZUNvbXBhcmUoaXRlbVRvUmVtb3ZlKSAhPT0gMFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXRlbXNbMF0uaGFzT3duUHJvcGVydHkoJ25hbWUnKSAmJiBpdGVtVG9SZW1vdmUuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xyXG4gICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gXHJcbiAgICAgICAgaXRlbS5uYW1lLmxvY2FsZUNvbXBhcmUoaXRlbVRvUmVtb3ZlLm5hbWUpICE9PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbVBpcGVzID0ge1xyXG4gIERhdGVGb3JtYXRQaXBlLFxyXG4gIFRydW5jYXRlUGlwZSxcclxuICBPcmRlckJ5UGlwZSxcclxuICBSZW1vdmVJdGVtUGlwZVxyXG59O1xyXG4iXX0=