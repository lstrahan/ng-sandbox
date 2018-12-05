/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
var Util = /** @class */ (function () {
    function Util() {
    }
    /****************************************************************************
     * Generate Guid
     ****************************************************************************/
    /**
     * *************************************************************************
     * Generate Guid
     * **************************************************************************
     * @return {?}
     */
    Util.newGuid = /**
     * *************************************************************************
     * Generate Guid
     * **************************************************************************
     * @return {?}
     */
    function () {
        /** @type {?} */
        var d = new Date().getTime();
        /** @type {?} */
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            /** @type {?} */
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16).toUpperCase();
        });
        return uuid;
    };
    /****************************************************************************
     * Takes a variable list of strings and combines them into a valid url. This
     * function will avoid the problem of missing or extra '/' characters.
     * Example:
     *    input: 'http://www.google.com/', '/string1/', /string2', 'string3'
     *    output: 'http://www.google.com/string1/string2/string3'
     ****************************************************************************/
    /**
     * *************************************************************************
     * Takes a variable list of strings and combines them into a valid url. This
     * function will avoid the problem of missing or extra '/' characters.
     * Example:
     *    input: 'http://www.google.com/', '/string1/', /string2', 'string3'
     *    output: 'http://www.google.com/string1/string2/string3'
     * **************************************************************************
     * @param {...?} strArray
     * @return {?}
     */
    Util.urlJoin = /**
     * *************************************************************************
     * Takes a variable list of strings and combines them into a valid url. This
     * function will avoid the problem of missing or extra '/' characters.
     * Example:
     *    input: 'http://www.google.com/', '/string1/', /string2', 'string3'
     *    output: 'http://www.google.com/string1/string2/string3'
     * **************************************************************************
     * @param {...?} strArray
     * @return {?}
     */
    function () {
        var strArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strArray[_i] = arguments[_i];
        }
        /** @type {?} */
        var resultArray = [];
        // If the first part is a plain protocol, we combine it with the next part.
        if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
            /** @type {?} */
            var first = strArray.shift();
            strArray[0] = first + strArray[0];
        }
        // There must be two or three slashes in the file protocol, two slashes in anything else.
        if (strArray[0].match(/^file:\/\/\//)) {
            strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
        }
        else {
            strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
        }
        for (var i = 0; i < strArray.length; i++) {
            /** @type {?} */
            var component = strArray[i];
            if (typeof component !== 'string') {
                throw new TypeError('Url must be a string. Received ' + component);
            }
            if (component === '') {
                continue;
            }
            if (i > 0) {
                // Removing the starting slashes for each component but the first.
                component = component.replace(/^[\/]+/, '');
            }
            if (i < strArray.length - 1) {
                // Removing the ending slashes for each component but the last.
                component = component.replace(/[\/]+$/, '');
            }
            else {
                // For the last component we will combine multiple slashes to a single one.
                component = component.replace(/[\/]+$/, '/');
            }
            resultArray.push(component);
        }
        /** @type {?} */
        var str = resultArray.join('/');
        // Each input component is now separated by a single slash except the possible first plain protocol part.
        // remove trailing slash before parameters or hash
        str = str.replace(/\/(\?|&|#[^!])/g, '$1');
        // replace ? in parameters with &
        /** @type {?} */
        var parts = str.split('?');
        str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
        return str;
    };
    /****************************************************************************
     * This function can be used to override the console.log function to turn off
     * all messages for production, or intercept the console.log function to do
     * some additional processing.
     ****************************************************************************/
    /**
     * *************************************************************************
     * This function can be used to override the console.log function to turn off
     * all messages for production, or intercept the console.log function to do
     * some additional processing.
     * **************************************************************************
     * @return {?}
     */
    Util.overrideConsole = /**
     * *************************************************************************
     * This function can be used to override the console.log function to turn off
     * all messages for production, or intercept the console.log function to do
     * some additional processing.
     * **************************************************************************
     * @return {?}
     */
    function () {
        /** @type {?} */
        var console = window.console;
        if (!console) {
            return;
        }
        /**
         * @param {?} method
         * @return {?}
         */
        function intercept(method) {
            /** @type {?} */
            var original = console[method];
            console[method] = function () {
                // do sneaky stuff
                if (original.apply) {
                    // Do this for normal browsers
                    original.apply(console, arguments);
                }
                else {
                    // Do this for IE
                    /** @type {?} */
                    var message = Array.prototype.slice.apply(arguments).join(' ');
                    original(message);
                }
            };
        }
        /** @type {?} */
        var methods = ['log', 'warn', 'error'];
        for (var i = 0; i < methods.length; i++) {
            intercept(methods[i]);
        }
    };
    /****************************************************************************
     * Get the best contrasting color, either black or white, for given input color.
     * Parameters:
     *    color: hex color such as '#FF0077'
     ****************************************************************************/
    /**
     * *************************************************************************
     * Get the best contrasting color, either black or white, for given input color.
     * Parameters:
     *    color: hex color such as '#FF0077'
     * **************************************************************************
     * @param {?} hexColor
     * @return {?}
     */
    Util.prototype.contrastColor = /**
     * *************************************************************************
     * Get the best contrasting color, either black or white, for given input color.
     * Parameters:
     *    color: hex color such as '#FF0077'
     * **************************************************************************
     * @param {?} hexColor
     * @return {?}
     */
    function (hexColor) {
        // Counting the perceptive luminance
        // human eye favors green color...
        /** @type {?} */
        var rgb = this.hexToRgb(hexColor);
        /** @type {?} */
        var a = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
        if (a < 0.5) {
            return '#000000';
        }
        else {
            return '#ffffff';
        }
    };
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @return {?}
     */
    Util.prototype.colorFromRgb = /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @return {?}
     */
    function (r, g, b) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    };
    /**
     * @param {?} c
     * @return {?}
     */
    Util.prototype.componentToHex = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @return {?}
     */
    Util.prototype.rgbToHex = /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @return {?}
     */
    function (r, g, b) {
        return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };
    /**
     * @param {?} hex
     * @return {?}
     */
    Util.prototype.hexToRgb = /**
     * @param {?} hex
     * @return {?}
     */
    function (hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        /** @type {?} */
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        /** @type {?} */
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };
    return Util;
}());
export { Util };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9vdGhlci91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BO0lBQUE7SUFvSkEsQ0FBQztJQWxKQzs7a0ZBRThFOzs7Ozs7O0lBQ3ZFLFlBQU87Ozs7OztJQUFkOztZQUNNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFDeEIsSUFBSSxHQUFHLGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDOztnQkFDcEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN6QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RFLENBQUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7a0ZBTThFOzs7Ozs7Ozs7Ozs7SUFDdkUsWUFBTzs7Ozs7Ozs7Ozs7SUFBZDtRQUFlLGtCQUFxQjthQUFyQixVQUFxQixFQUFyQixxQkFBcUIsRUFBckIsSUFBcUI7WUFBckIsNkJBQXFCOzs7WUFDOUIsV0FBVyxHQUFHLEVBQUU7UUFFcEIsMkVBQTJFO1FBQzNFLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hELEtBQUss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RyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDNUMsQ0FBQzs7Ozs7OztJQUVELHVCQUFROzs7Ozs7SUFBUixVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNkLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7O0lBRUQsdUJBQVE7Ozs7SUFBUixVQUFTLEdBQUc7OztZQUVOLGNBQWMsR0FBRyxrQ0FBa0M7UUFDdkQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDOztZQUVDLE1BQU0sR0FBRywyQ0FBMkMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xFLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQzNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXBKRCxJQW9KQyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgVGhlIEJvZWluZyBDb21wYW55XHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBCb2VpbmcgQ29tcGFueSAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdlbmVyYXRlIEd1aWRcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzdGF0aWMgbmV3R3VpZCgpIHtcclxuICAgIGxldCBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgdXVpZCA9ICd4eHh4eHh4eHh4eHg0eHh4eXh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICBsZXQgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcclxuICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHV1aWQ7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFRha2VzIGEgdmFyaWFibGUgbGlzdCBvZiBzdHJpbmdzIGFuZCBjb21iaW5lcyB0aGVtIGludG8gYSB2YWxpZCB1cmwuIFRoaXNcclxuICAgKiBmdW5jdGlvbiB3aWxsIGF2b2lkIHRoZSBwcm9ibGVtIG9mIG1pc3Npbmcgb3IgZXh0cmEgJy8nIGNoYXJhY3RlcnMuXHJcbiAgICogRXhhbXBsZTpcclxuICAgKiAgICBpbnB1dDogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbS8nLCAnL3N0cmluZzEvJywgL3N0cmluZzInLCAnc3RyaW5nMydcclxuICAgKiAgICBvdXRwdXQ6ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20vc3RyaW5nMS9zdHJpbmcyL3N0cmluZzMnXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgc3RhdGljIHVybEpvaW4oLi4uc3RyQXJyYXk6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcbiAgICAvLyBJZiB0aGUgZmlyc3QgcGFydCBpcyBhIHBsYWluIHByb3RvY29sLCB3ZSBjb21iaW5lIGl0IHdpdGggdGhlIG5leHQgcGFydC5cclxuICAgIGlmIChzdHJBcnJheVswXS5tYXRjaCgvXlteLzpdKzpcXC8qJC8pICYmIHN0ckFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgbGV0IGZpcnN0ID0gc3RyQXJyYXkuc2hpZnQoKTtcclxuICAgICAgc3RyQXJyYXlbMF0gPSBmaXJzdCArIHN0ckFycmF5WzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZXJlIG11c3QgYmUgdHdvIG9yIHRocmVlIHNsYXNoZXMgaW4gdGhlIGZpbGUgcHJvdG9jb2wsIHR3byBzbGFzaGVzIGluIGFueXRoaW5nIGVsc2UuXHJcbiAgICBpZiAoc3RyQXJyYXlbMF0ubWF0Y2goL15maWxlOlxcL1xcL1xcLy8pKSB7XHJcbiAgICAgIHN0ckFycmF5WzBdID0gc3RyQXJyYXlbMF0ucmVwbGFjZSgvXihbXi86XSspOlxcLyovLCAnJDE6Ly8vJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHJBcnJheVswXSA9IHN0ckFycmF5WzBdLnJlcGxhY2UoL14oW14vOl0rKTpcXC8qLywgJyQxOi8vJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY29tcG9uZW50ID0gc3RyQXJyYXlbaV07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVcmwgbXVzdCBiZSBhIHN0cmluZy4gUmVjZWl2ZWQgJyArIGNvbXBvbmVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb21wb25lbnQgPT09ICcnKSB7IGNvbnRpbnVlOyB9XHJcblxyXG4gICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAvLyBSZW1vdmluZyB0aGUgc3RhcnRpbmcgc2xhc2hlcyBmb3IgZWFjaCBjb21wb25lbnQgYnV0IHRoZSBmaXJzdC5cclxuICAgICAgICBjb21wb25lbnQgPSBjb21wb25lbnQucmVwbGFjZSgvXltcXC9dKy8sICcnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaSA8IHN0ckFycmF5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAvLyBSZW1vdmluZyB0aGUgZW5kaW5nIHNsYXNoZXMgZm9yIGVhY2ggY29tcG9uZW50IGJ1dCB0aGUgbGFzdC5cclxuICAgICAgICBjb21wb25lbnQgPSBjb21wb25lbnQucmVwbGFjZSgvW1xcL10rJC8sICcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGb3IgdGhlIGxhc3QgY29tcG9uZW50IHdlIHdpbGwgY29tYmluZSBtdWx0aXBsZSBzbGFzaGVzIHRvIGEgc2luZ2xlIG9uZS5cclxuICAgICAgICBjb21wb25lbnQgPSBjb21wb25lbnQucmVwbGFjZSgvW1xcL10rJC8sICcvJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdEFycmF5LnB1c2goY29tcG9uZW50KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0ciA9IHJlc3VsdEFycmF5LmpvaW4oJy8nKTtcclxuICAgIC8vIEVhY2ggaW5wdXQgY29tcG9uZW50IGlzIG5vdyBzZXBhcmF0ZWQgYnkgYSBzaW5nbGUgc2xhc2ggZXhjZXB0IHRoZSBwb3NzaWJsZSBmaXJzdCBwbGFpbiBwcm90b2NvbCBwYXJ0LlxyXG5cclxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaCBiZWZvcmUgcGFyYW1ldGVycyBvciBoYXNoXHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwvKFxcP3wmfCNbXiFdKS9nLCAnJDEnKTtcclxuXHJcbiAgICAvLyByZXBsYWNlID8gaW4gcGFyYW1ldGVycyB3aXRoICZcclxuICAgIGxldCBwYXJ0cyA9IHN0ci5zcGxpdCgnPycpO1xyXG4gICAgc3RyID0gcGFydHMuc2hpZnQoKSArIChwYXJ0cy5sZW5ndGggPiAwID8gJz8nIDogJycpICsgcGFydHMuam9pbignJicpO1xyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGNvbnNvbGUubG9nIGZ1bmN0aW9uIHRvIHR1cm4gb2ZmXHJcbiAgICogYWxsIG1lc3NhZ2VzIGZvciBwcm9kdWN0aW9uLCBvciBpbnRlcmNlcHQgdGhlIGNvbnNvbGUubG9nIGZ1bmN0aW9uIHRvIGRvXHJcbiAgICogc29tZSBhZGRpdGlvbmFsIHByb2Nlc3NpbmcuXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgc3RhdGljIG92ZXJyaWRlQ29uc29sZSgpIHtcclxuICAgIGxldCBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XHJcbiAgICBpZiAoIWNvbnNvbGUpIHsgcmV0dXJuOyB9XHJcbiAgICBmdW5jdGlvbiBpbnRlcmNlcHQobWV0aG9kKSB7XHJcbiAgICAgIGxldCBvcmlnaW5hbCA9IGNvbnNvbGVbbWV0aG9kXTtcclxuICAgICAgY29uc29sZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGRvIHNuZWFreSBzdHVmZlxyXG4gICAgICAgIGlmIChvcmlnaW5hbC5hcHBseSkge1xyXG4gICAgICAgICAgLy8gRG8gdGhpcyBmb3Igbm9ybWFsIGJyb3dzZXJzXHJcbiAgICAgICAgICBvcmlnaW5hbC5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBEbyB0aGlzIGZvciBJRVxyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzKS5qb2luKCcgJyk7XHJcbiAgICAgICAgICBvcmlnaW5hbChtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBsZXQgbWV0aG9kcyA9IFsnbG9nJywgJ3dhcm4nLCAnZXJyb3InXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpbnRlcmNlcHQobWV0aG9kc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdldCB0aGUgYmVzdCBjb250cmFzdGluZyBjb2xvciwgZWl0aGVyIGJsYWNrIG9yIHdoaXRlLCBmb3IgZ2l2ZW4gaW5wdXQgY29sb3IuXHJcbiAgICogUGFyYW1ldGVyczpcclxuICAgKiAgICBjb2xvcjogaGV4IGNvbG9yIHN1Y2ggYXMgJyNGRjAwNzcnXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY29udHJhc3RDb2xvcihoZXhDb2xvcikge1xyXG4gICAgLy8gQ291bnRpbmcgdGhlIHBlcmNlcHRpdmUgbHVtaW5hbmNlXHJcbiAgICAvLyBodW1hbiBleWUgZmF2b3JzIGdyZWVuIGNvbG9yLi4uXHJcbiAgICBsZXQgcmdiID0gdGhpcy5oZXhUb1JnYihoZXhDb2xvcik7XHJcbiAgICBsZXQgYSA9IDEgLSAoMC4yOTkgKiByZ2IuciArIDAuNTg3ICogcmdiLmcgKyAwLjExNCAqIHJnYi5iKSAvIDI1NTtcclxuICAgIGlmIChhIDwgMC41KSB7XHJcbiAgICAgIHJldHVybiAnIzAwMDAwMCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyNmZmZmZmYnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sb3JGcm9tUmdiKHIsIGcsIGIpIHtcclxuICAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKSc7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRUb0hleChjKSB7XHJcbiAgICBsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcclxuICB9XHJcblxyXG4gIHJnYlRvSGV4KHIsIGcsIGIpIHtcclxuICAgIHJldHVybiAnIycgKyB0aGlzLmNvbXBvbmVudFRvSGV4KHIpICsgdGhpcy5jb21wb25lbnRUb0hleChnKSArIHRoaXMuY29tcG9uZW50VG9IZXgoYik7XHJcbiAgfVxyXG5cclxuICBoZXhUb1JnYihoZXgpIHtcclxuICAgIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcclxuICAgIGxldCBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XHJcbiAgICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcclxuICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICAgIH0gOiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuIl19