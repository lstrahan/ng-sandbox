/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
export class Util {
    /**
     * *************************************************************************
     * Generate Guid
     * **************************************************************************
     * @return {?}
     */
    static newGuid() {
        /** @type {?} */
        let d = new Date().getTime();
        /** @type {?} */
        let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            /** @type {?} */
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16).toUpperCase();
        });
        return uuid;
    }
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
    static urlJoin(...strArray) {
        /** @type {?} */
        let resultArray = [];
        // If the first part is a plain protocol, we combine it with the next part.
        if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
            /** @type {?} */
            let first = strArray.shift();
            strArray[0] = first + strArray[0];
        }
        // There must be two or three slashes in the file protocol, two slashes in anything else.
        if (strArray[0].match(/^file:\/\/\//)) {
            strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
        }
        else {
            strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
        }
        for (let i = 0; i < strArray.length; i++) {
            /** @type {?} */
            let component = strArray[i];
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
        let str = resultArray.join('/');
        // Each input component is now separated by a single slash except the possible first plain protocol part.
        // remove trailing slash before parameters or hash
        str = str.replace(/\/(\?|&|#[^!])/g, '$1');
        // replace ? in parameters with &
        /** @type {?} */
        let parts = str.split('?');
        str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
        return str;
    }
    /**
     * *************************************************************************
     * This function can be used to override the console.log function to turn off
     * all messages for production, or intercept the console.log function to do
     * some additional processing.
     * **************************************************************************
     * @return {?}
     */
    static overrideConsole() {
        /** @type {?} */
        let console = window.console;
        if (!console) {
            return;
        }
        /**
         * @param {?} method
         * @return {?}
         */
        function intercept(method) {
            /** @type {?} */
            let original = console[method];
            console[method] = function () {
                // do sneaky stuff
                if (original.apply) {
                    // Do this for normal browsers
                    original.apply(console, arguments);
                }
                else {
                    // Do this for IE
                    /** @type {?} */
                    let message = Array.prototype.slice.apply(arguments).join(' ');
                    original(message);
                }
            };
        }
        /** @type {?} */
        let methods = ['log', 'warn', 'error'];
        for (let i = 0; i < methods.length; i++) {
            intercept(methods[i]);
        }
    }
    /**
     * *************************************************************************
     * Get the best contrasting color, either black or white, for given input color.
     * Parameters:
     *    color: hex color such as '#FF0077'
     * **************************************************************************
     * @param {?} hexColor
     * @return {?}
     */
    contrastColor(hexColor) {
        // Counting the perceptive luminance
        // human eye favors green color...
        /** @type {?} */
        let rgb = this.hexToRgb(hexColor);
        /** @type {?} */
        let a = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
        if (a < 0.5) {
            return '#000000';
        }
        else {
            return '#ffffff';
        }
    }
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @return {?}
     */
    colorFromRgb(r, g, b) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    /**
     * @param {?} c
     * @return {?}
     */
    componentToHex(c) {
        /** @type {?} */
        let hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @return {?}
     */
    rgbToHex(r, g, b) {
        return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
    /**
     * @param {?} hex
     * @return {?}
     */
    hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        /** @type {?} */
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        /** @type {?} */
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fncy1obWktbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9vdGhlci91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0sT0FBTyxJQUFJOzs7Ozs7O0lBS2YsTUFBTSxDQUFDLE9BQU87O1lBQ1IsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOztZQUN4QixJQUFJLEdBQUcsa0NBQWtDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7O2dCQUNwRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3pDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEUsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBa0I7O1lBQzlCLFdBQVcsR0FBRyxFQUFFO1FBRXBCLDJFQUEyRTtRQUMzRSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUN4RCxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUM1QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMs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QUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRzs7O1lBRU4sY0FBYyxHQUFHLGtDQUFrQztRQUN2RCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7O1lBRUMsTUFBTSxHQUFHLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEUsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDM0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbCB7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR2VuZXJhdGUgR3VpZFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHN0YXRpYyBuZXdHdWlkKCkge1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGxldCB1dWlkID0gJ3h4eHh4eHh4eHh4eDR4eHh5eHh4eHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgIGxldCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xyXG4gICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXVpZDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogVGFrZXMgYSB2YXJpYWJsZSBsaXN0IG9mIHN0cmluZ3MgYW5kIGNvbWJpbmVzIHRoZW0gaW50byBhIHZhbGlkIHVybC4gVGhpc1xyXG4gICAqIGZ1bmN0aW9uIHdpbGwgYXZvaWQgdGhlIHByb2JsZW0gb2YgbWlzc2luZyBvciBleHRyYSAnLycgY2hhcmFjdGVycy5cclxuICAgKiBFeGFtcGxlOlxyXG4gICAqICAgIGlucHV0OiAnaHR0cDovL3d3dy5nb29nbGUuY29tLycsICcvc3RyaW5nMS8nLCAvc3RyaW5nMicsICdzdHJpbmczJ1xyXG4gICAqICAgIG91dHB1dDogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbS9zdHJpbmcxL3N0cmluZzIvc3RyaW5nMydcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzdGF0aWMgdXJsSm9pbiguLi5zdHJBcnJheTogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXN1bHRBcnJheSA9IFtdO1xyXG5cclxuICAgIC8vIElmIHRoZSBmaXJzdCBwYXJ0IGlzIGEgcGxhaW4gcHJvdG9jb2wsIHdlIGNvbWJpbmUgaXQgd2l0aCB0aGUgbmV4dCBwYXJ0LlxyXG4gICAgaWYgKHN0ckFycmF5WzBdLm1hdGNoKC9eW14vOl0rOlxcLyokLykgJiYgc3RyQXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICBsZXQgZmlyc3QgPSBzdHJBcnJheS5zaGlmdCgpO1xyXG4gICAgICBzdHJBcnJheVswXSA9IGZpcnN0ICsgc3RyQXJyYXlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlcmUgbXVzdCBiZSB0d28gb3IgdGhyZWUgc2xhc2hlcyBpbiB0aGUgZmlsZSBwcm90b2NvbCwgdHdvIHNsYXNoZXMgaW4gYW55dGhpbmcgZWxzZS5cclxuICAgIGlmIChzdHJBcnJheVswXS5tYXRjaCgvXmZpbGU6XFwvXFwvXFwvLykpIHtcclxuICAgICAgc3RyQXJyYXlbMF0gPSBzdHJBcnJheVswXS5yZXBsYWNlKC9eKFteLzpdKyk6XFwvKi8sICckMTovLy8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ckFycmF5WzBdID0gc3RyQXJyYXlbMF0ucmVwbGFjZSgvXihbXi86XSspOlxcLyovLCAnJDE6Ly8nKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjb21wb25lbnQgPSBzdHJBcnJheVtpXTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VybCBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZCAnICsgY29tcG9uZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbXBvbmVudCA9PT0gJycpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgIC8vIFJlbW92aW5nIHRoZSBzdGFydGluZyBzbGFzaGVzIGZvciBlYWNoIGNvbXBvbmVudCBidXQgdGhlIGZpcnN0LlxyXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9eW1xcL10rLywgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpIDwgc3RyQXJyYXkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vIFJlbW92aW5nIHRoZSBlbmRpbmcgc2xhc2hlcyBmb3IgZWFjaCBjb21wb25lbnQgYnV0IHRoZSBsYXN0LlxyXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLywgJycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZvciB0aGUgbGFzdCBjb21wb25lbnQgd2Ugd2lsbCBjb21iaW5lIG11bHRpcGxlIHNsYXNoZXMgdG8gYSBzaW5nbGUgb25lLlxyXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLywgJy8nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0QXJyYXkucHVzaChjb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyID0gcmVzdWx0QXJyYXkuam9pbignLycpO1xyXG4gICAgLy8gRWFjaCBpbnB1dCBjb21wb25lbnQgaXMgbm93IHNlcGFyYXRlZCBieSBhIHNpbmdsZSBzbGFzaCBleGNlcHQgdGhlIHBvc3NpYmxlIGZpcnN0IHBsYWluIHByb3RvY29sIHBhcnQuXHJcblxyXG4gICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoIGJlZm9yZSBwYXJhbWV0ZXJzIG9yIGhhc2hcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXC8oXFw/fCZ8I1teIV0pL2csICckMScpO1xyXG5cclxuICAgIC8vIHJlcGxhY2UgPyBpbiBwYXJhbWV0ZXJzIHdpdGggJlxyXG4gICAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KCc/Jyk7XHJcbiAgICBzdHIgPSBwYXJ0cy5zaGlmdCgpICsgKHBhcnRzLmxlbmd0aCA+IDAgPyAnPycgOiAnJykgKyBwYXJ0cy5qb2luKCcmJyk7XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgY29uc29sZS5sb2cgZnVuY3Rpb24gdG8gdHVybiBvZmZcclxuICAgKiBhbGwgbWVzc2FnZXMgZm9yIHByb2R1Y3Rpb24sIG9yIGludGVyY2VwdCB0aGUgY29uc29sZS5sb2cgZnVuY3Rpb24gdG8gZG9cclxuICAgKiBzb21lIGFkZGl0aW9uYWwgcHJvY2Vzc2luZy5cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzdGF0aWMgb3ZlcnJpZGVDb25zb2xlKCkge1xyXG4gICAgbGV0IGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcclxuICAgIGlmICghY29uc29sZSkgeyByZXR1cm47IH1cclxuICAgIGZ1bmN0aW9uIGludGVyY2VwdChtZXRob2QpIHtcclxuICAgICAgbGV0IG9yaWdpbmFsID0gY29uc29sZVttZXRob2RdO1xyXG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZG8gc25lYWt5IHN0dWZmXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsLmFwcGx5KSB7XHJcbiAgICAgICAgICAvLyBEbyB0aGlzIGZvciBub3JtYWwgYnJvd3NlcnNcclxuICAgICAgICAgIG9yaWdpbmFsLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIERvIHRoaXMgZm9yIElFXHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhcmd1bWVudHMpLmpvaW4oJyAnKTtcclxuICAgICAgICAgIG9yaWdpbmFsKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGxldCBtZXRob2RzID0gWydsb2cnLCAnd2FybicsICdlcnJvciddO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGludGVyY2VwdChtZXRob2RzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR2V0IHRoZSBiZXN0IGNvbnRyYXN0aW5nIGNvbG9yLCBlaXRoZXIgYmxhY2sgb3Igd2hpdGUsIGZvciBnaXZlbiBpbnB1dCBjb2xvci5cclxuICAgKiBQYXJhbWV0ZXJzOlxyXG4gICAqICAgIGNvbG9yOiBoZXggY29sb3Igc3VjaCBhcyAnI0ZGMDA3NydcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb250cmFzdENvbG9yKGhleENvbG9yKSB7XHJcbiAgICAvLyBDb3VudGluZyB0aGUgcGVyY2VwdGl2ZSBsdW1pbmFuY2VcclxuICAgIC8vIGh1bWFuIGV5ZSBmYXZvcnMgZ3JlZW4gY29sb3IuLi5cclxuICAgIGxldCByZ2IgPSB0aGlzLmhleFRvUmdiKGhleENvbG9yKTtcclxuICAgIGxldCBhID0gMSAtICgwLjI5OSAqIHJnYi5yICsgMC41ODcgKiByZ2IuZyArIDAuMTE0ICogcmdiLmIpIC8gMjU1O1xyXG4gICAgaWYgKGEgPCAwLjUpIHtcclxuICAgICAgcmV0dXJuICcjMDAwMDAwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnI2ZmZmZmZic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xvckZyb21SZ2IociwgZywgYikge1xyXG4gICAgcmV0dXJuICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJztcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFRvSGV4KGMpIHtcclxuICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xyXG4gIH1cclxuXHJcbiAgcmdiVG9IZXgociwgZywgYikge1xyXG4gICAgcmV0dXJuICcjJyArIHRoaXMuY29tcG9uZW50VG9IZXgocikgKyB0aGlzLmNvbXBvbmVudFRvSGV4KGcpICsgdGhpcy5jb21wb25lbnRUb0hleChiKTtcclxuICB9XHJcblxyXG4gIGhleFRvUmdiKGhleCkge1xyXG4gICAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxyXG4gICAgbGV0IHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xyXG4gICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgfSA6IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=