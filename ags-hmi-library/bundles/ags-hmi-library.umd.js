(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('moment-es6'), require('@angular/platform-browser'), require('class-transformer'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/forms'), require('@angular/router'), require('rxjs'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('ng-pick-datetime'), require('ng-pick-datetime-moment'), require('@angular/material/icon'), require('@angular/common'), require('@angular/flex-layout'), require('rxjs/webSocket'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('ags-hmi-library', ['exports', '@angular/core', '@angular/material', 'moment-es6', '@angular/platform-browser', 'class-transformer', '@angular/common/http', 'rxjs/operators', '@angular/forms', '@angular/router', 'rxjs', '@angular/cdk/a11y', '@angular/cdk/coercion', 'ng-pick-datetime', 'ng-pick-datetime-moment', '@angular/material/icon', '@angular/common', '@angular/flex-layout', 'rxjs/webSocket', 'lodash'], factory) :
    (factory((global['ags-hmi-library'] = {}),global.ng.core,global.ng.material,global.moment,global.ng.platformBrowser,global.classTransformer,global.ng.common.http,global.rxjs.operators,global.ng.forms,global.ng.router,global.rxjs,global.ng.cdk.a11y,global.ng.cdk.coercion,global.ngPickDatetime,global.ngPickDatetimeMoment,global.ng.material.icon,global.ng.common,global.ng['flex-layout'],global.rxjs.webSocket,global._));
}(this, (function (exports,i0,material,moment,i1,classTransformer,i1$1,operators,forms,i2,rxjs,a11y,coercion,ngPickDatetime,ngPickDatetimeMoment,i1$2,common,flexLayout,webSocket,_) { 'use strict';

    moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import {MatNativeDateModule, MatRippleModule} from '@angular/material';
    // import {CdkTableModule} from '@angular/cdk/table';
    // import {CdkAccordionModule} from '@angular/cdk/accordion';
    // import {A11yModule} from '@angular/cdk/a11y';
    // import {BidiModule} from '@angular/cdk/bidi';
    // import {OverlayModule} from '@angular/cdk/overlay';
    // import {PlatformModule} from '@angular/cdk/platform';
    // import {ObserversModule} from '@angular/cdk/observers';
    // import {PortalModule} from '@angular/cdk/portal';
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            material.MatAutocompleteModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatTableModule,
                            material.MatBottomSheetModule,
                            // MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatExpansionModule,
                            material.MatFormFieldModule,
                            // MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            // MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            // MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            // MatSlideToggleModule,
                            // MatSliderModule,
                            // MatSnackBarModule,
                            // MatSortModule,
                            // MatStepperModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                        ],
                        exports: [
                            material.MatAutocompleteModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatTableModule,
                            // MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatExpansionModule,
                            material.MatFormFieldModule,
                            // MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            // MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            // MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            // MatSlideToggleModule,
                            // MatSliderModule,
                            // MatSnackBarModule,
                            // MatSortModule,
                            // MatStepperModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                        ]
                    },] }
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                if (defaultVal === void 0) {
                    defaultVal = 'n/a';
                }
                if (forceUtc === void 0) {
                    forceUtc = true;
                }
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
            { type: i0.Pipe, args: [{
                        name: 'agsDateFormat'
                    },] }
        ];
        return DateFormatPipe;
    }());
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
            { type: i0.Pipe, args: [{
                        name: 'trunc'
                    },] }
        ];
        return TruncatePipe;
    }());
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
                if (asc === void 0) {
                    asc = true;
                }
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
            { type: i0.Pipe, args: [{
                        name: 'orderBy'
                    },] }
        ];
        return OrderByPipe;
    }());
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
            { type: i0.Pipe, args: [{
                        name: 'highlight'
                    },] }
        ];
        /** @nocollapse */
        HighlightPipe.ctorParameters = function () {
            return [
                { type: i1.DomSanitizer }
            ];
        };
        return HighlightPipe;
    }());
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
            { type: i0.Pipe, args: [{
                        name: 'remove'
                    },] }
        ];
        return RemoveItemPipe;
    }());
    /** @type {?} */
    var CustomPipes = {
        DateFormatPipe: DateFormatPipe,
        TruncatePipe: TruncatePipe,
        OrderByPipe: OrderByPipe,
        RemoveItemPipe: RemoveItemPipe
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                return classTransformer.classToPlain(this);
            };
        __decorate([
            classTransformer.Expose({ name: 'annotationId' }),
            __metadata("design:type", String)
        ], Annotation.prototype, "id", void 0);
        return Annotation;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogService = /** @class */ (function () {
        function LogService() {
            this.isLocalhost = false;
            this.isDevMode = false;
            this.isLocalhost = window.location.hostname.toLocaleLowerCase() === 'localhost';
            this.isDevMode = i0.isDevMode();
        }
        // displays in the console. will not display in a production build
        // displays in the console. will not display in a production build
        /**
         * @param {...?} msg
         * @return {?}
         */
        LogService.prototype.debug =
            // displays in the console. will not display in a production build
            /**
             * @param {...?} msg
             * @return {?}
             */
            function () {
                var msg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msg[_i] = arguments[_i];
                }
                if (!this.isDevMode) {
                    return;
                }
                console.log.apply(console, __spread(msg));
            };
        // only display if running on localhost
        // only display if running on localhost
        /**
         * @param {...?} msg
         * @return {?}
         */
        LogService.prototype.local =
            // only display if running on localhost
            /**
             * @param {...?} msg
             * @return {?}
             */
            function () {
                var msg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msg[_i] = arguments[_i];
                }
                if (!this.isLocalhost) {
                    return;
                }
                console.log.apply(console, __spread(msg));
            };
        /**
         * @param {...?} msg
         * @return {?}
         */
        LogService.prototype.info = /**
         * @param {...?} msg
         * @return {?}
         */
            function () {
                var msg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msg[_i] = arguments[_i];
                }
                console.log.apply(console, __spread(msg));
            };
        /**
         * @param {...?} msg
         * @return {?}
         */
        LogService.prototype.warn = /**
         * @param {...?} msg
         * @return {?}
         */
            function () {
                var msg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msg[_i] = arguments[_i];
                }
                console.warn.apply(console, __spread(msg));
            };
        /**
         * @param {...?} msg
         * @return {?}
         */
        LogService.prototype.error = /**
         * @param {...?} msg
         * @return {?}
         */
            function () {
                var msg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msg[_i] = arguments[_i];
                }
                console.error.apply(console, __spread(msg));
            };
        /**
         * @param {?} background
         * @param {?} msg
         * @return {?}
         */
        LogService.prototype.highlight = /**
         * @param {?} background
         * @param {?} msg
         * @return {?}
         */
            function (background, msg) {
                console.log("%c " + msg + " ", "background: " + background + "; color: #000; font-weight: bold;");
            };
        LogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LogService.ctorParameters = function () { return []; };
        /** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });
        return LogService;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var AnnotationService = /** @class */ (function () {
        function AnnotationService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        AnnotationService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
         * GET /annotation/{objectId}
         * get a list of Annotations
         **************************************************************************/
        /**
         * ***********************************************************************
         * GET /annotation/{objectId}
         * get a list of Annotations
         * ************************************************************************
         * @param {?} id
         * @return {?}
         */
        AnnotationService.prototype.getAnnotations = /**
         * ***********************************************************************
         * GET /annotation/{objectId}
         * get a list of Annotations
         * ************************************************************************
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('AnnotationService.getAnnotations()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, "/annotation/" + id);
                return this.http.get(url, httpOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived annotation list", res); }), operators.map(function (res) { return res.map(function (item) { return new Annotation(item); }); }));
            };
        /**************************************************************************
         * POST /annotation
         * create a new event
         **************************************************************************/
        /**
         * ***********************************************************************
         * POST /annotation
         * create a new event
         * ************************************************************************
         * @param {?} annotation
         * @return {?}
         */
        AnnotationService.prototype.createAnnotation = /**
         * ***********************************************************************
         * POST /annotation
         * create a new event
         * ************************************************************************
         * @param {?} annotation
         * @return {?}
         */
            function (annotation) {
                var _this = this;
                this.logService.debug('AnnotationService.createAnnotation()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/annotation');
                this.logService.debug("    POST " + url, annotation);
                return this.http.post(url, annotation.serialize(), httpOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    created annotation", res); }));
            };
        /**************************************************************************
         * PUT /annotation
         * update event
         **************************************************************************/
        /**
         * ***********************************************************************
         * PUT /annotation
         * update event
         * ************************************************************************
         * @param {?} annotation
         * @return {?}
         */
        AnnotationService.prototype.updateAnnotation = /**
         * ***********************************************************************
         * PUT /annotation
         * update event
         * ************************************************************************
         * @param {?} annotation
         * @return {?}
         */
            function (annotation) {
                var _this = this;
                this.logService.debug('AnnotationService.updateAnnotation()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/annotation');
                this.logService.debug("    PUT " + url, annotation);
                return this.http.put(url, annotation.serialize(), httpOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    updated annotation", res); }), operators.map(function (res) { return new Annotation(res); }));
            };
        AnnotationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AnnotationService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ AnnotationService.ngInjectableDef = i0.defineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: AnnotationService, providedIn: "root" });
        return AnnotationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AnnotationComponent = /** @class */ (function () {
        function AnnotationComponent(formBuilder, annotationService, logService) {
            this.formBuilder = formBuilder;
            this.annotationService = annotationService;
            this.logService = logService;
            this.objectId = '';
            this.annotationType = ''; // EVENTLINK, EVENTMODEL, EVENT, OBSERVABILITY, PLAN, COA, TASK
            // create the controls
            this.annotationsFormGroup = this.formBuilder.group({
                factsCtrl: [null, { updateOn: 'blur' }],
                assumptionsCtrl: [null, { updateOn: 'blur' }]
            });
        }
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // call function to update the annotations whenever data changes
                this.annotationsFormGroup.valueChanges.subscribe(function (x) {
                    if (_this.annotationsFormGroup.dirty && _this.annotationsFormGroup.valid) {
                        _this.updateAnnotations();
                        _this.annotationsFormGroup.markAsPristine();
                    }
                });
            };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.logService.debug('AnnotationsComponent.ngOnChanges()');
                if (this.objectId) {
                    // Get annotations for this event and populate the controls. If no annotations exist, create them
                    this.annotationService.getAnnotations(this.objectId).subscribe(function (annotations) {
                        _this.factAnnotations = annotations.filter(function (x) { return x.noteType.toUpperCase() === 'FACT'; });
                        _this.assumptionAnnotations = annotations.filter(function (x) { return x.noteType.toUpperCase() === 'ASSUMPTION'; });
                        // Create new fact and assumption annotations if none exist
                        if (!_this.factAnnotations || _this.factAnnotations.length <= 0) {
                            /** @type {?} */
                            var newAnnotation = new Annotation();
                            newAnnotation.objectId = _this.objectId;
                            newAnnotation.annotationType = _this.annotationType;
                            newAnnotation.noteType = 'Fact';
                            newAnnotation.narrative = '';
                            _this.factAnnotations.push(newAnnotation);
                        }
                        _this.annotationsFormGroup.controls['factsCtrl'].setValue(_this.factAnnotations[0].narrative);
                        if (!_this.assumptionAnnotations || _this.assumptionAnnotations.length <= 0) {
                            /** @type {?} */
                            var newAnnotation = new Annotation();
                            newAnnotation.objectId = _this.objectId;
                            newAnnotation.annotationType = _this.annotationType;
                            newAnnotation.noteType = 'Assumption';
                            newAnnotation.narrative = '';
                            _this.assumptionAnnotations.push(newAnnotation);
                        }
                        _this.annotationsFormGroup.controls['assumptionsCtrl'].setValue(_this.assumptionAnnotations[0].narrative);
                    });
                }
                else {
                    throw new Error("AnnotationComponent: required input parameter 'objectId' is undefined");
                }
            };
        /**
         * @return {?}
         */
        AnnotationComponent.prototype.updateAnnotations = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.logService.debug('AnnotationsComponent::updateAnnotations()');
                /** @type {?} */
                var factsCtrl = this.annotationsFormGroup.controls['factsCtrl'];
                /** @type {?} */
                var assumptionsCtrl = this.annotationsFormGroup.controls['assumptionsCtrl'];
                if (factsCtrl.dirty) {
                    this.factAnnotations[0].narrative = factsCtrl.value;
                    // if the annotationId is empty that indicates that this is a new annotation
                    if (!this.factAnnotations[0].id) {
                        this.annotationService.createAnnotation(this.factAnnotations[0]).subscribe(function (res) {
                            _this.factAnnotations[0] = res;
                        });
                    }
                    else {
                        this.annotationService.updateAnnotation(this.factAnnotations[0]).subscribe(function (res) {
                            _this.factAnnotations[0] = res;
                        });
                    }
                }
                if (assumptionsCtrl.dirty) {
                    this.assumptionAnnotations[0].narrative = assumptionsCtrl.value;
                    if (!this.assumptionAnnotations[0].id) {
                        this.annotationService.createAnnotation(this.assumptionAnnotations[0]).subscribe(function (res) {
                            _this.assumptionAnnotations[0] = res;
                        });
                    }
                    else {
                        this.annotationService.updateAnnotation(this.assumptionAnnotations[0]).subscribe(function (res) {
                            _this.assumptionAnnotations[0] = res;
                        });
                    }
                }
            };
        AnnotationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-annotations',
                        template: "<form [formGroup]=\"annotationsFormGroup\" fxLayout=\"column\">\r\n  <!-- Facts -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"factsCtrl\"></textarea>\r\n    <mat-label>Facts</mat-label>\r\n  </mat-form-field>\r\n\r\n  <!-- Assumptions -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"assumptionsCtrl\"></textarea>\r\n    <mat-label>Assumptions</mat-label>\r\n  </mat-form-field>\r\n</form>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AnnotationComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: AnnotationService },
                { type: LogService }
            ];
        };
        AnnotationComponent.propDecorators = {
            objectId: [{ type: i0.Input }],
            annotationType: [{ type: i0.Input }]
        };
        return AnnotationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageNotFoundComponent = /** @class */ (function () {
        function PageNotFoundComponent() {
        }
        /**
         * @return {?}
         */
        PageNotFoundComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PageNotFoundComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-page-not-found',
                        template: "<div>\r\n  <h1>Page Not Found!</h1>\r\n</div>\r\n",
                        styles: ["div{padding-top:100px;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        PageNotFoundComponent.ctorParameters = function () { return []; };
        return PageNotFoundComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent(logService) {
            this.logService = logService;
        }
        /**
         * @return {?}
         */
        ProgressComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.hideComponent();
            };
        /**
         * @return {?}
         */
        ProgressComponent.prototype.hideComponent = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = document.getElementById('progressContainer');
                if (el) {
                    el.style.display = 'none';
                    this.logService.debug('set style of "progressContainer" to "none"');
                }
                else {
                    this.logService.debug('unable to find element "progressContainer"');
                }
            };
        ProgressComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-progress',
                        template: "<!-- <div *ngIf=\"isSpinnerVisible\" id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> -->\r\n  <div id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>\r\n    <span>\r\n      <mat-spinner diameter=\"64\"></mat-spinner>\r\n    </span>\r\n  </div>\r\n</div>",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["ags-lib-progress #progressContainer{position:absolute;background:rgba(42,42,42,.5);height:100%;width:100%;z-index:100;display:flex}ags-lib-progress #progressContainer div{margin:auto}ags-lib-progress #progressContainer div span>mat-spinner>svg>circle{stroke:#fff;stroke-width:5px;opacity:.75}"]
                    }] }
        ];
        /** @nocollapse */
        ProgressComponent.ctorParameters = function () {
            return [
                { type: LogService }
            ];
        };
        return ProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TitleComponent = /** @class */ (function () {
        function TitleComponent() {
            this.onCancel = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        TitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        TitleComponent.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this.onCancel.emit();
            };
        TitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-title',
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"title-container\">\r\n  <!-- Panel title -->\r\n  <div>\r\n    <h2 class=\"mat-title\">{{title}}</h2>\r\n  </div>\r\n  <div>\r\n    <button mat-icon-button matTooltip=\"Close\" (click)=\"onClick()\" >\r\n      <mat-icon>clear</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                        styles: [".title-container{margin-bottom:15px}.title-container .mat-title{margin:0}"]
                    }] }
        ];
        /** @nocollapse */
        TitleComponent.ctorParameters = function () { return []; };
        TitleComponent.propDecorators = {
            title: [{ type: i0.Input }],
            onCancel: [{ type: i0.Output }]
        };
        return TitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationRequest = /** @class */ (function () {
        function AuthenticationRequest(json) {
            this.userName = json.userName;
            this.password = json.password;
        }
        return AuthenticationRequest;
    }());
    var AuthenticationResponse = /** @class */ (function () {
        function AuthenticationResponse(json) {
            this.authenticated = json.authenticated;
            this.displayName = json.displayName;
            this.reason = json.reason;
            this.token = json.token;
        }
        return AuthenticationResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService(http, router, logService) {
            this.http = http;
            this.router = router;
            this.logService = logService;
            this.serviceUrl = '';
            this.loginRoute = '';
            this.AUTHENICATE = '/authenticate';
            this.GET_DOMAINS = '/domain';
            this.HTTP_OPTIONS = {
                headers: new i1$1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                })
            };
            this.USERINFO_KEY = 'userInfo';
            this.isCurrentlyLoggedIn = false;
            this.username = '';
        }
        /**
         * @param {?} serviceUrl
         * @param {?=} loginRoute
         * @return {?}
         */
        AuthenticationService.prototype.init = /**
         * @param {?} serviceUrl
         * @param {?=} loginRoute
         * @return {?}
         */
            function (serviceUrl, loginRoute) {
                if (loginRoute === void 0) {
                    loginRoute = '/login';
                }
                this.serviceUrl = serviceUrl;
                this.loginRoute = loginRoute;
                this.username = this.getUsernameFromStorage();
                this.isCurrentlyLoggedIn = ((this.username != null) && (this.username.length > 0));
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.redirectToLoginPage = /**
         * @return {?}
         */
            function () {
                this.router.navigateByUrl(this.loginRoute);
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.getAuthenticationServicePrefix = /**
         * @return {?}
         */
            function () {
                return this.serviceUrl;
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.getUsernameFromStorage = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var username = '';
                /** @type {?} */
                var userInfo = this.getUserInfoFromStorage();
                if (userInfo && userInfo.hasOwnProperty('userName') &&
                    (userInfo.userName.length > 0)) {
                    username = userInfo.userName;
                }
                return username;
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.getDisplayNameFromStorage = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var displayName = '';
                /** @type {?} */
                var userInfo = this.getUserInfoFromStorage();
                if (userInfo && userInfo.hasOwnProperty('displayName') &&
                    (userInfo.displayName.length > 0)) {
                    displayName = userInfo.displayName;
                }
                return displayName;
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.getTokenFromStorage = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var token = '';
                /** @type {?} */
                var userInfo = this.getUserInfoFromStorage();
                if (userInfo && userInfo.hasOwnProperty('token') &&
                    (userInfo.token.length > 0)) {
                    token = userInfo.token;
                }
                return token;
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.getUserInfoFromStorage = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var userInfo;
                userInfo = sessionStorage.getItem(this.USERINFO_KEY);
                return JSON.parse(userInfo);
            };
        /**
         * @param {?} userInfo
         * @return {?}
         */
        AuthenticationService.prototype.putUserInfoInStorage = /**
         * @param {?} userInfo
         * @return {?}
         */
            function (userInfo) {
                sessionStorage.setItem(this.USERINFO_KEY, userInfo);
            };
        Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
            get: /**
             * @return {?}
             */ function () {
                return this.isCurrentlyLoggedIn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AuthenticationService.prototype, "currentUser", {
            get: /**
             * @return {?}
             */ function () {
                return this.getUsernameFromStorage();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AuthenticationService.prototype, "displayName", {
            get: /**
             * @return {?}
             */ function () {
                return this.getDisplayNameFromStorage();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AuthenticationService.prototype, "token", {
            get: /**
             * @return {?}
             */ function () {
                return this.getTokenFromStorage();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AuthenticationService.prototype.getAllDomains = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_DOMAINS);
                this.logService.debug('AuthenticationService.getAllDomains() - url = ' + url);
                return this.http.get(url, this.HTTP_OPTIONS).pipe(operators.tap(function (x) { return _this.logService.debug("retreived domain list"); }), operators.map(function (res) { return ( /** @type {?} */(res.strings)); }));
            };
        /**
         * @param {?} userInfo
         * @param {?} domain
         * @return {?}
         */
        AuthenticationService.prototype.logIn = /**
         * @param {?} userInfo
         * @param {?} domain
         * @return {?}
         */
            function (userInfo, domain) {
                var _this = this;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.AUTHENICATE, domain);
                /** @type {?} */
                var authenticationRequest = new AuthenticationRequest(userInfo);
                return this.http.post(url, authenticationRequest, this.HTTP_OPTIONS)
                    .pipe(operators.tap(function (response) {
                    _this.logService.debug('got authentication response ' + JSON.stringify(response));
                    /** @type {?} */
                    var authenticationResponse = new AuthenticationResponse(response);
                    if (authenticationResponse.authenticated) {
                        _this.putUserInfoInStorage(JSON.stringify({
                            userName: userInfo.userName,
                            displayName: authenticationResponse.displayName,
                            token: authenticationResponse.token,
                        }));
                        _this.isCurrentlyLoggedIn = true;
                    }
                }, function (error) {
                    _this.logService.warn('Error authenticating.  [' + error + ']');
                }));
            };
        /**
         * @return {?}
         */
        AuthenticationService.prototype.logOut = /**
         * @return {?}
         */
            function () {
                localStorage.removeItem(this.USERINFO_KEY);
                this.username = '';
                this.isCurrentlyLoggedIn = false;
                sessionStorage.clear();
                this.redirectToLoginPage();
            };
        AuthenticationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthenticationService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: i2.Router },
                { type: LogService }
            ];
        };
        /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.inject(i1$1.HttpClient), i0.inject(i2.Router), i0.inject(LogService)); }, token: AuthenticationService, providedIn: "root" });
        return AuthenticationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(formBuilder, router, route, logService, authenticationService) {
            this.formBuilder = formBuilder;
            this.router = router;
            this.route = route;
            this.logService = logService;
            this.authenticationService = authenticationService;
            this.appName = '';
            this.returnUrl = '';
            this.ERROR_MESSAGES = {
                loginMessage: 'Unable to Sign In, try again.',
            };
            this.domainList = new Array();
            this.selectedDomain = 'cos';
            this.loginFailed = false;
            this.submitted = false;
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // this.appName = this.route.snapshot.data['appName'];
                this.route.queryParams.subscribe(function (params) {
                    _this.returnUrl = params['return'] || '/';
                });
                /** @type {?} */
                var component = this;
                this.authenticationService.getAllDomains()
                    .subscribe(function (response) {
                    for (var i = 0; i < response.length; i++) {
                        component.domainList.push(response[i]);
                    }
                    component.selectedDomain = component.domainList[0];
                });
                this.createForm();
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                // Set the focus to the username (mwt)
                this.username.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.createForm = /**
         * @return {?}
         */
            function () {
                this.loginForm = this.formBuilder.group({
                    username: ['', [
                        // Validators.required,
                        // Validators.minLength(1),
                        // Validators.maxLength(50)
                        ]],
                    password: ['', [
                        // Validators.required,
                        // Validators.minLength(3),
                        // Validators.maxLength(50)
                        ]],
                    domain: [{ value: this.selectedDomain, disabled: false }, [
                            forms.Validators.required,
                        ]],
                });
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.logIn = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.submitted = true;
                /** @type {?} */
                var username = this.loginForm.controls.username.value;
                /** @type {?} */
                var password = this.loginForm.controls.password.value;
                this.authenticationService.logIn({
                    userName: username,
                    password: password
                }, this.selectedDomain)
                    .subscribe(function (res) {
                    /** @type {?} */
                    var authenticationResponse = new AuthenticationResponse(res);
                    if (!authenticationResponse.authenticated) {
                        _this.loginFailed = true;
                    }
                    else {
                        _this.router.navigateByUrl(_this.returnUrl);
                    }
                }, function (err) {
                    _this.logService.debug('Error occured while authenticating.  ' + JSON.stringify(err));
                    _this.loginFailed = true;
                });
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.handleOnFocus = /**
         * @return {?}
         */
            function () {
                if (this.submitted) {
                    this.submitted = false;
                    this.loginFailed = false;
                    this.loginForm.markAsPristine();
                    this.loginForm.markAsUntouched();
                }
            };
        LoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-login',
                        template: "<mat-card>\r\n\r\n  <!-- class for styling only -->\r\n  <form class=\"loginForm\" [formGroup]=\"loginForm\" #inputForm=\"ngForm\" (ngSubmit)=\"logIn()\" fxLayout=\"column\">\r\n\r\n    <div fxLayoutAlign=\"space-between start\">\r\n      <img id=\"logo\" src=\"assets/images/Boeing-logo-dark.svg\">\r\n      <h4 class=\"mat-subheading-1\">{{appName}}</h4>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"fill\" hideRequiredMarker=\"true\">\r\n      <input matInput #username formControlName=\"username\" (focus)=\"handleOnFocus()\">\r\n      <mat-label>Username</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <input matInput formControlName=\"password\" (focus)=\"handleOnFocus()\" type=\"password\">\r\n      <mat-label>Password</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-select [(value)]=\"selectedDomain\" formControlName=\"domain\">\r\n        <mat-option *ngFor=\"let domain of domainList\" [value]=\"domain\">\r\n          {{domain}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-label>Domain</mat-label>\r\n    </mat-form-field>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"left\">\r\n      <button mat-flat-button id=\"submit\" type=\"submit\" [disabled]=\"username.value.length === 0\">\r\n        SIGN IN\r\n      </button>\r\n    </div>\r\n    \r\n    <!-- Invalid login message. -->\r\n    <div [hidden]=\"!(submitted && loginFailed)\">\r\n      <mat-error id=\"formError\">{{ERROR_MESSAGES.loginMessage}}</mat-error>\r\n    </div>\r\n\r\n  </form>\r\n</mat-card>",
                        styles: [".mat-form-field{width:100%}.mat-error{padding:10px;text-align:center}.mat-card{background:inherit}button#submit{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i2.Router },
                { type: i2.ActivatedRoute },
                { type: LogService },
                { type: AuthenticationService }
            ];
        };
        LoginComponent.propDecorators = {
            appName: [{ type: i0.Input }],
            username: [{ type: i0.ViewChild, args: ['username',] }]
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmptyComponent = /** @class */ (function () {
        function EmptyComponent() {
        }
        EmptyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-empty',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        EmptyComponent.ctorParameters = function () { return []; };
        return EmptyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Capability = /** @class */ (function () {
        function Capability(json) {
            this.capabilityId = json.capabilityId;
            this.description = json.description;
            this.confidence = json.confidence;
            this.capabilityMapId = json.capabilityMapId;
            this.preExecutionTime = json.preExecutionTime;
            this.postExecutionTime = json.postExecutionTime;
            this.reliabilityProbability = json.reliabilityProbability;
            this.probabilityOfSuccess = json.probabilityOfSuccess;
            this.isDedicated = json.isDedicated;
            this.assessTime = json.assessTime;
            this.priority = json.priority;
            this.executionTime = json.executionTime;
            this.elevationMinLimit = json.elevationMinLimit;
            this.elevationMaxLimit = json.elevationMaxLimit;
            this.earthLimbAltLimit = json.earthLimbAltLimit;
            this.qualityScore = json.qualityScore;
            this.lunarExclusionAngle = json.lunarExclusionAngle;
            this.applyLightingConstraints = json.applyLightingConstraints;
            this.solarExclusionAngle = json.solarExclusionAngle;
            this.applySolarDarknessConstraint = json.applySolarDarknessConstraint;
            this.rangeMin = json.rangeMin;
            this.rangeMax = json.rangeMax;
            this.azimuthMinLimit = json.azimuthMinLimit;
            this.azimuthMaxLimit = json.azimuthMaxLimit;
        }
        return Capability;
    }());
    var CapabilityMap = /** @class */ (function () {
        function CapabilityMap(json) {
            this.capabilityMapId = '';
            this.capabilityType = '';
            this.uciCapabilityTypeName = '';
            this.uciTaskTypeName = '';
            this.description = '';
            this.hasTarget = false;
            this.capabilityMapId = json.capabilityMapId ? json.capabilityMapId : '';
            this.capabilityType = json.capabilityType ? json.capabilityType : '';
            this.uciCapabilityTypeName = json.uciCapabilityTypeName ? json.uciCapabilityTypeName : '';
            this.uciTaskTypeName = json.uciTaskTypeName ? json.uciTaskTypeName : '';
            this.description = json.description ? json.description : '';
            this.hasTarget = json.hasTarget ? json.hasTarget : '';
        }
        return CapabilityMap;
    }());
    var Observability = /** @class */ (function () {
        function Observability(json) {
            if (json != null) {
                this.observingCapabilityMapId = json.observingCapabilityMapId;
                this.observingCapabilityType = json.observingCapabilityType;
                this.usedCapabilityMapId = json.usedCapabilityMapId;
                this.usedCapabilityType = json.usedCapabilityType;
                this.description = json.description;
                this.capabilityDomain = json.capabilityDomain;
            }
        }
        return Observability;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Vulnerability = /** @class */ (function () {
        function Vulnerability(json) {
            if (json) {
                this.fromJson(json);
            }
        }
        /**
         * @param {?} json
         * @return {?}
         */
        Vulnerability.prototype.fromJson = /**
         * @param {?} json
         * @return {?}
         */
            function (json) {
                this.id = json.vulnerabilityId;
                this.name = json.vulnerabilityName;
                this.description = json.description;
                this.confidence = json.confidence;
            };
        return Vulnerability;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:no-use-before-declare */
    var /* tslint:disable:no-use-before-declare */ Country = /** @class */ (function () {
        function Country(json) {
            if (json) {
                this.fromJson(json);
            }
        }
        /**
         * @param {?} json
         * @return {?}
         */
        Country.prototype.fromJson = /**
         * @param {?} json
         * @return {?}
         */
            function (json) {
                this.code = json[0];
                this.name = json[1];
            };
        /**
         * @return {?}
         */
        Country.prototype.toString = /**
         * @return {?}
         */
            function () {
                return JSON.stringify(this);
            };
        return Country;
    }());
    var Entity = /** @class */ (function () {
        function Entity(json) {
            this.entityType = '';
            this.name = '';
            this.description = '';
            this.owner = '';
            this.sic = '';
            this.countryCodeAlpha5 = '';
            this.affiliation = '';
            this.rgb = '';
            this.colorName = '';
            this.parentId = '';
            this.childrenIds = [];
            this.groupIds = [];
            this.capabilities = [];
            this.entityType = json.entityType;
            this.name = json.name;
            this.description = json.description;
            this.owner = json.owner;
            this.sic = json.sic;
            this.countryCodeAlpha5 = json.countryCodeAlpha5;
            this.affiliation = json.affiliation;
            this.rgb = json.rgb;
            this.colorName = json.colorName;
            this.parentId = json.parentId;
            this.childrenIds = json.childrenIds ? json.childrenIds : [];
            this.groupIds = json.groupIds ? json.groupIds : [];
            this.capabilities = json.capabilities ? json.capabilities.map(function (x) { return new Capability(x); }) : [];
            this.vulnerabilities = json.vulnerabilities ? json.vulnerabilities.map(function (x) { return new Vulnerability(x); }) : [];
            this.domain = json.domain ? new Domain(json.domain) : new Domain();
            this.agsEntityId = json.agsEntityId;
        }
        return Entity;
    }());
    var PartialEntity = /** @class */ (function () {
        function PartialEntity(json) {
            this.entityId = '';
            this.name = '';
            this.countryName = '';
            this.domainType = '';
            this.owner = '';
            this.scc = '';
            this.affiliation = '';
            this.entityId = json.agsEntityId ? json.agsEntityId : '';
            this.name = json.name ? json.name : '';
            this.countryName = json.country ? json.country : '';
            this.domainType = json.domainType ? json.domainType : '';
            this.owner = json.owner ? json.owner : '';
            this.scc = json.sccNum ? json.sccNum.toString() : '';
            this.affiliation = json.affiliation ? json.affiliation : '';
            this.groups = json.groups ? json.groups.map(function (x) { return new Group(x); }) : [];
            this.capabilityTypes = json.capabilityTypes ? json.capabilityTypes : [];
        }
        return PartialEntity;
    }());
    var Group = /** @class */ (function () {
        function Group(json) {
            this.groupName = '';
            this.groupId = '';
            this.groupName = json.groupName ? json.groupName : json.name;
            this.entityCount = json.entityCount;
            this.groupId = json.groupId ? json.groupId : json.id;
            this.name = json.name ? json.name : json.groupName;
            this.id = json.id ? json.id : json.groupId;
        }
        return Group;
    }());
    // BaseEntity class is only intended to be used as a helper class for service calls.
    var  
    // BaseEntity class is only intended to be used as a helper class for service calls.
    BaseEntity = /** @class */ (function () {
        function BaseEntity(entity) {
            this.agsEntityId = entity.agsEntityId;
            this.entityType = entity.entityType ? entity.entityType : '';
            this.name = entity.name;
            this.description = entity.description ? entity.description : '';
            this.owner = entity.owner ? entity.owner : '';
            this.sic = entity.sic ? entity.sic : '';
            this.domainType = entity.domain.domainType ? entity.domain.domainType : '';
        }
        return BaseEntity;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Cache Service is an observables based in-memory cache implementation
     * Keeps track of in-flight observables and sets a default expiry for cached values
     */
    var CacheService = /** @class */ (function () {
        function CacheService() {
            this.cache = new Map();
            this.DEFAULT_MAX_AGE = 300000;
        }
        /**
         * Gets the value from cache if the key is provided.
         */
        /**
         * Gets the value from cache if the key is provided.
         * @param {?} key
         * @param {?=} fallback
         * @param {?=} maxAge
         * @return {?}
         */
        CacheService.prototype.get = /**
         * Gets the value from cache if the key is provided.
         * @param {?} key
         * @param {?=} fallback
         * @param {?=} maxAge
         * @return {?}
         */
            function (key, fallback, maxAge) {
                var _this = this;
                if (this.hasValidCachedValue(key)) {
                    console.log("%cGetting from cache " + key, 'color: green');
                    return rxjs.of(this.cache.get(key).value);
                }
                if (!maxAge) {
                    maxAge = this.DEFAULT_MAX_AGE;
                }
                if (fallback && fallback instanceof rxjs.Observable) {
                    console.log("%c Calling api for " + key, 'color: purple');
                    return fallback.pipe(operators.tap(function (value) { _this.set(key, value, maxAge); /*console.log(`%c added ${key}/${JSON.stringify(value).substr(0, 50)} to cache`, 'color: purple');*/ }));
                }
                else {
                    return rxjs.throwError('Requested key is not available in Cache');
                }
            };
        /**
         * Sets the value with key in the cache
         * Notifies all observers of the new value
         */
        /**
         * Sets the value with key in the cache
         * Notifies all observers of the new value
         * @param {?} key
         * @param {?} value
         * @param {?=} maxAge
         * @return {?}
         */
        CacheService.prototype.set = /**
         * Sets the value with key in the cache
         * Notifies all observers of the new value
         * @param {?} key
         * @param {?} value
         * @param {?=} maxAge
         * @return {?}
         */
            function (key, value, maxAge) {
                if (maxAge === void 0) {
                    maxAge = this.DEFAULT_MAX_AGE;
                }
                this.cache.set(key, { value: value, expiry: Date.now() + maxAge });
            };
        /**
         * Checks if the a key exists in cache
         */
        /**
         * Checks if the a key exists in cache
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.has = /**
         * Checks if the a key exists in cache
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.cache.has(key);
            };
        /**
        * Delete cache entry
        */
        /**
         * Delete cache entry
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.delete = /**
         * Delete cache entry
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this.cache.delete(key);
            };
        /**
         * Checks if the key exists and has not expired.
         */
        /**
         * Checks if the key exists and has not expired.
         * @private
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.hasValidCachedValue = /**
         * Checks if the key exists and has not expired.
         * @private
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (this.cache.has(key)) {
                    if (this.cache.get(key).expiry < Date.now()) {
                        this.cache.delete(key);
                        return false;
                    }
                    return true;
                }
                else {
                    return false;
                }
            };
        CacheService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ CacheService.ngInjectableDef = i0.defineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });
        return CacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$1 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var EntityService = /** @class */ (function () {
        function EntityService(http, logService, cacheService) {
            this.http = http;
            this.logService = logService;
            this.cacheService = cacheService;
            this.serviceUrl = '';
            this.GET_ENTITY = '/entity/';
            this.GET_ENTITIES_BY_SUBSTRING = '/entity/getEntitiesBySubstring/';
            this.GET_ALL_CAPABILITY_TYPES = '/entity/getAllCapabilityTypes';
            this.GET_ALL_CAPABILITY_MAPS = '/entity/getAllCapabilityMaps';
            this.GET_ALL_VULNERABILITIES = '/entity/getAllVulnerabilities';
            this.GET_ALL_AFFILIATIONS = '/entity/getAllAffiliations';
            this.GET_ALL_COUNTRIES = '/entity/getAllCountries';
            this.CREATE_GROUP = '/entity/createGroupByGroupName';
            this.GET_ALL_ENTITY_GROUPS = '/entity/getAllEntityGroups';
            this.GET_ENTITIES_BY_GROUP = '/entity/getEntitiesByGroup/';
            this.GET_PARTIAL_ENTITIES_BY_GROUP = '/entity/getPartialEntitiesByGroup/';
            this.PARTIAL_ENTITIES_BY_SUBSTRINGS = '/entity/partial';
            this.UPDATE_ENTITY = '/entity/';
            this.ADD_OR_UPDATE_CAPABILITY_MAP = '/entity/addOrUpdateCapabilityMap';
            this.ADD_OR_UPDATE_OBSERVABILITY = '/entity/addOrUpdateObservability';
            this.DELETE_ENTITIES = '/entity/deleteEntitiesByIds';
            this.DELETE_CAPABILITY_MAPS = '/entity/deleteCapabilityMapsByIds';
            this.DELETE_OBSERVABILITY = '/entity/deleteObservability/';
            this.DELETE_GROUPS = '/entity/deleteGroupsByIds';
            this.DEFAULT_SEARCH_TYPES = ['name', 'group'];
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        EntityService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        // getPartialEntitiesBySubstring(substring: ByteString): Observable<PartialEntity[]> {
        //   this.logService.debug('EntityService.getPartialEntitiesBySubstring()');
        //   const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITIES_BY_SUBSTRING, substring);
        //   return this.cacheService.get(url, this.http.get<PartialEntity[]>(url, httpOptions)).pipe(
        //     tap(res => this.logService.debug(`    retreived entity list by substring`, res)),
        //     map(res => res.map(item => new PartialEntity(item)))
        //   );
        // }
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**************************************************************************
           *
           *
           **************************************************************************/
        // getPartialEntitiesBySubstring(substring: ByteString): Observable<PartialEntity[]> {
        //   this.logService.debug('EntityService.getPartialEntitiesBySubstring()');
        //   const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITIES_BY_SUBSTRING, substring);
        //   return this.cacheService.get(url, this.http.get<PartialEntity[]>(url, httpOptions)).pipe(
        //     tap(res => this.logService.debug(`    retreived entity list by substring`, res)),
        //     map(res => res.map(item => new PartialEntity(item)))
        //   );
        // }
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getAllCapabilityTypes = /**************************************************************************
           *
           *
           **************************************************************************/
            // getPartialEntitiesBySubstring(substring: ByteString): Observable<PartialEntity[]> {
            //   this.logService.debug('EntityService.getPartialEntitiesBySubstring()');
            //   const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITIES_BY_SUBSTRING, substring);
            //   return this.cacheService.get(url, this.http.get<PartialEntity[]>(url, httpOptions)).pipe(
            //     tap(res => this.logService.debug(`    retreived entity list by substring`, res)),
            //     map(res => res.map(item => new PartialEntity(item)))
            //   );
            // }
            /**
             * ***********************************************************************
             *
             *
             * ************************************************************************
             * @param {?=} useCache
             * @return {?}
             */
            function (useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getAllCapabilityTypes()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_CAPABILITY_TYPES);
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived capability type list", res); }), operators.map(function (res) {
                    return (( /** @type {?} */(res['strings']))).sort(function (n1, n2) {
                        return n1.toLowerCase().localeCompare(n2.toLowerCase());
                    });
                }));
            };
        /**************************************************************************
         * GET /entity/getAllCapabilityMaps
         * get a list of CapabilityMap
         **************************************************************************/
        /**
         * ***********************************************************************
         * GET /entity/getAllCapabilityMaps
         * get a list of CapabilityMap
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getAllCapabilityMaps = /**
         * ***********************************************************************
         * GET /entity/getAllCapabilityMaps
         * get a list of CapabilityMap
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
            function (useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getAllCapabilityMaps()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/entity/getAllCapabilityMaps');
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                // compare function
                /** @type {?} */
                var compareCapabilityMap = function (n1, n2) {
                    return n1.capabilityType.toLowerCase().localeCompare(n2.capabilityType.toLowerCase());
                };
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived capability map list", res); }), operators.map(function (res) { return res.map(function (item) { return new CapabilityMap(item); }).sort(compareCapabilityMap); }));
            };
        /**************************************************************************
         * GET /entity/getObservabilitiesByUsedCapabilityMapId
         * get a list of Observability
         **************************************************************************/
        /**
         * ***********************************************************************
         * GET /entity/getObservabilitiesByUsedCapabilityMapId
         * get a list of Observability
         * ************************************************************************
         * @param {?} capabilityMapId
         * @return {?}
         */
        EntityService.prototype.getObservabilitiesByUsedCapabilityMapId = /**
         * ***********************************************************************
         * GET /entity/getObservabilitiesByUsedCapabilityMapId
         * get a list of Observability
         * ************************************************************************
         * @param {?} capabilityMapId
         * @return {?}
         */
            function (capabilityMapId) {
                var _this = this;
                this.logService.debug('EntityService.getObservabilitiesByUsedCapabilityMapId()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/entity/getObservabilitiesByUsedCapabilityMapId/', capabilityMapId);
                return this.http.get(url, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived capability map list", res); }), operators.map(function (res) { return res.map(function (item) { return new Observability(item); }); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getAllVulnerabilities = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
            function (useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getAllVulnerabilities()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_VULNERABILITIES);
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                // compare function
                /** @type {?} */
                var compareVulnerability = function (n1, n2) {
                    return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
                };
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived all vulnerabilities", res); }), operators.map(function (res) { return res.map(function (item) { return new Vulnerability(item); }).sort(compareVulnerability); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observableType
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getCapabilitiesByObservableType = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observableType
         * @param {?=} useCache
         * @return {?}
         */
            function (observableType, useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getCapabilitiesByObservableType()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/entity/getCapabilitiesByObserverType/', observableType);
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived capabilities list", res); }), operators.map(function (res) { return res.map(function (item) { return new CapabilityMap(item); }); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getAllAffiliations = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
            function (useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getAllAffiliations()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_AFFILIATIONS);
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived affiliation list", res); }), operators.map(function (res) {
                    return res.map(function (item) {
                        return item.affiliation;
                    });
                }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getAllCountries = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
            function (useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getAllCountries()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_COUNTRIES);
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                // compare function
                /** @type {?} */
                var compareCountry = function (n1, n2) {
                    return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
                };
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived country list", res); }), operators.map(function (res) { return res.keyValuePairs.map(function (item) { return new Country(item); }).sort(compareCountry); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} group
         * @param {?} entityIds
         * @return {?}
         */
        EntityService.prototype.createGroup = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} group
         * @param {?} entityIds
         * @return {?}
         */
            function (group, entityIds) {
                var _this = this;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.CREATE_GROUP, encodeURIComponent(group.groupName));
                /** @type {?} */
                var data = {
                    strings: entityIds,
                };
                return this.http.post(url, data, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    created group", res); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
        EntityService.prototype.getAllEntityGroups = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?=} useCache
         * @return {?}
         */
            function (useCache) {
                var _this = this;
                if (useCache === void 0) {
                    useCache = true;
                }
                this.logService.debug('EntityService.getAllEntityGroups()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_ALL_ENTITY_GROUPS);
                if (!useCache) {
                    this.cacheService.delete(url);
                }
                // compare function
                /** @type {?} */
                var compareGroup = function (n1, n2) {
                    return n1.groupName.toLowerCase().localeCompare(n2.groupName.toLowerCase());
                };
                return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived all groups", res); }), operators.map(function (res) { return res.keyValuePairs.map(function (item) { return new Group(item); }).sort(compareGroup); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} id
         * @return {?}
         */
        EntityService.prototype.getEntity = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_ENTITY, id);
                this.logService.debug(url);
                return this.http.get(url, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived entity", res); }), operators.map(function (x) { return new Entity(x); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} id
         * @return {?}
         */
        EntityService.prototype.getEntityById = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('EntityService.getEntityById()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/entity/getEntityById', id);
                return this.http.get(url, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived entity", res); }), operators.map(function (x) { return new Entity(x); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} entity
         * @return {?}
         */
        EntityService.prototype.addEntity = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} entity
         * @return {?}
         */
            function (entity) {
                var _this = this;
                this.logService.debug('EntityService.addEntity()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY);
                return this.http.post(url, entity, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    updated entity " + entity.name, res); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} entity
         * @return {?}
         */
        EntityService.prototype.updateEntity = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} entity
         * @return {?}
         */
            function (entity) {
                var _this = this;
                this.logService.debug('EntityService.updateEntity()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY, entity.agsEntityId);
                return this.http.put(url, entity, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    updated entity " + entity.name, res); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} capabilityMap
         * @return {?}
         */
        EntityService.prototype.addCapabilityMap = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} capabilityMap
         * @return {?}
         */
            function (capabilityMap) {
                this.logService.debug('EntityService.addCapabilityMap');
                return this.updateCapabilityMap(capabilityMap);
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} capabilityMap
         * @return {?}
         */
        EntityService.prototype.updateCapabilityMap = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} capabilityMap
         * @return {?}
         */
            function (capabilityMap) {
                var _this = this;
                this.logService.debug('EntityService.updateCapabilityMap()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_CAPABILITY_MAP);
                return this.http.post(url, capabilityMap, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    updated capability map " + capabilityMap.capabilityType, res); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} group
         * @return {?}
         */
        EntityService.prototype.getPartialEntitiesByGroup = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} group
         * @return {?}
         */
            function (group) {
                var _this = this;
                this.logService.debug('EntityService.getPartialEntitiesByGroup()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.GET_PARTIAL_ENTITIES_BY_GROUP, encodeURIComponent(group));
                // compare function
                /** @type {?} */
                var comparePartialEntity = function (n1, n2) {
                    return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
                };
                return this.http.get(url, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived partial entity list by group", res); }), operators.map(function (res) { return res.map(function (item) { return new PartialEntity(item); }).sort(comparePartialEntity); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} strings
         * @param {?=} searchTypes
         * @return {?}
         */
        EntityService.prototype.partialEntitiesBySubstrings = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} strings
         * @param {?=} searchTypes
         * @return {?}
         */
            function (strings, searchTypes) {
                var _this = this;
                if (searchTypes === void 0) {
                    searchTypes = this.DEFAULT_SEARCH_TYPES;
                }
                this.logService.debug('EntityService.partialEntitiesBySubstrings()');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.PARTIAL_ENTITIES_BY_SUBSTRINGS);
                /** @type {?} */
                var searchParms = {
                    searchTypes: searchTypes,
                    strings: strings,
                };
                // compare function
                /** @type {?} */
                var comparePartialEntity = function (n1, n2) {
                    return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
                };
                return this.http.post(url, searchParms, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived partial entity list by substrings", res); }), operators.map(function (res) { return res.map(function (item) { return new PartialEntity(item); }).sort(comparePartialEntity); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} entityIds
         * @return {?}
         */
        EntityService.prototype.deleteEntities = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} entityIds
         * @return {?}
         */
            function (entityIds) {
                var _this = this;
                this.logService.debug('EntityService.deleteEntities');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.DELETE_ENTITIES);
                // NOTE:  In order to specify the return type of 'text', the generic
                //        signature had to be removed.
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' }),
                    responseType: ( /** @type {?} */('text')),
                    body: {
                        strings: entityIds
                    },
                };
                // return this.http.delete<any>(url, deleteOptions).pipe(
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted entities successfully"); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} capabilityIds
         * @return {?}
         */
        EntityService.prototype.deleteCapabilities = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} capabilityIds
         * @return {?}
         */
            function (capabilityIds) {
                var _this = this;
                this.logService.debug('EntityService.deleteCapabilities');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.DELETE_CAPABILITY_MAPS);
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' }),
                    responseType: ( /** @type {?} */('text')),
                    body: {
                        strings: capabilityIds
                    },
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted capabilities successfully"); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observabilities
         * @return {?}
         */
        EntityService.prototype.addObservabilities = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observabilities
         * @return {?}
         */
            function (observabilities) {
                var _this = this;
                if (!observabilities || observabilities.length === 0) {
                    return rxjs.of('addObservabilities received empty list.  Consider successful.');
                }
                /** @type {?} */
                var addRequests = [];
                observabilities.forEach(function (o) {
                    addRequests.push(_this.addObservability(o));
                });
                return rxjs.forkJoin.apply(void 0, __spread(addRequests));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observability
         * @return {?}
         */
        EntityService.prototype.addObservability = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observability
         * @return {?}
         */
            function (observability) {
                var _this = this;
                this.logService.debug('EntityService.addObservability');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_OBSERVABILITY);
                return this.http.post(url, observability, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    added observability successfully", res); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observabilities
         * @return {?}
         */
        EntityService.prototype.deleteObservabilities = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observabilities
         * @return {?}
         */
            function (observabilities) {
                var _this = this;
                if (!observabilities || observabilities.length === 0) {
                    return rxjs.of('deleteObservabilities received empty list.  Consider successful.');
                }
                /** @type {?} */
                var deleteRequests = [];
                observabilities.forEach(function (o) {
                    deleteRequests.push(_this.deleteObservability(o));
                });
                return rxjs.forkJoin.apply(void 0, __spread(deleteRequests));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observability
         * @return {?}
         */
        EntityService.prototype.deleteObservability = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} observability
         * @return {?}
         */
            function (observability) {
                var _this = this;
                this.logService.debug('EntityService.deleteObservability');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.DELETE_OBSERVABILITY, observability.observingCapabilityMapId, observability.usedCapabilityMapId);
                // NOTE:  In order to specify the return type of 'text', the generic
                //        signature had to be removed.
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' }),
                    responseType: ( /** @type {?} */('text')),
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted observability successfully"); }));
            };
        /**************************************************************************
         *
         *
         **************************************************************************/
        /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} groupIds
         * @return {?}
         */
        EntityService.prototype.deleteGroups = /**
         * ***********************************************************************
         *
         *
         * ************************************************************************
         * @param {?} groupIds
         * @return {?}
         */
            function (groupIds) {
                var _this = this;
                this.logService.debug('EntityService.deleteGroups');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, this.DELETE_GROUPS);
                // NOTE:  In order to specify the return type of 'text', the generic
                //        signature had to be removed.
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' }),
                    responseType: ( /** @type {?} */('text')),
                    body: {
                        strings: groupIds
                    },
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted groups successfully"); }));
            };
        // Rethrow error so client can react.
        // Rethrow error so client can react.
        /**
         * @private
         * @param {?} err
         * @return {?}
         */
        EntityService.prototype.rethrowError =
            // Rethrow error so client can react.
            /**
             * @private
             * @param {?} err
             * @return {?}
             */
            function (err) {
                // NOTE:  Not an error.
                if (err.status === 200 || err.status === 204) {
                    return rxjs.of(err);
                }
                if (err instanceof Response) {
                    return rxjs.throwError(err);
                }
                return rxjs.throwError(err);
            };
        /**
         * @param {?} group
         * @return {?}
         */
        EntityService.prototype.loadEntities = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                var _this = this;
                this.logService.debug('EntityService.loadEntities');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/entity/getPartialEntitiesByGroup/' + encodeURIComponent(group));
                return this.http.get(url, httpOptions$1).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res; }));
            };
        EntityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EntityService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService },
                { type: CacheService }
            ];
        };
        /** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i1$1.HttpClient), i0.inject(LogService), i0.inject(CacheService)); }, token: EntityService, providedIn: "root" });
        return EntityService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var INVALID_ENTITY = new PartialEntity({
        name: '',
        agsEntityId: '',
    });
    var EntitySelectorComponent = /** @class */ (function () {
        function EntitySelectorComponent(ngControl, entityService, logService) {
            this.ngControl = ngControl;
            this.entityService = entityService;
            this.logService = logService;
            this.label = '';
            this.name = '';
            this.id = '';
            this.entities = [];
            this.hasFocus = false;
            this.incomingEntity = INVALID_ENTITY;
            this.selectedEntity = INVALID_ENTITY;
            this.isSearching = false;
            this.createForm();
            if (this.ngControl != null) {
                this.ngControl.valueAccessor = this;
            }
        }
        // ControlValueAccessor methods
        // ControlValueAccessor methods
        /**
         * @param {?} value
         * @return {?}
         */
        EntitySelectorComponent.prototype.writeValue =
            // ControlValueAccessor methods
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this.selectedEntity.entityId = value; };
        /**
         * @param {?} fn
         * @return {?}
         */
        EntitySelectorComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        EntitySelectorComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @return {?}
         */
        EntitySelectorComponent.prototype.createForm = /**
         * @return {?}
         */
            function () {
                this.inputCtrl = new forms.FormControl({ value: '', disabled: false }, { /* validators: Validators.required */});
                this.optionsCtrl = new forms.FormControl();
                this.entitySelectionFormGroup = new forms.FormGroup({
                    inputCtrl: this.inputCtrl,
                    optionsCtrl: this.optionsCtrl,
                });
            };
        /**
         * @return {?}
         */
        EntitySelectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var component = this;
                this.inputCtrl.valueChanges.pipe(operators.debounceTime(500), operators.switchMap(function (term) {
                    /** @type {?} */
                    var termType = typeof term;
                    if (!term || (termType.localeCompare('string') !== 0) || (term.length < 2)) {
                        component.entities = [];
                        component.isSearching = false;
                        return rxjs.empty();
                    }
                    else {
                        component.isSearching = true;
                        component.entities = [];
                        return component.entityService.partialEntitiesBySubstrings(term.split(' '));
                    }
                }))
                    .subscribe(function (result) {
                    component.isSearching = false;
                    component.entities = result;
                });
            };
        /**
         * @return {?}
         */
        EntitySelectorComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.id) {
                    this.incomingEntity = new PartialEntity({
                        name: this.name,
                        agsEntityId: this.id,
                    });
                }
                else {
                    this.incomingEntity = INVALID_ENTITY;
                }
                // Start with incoming equal to selected
                this.selectedEntity = this.incomingEntity;
                if (this.entitySelectionFormGroup) {
                    this.entitySelectionFormGroup.reset({
                        inputCtrl: this.incomingEntity,
                    });
                }
            };
        /**
         * @param {?=} entity
         * @return {?}
         */
        EntitySelectorComponent.prototype.displayEntityAs = /**
         * @param {?=} entity
         * @return {?}
         */
            function (entity) {
                if (entity && entity.name) {
                    return entity.name.trim();
                }
                else {
                    return '';
                }
            };
        // Ensure no list pops up when entering control.
        // Ensure no list pops up when entering control.
        /**
         * @param {?} event
         * @return {?}
         */
        EntitySelectorComponent.prototype.onFocus =
            // Ensure no list pops up when entering control.
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                this.entities = [];
                this.hasFocus = true;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        EntitySelectorComponent.prototype.onBlur = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.entitySelectionFormGroup.reset({
                    inputCtrl: this.selectedEntity,
                });
                this.hasFocus = false;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        EntitySelectorComponent.prototype.onSelected = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectedEntity = event.source.value;
                this.name = this.selectedEntity.name;
                this.id = this.selectedEntity.entityId;
                this.onChange(this.selectedEntity.entityId);
            };
        /**
         * @return {?}
         */
        EntitySelectorComponent.prototype.onMouseDown = /**
         * @return {?}
         */
            function () {
                this.selectedEntity = INVALID_ENTITY;
                this.name = '';
                this.id = '';
                this.onChange('');
                if (this.selectedEntity !== this.incomingEntity) {
                    this.incomingEntity = INVALID_ENTITY;
                }
                this.entities = [];
                this.entitySelectionFormGroup.get('inputCtrl').setValue('', { emitEvent: false });
            };
        /**
         * @param {?} entity
         * @return {?}
         */
        EntitySelectorComponent.prototype.getTitle = /**
         * @param {?} entity
         * @return {?}
         */
            function (entity) {
                /** @type {?} */
                var title = '';
                title += 'SCC:  ' + (entity.scc ? entity.scc.trim() : '');
                title += '\nCountry:  ' + (entity.countryName ? entity.countryName.trim() : '');
                title += '\nAffiliation:  ' + (entity.affiliation ? entity.affiliation.trim() : '');
                return title;
            };
        /**
         * @param {?} entity
         * @param {?} searchTerm
         * @return {?}
         */
        EntitySelectorComponent.prototype.formatResults = /**
         * @param {?} entity
         * @param {?} searchTerm
         * @return {?}
         */
            function (entity, searchTerm) {
                /** @type {?} */
                var result = '';
                /** @type {?} */
                var terms = searchTerm.split(' ');
                result += entity.name.trim();
                // Add SCC if present
                if (entity.scc) {
                    result += ', ' + entity.scc;
                }
                /**
                 * @param {?} termsToSearchFor
                 * @param {?} stringToSearch
                 * @return {?}
                 */
                function areAllTermsFound(termsToSearchFor, stringToSearch) {
                    /** @type {?} */
                    var found = true;
                    for (var i = 0; i < termsToSearchFor.length; i++) {
                        if (stringToSearch.toUpperCase().indexOf(termsToSearchFor[i].toUpperCase()) < 0) {
                            found = false;
                            break;
                        }
                    }
                    return found;
                }
                // Add matching group name(s)
                /** @type {?} */
                var groupText = '';
                /** @type {?} */
                var firstGroup = true;
                entity.groups.forEach(function (group) {
                    if (areAllTermsFound(terms, group.groupName)) {
                        if (!firstGroup) {
                            groupText += ', ';
                        }
                        groupText += group.groupName;
                        firstGroup = false;
                    }
                });
                if (groupText) {
                    result += ' (' + groupText + ')';
                }
                return result;
            };
        EntitySelectorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-entity-selector',
                        template: "<form [formGroup]=\"entitySelectionFormGroup\">\r\n\r\n  <mat-form-field appearance=\"fill\">\r\n    <input type=\"text\" matInput formControlName=\"inputCtrl\" #inputRef\r\n        [matAutocomplete]=\"autoComplete\"\r\n        (blur)=\"onBlur($event)\"\r\n        (focus)=\"onFocus($event)\">\r\n    <button matSuffix mat-icon-button\r\n        *ngIf=\"inputRef.value.length > 0 && hasFocus\"\r\n        tabindex=\"-1\"\r\n        (mousedown)=\"onMouseDown()\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-error>WARNING:  Not a valid Entity</mat-error>\r\n\r\n\r\n    <mat-autocomplete #autoComplete=\"matAutocomplete\"\r\n        [displayWith]=\"displayEntityAs\"\r\n        [class.hidden]=\"entities.length == 0\">\r\n      <mat-option\r\n          *ngIf=\"!isSearching &&\r\n                (!entities || entities.length == 0)\"\r\n          [disabled]=\"true\">\r\n        No Suggestions Found\r\n      </mat-option>\r\n      <mat-option class=\"bower\"\r\n          *ngFor=\"let entity of entities\"\r\n          [value]=\"entity\"\r\n          matTooltip=\"{{ formatResults(entity, inputRef.value) }}\"\r\n          (onSelectionChange)=\"onSelected($event)\">\r\n        <div [innerHTML]=\"formatResults(entity, inputRef.value) | highlight: inputRef.value\"></div>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <mat-progress-bar style=\"top: -20px;\" *ngIf=\"isSearching\"\r\n    color=\"accent\" mode=\"indeterminate\">\r\n  </mat-progress-bar>\r\n\r\n</form>\r\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["ags-lib-entity-selector{overflow-x:visible}ags-lib-entity-selector .mat-form-field{min-width:100%}ags-lib-entity-selector .mat-icon{font-size:18px!important}ags-lib-entity-selector .mat-select-content{background-color:#32cd32}.search-highlight{font-weight:700}.hidden{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        EntitySelectorComponent.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: i0.Optional }, { type: i0.Self }] },
                { type: EntityService },
                { type: LogService }
            ];
        };
        EntitySelectorComponent.propDecorators = {
            label: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            id: [{ type: i0.Input }]
        };
        return EntitySelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChipDisplayComponent = /** @class */ (function () {
        //
        function ChipDisplayComponent(ngControl, logService) {
            this.ngControl = ngControl;
            this.logService = logService;
            // Label to be displayed as placeholder
            this.label = '';
            // Can an item be added more than once?
            this.allowDuplicates = true;
            // Is control disabled?
            this.enabled = true;
            // Property name on which to base equality
            this.equalityProperty = '';
            if (this.ngControl != null) {
                this.ngControl.valueAccessor = this;
            }
        }
        //
        // ControlValueAccessor methods
        //
        // ControlValueAccessor methods
        /**
         * @param {?} value
         * @return {?}
         */
        ChipDisplayComponent.prototype.writeValue =
            //
            // ControlValueAccessor methods
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.selectedItems = value;
                this.determineRemainingSelectableItems();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ChipDisplayComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        ChipDisplayComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @return {?}
         */
        ChipDisplayComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        // Gets fired on changes to all inputs, but only need to take some action when
        // selectable items get changed.
        // Gets fired on changes to all inputs, but only need to take some action when
        // selectable items get changed.
        /**
         * @param {?} changes
         * @return {?}
         */
        ChipDisplayComponent.prototype.ngOnChanges =
            // Gets fired on changes to all inputs, but only need to take some action when
            // selectable items get changed.
            /**
             * @param {?} changes
             * @return {?}
             */
            function (changes) {
                if (changes.selectableItems) {
                    // If remaining items list hasn't yet been populated, do that now.
                    if (!this.remainingSelectableItems) {
                        this.remainingSelectableItems = this.selectableItems.slice(0, this.selectableItems.length);
                    }
                    this.determineRemainingSelectableItems();
                }
            };
        // Item selected from list
        // Item selected from list
        /**
         * @param {?} item
         * @return {?}
         */
        ChipDisplayComponent.prototype.onSelected =
            // Item selected from list
            /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                this.selectedItems.push(item);
                this.determineRemainingSelectableItems();
                this.onChange(this.selectedItems);
            };
        // Item removed from displayed chips
        // Item removed from displayed chips
        /**
         * @param {?} item
         * @return {?}
         */
        ChipDisplayComponent.prototype.onRemoved =
            // Item removed from displayed chips
            /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var index = this.selectedItems.indexOf(item);
                if (index >= 0) {
                    this.selectedItems.splice(index, 1);
                }
                this.determineRemainingSelectableItems();
                this.onChange(this.selectedItems);
            };
        // If "Allow duplicates" flag is "true", keep selectable list the same.
        // If "Allow duplicates" flag is "false", remove selected items from selectable list.
        // If "Allow duplicates" flag is "true", keep selectable list the same.
        // If "Allow duplicates" flag is "false", remove selected items from selectable list.
        /**
         * @return {?}
         */
        ChipDisplayComponent.prototype.determineRemainingSelectableItems =
            // If "Allow duplicates" flag is "true", keep selectable list the same.
            // If "Allow duplicates" flag is "false", remove selected items from selectable list.
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (!this.selectedItems || !this.selectableItems) {
                    return;
                }
                if (!this.allowDuplicates) {
                    this.remainingSelectableItems = this.selectableItems.filter(function (x) {
                        return !_this.findItemInList(x, _this.selectedItems);
                    });
                }
            };
        // Search for equality of items by comparing value in KeyValue pair
        // Search for equality of items by comparing value in KeyValue pair
        /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
        ChipDisplayComponent.prototype.findItemInList =
            // Search for equality of items by comparing value in KeyValue pair
            /**
             * @param {?} item
             * @param {?} list
             * @return {?}
             */
            function (item, list) {
                if (!item || list.length === 0) {
                    return false;
                }
                /** @type {?} */
                var itemValueType = typeof item.value;
                /** @type {?} */
                var listValueType = typeof list[0].value;
                if (itemValueType !== listValueType) {
                    this.logService.warn('Chip display comparing unequal types.  Ensure selectable items and selected items are of same type.');
                    return false;
                }
                if (itemValueType === 'number') {
                    return this.compareNumbers(item, list);
                }
                else if (itemValueType === 'string') {
                    return this.compareStrings(item, list);
                }
                else if (itemValueType === 'object' && this.equalityProperty &&
                    item.value.hasOwnProperty(this.equalityProperty)) {
                    return this.compareObjects(item, list);
                }
                else {
                    return false;
                }
            };
        /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
        ChipDisplayComponent.prototype.compareNumbers = /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
            function (item, list) {
                /** @type {?} */
                var index = list.length;
                while (index--) {
                    if (list[index].value === item.value) {
                        return true;
                    }
                }
                return false;
            };
        /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
        ChipDisplayComponent.prototype.compareStrings = /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
            function (item, list) {
                /** @type {?} */
                var index = list.length;
                while (index--) {
                    if (list[index].value.localeCompare(item.value) === 0) {
                        return true;
                    }
                }
                return false;
            };
        /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
        ChipDisplayComponent.prototype.compareObjects = /**
         * @param {?} item
         * @param {?} list
         * @return {?}
         */
            function (item, list) {
                /** @type {?} */
                var index = list.length;
                while (index--) {
                    if (list[index].value[this.equalityProperty] === item.value[this.equalityProperty]) {
                        return true;
                    }
                }
                return false;
            };
        ChipDisplayComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-chip-display',
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n  \r\n  <mat-form-field appearance=\"fill\" disabled=\"!enabled\">\r\n    <mat-chip-list placeholder=\"label\">\r\n      <mat-chip *ngFor=\"let selectedItem of selectedItems\" \r\n          [selectable]=\"true\" \r\n          [removable]=\"true\" \r\n          (removed)=\"onRemoved(selectedItem)\">\r\n        {{ selectedItem.key }}\r\n        <mat-icon matChipRemove>cancel</mat-icon>\r\n      </mat-chip>\r\n      <div>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"selectableMenu\"\r\n            [disabled]=\"!enabled\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-chip-list>\r\n    <mat-label>{{ label }}</mat-label>\r\n  </mat-form-field>\r\n\r\n  <mat-menu #selectableMenu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let selectableItem of remainingSelectableItems\" \r\n        (click)=\"onSelected(selectableItem)\">\r\n      {{ selectableItem.key }}\r\n    </button>\r\n  </mat-menu>\r\n  \r\n</div>\r\n  ",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div{flex-grow:1}ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div button{float:right}"]
                    }] }
        ];
        /** @nocollapse */
        ChipDisplayComponent.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: i0.Optional }, { type: i0.Self }] },
                { type: LogService }
            ];
        };
        ChipDisplayComponent.propDecorators = {
            label: [{ type: i0.Input }],
            selectableItems: [{ type: i0.Input }],
            allowDuplicates: [{ type: i0.Input }],
            enabled: [{ type: i0.Input }],
            equalityProperty: [{ type: i0.Input }]
        };
        return ChipDisplayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MY_CUSTOM_FORMATS = {
        parseInput: 'YYYY-MM-DD HH:mm:ss',
        fullPickerInput: DateFormatPipe.format,
        datePickerInput: 'YYYY-MM',
        timePickerInput: 'hh:mm:ss',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'MMM YYYY',
        monthYearA11yLabel: 'MMM YYYY',
    };
    var DateTimePickerComponent = /** @class */ (function () {
        /////////////////////
        function DateTimePickerComponent(fm, elRef, ngControl) {
            var _this = this;
            this.fm = fm;
            this.elRef = elRef;
            this.ngControl = ngControl;
            this.id = "date-time-picker-" + DateTimePickerComponent.nextId++;
            this.describedBy = '';
            this.stateChanges = new rxjs.Subject();
            this.focused = false;
            this.errorState = false;
            this.controlType = 'date-time-picker';
            this._required = false;
            this._disabled = false;
            this._momentValue = moment(); // usa a Moment object internally to store the date value
            // Implementation of MatFormFieldControl interface
            this.fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
                _this.focused = !!origin;
                _this.stateChanges.next();
            });
            if (this.ngControl != null) {
                this.ngControl.valueAccessor = this;
            } // required for interaction with Angular forms
            /////////////
        }
        Object.defineProperty(DateTimePickerComponent.prototype, "shouldLabelFloat", {
            get: /**
             * @return {?}
             */ function () { return this.focused || !this.empty; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} inValue
         * @return {?}
         */
        DateTimePickerComponent.prototype.writeValue = /**
         * @param {?} inValue
         * @return {?}
         */
            function (inValue) {
                console.log("date-time-picker input string = " + inValue);
                this.value = inValue;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        DateTimePickerComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        DateTimePickerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        DateTimePickerComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) { this.disabled = isDisabled; };
        Object.defineProperty(DateTimePickerComponent.prototype, "placeholder", {
            //////////////////////
            // Implementation of MatFormFieldControl properties
            get: 
            //////////////////////
            // Implementation of MatFormFieldControl properties
            /**
             * @return {?}
             */
            function () { return this._placeholder; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._placeholder = 'value';
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTimePickerComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () { return this._required; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._required = coercion.coerceBooleanProperty(value);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTimePickerComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTimePickerComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._momentValue.utc().toISOString();
            },
            set: /**
             * @param {?} newVal
             * @return {?}
             */ function (newVal) {
                this._momentValue = moment.utc(newVal);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTimePickerComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                return !this._momentValue;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DateTimePickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.stateChanges.complete();
                this.fm.stopMonitoring(this.elRef.nativeElement);
            };
        // Implementation of MatFormFieldControl methods
        // Implementation of MatFormFieldControl methods
        /**
         * @param {?} ids
         * @return {?}
         */
        DateTimePickerComponent.prototype.setDescribedByIds =
            // Implementation of MatFormFieldControl methods
            /**
             * @param {?} ids
             * @return {?}
             */
            function (ids) {
                this.describedBy = ids.join(' ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DateTimePickerComponent.prototype.onContainerClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if ((( /** @type {?} */(event.target))).tagName.toLowerCase() !== 'input') {
                    this.elRef.nativeElement.querySelector('input').focus();
                }
            };
        ////////////////////
        // My functions
        ////////////////////
        // My functions
        /**
         * @param {?} event
         * @return {?}
         */
        DateTimePickerComponent.prototype.onDataChanged =
            ////////////////////
            // My functions
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                this._momentValue = moment.utc(this._momentValue.toObject()); // force to UTC
                console.log("date-time-picker output string = " + this.value);
                this.onChange(this.value); // required for interaction with Angular forms
            };
        // Implementation of MatFormFieldControl
        // tslint:disable-next-line:member-ordering
        DateTimePickerComponent.nextId = 0;
        DateTimePickerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-date-time-picker',
                        template: "<div>\r\n  <input [(ngModel)]=\"_momentValue\" [owlDateTime]=\"dt\" (change)=\"onDataChanged($event)\">\r\n  <svg class=\"icon\" [owlDateTimeTrigger]=\"dt\" fill=\"currentColor\" focusable=\"false\" height=\"20px\" viewBox=\"0 0 24 24\"\r\n    width=\"20px\">\r\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path>\r\n  </svg>\r\n  <owl-date-time #dt (afterPickerClosed)=\"onDataChanged($event)\" showSecondsTimer=\"true\"></owl-date-time>\r\n  <!-- <input type=\"datetime-local\" step=\"1\" [(ngModel)]=\"value\"> -->\r\n</div>\r\n",
                        providers: [{ provide: material.MatFormFieldControl, useExisting: DateTimePickerComponent },
                            { provide: ngPickDatetime.DateTimeAdapter, useClass: ngPickDatetimeMoment.MomentDateTimeAdapter, deps: [ngPickDatetime.OWL_DATE_TIME_LOCALE] },
                            { provide: ngPickDatetime.OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["div .icon{position:absolute;right:0;top:0;cursor:pointer}div input{color:currentcolor;border:none;background:0 0;outline:0;font:inherit}"]
                    }] }
        ];
        /** @nocollapse */
        DateTimePickerComponent.ctorParameters = function () {
            return [
                { type: a11y.FocusMonitor },
                { type: i0.ElementRef },
                { type: forms.NgControl, decorators: [{ type: i0.Optional }, { type: i0.Self }] }
            ];
        };
        DateTimePickerComponent.propDecorators = {
            shouldLabelFloat: [{ type: i0.HostBinding, args: ['class.floating',] }],
            id: [{ type: i0.HostBinding, args: ['id',] }],
            describedBy: [{ type: i0.HostBinding, args: ['attr.aria-describedby',] }],
            placeholder: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return DateTimePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    This service provides methods to load custom icons, and it provides methods for
    converting states to icon names.

    To use a custom icon in a <mat-icon> element...

      <mat-icon svgIcon="custom-icon-name"></mat-icon>

    To create a state icon, there are 2 ways of doing it. You can use the <ags-lib-state-icon> component,
    Or you can use the icon service directly in a <mat-icon> element.

      <ags-lib-state-icon state="executing"></ags-lib-state-icon>
      <mat-icon [svgIcon]="iconService.getIconNameFromState('executing')" [ngClass]="iconService.getStateClass('executing')"></mat-icon>

    There are also UCI versions of the examples above, because UCI has it's own states and colors.

      <ags-lib-uci-state-icon state="executing"></ags-lib-uci-state-icon>
      <mat-icon [svgIcon]="iconService.getIconNameFromUciState('executing')" [ngClass]="iconService.getUciStateClass('executing')"></mat-icon>
    */
    var IconService = /** @class */ (function () {
        function IconService(iconRegistry, sanitizer) {
            this.iconRegistry = iconRegistry;
            this.sanitizer = sanitizer;
            this._iconNameToSvgElementMap = new Map();
            // These are the custom icons to be loaded into the MatIconRegistry
            // the first item is the icon name, and the second item is the file
            // containing the SVG definition of the icon
            this._iconNameToFileNameMap = new Map([
                //[custom-icon-name, SVG file name]
                ['circle-filled', 'assets/svg-icons/circle-filled.svg'],
                ['circle-outlined', 'assets/svg-icons/circle-outlined.svg'],
                ['add-event', 'assets/svg-icons/Add-Event.svg'],
                ['back-to-now', 'assets/svg-icons/Back-to-Now.svg'],
                ['connect-points', 'assets/svg-icons/Connect-Points.svg'],
                ['delete', 'assets/svg-icons/Delete.svg'],
                ['pushpin', 'assets/svg-icons/Pushpin.svg'],
                ['refresh', 'assets/svg-icons/Refresh.svg'],
                ['response-add', 'assets/svg-icons/Response-Add.svg'],
                ['sequence', 'assets/svg-icons/Sequence.svg'],
                ['setting', 'assets/svg-icons/Setting.svg'],
                ['timeline', 'assets/svg-icons/Timeline.svg'],
                ['status-ok', 'assets/svg-icons/Status-OK.svg'],
                ['status-alert', 'assets/svg-icons/Status-ALERT.svg'],
                ['status-caution', 'assets/svg-icons/Status-CAUTION.svg'],
                ['status-error', 'assets/svg-icons/Status-ERROR.svg'],
                ['status-off', 'assets/svg-icons/Status-OFF.svg'],
                ['status-standby', 'assets/svg-icons/Status-STANDBY.svg']
            ]);
            // map state names to icon names
            this._stateToIconNameMap = new Map([
                //[state, icon name]
                ['uci-unallocated', 'circle-filled'],
                ['uci-allocated', 'circle-filled'],
                ['uci-proposed', 'circle-filled'],
                ['uci-planned', 'circle-filled'],
                ['uci-executing', 'circle-outlined'],
                ['uci-completed', 'circle-filled'],
                ['uci-failed', 'circle-filled'],
                ['uci-cancelled', 'circle-filled'],
                ['uci-unknown', 'circle-outlined'],
                ['off', 'circle-outlined'],
                ['occurring', 'circle-filled'],
                ['executing', 'circle-filled'],
                ['occurred', 'circle-filled'],
                ['ok', 'circle-filled'],
                ['completed', 'circle-filled'],
                ['caution', 'circle-filled'],
                ['proposed', 'circle-filled'],
                ['not_occurred', 'circle-filled'],
                ['not-occurred', 'circle-filled'],
                ['notoccurred', 'circle-filled'],
                ['alert', 'circle-filled'],
                ['failed', 'circle-filled'],
                ['error', 'circle-filled'],
                ['standby', 'circle-outlined'],
                ['unknown', 'circle-outlined']
            ]);
        }
        /****************************************************************************
         * load custom icons. Use them in HTML like this... <mat-icon svgIcon="add-event"></mat-icon>
         ****************************************************************************/
        /**
         * *************************************************************************
         * load custom icons. Use them in HTML like this... <mat-icon svgIcon="add-event"></mat-icon>
         * **************************************************************************
         * @return {?}
         */
        IconService.prototype.init = /**
         * *************************************************************************
         * load custom icons. Use them in HTML like this... <mat-icon svgIcon="add-event"></mat-icon>
         * **************************************************************************
         * @return {?}
         */
            function () {
                var _this = this;
                this._iconNameToFileNameMap.forEach(function (v, k) {
                    _this.iconRegistry.addSvgIcon(k, _this.sanitizer.bypassSecurityTrustResourceUrl(v));
                });
                this._iconNameToFileNameMap.forEach(function (v, k) {
                    _this.iconRegistry.getNamedSvgIcon(k).subscribe(function (res) {
                        _this._iconNameToSvgElementMap.set(k, res);
                    });
                });
            };
        /****************************************************************************
         * Get icon SVG element from icon string name
         ****************************************************************************/
        /**
         * *************************************************************************
         * Get icon SVG element from icon string name
         * **************************************************************************
         * @param {?} iconStrName
         * @return {?}
         */
        IconService.prototype.getIconSvgElement = /**
         * *************************************************************************
         * Get icon SVG element from icon string name
         * **************************************************************************
         * @param {?} iconStrName
         * @return {?}
         */
            function (iconStrName) {
                /** @type {?} */
                var svg;
                try {
                    if (!iconStrName || iconStrName.length === 0 || !this._iconNameToSvgElementMap.has(iconStrName)) {
                        iconStrName = 'circle-outlined';
                    }
                    svg = this._iconNameToSvgElementMap.get(iconStrName);
                }
                catch (e) {
                    svg = new SVGElement();
                }
                return svg;
            };
        /****************************************************************************
         *
         ****************************************************************************/
        /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
        IconService.prototype.getIconNameFromState = /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
            function (state) {
                try {
                    if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
                        state = 'unknown';
                    }
                    return this._stateToIconNameMap.get(state);
                }
                catch (e) {
                    return 'circle-outlined';
                }
            };
        /****************************************************************************
         *
         ****************************************************************************/
        /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
        IconService.prototype.getIconSvgElementFromState = /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
            function (state) {
                return this.getIconSvgElement(this.getIconNameFromState(state));
            };
        /****************************************************************************
         *
         ****************************************************************************/
        /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
        IconService.prototype.getIconNameFromUciState = /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
            function (state) {
                return this.getIconNameFromState("uci-" + state);
            };
        /****************************************************************************
         *
         ****************************************************************************/
        /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
        IconService.prototype.getIconSvgElementFromUciState = /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
            function (state) {
                return this.getIconSvgElementFromState("uci-" + state);
            };
        /****************************************************************************
         *
         ****************************************************************************/
        /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
        IconService.prototype.getStateClass = /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
            function (state) {
                try {
                    if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
                        state = 'unknown';
                    }
                    return "state-" + state.toLowerCase();
                }
                catch (e) {
                    return 'state-unknown';
                }
            };
        /****************************************************************************
         *
         ****************************************************************************/
        /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
        IconService.prototype.getUciStateClass = /**
         * *************************************************************************
         *
         * **************************************************************************
         * @param {?} state
         * @return {?}
         */
            function (state) {
                try {
                    if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
                        state = 'unknown';
                    }
                    return "uci-state-" + state.toLowerCase();
                }
                catch (e) {
                    return 'uci-state-unknown';
                }
            };
        IconService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IconService.ctorParameters = function () {
            return [
                { type: material.MatIconRegistry },
                { type: i1.DomSanitizer }
            ];
        };
        /** @nocollapse */ IconService.ngInjectableDef = i0.defineInjectable({ factory: function IconService_Factory() { return new IconService(i0.inject(i1$2.MatIconRegistry), i0.inject(i1.DomSanitizer)); }, token: IconService, providedIn: "root" });
        return IconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StateIconComponent = /** @class */ (function () {
        function StateIconComponent(iconService) {
            this.iconService = iconService;
        }
        /**
         * @return {?}
         */
        StateIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.iconService.init();
            };
        StateIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-state-icon',
                        template: "\n    <mat-icon [svgIcon]=\"iconService.getIconNameFromState(state)\" [ngClass]=\"iconService.getStateClass(state)\"></mat-icon>\n    ",
                        styles: [":host{display:flex}"]
                    }] }
        ];
        /** @nocollapse */
        StateIconComponent.ctorParameters = function () {
            return [
                { type: IconService }
            ];
        };
        StateIconComponent.propDecorators = {
            state: [{ type: i0.Input }]
        };
        return StateIconComponent;
    }());
    var UciStateIconComponent = /** @class */ (function () {
        function UciStateIconComponent(iconService) {
            this.iconService = iconService;
        }
        /**
         * @return {?}
         */
        UciStateIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.iconService.init();
            };
        UciStateIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ags-lib-uci-state-icon',
                        template: "\n    <mat-icon [svgIcon]=\"iconService.getIconNameFromUciState(state)\" [ngClass]=\"iconService.getUciStateClass(state)\"></mat-icon>\n    "
                    }] }
        ];
        /** @nocollapse */
        UciStateIconComponent.ctorParameters = function () {
            return [
                { type: IconService }
            ];
        };
        UciStateIconComponent.propDecorators = {
            state: [{ type: i0.Input }]
        };
        return UciStateIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AgsHmiLibraryModule = /** @class */ (function () {
        function AgsHmiLibraryModule() {
        }
        AgsHmiLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [forms.FormsModule, forms.ReactiveFormsModule, MaterialModule, flexLayout.FlexLayoutModule,
                            common.CommonModule, ngPickDatetime.OwlDateTimeModule, ngPickDatetime.OwlNativeDateTimeModule
                        ],
                        declarations: [
                            AnnotationComponent,
                            ChipDisplayComponent,
                            DateFormatPipe,
                            DateTimePickerComponent,
                            EmptyComponent,
                            EntitySelectorComponent,
                            HighlightPipe,
                            LoginComponent,
                            OrderByPipe,
                            PageNotFoundComponent,
                            ProgressComponent,
                            RemoveItemPipe,
                            StateIconComponent,
                            TitleComponent,
                            TruncatePipe,
                            UciStateIconComponent
                        ],
                        exports: [
                            AnnotationComponent,
                            ChipDisplayComponent,
                            DateFormatPipe,
                            DateTimePickerComponent,
                            EmptyComponent,
                            EntitySelectorComponent,
                            HighlightPipe,
                            LoginComponent,
                            OrderByPipe,
                            PageNotFoundComponent,
                            ProgressComponent,
                            RemoveItemPipe,
                            StateIconComponent,
                            TitleComponent,
                            TruncatePipe,
                            UciStateIconComponent
                        ],
                        entryComponents: []
                    },] }
        ];
        return AgsHmiLibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertService = /** @class */ (function () {
        function AlertService() {
        }
        Object.defineProperty(AlertService.prototype, "wss", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (!this._wss || this._wss.closed) {
                    console.log('AlertService: create WebSocketSubject');
                    this._wss = new webSocket.WebSocketSubject(this._wssConfig);
                }
                else {
                    console.log('AlertService: WebSocketSubject already created');
                }
                return this._wss;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        AlertService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                if (this._wss) {
                    this._wss.unsubscribe();
                    this._wss = null;
                }
                this._wssConfig = {
                    url: serviceUrl,
                    closeObserver: {
                        next: function (e) {
                            console.log("%c WEBSOCKET CLOSED ", "background: black; color: #fff; font-weight: bold;", 'Attempting to reconnect...');
                        }
                    },
                    openObserver: {
                        next: function (e) {
                            console.log("%c WEBSOCKET OPEN ", "background: green; color: #fff; font-weight: bold;");
                        }
                    }
                };
                this.serviceUrl = serviceUrl;
            };
        /**
         * @return {?}
         */
        AlertService.prototype.getMessages = /**
         * @return {?}
         */
            function () {
                return this.wss.pipe(
                // Adds ability to reconnect a disconnected websocket
                // @see https://stackoverflow.com/a/44067972
                operators.retry(), operators.map(function (res) { return res; }) // this can be used to modify the incoming message
                );
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        AlertService.prototype.sendMessage = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.wss.next(msg);
            };
        AlertService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AlertService.ctorParameters = function () { return []; };
        /** @nocollapse */ AlertService.ngInjectableDef = i0.defineInjectable({ factory: function AlertService_Factory() { return new AlertService(); }, token: AlertService, providedIn: "root" });
        return AlertService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$2 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var CalService = /** @class */ (function () {
        function CalService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        CalService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
         * GET /cal/task/byUciTaskId/${uciTaskId}
         **************************************************************************/
        /**
         * ***********************************************************************
         * GET /cal/task/byUciTaskId/${uciTaskId}
         * ************************************************************************
         * @param {?} uciTaskId
         * @return {?}
         */
        CalService.prototype.getTask = /**
         * ***********************************************************************
         * GET /cal/task/byUciTaskId/${uciTaskId}
         * ************************************************************************
         * @param {?} uciTaskId
         * @return {?}
         */
            function (uciTaskId) {
                var _this = this;
                this.logService.debug('CalService.getTask');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/cal/task/byUciTaskId/' + uciTaskId);
                return this.http.get(url, httpOptions$2).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Task successfully"); }), operators.map(function (res) { return res; }));
            };
        /**************************************************************************
         * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
         **************************************************************************/
        /**
         * ***********************************************************************
         * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
         * ************************************************************************
         * @param {?} planId
         * @param {?} uciTaskId
         * @return {?}
         */
        CalService.prototype.addTaskToPlan = /**
         * ***********************************************************************
         * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
         * ************************************************************************
         * @param {?} planId
         * @param {?} uciTaskId
         * @return {?}
         */
            function (planId, uciTaskId) {
                var _this = this;
                this.logService.debug('CalService.addTaskToPlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/cal/task/' + planId + '/byUciTaskId/' + uciTaskId);
                return this.http.put(url, httpOptions$2).pipe(operators.tap(function (res) { return _this.logService.debug("    added Task successfully"); }), operators.map(function (res) { return res; }));
            };
        /**************************************************************************
         * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
         **************************************************************************/
        /**
         * ***********************************************************************
         * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
         * ************************************************************************
         * @param {?} uciTaskId
         * @return {?}
         */
        CalService.prototype.rejectTask = /**
         * ***********************************************************************
         * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
         * ************************************************************************
         * @param {?} uciTaskId
         * @return {?}
         */
            function (uciTaskId) {
                var _this = this;
                this.logService.debug('CalService.rejectTask');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/cal/task/reject/byUciTaskId/' + uciTaskId);
                return this.http.put(url, httpOptions$2).pipe(operators.tap(function (res) { return _this.logService.debug("    Task rejected successfully"); }), operators.map(function (res) { return res; }));
            };
        /**************************************************************************
         * Send task request
         * PUT cal/task/{eventId}/{planId}
         **************************************************************************/
        /**
         * ***********************************************************************
         * Send task request
         * PUT cal/task/{eventId}/{planId}
         * ************************************************************************
         * @param {?} eventId
         * @param {?} planId
         * @return {?}
         */
        CalService.prototype.sendTaskingRequest = /**
         * ***********************************************************************
         * Send task request
         * PUT cal/task/{eventId}/{planId}
         * ************************************************************************
         * @param {?} eventId
         * @param {?} planId
         * @return {?}
         */
            function (eventId, planId) {
                var _this = this;
                this.logService.debug('CalService.sendTaskRequest');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, "/cal/task/" + eventId + "/" + planId);
                console.log('   ' + url);
                return this.http.put(url, '', { responseType: 'text' }).pipe(operators.tap(function (res) { return _this.logService.debug("    task request sent"); }), operators.map(function (res) { return res; }));
            };
        CalService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CalService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ CalService.ngInjectableDef = i0.defineInjectable({ factory: function CalService_Factory() { return new CalService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: CalService, providedIn: "root" });
        return CalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$3 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var DraftPlanService = /** @class */ (function () {
        function DraftPlanService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        DraftPlanService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
         * POST /plan/draftPlan/${planId}
      
         **************************************************************************/
        /**
         * ***********************************************************************
         * POST /plan/draftPlan/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
        DraftPlanService.prototype.draftPlan = /**
         * ***********************************************************************
         * POST /plan/draftPlan/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.draftPlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/draftPlan/' + planId);
                return this.http.post(url, httpOptions$3).pipe(operators.tap(function (res) { return _this.logService.debug("    added PlanAsset successfully"); }), operators.map(function (res) { return res; }));
            };
        DraftPlanService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DraftPlanService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ DraftPlanService.ngInjectableDef = i0.defineInjectable({ factory: function DraftPlanService_Factory() { return new DraftPlanService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: DraftPlanService, providedIn: "root" });
        return DraftPlanService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlanMinTaskData = /** @class */ (function () {
        function PlanMinTaskData(json) {
            this.assetEntityId = '';
            this.assetName = '';
            this.capability = '';
            this.capabilityId = '';
            this.missionTaskId = '';
            this.targetEntityId = '';
            this.targetName = '';
            this.startTime = new Date();
            this.endTime = new Date();
            if (json) {
                this.assetEntityId = _.isNil(json.assetEntityId) ? '' : json.assetEntityId;
                this.assetName = _.isNil(json.assetName) ? '' : json.assetName;
                this.capability = _.isNil(json.capability) ? '' : json.capability;
                this.capabilityId = _.isNil(json.capabilityId) ? '' : json.capabilityId;
                this.missionTaskId = _.isNil(json.missionTaskId) ? '' : json.missionTaskId;
                this.targetEntityId = _.isNil(json.targetEntityId) ? '' : json.targetEntityId;
                this.targetName = _.isNil(json.targetName) ? '' : json.targetName;
                this.startTime = new Date(json.startTime);
                this.endTime = new Date(json.endTime);
                this.isPlanned = json.isPlanned;
                // DELETE:
                this.assetEntityId = this.assetEntityId.trim();
                this.targetEntityId = this.targetEntityId.trim();
                //NEW SERVICE PROPERTIES
                this.planId = _.isNil(json.planId) ? '' : json.planId;
                this.isPlanned = _.isNil(json.isPlanned) ? false : json.isPlanned;
                this.missionUuid = _.isNil(json.missionUuid) ? '' : json.missionUuid;
                this.name = _.isNil(json.name) ? '' : json.name;
                this.planStatus = _.isNil(json.planStatus) ? '' : json.planStatus;
                this.type = _.isNil(json.type) ? '' : json.type;
            }
        }
        return PlanMinTaskData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$4 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var PlanService = /** @class */ (function () {
        function PlanService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        PlanService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
         * GET /min/task/byPlanId/${planId}
         * get PlanMinTaskData
         **************************************************************************/
        /**
         * ***********************************************************************
         * GET /min/task/byPlanId/${planId}
         * get PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getMinTaskDataByPlanId = /**
         * ***********************************************************************
         * GET /min/task/byPlanId/${planId}
         * get PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
                this.logService.debug("PlanService.getMinTaskDataByPlanId()");
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived PlanMinTaskData for planId " + planId, res); }), operators.map(function (res) { return res['planMinTaskData'].map(function (item) { return new PlanMinTaskData(item); }); }));
            };
        /**************************************************************************
         * POST /min/task/byPlanId/${planId}
         * create PlanMinTaskData
         **************************************************************************/
        /**
         * ***********************************************************************
         * POST /min/task/byPlanId/${planId}
         * create PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @param {?} plan
         * @return {?}
         */
        PlanService.prototype.createMinTaskDataByPlanId = /**
         * ***********************************************************************
         * POST /min/task/byPlanId/${planId}
         * create PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @param {?} plan
         * @return {?}
         */
            function (planId, plan) {
                var _this = this;
                // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
                this.logService.debug("PlanService.createMinTaskDataByPlanId()");
                return this.http.post(url, plan, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    created PlanMinTaskData for planId " + planId, res); }), operators.map(function (res) { return res['planMinTaskData'].map(function (item) { return new PlanMinTaskData(item); }); }));
            };
        /**************************************************************************
         * PUT /plan/min/task/byPlanId/${planId}
         * update PlanMinTaskData
         **************************************************************************/
        /**
         * ***********************************************************************
         * PUT /plan/min/task/byPlanId/${planId}
         * update PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @param {?} plan
         * @return {?}
         */
        PlanService.prototype.updatePlanMinTaskData = /**
         * ***********************************************************************
         * PUT /plan/min/task/byPlanId/${planId}
         * update PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @param {?} plan
         * @return {?}
         */
            function (planId, plan) {
                var _this = this;
                // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
                this.logService.debug("PlanService.updatePlanMinTaskData()");
                return this.http.put(url, plan, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    updated planId " + planId, res); }), operators.map(function (res) { return res['planMinTaskData'].map(function (item) { return new PlanMinTaskData(item); }); }));
            };
        /**************************************************************************
         * DELETE /plan/min/task/byPlanId/${planId}
         * delete PlanMinTaskData
         **************************************************************************/
        /**
         * ***********************************************************************
         * DELETE /plan/min/task/byPlanId/${planId}
         * delete PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @param {?} plan
         * @return {?}
         */
        PlanService.prototype.deletePlanMinTaskData = /**
         * ***********************************************************************
         * DELETE /plan/min/task/byPlanId/${planId}
         * delete PlanMinTaskData
         * ************************************************************************
         * @param {?} planId
         * @param {?} plan
         * @return {?}
         */
            function (planId, plan) {
                var _this = this;
                // const url = `${this.serviceUrl}/plan/missionTarget/byPlanId/${planId}`;
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/missionTarget/byPlanId/', planId);
                this.logService.debug("PlanService.deletePlanMinTaskData()");
                /** @type {?} */
                var bodyData = { strings: [plan.missionTaskId] };
                // HACK: the whole PlanMinTaskData stuff is all hacked up. Revisit this at some point
                return this.http.request('DELETE', url, __assign({}, httpOptions$4, { body: bodyData })).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted planId " + planId); }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        PlanService.prototype.loadByMissionId = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('PlanService.loadByMissionId');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/byMissionId/' + id);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res.plans; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        PlanService.prototype.planAssetsByPlanId = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('PlanService.planAssetsByPlanId');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/planAssets/' + id);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res.planAssets; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        PlanService.prototype.missionTaskDisplay = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('PlanService.missionTaskDisplay');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/missionTaskDisplay/byPlanId/' + id);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res.missionTasks; }));
            };
        /**
         * @param {?} planId
         * @param {?} entityIds
         * @return {?}
         */
        PlanService.prototype.addMissionTaskToPlan = /**
         * @param {?} planId
         * @param {?} entityIds
         * @return {?}
         */
            function (planId, entityIds) {
                var _this = this;
                this.logService.debug('PlanService.addMissionTaskToPlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
                /** @type {?} */
                var param = {
                    'strings': entityIds
                };
                return this.http.post(url, param, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res.missionTasks; }));
            };
        /**
         * @param {?} planId
         * @param {?} strings
         * @return {?}
         */
        PlanService.prototype.removeMissionTasksFromPlan = /**
         * @param {?} planId
         * @param {?} strings
         * @return {?}
         */
            function (planId, strings) {
                var _this = this;
                this.logService.debug('PlanService.removeMissionTasksFromPlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' }),
                    body: {
                        strings: strings
                    }
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted tasks successfully"); }), operators.map(function (res) { return res.missionTasks; }));
            };
        /**
         * @param {?} plan
         * @return {?}
         */
        PlanService.prototype.copyPlan = /**
         * @param {?} plan
         * @return {?}
         */
            function (plan) {
                var _this = this;
                this.logService.debug('PlanService.copyPlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/copy/byPlanId/' + plan.planId);
                return this.http.put(url, plan, __assign({}, httpOptions$4, { responseType: 'text' })).pipe(operators.tap(function (res) { return _this.logService.debug("    added plan successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getByPlanId = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.getByPlanId');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved plan successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planAssets
         * @return {?}
         */
        PlanService.prototype.updatePlanAssets = /**
         * @param {?} planAssets
         * @return {?}
         */
            function (planAssets) {
                var _this = this;
                this.logService.debug('PlanService.addPlanAsset');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/planAssets');
                /** @type {?} */
                var param = {
                    'planAssets': planAssets
                };
                return this.http.put(url, param, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    added PlanAsset successfully"); }), operators.map(function (res) { return res.planAssets; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getOptimizationObjectives = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.getOptimizationObjectives');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives/byPlanId/' + planId);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Optimization Objectives successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getOptimizationMetrics = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.getOptimizationMetrics');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/metrics/byPlanId/' + planId);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Optimization Metrics successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.deletePlan = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.deletePlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted plan successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} plan
         * @return {?}
         */
        PlanService.prototype.updatePlan = /**
         * @param {?} plan
         * @return {?}
         */
            function (plan) {
                var _this = this;
                this.logService.debug('PlanService.updatePlan');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan');
                return this.http.put(url, plan, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    updated Plan successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getRequestWindows = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.getRequestWindow');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/requestWindows/byPlanId/' + planId);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Request Windows successfully"); }), operators.map(function (res) { return res.accessWindows; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getDisplayWindows = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.getDisplayWindows');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/display/requestWindows/byPlanId/' + planId);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Request Windows successfully"); }), operators.map(function (res) { return res.displayWindows; }));
            };
        /**
         * @param {?} planId
         * @return {?}
         */
        PlanService.prototype.getTaskConstraints = /**
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('PlanService.getTaskConstraints');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints/byPlanId/' + planId);
                return this.http.get(url, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Task Constraint  successfully"); }), operators.map(function (res) { return res.planMissionTaskConstaintsGroups; }));
            };
        /**
         * @param {?} constraints
         * @return {?}
         */
        PlanService.prototype.updateTaskConstraints = /**
         * @param {?} constraints
         * @return {?}
         */
            function (constraints) {
                var _this = this;
                this.logService.debug('PlanService.updateTaskConstraints');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints');
                return this.http.put(url, constraints, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    updated Task Constraint  successfully"); }), operators.map(function (res) { return res.planMissionTaskConstaintsGroups; }));
            };
        /**
         * @param {?} optimizationObjective
         * @return {?}
         */
        PlanService.prototype.updateOptimizationObjectives = /**
         * @param {?} optimizationObjective
         * @return {?}
         */
            function (optimizationObjective) {
                var _this = this;
                this.logService.debug('PlanService.updateOptimizationObjectives');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives');
                return this.http.put(url, optimizationObjective, httpOptions$4).pipe(operators.tap(function (res) { return _this.logService.debug("    updated Optimization Objectives successfully"); }), operators.map(function (res) { return res; }));
            };
        PlanService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PlanService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ PlanService.ngInjectableDef = i0.defineInjectable({ factory: function PlanService_Factory() { return new PlanService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: PlanService, providedIn: "root" });
        return PlanService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProgressService = /** @class */ (function () {
        function ProgressService(logService) {
            this.logService = logService;
            this.pendingRequests = 0;
            this.containerName = 'progressContainer';
            this.element = null;
        }
        /**
         * @return {?}
         */
        ProgressService.prototype.getElement = /**
         * @return {?}
         */
            function () {
                if (this.element == null) {
                    this.logService.debug('Default element for progress spinner = "' + this.containerName + '"');
                    this.element = document.getElementById(this.containerName);
                    if (!this.element) {
                        this.logService.debug('Progress spinner element not found.  Ensure element is included in document.');
                    }
                }
                return this.element;
            };
        /**
         * @param {?} isBusy
         * @return {?}
         */
        ProgressService.prototype.setBusy = /**
         * @param {?} isBusy
         * @return {?}
         */
            function (isBusy) {
                if (isBusy) {
                    //Keep track of how many requests there have been to show the busy message.
                    this.pendingRequests++;
                    //If force is true show the busy message immediately.
                    this.setVisible(true);
                }
                else {
                    //Keep track of how many requests there have been to hide the busy message.
                    if (this.pendingRequests > 0) {
                        this.pendingRequests--;
                    }
                    //If there is no more outstanding busy requests or if force is true then hide the busy message.
                    if (this.pendingRequests <= 0) {
                        this.setVisible(false);
                        this.pendingRequests = 0;
                    }
                }
            };
        //Control the visibility of the busy message div.
        //Control the visibility of the busy message div.
        /**
         * @param {?} isVisible
         * @return {?}
         */
        ProgressService.prototype.setVisible =
            //Control the visibility of the busy message div.
            /**
             * @param {?} isVisible
             * @return {?}
             */
            function (isVisible) {
                try {
                    if (isVisible) {
                        this.getElement().style.display = 'flex';
                    }
                    else {
                        this.getElement().style.display = 'none';
                    }
                }
                catch (err) {
                    this.logService.warn('Unable to display spinner.  Is "ags-lib-progress" component included?');
                }
            };
        ProgressService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ProgressService.ctorParameters = function () {
            return [
                { type: LogService }
            ];
        };
        /** @nocollapse */ ProgressService.ngInjectableDef = i0.defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(i0.inject(LogService)); }, token: ProgressService, providedIn: "root" });
        return ProgressService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$5 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var TaskOrderService = /** @class */ (function () {
        function TaskOrderService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        TaskOrderService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**
         * @param {?} task
         * @return {?}
         */
        TaskOrderService.prototype.createTask = /**
         * @param {?} task
         * @return {?}
         */
            function (task) {
                var _this = this;
                this.logService.debug('TaskService.createTask');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
                return this.http.post(url, task, httpOptions$5).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }));
            };
        /**
         * @param {?} type
         * @return {?}
         */
        TaskOrderService.prototype.loadAll = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                var _this = this;
                this.logService.debug('TaskService.loadAll');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/taskingOrder/allOrders?type=' + type);
                return this.http.get(url, httpOptions$5).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res.taskingOrders; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        TaskOrderService.prototype.loadById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('TaskService.loadById');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
                return this.http.get(url, httpOptions$5).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        TaskOrderService.prototype.deleteTaskingOrder = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('TaskService.deleteTaskingOrder');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted task order successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} task
         * @return {?}
         */
        TaskOrderService.prototype.updateTaskingOrder = /**
         * @param {?} task
         * @return {?}
         */
            function (task) {
                var _this = this;
                this.logService.debug('TaskService.updateTaskingOrder');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
                return this.http.put(url, task, httpOptions$5).pipe(operators.tap(function (res) { return _this.logService.debug("     updated task " + task.taskingOrderUuid); }), operators.map(function (res) { return res; }));
            };
        TaskOrderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TaskOrderService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ TaskOrderService.ngInjectableDef = i0.defineInjectable({ factory: function TaskOrderService_Factory() { return new TaskOrderService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: TaskOrderService, providedIn: "root" });
        return TaskOrderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimeService = /** @class */ (function () {
        function TimeService(http) {
            this.http = http;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        TimeService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**
         * @return {?}
         */
        TimeService.prototype.getTime = /**
         * @return {?}
         */
            function () {
                return this.http.get(this.serviceUrl, { responseType: 'text' })
                    .pipe(operators.map(function (res) { return res; }));
            };
        TimeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TimeService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient }
            ];
        };
        /** @nocollapse */ TimeService.ngInjectableDef = i0.defineInjectable({ factory: function TimeService_Factory() { return new TimeService(i0.inject(i1$1.HttpClient)); }, token: TimeService, providedIn: "root" });
        return TimeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderService = /** @class */ (function () {
        function HeaderService(titleService) {
            this.titleService = titleService;
            this._headerPrimaryTitle = '';
            this._headerSubTitle = '';
            this.headerTitle = new rxjs.BehaviorSubject(titleService.getTitle());
            this.breadcrumb = new rxjs.BehaviorSubject({});
        }
        Object.defineProperty(HeaderService.prototype, "headerPrimaryTitle", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._headerPrimaryTitle = value;
                this.titleService.setTitle(value + ' - ' + this.appName); // this is what gets displayed in the browser tab
                this.updateHeaderTitle();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeaderService.prototype, "headerSubTitle", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._headerSubTitle = value;
                this.updateHeaderTitle();
                this.updateBreadcrumb();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} appName
         * @return {?}
         */
        HeaderService.prototype.init = /**
         * @param {?} appName
         * @return {?}
         */
            function (appName) {
                this.appName = appName;
            };
        // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
        // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
        /**
         * @return {?}
         */
        HeaderService.prototype.updateHeaderTitle =
            // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var title = this._headerPrimaryTitle;
                if (this._headerSubTitle) {
                    title += ' [' + this._headerSubTitle + ']';
                }
                this.headerTitle.next(title);
            };
        /*
         * Updates the breadcrumb when the title is updated.
         *
         * @returns {object} An object consisting of the primary title, and the subtitle
         */
        /*
           * Updates the breadcrumb when the title is updated.
           *
           * @returns {object} An object consisting of the primary title, and the subtitle
           */
        /**
         * @return {?}
         */
        HeaderService.prototype.updateBreadcrumb = /*
           * Updates the breadcrumb when the title is updated.
           *
           * @returns {object} An object consisting of the primary title, and the subtitle
           */
            /**
             * @return {?}
             */
            function () {
                this.breadcrumb.next({
                    primaryTitle: this._headerPrimaryTitle,
                    subtitle: this._headerSubTitle,
                });
            };
        HeaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HeaderService.ctorParameters = function () {
            return [
                { type: i1.Title }
            ];
        };
        /** @nocollapse */ HeaderService.ngInjectableDef = i0.defineInjectable({ factory: function HeaderService_Factory() { return new HeaderService(i0.inject(i1.Title)); }, token: HeaderService, providedIn: "root" });
        return HeaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$6 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var PlanCollectionService = /** @class */ (function () {
        function PlanCollectionService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        PlanCollectionService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**
         * @return {?}
         */
        PlanCollectionService.prototype.loadAll = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.logService.debug('PlanCollectionService.loadAll');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
                return this.http.get(url, httpOptions$6).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res.planCollections; }));
            };
        /**
         * @return {?}
         */
        PlanCollectionService.prototype.loadAllTypes = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.logService.debug('PlanCollectionService.loadAllTypes');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/PlanCollection/Type');
                return this.http.get(url, httpOptions$6).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived plan collection types " + name, res); }), operators.map(function (res) { return res.planTypes; }));
            };
        /**
         * @param {?} missionType
         * @return {?}
         */
        PlanCollectionService.prototype.getAssetGroupType = /**
         * @param {?} missionType
         * @return {?}
         */
            function (missionType) {
                var _this = this;
                this.logService.debug('PlanCollectionService.loadAllTypes');
                return this.loadAllTypes().pipe(operators.tap(function (res) { return _this.logService.debug("    retreived plan collection types " + name, res); }), operators.map(function (res) { return res.filter(function (p) { return p.hmiName === missionType; })[0].assetGroup1; }));
            };
        /**
         * @param {?} missionId
         * @return {?}
         */
        PlanCollectionService.prototype.loadById = /**
         * @param {?} missionId
         * @return {?}
         */
            function (missionId) {
                var _this = this;
                this.logService.debug('PlanCollectionService.loadById');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + missionId);
                return this.http.get(url, httpOptions$6).pipe(operators.tap(function (res) { return _this.logService.debug("    retreived event model " + name, res); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planCollection
         * @return {?}
         */
        PlanCollectionService.prototype.create = /**
         * @param {?} planCollection
         * @return {?}
         */
            function (planCollection) {
                var _this = this;
                this.logService.debug('PlanCollectionService.createPlanCollection');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
                return this.http.post(url, planCollection, httpOptions$6).pipe(operators.tap(function (res) { return _this.logService.debug("    cerated Plan Collection " + name, res); }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        PlanCollectionService.prototype.delete = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                this.logService.debug('PlanCollectionService.deletePlanCollection');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + id);
                /** @type {?} */
                var deleteOptions = {
                    headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
                };
                return this.http.delete(url, deleteOptions).pipe(operators.tap(function (res) { return _this.logService.debug("    deleted Plan Collection successfully"); }), operators.map(function (res) { return res; }));
            };
        /**
         * @param {?} planCollection
         * @return {?}
         */
        PlanCollectionService.prototype.update = /**
         * @param {?} planCollection
         * @return {?}
         */
            function (planCollection) {
                var _this = this;
                this.logService.debug('PlanCollectionService.updatePlanCollection');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
                return this.http.put(url, planCollection, httpOptions$6).pipe(operators.tap(function (res) { return _this.logService.debug("     updated Plan Collection " + planCollection.missionUUId); }), operators.map(function (res) { return res; }));
            };
        PlanCollectionService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PlanCollectionService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ PlanCollectionService.ngInjectableDef = i0.defineInjectable({ factory: function PlanCollectionService_Factory() { return new PlanCollectionService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: PlanCollectionService, providedIn: "root" });
        return PlanCollectionService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$7 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var CzmlService = /** @class */ (function () {
        function CzmlService(http, logService) {
            this.http = http;
            this.logService = logService;
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        CzmlService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**
         * @param {?} planId
         * @param {?} targetId
         * @param {?=} missionId
         * @return {?}
         */
        CzmlService.prototype.getGroundTrackAndSensorVolume = /**
         * @param {?} planId
         * @param {?} targetId
         * @param {?=} missionId
         * @return {?}
         */
            function (planId, targetId, missionId) {
                var _this = this;
                /** @type {?} */
                var endpoint = "/czml/groundTrackAndSensorVolume/" + planId + "/" + targetId;
                if (missionId) {
                    endpoint = endpoint + "/" + missionId;
                }
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, endpoint);
                this.logService.debug('CzmlService.getGroundTrackAndSensorVolume()');
                return this.http.get(url, httpOptions$7).pipe(operators.tap(function (res) { return _this.logService.debug('    retrieved Czml'); }), operators.map(function (res) { return res; }));
            };
        /**
        * Handle http operation that failed.
        *
        * @param operation {string} name of the operation that failed
        * @param result {any} optional value to return as the observable result
        */
        /**
         * Handle http operation that failed.
         *
         * @private
         * @template T
         * @param {?=} operation {string} name of the operation that failed
         * @param {?=} result {any} optional value to return as the observable result
         * @return {?}
         */
        CzmlService.prototype.handleError = /**
         * Handle http operation that failed.
         *
         * @private
         * @template T
         * @param {?=} operation {string} name of the operation that failed
         * @param {?=} result {any} optional value to return as the observable result
         * @return {?}
         */
            function (operation, result) {
                var _this = this;
                if (operation === void 0) {
                    operation = 'operation';
                }
                return function (error) {
                    _this.logService.error(operation + " failed: " + error.message);
                    return rxjs.of(( /** @type {?} */(result)));
                };
            };
        CzmlService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CzmlService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ CzmlService.ngInjectableDef = i0.defineInjectable({ factory: function CzmlService_Factory() { return new CzmlService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: CzmlService, providedIn: "root" });
        return CzmlService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$8 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var SchedulerService = /** @class */ (function () {
        function SchedulerService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        SchedulerService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
         * GET /schedule/solverTypes/${missionType}
         **************************************************************************/
        /**
         * ***********************************************************************
         * GET /schedule/solverTypes/${missionType}
         * ************************************************************************
         * @param {?} missionType
         * @return {?}
         */
        SchedulerService.prototype.getSolverTypes = /**
         * ***********************************************************************
         * GET /schedule/solverTypes/${missionType}
         * ************************************************************************
         * @param {?} missionType
         * @return {?}
         */
            function (missionType) {
                var _this = this;
                this.logService.debug('SchedulerService.getSolverTypes');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/schedule/solverTypes/' + missionType);
                return this.http.get(url, httpOptions$8).pipe(operators.tap(function (res) { return _this.logService.debug("    retrieved Solver Types successfully"); }), operators.map(function (res) { return res.strings; }));
            };
        SchedulerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SchedulerService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ SchedulerService.ngInjectableDef = i0.defineInjectable({ factory: function SchedulerService_Factory() { return new SchedulerService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: SchedulerService, providedIn: "root" });
        return SchedulerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var httpOptions$9 = {
        headers: new i1$1.HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var ExternalScheduleService = /** @class */ (function () {
        function ExternalScheduleService(http, logService) {
            this.http = http;
            this.logService = logService;
            this.serviceUrl = '';
        }
        /**
         * @param {?} serviceUrl
         * @return {?}
         */
        ExternalScheduleService.prototype.init = /**
         * @param {?} serviceUrl
         * @return {?}
         */
            function (serviceUrl) {
                this.serviceUrl = serviceUrl;
            };
        /**************************************************************************
        * POST /runInternalScheduler/${planId}
        **************************************************************************/
        /**
         * ***********************************************************************
         * POST /runInternalScheduler/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
        ExternalScheduleService.prototype.runInternalScheduler = /**
         * ***********************************************************************
         * POST /runInternalScheduler/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('ExternalScheduleService.runInternalScheduler');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/runInternalScheduler/' + planId);
                return this.http.post(url, httpOptions$9).pipe(operators.tap(function (res) { return _this.logService.debug("    RunInternal Scheduler successfull"); }), operators.map(function (res) { return res; }));
            };
        /**************************************************************************
        * POST /publishToLaso/${planId}
        **************************************************************************/
        /**
         * ***********************************************************************
         * POST /publishToLaso/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
        ExternalScheduleService.prototype.publishToLaso = /**
         * ***********************************************************************
         * POST /publishToLaso/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('ExternalScheduleService.publishToLaso');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/publishToLaso/' + planId);
                return this.http.post(url, httpOptions$9).pipe(operators.tap(function (res) { return _this.logService.debug("    Published To Laso successfully"); }), operators.map(function (res) { return res.status; }));
            };
        /**************************************************************************
        * POST /spsEvent/${planId}
        **************************************************************************/
        /**
         * ***********************************************************************
         * POST /spsEvent/${planId}
         * ************************************************************************
         * @param {?} spsEvent
         * @return {?}
         */
        ExternalScheduleService.prototype.create = /**
         * ***********************************************************************
         * POST /spsEvent/${planId}
         * ************************************************************************
         * @param {?} spsEvent
         * @return {?}
         */
            function (spsEvent) {
                var _this = this;
                this.logService.debug('ExternalScheduleService.spsEvent');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/spsEvent');
                return this.http.post(url, spsEvent, httpOptions$9).pipe(operators.tap(function (res) { return _this.logService.debug("    Stored sps Event successfully"); }), operators.map(function (res) { return res; }));
            };
        /**************************************************************************
        * POST /publishToLaso/${planId}
        **************************************************************************/
        /**
         * ***********************************************************************
         * POST /publishToLaso/${planId}
         * ************************************************************************
         * @param {?} prohibitId
         * @return {?}
         */
        ExternalScheduleService.prototype.getLasoProhibit = /**
         * ***********************************************************************
         * POST /publishToLaso/${planId}
         * ************************************************************************
         * @param {?} prohibitId
         * @return {?}
         */
            function (prohibitId) {
                var _this = this;
                this.logService.debug('ExternalScheduleService.getLasoProhibit');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/getLasoProhibit/' + prohibitId);
                return this.http.get(url, httpOptions$9).pipe(operators.tap(function (res) { return _this.logService.debug("    Retrieved Laso Prohibit successfully"); }), operators.map(function (res) { return res; }));
            };
        /**************************************************************************
        * POST /assetsWithMx/${planId}
        **************************************************************************/
        /**
         * ***********************************************************************
         * POST /assetsWithMx/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
        ExternalScheduleService.prototype.getAssetsWithMx = /**
         * ***********************************************************************
         * POST /assetsWithMx/${planId}
         * ************************************************************************
         * @param {?} planId
         * @return {?}
         */
            function (planId) {
                var _this = this;
                this.logService.debug('ExternalScheduleService.assetsWithMx');
                /** @type {?} */
                var url = Util.urlJoin(this.serviceUrl, '/assetsWithMx/' + planId);
                return this.http.get(url, httpOptions$9).pipe(operators.tap(function (res) { return _this.logService.debug("    Retrieved assets with Mx successfully"); }), operators.map(function (res) { return res.strings; }));
            };
        ExternalScheduleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExternalScheduleService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: LogService }
            ];
        };
        /** @nocollapse */ ExternalScheduleService.ngInjectableDef = i0.defineInjectable({ factory: function ExternalScheduleService_Factory() { return new ExternalScheduleService(i0.inject(i1$1.HttpClient), i0.inject(LogService)); }, token: ExternalScheduleService, providedIn: "root" });
        return ExternalScheduleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccessWindowLimit = /** @class */ (function () {
        function AccessWindowLimit() {
        }
        return AccessWindowLimit;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AlertType = {
        plan: 'PLAN',
        timeUpdate: 'timeUpdate',
        task: 'TASK',
        assetStatus: 'ASSETSTATUS',
        taskStatus: 'TASKSTATUS',
        sps: "SPS",
        sps_prohibit: "SPS_PROHIBIT",
        es_prohibit: "ES_PROHIBIT",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MissionData = /** @class */ (function () {
        function MissionData() {
        }
        return MissionData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MissionTarget = /** @class */ (function () {
        function MissionTarget() {
        }
        return MissionTarget;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MissionTask = /** @class */ (function () {
        function MissionTask() {
        }
        return MissionTask;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OptimizationMetric = /** @class */ (function () {
        function OptimizationMetric() {
        }
        return OptimizationMetric;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OptimizationObjective = /** @class */ (function () {
        function OptimizationObjective() {
        }
        return OptimizationObjective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlanAsset = /** @class */ (function () {
        function PlanAsset() {
        }
        return PlanAsset;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PlanSubType = {
        update: 'UPDATE',
        complete: 'DRAFT',
        error: 'ERROR',
        executing: 'Executing',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Task = /** @class */ (function () {
        function Task() {
        }
        return Task;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TaskSubType = /** @class */ (function () {
        function TaskSubType() {
        }
        return TaskSubType;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Optimization = /** @class */ (function () {
        function Optimization() {
        }
        return Optimization;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TaskConstraint = /** @class */ (function () {
        function TaskConstraint() {
        }
        return TaskConstraint;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccessWindow = /** @class */ (function () {
        function AccessWindow() {
        }
        return AccessWindow;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimeWindow = /** @class */ (function () {
        function TimeWindow() {
        }
        return TimeWindow;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlanCollection = /** @class */ (function () {
        function PlanCollection() {
        }
        return PlanCollection;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlanCollectionType = /** @class */ (function () {
        function PlanCollectionType() {
        }
        return PlanCollectionType;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DisplayWindow = /** @class */ (function () {
        function DisplayWindow() {
        }
        return DisplayWindow;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SpsEvent = /** @class */ (function () {
        function SpsEvent() {
        }
        return SpsEvent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authenticationService, logService) {
            this.authenticationService = authenticationService;
            this.logService = logService;
        }
        /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        AuthGuard.prototype.canActivate = /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
            function (next, state) {
                if (!this.authenticationService.isLoggedIn) {
                    this.logService.debug('guard - not logged in!!');
                    this.authenticationService.redirectToLoginPage();
                    return false;
                }
                return true;
            };
        AuthGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () {
            return [
                { type: AuthenticationService },
                { type: LogService }
            ];
        };
        /** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(AuthenticationService), i0.inject(LogService)); }, token: AuthGuard, providedIn: "root" });
        return AuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Sample = {
        red: 1, white: 2, blue: 3,
    };
    Sample[Sample.red] = 'red';
    Sample[Sample.white] = 'white';
    Sample[Sample.blue] = 'blue';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * ***************************************************************************
     * JWT Interceptor: Insert JWT into header of all requests
     * ****************************************************************************
     */
    var JwtInterceptor = /** @class */ (function () {
        function JwtInterceptor(authenticationService) {
            this.authenticationService = authenticationService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        JwtInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                if (request.url.indexOf(this.authenticationService.getAuthenticationServicePrefix()) === -1) {
                    request = request.clone({
                        // setHeaders: {
                        //   'token': this.authenticationService.token,
                        //   'UserName': this.authenticationService.currentUser
                        // }
                        headers: request.headers.set('token', this.authenticationService.token)
                    });
                }
                return next.handle(request);
            };
        JwtInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        JwtInterceptor.ctorParameters = function () {
            return [
                { type: AuthenticationService }
            ];
        };
        return JwtInterceptor;
    }());
    /**
     * ***************************************************************************
     * Error Interceptor: Handle HTTP errors
     * ****************************************************************************
     */
    var ErrorInterceptor = /** @class */ (function () {
        function ErrorInterceptor(authenticationService, logService) {
            this.authenticationService = authenticationService;
            this.logService = logService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        ErrorInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                return next.handle(request).pipe(operators.catchError(function (err) {
                    // NOTE: err.status is always 0. Research points to backend server not attaching CORS headers to response
                    // see this article https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
                    // and this https://stackoverflow.com/questions/29547003/angularjs-no-access-control-allow-origin-header-is-present-on-the-requested-r
                    // adn this https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
                    if (err.status === 401) {
                        // auto logout if 401 response returned from api
                        _this.authenticationService.logOut();
                    }
                    else {
                        _this.logService.error("ErrorInterceptor: err.status = " + err.status, err);
                    }
                    /** @type {?} */
                    var error = err.error.message || err.statusText;
                    return rxjs.throwError(error);
                }));
            };
        ErrorInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ErrorInterceptor.ctorParameters = function () {
            return [
                { type: AuthenticationService },
                { type: LogService }
            ];
        };
        return ErrorInterceptor;
    }());
    /**
     * ***************************************************************************
     * Data Recorder Interceptor
     * ****************************************************************************
     */
    var CacheInterceptor = /** @class */ (function () {
        function CacheInterceptor() {
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        CacheInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                return next.handle(req).pipe(operators.tap(function (event) {
                    if (event instanceof i1$1.HttpResponse) {
                        console.log(">>>>>>>>>>>> CACHE INTERCEPTOR", event);
                    }
                    return event;
                }));
            };
        CacheInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CacheInterceptor.ctorParameters = function () { return []; };
        return CacheInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockBackendInterceptor = /** @class */ (function () {
        function MockBackendInterceptor() {
        }
        /**
         * @param {?} millisecs
         * @return {?}
         */
        MockBackendInterceptor.prototype.sleep = /**
         * @param {?} millisecs
         * @return {?}
         */
            function (millisecs) {
                /** @type {?} */
                var initiation = new Date().getTime();
                while ((new Date().getTime() - initiation) < millisecs) { }
            };
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        MockBackendInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                // wrap in delayed observable to simulate server api call
                return rxjs.of(null).pipe(operators.mergeMap(function () {
                    // example GET endpoint
                    if (request.url.endsWith('/exampleEndpoint') && request.method === 'GET') {
                        console.log("MOCK " + request.url);
                        _this.sleep(500);
                        /** @type {?} */
                        var dataObj = [{ id: '1234', data: 'data goes here' }, { id: '5678', data: 'data goes here' }];
                        if (dataObj) {
                            return rxjs.of(new i1$1.HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                        }
                        else {
                            return rxjs.throwError({ error: { message: 'Error' } });
                        }
                    }
                    // example GET endpoint with id
                    if (request.url.match(/\/exampleEndpoint\/\d+$/) && request.method === 'GET') {
                        console.log("MOCK " + request.url);
                        _this.sleep(500);
                        /** @type {?} */
                        var urlParts = request.url.split('/');
                        /** @type {?} */
                        var id = parseInt(urlParts[urlParts.length - 1]);
                        /** @type {?} */
                        var dataObj = { id: id, data: 'data goes here' };
                        if (dataObj) {
                            return rxjs.of(new i1$1.HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                        }
                        else {
                            return rxjs.throwError({ error: { message: 'Error' } });
                        }
                    }
                    // example POST endpoint
                    if (request.url.endsWith('/exampleEndpoint') && request.method === 'POST') {
                        /** @type {?} */
                        var reqBody = request.body;
                        console.log("MOCK " + request.url, reqBody);
                        _this.sleep(500);
                        if (reqBody) {
                            return rxjs.of(new i1$1.HttpResponse({ status: 200, body: JSON.stringify(reqBody) }));
                        }
                        else {
                            return rxjs.throwError({ error: { message: 'Error' } });
                        }
                    }
                    // pass through any requests not handled above
                    return next.handle(request);
                }));
            };
        MockBackendInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        MockBackendInterceptor.ctorParameters = function () { return []; };
        return MockBackendInterceptor;
    }());
    /** @type {?} */
    var MockBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: i1$1.HTTP_INTERCEPTORS,
        useClass: MockBackendInterceptor,
        multi: true
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            if (_.isNil(maxLines) || !_.isNil(forms.Validators.required(control))) {
                return null;
            }
            /** @type {?} */
            var numLines = (( /** @type {?} */(control.value))).split('\n').length;
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
            if (_.isNil(ltParam) || !_.isNil(forms.Validators.required(control))) {
                return null;
            }
            /** @type {?} */
            var v = +control.value;
            return v < +ltParam ? null : { lt: true };
        };
    }
    /** @type {?} */
    var CustomValidators = {
        dateRangeValidator: dateRangeValidator,
        dateLessThanValidator: dateLessThanValidator,
        dateGreaterThanValidator: dateGreaterThanValidator,
        maxNumLinesValidator: maxNumLinesValidator,
        lt: lt
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AgsHmiLibraryModule = AgsHmiLibraryModule;
    exports.AnnotationComponent = AnnotationComponent;
    exports.MY_CUSTOM_FORMATS = MY_CUSTOM_FORMATS;
    exports.DateTimePickerComponent = DateTimePickerComponent;
    exports.EmptyComponent = EmptyComponent;
    exports.LoginComponent = LoginComponent;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.ProgressComponent = ProgressComponent;
    exports.StateIconComponent = StateIconComponent;
    exports.UciStateIconComponent = UciStateIconComponent;
    exports.TitleComponent = TitleComponent;
    exports.AlertService = AlertService;
    exports.AnnotationService = AnnotationService;
    exports.AuthenticationService = AuthenticationService;
    exports.CacheService = CacheService;
    exports.CalService = CalService;
    exports.DraftPlanService = DraftPlanService;
    exports.EntityService = EntityService;
    exports.LogService = LogService;
    exports.PlanService = PlanService;
    exports.ProgressService = ProgressService;
    exports.TaskOrderService = TaskOrderService;
    exports.TimeService = TimeService;
    exports.HeaderService = HeaderService;
    exports.IconService = IconService;
    exports.PlanCollectionService = PlanCollectionService;
    exports.CzmlService = CzmlService;
    exports.SchedulerService = SchedulerService;
    exports.ExternalScheduleService = ExternalScheduleService;
    exports.AccessWindowLimit = AccessWindowLimit;
    exports.Alert = Alert;
    exports.AlertType = AlertType;
    exports.Annotation = Annotation;
    exports.AuthenticationRequest = AuthenticationRequest;
    exports.AuthenticationResponse = AuthenticationResponse;
    exports.Capability = Capability;
    exports.CapabilityMap = CapabilityMap;
    exports.Observability = Observability;
    exports.Country = Country;
    exports.Entity = Entity;
    exports.PartialEntity = PartialEntity;
    exports.Group = Group;
    exports.BaseEntity = BaseEntity;
    exports.MissionData = MissionData;
    exports.MissionTarget = MissionTarget;
    exports.MissionTask = MissionTask;
    exports.OptimizationMetric = OptimizationMetric;
    exports.OptimizationObjective = OptimizationObjective;
    exports.PlanMinTaskData = PlanMinTaskData;
    exports.PlanAsset = PlanAsset;
    exports.PlanSubType = PlanSubType;
    exports.Task = Task;
    exports.TaskSubType = TaskSubType;
    exports.Optimization = Optimization;
    exports.TaskConstraint = TaskConstraint;
    exports.AccessWindow = AccessWindow;
    exports.TimeWindow = TimeWindow;
    exports.Vulnerability = Vulnerability;
    exports.PlanCollection = PlanCollection;
    exports.PlanCollectionType = PlanCollectionType;
    exports.DisplayWindow = DisplayWindow;
    exports.SpsEvent = SpsEvent;
    exports.AuthGuard = AuthGuard;
    exports.Sample = Sample;
    exports.JwtInterceptor = JwtInterceptor;
    exports.ErrorInterceptor = ErrorInterceptor;
    exports.CacheInterceptor = CacheInterceptor;
    exports.MockBackendInterceptor = MockBackendInterceptor;
    exports.MockBackendProvider = MockBackendProvider;
    exports.DateFormatPipe = DateFormatPipe;
    exports.TruncatePipe = TruncatePipe;
    exports.OrderByPipe = OrderByPipe;
    exports.HighlightPipe = HighlightPipe;
    exports.RemoveItemPipe = RemoveItemPipe;
    exports.CustomPipes = CustomPipes;
    exports.Util = Util;
    exports.CustomValidators = CustomValidators;
    exports.ɵb = ChipDisplayComponent;
    exports.ɵc = EntitySelectorComponent;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdzLWhtaS1saWJyYXJ5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvb3RoZXIvcGlwZXMudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9hbm5vdGF0aW9uLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2xvZy5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL290aGVyL3V0aWwudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvYW5ub3RhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL2NvbXBvbmVudHMvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvYXV0aGVudGljYXRpb24udHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2VtcHR5L2VtcHR5LmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvY2FwYWJpbGl0eS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvdnVsbmVyYWJpbGl0eS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvZG9tYWluLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9lbnRpdHkudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvY2FjaGUuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9lbnRpdHkuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2VudGl0eS1zZWxlY3Rvci9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL2NvbXBvbmVudHMvY2hpcC1kaXNwbGF5L2NoaXAtZGlzcGxheS5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2ljb24uc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL3N0YXRlLWljb24vc3RhdGUtaWNvbi5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvYWdzLWhtaS1saWJyYXJ5Lm1vZHVsZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2NhbC5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2RyYWZ0UGxhbi5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9wbGFuLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL3BsYW4uc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9wcm9ncmVzcy5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL3Rhc2stb3JkZXIuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy90aW1lLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvaGVhZGVyLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvcGxhbkNvbGxlY3Rpb24uc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9jem1sLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvc2NoZWR1bGVyLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvZXh0ZXJuYWxTY2hlZHVsZS5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9hY2Nlc3Mtd2luZG93LWxpbWl0LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9hbGVydC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvYWxlcnRUeXBlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9taXNzaW9uRGF0YS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvbWlzc2lvblRhcmdldC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvbWlzc2lvblRhc2sudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL29wdGltaXphdGlvbk1ldHJpYy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvb3B0aW1pemF0aW9uT2JqZWN0aXZlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9wbGFuQXNzZXQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL3BsYW5TdWJUeXBlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy90YXNrLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy90YXNrU3ViVHlwZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvb3B0aW1pemF0aW9uLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy90YXNrQ29uc3RyYWludC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvYWNjZXNzV2luZG93LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy90aW1lV2luZG93LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9wbGFuQ29sbGVjdGlvbi50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvcGxhbkNvbGxlY3Rpb25UeXBlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9kaXNwbGF5V2luZG93LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9zcHNFdmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9vdGhlci9hdXRoLmd1YXJkLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL290aGVyL2VudW1zLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL290aGVyL2ludGVyY2VwdG9ycy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9vdGhlci9tb2NrLWJhY2tlbmQuaW50ZXJjZXB0b3IudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvb3RoZXIvdmFsaWRhdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxyXG4gIE1hdENhcmRNb2R1bGUsXHJcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcbiAgLy8gTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAvLyBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlLFxyXG4gIE1hdElucHV0TW9kdWxlLFxyXG4gIE1hdExpc3RNb2R1bGUsXHJcbiAgTWF0TWVudU1vZHVsZSxcclxuICAvLyBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gIE1hdFJhZGlvTW9kdWxlLFxyXG4gIE1hdFNlbGVjdE1vZHVsZSxcclxuICBNYXRTaWRlbmF2TW9kdWxlLFxyXG4gIC8vIE1hdFNsaWRlck1vZHVsZSxcclxuICAvLyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAvLyBNYXRTbmFja0Jhck1vZHVsZSxcclxuICAvLyBNYXRTb3J0TW9kdWxlLFxyXG4gIE1hdFRhYmxlTW9kdWxlLFxyXG4gIE1hdFRhYnNNb2R1bGUsXHJcbiAgTWF0VG9vbGJhck1vZHVsZSxcclxuICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gIC8vIE1hdFN0ZXBwZXJNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG4vLyBpbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG4vLyBpbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG4vLyBpbXBvcnQge0Nka0FjY29yZGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2FjY29yZGlvbic7XHJcbi8vIGltcG9ydCB7QTExeU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG4vLyBpbXBvcnQge0JpZGlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuLy8gaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbi8vIGltcG9ydCB7UGxhdGZvcm1Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbi8vIGltcG9ydCB7T2JzZXJ2ZXJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuLy8gaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcbiAgICAvLyBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgLy8gTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRMaXN0TW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIC8vIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICAvLyBNYXRSaXBwbGVNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxyXG4gICAgLy8gTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgICAvLyBNYXRTbGlkZXJNb2R1bGUsXHJcbiAgICAvLyBNYXRTbmFja0Jhck1vZHVsZSxcclxuICAgIC8vIE1hdFNvcnRNb2R1bGUsXHJcbiAgICAvLyBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgTWF0VGFic01vZHVsZSxcclxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgLy8gTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIC8vIENka1RhYmxlTW9kdWxlLFxyXG4gICAgLy8gQTExeU1vZHVsZSxcclxuICAgIC8vIEJpZGlNb2R1bGUsXHJcbiAgICAvLyBDZGtBY2NvcmRpb25Nb2R1bGUsXHJcbiAgICAvLyBPYnNlcnZlcnNNb2R1bGUsXHJcbiAgICAvLyBPdmVybGF5TW9kdWxlLFxyXG4gICAgLy8gUGxhdGZvcm1Nb2R1bGUsXHJcbiAgICAvLyBQb3J0YWxNb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgLy8gTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIC8vIE1hdEdyaWRMaXN0TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0TGlzdE1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICAvLyBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgLy8gTWF0UmlwcGxlTW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgIC8vIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG4gICAgLy8gTWF0U2xpZGVyTW9kdWxlLFxyXG4gICAgLy8gTWF0U25hY2tCYXJNb2R1bGUsXHJcbiAgICAvLyBNYXRTb3J0TW9kdWxlLFxyXG4gICAgLy8gTWF0U3RlcHBlck1vZHVsZSxcclxuICAgIE1hdFRhYnNNb2R1bGUsXHJcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIC8vIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAvLyBDZGtUYWJsZU1vZHVsZSxcclxuICAgIC8vIEExMXlNb2R1bGUsXHJcbiAgICAvLyBCaWRpTW9kdWxlLFxyXG4gICAgLy8gQ2RrQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgLy8gT2JzZXJ2ZXJzTW9kdWxlLFxyXG4gICAgLy8gT3ZlcmxheU1vZHVsZSxcclxuICAgIC8vIFBsYXRmb3JtTW9kdWxlLFxyXG4gICAgLy8gUG9ydGFsTW9kdWxlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHt9XHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgVGhlIEJvZWluZyBDb21wYW55XHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBCb2VpbmcgQ29tcGFueSAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC1lczYnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG4vKlxyXG5UaGlzIHBpcGUgd2lsbCBmb3JtYXQgYSBkYXRlIGFuZCBjb252ZXJ0IGl0IHRvIFVUQyB1bmxlc3MgJ2ZvcmNlVXRjJyBwYXJhbWV0ZXJcclxuaXMgc2V0IHRvIGZhbHNlLiBJZiB0aGUgZGF0ZSBpcyBlbXB0eSwgbnVsbCwgb3IgaW52YWxpZCBpdCB3aWxsIHJldHVybiAnZGVmYXVsdFZhbCdcclxuKi9cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhZ3NEYXRlRm9ybWF0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgc3RhdGljIGZvcm1hdDogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW06c3MnO1xyXG5cclxuICB0cmFuc2Zvcm0odGhlRGF0ZTogbW9tZW50Lk1vbWVudCB8IERhdGUgfCBzdHJpbmcsIGRlZmF1bHRWYWw6IHN0cmluZyA9ICduL2EnLCBmb3JjZVV0YzogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFtb21lbnQodGhlRGF0ZSkuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb3JjZVV0Yykge1xyXG4gICAgICByZXR1cm4gbW9tZW50LnV0Yyh0aGVEYXRlKS5mb3JtYXQoRGF0ZUZvcm1hdFBpcGUuZm9ybWF0KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbWVudCh0aGVEYXRlKS5mb3JtYXQoRGF0ZUZvcm1hdFBpcGUuZm9ybWF0ICsgJyBaWicpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RydW5jJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJ1bmNhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXMpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHMubGVuZ3RoIDwgMTAwKSB7XHJcbiAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuc2xpY2UoMCwgOTkpICsgJy4uLic7XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ29yZGVyQnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oYXJyYXksIGFzYyA9IHRydWUpIHtcclxuXHJcbiAgICBpZiAoYXNjKSB7IC8vIGFzY2VuZGluZ1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnJheSkuc29ydCgoaXRlbTE6IHN0cmluZywgaXRlbTI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyQnlDb21wYXJhdG9yKGl0ZW0xLCBpdGVtMik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHsgLy8gZGVzY2VuZGluZ1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnJheSkuc29ydCgoaXRlbTE6IHN0cmluZywgaXRlbTI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyQnlDb21wYXJhdG9yKGl0ZW0yLCBpdGVtMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG9yZGVyQnlDb21wYXJhdG9yKGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmIChhLnRvTG93ZXJDYXNlKCkgPCBiLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIGlmIChhLnRvTG93ZXJDYXNlKCkgPiBiLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE5PVEU6ICBBZGRzIGNsYXNzIFwic2VhcmNoLWhpZ2hsaWdodFwiIHRvIHNwYW4gY29udGFpbmluZyBzZWFyY2ggdGVybS5cclxuQFBpcGUoe1xyXG4gICBuYW1lOiAnaGlnaGxpZ2h0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cclxuXHJcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgc2VhcmNoVGVybXMpOiBTYWZlSHRtbCB7XHJcbiAgICBpZiAoc2VhcmNoVGVybXMgJiYgdGV4dCkge1xyXG4gICAgICBsZXQgcyA9IHNlYXJjaFRlcm1zO1xyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VhcmNoVGVybXMpKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFRlcm1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMgPSBzZWFyY2hUZXJtcy5qb2luKCcgJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGxldCBwYXR0ZXJuID0gcy5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xyXG4gICAgICBwYXR0ZXJuID0gcGF0dGVybi5zcGxpdCgnICcpLmZpbHRlcigodCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcclxuICAgICAgfSkuam9pbignfCcpO1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2dpJyk7XHJcblxyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8gL2csICcmbmJzcCcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXHJcbiAgICAgICAgICB0ZXh0LnJlcGxhY2UocmVnZXgsIChtYXRjaCkgPT4gYDxzcGFuIGNsYXNzPVwic2VhcmNoLWhpZ2hsaWdodFwiPiR7bWF0Y2h9PC9zcGFuPmApXHJcbiAgICAgICk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmVtb3ZlcyBhbiBpdGVtIGZyb20gYSBsaXN0IChhcnJheSkgb2YgaXRlbXMuICBNb3N0bHkgdXNlZCB0byByZW1vdmUgYSBzdHJpbmdcclxuLy8gZnJvbSBhIGxpc3QsIGl0IHdpbGwgYWxzbyB3b3JrIHRvIHJlbW92ZSBhbiBvYmplY3QgZnJvbSBhIGxpc3Qgb2Ygb2JqZWN0c1xyXG4vLyBhcyBsb25nIGFzIHRoZXJlIGlzIGEgJ25hbWUnIHByb3BlcnR5IG9uIHRoZSBvYmplY3RcclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdyZW1vdmUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVJdGVtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zXHJcbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgaXRlbVRvUmVtb3ZlOiBhbnkpOiBhbnlbXSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGl0ZW1zWzBdID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gXHJcbiAgICAgICAgaXRlbS5sb2NhbGVDb21wYXJlKGl0ZW1Ub1JlbW92ZSkgIT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGl0ZW1zWzBdLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgaXRlbVRvUmVtb3ZlLmhhc093blByb3BlcnR5KCduYW1lJykpIHtcclxuICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IFxyXG4gICAgICAgIGl0ZW0ubmFtZS5sb2NhbGVDb21wYXJlKGl0ZW1Ub1JlbW92ZS5uYW1lKSAhPT0gMFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21QaXBlcyA9IHtcclxuICBEYXRlRm9ybWF0UGlwZSxcclxuICBUcnVuY2F0ZVBpcGUsXHJcbiAgT3JkZXJCeVBpcGUsXHJcbiAgUmVtb3ZlSXRlbVBpcGVcclxufTtcclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEV4cG9zZSwgY2xhc3NUb1BsYWluIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbiB7XHJcbiAgICB1c2VyTG9nb246IHN0cmluZyA9ICcnO1xyXG4gICAgbGFzdFVwZGF0ZWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQEV4cG9zZSh7bmFtZTogJ2Fubm90YXRpb25JZCd9KVxyXG4gICAgaWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgb2JqZWN0SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgYW5ub3RhdGlvblR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbm90ZVR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbmFycmF0aXZlOiBzdHJpbmcgPSAnJztcclxuICAgIGNvbmZpZGVuY2U6XHRudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgaWYgKGpzb24pIHtcclxuICAgICAgdGhpcy51c2VyTG9nb24gPSBqc29uLnVzZXJMb2dvbjtcclxuICAgICAgdGhpcy5sYXN0VXBkYXRlZCA9IGpzb24ubGFzdFVwZGF0ZWQ7XHJcbiAgICAgIHRoaXMuaWQgPSBqc29uLmFubm90YXRpb25JZDtcclxuICAgICAgdGhpcy5vYmplY3RJZCA9IGpzb24ub2JqZWN0SWQ7XHJcbiAgICAgIHRoaXMuYW5ub3RhdGlvblR5cGUgPSBqc29uLmFubm90YXRpb25UeXBlO1xyXG4gICAgICB0aGlzLm5vdGVUeXBlID0ganNvbi5ub3RlVHlwZTtcclxuICAgICAgdGhpcy5uYXJyYXRpdmUgPSBqc29uLm5hcnJhdGl2ZTtcclxuICAgICAgdGhpcy5jb25maWRlbmNlID0ganNvbi5jb25maWRlbmNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VyaWFsaXplKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzVG9QbGFpbih0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xyXG5cclxuICBpc0xvY2FsaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRGV2TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaXNMb2NhbGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2xvY2FsaG9zdCc7XHJcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzcGxheXMgaW4gdGhlIGNvbnNvbGUuIHdpbGwgbm90IGRpc3BsYXkgaW4gYSBwcm9kdWN0aW9uIGJ1aWxkXHJcbiAgZGVidWcoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgLy8gb25seSBkaXNwbGF5IGlmIHJ1bm5pbmcgb24gbG9jYWxob3N0XHJcbiAgbG9jYWwoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9jYWxob3N0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICBpbmZvKC4uLm1zZzogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKC4uLm1zZzogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2FybiguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5lcnJvciguLi5tc2cpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0KGJhY2tncm91bmQ6IHN0cmluZywgbXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGAlYyAke21zZ30gYCwgYGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZH07IGNvbG9yOiAjMDAwOyBmb250LXdlaWdodDogYm9sZDtgKTtcclxuICB9XHJcbn1cclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbCB7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR2VuZXJhdGUgR3VpZFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHN0YXRpYyBuZXdHdWlkKCkge1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGxldCB1dWlkID0gJ3h4eHh4eHh4eHh4eDR4eHh5eHh4eHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgIGxldCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xyXG4gICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXVpZDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogVGFrZXMgYSB2YXJpYWJsZSBsaXN0IG9mIHN0cmluZ3MgYW5kIGNvbWJpbmVzIHRoZW0gaW50byBhIHZhbGlkIHVybC4gVGhpc1xyXG4gICAqIGZ1bmN0aW9uIHdpbGwgYXZvaWQgdGhlIHByb2JsZW0gb2YgbWlzc2luZyBvciBleHRyYSAnLycgY2hhcmFjdGVycy5cclxuICAgKiBFeGFtcGxlOlxyXG4gICAqICAgIGlucHV0OiAnaHR0cDovL3d3dy5nb29nbGUuY29tLycsICcvc3RyaW5nMS8nLCAvc3RyaW5nMicsICdzdHJpbmczJ1xyXG4gICAqICAgIG91dHB1dDogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbS9zdHJpbmcxL3N0cmluZzIvc3RyaW5nMydcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzdGF0aWMgdXJsSm9pbiguLi5zdHJBcnJheTogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXN1bHRBcnJheSA9IFtdO1xyXG5cclxuICAgIC8vIElmIHRoZSBmaXJzdCBwYXJ0IGlzIGEgcGxhaW4gcHJvdG9jb2wsIHdlIGNvbWJpbmUgaXQgd2l0aCB0aGUgbmV4dCBwYXJ0LlxyXG4gICAgaWYgKHN0ckFycmF5WzBdLm1hdGNoKC9eW14vOl0rOlxcLyokLykgJiYgc3RyQXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICBsZXQgZmlyc3QgPSBzdHJBcnJheS5zaGlmdCgpO1xyXG4gICAgICBzdHJBcnJheVswXSA9IGZpcnN0ICsgc3RyQXJyYXlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlcmUgbXVzdCBiZSB0d28gb3IgdGhyZWUgc2xhc2hlcyBpbiB0aGUgZmlsZSBwcm90b2NvbCwgdHdvIHNsYXNoZXMgaW4gYW55dGhpbmcgZWxzZS5cclxuICAgIGlmIChzdHJBcnJheVswXS5tYXRjaCgvXmZpbGU6XFwvXFwvXFwvLykpIHtcclxuICAgICAgc3RyQXJyYXlbMF0gPSBzdHJBcnJheVswXS5yZXBsYWNlKC9eKFteLzpdKyk6XFwvKi8sICckMTovLy8nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ckFycmF5WzBdID0gc3RyQXJyYXlbMF0ucmVwbGFjZSgvXihbXi86XSspOlxcLyovLCAnJDE6Ly8nKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjb21wb25lbnQgPSBzdHJBcnJheVtpXTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VybCBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZCAnICsgY29tcG9uZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbXBvbmVudCA9PT0gJycpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgIC8vIFJlbW92aW5nIHRoZSBzdGFydGluZyBzbGFzaGVzIGZvciBlYWNoIGNvbXBvbmVudCBidXQgdGhlIGZpcnN0LlxyXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9eW1xcL10rLywgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpIDwgc3RyQXJyYXkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vIFJlbW92aW5nIHRoZSBlbmRpbmcgc2xhc2hlcyBmb3IgZWFjaCBjb21wb25lbnQgYnV0IHRoZSBsYXN0LlxyXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLywgJycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZvciB0aGUgbGFzdCBjb21wb25lbnQgd2Ugd2lsbCBjb21iaW5lIG11bHRpcGxlIHNsYXNoZXMgdG8gYSBzaW5nbGUgb25lLlxyXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLywgJy8nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0QXJyYXkucHVzaChjb21wb25lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyID0gcmVzdWx0QXJyYXkuam9pbignLycpO1xyXG4gICAgLy8gRWFjaCBpbnB1dCBjb21wb25lbnQgaXMgbm93IHNlcGFyYXRlZCBieSBhIHNpbmdsZSBzbGFzaCBleGNlcHQgdGhlIHBvc3NpYmxlIGZpcnN0IHBsYWluIHByb3RvY29sIHBhcnQuXHJcblxyXG4gICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoIGJlZm9yZSBwYXJhbWV0ZXJzIG9yIGhhc2hcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXC8oXFw/fCZ8I1teIV0pL2csICckMScpO1xyXG5cclxuICAgIC8vIHJlcGxhY2UgPyBpbiBwYXJhbWV0ZXJzIHdpdGggJlxyXG4gICAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KCc/Jyk7XHJcbiAgICBzdHIgPSBwYXJ0cy5zaGlmdCgpICsgKHBhcnRzLmxlbmd0aCA+IDAgPyAnPycgOiAnJykgKyBwYXJ0cy5qb2luKCcmJyk7XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgY29uc29sZS5sb2cgZnVuY3Rpb24gdG8gdHVybiBvZmZcclxuICAgKiBhbGwgbWVzc2FnZXMgZm9yIHByb2R1Y3Rpb24sIG9yIGludGVyY2VwdCB0aGUgY29uc29sZS5sb2cgZnVuY3Rpb24gdG8gZG9cclxuICAgKiBzb21lIGFkZGl0aW9uYWwgcHJvY2Vzc2luZy5cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzdGF0aWMgb3ZlcnJpZGVDb25zb2xlKCkge1xyXG4gICAgbGV0IGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcclxuICAgIGlmICghY29uc29sZSkgeyByZXR1cm47IH1cclxuICAgIGZ1bmN0aW9uIGludGVyY2VwdChtZXRob2QpIHtcclxuICAgICAgbGV0IG9yaWdpbmFsID0gY29uc29sZVttZXRob2RdO1xyXG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZG8gc25lYWt5IHN0dWZmXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsLmFwcGx5KSB7XHJcbiAgICAgICAgICAvLyBEbyB0aGlzIGZvciBub3JtYWwgYnJvd3NlcnNcclxuICAgICAgICAgIG9yaWdpbmFsLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIERvIHRoaXMgZm9yIElFXHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhcmd1bWVudHMpLmpvaW4oJyAnKTtcclxuICAgICAgICAgIG9yaWdpbmFsKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGxldCBtZXRob2RzID0gWydsb2cnLCAnd2FybicsICdlcnJvciddO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGludGVyY2VwdChtZXRob2RzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR2V0IHRoZSBiZXN0IGNvbnRyYXN0aW5nIGNvbG9yLCBlaXRoZXIgYmxhY2sgb3Igd2hpdGUsIGZvciBnaXZlbiBpbnB1dCBjb2xvci5cclxuICAgKiBQYXJhbWV0ZXJzOlxyXG4gICAqICAgIGNvbG9yOiBoZXggY29sb3Igc3VjaCBhcyAnI0ZGMDA3NydcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjb250cmFzdENvbG9yKGhleENvbG9yKSB7XHJcbiAgICAvLyBDb3VudGluZyB0aGUgcGVyY2VwdGl2ZSBsdW1pbmFuY2VcclxuICAgIC8vIGh1bWFuIGV5ZSBmYXZvcnMgZ3JlZW4gY29sb3IuLi5cclxuICAgIGxldCByZ2IgPSB0aGlzLmhleFRvUmdiKGhleENvbG9yKTtcclxuICAgIGxldCBhID0gMSAtICgwLjI5OSAqIHJnYi5yICsgMC41ODcgKiByZ2IuZyArIDAuMTE0ICogcmdiLmIpIC8gMjU1O1xyXG4gICAgaWYgKGEgPCAwLjUpIHtcclxuICAgICAgcmV0dXJuICcjMDAwMDAwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnI2ZmZmZmZic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xvckZyb21SZ2IociwgZywgYikge1xyXG4gICAgcmV0dXJuICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJztcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFRvSGV4KGMpIHtcclxuICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xyXG4gIH1cclxuXHJcbiAgcmdiVG9IZXgociwgZywgYikge1xyXG4gICAgcmV0dXJuICcjJyArIHRoaXMuY29tcG9uZW50VG9IZXgocikgKyB0aGlzLmNvbXBvbmVudFRvSGV4KGcpICsgdGhpcy5jb21wb25lbnRUb0hleChiKTtcclxuICB9XHJcblxyXG4gIGhleFRvUmdiKGhleCkge1xyXG4gICAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxyXG4gICAgbGV0IHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xyXG4gICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgfSA6IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgT2JzZXJ2YWJsZSwgb2YsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2Fubm90YXRpb24nO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblNlcnZpY2Uge1xyXG5cclxuICBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvYW5ub3RhdGlvbi97b2JqZWN0SWR9XHJcbiAgICogZ2V0IGEgbGlzdCBvZiBBbm5vdGF0aW9uc1xyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbm5vdGF0aW9ucyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm5vdGF0aW9uW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvblNlcnZpY2UuZ2V0QW5ub3RhdGlvbnMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgYC9hbm5vdGF0aW9uLyR7aWR9YCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBhbm5vdGF0aW9uIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IEFubm90YXRpb24oaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBPU1QgL2Fubm90YXRpb25cclxuICAgKiBjcmVhdGUgYSBuZXcgZXZlbnRcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY3JlYXRlQW5ub3RhdGlvbihhbm5vdGF0aW9uOiBBbm5vdGF0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvblNlcnZpY2UuY3JlYXRlQW5ub3RhdGlvbigpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2Fubm90YXRpb24nKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFBPU1QgJHt1cmx9YCwgYW5ub3RhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIGFubm90YXRpb24uc2VyaWFsaXplKCksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGNyZWF0ZWQgYW5ub3RhdGlvbmAsIHJlcykpLFxyXG4gICAgICAvLyBtYXAocmVzID0+IG5ldyBBbm5vdGF0aW9uKHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUFVUIC9hbm5vdGF0aW9uXHJcbiAgICogdXBkYXRlIGV2ZW50XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHVwZGF0ZUFubm90YXRpb24oYW5ub3RhdGlvbjogQW5ub3RhdGlvbik6IE9ic2VydmFibGU8QW5ub3RhdGlvbj4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uU2VydmljZS51cGRhdGVBbm5vdGF0aW9uKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvYW5ub3RhdGlvbicpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUFVUICR7dXJsfWAsIGFubm90YXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8QW5ub3RhdGlvbj4odXJsLCBhbm5vdGF0aW9uLnNlcmlhbGl6ZSgpLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIGFubm90YXRpb25gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiBuZXcgQW5ub3RhdGlvbihyZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvYW5ub3RhdGlvbic7XHJcbmltcG9ydCB7IEFubm90YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5ub3RhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1hbm5vdGF0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Fubm90YXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Fubm90YXRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgb2JqZWN0SWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFubm90YXRpb25UeXBlOiBzdHJpbmcgPSAnJzsgLy8gRVZFTlRMSU5LLCBFVkVOVE1PREVMLCBFVkVOVCwgT0JTRVJWQUJJTElUWSwgUExBTiwgQ09BLCBUQVNLXHJcblxyXG4gIGFubm90YXRpb25zRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgZmFjdEFubm90YXRpb25zOiBBcnJheTxBbm5vdGF0aW9uPjtcclxuICBhc3N1bXB0aW9uQW5ub3RhdGlvbnM6IEFycmF5PEFubm90YXRpb24+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgYW5ub3RhdGlvblNlcnZpY2U6IEFubm90YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBjb250cm9sc1xyXG4gICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBmYWN0c0N0cmw6IFtudWxsLCB7IHVwZGF0ZU9uOiAnYmx1cicgfV0sXHJcbiAgICAgIGFzc3VtcHRpb25zQ3RybDogW251bGwsIHsgdXBkYXRlT246ICdibHVyJyB9XVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNhbGwgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBhbm5vdGF0aW9ucyB3aGVuZXZlciBkYXRhIGNoYW5nZXNcclxuICAgIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgaWYgKHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuZGlydHkgJiYgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC52YWxpZCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQW5ub3RhdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Fubm90YXRpb25zQ29tcG9uZW50Lm5nT25DaGFuZ2VzKCknKTtcclxuICAgIGlmICh0aGlzLm9iamVjdElkKSB7XHJcbiAgICAgIC8vIEdldCBhbm5vdGF0aW9ucyBmb3IgdGhpcyBldmVudCBhbmQgcG9wdWxhdGUgdGhlIGNvbnRyb2xzLiBJZiBubyBhbm5vdGF0aW9ucyBleGlzdCwgY3JlYXRlIHRoZW1cclxuICAgICAgdGhpcy5hbm5vdGF0aW9uU2VydmljZS5nZXRBbm5vdGF0aW9ucyh0aGlzLm9iamVjdElkKS5zdWJzY3JpYmUoYW5ub3RhdGlvbnMgPT4ge1xyXG4gICAgICAgIHRoaXMuZmFjdEFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuZmlsdGVyKHggPT4geC5ub3RlVHlwZS50b1VwcGVyQ2FzZSgpID09PSAnRkFDVCcpO1xyXG4gICAgICAgIHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuZmlsdGVyKHggPT4geC5ub3RlVHlwZS50b1VwcGVyQ2FzZSgpID09PSAnQVNTVU1QVElPTicpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgbmV3IGZhY3QgYW5kIGFzc3VtcHRpb24gYW5ub3RhdGlvbnMgaWYgbm9uZSBleGlzdFxyXG4gICAgICAgIGlmICghdGhpcy5mYWN0QW5ub3RhdGlvbnMgfHwgdGhpcy5mYWN0QW5ub3RhdGlvbnMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgIGxldCBuZXdBbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oKTtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ub2JqZWN0SWQgPSB0aGlzLm9iamVjdElkO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSA9IHRoaXMuYW5ub3RhdGlvblR5cGU7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm5vdGVUeXBlID0gJ0ZhY3QnO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5uYXJyYXRpdmUgPSAnJztcclxuICAgICAgICAgIHRoaXMuZmFjdEFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuY29udHJvbHNbJ2ZhY3RzQ3RybCddLnNldFZhbHVlKHRoaXMuZmFjdEFubm90YXRpb25zWzBdLm5hcnJhdGl2ZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnMgfHwgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgIGxldCBuZXdBbm5vdGF0aW9uID0gbmV3IEFubm90YXRpb24oKTtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ub2JqZWN0SWQgPSB0aGlzLm9iamVjdElkO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSA9IHRoaXMuYW5ub3RhdGlvblR5cGU7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm5vdGVUeXBlID0gJ0Fzc3VtcHRpb24nO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5uYXJyYXRpdmUgPSAnJztcclxuICAgICAgICAgIHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuY29udHJvbHNbJ2Fzc3VtcHRpb25zQ3RybCddLnNldFZhbHVlKHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdLm5hcnJhdGl2ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQW5ub3RhdGlvbkNvbXBvbmVudDogcmVxdWlyZWQgaW5wdXQgcGFyYW1ldGVyICdvYmplY3RJZCcgaXMgdW5kZWZpbmVkYCk7IFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQW5ub3RhdGlvbnMoKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Fubm90YXRpb25zQ29tcG9uZW50Ojp1cGRhdGVBbm5vdGF0aW9ucygpJyk7XHJcbiAgICBcclxuICAgIGxldCBmYWN0c0N0cmwgPSB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLmNvbnRyb2xzWydmYWN0c0N0cmwnXTtcclxuICAgIGxldCBhc3N1bXB0aW9uc0N0cmwgPSB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLmNvbnRyb2xzWydhc3N1bXB0aW9uc0N0cmwnXTtcclxuXHJcbiAgICBpZiAoZmFjdHNDdHJsLmRpcnR5KSB7XHJcbiAgICAgIHRoaXMuZmFjdEFubm90YXRpb25zWzBdLm5hcnJhdGl2ZSA9IGZhY3RzQ3RybC52YWx1ZTtcclxuXHJcbiAgICAgIC8vIGlmIHRoZSBhbm5vdGF0aW9uSWQgaXMgZW1wdHkgdGhhdCBpbmRpY2F0ZXMgdGhhdCB0aGlzIGlzIGEgbmV3IGFubm90YXRpb25cclxuICAgICAgaWYgKCF0aGlzLmZhY3RBbm5vdGF0aW9uc1swXS5pZCkge1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UuY3JlYXRlQW5ub3RhdGlvbih0aGlzLmZhY3RBbm5vdGF0aW9uc1swXSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZhY3RBbm5vdGF0aW9uc1swXSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLnVwZGF0ZUFubm90YXRpb24odGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0gPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXNzdW1wdGlvbnNDdHJsLmRpcnR5KSB7XHJcbiAgICAgIHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdLm5hcnJhdGl2ZSA9IGFzc3VtcHRpb25zQ3RybC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0uaWQpIHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLmNyZWF0ZUFubm90YXRpb24odGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0gPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uU2VydmljZS51cGRhdGVBbm5vdGF0aW9uKHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuYXNzdW1wdGlvbkFubm90YXRpb25zWzBdID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItcGFnZS1ub3QtZm91bmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItcHJvZ3Jlc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5cclxuICBleHBvcnQgY2xhc3MgUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaGlkZUNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNvbXBvbmVudCgpIHtcclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc0NvbnRhaW5lcicpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1Zygnc2V0IHN0eWxlIG9mIFwicHJvZ3Jlc3NDb250YWluZXJcIiB0byBcIm5vbmVcIicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygndW5hYmxlIHRvIGZpbmQgZWxlbWVudCBcInByb2dyZXNzQ29udGFpbmVyXCInKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25SZXF1ZXN0IHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBqc29uLnVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBqc29uLnBhc3N3b3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25SZXNwb25zZSB7XHJcbiAgICBhdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIHJlYXNvbjpcdHN0cmluZztcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0ganNvbi5hdXRoZW50aWNhdGVkO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBqc29uLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIHRoaXMucmVhc29uID0ganNvbi5yZWFzb247XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGpzb24udG9rZW47XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgQXV0aGVudGljYXRpb25SZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9hdXRoZW50aWNhdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgbG9naW5Sb3V0ZTogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBBVVRIRU5JQ0FURSA9ICcvYXV0aGVudGljYXRlJztcclxuICBwcml2YXRlIEdFVF9ET01BSU5TID0gJy9kb21haW4nO1xyXG4gIHByaXZhdGUgSFRUUF9PUFRJT05TID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBVU0VSSU5GT19LRVk6IHN0cmluZyA9ICd1c2VySW5mbyc7XHJcblxyXG4gIHByaXZhdGUgaXNDdXJyZW50bHlMb2dnZWRJbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZywgbG9naW5Sb3V0ZSA9ICcvbG9naW4nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gICAgdGhpcy5sb2dpblJvdXRlID0gbG9naW5Sb3V0ZTtcclxuICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmdldFVzZXJuYW1lRnJvbVN0b3JhZ2UoKTtcclxuICAgIHRoaXMuaXNDdXJyZW50bHlMb2dnZWRJbiA9ICgodGhpcy51c2VybmFtZSAhPSBudWxsKSAmJiAodGhpcy51c2VybmFtZS5sZW5ndGggPiAwKSk7XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdFRvTG9naW5QYWdlKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmxvZ2luUm91dGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0aGVudGljYXRpb25TZXJ2aWNlUHJlZml4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIGdldFVzZXJuYW1lRnJvbVN0b3JhZ2UoKTogc3RyaW5nIHtcclxuICAgIGxldCB1c2VybmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgdXNlckluZm8gPSB0aGlzLmdldFVzZXJJbmZvRnJvbVN0b3JhZ2UoKTtcclxuXHJcbiAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaGFzT3duUHJvcGVydHkoJ3VzZXJOYW1lJykgJiZcclxuICAgICAgKHVzZXJJbmZvLnVzZXJOYW1lLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHVzZXJuYW1lID0gdXNlckluZm8udXNlck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVzZXJuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGlzcGxheU5hbWVGcm9tU3RvcmFnZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IGRpc3BsYXlOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCB1c2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9Gcm9tU3RvcmFnZSgpO1xyXG5cclxuICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5oYXNPd25Qcm9wZXJ0eSgnZGlzcGxheU5hbWUnKSAmJlxyXG4gICAgICAodXNlckluZm8uZGlzcGxheU5hbWUubGVuZ3RoID4gMCkpIHtcclxuICAgICAgZGlzcGxheU5hbWUgPSB1c2VySW5mby5kaXNwbGF5TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbkZyb21TdG9yYWdlKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdG9rZW46IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gdGhpcy5nZXRVc2VySW5mb0Zyb21TdG9yYWdlKCk7XHJcblxyXG4gICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmhhc093blByb3BlcnR5KCd0b2tlbicpICYmXHJcbiAgICAgICh1c2VySW5mby50b2tlbi5sZW5ndGggPiAwKSkge1xyXG4gICAgICB0b2tlbiA9IHVzZXJJbmZvLnRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvRnJvbVN0b3JhZ2UoKTogYW55IHtcclxuICAgIGxldCB1c2VySW5mbzogYW55O1xyXG4gICAgdXNlckluZm8gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMuVVNFUklORk9fS0VZKTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh1c2VySW5mbyk7XHJcbiAgfVxyXG5cclxuICBwdXRVc2VySW5mb0luU3RvcmFnZSh1c2VySW5mbzogYW55KTogdm9pZCB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuVVNFUklORk9fS0VZLCB1c2VySW5mbyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMb2dnZWRJbigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzQ3VycmVudGx5TG9nZ2VkSW47XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFVzZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VybmFtZUZyb21TdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzcGxheU5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5TmFtZUZyb21TdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9rZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbkZyb21TdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0QWxsRG9tYWlucygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9ET01BSU5TKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEFsbERvbWFpbnMoKSAtIHVybCA9ICcgKyB1cmwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCB0aGlzLkhUVFBfT1BUSU9OUykucGlwZShcclxuICAgICAgdGFwKHggPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGByZXRyZWl2ZWQgZG9tYWluIGxpc3RgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnN0cmluZ3MgYXMgc3RyaW5nW10pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxvZ0luKHVzZXJJbmZvLCBkb21haW46IHN0cmluZyk6IE9ic2VydmFibGU8QXV0aGVudGljYXRpb25SZXNwb25zZT4ge1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5BVVRIRU5JQ0FURSwgZG9tYWluKTtcclxuICAgIGxldCBhdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgQXV0aGVudGljYXRpb25SZXF1ZXN0KHVzZXJJbmZvKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QXV0aGVudGljYXRpb25SZXNwb25zZT4odXJsLCBhdXRoZW50aWNhdGlvblJlcXVlc3QsIHRoaXMuSFRUUF9PUFRJT05TKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoXHJcbiAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnZ290IGF1dGhlbnRpY2F0aW9uIHJlc3BvbnNlICcgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICBsZXQgYXV0aGVudGljYXRpb25SZXNwb25zZSA9IG5ldyDDgsKgQXV0aGVudGljYXRpb25SZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGlvblJlc3BvbnNlLmF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnB1dFVzZXJJbmZvSW5TdG9yYWdlKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VySW5mby51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBhdXRoZW50aWNhdGlvblJlc3BvbnNlLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNDdXJyZW50bHlMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nU2VydmljZS53YXJuKCdFcnJvciBhdXRoZW50aWNhdGluZy4gIFsnICsgZXJyb3IgKyAnXScpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9nT3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5VU0VSSU5GT19LRVkpO1xyXG4gICAgdGhpcy51c2VybmFtZSA9ICcnO1xyXG4gICAgdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdGhpcy5yZWRpcmVjdFRvTG9naW5QYWdlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCAgT25Jbml0LCAgSW5wdXQsICBWaWV3Q2hpbGQsICBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0ICB7XHJcblxyXG4gIEBJbnB1dCgpIGFwcE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBWaWV3Q2hpbGQoJ3VzZXJuYW1lJykgdXNlcm5hbWU6IEVsZW1lbnRSZWY7XHJcbiAgXHJcbiAgcHJpdmF0ZSByZXR1cm5Vcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgRVJST1JfTUVTU0FHRVM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBsb2dpbk1lc3NhZ2U6ICdVbmFibGUgdG8gU2lnbiBJbiwgdHJ5IGFnYWluLicsXHJcbiAgfTtcclxuICBwdWJsaWMgZG9tYWluTGlzdDogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gIHB1YmxpYyBzZWxlY3RlZERvbWFpbiA9ICdjb3MnO1xyXG5cclxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIGxvZ2luRmFpbGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhWydhcHBOYW1lJ107XHJcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICB0aGlzLnJldHVyblVybCA9IHBhcmFtc1sncmV0dXJuJ10gfHwgJy8nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRBbGxEb21haW5zKClcclxuICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbXBvbmVudC5kb21haW5MaXN0LnB1c2gocmVzcG9uc2VbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbXBvbmVudC5zZWxlY3RlZERvbWFpbiA9IGNvbXBvbmVudC5kb21haW5MaXN0WzBdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyBTZXQgdGhlIGZvY3VzIHRvIHRoZSB1c2VybmFtZSAobXd0KVxyXG4gICAgdGhpcy51c2VybmFtZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1xyXG4gICAgICAgIC8vIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5tYXhMZW5ndGgoNTApXHJcbiAgICAgIF1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBbXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1heExlbmd0aCg1MClcclxuICAgICAgXV0sXHJcbiAgICAgIGRvbWFpbjogW3t2YWx1ZTogdGhpcy5zZWxlY3RlZERvbWFpbiwgZGlzYWJsZWQ6IGZhbHNlfSwgW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgIF1dLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dJbigpIHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLmxvZ2luRm9ybS5jb250cm9scy51c2VybmFtZS52YWx1ZTtcclxuICAgIGxldCBwYXNzd29yZCA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xyXG5cclxuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ0luKHtcclxuICAgICAgdXNlck5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmR9LCB0aGlzLnNlbGVjdGVkRG9tYWluKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgYXV0aGVudGljYXRpb25SZXNwb25zZSA9IG5ld8OCwqBBdXRoZW50aWNhdGlvblJlc3BvbnNlKHJlcyk7XHJcbiAgICAgICAgICBpZiAoIWF1dGhlbnRpY2F0aW9uUmVzcG9uc2UuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luRmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZXR1cm5VcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXJyb3Igb2NjdXJlZCB3aGlsZSBhdXRoZW50aWNhdGluZy4gICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgIHRoaXMubG9naW5GYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9uRm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdWJtaXR0ZWQpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5sb2dpbkZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmxvZ2luRm9ybS5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICB0aGlzLmxvZ2luRm9ybS5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItZW1wdHknLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wdHlDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBY2Nlc3NXaW5kb3dMaW1pdCB9IGZyb20gJy4vYWNjZXNzLXdpbmRvdy1saW1pdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FwYWJpbGl0eSB7XHJcbiAgICBjYXBhYmlsaXR5SWQ6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjb25maWRlbmNlOiBzdHJpbmc7XHJcbiAgICBjYXBhYmlsaXR5TWFwSWQ6IHN0cmluZztcclxuICAgIHByZUV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIHBvc3RFeGVjdXRpb25UaW1lOiBudW1iZXI7XHJcbiAgICByZWxpYWJpbGl0eVByb2JhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBwcm9iYWJpbGl0eU9mU3VjY2VzczogbnVtYmVyO1xyXG4gICAgaXNEZWRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBhc3Nlc3NUaW1lOiBudW1iZXI7XHJcbiAgICBwcmlvcml0eTogbnVtYmVyO1xyXG4gICAgZXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG5cclxuICAgIGVsZXZhdGlvbk1pbkxpbWl0OiBudW1iZXI7XHJcbiAgICBlbGV2YXRpb25NYXhMaW1pdDogbnVtYmVyO1xyXG4gICAgZWFydGhMaW1iQWx0TGltaXQ6IG51bWJlcjtcclxuICAgIHF1YWxpdHlTY29yZTogbnVtYmVyO1xyXG4gICAgbHVuYXJFeGNsdXNpb25BbmdsZTogbnVtYmVyO1xyXG4gICAgYXBwbHlMaWdodGluZ0NvbnN0cmFpbnRzOiBib29sZWFuO1xyXG4gICAgc29sYXJFeGNsdXNpb25BbmdsZTogbnVtYmVyO1xyXG4gICAgYXBwbHlTb2xhckRhcmtuZXNzQ29uc3RyYWludDogYm9vbGVhbjtcclxuICAgIHJhbmdlTWluOiBudW1iZXI7XHJcbiAgICByYW5nZU1heDogbnVtYmVyO1xyXG4gICAgYXppbXV0aE1pbkxpbWl0OiBudW1iZXI7XHJcbiAgICBhemltdXRoTWF4TGltaXQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jYXBhYmlsaXR5SWQgPSBqc29uLmNhcGFiaWxpdHlJZDtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmNvbmZpZGVuY2UgPSBqc29uLmNvbmZpZGVuY2U7XHJcbiAgICAgICAgdGhpcy5jYXBhYmlsaXR5TWFwSWQgPSBqc29uLmNhcGFiaWxpdHlNYXBJZDtcclxuICAgICAgICB0aGlzLnByZUV4ZWN1dGlvblRpbWUgPSBqc29uLnByZUV4ZWN1dGlvblRpbWU7XHJcbiAgICAgICAgdGhpcy5wb3N0RXhlY3V0aW9uVGltZSA9IGpzb24ucG9zdEV4ZWN1dGlvblRpbWU7XHJcbiAgICAgICAgdGhpcy5yZWxpYWJpbGl0eVByb2JhYmlsaXR5ID0ganNvbi5yZWxpYWJpbGl0eVByb2JhYmlsaXR5O1xyXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHlPZlN1Y2Nlc3MgPSBqc29uLnByb2JhYmlsaXR5T2ZTdWNjZXNzO1xyXG4gICAgICAgIHRoaXMuaXNEZWRpY2F0ZWQgPSBqc29uLmlzRGVkaWNhdGVkO1xyXG4gICAgICAgIHRoaXMuYXNzZXNzVGltZSA9IGpzb24uYXNzZXNzVGltZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0ganNvbi5wcmlvcml0eTtcclxuICAgICAgICB0aGlzLmV4ZWN1dGlvblRpbWUgPSBqc29uLmV4ZWN1dGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZWxldmF0aW9uTWluTGltaXQgPSBqc29uLmVsZXZhdGlvbk1pbkxpbWl0O1xyXG4gICAgICAgIHRoaXMuZWxldmF0aW9uTWF4TGltaXQgPSBqc29uLmVsZXZhdGlvbk1heExpbWl0O1xyXG4gICAgICAgIHRoaXMuZWFydGhMaW1iQWx0TGltaXQgPSBqc29uLmVhcnRoTGltYkFsdExpbWl0O1xyXG4gICAgICAgIHRoaXMucXVhbGl0eVNjb3JlID0ganNvbi5xdWFsaXR5U2NvcmU7XHJcbiAgICAgICAgdGhpcy5sdW5hckV4Y2x1c2lvbkFuZ2xlID0ganNvbi5sdW5hckV4Y2x1c2lvbkFuZ2xlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlMaWdodGluZ0NvbnN0cmFpbnRzID0ganNvbi5hcHBseUxpZ2h0aW5nQ29uc3RyYWludHM7XHJcbiAgICAgICAgdGhpcy5zb2xhckV4Y2x1c2lvbkFuZ2xlID0ganNvbi5zb2xhckV4Y2x1c2lvbkFuZ2xlO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTb2xhckRhcmtuZXNzQ29uc3RyYWludCA9IGpzb24uYXBwbHlTb2xhckRhcmtuZXNzQ29uc3RyYWludDtcclxuICAgICAgICB0aGlzLnJhbmdlTWluID0ganNvbi5yYW5nZU1pbjtcclxuICAgICAgICB0aGlzLnJhbmdlTWF4ID0ganNvbi5yYW5nZU1heDtcclxuICAgICAgICB0aGlzLmF6aW11dGhNaW5MaW1pdCA9IGpzb24uYXppbXV0aE1pbkxpbWl0O1xyXG4gICAgICAgIHRoaXMuYXppbXV0aE1heExpbWl0ID0ganNvbi5hemltdXRoTWF4TGltaXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXR5TWFwIHtcclxuICAgIGNhcGFiaWxpdHlNYXBJZDogc3RyaW5nID0gJyc7XHJcbiAgICBjYXBhYmlsaXR5VHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICB1Y2lDYXBhYmlsaXR5VHlwZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgdWNpVGFza1R5cGVOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGhhc1RhcmdldDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdHlNYXBJZCA9IGpzb24uY2FwYWJpbGl0eU1hcElkID8ganNvbi5jYXBhYmlsaXR5TWFwSWQgOiAnJztcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdHlUeXBlID0ganNvbi5jYXBhYmlsaXR5VHlwZSA/IGpzb24uY2FwYWJpbGl0eVR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLnVjaUNhcGFiaWxpdHlUeXBlTmFtZSA9IGpzb24udWNpQ2FwYWJpbGl0eVR5cGVOYW1lID8ganNvbi51Y2lDYXBhYmlsaXR5VHlwZU5hbWUgOiAnJztcclxuICAgICAgICB0aGlzLnVjaVRhc2tUeXBlTmFtZSA9IGpzb24udWNpVGFza1R5cGVOYW1lID8ganNvbi51Y2lUYXNrVHlwZU5hbWUgOiAnJztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbiA/IGpzb24uZGVzY3JpcHRpb24gOiAnJztcclxuICAgICAgICB0aGlzLmhhc1RhcmdldCA9IGpzb24uaGFzVGFyZ2V0ID8ganNvbi5oYXNUYXJnZXQgOiAnJyA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmlsaXR5IHtcclxuICAgIG9ic2VydmluZ0NhcGFiaWxpdHlNYXBJZDogc3RyaW5nO1xyXG4gICAgb2JzZXJ2aW5nQ2FwYWJpbGl0eVR5cGU6IHN0cmluZztcclxuICAgIHVzZWRDYXBhYmlsaXR5TWFwSWQ6IHN0cmluZztcclxuICAgIHVzZWRDYXBhYmlsaXR5VHlwZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNhcGFiaWxpdHlEb21haW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGpzb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmluZ0NhcGFiaWxpdHlNYXBJZCA9IGpzb24ub2JzZXJ2aW5nQ2FwYWJpbGl0eU1hcElkO1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmluZ0NhcGFiaWxpdHlUeXBlID0ganNvbi5vYnNlcnZpbmdDYXBhYmlsaXR5VHlwZTtcclxuICAgICAgICAgICAgdGhpcy51c2VkQ2FwYWJpbGl0eU1hcElkID0ganNvbi51c2VkQ2FwYWJpbGl0eU1hcElkO1xyXG4gICAgICAgICAgICB0aGlzLnVzZWRDYXBhYmlsaXR5VHlwZSA9IGpzb24udXNlZENhcGFiaWxpdHlUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0ganNvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jYXBhYmlsaXR5RG9tYWluID0ganNvbi5jYXBhYmlsaXR5RG9tYWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVnVsbmVyYWJpbGl0eSB7XHJcblxyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjb25maWRlbmNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvbUpzb24oanNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyb21Kc29uKGpzb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLnZ1bG5lcmFiaWxpdHlJZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLnZ1bG5lcmFiaWxpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAganNvbi5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmNvbmZpZGVuY2UgPSBqc29uLmNvbmZpZGVuY2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERvbWFpbiB7XHJcbiAgICBkb21haW5UeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIGFnc0VudGl0eUlkOiBzdHJpbmcgPSAnJztcclxuICAgIHNjY051bTogc3RyaW5nID0gJyc7XHJcbiAgICBvcmJpdFR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgY29uc3RlbGxhdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBpbnRsRGVzaWduYXRvcjogc3RyaW5nID0gJyc7XHJcbiAgICBsYXVuY2hTaXRlOiBzdHJpbmcgPSAnJztcclxuICAgIGxhdW5jaERhdGU6IHN0cmluZyA9ICcnO1xyXG4gICAgZGVjYXlEYXRlOiBzdHJpbmcgPSAnJztcclxuICAgIHRsZXM6IGFueVtdO1xyXG4gICAgd2F5cG9pbnRzOiBhbnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kb21haW5UeXBlID0ganNvbi5kb21haW5UeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmFnc0VudGl0eUlkID0ganNvbi5hZ3NFbnRpdHlJZDtcclxuICAgICAgICAgICAgdGhpcy5zY2NOdW0gPSBqc29uLnNjY051bTtcclxuICAgICAgICAgICAgdGhpcy5vcmJpdFR5cGUgPSBqc29uLm9yYml0VHlwZTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdGVsbGF0aW9uID0ganNvbi5jb25zdGVsbGF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmludGxEZXNpZ25hdG9yID0ganNvbi5pbnRsRGVzaWduYXRvcjtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2hTaXRlID0ganNvbi5sYXVuY2hTaXRlO1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaERhdGUgPSBqc29uLmxhdW5jaERhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjYXlEYXRlID0ganNvbi5kZWNheURhdGU7XHJcbiAgICAgICAgICAgIHRoaXMudGxlcyA9IGpzb24udGxlcztcclxuICAgICAgICAgICAgdGhpcy53YXlwb2ludHMgPSBqc29uLndheXBvaW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tYWluVHlwZSA9ICdTUEFDRSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENhcGFiaWxpdHkgfSBmcm9tICcuL2NhcGFiaWxpdHknO1xyXG5pbXBvcnQgeyBWdWxuZXJhYmlsaXR5IH0gZnJvbSAnLi92dWxuZXJhYmlsaXR5JztcclxuaW1wb3J0IHsgRG9tYWluIH0gZnJvbSAnLi9kb21haW4nO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJ5IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogc3RyaW5nW10pIHtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmZyb21Kc29uKGpzb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmcm9tSnNvbihqc29uOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGpzb25bMF07XHJcbiAgICAgICAgdGhpcy5uYW1lID0ganNvblsxXTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgb3duZXI6IHN0cmluZyA9ICcnO1xyXG4gICAgc2ljOiBzdHJpbmcgPSAnJztcclxuICAgIGNvdW50cnlDb2RlQWxwaGE1OiBzdHJpbmcgPSAnJztcclxuICAgIGFmZmlsaWF0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIHJnYjogc3RyaW5nID0gJyc7XHJcbiAgICBjb2xvck5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgcGFyZW50SWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNoaWxkcmVuSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZ3JvdXBJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBjYXBhYmlsaXRpZXM6IENhcGFiaWxpdHlbXSA9IFtdO1xyXG4gICAgdnVsbmVyYWJpbGl0aWVzOiBWdWxuZXJhYmlsaXR5W107XHJcblxyXG4gICAgZG9tYWluOlx0RG9tYWluO1xyXG4gICAgYWdzRW50aXR5SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVudGl0eVR5cGUgPSBqc29uLmVudGl0eVR5cGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0ganNvbi5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBqc29uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBqc29uLm93bmVyO1xyXG4gICAgICAgIHRoaXMuc2ljID0ganNvbi5zaWM7XHJcbiAgICAgICAgdGhpcy5jb3VudHJ5Q29kZUFscGhhNSA9IGpzb24uY291bnRyeUNvZGVBbHBoYTU7XHJcbiAgICAgICAgdGhpcy5hZmZpbGlhdGlvbiA9IGpzb24uYWZmaWxpYXRpb247XHJcbiAgICAgICAgdGhpcy5yZ2IgPSBqc29uLnJnYjtcclxuICAgICAgICB0aGlzLmNvbG9yTmFtZSA9IGpzb24uY29sb3JOYW1lO1xyXG4gICAgICAgIHRoaXMucGFyZW50SWQgPSBqc29uLnBhcmVudElkO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuSWRzID0ganNvbi5jaGlsZHJlbklkcyA/IGpzb24uY2hpbGRyZW5JZHMgOiBbXTtcclxuICAgICAgICB0aGlzLmdyb3VwSWRzID0ganNvbi5ncm91cElkcyA/IGpzb24uZ3JvdXBJZHMgOiBbXTtcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdGllcyA9IGpzb24uY2FwYWJpbGl0aWVzID8ganNvbi5jYXBhYmlsaXRpZXMubWFwKHggPT4gbmV3IENhcGFiaWxpdHkoeCkpIDogW107XHJcbiAgICAgICAgdGhpcy52dWxuZXJhYmlsaXRpZXMgPSBqc29uLnZ1bG5lcmFiaWxpdGllcyA/IGpzb24udnVsbmVyYWJpbGl0aWVzLm1hcCh4ID0+IG5ldyBWdWxuZXJhYmlsaXR5KHgpKSA6IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmRvbWFpbiA9IGpzb24uZG9tYWluID8gbmV3IERvbWFpbihqc29uLmRvbWFpbikgOiBuZXcgRG9tYWluKCk7XHJcbiAgICAgICAgdGhpcy5hZ3NFbnRpdHlJZCA9IGpzb24uYWdzRW50aXR5SWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWFsRW50aXR5IHtcclxuICAgIGVudGl0eUlkOiBzdHJpbmcgPSAnJztcclxuICAgIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgY291bnRyeU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZG9tYWluVHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBvd25lcjogc3RyaW5nID0gJyc7XHJcbiAgICBzY2M6IHN0cmluZyA9ICcnO1xyXG4gICAgYWZmaWxpYXRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG4gICAgY2FwYWJpbGl0eVR5cGVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVudGl0eUlkID0ganNvbi5hZ3NFbnRpdHlJZCA/IGpzb24uYWdzRW50aXR5SWQgOiAnJztcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLm5hbWUgPyBqc29uLm5hbWUgOiAnJztcclxuICAgICAgICB0aGlzLmNvdW50cnlOYW1lID0ganNvbi5jb3VudHJ5ID8ganNvbi5jb3VudHJ5IDogJyc7XHJcbiAgICAgICAgdGhpcy5kb21haW5UeXBlID0ganNvbi5kb21haW5UeXBlID8ganNvbi5kb21haW5UeXBlIDogJyc7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IGpzb24ub3duZXIgPyBqc29uLm93bmVyIDogJyc7XHJcbiAgICAgICAgdGhpcy5zY2MgPSBqc29uLnNjY051bSA/IGpzb24uc2NjTnVtLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICB0aGlzLmFmZmlsaWF0aW9uID0ganNvbi5hZmZpbGlhdGlvbiA/IGpzb24uYWZmaWxpYXRpb24gOiAnJztcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGpzb24uZ3JvdXBzID8ganNvbi5ncm91cHMubWFwKHggPT4gbmV3IEdyb3VwKHgpKSA6IFtdO1xyXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0eVR5cGVzID0ganNvbi5jYXBhYmlsaXR5VHlwZXMgPyBqc29uLmNhcGFiaWxpdHlUeXBlcyA6IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdXAge1xyXG4gICAgZ3JvdXBOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGVudGl0eUNvdW50OiBudW1iZXI7XHJcbiAgICBncm91cElkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAvL05FVyBNT0RFTCBERUZJTklUSU9OXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IGpzb24uZ3JvdXBOYW1lID8ganNvbi5ncm91cE5hbWUgOiBqc29uLm5hbWU7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlDb3VudCA9IGpzb24uZW50aXR5Q291bnQ7XHJcbiAgICAgICAgdGhpcy5ncm91cElkID0ganNvbi5ncm91cElkID8ganNvbi5ncm91cElkIDoganNvbi5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLm5hbWUgPyBqc29uLm5hbWUgOiBqc29uLmdyb3VwTmFtZTtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZCA/IGpzb24uaWQgOiBqc29uLmdyb3VwSWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEJhc2VFbnRpdHkgY2xhc3MgaXMgb25seSBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgaGVscGVyIGNsYXNzIGZvciBzZXJ2aWNlIGNhbGxzLlxyXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSB7XHJcbiAgICBhZ3NFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgZW50aXR5VHlwZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIG93bmVyOiBzdHJpbmc7XHJcbiAgICBzaWM6IHN0cmluZztcclxuICAgIGRvbWFpblR5cGU6IHN0cmluZztcclxuICAgIHBhcmVudElkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW50aXR5OiBFbnRpdHkpIHtcclxuICAgICAgICB0aGlzLmFnc0VudGl0eUlkID0gZW50aXR5LmFnc0VudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuZW50aXR5VHlwZSA9IGVudGl0eS5lbnRpdHlUeXBlID8gZW50aXR5LmVudGl0eVR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLm5hbWUgPSBlbnRpdHkubmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZW50aXR5LmRlc2NyaXB0aW9uID8gZW50aXR5LmRlc2NyaXB0aW9uIDogJyc7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IGVudGl0eS5vd25lciA/IGVudGl0eS5vd25lciA6ICcnO1xyXG4gICAgICAgIHRoaXMuc2ljID0gZW50aXR5LnNpYyA/IGVudGl0eS5zaWMgOiAnJztcclxuICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSBlbnRpdHkuZG9tYWluLmRvbWFpblR5cGUgPyBlbnRpdHkuZG9tYWluLmRvbWFpblR5cGUgOiAnJztcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge3Rocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsICBPYnNlcnZhYmxlICwgIFN1YmplY3QgLCAgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW50ZXJmYWNlIENhY2hlQ29udGVudCB7XHJcbiAgZXhwaXJ5OiBudW1iZXI7XHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhY2hlIFNlcnZpY2UgaXMgYW4gb2JzZXJ2YWJsZXMgYmFzZWQgaW4tbWVtb3J5IGNhY2hlIGltcGxlbWVudGF0aW9uXHJcbiAqIEtlZXBzIHRyYWNrIG9mIGluLWZsaWdodCBvYnNlcnZhYmxlcyBhbmQgc2V0cyBhIGRlZmF1bHQgZXhwaXJ5IGZvciBjYWNoZWQgdmFsdWVzXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY2FjaGU6IE1hcDxzdHJpbmcsIENhY2hlQ29udGVudD4gPSBuZXcgTWFwPHN0cmluZywgQ2FjaGVDb250ZW50PigpO1xyXG4gIHJlYWRvbmx5IERFRkFVTFRfTUFYX0FHRTogbnVtYmVyID0gMzAwMDAwO1xyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSB2YWx1ZSBmcm9tIGNhY2hlIGlmIHRoZSBrZXkgaXMgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgZ2V0KGtleTogc3RyaW5nLCBmYWxsYmFjaz86IE9ic2VydmFibGU8YW55PiwgbWF4QWdlPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHwgU3ViamVjdDxhbnk+IHtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNWYWxpZENhY2hlZFZhbHVlKGtleSkpIHtcclxuICAgICAgY29uc29sZS5sb2coYCVjR2V0dGluZyBmcm9tIGNhY2hlICR7a2V5fWAsICdjb2xvcjogZ3JlZW4nKTtcclxuICAgICAgcmV0dXJuIG9mKHRoaXMuY2FjaGUuZ2V0KGtleSkudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbWF4QWdlKSB7XHJcbiAgICAgIG1heEFnZSA9IHRoaXMuREVGQVVMVF9NQVhfQUdFO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmYWxsYmFjayAmJiBmYWxsYmFjayBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYCVjIENhbGxpbmcgYXBpIGZvciAke2tleX1gLCAnY29sb3I6IHB1cnBsZScpO1xyXG4gICAgICByZXR1cm4gZmFsbGJhY2sucGlwZSh0YXAoKHZhbHVlKSA9PiB7IHRoaXMuc2V0KGtleSwgdmFsdWUsIG1heEFnZSk7ICAvKmNvbnNvbGUubG9nKGAlYyBhZGRlZCAke2tleX0vJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSkuc3Vic3RyKDAsIDUwKX0gdG8gY2FjaGVgLCAnY29sb3I6IHB1cnBsZScpOyovIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcignUmVxdWVzdGVkIGtleSBpcyBub3QgYXZhaWxhYmxlIGluIENhY2hlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB2YWx1ZSB3aXRoIGtleSBpbiB0aGUgY2FjaGVcclxuICAgKiBOb3RpZmllcyBhbGwgb2JzZXJ2ZXJzIG9mIHRoZSBuZXcgdmFsdWVcclxuICAgKi9cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIG1heEFnZTogbnVtYmVyID0gdGhpcy5ERUZBVUxUX01BWF9BR0UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgeyB2YWx1ZTogdmFsdWUsIGV4cGlyeTogRGF0ZS5ub3coKSArIG1heEFnZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgYSBrZXkgZXhpc3RzIGluIGNhY2hlXHJcbiAgICovXHJcbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5oYXMoa2V5KTtcclxuICB9XHJcblxyXG4gICAvKipcclxuICAgKiBEZWxldGUgY2FjaGUgZW50cnlcclxuICAgKi9cclxuICBkZWxldGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGtleSBleGlzdHMgYW5kIGhhcyBub3QgZXhwaXJlZC5cclxuICAgKi9cclxuICBwcml2YXRlIGhhc1ZhbGlkQ2FjaGVkVmFsdWUoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhY2hlLmdldChrZXkpLmV4cGlyeSA8IERhdGUubm93KCkpIHtcclxuICAgICAgICB0aGlzLmNhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yLCBPYnNlcnZhYmxlLCBvZiwgZm9ya0pvaW4sIGVtcHR5IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRW50aXR5LCBQYXJ0aWFsRW50aXR5LCBCYXNlRW50aXR5LCBHcm91cCwgQ291bnRyeSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHknO1xyXG5pbXBvcnQgeyBDYXBhYmlsaXR5TWFwLCBPYnNlcnZhYmlsaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2NhcGFiaWxpdHknO1xyXG5pbXBvcnQgeyBWdWxuZXJhYmlsaXR5IH0gZnJvbSAnLi4vbW9kZWxzL3Z1bG5lcmFiaWxpdHknO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VydmljZSB7XHJcblxyXG4gIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBHRVRfRU5USVRZID0gJy9lbnRpdHkvJztcclxuICBHRVRfRU5USVRJRVNfQllfU1VCU1RSSU5HID0gJy9lbnRpdHkvZ2V0RW50aXRpZXNCeVN1YnN0cmluZy8nO1xyXG4gIEdFVF9BTExfQ0FQQUJJTElUWV9UWVBFUyA9ICcvZW50aXR5L2dldEFsbENhcGFiaWxpdHlUeXBlcyc7XHJcbiAgR0VUX0FMTF9DQVBBQklMSVRZX01BUFMgPSAnL2VudGl0eS9nZXRBbGxDYXBhYmlsaXR5TWFwcyc7XHJcbiAgR0VUX0FMTF9WVUxORVJBQklMSVRJRVMgPSAnL2VudGl0eS9nZXRBbGxWdWxuZXJhYmlsaXRpZXMnO1xyXG4gIEdFVF9BTExfQUZGSUxJQVRJT05TID0gJy9lbnRpdHkvZ2V0QWxsQWZmaWxpYXRpb25zJztcclxuICBHRVRfQUxMX0NPVU5UUklFUyA9ICcvZW50aXR5L2dldEFsbENvdW50cmllcyc7XHJcbiAgQ1JFQVRFX0dST1VQID0gJy9lbnRpdHkvY3JlYXRlR3JvdXBCeUdyb3VwTmFtZSc7XHJcbiAgR0VUX0FMTF9FTlRJVFlfR1JPVVBTID0gJy9lbnRpdHkvZ2V0QWxsRW50aXR5R3JvdXBzJztcclxuICBHRVRfRU5USVRJRVNfQllfR1JPVVAgPSAnL2VudGl0eS9nZXRFbnRpdGllc0J5R3JvdXAvJztcclxuXHJcbiAgR0VUX1BBUlRJQUxfRU5USVRJRVNfQllfR1JPVVAgPSAnL2VudGl0eS9nZXRQYXJ0aWFsRW50aXRpZXNCeUdyb3VwLyc7XHJcbiAgUEFSVElBTF9FTlRJVElFU19CWV9TVUJTVFJJTkdTID0gJy9lbnRpdHkvcGFydGlhbCc7XHJcblxyXG4gIFVQREFURV9FTlRJVFkgPSAnL2VudGl0eS8nO1xyXG4gIEFERF9PUl9VUERBVEVfQ0FQQUJJTElUWV9NQVAgPSAnL2VudGl0eS9hZGRPclVwZGF0ZUNhcGFiaWxpdHlNYXAnO1xyXG4gIEFERF9PUl9VUERBVEVfT0JTRVJWQUJJTElUWSA9ICcvZW50aXR5L2FkZE9yVXBkYXRlT2JzZXJ2YWJpbGl0eSc7XHJcblxyXG4gIERFTEVURV9FTlRJVElFUyA9ICcvZW50aXR5L2RlbGV0ZUVudGl0aWVzQnlJZHMnO1xyXG4gIERFTEVURV9DQVBBQklMSVRZX01BUFMgPSAnL2VudGl0eS9kZWxldGVDYXBhYmlsaXR5TWFwc0J5SWRzJztcclxuICBERUxFVEVfT0JTRVJWQUJJTElUWSA9ICcvZW50aXR5L2RlbGV0ZU9ic2VydmFiaWxpdHkvJztcclxuICBERUxFVEVfR1JPVVBTID0gJy9lbnRpdHkvZGVsZXRlR3JvdXBzQnlJZHMnO1xyXG5cclxuICBERUZBVUxUX1NFQVJDSF9UWVBFUyA9IFsnbmFtZScsICdncm91cCddO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgY2FjaGVTZXJ2aWNlOiBDYWNoZVNlcnZpY2UpIHsgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLy8gZ2V0UGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmcoc3Vic3RyaW5nOiBCeXRlU3RyaW5nKTogT2JzZXJ2YWJsZTxQYXJ0aWFsRW50aXR5W10+IHtcclxuICAvLyAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRQYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZygpJyk7XHJcbiAgLy8gICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9FTlRJVElFU19CWV9TVUJTVFJJTkcsIHN1YnN0cmluZyk7XHJcblxyXG4gIC8vICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8UGFydGlhbEVudGl0eVtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAvLyAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZW50aXR5IGxpc3QgYnkgc3Vic3RyaW5nYCwgcmVzKSksXHJcbiAgLy8gICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBQYXJ0aWFsRW50aXR5KGl0ZW0pKSlcclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbENhcGFiaWxpdHlUeXBlcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsQ2FwYWJpbGl0eVR5cGVzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9DQVBBQklMSVRZX1RZUEVTKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNhcGFiaWxpdHkgdHlwZSBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcCgocmVzKSA9PiB7IC8vIHNvcnQgdGhlIGxpc3RcclxuICAgICAgICByZXR1cm4gKHJlc1snc3RyaW5ncyddIGFzIHN0cmluZ1tdKS5zb3J0KChuMSwgbjIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBuMS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9lbnRpdHkvZ2V0QWxsQ2FwYWJpbGl0eU1hcHNcclxuICAgKiBnZXQgYSBsaXN0IG9mIENhcGFiaWxpdHlNYXBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsQ2FwYWJpbGl0eU1hcHModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxDYXBhYmlsaXR5TWFwW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxDYXBhYmlsaXR5TWFwcygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRBbGxDYXBhYmlsaXR5TWFwcycpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVDYXBhYmlsaXR5TWFwID0gKG4xOiBDYXBhYmlsaXR5TWFwLCBuMjogQ2FwYWJpbGl0eU1hcCkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEuY2FwYWJpbGl0eVR5cGUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLmNhcGFiaWxpdHlUeXBlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxDYXBhYmlsaXR5TWFwW10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBjYXBhYmlsaXR5IG1hcCBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBDYXBhYmlsaXR5TWFwKGl0ZW0pKS5zb3J0KGNvbXBhcmVDYXBhYmlsaXR5TWFwKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL2VudGl0eS9nZXRPYnNlcnZhYmlsaXRpZXNCeVVzZWRDYXBhYmlsaXR5TWFwSWRcclxuICAgKiBnZXQgYSBsaXN0IG9mIE9ic2VydmFiaWxpdHlcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0T2JzZXJ2YWJpbGl0aWVzQnlVc2VkQ2FwYWJpbGl0eU1hcElkKGNhcGFiaWxpdHlNYXBJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmlsaXR5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRPYnNlcnZhYmlsaXRpZXNCeVVzZWRDYXBhYmlsaXR5TWFwSWQoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9lbnRpdHkvZ2V0T2JzZXJ2YWJpbGl0aWVzQnlVc2VkQ2FwYWJpbGl0eU1hcElkLycsIGNhcGFiaWxpdHlNYXBJZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBjYXBhYmlsaXR5IG1hcCBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBPYnNlcnZhYmlsaXR5KGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbFZ1bG5lcmFiaWxpdGllcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPFZ1bG5lcmFiaWxpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbFZ1bG5lcmFiaWxpdGllcygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfVlVMTkVSQUJJTElUSUVTKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlVnVsbmVyYWJpbGl0eSA9IChuMTogVnVsbmVyYWJpbGl0eSwgbjI6IFZ1bG5lcmFiaWxpdHkpID0+IHtcclxuICAgICAgcmV0dXJuIG4xLm5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PFZ1bG5lcmFiaWxpdHlbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGFsbCB2dWxuZXJhYmlsaXRpZXNgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IFZ1bG5lcmFiaWxpdHkoaXRlbSkpLnNvcnQoY29tcGFyZVZ1bG5lcmFiaWxpdHkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0Q2FwYWJpbGl0aWVzQnlPYnNlcnZhYmxlVHlwZShvYnNlcnZhYmxlVHlwZTogc3RyaW5nLCB1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPENhcGFiaWxpdHlNYXBbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldENhcGFiaWxpdGllc0J5T2JzZXJ2YWJsZVR5cGUoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9lbnRpdHkvZ2V0Q2FwYWJpbGl0aWVzQnlPYnNlcnZlclR5cGUvJywgb2JzZXJ2YWJsZVR5cGUpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8Q2FwYWJpbGl0eU1hcFtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgY2FwYWJpbGl0aWVzIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IENhcGFiaWxpdHlNYXAoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsQWZmaWxpYXRpb25zKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxBZmZpbGlhdGlvbnMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfQUxMX0FGRklMSUFUSU9OUyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBhZmZpbGlhdGlvbiBsaXN0YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uYWZmaWxpYXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxDb3VudHJpZXModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxDb3VudHJpZXMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfQUxMX0NPVU5UUklFUyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZUNvdW50cnkgPSAobjE6IENvdW50cnksIG4yOiBDb3VudHJ5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5uYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxDb3VudHJ5W10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBjb3VudHJ5IGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMua2V5VmFsdWVQYWlycy5tYXAoaXRlbSA9PiBuZXcgQ291bnRyeShpdGVtKSkuc29ydChjb21wYXJlQ291bnRyeSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjcmVhdGVHcm91cChncm91cDogR3JvdXAsIGVudGl0eUlkczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5DUkVBVEVfR1JPVVAsIGVuY29kZVVSSUNvbXBvbmVudChncm91cC5ncm91cE5hbWUpKTtcclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG5cclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBzdHJpbmdzOiBlbnRpdHlJZHMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGNyZWF0ZWQgZ3JvdXBgLCByZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsRW50aXR5R3JvdXBzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8R3JvdXBbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbEVudGl0eUdyb3VwcygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfRU5USVRZX0dST1VQUyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZUdyb3VwID0gKG4xOiBHcm91cCwgbjI6IEdyb3VwKSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5ncm91cE5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLmdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8R3JvdXBbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGFsbCBncm91cHNgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMua2V5VmFsdWVQYWlycy5tYXAoaXRlbSA9PiBuZXcgR3JvdXAoaXRlbSkpLnNvcnQoY29tcGFyZUdyb3VwKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEVudGl0eShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbnRpdHk+IHtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0VOVElUWSwgaWQpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBlbnRpdHlgLCByZXMpKSxcclxuICAgICAgbWFwKHggPT4gbmV3IEVudGl0eSh4KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEVudGl0eUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RW50aXR5PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0RW50aXR5QnlJZCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRFbnRpdHlCeUlkJywgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVudGl0eT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZW50aXR5YCwgcmVzKSksXHJcbiAgICAgIG1hcCh4ID0+IG5ldyBFbnRpdHkoeCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBhZGRFbnRpdHkoZW50aXR5OiBFbnRpdHkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmFkZEVudGl0eSgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLlVQREFURV9FTlRJVFkpO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZW50aXR5LCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIGVudGl0eSAke2VudGl0eS5uYW1lfWAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICB1cGRhdGVFbnRpdHkoZW50aXR5OiBFbnRpdHkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLnVwZGF0ZUVudGl0eSgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLlVQREFURV9FTlRJVFksIGVudGl0eS5hZ3NFbnRpdHlJZCk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGVudGl0eSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBlbnRpdHkgJHtlbnRpdHkubmFtZX1gLCByZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgYWRkQ2FwYWJpbGl0eU1hcChjYXBhYmlsaXR5TWFwOiBDYXBhYmlsaXR5TWFwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5hZGRDYXBhYmlsaXR5TWFwJyk7XHJcbiAgICByZXR1cm4gdGhpcy51cGRhdGVDYXBhYmlsaXR5TWFwKGNhcGFiaWxpdHlNYXApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICB1cGRhdGVDYXBhYmlsaXR5TWFwKGNhcGFiaWxpdHlNYXA6IENhcGFiaWxpdHlNYXApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLnVwZGF0ZUNhcGFiaWxpdHlNYXAoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5BRERfT1JfVVBEQVRFX0NBUEFCSUxJVFlfTUFQKTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGNhcGFiaWxpdHlNYXAsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgY2FwYWJpbGl0eSBtYXAgJHtjYXBhYmlsaXR5TWFwLmNhcGFiaWxpdHlUeXBlfWAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRQYXJ0aWFsRW50aXRpZXNCeUdyb3VwKGdyb3VwOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhcnRpYWxFbnRpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldFBhcnRpYWxFbnRpdGllc0J5R3JvdXAoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfUEFSVElBTF9FTlRJVElFU19CWV9HUk9VUCwgZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwKSk7XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVQYXJ0aWFsRW50aXR5ID0gKG4xOiBQYXJ0aWFsRW50aXR5LCBuMjogUGFydGlhbEVudGl0eSkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEubmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFydGlhbEVudGl0eVtdPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBwYXJ0aWFsIGVudGl0eSBsaXN0IGJ5IGdyb3VwYCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBQYXJ0aWFsRW50aXR5KGl0ZW0pKS5zb3J0KGNvbXBhcmVQYXJ0aWFsRW50aXR5KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHBhcnRpYWxFbnRpdGllc0J5U3Vic3RyaW5ncyhzdHJpbmdzOiBzdHJpbmdbXSwgc2VhcmNoVHlwZXM6IHN0cmluZ1tdID0gdGhpcy5ERUZBVUxUX1NFQVJDSF9UWVBFUyk6IE9ic2VydmFibGU8UGFydGlhbEVudGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UucGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmdzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuUEFSVElBTF9FTlRJVElFU19CWV9TVUJTVFJJTkdTKTtcclxuXHJcbiAgICBsZXQgc2VhcmNoUGFybXMgPSB7XHJcbiAgICAgIHNlYXJjaFR5cGVzOiBzZWFyY2hUeXBlcyxcclxuICAgICAgc3RyaW5nczogc3RyaW5ncyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVQYXJ0aWFsRW50aXR5ID0gKG4xOiBQYXJ0aWFsRW50aXR5LCBuMjogUGFydGlhbEVudGl0eSkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEubmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBzZWFyY2hQYXJtcywgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIHBhcnRpYWwgZW50aXR5IGxpc3QgYnkgc3Vic3RyaW5nc2AsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgUGFydGlhbEVudGl0eShpdGVtKSkuc29ydChjb21wYXJlUGFydGlhbEVudGl0eSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVFbnRpdGllcyhlbnRpdHlJZHM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZGVsZXRlRW50aXRpZXMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuREVMRVRFX0VOVElUSUVTKTtcclxuXHJcbiAgICAvLyBOT1RFOiAgSW4gb3JkZXIgdG8gc3BlY2lmeSB0aGUgcmV0dXJuIHR5cGUgb2YgJ3RleHQnLCB0aGUgZ2VuZXJpY1xyXG4gICAgLy8gICAgICAgIHNpZ25hdHVyZSBoYWQgdG8gYmUgcmVtb3ZlZC5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnIGFzICd0ZXh0JyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHN0cmluZ3M6IGVudGl0eUlkc1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgZW50aXRpZXMgc3VjY2Vzc2Z1bGx5YCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVDYXBhYmlsaXRpZXMoY2FwYWJpbGl0eUlkczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5kZWxldGVDYXBhYmlsaXRpZXMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuREVMRVRFX0NBUEFCSUxJVFlfTUFQUyk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcgYXMgJ3RleHQnLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogY2FwYWJpbGl0eUlkc1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIGNhcGFiaWxpdGllcyBzdWNjZXNzZnVsbHlgKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZE9ic2VydmFiaWxpdGllcyhvYnNlcnZhYmlsaXRpZXM6IE9ic2VydmFiaWxpdHlbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoIW9ic2VydmFiaWxpdGllcyB8fCBvYnNlcnZhYmlsaXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBvZignYWRkT2JzZXJ2YWJpbGl0aWVzIHJlY2VpdmVkIGVtcHR5IGxpc3QuICBDb25zaWRlciBzdWNjZXNzZnVsLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhZGRSZXF1ZXN0czogT2JzZXJ2YWJsZTxzdHJpbmc+W10gPSBbXTtcclxuICAgIG9ic2VydmFiaWxpdGllcy5mb3JFYWNoKG8gPT4ge1xyXG4gICAgICBhZGRSZXF1ZXN0cy5wdXNoKHRoaXMuYWRkT2JzZXJ2YWJpbGl0eShvKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ya0pvaW4oLi4uYWRkUmVxdWVzdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBhZGRPYnNlcnZhYmlsaXR5KG9ic2VydmFiaWxpdHk6IE9ic2VydmFiaWxpdHkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmFkZE9ic2VydmFiaWxpdHknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuQUREX09SX1VQREFURV9PQlNFUlZBQklMSVRZKTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxzdHJpbmc+KHVybCwgb2JzZXJ2YWJpbGl0eSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgYWRkZWQgb2JzZXJ2YWJpbGl0eSBzdWNjZXNzZnVsbHlgLCByZXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlT2JzZXJ2YWJpbGl0aWVzKG9ic2VydmFiaWxpdGllczogT2JzZXJ2YWJpbGl0eVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmICghb2JzZXJ2YWJpbGl0aWVzIHx8IG9ic2VydmFiaWxpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG9mKCdkZWxldGVPYnNlcnZhYmlsaXRpZXMgcmVjZWl2ZWQgZW1wdHkgbGlzdC4gIENvbnNpZGVyIHN1Y2Nlc3NmdWwuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlbGV0ZVJlcXVlc3RzOiBPYnNlcnZhYmxlPHN0cmluZz5bXSA9IFtdO1xyXG4gICAgb2JzZXJ2YWJpbGl0aWVzLmZvckVhY2gobyA9PiB7XHJcbiAgICAgIGRlbGV0ZVJlcXVlc3RzLnB1c2godGhpcy5kZWxldGVPYnNlcnZhYmlsaXR5KG8pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JrSm9pbiguLi5kZWxldGVSZXF1ZXN0cyk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZU9ic2VydmFiaWxpdHkob2JzZXJ2YWJpbGl0eTogT2JzZXJ2YWJpbGl0eSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZGVsZXRlT2JzZXJ2YWJpbGl0eScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5ERUxFVEVfT0JTRVJWQUJJTElUWSwgb2JzZXJ2YWJpbGl0eS5vYnNlcnZpbmdDYXBhYmlsaXR5TWFwSWQsIG9ic2VydmFiaWxpdHkudXNlZENhcGFiaWxpdHlNYXBJZCk7XHJcblxyXG4gICAgLy8gTk9URTogIEluIG9yZGVyIHRvIHNwZWNpZnkgdGhlIHJldHVybiB0eXBlIG9mICd0ZXh0JywgdGhlIGdlbmVyaWNcclxuICAgIC8vICAgICAgICBzaWduYXR1cmUgaGFkIHRvIGJlIHJlbW92ZWQuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyBhcyAndGV4dCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgb2JzZXJ2YWJpbGl0eSBzdWNjZXNzZnVsbHlgKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZUdyb3Vwcyhncm91cElkczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmRlbGV0ZUdyb3VwcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5ERUxFVEVfR1JPVVBTKTtcclxuXHJcbiAgICAvLyBOT1RFOiAgSW4gb3JkZXIgdG8gc3BlY2lmeSB0aGUgcmV0dXJuIHR5cGUgb2YgJ3RleHQnLCB0aGUgZ2VuZXJpY1xyXG4gICAgLy8gICAgICAgIHNpZ25hdHVyZSBoYWQgdG8gYmUgcmVtb3ZlZC5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnIGFzICd0ZXh0JyxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHN0cmluZ3M6IGdyb3VwSWRzXHJcbiAgICAgIH0sXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBkZWxldGVkIGdyb3VwcyBzdWNjZXNzZnVsbHlgKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXRocm93IGVycm9yIHNvIGNsaWVudCBjYW4gcmVhY3QuXHJcbiAgcHJpdmF0ZSByZXRocm93RXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIC8vIE5PVEU6ICBOb3QgYW4gZXJyb3IuXHJcbiAgICBpZiAoZXJyLnN0YXR1cyA9PT0gMjAwIHx8IGVyci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgICByZXR1cm4gb2YoZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICB9XHJcblxyXG4gIGxvYWRFbnRpdGllcyhncm91cDogc3RyaW5nKTogT2JzZXJ2YWJsZTxCYXNlRW50aXR5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5sb2FkRW50aXRpZXMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldFBhcnRpYWxFbnRpdGllc0J5R3JvdXAvJyArIGVuY29kZVVSSUNvbXBvbmVudChncm91cCkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJhc2VFbnRpdHlbXT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBOZ0NvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBlbXB0eSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGFydGlhbEVudGl0eSwgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXR5JztcclxuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2VudGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvbic7XHJcblxyXG5jb25zdCBJTlZBTElEX0VOVElUWTogUGFydGlhbEVudGl0eSA9IG5ldyBQYXJ0aWFsRW50aXR5KHtcclxuICBuYW1lOiAnJyxcclxuICBhZ3NFbnRpdHlJZDogJycsXHJcbn0pO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1lbnRpdHktc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VudGl0eS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XHJcbiAgLy8gQE91dHB1dCgpIGVudGl0eVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYXJ0aWFsRW50aXR5PigpO1xyXG5cclxuICBvbkNoYW5nZTogRnVuY3Rpb247XHJcbiAgb25Ub3VjaGVkOiBGdW5jdGlvbjtcclxuXHJcbiAgZW50aXR5U2VsZWN0aW9uRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgaW5wdXRDdHJsOiBGb3JtQ29udHJvbDtcclxuICBvcHRpb25zQ3RybDogRm9ybUNvbnRyb2w7XHJcbiAgZW50aXRpZXM6IFBhcnRpYWxFbnRpdHlbXSA9IFtdO1xyXG4gIGhhc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaW5jb21pbmdFbnRpdHk6IFBhcnRpYWxFbnRpdHkgPSBJTlZBTElEX0VOVElUWTtcclxuICBzZWxlY3RlZEVudGl0eTogUGFydGlhbEVudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gIGlzU2VhcmNoaW5nID0gZmFsc2U7XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG1ldGhvZHNcclxuICB3cml0ZVZhbHVlKHZhbHVlKSB7IHRoaXMuc2VsZWN0ZWRFbnRpdHkuZW50aXR5SWQgPSB2YWx1ZTsgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHsgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7IH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmlucHV0Q3RybCA9IG5ldyBGb3JtQ29udHJvbChcclxuICAgICAgeyB2YWx1ZTogJycsIGRpc2FibGVkOiBmYWxzZSB9LCBcclxuICAgICAgeyAvKiB2YWxpZGF0b3JzOiBWYWxpZGF0b3JzLnJlcXVpcmVkICovfVxyXG4gICAgKTtcclxuICAgIHRoaXMub3B0aW9uc0N0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuXHJcbiAgICB0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICBpbnB1dEN0cmw6IHRoaXMuaW5wdXRDdHJsLFxyXG4gICAgICBvcHRpb25zQ3RybDogdGhpcy5vcHRpb25zQ3RybCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5pbnB1dEN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxyXG4gICAgICBzd2l0Y2hNYXAoKHRlcm0pID0+IHtcclxuICAgICAgICBsZXQgdGVybVR5cGUgPSB0eXBlb2YgdGVybTtcclxuICAgICAgICBpZiAoIXRlcm0gfHwgKHRlcm1UeXBlLmxvY2FsZUNvbXBhcmUoJ3N0cmluZycpICE9PSAwKSB8fCAodGVybS5sZW5ndGggPCAyKSkge1xyXG4gICAgICAgICAgY29tcG9uZW50LmVudGl0aWVzID0gW107XHJcbiAgICAgICAgICBjb21wb25lbnQuaXNTZWFyY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybiBlbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbXBvbmVudC5pc1NlYXJjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICBjb21wb25lbnQuZW50aXRpZXMgPSBbXTtcclxuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuZW50aXR5U2VydmljZS5wYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZ3ModGVybS5zcGxpdCgnICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9KSlcclxuICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb21wb25lbnQuaXNTZWFyY2hpbmcgPSBmYWxzZTtcclxuICAgICAgY29tcG9uZW50LmVudGl0aWVzID0gcmVzdWx0O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuaW5jb21pbmdFbnRpdHkgPSBuZXcgUGFydGlhbEVudGl0eSh7XHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIGFnc0VudGl0eUlkOiB0aGlzLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmluY29taW5nRW50aXR5ID0gSU5WQUxJRF9FTlRJVFk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhcnQgd2l0aCBpbmNvbWluZyBlcXVhbCB0byBzZWxlY3RlZFxyXG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IHRoaXMuaW5jb21pbmdFbnRpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuZW50aXR5U2VsZWN0aW9uRm9ybUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuZW50aXR5U2VsZWN0aW9uRm9ybUdyb3VwLnJlc2V0KHtcclxuICAgICAgICBpbnB1dEN0cmw6IHRoaXMuaW5jb21pbmdFbnRpdHksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUVudGl0eUFzKGVudGl0eT86IFBhcnRpYWxFbnRpdHkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKGVudGl0eSAmJiBlbnRpdHkubmFtZSkge1xyXG4gICAgICByZXR1cm4gZW50aXR5Lm5hbWUudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVuc3VyZSBubyBsaXN0IHBvcHMgdXAgd2hlbiBlbnRlcmluZyBjb250cm9sLlxyXG4gIG9uRm9jdXMoZXZlbnQpIHtcclxuICAgIHRoaXMuZW50aXRpZXMgPSBbXTtcclxuICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGV2ZW50KSB7XHJcbiAgICB0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cC5yZXNldCh7XHJcbiAgICAgIGlucHV0Q3RybDogdGhpcy5zZWxlY3RlZEVudGl0eSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWQoZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBldmVudC5zb3VyY2UudmFsdWU7XHJcbiAgICB0aGlzLm5hbWUgPSB0aGlzLnNlbGVjdGVkRW50aXR5Lm5hbWU7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5zZWxlY3RlZEVudGl0eS5lbnRpdHlJZDtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRFbnRpdHkuZW50aXR5SWQpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gSU5WQUxJRF9FTlRJVFk7XHJcbiAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgIHRoaXMuaWQgPSAnJztcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlKCcnKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEVudGl0eSAhPT0gdGhpcy5pbmNvbWluZ0VudGl0eSkge1xyXG4gICAgICB0aGlzLmluY29taW5nRW50aXR5ID0gSU5WQUxJRF9FTlRJVFk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVudGl0aWVzID0gW107XHJcbiAgICB0aGlzLmVudGl0eVNlbGVjdGlvbkZvcm1Hcm91cC5nZXQoJ2lucHV0Q3RybCcpLnNldFZhbHVlKCcnLCB7ZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoZW50aXR5OiBQYXJ0aWFsRW50aXR5KSB7XHJcbiAgICBsZXQgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIHRpdGxlICs9ICdTQ0M6ICAnICsgKGVudGl0eS5zY2MgPyBlbnRpdHkuc2NjLnRyaW0oKSA6ICcnKTtcclxuICAgIHRpdGxlICs9ICdcXG5Db3VudHJ5OiAgJyArIChlbnRpdHkuY291bnRyeU5hbWUgPyBlbnRpdHkuY291bnRyeU5hbWUudHJpbSgpIDogJycpO1xyXG4gICAgdGl0bGUgKz0gJ1xcbkFmZmlsaWF0aW9uOiAgJyArIChlbnRpdHkuYWZmaWxpYXRpb24gPyBlbnRpdHkuYWZmaWxpYXRpb24udHJpbSgpIDogJycpO1xyXG5cclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFJlc3VsdHMoZW50aXR5OiBQYXJ0aWFsRW50aXR5LCBzZWFyY2hUZXJtOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHRlcm1zID0gc2VhcmNoVGVybS5zcGxpdCgnICcpO1xyXG4gICAgcmVzdWx0ICs9IGVudGl0eS5uYW1lLnRyaW0oKTtcclxuXHJcbiAgICAvLyBBZGQgU0NDIGlmIHByZXNlbnRcclxuICAgIGlmIChlbnRpdHkuc2NjKSB7XHJcbiAgICAgIHJlc3VsdCArPSAnLCAnICsgZW50aXR5LnNjYztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcmVBbGxUZXJtc0ZvdW5kKHRlcm1zVG9TZWFyY2hGb3IsIHN0cmluZ1RvU2VhcmNoKSB7XHJcbiAgICAgIGxldCBmb3VuZCA9IHRydWU7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVybXNUb1NlYXJjaEZvci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJpbmdUb1NlYXJjaC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGVybXNUb1NlYXJjaEZvcltpXS50b1VwcGVyQ2FzZSgpKSA8IDApIHtcclxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbWF0Y2hpbmcgZ3JvdXAgbmFtZShzKVxyXG4gICAgbGV0IGdyb3VwVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgZmlyc3RHcm91cDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBlbnRpdHkuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG5cclxuICAgICAgaWYgKGFyZUFsbFRlcm1zRm91bmQodGVybXMsIGdyb3VwLmdyb3VwTmFtZSkpIHtcclxuICAgICAgICBpZiAoIWZpcnN0R3JvdXApIHtcclxuICAgICAgICAgIGdyb3VwVGV4dCArPSAnLCAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncm91cFRleHQgKz0gZ3JvdXAuZ3JvdXBOYW1lO1xyXG4gICAgICAgIGZpcnN0R3JvdXAgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGdyb3VwVGV4dCkge1xyXG4gICAgICByZXN1bHQgKz0gJyAoJyArIGdyb3VwVGV4dCArICcpJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iLCIvKiBcclxuICogIERpc3BsYXlzIGEgbGlzdCBvZiBpdGVtcyBhcyBBbmd1bGFyIE1hdGVyaWFsIGNoaXBzLlxyXG4gKiAgLSBhIGJ1dHRvbiBpcyBwcmVzc2VkIHRvIGRpc3BsYXkgbGlzdCBvZiBzZWxlY3RhYmxlIGl0ZW1zXHJcbiAqICAtIFwib25DaGFuZ2VcIiBpcyBmaXJlZCB1cG9uIHNlbGVjdGlvbiBmcm9tIGxpc3QgKGVpdGhlciBieSBtb3VzZSBvciA8ZW50ZXI+KVxyXG4gKiAgLSBlYWNoIGNoaXAgaGFzIGFuIGVtYmVkZGVkIGljb24gd2hpY2ggcmVtb3ZlcyBjaGlwIGZyb20gbGlzdFxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItY2hpcC1kaXNwbGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGlwLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpcERpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAvLyBMYWJlbCB0byBiZSBkaXNwbGF5ZWQgYXMgcGxhY2Vob2xkZXJcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgLy8gTGlzdCBvZiBpdGVtcyBmcm9tIHdoaWNoIHRvIGNob29zZS5cclxuICAvLyBrZXkgPSBkaXNwbGF5ZWQgdmFsdWUgKGUuZy4gZ3JvdXAgbmFtZSlcclxuICAvLyB2YWx1ZSA9IGFzIGEgcnVsZSwgdGhlIGludGVybmFsIEdVSUQgKGUuZy4gZ3JvdXAgSUQpXHJcbiAgQElucHV0KCkgc2VsZWN0YWJsZUl0ZW1zOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXTtcclxuICAvLyBDYW4gYW4gaXRlbSBiZSBhZGRlZCBtb3JlIHRoYW4gb25jZT9cclxuICBASW5wdXQoKSBhbGxvd0R1cGxpY2F0ZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8vIElzIGNvbnRyb2wgZGlzYWJsZWQ/XHJcbiAgQElucHV0KCkgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gUHJvcGVydHkgbmFtZSBvbiB3aGljaCB0byBiYXNlIGVxdWFsaXR5XHJcbiAgQElucHV0KCkgZXF1YWxpdHlQcm9wZXJ0eTogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgLy8gXCJzZWxlY3RlZEl0ZW1zXCIgaXMgdXBkYXRlZCBieSBzZXR0aW5nIHZhbHVlIG9mIGZvcm0gY29udHJvbCBhbmQgbm90IHZpYSBpbnB1dCBwYXJtc1xyXG4gIHNlbGVjdGVkSXRlbXM6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xyXG4gIC8vIFwicmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zXCIgaXMgZGVwZW5kZW50IG9uIHZhbHVlIG9mIFwiYWxsb3dEdXBsaWNhdGVzXCJcclxuICByZW1haW5pbmdTZWxlY3RhYmxlSXRlbXM6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xyXG5cclxuICBvbkNoYW5nZTogRnVuY3Rpb247XHJcbiAgb25Ub3VjaGVkOiBGdW5jdGlvbjtcclxuXHJcbiAgLy9cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBtZXRob2RzXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W10pIHsgXHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB2YWx1ZTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxyXG4gIC8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICBcclxuICAgICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHsgXHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICAvLyBHZXRzIGZpcmVkIG9uIGNoYW5nZXMgdG8gYWxsIGlucHV0cywgYnV0IG9ubHkgbmVlZCB0byB0YWtlIHNvbWUgYWN0aW9uIHdoZW5cclxuICAvLyBzZWxlY3RhYmxlIGl0ZW1zIGdldCBjaGFuZ2VkLlxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGFibGVJdGVtcykge1xyXG4gICAgICAvLyBJZiByZW1haW5pbmcgaXRlbXMgbGlzdCBoYXNuJ3QgeWV0IGJlZW4gcG9wdWxhdGVkLCBkbyB0aGF0IG5vdy5cclxuICAgICAgaWYgKCF0aGlzLnJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcykge1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zID0gdGhpcy5zZWxlY3RhYmxlSXRlbXMuc2xpY2UoMCwgdGhpcy5zZWxlY3RhYmxlSXRlbXMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRldGVybWluZVJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSBzZWxlY3RlZCBmcm9tIGxpc3RcclxuICBvblNlbGVjdGVkKGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55Pikge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB0aGlzLmRldGVybWluZVJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcygpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSByZW1vdmVkIGZyb20gZGlzcGxheWVkIGNoaXBzXHJcbiAgb25SZW1vdmVkKGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55Pikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZXRlcm1pbmVSZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMoKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIElmIFwiQWxsb3cgZHVwbGljYXRlc1wiIGZsYWcgaXMgXCJ0cnVlXCIsIGtlZXAgc2VsZWN0YWJsZSBsaXN0IHRoZSBzYW1lLlxyXG4gIC8vIElmIFwiQWxsb3cgZHVwbGljYXRlc1wiIGZsYWcgaXMgXCJmYWxzZVwiLCByZW1vdmUgc2VsZWN0ZWQgaXRlbXMgZnJvbSBzZWxlY3RhYmxlIGxpc3QuXHJcbiAgZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMgfHwgIXRoaXMuc2VsZWN0YWJsZUl0ZW1zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuYWxsb3dEdXBsaWNhdGVzKSB7XHJcbiAgICAgIHRoaXMucmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zID0gdGhpcy5zZWxlY3RhYmxlSXRlbXMuZmlsdGVyKHggPT4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5maW5kSXRlbUluTGlzdCh4LCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNlYXJjaCBmb3IgZXF1YWxpdHkgb2YgaXRlbXMgYnkgY29tcGFyaW5nIHZhbHVlIGluIEtleVZhbHVlIHBhaXJcclxuICBmaW5kSXRlbUluTGlzdChpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgaWYgKCFpdGVtIHx8IGxpc3QubGVuZ3RoID09PSAwKSAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1WYWx1ZVR5cGUgPSB0eXBlb2YgaXRlbS52YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWVUeXBlID0gdHlwZW9mIGxpc3RbMF0udmFsdWU7XHJcbiAgICBpZiAoaXRlbVZhbHVlVHlwZSAhPT0gbGlzdFZhbHVlVHlwZSkge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2Uud2FybignQ2hpcCBkaXNwbGF5IGNvbXBhcmluZyB1bmVxdWFsIHR5cGVzLiAgRW5zdXJlIHNlbGVjdGFibGUgaXRlbXMgYW5kIHNlbGVjdGVkIGl0ZW1zIGFyZSBvZiBzYW1lIHR5cGUuJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbVZhbHVlVHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZU51bWJlcnMoaXRlbSwgbGlzdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpdGVtVmFsdWVUeXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlU3RyaW5ncyhpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGl0ZW1WYWx1ZVR5cGUgPT09ICdvYmplY3QnICYmIHRoaXMuZXF1YWxpdHlQcm9wZXJ0eSAmJlxyXG4gICAgICBpdGVtLnZhbHVlLmhhc093blByb3BlcnR5KHRoaXMuZXF1YWxpdHlQcm9wZXJ0eSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZU9iamVjdHMoaXRlbSwgbGlzdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcGFyZU51bWJlcnMoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+LCBsaXN0OiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGluZGV4ID0gbGlzdC5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xyXG4gICAgICBpZiAobGlzdFtpbmRleF0udmFsdWUgPT09IGl0ZW0udmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZVN0cmluZ3MoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+LCBsaXN0OiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGluZGV4ID0gbGlzdC5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xyXG4gICAgICBpZiAobGlzdFtpbmRleF0udmFsdWUubG9jYWxlQ29tcGFyZShpdGVtLnZhbHVlKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlT2JqZWN0cyhpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xyXG4gICAgICBpZiAobGlzdFtpbmRleF0udmFsdWVbdGhpcy5lcXVhbGl0eVByb3BlcnR5XSA9PT0gaXRlbS52YWx1ZVt0aGlzLmVxdWFsaXR5UHJvcGVydHldKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiLypcclxuVGhpcyBjdXN0b20gY29tcG9uZW50IGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIEFuZ3VsYXIgRGF0ZSBUaW1lIFBpY2tlciAobmctcGljay1kYXRldGltZSlcclxuaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbmctcGljay1kYXRldGltZVxyXG5odHRwczovL2RhbmllbHlrcGFuLmdpdGh1Yi5pby9kYXRlLXRpbWUtcGlja2VyL1xyXG5cclxuVGhpcyBjb250cm9sIE9OTFkgcHJvZHVjZXMgVVRDIGRhdGUvdGltZXNcclxuXHJcblRoZXJlIGlzIGEgbGluZSBvZiBjb2RlIGluIG9uQ2hhbmdlcygpIG1ldGhvZCB0byBmb3JjZSB0aGUgdmFsdWUgdG8gYSBVVEMgZGF0ZS90aW1lLlxyXG5UaGUgbmctcGljay1kYXRldGltZSBjb250cm9sICg8b3dsLWRhdGUtdGltZT4pIGluc2lzdHMgb24gYXBwZW5kaW5nIHRoZSBsb2NhbCB0aW1lem9uZSBldmVyeSB0aW1lXHJcbnlvdSBjbGljayBpdC4gU28gJ21vbWVudC50b09iamVjdCgpJyBpcyB1dGlsaXplZCBiZWNhdXNlIGl0IHJldHVybnMgdGhlIHBhcnRzIG9mIHRoZVxyXG5kYXRlIHdpdGhvdXQgYSB0aW1lem9uZS4gVGhpcyBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGEgbmV3IG1vbWVudCBvYmplY3Qgd2l0aG91dCBhXHJcbmxvY2FsIHRpbWV6b25lLiBJdCdzIGhhY2t5LCBidXQgaXQgZ2V0cyB0aGUgam9iIGRvbmUuIE1heWJlIHNvbWVkYXkgQW5ndWxhciBNYXRlcmlhbFxyXG53aWxsIGNyZWF0ZSBhIGRhdGV0aW1lIHBpY2tlciB0aGF0IGNhbiBwcm9wZXJseSBoYW5kbGUgVVRDLiA6XihcclxuXHJcbm1vbWVudC50b09iamVjdCgpID0ge1xyXG4gICAgeWVhcnM6IDIwMTVcclxuICAgIG1vbnRoczogNlxyXG4gICAgZGF0ZTogMjYsXHJcbiAgICBob3VyczogMSxcclxuICAgIG1pbnV0ZXM6IDUzLFxyXG4gICAgc2Vjb25kczogMTQsXHJcbiAgICBtaWxsaXNlY29uZHM6IDYwMFxyXG59XHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLCBmb3J3YXJkUmVmLCBPcHRpb25hbCwgU2VsZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC1lczYnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUFkYXB0ZXIsIE9XTF9EQVRFX1RJTUVfRk9STUFUUywgT1dMX0RBVEVfVElNRV9MT0NBTEUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuaW1wb3J0IHsgTW9tZW50RGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnbmctcGljay1kYXRldGltZS1tb21lbnQnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4uLy4uL290aGVyL3BpcGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNWV9DVVNUT01fRk9STUFUUyA9IHtcclxuICBwYXJzZUlucHV0OiAnWVlZWS1NTS1ERCBISDptbTpzcycsXHJcbiAgZnVsbFBpY2tlcklucHV0OiBEYXRlRm9ybWF0UGlwZS5mb3JtYXQsXHJcbiAgZGF0ZVBpY2tlcklucHV0OiAnWVlZWS1NTScsXHJcbiAgdGltZVBpY2tlcklucHV0OiAnaGg6bW06c3MnLFxyXG4gIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxyXG4gIGRhdGVBMTF5TGFiZWw6ICdNTU0gWVlZWScsXHJcbiAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NIFlZWVknLFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLWRhdGUtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSxcclxuICB7IHByb3ZpZGU6IERhdGVUaW1lQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVUaW1lQWRhcHRlciwgZGVwczogW09XTF9EQVRFX1RJTUVfTE9DQUxFXSB9LFxyXG4gIHsgcHJvdmlkZTogT1dMX0RBVEVfVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfQ1VTVE9NX0ZPUk1BVFMgfVxyXG4gIF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxzdHJpbmc+LCBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxvYXRpbmcnKSBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHsgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTsgfVxyXG4gIEBIb3N0QmluZGluZygnaWQnKSBpZCA9IGBkYXRlLXRpbWUtcGlja2VyLSR7RGF0ZVRpbWVQaWNrZXJDb21wb25lbnQubmV4dElkKyt9YDtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5ID0gJyc7XHJcblxyXG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIE1hdEZvcm1GaWVsZENvbnRyb2xcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXHJcbiAgc3RhdGljIG5leHRJZCA9IDA7XHJcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xyXG4gIGNvbnRyb2xUeXBlID0gJ2RhdGUtdGltZS1waWNrZXInO1xyXG5cclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBfbW9tZW50VmFsdWU6IG1vbWVudC5Nb21lbnQgPSBtb21lbnQoKTsgLy8gdXNhIGEgTW9tZW50IG9iamVjdCBpbnRlcm5hbGx5IHRvIHN0b3JlIHRoZSBkYXRlIHZhbHVlXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG4gIHdyaXRlVmFsdWUoaW5WYWx1ZTogc3RyaW5nKSB7IFxyXG4gICAgY29uc29sZS5sb2coYGRhdGUtdGltZS1waWNrZXIgaW5wdXQgc3RyaW5nID0gJHtpblZhbHVlfWApO1xyXG4gICAgdGhpcy52YWx1ZSA9IGluVmFsdWU7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgeyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDsgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbCBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KClcclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XHJcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gJ3ZhbHVlJztcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cclxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vbWVudFZhbHVlLnV0YygpLnRvSVNPU3RyaW5nKCk7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZShuZXdWYWw6IHN0cmluZyB8IG51bGwpIHtcclxuICAgIHRoaXMuX21vbWVudFZhbHVlID0gbW9tZW50LnV0YyhuZXdWYWwpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVtcHR5KCkge1xyXG4gICAgcmV0dXJuICF0aGlzLl9tb21lbnRWYWx1ZTtcclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm06IEZvY3VzTW9uaXRvciwgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XHJcblxyXG4gICAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbCBpbnRlcmZhY2VcclxuICAgIHRoaXMuZm0ubW9uaXRvcihlbFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHsgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7IH0gLy8gcmVxdWlyZWQgZm9yIGludGVyYWN0aW9uIHdpdGggQW5ndWxhciBmb3Jtc1xyXG4gICAgLy8vLy8vLy8vLy8vL1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbCBtZXRob2RzXHJcbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdpbnB1dCcpIHtcclxuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gTXkgZnVuY3Rpb25zXHJcblxyXG4gIG9uRGF0YUNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fbW9tZW50VmFsdWUgPSBtb21lbnQudXRjKHRoaXMuX21vbWVudFZhbHVlLnRvT2JqZWN0KCkpOyAvLyBmb3JjZSB0byBVVENcclxuICAgIGNvbnNvbGUubG9nKGBkYXRlLXRpbWUtcGlja2VyIG91dHB1dCBzdHJpbmcgPSAke3RoaXMudmFsdWV9YCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpOyAvLyByZXF1aXJlZCBmb3IgaW50ZXJhY3Rpb24gd2l0aCBBbmd1bGFyIGZvcm1zXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0SWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbi8qXHJcblRoaXMgc2VydmljZSBwcm92aWRlcyBtZXRob2RzIHRvIGxvYWQgY3VzdG9tIGljb25zLCBhbmQgaXQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgXHJcbmNvbnZlcnRpbmcgc3RhdGVzIHRvIGljb24gbmFtZXMuXHJcblxyXG5UbyB1c2UgYSBjdXN0b20gaWNvbiBpbiBhIDxtYXQtaWNvbj4gZWxlbWVudC4uLlxyXG5cclxuICA8bWF0LWljb24gc3ZnSWNvbj1cImN1c3RvbS1pY29uLW5hbWVcIj48L21hdC1pY29uPlxyXG5cclxuVG8gY3JlYXRlIGEgc3RhdGUgaWNvbiwgdGhlcmUgYXJlIDIgd2F5cyBvZiBkb2luZyBpdC4gWW91IGNhbiB1c2UgdGhlIDxhZ3MtbGliLXN0YXRlLWljb24+IGNvbXBvbmVudCxcclxuT3IgeW91IGNhbiB1c2UgdGhlIGljb24gc2VydmljZSBkaXJlY3RseSBpbiBhIDxtYXQtaWNvbj4gZWxlbWVudC5cclxuXHJcbiAgPGFncy1saWItc3RhdGUtaWNvbiBzdGF0ZT1cImV4ZWN1dGluZ1wiPjwvYWdzLWxpYi1zdGF0ZS1pY29uPlxyXG4gIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCJpY29uU2VydmljZS5nZXRJY29uTmFtZUZyb21TdGF0ZSgnZXhlY3V0aW5nJylcIiBbbmdDbGFzc109XCJpY29uU2VydmljZS5nZXRTdGF0ZUNsYXNzKCdleGVjdXRpbmcnKVwiPjwvbWF0LWljb24+XHJcblxyXG5UaGVyZSBhcmUgYWxzbyBVQ0kgdmVyc2lvbnMgb2YgdGhlIGV4YW1wbGVzIGFib3ZlLCBiZWNhdXNlIFVDSSBoYXMgaXQncyBvd24gc3RhdGVzIGFuZCBjb2xvcnMuXHJcblxyXG4gIDxhZ3MtbGliLXVjaS1zdGF0ZS1pY29uIHN0YXRlPVwiZXhlY3V0aW5nXCI+PC9hZ3MtbGliLXVjaS1zdGF0ZS1pY29uPlxyXG4gIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCJpY29uU2VydmljZS5nZXRJY29uTmFtZUZyb21VY2lTdGF0ZSgnZXhlY3V0aW5nJylcIiBbbmdDbGFzc109XCJpY29uU2VydmljZS5nZXRVY2lTdGF0ZUNsYXNzKCdleGVjdXRpbmcnKVwiPjwvbWF0LWljb24+XHJcbiovXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2ljb25OYW1lVG9TdmdFbGVtZW50TWFwOiBNYXA8c3RyaW5nLCBTVkdFbGVtZW50PiA9IG5ldyBNYXA8c3RyaW5nLCBTVkdFbGVtZW50PigpO1xyXG5cclxuICAvLyBUaGVzZSBhcmUgdGhlIGN1c3RvbSBpY29ucyB0byBiZSBsb2FkZWQgaW50byB0aGUgTWF0SWNvblJlZ2lzdHJ5XHJcbiAgLy8gdGhlIGZpcnN0IGl0ZW0gaXMgdGhlIGljb24gbmFtZSwgYW5kIHRoZSBzZWNvbmQgaXRlbSBpcyB0aGUgZmlsZVxyXG4gIC8vIGNvbnRhaW5pbmcgdGhlIFNWRyBkZWZpbml0aW9uIG9mIHRoZSBpY29uXHJcbiAgcHJpdmF0ZSBfaWNvbk5hbWVUb0ZpbGVOYW1lTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcChbXHJcbiAgICAvL1tjdXN0b20taWNvbi1uYW1lLCBTVkcgZmlsZSBuYW1lXVxyXG4gICAgWydjaXJjbGUtZmlsbGVkJywgJ2Fzc2V0cy9zdmctaWNvbnMvY2lyY2xlLWZpbGxlZC5zdmcnXSxcclxuICAgIFsnY2lyY2xlLW91dGxpbmVkJywgJ2Fzc2V0cy9zdmctaWNvbnMvY2lyY2xlLW91dGxpbmVkLnN2ZyddLFxyXG4gICAgWydhZGQtZXZlbnQnLCAnYXNzZXRzL3N2Zy1pY29ucy9BZGQtRXZlbnQuc3ZnJ10sXHJcbiAgICBbJ2JhY2stdG8tbm93JywgJ2Fzc2V0cy9zdmctaWNvbnMvQmFjay10by1Ob3cuc3ZnJ10sXHJcbiAgICBbJ2Nvbm5lY3QtcG9pbnRzJywgJ2Fzc2V0cy9zdmctaWNvbnMvQ29ubmVjdC1Qb2ludHMuc3ZnJ10sXHJcbiAgICBbJ2RlbGV0ZScsICdhc3NldHMvc3ZnLWljb25zL0RlbGV0ZS5zdmcnXSxcclxuICAgIFsncHVzaHBpbicsICdhc3NldHMvc3ZnLWljb25zL1B1c2hwaW4uc3ZnJ10sXHJcbiAgICBbJ3JlZnJlc2gnLCAnYXNzZXRzL3N2Zy1pY29ucy9SZWZyZXNoLnN2ZyddLFxyXG4gICAgWydyZXNwb25zZS1hZGQnLCAnYXNzZXRzL3N2Zy1pY29ucy9SZXNwb25zZS1BZGQuc3ZnJ10sXHJcbiAgICBbJ3NlcXVlbmNlJywgJ2Fzc2V0cy9zdmctaWNvbnMvU2VxdWVuY2Uuc3ZnJ10sXHJcbiAgICBbJ3NldHRpbmcnLCAnYXNzZXRzL3N2Zy1pY29ucy9TZXR0aW5nLnN2ZyddLFxyXG4gICAgWyd0aW1lbGluZScsICdhc3NldHMvc3ZnLWljb25zL1RpbWVsaW5lLnN2ZyddLFxyXG4gICAgWydzdGF0dXMtb2snLCAnYXNzZXRzL3N2Zy1pY29ucy9TdGF0dXMtT0suc3ZnJ10sXHJcbiAgICBbJ3N0YXR1cy1hbGVydCcsICdhc3NldHMvc3ZnLWljb25zL1N0YXR1cy1BTEVSVC5zdmcnXSxcclxuICAgIFsnc3RhdHVzLWNhdXRpb24nLCAnYXNzZXRzL3N2Zy1pY29ucy9TdGF0dXMtQ0FVVElPTi5zdmcnXSxcclxuICAgIFsnc3RhdHVzLWVycm9yJywgJ2Fzc2V0cy9zdmctaWNvbnMvU3RhdHVzLUVSUk9SLnN2ZyddLFxyXG4gICAgWydzdGF0dXMtb2ZmJywgJ2Fzc2V0cy9zdmctaWNvbnMvU3RhdHVzLU9GRi5zdmcnXSxcclxuICAgIFsnc3RhdHVzLXN0YW5kYnknLCAnYXNzZXRzL3N2Zy1pY29ucy9TdGF0dXMtU1RBTkRCWS5zdmcnXVxyXG4gIF0pO1xyXG5cclxuICAvLyBtYXAgc3RhdGUgbmFtZXMgdG8gaWNvbiBuYW1lc1xyXG4gIHByaXZhdGUgX3N0YXRlVG9JY29uTmFtZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoW1xyXG4gICAgLy9bc3RhdGUsIGljb24gbmFtZV1cclxuICAgIFsndWNpLXVuYWxsb2NhdGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLWFsbG9jYXRlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS1wcm9wb3NlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS1wbGFubmVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLWV4ZWN1dGluZycsICdjaXJjbGUtb3V0bGluZWQnXSxcclxuICAgIFsndWNpLWNvbXBsZXRlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS1mYWlsZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktY2FuY2VsbGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLXVua25vd24nLCAnY2lyY2xlLW91dGxpbmVkJ10sXHJcbiAgICBbJ29mZicsICdjaXJjbGUtb3V0bGluZWQnXSxcclxuICAgIFsnb2NjdXJyaW5nJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnZXhlY3V0aW5nJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnb2NjdXJyZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydvaycsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ2NvbXBsZXRlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ2NhdXRpb24nLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydwcm9wb3NlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ25vdF9vY2N1cnJlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ25vdC1vY2N1cnJlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ25vdG9jY3VycmVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnYWxlcnQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydmYWlsZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydlcnJvcicsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3N0YW5kYnknLCAnY2lyY2xlLW91dGxpbmVkJ10sXHJcbiAgICBbJ3Vua25vd24nLCAnY2lyY2xlLW91dGxpbmVkJ11cclxuICBdKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogbG9hZCBjdXN0b20gaWNvbnMuIFVzZSB0aGVtIGluIEhUTUwgbGlrZSB0aGlzLi4uIDxtYXQtaWNvbiBzdmdJY29uPVwiYWRkLWV2ZW50XCI+PC9tYXQtaWNvbj5cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5faWNvbk5hbWVUb0ZpbGVOYW1lTWFwLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgdGhpcy5pY29uUmVnaXN0cnkuYWRkU3ZnSWNvbihrLCB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5faWNvbk5hbWVUb0ZpbGVOYW1lTWFwLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgdGhpcy5pY29uUmVnaXN0cnkuZ2V0TmFtZWRTdmdJY29uKGspLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuX2ljb25OYW1lVG9TdmdFbGVtZW50TWFwLnNldChrLCByZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHZXQgaWNvbiBTVkcgZWxlbWVudCBmcm9tIGljb24gc3RyaW5nIG5hbWVcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRJY29uU3ZnRWxlbWVudChpY29uU3RyTmFtZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICBsZXQgc3ZnOiBTVkdFbGVtZW50O1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFpY29uU3RyTmFtZSB8fCBpY29uU3RyTmFtZS5sZW5ndGggPT09IDAgfHwgIXRoaXMuX2ljb25OYW1lVG9TdmdFbGVtZW50TWFwLmhhcyhpY29uU3RyTmFtZSkpIHtcclxuICAgICAgICBpY29uU3RyTmFtZSA9ICdjaXJjbGUtb3V0bGluZWQnO1xyXG4gICAgICB9XHJcbiAgICAgIHN2ZyA9IHRoaXMuX2ljb25OYW1lVG9TdmdFbGVtZW50TWFwLmdldChpY29uU3RyTmFtZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHN2ZyA9IG5ldyBTVkdFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3ZnO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRJY29uTmFtZUZyb21TdGF0ZShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghc3RhdGUgfHwgc3RhdGUubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9zdGF0ZVRvSWNvbk5hbWVNYXAuaGFzKHN0YXRlKSkge1xyXG4gICAgICAgIHN0YXRlID0gJ3Vua25vd24nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVRvSWNvbk5hbWVNYXAuZ2V0KHN0YXRlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICdjaXJjbGUtb3V0bGluZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRJY29uU3ZnRWxlbWVudEZyb21TdGF0ZShzdGF0ZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJY29uU3ZnRWxlbWVudCh0aGlzLmdldEljb25OYW1lRnJvbVN0YXRlKHN0YXRlKSk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEljb25OYW1lRnJvbVVjaVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0SWNvbk5hbWVGcm9tU3RhdGUoYHVjaS0ke3N0YXRlfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRJY29uU3ZnRWxlbWVudEZyb21VY2lTdGF0ZShzdGF0ZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJY29uU3ZnRWxlbWVudEZyb21TdGF0ZShgdWNpLSR7c3RhdGV9YCk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldFN0YXRlQ2xhc3Moc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXN0YXRlIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5fc3RhdGVUb0ljb25OYW1lTWFwLmhhcyhzdGF0ZSkpIHtcclxuICAgICAgICBzdGF0ZSA9ICd1bmtub3duJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYHN0YXRlLSR7c3RhdGUudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gJ3N0YXRlLXVua25vd24nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRVY2lTdGF0ZUNsYXNzKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFzdGF0ZSB8fCBzdGF0ZS5sZW5ndGggPT09IDAgfHwgIXRoaXMuX3N0YXRlVG9JY29uTmFtZU1hcC5oYXMoc3RhdGUpKSB7XHJcbiAgICAgICAgc3RhdGUgPSAndW5rbm93bic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGB1Y2ktc3RhdGUtJHtzdGF0ZS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAndWNpLXN0YXRlLXVua25vd24nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaWNvbi5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItc3RhdGUtaWNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtaWNvbiBbc3ZnSWNvbl09XCJpY29uU2VydmljZS5nZXRJY29uTmFtZUZyb21TdGF0ZShzdGF0ZSlcIiBbbmdDbGFzc109XCJpY29uU2VydmljZS5nZXRTdGF0ZUNsYXNzKHN0YXRlKVwiPjwvbWF0LWljb24+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RhdGUtaWNvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzdGF0ZTogc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpY29uU2VydmljZTogSWNvblNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWNvblNlcnZpY2UuaW5pdCgpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLXVjaS1zdGF0ZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1pY29uIFtzdmdJY29uXT1cImljb25TZXJ2aWNlLmdldEljb25OYW1lRnJvbVVjaVN0YXRlKHN0YXRlKVwiIFtuZ0NsYXNzXT1cImljb25TZXJ2aWNlLmdldFVjaVN0YXRlQ2xhc3Moc3RhdGUpXCI+PC9tYXQtaWNvbj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVjaVN0YXRlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHVibGljIGljb25TZXJ2aWNlOiBJY29uU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pY29uU2VydmljZS5pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcclxuaW1wb3J0IHsgT3dsRGF0ZVRpbWVNb2R1bGUsIE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlIH0gZnJvbSAnbmctcGljay1kYXRldGltZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSwgVHJ1bmNhdGVQaXBlLCBPcmRlckJ5UGlwZSwgSGlnaGxpZ2h0UGlwZSwgUmVtb3ZlSXRlbVBpcGUgfSBmcm9tICcuL290aGVyL3BpcGVzJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcHR5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5L2VtcHR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VudGl0eS1zZWxlY3Rvci9lbnRpdHktc2VsZWN0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpcERpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hpcC1kaXNwbGF5L2NoaXAtZGlzcGxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RhdGVJY29uQ29tcG9uZW50LCBVY2lTdGF0ZUljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUtaWNvbi9zdGF0ZS1pY29uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgTWF0ZXJpYWxNb2R1bGUsIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsIE93bERhdGVUaW1lTW9kdWxlLCBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBbm5vdGF0aW9uQ29tcG9uZW50LFxyXG4gICAgQ2hpcERpc3BsYXlDb21wb25lbnQsXHJcbiAgICBEYXRlRm9ybWF0UGlwZSxcclxuICAgIERhdGVUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRW1wdHlDb21wb25lbnQsXHJcbiAgICBFbnRpdHlTZWxlY3RvckNvbXBvbmVudCxcclxuICAgIEhpZ2hsaWdodFBpcGUsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIE9yZGVyQnlQaXBlLFxyXG4gICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDb21wb25lbnQsXHJcbiAgICBSZW1vdmVJdGVtUGlwZSxcclxuICAgIFN0YXRlSWNvbkNvbXBvbmVudCxcclxuICAgIFRpdGxlQ29tcG9uZW50LFxyXG4gICAgVHJ1bmNhdGVQaXBlLFxyXG4gICAgVWNpU3RhdGVJY29uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBbm5vdGF0aW9uQ29tcG9uZW50LFxyXG4gICAgQ2hpcERpc3BsYXlDb21wb25lbnQsXHJcbiAgICBEYXRlRm9ybWF0UGlwZSxcclxuICAgIERhdGVUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRW1wdHlDb21wb25lbnQsXHJcbiAgICBFbnRpdHlTZWxlY3RvckNvbXBvbmVudCxcclxuICAgIEhpZ2hsaWdodFBpcGUsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIE9yZGVyQnlQaXBlLFxyXG4gICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDb21wb25lbnQsXHJcbiAgICBSZW1vdmVJdGVtUGlwZSxcclxuICAgIFN0YXRlSWNvbkNvbXBvbmVudCxcclxuICAgIFRpdGxlQ29tcG9uZW50LFxyXG4gICAgVHJ1bmNhdGVQaXBlLFxyXG4gICAgVWNpU3RhdGVJY29uQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ3NIbWlMaWJyYXJ5TW9kdWxlIHsgfVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBXZWJTb2NrZXRTdWJqZWN0LCBXZWJTb2NrZXRTdWJqZWN0Q29uZmlnICB9IGZyb20gJ3J4anMvd2ViU29ja2V0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDtcclxuICBwcml2YXRlIF93c3NDb25maWc6IFdlYlNvY2tldFN1YmplY3RDb25maWc8YW55PjtcclxuICBwcml2YXRlIF93c3M6IFdlYlNvY2tldFN1YmplY3Q8YW55PjtcclxuICBwcml2YXRlIGdldCB3c3MoKTogV2ViU29ja2V0U3ViamVjdDxhbnk+IHtcclxuICAgIGlmICghdGhpcy5fd3NzIHx8IHRoaXMuX3dzcy5jbG9zZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0FsZXJ0U2VydmljZTogY3JlYXRlIFdlYlNvY2tldFN1YmplY3QnKTtcclxuICAgICAgdGhpcy5fd3NzID0gbmV3IFdlYlNvY2tldFN1YmplY3QodGhpcy5fd3NzQ29uZmlnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBbGVydFNlcnZpY2U6IFdlYlNvY2tldFN1YmplY3QgYWxyZWFkeSBjcmVhdGVkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fd3NzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl93c3MpIHtcclxuICAgICAgdGhpcy5fd3NzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuX3dzcyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fd3NzQ29uZmlnID0ge1xyXG4gICAgICB1cmw6IHNlcnZpY2VVcmwsXHJcbiAgICAgIGNsb3NlT2JzZXJ2ZXI6IHtcclxuICAgICAgICBuZXh0OiAoZTogQ2xvc2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCVjIFdFQlNPQ0tFVCBDTE9TRUQgYCwgYGJhY2tncm91bmQ6IGJsYWNrOyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7YCwgJ0F0dGVtcHRpbmcgdG8gcmVjb25uZWN0Li4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVuT2JzZXJ2ZXI6IHtcclxuICAgICAgICBuZXh0OiAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBXRUJTT0NLRVQgT1BFTiBgLCBgYmFja2dyb3VuZDogZ3JlZW47IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDtgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIGdldE1lc3NhZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy53c3MucGlwZShcclxuICAgICAgLy8gQWRkcyBhYmlsaXR5IHRvIHJlY29ubmVjdCBhIGRpc2Nvbm5lY3RlZCB3ZWJzb2NrZXRcclxuICAgICAgLy8gQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQwNjc5NzJcclxuICAgICAgcmV0cnkoKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpIC8vIHRoaXMgY2FuIGJlIHVzZWQgdG8gbW9kaWZ5IHRoZSBpbmNvbWluZyBtZXNzYWdlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UobXNnKSB7XHJcbiAgICB0aGlzLndzcy5uZXh0KG1zZyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9jYWwvdGFzay9ieVVjaVRhc2tJZC8ke3VjaVRhc2tJZH1cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0VGFzayh1Y2lUYXNrSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VGFzaz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdDYWxTZXJ2aWNlLmdldFRhc2snKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvY2FsL3Rhc2svYnlVY2lUYXNrSWQvJyArIHVjaVRhc2tJZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGFzaz4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgVGFzayBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBVVCAvY2FsL3Rhc2svJHt1Y2lUYXNrSWR9L2J5VWNpVGFza0lkLyR7dWNpVGFza0lkfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBhZGRUYXNrVG9QbGFuKHBsYW5JZDogc3RyaW5nLCB1Y2lUYXNrSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdDYWxTZXJ2aWNlLmFkZFRhc2tUb1BsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvY2FsL3Rhc2svJyArIHBsYW5JZCArICcvYnlVY2lUYXNrSWQvJyArIHVjaVRhc2tJZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBUYXNrIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUFVUIC9jYWwvdGFzay9yZWplY3QvYnlVY2lUYXNrSWQvJHt1Y2lUYXNrSWR9XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHJlamVjdFRhc2sodWNpVGFza0lkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQ2FsU2VydmljZS5yZWplY3RUYXNrJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2NhbC90YXNrL3JlamVjdC9ieVVjaVRhc2tJZC8nICsgdWNpVGFza0lkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFRhc2sgcmVqZWN0ZWQgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBTZW5kIHRhc2sgcmVxdWVzdFxyXG4gICAqIFBVVCBjYWwvdGFzay97ZXZlbnRJZH0ve3BsYW5JZH1cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgc2VuZFRhc2tpbmdSZXF1ZXN0KGV2ZW50SWQ6IHN0cmluZywgcGxhbklkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQ2FsU2VydmljZS5zZW5kVGFza1JlcXVlc3QnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIGAvY2FsL3Rhc2svJHtldmVudElkfS8ke3BsYW5JZH1gKTtcclxuICAgIGNvbnNvbGUubG9nKCcgICAnICsgdXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsICcnLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdGFzayByZXF1ZXN0IHNlbnRgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWZ0UGxhblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUE9TVCAvcGxhbi9kcmFmdFBsYW4vJHtwbGFuSWR9XHJcblxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkcmFmdFBsYW4ocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5kcmFmdFBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9kcmFmdFBsYW4vJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBQbGFuQXNzZXQgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbk1pblRhc2tEYXRhIHtcclxuICAgIGFzc2V0RW50aXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgYXNzZXROYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGNhcGFiaWxpdHk6IHN0cmluZyA9ICcnO1xyXG4gICAgY2FwYWJpbGl0eUlkOiBzdHJpbmcgPSAnJztcclxuICAgIG1pc3Npb25UYXNrSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgdGFyZ2V0RW50aXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgdGFyZ2V0TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBzdGFydFRpbWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZW5kVGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBcclxuICAgIC8vTkVXIFNFUlZJQ0UgUFJPUEVSVElFU1xyXG4gICAgcGxhbklkOiBzdHJpbmc7XHJcbiAgICBpc1BsYW5uZWQ6IGZhbHNlO1xyXG4gICAgbWlzc2lvblV1aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBsYW5TdGF0dXM6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGhtaVR5cGVOYW1lOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hc3NldEVudGl0eUlkID0gXy5pc05pbChqc29uLmFzc2V0RW50aXR5SWQpID8gJycgOiBqc29uLmFzc2V0RW50aXR5SWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXROYW1lID0gXy5pc05pbChqc29uLmFzc2V0TmFtZSkgPyAnJyA6IGpzb24uYXNzZXROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNhcGFiaWxpdHkgPSBfLmlzTmlsKGpzb24uY2FwYWJpbGl0eSkgPyAnJyA6IGpzb24uY2FwYWJpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5jYXBhYmlsaXR5SWQgPSBfLmlzTmlsKGpzb24uY2FwYWJpbGl0eUlkKSA/ICcnIDoganNvbi5jYXBhYmlsaXR5SWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWlzc2lvblRhc2tJZCA9IF8uaXNOaWwoanNvbi5taXNzaW9uVGFza0lkKSA/ICcnIDoganNvbi5taXNzaW9uVGFza0lkO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEVudGl0eUlkID0gXy5pc05pbChqc29uLnRhcmdldEVudGl0eUlkKSA/ICcnIDoganNvbi50YXJnZXRFbnRpdHlJZDtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXROYW1lID0gXy5pc05pbChqc29uLnRhcmdldE5hbWUpID8gJycgOiBqc29uLnRhcmdldE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoanNvbi5zdGFydFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZShqc29uLmVuZFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxhbm5lZCA9IGpzb24uaXNQbGFubmVkO1xyXG5cclxuICAgICAgICAgICAgLy8gREVMRVRFOlxyXG4gICAgICAgICAgICB0aGlzLmFzc2V0RW50aXR5SWQgPSB0aGlzLmFzc2V0RW50aXR5SWQudHJpbSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEVudGl0eUlkID0gdGhpcy50YXJnZXRFbnRpdHlJZC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAvL05FVyBTRVJWSUNFIFBST1BFUlRJRVNcclxuICAgICAgICAgICAgdGhpcy5wbGFuSWQgPSBfLmlzTmlsKGpzb24ucGxhbklkKSA/ICcnIDoganNvbi5wbGFuSWQ7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQbGFubmVkID0gXy5pc05pbChqc29uLmlzUGxhbm5lZCkgPyBmYWxzZSA6IGpzb24uaXNQbGFubmVkO1xyXG4gICAgICAgICAgICB0aGlzLm1pc3Npb25VdWlkID0gXy5pc05pbChqc29uLm1pc3Npb25VdWlkKSA/ICcnIDoganNvbi5taXNzaW9uVXVpZDtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gXy5pc05pbChqc29uLm5hbWUpID8gJycgOiBqc29uLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxhblN0YXR1cyA9IF8uaXNOaWwoanNvbi5wbGFuU3RhdHVzKSA/ICcnIDoganNvbi5wbGFuU3RhdHVzO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBfLmlzTmlsKGpzb24udHlwZSkgPyAnJyA6IGpzb24udHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxhbk1pblRhc2tEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL3BsYW4nO1xyXG5pbXBvcnQgeyBQbGFuQXNzZXQgfSBmcm9tICcuLi9tb2RlbHMvcGxhbkFzc2V0JztcclxuaW1wb3J0IHsgTWlzc2lvblRhc2sgfSBmcm9tICcuLi9tb2RlbHMvbWlzc2lvblRhc2snO1xyXG5pbXBvcnQgeyBPcHRpbWl6YXRpb25PYmplY3RpdmUgfSBmcm9tICcuLi9tb2RlbHMvb3B0aW1pemF0aW9uT2JqZWN0aXZlJztcclxuaW1wb3J0IHsgT3B0aW1pemF0aW9uTWV0cmljIH0gZnJvbSAnLi4vbW9kZWxzL29wdGltaXphdGlvbk1ldHJpYyc7XHJcbmltcG9ydCB7IEFjY2Vzc1dpbmRvdyB9IGZyb20gJy4uL21vZGVscy9hY2Nlc3NXaW5kb3cnO1xyXG5pbXBvcnQgeyBUYXNrQ29uc3RyYWludCB9IGZyb20gJy4uL21vZGVscy90YXNrQ29uc3RyYWludCc7XHJcbmltcG9ydCB7IERpc3BsYXlXaW5kb3cgfSBmcm9tICcuLi9tb2RlbHMvZGlzcGxheVdpbmRvdyc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFuU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfVxyXG4gICAqIGdldCBQbGFuTWluVGFza0RhdGFcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0TWluVGFza0RhdGFCeVBsYW5JZChwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhW10+IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke3RoaXMuc2VydmljZVVybH0vcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pbi90YXNrL2J5UGxhbklkLycsIHBsYW5JZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYFBsYW5TZXJ2aWNlLmdldE1pblRhc2tEYXRhQnlQbGFuSWQoKWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBsYW5NaW5UYXNrRGF0YVtdPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBQbGFuTWluVGFza0RhdGEgZm9yIHBsYW5JZCAke3BsYW5JZH1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXNbJ3BsYW5NaW5UYXNrRGF0YSddLm1hcChpdGVtID0+IG5ldyBQbGFuTWluVGFza0RhdGEoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBPU1QgL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfVxyXG4gICAqIGNyZWF0ZSBQbGFuTWluVGFza0RhdGFcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgY3JlYXRlTWluVGFza0RhdGFCeVBsYW5JZChwbGFuSWQ6IHN0cmluZywgcGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGFbXT4ge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2aWNlVXJsfS9wbGFuL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfWA7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJywgcGxhbklkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgUGxhblNlcnZpY2UuY3JlYXRlTWluVGFza0RhdGFCeVBsYW5JZCgpYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBsYW5NaW5UYXNrRGF0YVtdPih1cmwsIHBsYW4sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGNyZWF0ZWQgUGxhbk1pblRhc2tEYXRhIGZvciBwbGFuSWQgJHtwbGFuSWR9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzWydwbGFuTWluVGFza0RhdGEnXS5tYXAoaXRlbSA9PiBuZXcgUGxhbk1pblRhc2tEYXRhKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9XHJcbiAgICogdXBkYXRlIFBsYW5NaW5UYXNrRGF0YVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICB1cGRhdGVQbGFuTWluVGFza0RhdGEocGxhbklkOiBzdHJpbmcsIHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhW10+IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke3RoaXMuc2VydmljZVVybH0vcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pbi90YXNrL2J5UGxhbklkLycsIHBsYW5JZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYFBsYW5TZXJ2aWNlLnVwZGF0ZVBsYW5NaW5UYXNrRGF0YSgpYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UGxhbk1pblRhc2tEYXRhW10+KHVybCwgcGxhbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBwbGFuSWQgJHtwbGFuSWR9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzWydwbGFuTWluVGFza0RhdGEnXS5tYXAoaXRlbSA9PiBuZXcgUGxhbk1pblRhc2tEYXRhKGl0ZW0pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBERUxFVEUgL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9XHJcbiAgICogZGVsZXRlIFBsYW5NaW5UYXNrRGF0YVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVQbGFuTWluVGFza0RhdGEocGxhbklkOiBzdHJpbmcsIHBsYW46IFBsYW5NaW5UYXNrRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHt0aGlzLnNlcnZpY2VVcmx9L3BsYW4vbWlzc2lvblRhcmdldC9ieVBsYW5JZC8ke3BsYW5JZH1gO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pc3Npb25UYXJnZXQvYnlQbGFuSWQvJywgcGxhbklkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgUGxhblNlcnZpY2UuZGVsZXRlUGxhbk1pblRhc2tEYXRhKClgKTtcclxuICAgIGxldCBib2R5RGF0YSA9IHsgc3RyaW5nczogW3BsYW4ubWlzc2lvblRhc2tJZF0gfTtcclxuXHJcbiAgICAvLyBIQUNLOiB0aGUgd2hvbGUgUGxhbk1pblRhc2tEYXRhIHN0dWZmIGlzIGFsbCBoYWNrZWQgdXAuIFJldmlzaXQgdGhpcyBhdCBzb21lIHBvaW50XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8YW55PignREVMRVRFJywgdXJsLCB7IC4uLmh0dHBPcHRpb25zLCBib2R5OiBib2R5RGF0YSB9KS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgcGxhbklkICR7cGxhbklkfWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxvYWRCeU1pc3Npb25JZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGFbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5sb2FkQnlNaXNzaW9uSWQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9ieU1pc3Npb25JZC8nICsgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFucylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwbGFuQXNzZXRzQnlQbGFuSWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbkFzc2V0W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UucGxhbkFzc2V0c0J5UGxhbklkJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vcGxhbkFzc2V0cy8nICsgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFuQXNzZXRzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG1pc3Npb25UYXNrRGlzcGxheShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxNaXNzaW9uVGFza1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLm1pc3Npb25UYXNrRGlzcGxheScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pc3Npb25UYXNrRGlzcGxheS9ieVBsYW5JZC8nICsgaWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5taXNzaW9uVGFza3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkTWlzc2lvblRhc2tUb1BsYW4ocGxhbklkOiBzdHJpbmcsIGVudGl0eUlkczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPE1pc3Npb25UYXNrW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuYWRkTWlzc2lvblRhc2tUb1BsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taXNzaW9uVGFzay9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICdzdHJpbmdzJzogZW50aXR5SWRzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgcGFyYW0sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1pc3Npb25UYXNrcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVNaXNzaW9uVGFza3NGcm9tUGxhbihwbGFuSWQ6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPE1pc3Npb25UYXNrW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UucmVtb3ZlTWlzc2lvblRhc2tzRnJvbVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taXNzaW9uVGFzay9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogc3RyaW5nc1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgdGFza3Mgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5taXNzaW9uVGFza3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29weVBsYW4ocGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuY29weVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9jb3B5L2J5UGxhbklkLycgKyBwbGFuLnBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBwbGFuLCB7IC4uLmh0dHBPcHRpb25zLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIHBsYW4gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRCeVBsYW5JZChwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbk1pblRhc2tEYXRhPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldEJ5UGxhbklkJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGxhbk1pblRhc2tEYXRhPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBwbGFuIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxhbkFzc2V0cyhwbGFuQXNzZXRzOiBQbGFuQXNzZXRbXSk6IE9ic2VydmFibGU8UGxhbkFzc2V0W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuYWRkUGxhbkFzc2V0Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vcGxhbkFzc2V0cycpO1xyXG5cclxuICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgJ3BsYW5Bc3NldHMnOiBwbGFuQXNzZXRzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4odXJsLCBwYXJhbSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgYWRkZWQgUGxhbkFzc2V0IHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbkFzc2V0cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpbWl6YXRpb25PYmplY3RpdmVzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcHRpbWl6YXRpb25PYmplY3RpdmU+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0T3B0aW1pemF0aW9uT2JqZWN0aXZlcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL29wdGltaXphdGlvbk9iamVjdGl2ZXMvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3B0aW1pemF0aW9uT2JqZWN0aXZlPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBPcHRpbWl6YXRpb24gT2JqZWN0aXZlcyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGltaXphdGlvbk1ldHJpY3MocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9wdGltaXphdGlvbk1ldHJpYz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRPcHRpbWl6YXRpb25NZXRyaWNzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWV0cmljcy9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcHRpbWl6YXRpb25NZXRyaWM+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIE9wdGltaXphdGlvbiBNZXRyaWNzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGxhbihwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmRlbGV0ZVBsYW4nKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHN0cmluZz4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgcGxhbiBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYW4ocGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGE+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UudXBkYXRlUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55Pih1cmwsIHBsYW4sIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgUGxhbiBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFJlcXVlc3RXaW5kb3dzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxBY2Nlc3NXaW5kb3dbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRSZXF1ZXN0V2luZG93Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vcmVxdWVzdFdpbmRvd3MvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBSZXF1ZXN0IFdpbmRvd3Mgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5hY2Nlc3NXaW5kb3dzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldERpc3BsYXlXaW5kb3dzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaXNwbGF5V2luZG93W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0RGlzcGxheVdpbmRvd3MnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9kaXNwbGF5L3JlcXVlc3RXaW5kb3dzL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgUmVxdWVzdCBXaW5kb3dzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuZGlzcGxheVdpbmRvd3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza0NvbnN0cmFpbnRzKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYXNrQ29uc3RyYWludFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldFRhc2tDb25zdHJhaW50cycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL3Rhc2svY29uc3RyYWludHMvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBUYXNrIENvbnN0cmFpbnQgIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMucGxhbk1pc3Npb25UYXNrQ29uc3RhaW50c0dyb3VwcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYXNrQ29uc3RyYWludHMoY29uc3RyYWludHM6IFRhc2tDb25zdHJhaW50KTogT2JzZXJ2YWJsZTxUYXNrQ29uc3RyYWludD4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS51cGRhdGVUYXNrQ29uc3RyYWludHMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi90YXNrL2NvbnN0cmFpbnRzJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55Pih1cmwsIGNvbnN0cmFpbnRzLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIFRhc2sgQ29uc3RyYWludCAgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFuTWlzc2lvblRhc2tDb25zdGFpbnRzR3JvdXBzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9wdGltaXphdGlvbk9iamVjdGl2ZXMob3B0aW1pemF0aW9uT2JqZWN0aXZlOiBPcHRpbWl6YXRpb25PYmplY3RpdmUpOiBPYnNlcnZhYmxlPE9wdGltaXphdGlvbk9iamVjdGl2ZT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS51cGRhdGVPcHRpbWl6YXRpb25PYmplY3RpdmVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vb3B0aW1pemF0aW9uT2JqZWN0aXZlcycpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4odXJsLCBvcHRpbWl6YXRpb25PYmplY3RpdmUsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgT3B0aW1pemF0aW9uIE9iamVjdGl2ZXMgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU2VydmljZSB7XHJcblxyXG4gIHBlbmRpbmdSZXF1ZXN0czogbnVtYmVyID0gMDtcclxuICBjb250YWluZXJOYW1lID0gJ3Byb2dyZXNzQ29udGFpbmVyJztcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRGVmYXVsdCBlbGVtZW50IGZvciBwcm9ncmVzcyBzcGlubmVyID0gXCInICsgdGhpcy5jb250YWluZXJOYW1lICsgJ1wiJyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVyTmFtZSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUHJvZ3Jlc3Mgc3Bpbm5lciBlbGVtZW50IG5vdCBmb3VuZC4gIEVuc3VyZSBlbGVtZW50IGlzIGluY2x1ZGVkIGluIGRvY3VtZW50LicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHNldEJ1c3koaXNCdXN5OiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNCdXN5KSB7XHJcbiAgICAgIC8vS2VlcCB0cmFjayBvZiBob3cgbWFueSByZXF1ZXN0cyB0aGVyZSBoYXZlIGJlZW4gdG8gc2hvdyB0aGUgYnVzeSBtZXNzYWdlLlxyXG4gICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cysrO1xyXG4gICAgICAvL0lmIGZvcmNlIGlzIHRydWUgc2hvdyB0aGUgYnVzeSBtZXNzYWdlIGltbWVkaWF0ZWx5LlxyXG4gICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgLy9LZWVwIHRyYWNrIG9mIGhvdyBtYW55IHJlcXVlc3RzIHRoZXJlIGhhdmUgYmVlbiB0byBoaWRlIHRoZSBidXN5IG1lc3NhZ2UuXHJcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdSZXF1ZXN0cyA+IDApIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cy0tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL0lmIHRoZXJlIGlzIG5vIG1vcmUgb3V0c3RhbmRpbmcgYnVzeSByZXF1ZXN0cyBvciBpZiBmb3JjZSBpcyB0cnVlIHRoZW4gaGlkZSB0aGUgYnVzeSBtZXNzYWdlLlxyXG4gICAgICBpZiAodGhpcy5wZW5kaW5nUmVxdWVzdHMgPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVxdWVzdHMgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0NvbnRyb2wgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGJ1c3kgbWVzc2FnZSBkaXYuXHJcbiAgc2V0VmlzaWJsZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2Uud2FybignVW5hYmxlIHRvIGRpc3BsYXkgc3Bpbm5lci4gIElzIFwiYWdzLWxpYi1wcm9ncmVzc1wiIGNvbXBvbmVudCBpbmNsdWRlZD8nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBUYXNrT3JkZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFzayh0YXNrOiBUYXNrKTogT2JzZXJ2YWJsZTxUYXNrPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdUYXNrU2VydmljZS5jcmVhdGVUYXNrJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VGFzaz4odXJsLCB0YXNrLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWxsKHR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8VGFza1tdPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdUYXNrU2VydmljZS5sb2FkQWxsJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXIvYWxsT3JkZXJzP3R5cGU9JyArIHR5cGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMudGFza2luZ09yZGVycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmxvYWRCeUlkJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXIvJyArIGlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGFzaz4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2tpbmdPcmRlcihpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmRlbGV0ZVRhc2tpbmdPcmRlcicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvdGFza2luZ09yZGVyLycgKyBpZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8c3RyaW5nPih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgdGFzayBvcmRlciBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza2luZ09yZGVyKHRhc2s6IFRhc2spOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLnVwZGF0ZVRhc2tpbmdPcmRlcicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvdGFza2luZ09yZGVyJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFRhc2s+KHVybCwgdGFzaywgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgIHVwZGF0ZWQgdGFzayAke3Rhc2sudGFza2luZ09yZGVyVXVpZH1gKSksXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuXHJcbiAgICBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZpY2VVcmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcclxuICAgICAgICAgIC5waXBlKG1hcChcclxuICAgICAgICAgICAgcmVzID0+IHJlc1xyXG4gICAgICAgICAgKSk7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxufSIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgVGhlIEJvZWluZyBDb21wYW55XHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBCb2VpbmcgQ29tcGFueSAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclNlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgYXBwTmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBoZWFkZXJUaXRsZTogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XHJcbiAgcHVibGljIGJyZWFkY3J1bWI6IEJlaGF2aW9yU3ViamVjdDxvYmplY3Q+O1xyXG4gIHByaXZhdGUgX2hlYWRlclByaW1hcnlUaXRsZSA9ICcnO1xyXG4gIHByaXZhdGUgX2hlYWRlclN1YlRpdGxlID0gJyc7XHJcblxyXG4gIHB1YmxpYyBzZXQgaGVhZGVyUHJpbWFyeVRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9oZWFkZXJQcmltYXJ5VGl0bGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHZhbHVlICsgJyAtICcgKyB0aGlzLmFwcE5hbWUpOyAvLyB0aGlzIGlzIHdoYXQgZ2V0cyBkaXNwbGF5ZWQgaW4gdGhlIGJyb3dzZXIgdGFiXHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRlclRpdGxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGhlYWRlclN1YlRpdGxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9oZWFkZXJTdWJUaXRsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVIZWFkZXJUaXRsZSgpO1xyXG4gICAgdGhpcy51cGRhdGVCcmVhZGNydW1iKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUpIHtcclxuICAgIHRoaXMuaGVhZGVyVGl0bGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odGl0bGVTZXJ2aWNlLmdldFRpdGxlKCkpO1xyXG4gICAgdGhpcy5icmVhZGNydW1iID0gbmV3IEJlaGF2aW9yU3ViamVjdDxvYmplY3Q+KHt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoYXBwTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFwcE5hbWUgPSBhcHBOYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8gc2VlIGh0dHBzOi8va2VuZGFsZWl2LmNvbS9zdWJzY3JpYmluZy10by1icm93c2VyLXRpdGxlLWNoYW5nZXMtdXNpbmctYW5ndWxhci9cclxuICB1cGRhdGVIZWFkZXJUaXRsZSgpIHtcclxuICAgIGxldCB0aXRsZSA9IHRoaXMuX2hlYWRlclByaW1hcnlUaXRsZTtcclxuICAgIGlmICh0aGlzLl9oZWFkZXJTdWJUaXRsZSkge1xyXG4gICAgICB0aXRsZSArPSAnIFsnICsgdGhpcy5faGVhZGVyU3ViVGl0bGUgKyAnXSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhlYWRlclRpdGxlLm5leHQodGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBVcGRhdGVzIHRoZSBicmVhZGNydW1iIHdoZW4gdGhlIHRpdGxlIGlzIHVwZGF0ZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3QgY29uc2lzdGluZyBvZiB0aGUgcHJpbWFyeSB0aXRsZSwgYW5kIHRoZSBzdWJ0aXRsZVxyXG4gICAqL1xyXG4gIHVwZGF0ZUJyZWFkY3J1bWIoKSB7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWIubmV4dCh7XHJcbiAgICAgIHByaW1hcnlUaXRsZTogdGhpcy5faGVhZGVyUHJpbWFyeVRpdGxlLFxyXG4gICAgICBzdWJ0aXRsZTogdGhpcy5faGVhZGVyU3ViVGl0bGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IFBsYW5Db2xsZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3BsYW5Db2xsZWN0aW9uJztcclxuaW1wb3J0IHsgUGxhbkNvbGxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vbW9kZWxzL3BsYW5Db2xsZWN0aW9uVHlwZSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhbkNvbGxlY3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFsbCgpOiBPYnNlcnZhYmxlPFBsYW5Db2xsZWN0aW9uW10+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQWxsJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMucGxhbkNvbGxlY3Rpb25zKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFsbFR5cGVzKCk6IE9ic2VydmFibGU8UGxhbkNvbGxlY3Rpb25UeXBlW10+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQWxsVHlwZXMnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uL1R5cGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBwbGFuIGNvbGxlY3Rpb24gdHlwZXMgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5wbGFuVHlwZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldEdyb3VwVHlwZShtaXNzaW9uVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQWxsVHlwZXMnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEFsbFR5cGVzKCkucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgcGxhbiBjb2xsZWN0aW9uIHR5cGVzICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMuZmlsdGVyKHAgPT4gcC5obWlOYW1lID09PSBtaXNzaW9uVHlwZSlbMF0uYXNzZXRHcm91cDEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQnlJZChtaXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGxhbkNvbGxlY3Rpb24+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5sb2FkQnlJZCcpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvUGxhbkNvbGxlY3Rpb24vYnlJZC8nICsgbWlzc2lvbklkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGxhbkNvbGxlY3Rpb24+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUocGxhbkNvbGxlY3Rpb246IFBsYW5Db2xsZWN0aW9uKTogT2JzZXJ2YWJsZTxQbGFuQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLmNyZWF0ZVBsYW5Db2xsZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQbGFuQ29sbGVjdGlvbj4odXJsLCBwbGFuQ29sbGVjdGlvbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY2VyYXRlZCBQbGFuIENvbGxlY3Rpb24gJHtuYW1lfWAsIHJlcykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuQ29sbGVjdGlvblNlcnZpY2UuZGVsZXRlUGxhbkNvbGxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uL2J5SWQvJyArIGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHN0cmluZz4odXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgUGxhbiBDb2xsZWN0aW9uIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUocGxhbkNvbGxlY3Rpb246IFBsYW5Db2xsZWN0aW9uKTogT2JzZXJ2YWJsZTxQbGFuQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLnVwZGF0ZVBsYW5Db2xsZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQbGFuQ29sbGVjdGlvbj4odXJsLCBwbGFuQ29sbGVjdGlvbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgIHVwZGF0ZWQgUGxhbiBDb2xsZWN0aW9uICR7cGxhbkNvbGxlY3Rpb24ubWlzc2lvblVVSWR9YCkpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDem1sU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICBnZXRHcm91bmRUcmFja0FuZFNlbnNvclZvbHVtZShwbGFuSWQ6IHN0cmluZywgdGFyZ2V0SWQ6IHN0cmluZywgbWlzc2lvbklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBlbmRwb2ludCA9IGAvY3ptbC9ncm91bmRUcmFja0FuZFNlbnNvclZvbHVtZS8ke3BsYW5JZH0vJHt0YXJnZXRJZH1gO1xyXG5cclxuICAgIGlmIChtaXNzaW9uSWQpIHtcclxuICAgICAgZW5kcG9pbnQgPSBgJHtlbmRwb2ludH0vJHttaXNzaW9uSWR9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCBlbmRwb2ludCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0N6bWxTZXJ2aWNlLmdldEdyb3VuZFRyYWNrQW5kU2Vuc29yVm9sdW1lKCknKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCcgICAgcmV0cmlldmVkIEN6bWwnKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEhhbmRsZSBodHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAqXHJcbiAgKiBAcGFyYW0gb3BlcmF0aW9uIHtzdHJpbmd9IG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICogQHBhcmFtIHJlc3VsdCB7YW55fSBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gYXMgdGhlIG9ic2VydmFibGUgcmVzdWx0XHJcbiAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmVycm9yKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvc2NoZWR1bGUvc29sdmVyVHlwZXMvJHttaXNzaW9uVHlwZX1cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0U29sdmVyVHlwZXMobWlzc2lvblR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnU2NoZWR1bGVyU2VydmljZS5nZXRTb2x2ZXJUeXBlcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9zY2hlZHVsZS9zb2x2ZXJUeXBlcy8nICsgbWlzc2lvblR5cGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgU29sdmVyIFR5cGVzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuc3RyaW5ncylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTcHNFdmVudCB9IGZyb20gJy4uL21vZGVscy9zcHNFdmVudCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFNjaGVkdWxlU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFBPU1QgL3J1bkludGVybmFsU2NoZWR1bGVyLyR7cGxhbklkfVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHJ1bkludGVybmFsU2NoZWR1bGVyKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXh0ZXJuYWxTY2hlZHVsZVNlcnZpY2UucnVuSW50ZXJuYWxTY2hlZHVsZXInKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcnVuSW50ZXJuYWxTY2hlZHVsZXIvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBSdW5JbnRlcm5hbCBTY2hlZHVsZXIgc3VjY2Vzc2Z1bGxgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUE9TVCAvcHVibGlzaFRvTGFzby8ke3BsYW5JZH1cclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBwdWJsaXNoVG9MYXNvKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXh0ZXJuYWxTY2hlZHVsZVNlcnZpY2UucHVibGlzaFRvTGFzbycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wdWJsaXNoVG9MYXNvLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUHVibGlzaGVkIFRvIExhc28gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5zdGF0dXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBQT1NUIC9zcHNFdmVudC8ke3BsYW5JZH1cclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjcmVhdGUoc3BzRXZlbnQ6IFNwc0V2ZW50KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXh0ZXJuYWxTY2hlZHVsZVNlcnZpY2Uuc3BzRXZlbnQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvc3BzRXZlbnQnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIHNwc0V2ZW50LCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBTdG9yZWQgc3BzIEV2ZW50IHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBQT1NUIC9wdWJsaXNoVG9MYXNvLyR7cGxhbklkfVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldExhc29Qcm9oaWJpdChwcm9oaWJpdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNwc0V2ZW50PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0V4dGVybmFsU2NoZWR1bGVTZXJ2aWNlLmdldExhc29Qcm9oaWJpdCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9nZXRMYXNvUHJvaGliaXQvJyArIHByb2hpYml0SWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBSZXRyaWV2ZWQgTGFzbyBQcm9oaWJpdCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUE9TVCAvYXNzZXRzV2l0aE14LyR7cGxhbklkfVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFzc2V0c1dpdGhNeChwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXh0ZXJuYWxTY2hlZHVsZVNlcnZpY2UuYXNzZXRzV2l0aE14Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2Fzc2V0c1dpdGhNeC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUmV0cmlldmVkIGFzc2V0cyB3aXRoIE14IHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuc3RyaW5ncylcclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQWNjZXNzV2luZG93TGltaXQge1xyXG4gICAgY2FwYWJpbGl0eUlkOiBzdHJpbmc7XHJcbiAgICBlbGV2YXRpb25NYXhMaW1pdDogbnVtYmVyO1xyXG4gICAgZWFydGhMaW1iQWx0TGltaXQ6IG51bWJlcjtcclxuICAgIHJhbmdlT2JzZXJ2YWJsZTogbnVtYmVyO1xyXG4gICAgcXVhbGl0eVNjb3JlOiBudW1iZXI7XHJcbiAgICBsdW5hckV4Y2x1c2lvbkFuZ2xlOiBudW1iZXI7XHJcbiAgICBhcHBseUxpZ2h0aW5nQ29uc3RyYWludHM6IGJvb2xlYW47XHJcbiAgICBzb2xhckV4Y2x1c2lvbkFuZ2xlOiBudW1iZXI7XHJcbiAgICBhcHBseVNvbGFyRGFya25lc3NDb25zdHJhaW50OiBib29sZWFuO1xyXG4gICAgcmFuZ2VUYXNrYWJsZTogbnVtYmVyO1xyXG4gICAgcmFuZ2VNYXg6IG51bWJlcjtcclxuICAgIHJhbmdlTWF4T2JzZXJ2YWJsZTpcdG51bWJlcjtcclxuICAgIHJhbmdlTWluOiBudW1iZXI7XHJcbiAgICBlbGV2YXRpb25NaW5MaW1pdDogbnVtYmVyO1xyXG4gICAgYm9yZXNpZ2h0T2ZmQW5nbGU6IG51bWJlcjtcclxuICAgIGJvcmVzaWdodDogbnVtYmVyO1xyXG4gICAgYXppbXV0aE1pbkxpbWl0OiBudW1iZXI7XHJcbiAgICBhemltdXRoTWF4TGltaXQ6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBQbGFuU3ViVHlwZSB9IGZyb20gJy4vcGxhblN1YlR5cGUnO1xyXG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tICcuL2FsZXJ0VHlwZSc7XHJcbmltcG9ydCB7IFRhc2tTdWJUeXBlIH0gZnJvbSAnLi90YXNrU3ViVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnQge1xyXG5cclxuICAgIGFsZXJ0VHlwZTogQWxlcnRUeXBlO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHV1aWQ6IHN0cmluZztcclxuICAgIHBsYW5TdWJUeXBlOiB7XHJcbiAgICAgICAgdHlwZTogUGxhblN1YlR5cGUsXHJcbiAgICB9O1xyXG4gICAgdGFza1N1YlR5cGU6IFRhc2tTdWJUeXBlO1xyXG4gICAgZG9tYWluOiBzdHJpbmc7XHJcbiAgICBhc3NldFN0YXR1c1N1YlR5cGU6IHtcclxuICAgICAgICBzdGF0dXNUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgdXVpZDogc3RyaW5nO1xyXG4gICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgICBhc3NldE5hbWU6IHN0cmluZztcclxuICAgICAgICBhc3NldElkOiBzdHJpbmc7XHJcbiAgICAgICAgYXNzZXRUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgYXNzZXRTdGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIGRvbWFpbjogc3RyaW5nO1xyXG4gICAgICAgIG93bmVyOiBzdHJpbmc7XHJcbiAgICAgICAgY2FwYWJpbGl0eVN0YXR1c0xpc3Q6IHtcclxuICAgICAgICAgICAgY2FwYWJpbGl0eVN0YXR1c1N1bW1hcmllczoge1xyXG4gICAgICAgICAgICAgICAgY2FwYWJpbGl0eUlEOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBjYXBhYmlsaXR5VHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgY2FwYWJpbGl0eVN0YXR1czogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlVGltZTogc3RyaW5nOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NldFBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBvcmJpdFR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IHN0cmluZztcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGFsdGl0dWRlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RVcGRhdGVUaW1lOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcclxuICAgIHBsYW4gPSAnUExBTicsXHJcbiAgICB0aW1lVXBkYXRlID0gJ3RpbWVVcGRhdGUnLFxyXG4gICAgdGFzayA9ICdUQVNLJyxcclxuICAgIGFzc2V0U3RhdHVzID0gJ0FTU0VUU1RBVFVTJyxcclxuICAgIHRhc2tTdGF0dXMgPSAnVEFTS1NUQVRVUycsXHJcbiAgICBzcHMgPSBcIlNQU1wiLFxyXG4gICAgc3BzX3Byb2hpYml0ID0gXCJTUFNfUFJPSElCSVRcIixcclxuICAgIGVzX3Byb2hpYml0ID0gXCJFU19QUk9ISUJJVFwiXHJcbn0iLCJleHBvcnQgY2xhc3MgTWlzc2lvbkRhdGEge1xyXG4gICAgZW5kVGltZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgICBjb21tYW5kZXJHdWlkYW5jZTogc3RyaW5nO1xyXG4gICAgbWlzc2lvblV1aWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBUYXNrQ29uc3RyYWludCB9IGZyb20gJy4vdGFza0NvbnN0cmFpbnQnO1xyXG5pbXBvcnQgeyBHcm91cCwgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pc3Npb25UYXJnZXQge1xyXG4gICAgcHJpbWFyeVRhc2tJZDogc3RyaW5nO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG4gICAgZW50aXR5czogYW55W107XHJcblxyXG4gICAgY29hVXVpZDogc3RyaW5nO1xyXG4gICAgbWlzc2lvblBhaXJVdWlkOiBzdHJpbmc7XHJcbiAgICBjYXBhYmlsaXR5OiBzdHJpbmc7XHJcbiAgICBudW1iZXJPZkNvbGxlY3RzOiBudW1iZXI7XHJcbiAgICBwcmlvcml0eTogbnVtYmVyO1xyXG4gICAgdGFza1R5cGU6IHN0cmluZztcclxuICAgIG9wdFRyYWNraW5nSWQ6IHN0cmluZztcclxuICAgIG9wdGltaXplcjogc3RyaW5nO1xyXG4gICAgcGxhdGZvcm1VdWlkOiBzdHJpbmc7XHJcbiAgICB0YXJnZXRDYXRlZ29yeUlkOiBudW1iZXI7XHJcbiAgICB0YXJnZXRFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNUYXNrVXVpZDogc3RyaW5nO1xyXG4gICAgcmVsYXRpdmVOb0VhcmxpZXJUaGFuOiBudW1iZXI7XHJcbiAgICByZWxhdGl2ZU5vTGF0ZXJUaGFuOiBudW1iZXI7XHJcbiAgICBwcmltYXJ5VGFzazogc3RyaW5nO1xyXG5cclxuICAgIHRhcmdldENvbnN0cmFpbnRzOiBUYXNrQ29uc3RyYWludDtcclxuICAgIGFjY2Vzc1dpbmRvd3M6IFdpbmRvd1tdO1xyXG4gICAgcmVxdWVzdFdpbmRvd3M6IFdpbmRvd1tdO1xyXG5cclxuXHJcbiAgICAvL2ltcGxlbWVudCB0aGlzIG9iamVjdCB3aGVuIGtub3duXHJcbiAgICBzdXBwb3J0VGFza3M6IGFueTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTWlzc2lvblRhc2sge1xyXG4gICAgY2FwYWJpbGl0eTogc3RyaW5nO1xyXG4gICAgZWFybGllc3RTdGFydFRpbWU6IHN0cmluZztcclxuICAgIG1pc3Npb25UYXNrSWQ6IHN0cmluZztcclxuICAgIHByaW9yaXR5OiBzdHJpbmc7XHJcbiAgICB0YXJnZXRFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgdGFyZ2V0TmFtZTogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBPcHRpbWl6YXRpb25NZXRyaWMge1xyXG4gICAgcGxhbklkOiBzdHJpbmc7XHJcbiAgICBwbGFuRHVyYXRpb246IG51bWJlcjtcclxuICAgIHRvdGFsTWlzc2lvblRpbWU6IG51bWJlcjtcclxuICAgIHRvdGFsVGFza0F0dGVtcHRzOiBudW1iZXI7XHJcbiAgICBhdmdUYXNrVGltZTogbnVtYmVyO1xyXG4gICAgbWVkaWFuVGFza1RpbWU6IG51bWJlcjtcclxuICAgIGF2Z1Byb2JUYXNrU3VjY2VzczogbnVtYmVyO1xyXG4gICAgbWluUHJvYlRhc2tTdWNjZXNzOiBudW1iZXI7XHJcbiAgICBhdmdQcm9iVGFza0F0dHJpYjogbnVtYmVyO1xyXG4gICAgcHJvYk1pc3Npb25TdWNjZXNzOiBudW1iZXI7XHJcbiAgICBudW1SZXNvdXJjZXNVc2VkOiBudW1iZXI7XHJcbiAgICBudW1UYXNrc0Fzc2lnbmVkOiBudW1iZXI7XHJcbiAgICBudW1UYXNrc1VuYXNzaWduZWQ6IG51bWJlcjtcclxuICAgIHBsYW5TdGFydFRpbWU6IHN0cmluZztcclxuICAgIHBsYW5FbmRUaW1lOiBzdHJpbmc7XHJcbiAgICBvcHREZWJ1Zzogc3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgT3B0aW1pemF0aW9uT2JqZWN0aXZlIHtcclxuICAgIGlzTWluaW1pemluZ051bWJlck9mVGFza3M6IGJvb2xlYW47XHJcbiAgICBsb2dMZXZlbDogc3RyaW5nO1xyXG4gICAgb3B0aW1pemF0aW9uTW9kZTogbnVtYmVyO1xyXG4gICAgb3B0aW1pemF0aW9uVGltZUxpbWl0OiBudW1iZXI7XHJcbiAgICBvcHRpbWl6ZXI6IHN0cmluZztcclxuICAgIHBsYW5JZDogc3RyaW5nO1xyXG4gICAgcHJvYk1pc3Npb25TdWNjZXNzOiBudW1iZXI7XHJcbiAgICB3ZWlnaHRpbmdNaXNzVnNBdmVUYXNrVGltZTogbnVtYmVyO1xyXG4gICAgd2VpZ2h0aW5nVGltZVZzUXVhbDogbnVtYmVyO1xyXG4gICAgcGxhblN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgcGxhbkVuZFRpbWU6IHN0cmluZztcclxuICAgIHNjaGVkdWxlck1vZGU6IHN0cmluZztcclxuICAgIG1heFRhc2tzUGVyQ3ljbGU6bnVtYmVyO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZW50aXR5JztcclxuaW1wb3J0IHsgTWlzc2lvblRhcmdldCB9IGZyb20gJy4vbWlzc2lvblRhcmdldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbkFzc2V0IHtcclxuICAgIGJ5TWlzc2lvblRhcmdldDogTWlzc2lvblRhcmdldFtdO1xyXG4gICAgZW50aXR5czogYW55W107XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcbiAgICBwbGFuSWQ6IHN0cmluZztcclxuICAgIGFzc2V0VHlwZTogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFBsYW5TdWJUeXBlIHtcclxuICAgIHVwZGF0ZSA9ICdVUERBVEUnLFxyXG4gICAgY29tcGxldGUgPSAnRFJBRlQnLFxyXG4gICAgZXJyb3IgPSAnRVJST1InLFxyXG4gICAgZXhlY3V0aW5nID0gJ0V4ZWN1dGluZydcclxufVxyXG4iLCJpbXBvcnQgeyBNaXNzaW9uRGF0YSB9IGZyb20gJy4vbWlzc2lvbkRhdGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgdGFza2luZ09yZGVyVXVpZDogc3RyaW5nO1xyXG4gICAgdWNpVGFza0lkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBtaXNzaW9uRGF0YTogTWlzc2lvbkRhdGFbXTtcclxuXHJcbiAgICB0YXNrSWQ6IHN0cmluZztcclxuICAgIHRhc2tEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGFza1R5cGU6IHN0cmluZztcclxuICAgIGVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBwcmVjZWRlbmNlOiBudW1iZXI7XHJcbiAgICBwcmlvcml0eTogbnVtYmVyO1xyXG4gICAgYXBwcm92YWxSZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIHN0YXR1czogc3RyaW5nO1xyXG4gICAgcGxhbklkOiBzdHJpbmc7XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgVGFza1N1YlR5cGUge1xyXG4gICAgdGFza1R5cGU6IHN0cmluZztcclxuICAgIHV1aWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBPcHRpbWl6YXRpb25NZXRyaWMgfSBmcm9tICcuL29wdGltaXphdGlvbk1ldHJpYyc7XHJcbmltcG9ydCB7IE1pc3Npb25UYXJnZXQgfSBmcm9tICcuL21pc3Npb25UYXJnZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9wdGltaXphdGlvbiB7XHJcblxyXG4gICAgbWlzc2lvblV1aWQ6IHN0cmluZztcclxuICAgIGNvYUlkOiBzdHJpbmc7XHJcbiAgICBjb2FOYW1lOiBzdHJpbmc7XHJcbiAgICBjb2FTdGF0dXM6IHN0cmluZztcclxuICAgIGRyYWZ0Q29hU3RhcnRUaW1lOiBhbnk7XHJcbiAgICBzdGFydFRpbWU6IHN0cmluZztcclxuICAgIGVuZFRpbWU6IHN0cmluZztcclxuICAgIGNvbGxlY3RBc3Nlc0NvbGxlY3Q6IGJvb2xlYW47XHJcbiAgICBwcm9iYWJpbGl0eU9mU3VjY2VzczogbnVtYmVyO1xyXG4gICAgb3B0aW1pemVyTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3B0aW1pemF0aW9uTWV0cmljc1V1aWQ6IHN0cmluZztcclxuICAgIG9wdGltaXphdGlvbk1ldHJpY3M6IE9wdGltaXphdGlvbk1ldHJpYztcclxuICAgIG1pc3Npb25UYXJnZXRzOiBNaXNzaW9uVGFyZ2V0O1xyXG4gICAgY29hT2JqZWN0aXZlczogYW55O1xyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGFza0NvbnN0cmFpbnQge1xyXG4gICAgdGFyZ2V0Q29uc3RyYWludFV1aWQ6IHN0cmluZztcclxuICAgIHJlc2VydmVkQTogc3RyaW5nO1xyXG4gICAgcmVzZXJ2ZWRCOiBzdHJpbmc7XHJcbiAgICBpc0NvbGxlY3RBc3Nlc3NDb2xsZWN0OiB0cnVlO1xyXG4gICAgcHJvYmFiaWxpdHlBdHRyaWJ1dGlvbjogbnVtYmVyO1xyXG4gICAgcHJvYmFiaWxpdHlDb2xsZWN0aW9uOiBudW1iZXI7XHJcbiAgICBwcm9iYWJpbGl0eVN1Y2Nlc3M6IG51bWJlcjtcclxuICAgIGVhcmxpZXN0U3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgICBsYXRlc3RFbmRUaW1lOiBzdHJpbmc7XHJcbiAgICBkZWNvbmZsaWN0aW9uQ29uc3RyYWludHM6IHN0cmluZztcclxuICAgIHVzZU5vbkRlZGljYXRlZDogdHJ1ZTtcclxuXHJcbiAgICBjYXBhYmlsaXR5OiBzdHJpbmc7XHJcbiAgICBudW1iZXJPZkNvbGxlY3RzOiBudW1iZXI7XHJcbiAgICBwcmlvcml0eTogbnVtYmVyO1xyXG5cclxuICAgIG1pc3Npb25UYXNrSWRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBiYW5kd2lkdGg6IHN0cmluZztcclxuICAgIHF1YWxpdHlUaHJlc2hvbGQ6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lV2luZG93IH0gZnJvbSAnLi90aW1lV2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NXaW5kb3cge1xyXG5cclxuICAgIGFzc2V0VXVpZDogc3RyaW5nO1xyXG4gICAgbWlzc2lvblRhc2tVdWlkOiBzdHJpbmc7XHJcbiAgICB0YXJnZXRVdWlkOiBzdHJpbmc7XHJcbiAgICB0aW1lV2luZG93czpUaW1lV2luZG93W107XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFRpbWVXaW5kb3cge1xyXG5cclxuICAgIHdpbmRvd1V1aWQ6IHN0cmluZztcclxuICAgIHN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgZW5kVGltZTogc3RyaW5nO1xyXG4gICAgd2luZG93VHlwZTogc3RyaW5nO1xyXG4gICAgYXNzZXRJZDogc3RyaW5nO1xyXG4gICAgcHJvYlN1Y2Nlc3M6IG51bWJlcjtcclxuICAgIHByb2JBdHRyaWJ1dGlvbjogbnVtYmVyO1xyXG4gICAgcHJlRXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgZXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgcG9zdEV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIHJlcXVpcmVkOiB0cnVlO1xyXG4gICAgcmVhc29uTG93ZXJQcm9iU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICByZXZOdW1iZXI6IHN0cmluZztcclxuICAgIG51bWJlck9mQ29sbGVjdHM6IG51bWJlcjtcclxuICAgIHF1YWxpdHk6IG51bWJlcjtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUGxhbkNvbGxlY3Rpb24ge1xyXG4gICAgbWlzc2lvblVVSWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGhtaVR5cGVOYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBzdGFydFRpbWU6IHN0cmluZztcclxuICAgIGVuZFRpbWU6IHN0cmluZztcclxuICAgIGNvbW1hbmRlckd1aWRhbmNlOiBzdHJpbmc7XHJcbiAgICBwcmltYXJ5UGxhbjogc3RyaW5nO1xyXG4gICAgcGxhblN0YXR1czogc3RyaW5nO1xyXG4gICAgbGFzdFVzZXJVcGRhdGU6IHN0cmluZztcclxuICAgIGxhc3RVcGRhdGVUaW1lOiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBsYW5Db2xsZWN0aW9uVHlwZSB7XHJcbiAgICBwbGFuVHlwZUlkOiBzdHJpbmc7XHJcbiAgICBobWlOYW1lOiBzdHJpbmc7XHJcbiAgICBjb2FOYW1lOiBzdHJpbmc7XHJcbiAgICBhc3NldEdyb3VwMTogc3RyaW5nO1xyXG4gICAgYXNzZXRHcm91cDI6IHN0cmluZztcclxuICAgIGFzc2V0R3JvdXAyVGFyZ2V0czogc3RyaW5nO1xyXG4gICAgc2NoZWR1bGVyVHlwZTogc3RyaW5nXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERpc3BsYXlXaW5kb3cge1xyXG4gICAgcGxhbklkOiBzdHJpbmc7XHJcbiAgICBtaXNzaW9uVGFza0lkOiBzdHJpbmc7XHJcbiAgICB3aW5kb3dJZDogc3RyaW5nO1xyXG4gICAgYXNzZXRJZDogc3RyaW5nO1xyXG4gICAgYXNzZXROYW1lOiBzdHJpbmc7XHJcbiAgICBhc3NldFBhcmVudElkOiBzdHJpbmc7XHJcbiAgICBhc3NldFBhcmVudE5hbWU6IHN0cmluZztcclxuICAgIHRhcmdldElkOiBzdHJpbmc7XHJcbiAgICB0YXJnZXROYW1lOiBzdHJpbmc7XHJcbiAgICBjYXBhYmlsaXR5SWQ6IHN0cmluZztcclxuICAgIHN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgZW5kVGltZTogc3RyaW5nO1xyXG4gICAgcHJpb3JpdHk6IG51bWJlcjtcclxuICAgIHByb2JhYmlsaXR5T2ZBdHRyaWJ1dGlvbjogbnVtYmVyO1xyXG4gICAgcHJvYmFiaWxpdHlPZlN1Y2Nlc3M6IG51bWJlcjtcclxuICAgIHByb2JhYmlsaXR5UmVhc29uOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIHN0YXR1czogc3RyaW5nO1xyXG4gICAgcG9zdEV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIGV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIHByZUV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIHJldm9sdXRpb25OdW1iZXI6IHN0cmluZztcclxuICAgIG51bWJlck9mQ29sbGVjdHM6IG51bWJlcjtcclxuICAgIHF1YWxpdHk6IG51bWJlcjtcclxuICAgIGlzUHJpbWFyeTogYm9vbGVhbjtcclxuICAgIHdpbmRvd1R5cGU6IHN0cmluZztcclxuICAgIGdyb3VwQnlOYW1lOiBzdHJpbmc7XHJcbiAgICB1c2VyOiBzdHJpbmdcclxufSIsImV4cG9ydCBjbGFzcyBTcHNFdmVudHtcclxuICAgIHBsYW5JZDogc3RyaW5nO1xyXG4gICAgYXNzZXROYW1lOiBzdHJpbmc7XHJcbiAgICB0YXNrVHlwZTogc3RyaW5nO1xyXG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgICBzdG9wVGltZTogc3RyaW5nO1xyXG4gICAgY2hpbGRBc3NldHM6IGFueVtdO1xyXG4gIH1cclxuICAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGNhbkFjdGl2YXRlKFxyXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdndWFyZCAtIG5vdCBsb2dnZWQgaW4hIScpO1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFRvTG9naW5QYWdlKCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gdGhpcyBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgc28gdGhhdCB0aGlzIGZpbGUgZG9lc24ndCBnZW5lcmF0ZSBhIGNvbXBpbGVyIGVycm9yLlxyXG4vLyBvbmNlIHNvbWUgcmVhbCBlbnVtcyBoYXZlIGJlZW4gYWRkZWQgdG8gdGhpcyBmaWxlIHRoaXMgZW51bSBjYW4gYmUgZGVsZXRlZFxyXG5leHBvcnQgZW51bSBTYW1wbGUge3JlZCA9IDEsIHdoaXRlID0gMiwgYmx1ZSA9IDN9XHJcblxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogSldUIEludGVyY2VwdG9yOiBJbnNlcnQgSldUIGludG8gaGVhZGVyIG9mIGFsbCByZXF1ZXN0c1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEp3dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGlmIChyZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEF1dGhlbnRpY2F0aW9uU2VydmljZVByZWZpeCgpKSA9PT0gLTEpIHtcclxuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgIC8vIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAvLyAgICd0b2tlbic6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnRva2VuLFxyXG4gICAgICAgIC8vICAgJ1VzZXJOYW1lJzogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXJcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLnNldCgndG9rZW4nLCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS50b2tlbilcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBFcnJvciBJbnRlcmNlcHRvcjogSGFuZGxlIEhUVFAgZXJyb3JzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAvLyBOT1RFOiBlcnIuc3RhdHVzIGlzIGFsd2F5cyAwLiBSZXNlYXJjaCBwb2ludHMgdG8gYmFja2VuZCBzZXJ2ZXIgbm90IGF0dGFjaGluZyBDT1JTIGhlYWRlcnMgdG8gcmVzcG9uc2VcclxuICAgICAgICAvLyBzZWUgdGhpcyBhcnRpY2xlIGh0dHBzOi8vZGF2ZWNlZGRpYS5jb20vYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luLWNvcnMtZXJyb3JzLWluLWFuZ3VsYXIvXHJcbiAgICAgICAgLy8gYW5kIHRoaXMgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk1NDcwMDMvYW5ndWxhcmpzLW5vLWFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbi1oZWFkZXItaXMtcHJlc2VudC1vbi10aGUtcmVxdWVzdGVkLXJcclxuICAgICAgICAvLyBhZG4gdGhpcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0hlYWRlcnMvQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXHJcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgLy8gYXV0byBsb2dvdXQgaWYgNDAxIHJlc3BvbnNlIHJldHVybmVkIGZyb20gYXBpXHJcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmVycm9yKGBFcnJvckludGVyY2VwdG9yOiBlcnIuc3RhdHVzID0gJHtlcnIuc3RhdHVzfWAsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IGVyci5lcnJvci5tZXNzYWdlIHx8IGVyci5zdGF0dXNUZXh0O1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBEYXRhIFJlY29yZGVyIEludGVyY2VwdG9yXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FjaGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUodGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+PiBDQUNIRSBJTlRFUkNFUFRPUmAsIGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9KSk7XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tCYWNrZW5kSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgc2xlZXAobWlsbGlzZWNzKSB7XHJcbiAgICAgICAgbGV0IGluaXRpYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB3aGlsZSAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5pdGlhdGlvbikgPCBtaWxsaXNlY3MpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIC8vIHdyYXAgaW4gZGVsYXllZCBvYnNlcnZhYmxlIHRvIHNpbXVsYXRlIHNlcnZlciBhcGkgY2FsbFxyXG4gICAgICAgIHJldHVybiBvZihudWxsKS5waXBlKG1lcmdlTWFwKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGV4YW1wbGUgR0VUIGVuZHBvaW50XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC5lbmRzV2l0aCgnL2V4YW1wbGVFbmRwb2ludCcpICYmIHJlcXVlc3QubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1PQ0sgJHtyZXF1ZXN0LnVybH1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhT2JqID0gWyB7IGlkOiAnMTIzNCcsIGRhdGE6ICdkYXRhIGdvZXMgaGVyZScgfSwgeyBpZDogJzU2NzgnLCBkYXRhOiAnZGF0YSBnb2VzIGhlcmUnIH0gXTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7IGVycm9yOiB7IG1lc3NhZ2U6ICdFcnJvcicgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZXhhbXBsZSBHRVQgZW5kcG9pbnQgd2l0aCBpZFxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC51cmwubWF0Y2goL1xcL2V4YW1wbGVFbmRwb2ludFxcL1xcZCskLykgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTU9DSyAke3JlcXVlc3QudXJsfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybFBhcnRzID0gcmVxdWVzdC51cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhT2JqID0geyBpZDogaWQsIGRhdGE6ICdkYXRhIGdvZXMgaGVyZScgfTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7IGVycm9yOiB7IG1lc3NhZ2U6ICdFcnJvcicgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZXhhbXBsZSBQT1NUIGVuZHBvaW50XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC5lbmRzV2l0aCgnL2V4YW1wbGVFbmRwb2ludCcpICYmIHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXFCb2R5ID0gcmVxdWVzdC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1PQ0sgJHtyZXF1ZXN0LnVybH1gLCByZXFCb2R5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXFCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoeyBzdGF0dXM6IDIwMCwgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxQm9keSkgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7IGVycm9yOiB7IG1lc3NhZ2U6ICdFcnJvcicgfSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcGFzcyB0aHJvdWdoIGFueSByZXF1ZXN0cyBub3QgaGFuZGxlZCBhYm92ZVxyXG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcblxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBNb2NrQmFja2VuZFByb3ZpZGVyID0ge1xyXG4gICAgLy8gdXNlIGZha2UgYmFja2VuZCBpbiBwbGFjZSBvZiBIdHRwIHNlcnZpY2UgZm9yIGJhY2tlbmQtbGVzcyBkZXZlbG9wbWVudFxyXG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICB1c2VDbGFzczogTW9ja0JhY2tlbmRJbnRlcmNlcHRvcixcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycywgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtZXM2JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLy8geW91IGNhbiBnZXQgbW9yZSB2YWxpZGF0b3JzIGZyb20gaGVyZSBodHRwczovL2dpdGh1Yi5jb20veXV5YW5nMDQxMDYwMTIwL25nMi12YWxpZGF0aW9uXHJcblxyXG5cclxuLy8gdGhpcyB2YWxpZGF0b3IgbXVzdCBiZSBhcHBsaWVkIHRvIGEgRm9ybUdyb3VwIGJlY2F1c2UgaXQgaXMgY29tcGFyaW5nIDIgY29udHJvbHNcclxuZnVuY3Rpb24gZGF0ZVJhbmdlVmFsaWRhdG9yKHN0YXJ0RGF0ZUNvbnRyb2xTdHJpbmc6IHN0cmluZywgZW5kRGF0ZUNvbnRyb2xTdHJpbmc6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoZ3JvdXA6IEZvcm1Hcm91cCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZUNvbnRyb2wgPSBncm91cC5jb250cm9sc1tzdGFydERhdGVDb250cm9sU3RyaW5nXTtcclxuICAgICAgICBsZXQgZW5kRGF0ZUNvbnRyb2wgPSBncm91cC5jb250cm9sc1tlbmREYXRlQ29udHJvbFN0cmluZ107XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGA+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4gRGF0ZVJhbmdlVmFsaWRhdG9yKCR7c3RhcnREYXRlQ29udHJvbFN0cmluZ30sICR7ZW5kRGF0ZUNvbnRyb2xTdHJpbmd9KTogZnJvbS52YWx1ZSA9ICR7c3RhcnREYXRlQ29udHJvbC52YWx1ZX0sIHRvLnZhbHVlID0gJHtlbmREYXRlQ29udHJvbC52YWx1ZX1gKTtcclxuICAgICAgICBpZiAobW9tZW50KHN0YXJ0RGF0ZUNvbnRyb2wudmFsdWUpLmlzQWZ0ZXIoZW5kRGF0ZUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdkYXRlUmFuZ2UnOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZUxlc3NUaGFuVmFsaWRhdG9yKGNvbXBhcmVDb250cm9sU3RyaW5nOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnBhcmVudCkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgY29tcGFyZURhdGVDb250cm9sID0gY29udHJvbC5wYXJlbnQuY29udHJvbHNbY29tcGFyZUNvbnRyb2xTdHJpbmddO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGA+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4gRGF0ZUxlc3NUaGFuVmFsaWRhdG9yKCR7Y29tcGFyZUNvbnRyb2xTdHJpbmd9KTogZnJvbS52YWx1ZSA9ICR7dGhpc0RhdGVDb250cm9sLnZhbHVlfSwgdG8udmFsdWUgPSAke2NvbXBhcmVEYXRlQ29udHJvbC52YWx1ZX1gKTtcclxuICAgICAgICBpZiAobW9tZW50KGNvbnRyb2wudmFsdWUpLmlzQWZ0ZXIoY29tcGFyZURhdGVDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnZGF0ZUxlc3NUaGFuJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVHcmVhdGVyVGhhblZhbGlkYXRvcihjb21wYXJlQ29udHJvbFN0cmluZzogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmICghY29udHJvbC5wYXJlbnQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbGV0IGNvbXBhcmVEYXRlQ29udHJvbCA9IGNvbnRyb2wucGFyZW50LmNvbnRyb2xzW2NvbXBhcmVDb250cm9sU3RyaW5nXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+IERhdGVHcmVhdGVyVGhhblZhbGlkYXRvcigke2NvbXBhcmVDb250cm9sU3RyaW5nfSk6IGZyb20udmFsdWUgPSAke3RoaXNEYXRlQ29udHJvbC52YWx1ZX0sIHRvLnZhbHVlID0gJHtjb21wYXJlRGF0ZUNvbnRyb2wudmFsdWV9YCk7XHJcbiAgICAgICAgaWYgKG1vbWVudChjb250cm9sLnZhbHVlKS5pc0JlZm9yZShjb21wYXJlRGF0ZUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdkYXRlR3JlYXRlclRoYW4nOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWF4TnVtTGluZXNWYWxpZGF0b3IobWF4TGluZXM6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcclxuICAgICAgICBpZiAoXy5pc05pbChtYXhMaW5lcykgfHwgIV8uaXNOaWwoVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBudW1MaW5lcyA9IChjb250cm9sLnZhbHVlIGFzIHN0cmluZykuc3BsaXQoJ1xcbicpLmxlbmd0aDtcclxuICAgICAgICBpZiAobnVtTGluZXMgPiBtYXhMaW5lcykge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnbWF4TnVtTGluZXMnOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbHQobHRQYXJhbTogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9PiB7XHJcbiAgICAgICAgaWYgKF8uaXNOaWwobHRQYXJhbSkgfHwgIV8uaXNOaWwoVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdjogbnVtYmVyID0gK2NvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHYgPCArbHRQYXJhbSA/IG51bGwgOiB7IGx0OiB0cnVlIH07XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tVmFsaWRhdG9ycyA9IHtcclxuICAgIGRhdGVSYW5nZVZhbGlkYXRvcixcclxuICAgIGRhdGVMZXNzVGhhblZhbGlkYXRvcixcclxuICAgIGRhdGVHcmVhdGVyVGhhblZhbGlkYXRvcixcclxuICAgIG1heE51bUxpbmVzVmFsaWRhdG9yLFxyXG4gICAgbHRcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTmdNb2R1bGUiLCJNYXRBdXRvY29tcGxldGVNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRCdXR0b25Ub2dnbGVNb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRDaGlwc01vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiTWF0Qm90dG9tU2hlZXRNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFByb2dyZXNzQmFyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiUGlwZSIsIkRvbVNhbml0aXplciIsImNsYXNzVG9QbGFpbiIsInRzbGliXzEuX19kZWNvcmF0ZSIsIkV4cG9zZSIsImlzRGV2TW9kZSIsIkluamVjdGFibGUiLCJIdHRwSGVhZGVycyIsInRhcCIsIm1hcCIsIkh0dHBDbGllbnQiLCJDb21wb25lbnQiLCJGb3JtQnVpbGRlciIsIklucHV0IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFdmVudEVtaXR0ZXIiLCJPdXRwdXQiLCJSb3V0ZXIiLCJWYWxpZGF0b3JzIiwiQWN0aXZhdGVkUm91dGUiLCJWaWV3Q2hpbGQiLCJvZiIsIk9ic2VydmFibGUiLCJvYnNlcnZhYmxlVGhyb3dFcnJvciIsImh0dHBPcHRpb25zIiwiZm9ya0pvaW4iLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsImRlYm91bmNlVGltZSIsInN3aXRjaE1hcCIsImVtcHR5IiwiTmdDb250cm9sIiwiT3B0aW9uYWwiLCJTZWxmIiwiU3ViamVjdCIsImNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSIsIk1hdEZvcm1GaWVsZENvbnRyb2wiLCJEYXRlVGltZUFkYXB0ZXIiLCJNb21lbnREYXRlVGltZUFkYXB0ZXIiLCJPV0xfREFURV9USU1FX0xPQ0FMRSIsIk9XTF9EQVRFX1RJTUVfRk9STUFUUyIsIkZvY3VzTW9uaXRvciIsIkVsZW1lbnRSZWYiLCJIb3N0QmluZGluZyIsIk1hdEljb25SZWdpc3RyeSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJPd2xEYXRlVGltZU1vZHVsZSIsIk93bE5hdGl2ZURhdGVUaW1lTW9kdWxlIiwiV2ViU29ja2V0U3ViamVjdCIsInJldHJ5IiwiXy5pc05pbCIsIkJlaGF2aW9yU3ViamVjdCIsIlRpdGxlIiwiY2F0Y2hFcnJvciIsInRocm93RXJyb3IiLCJIdHRwUmVzcG9uc2UiLCJtZXJnZU1hcCIsIkhUVFBfSU5URVJDRVBUT1JTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrREE7UUFBQTtTQXVGOEI7O29CQXZGN0JBLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLDhCQUFxQjs0QkFDckJDLHdCQUFlOzRCQUNmQyw4QkFBcUI7NEJBQ3JCQyxzQkFBYTs0QkFDYkMsMEJBQWlCOzRCQUNqQkMsdUJBQWM7NEJBQ2RDLHVCQUFjOzRCQUNkQyw2QkFB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