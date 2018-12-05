import { NgModule, Pipe, Injectable, isDevMode, Component, ViewEncapsulation, Input, Optional, Self, EventEmitter, Output, ViewChild, ElementRef, defineInjectable, inject, HostBinding } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatBottomSheetModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatFormFieldControl, MatIconRegistry } from '@angular/material';
import moment from 'moment-es6';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { __decorate, __metadata } from 'tslib';
import { Expose, classToPlain } from 'class-transformer';
import { HttpClient, HttpHeaders, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { map, tap, debounceTime, switchMap, retry, catchError, mergeMap } from 'rxjs/operators';
import { FormBuilder, Validators, FormControl, FormGroup, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError, Observable, of, forkJoin, empty, Subject, BehaviorSubject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MomentDateTimeAdapter } from 'ng-pick-datetime-moment';
import { MatIconRegistry as MatIconRegistry$1 } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebSocketSubject } from 'rxjs/webSocket';
import { isNil } from 'lodash';

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
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatTableModule,
                    MatBottomSheetModule,
                    // MatDatepickerModule,
                    MatDialogModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    // MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    // MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    // MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    // MatSlideToggleModule,
                    // MatSliderModule,
                    // MatSnackBarModule,
                    // MatSortModule,
                    // MatStepperModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                ],
                exports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatTableModule,
                    // MatDatepickerModule,
                    MatDialogModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    // MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    // MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    // MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    // MatSlideToggleModule,
                    // MatSliderModule,
                    // MatSnackBarModule,
                    // MatSortModule,
                    // MatStepperModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
This pipe will format a date and convert it to UTC unless 'forceUtc' parameter
is set to false. If the date is empty, null, or invalid it will return 'defaultVal'
*/
class DateFormatPipe {
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
class TruncatePipe {
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
class OrderByPipe {
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
class HighlightPipe {
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
// Removes an item from a list (array) of items.  Mostly used to remove a string
// from a list, it will also work to remove an object from a list of objects
// as long as there is a 'name' property on the object
class RemoveItemPipe {
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
const CustomPipes = {
    DateFormatPipe,
    TruncatePipe,
    OrderByPipe,
    RemoveItemPipe
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Annotation {
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
__decorate([
    Expose({ name: 'annotationId' }),
    __metadata("design:type", String)
], Annotation.prototype, "id", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogService {
    constructor() {
        this.isLocalhost = false;
        this.isDevMode = false;
        this.isLocalhost = window.location.hostname.toLocaleLowerCase() === 'localhost';
        this.isDevMode = isDevMode();
    }
    // displays in the console. will not display in a production build
    /**
     * @param {...?} msg
     * @return {?}
     */
    debug(...msg) {
        if (!this.isDevMode) {
            return;
        }
        console.log(...msg);
    }
    // only display if running on localhost
    /**
     * @param {...?} msg
     * @return {?}
     */
    local(...msg) {
        if (!this.isLocalhost) {
            return;
        }
        console.log(...msg);
    }
    /**
     * @param {...?} msg
     * @return {?}
     */
    info(...msg) {
        console.log(...msg);
    }
    /**
     * @param {...?} msg
     * @return {?}
     */
    warn(...msg) {
        console.warn(...msg);
    }
    /**
     * @param {...?} msg
     * @return {?}
     */
    error(...msg) {
        console.error(...msg);
    }
    /**
     * @param {?} background
     * @param {?} msg
     * @return {?}
     */
    highlight(background, msg) {
        console.log(`%c ${msg} `, `background: ${background}; color: #000; font-weight: bold;`);
    }
}
LogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LogService.ctorParameters = () => [];
/** @nocollapse */ LogService.ngInjectableDef = defineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
class Util {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class AnnotationService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * GET /annotation/{objectId}
     * get a list of Annotations
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    getAnnotations(id) {
        this.logService.debug('AnnotationService.getAnnotations()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, `/annotation/${id}`);
        return this.http.get(url, httpOptions).pipe(tap(res => this.logService.debug(`    retreived annotation list`, res)), map(res => res.map(item => new Annotation(item))));
    }
    /**
     * ***********************************************************************
     * POST /annotation
     * create a new event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    createAnnotation(annotation) {
        this.logService.debug('AnnotationService.createAnnotation()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/annotation');
        this.logService.debug(`    POST ${url}`, annotation);
        return this.http.post(url, annotation.serialize(), httpOptions).pipe(tap(res => this.logService.debug(`    created annotation`, res)));
    }
    /**
     * ***********************************************************************
     * PUT /annotation
     * update event
     * ************************************************************************
     * @param {?} annotation
     * @return {?}
     */
    updateAnnotation(annotation) {
        this.logService.debug('AnnotationService.updateAnnotation()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/annotation');
        this.logService.debug(`    PUT ${url}`, annotation);
        return this.http.put(url, annotation.serialize(), httpOptions).pipe(tap(res => this.logService.debug(`    updated annotation`, res)), map(res => new Annotation(res)));
    }
}
AnnotationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AnnotationService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ AnnotationService.ngInjectableDef = defineInjectable({ factory: function AnnotationService_Factory() { return new AnnotationService(inject(HttpClient), inject(LogService)); }, token: AnnotationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnnotationComponent {
    /**
     * @param {?} formBuilder
     * @param {?} annotationService
     * @param {?} logService
     */
    constructor(formBuilder, annotationService, logService) {
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
    ngOnInit() {
        // call function to update the annotations whenever data changes
        this.annotationsFormGroup.valueChanges.subscribe(x => {
            if (this.annotationsFormGroup.dirty && this.annotationsFormGroup.valid) {
                this.updateAnnotations();
                this.annotationsFormGroup.markAsPristine();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.logService.debug('AnnotationsComponent.ngOnChanges()');
        if (this.objectId) {
            // Get annotations for this event and populate the controls. If no annotations exist, create them
            this.annotationService.getAnnotations(this.objectId).subscribe(annotations => {
                this.factAnnotations = annotations.filter(x => x.noteType.toUpperCase() === 'FACT');
                this.assumptionAnnotations = annotations.filter(x => x.noteType.toUpperCase() === 'ASSUMPTION');
                // Create new fact and assumption annotations if none exist
                if (!this.factAnnotations || this.factAnnotations.length <= 0) {
                    /** @type {?} */
                    let newAnnotation = new Annotation();
                    newAnnotation.objectId = this.objectId;
                    newAnnotation.annotationType = this.annotationType;
                    newAnnotation.noteType = 'Fact';
                    newAnnotation.narrative = '';
                    this.factAnnotations.push(newAnnotation);
                }
                this.annotationsFormGroup.controls['factsCtrl'].setValue(this.factAnnotations[0].narrative);
                if (!this.assumptionAnnotations || this.assumptionAnnotations.length <= 0) {
                    /** @type {?} */
                    let newAnnotation = new Annotation();
                    newAnnotation.objectId = this.objectId;
                    newAnnotation.annotationType = this.annotationType;
                    newAnnotation.noteType = 'Assumption';
                    newAnnotation.narrative = '';
                    this.assumptionAnnotations.push(newAnnotation);
                }
                this.annotationsFormGroup.controls['assumptionsCtrl'].setValue(this.assumptionAnnotations[0].narrative);
            });
        }
        else {
            throw new Error(`AnnotationComponent: required input parameter 'objectId' is undefined`);
        }
    }
    /**
     * @return {?}
     */
    updateAnnotations() {
        this.logService.debug('AnnotationsComponent::updateAnnotations()');
        /** @type {?} */
        let factsCtrl = this.annotationsFormGroup.controls['factsCtrl'];
        /** @type {?} */
        let assumptionsCtrl = this.annotationsFormGroup.controls['assumptionsCtrl'];
        if (factsCtrl.dirty) {
            this.factAnnotations[0].narrative = factsCtrl.value;
            // if the annotationId is empty that indicates that this is a new annotation
            if (!this.factAnnotations[0].id) {
                this.annotationService.createAnnotation(this.factAnnotations[0]).subscribe(res => {
                    this.factAnnotations[0] = res;
                });
            }
            else {
                this.annotationService.updateAnnotation(this.factAnnotations[0]).subscribe(res => {
                    this.factAnnotations[0] = res;
                });
            }
        }
        if (assumptionsCtrl.dirty) {
            this.assumptionAnnotations[0].narrative = assumptionsCtrl.value;
            if (!this.assumptionAnnotations[0].id) {
                this.annotationService.createAnnotation(this.assumptionAnnotations[0]).subscribe(res => {
                    this.assumptionAnnotations[0] = res;
                });
            }
            else {
                this.annotationService.updateAnnotation(this.assumptionAnnotations[0]).subscribe(res => {
                    this.assumptionAnnotations[0] = res;
                });
            }
        }
    }
}
AnnotationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-annotations',
                template: "<form [formGroup]=\"annotationsFormGroup\" fxLayout=\"column\">\r\n  <!-- Facts -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"factsCtrl\"></textarea>\r\n    <mat-label>Facts</mat-label>\r\n  </mat-form-field>\r\n\r\n  <!-- Assumptions -->\r\n  <mat-form-field appearance=\"fill\">\r\n    <textarea matInput formControlName=\"assumptionsCtrl\"></textarea>\r\n    <mat-label>Assumptions</mat-label>\r\n  </mat-form-field>\r\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
AnnotationComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AnnotationService },
    { type: LogService }
];
AnnotationComponent.propDecorators = {
    objectId: [{ type: Input }],
    annotationType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageNotFoundComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PageNotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-page-not-found',
                template: "<div>\r\n  <h1>Page Not Found!</h1>\r\n</div>\r\n",
                styles: ["div{padding-top:100px;text-align:center}"]
            }] }
];
/** @nocollapse */
PageNotFoundComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressComponent {
    /**
     * @param {?} logService
     */
    constructor(logService) {
        this.logService = logService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hideComponent();
    }
    /**
     * @return {?}
     */
    hideComponent() {
        /** @type {?} */
        let el = document.getElementById('progressContainer');
        if (el) {
            el.style.display = 'none';
            this.logService.debug('set style of "progressContainer" to "none"');
        }
        else {
            this.logService.debug('unable to find element "progressContainer"');
        }
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-progress',
                template: "<!-- <div *ngIf=\"isSpinnerVisible\" id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> -->\r\n  <div id=\"progressContainer\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div>\r\n    <span>\r\n      <mat-spinner diameter=\"64\"></mat-spinner>\r\n    </span>\r\n  </div>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ags-lib-progress #progressContainer{position:absolute;background:rgba(42,42,42,.5);height:100%;width:100%;z-index:100;display:flex}ags-lib-progress #progressContainer div{margin:auto}ags-lib-progress #progressContainer div span>mat-spinner>svg>circle{stroke:#fff;stroke-width:5px;opacity:.75}"]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [
    { type: LogService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TitleComponent {
    constructor() {
        this.onCancel = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onClick() {
        this.onCancel.emit();
    }
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-title',
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"title-container\">\r\n  <!-- Panel title -->\r\n  <div>\r\n    <h2 class=\"mat-title\">{{title}}</h2>\r\n  </div>\r\n  <div>\r\n    <button mat-icon-button matTooltip=\"Close\" (click)=\"onClick()\" >\r\n      <mat-icon>clear</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                styles: [".title-container{margin-bottom:15px}.title-container .mat-title{margin:0}"]
            }] }
];
/** @nocollapse */
TitleComponent.ctorParameters = () => [];
TitleComponent.propDecorators = {
    title: [{ type: Input }],
    onCancel: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationRequest {
    /**
     * @param {?} json
     */
    constructor(json) {
        this.userName = json.userName;
        this.password = json.password;
    }
}
class AuthenticationResponse {
    /**
     * @param {?} json
     */
    constructor(json) {
        this.authenticated = json.authenticated;
        this.displayName = json.displayName;
        this.reason = json.reason;
        this.token = json.token;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationService {
    /**
     * @param {?} http
     * @param {?} router
     * @param {?} logService
     */
    constructor(http, router, logService) {
        this.http = http;
        this.router = router;
        this.logService = logService;
        this.serviceUrl = '';
        this.loginRoute = '';
        this.AUTHENICATE = '/authenticate';
        this.GET_DOMAINS = '/domain';
        this.HTTP_OPTIONS = {
            headers: new HttpHeaders({
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
    init(serviceUrl, loginRoute = '/login') {
        this.serviceUrl = serviceUrl;
        this.loginRoute = loginRoute;
        this.username = this.getUsernameFromStorage();
        this.isCurrentlyLoggedIn = ((this.username != null) && (this.username.length > 0));
    }
    /**
     * @return {?}
     */
    redirectToLoginPage() {
        this.router.navigateByUrl(this.loginRoute);
    }
    /**
     * @return {?}
     */
    getAuthenticationServicePrefix() {
        return this.serviceUrl;
    }
    /**
     * @return {?}
     */
    getUsernameFromStorage() {
        /** @type {?} */
        let username = '';
        /** @type {?} */
        let userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('userName') &&
            (userInfo.userName.length > 0)) {
            username = userInfo.userName;
        }
        return username;
    }
    /**
     * @return {?}
     */
    getDisplayNameFromStorage() {
        /** @type {?} */
        let displayName = '';
        /** @type {?} */
        let userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('displayName') &&
            (userInfo.displayName.length > 0)) {
            displayName = userInfo.displayName;
        }
        return displayName;
    }
    /**
     * @return {?}
     */
    getTokenFromStorage() {
        /** @type {?} */
        let token = '';
        /** @type {?} */
        let userInfo = this.getUserInfoFromStorage();
        if (userInfo && userInfo.hasOwnProperty('token') &&
            (userInfo.token.length > 0)) {
            token = userInfo.token;
        }
        return token;
    }
    /**
     * @return {?}
     */
    getUserInfoFromStorage() {
        /** @type {?} */
        let userInfo;
        userInfo = sessionStorage.getItem(this.USERINFO_KEY);
        return JSON.parse(userInfo);
    }
    /**
     * @param {?} userInfo
     * @return {?}
     */
    putUserInfoInStorage(userInfo) {
        sessionStorage.setItem(this.USERINFO_KEY, userInfo);
    }
    /**
     * @return {?}
     */
    get isLoggedIn() {
        return this.isCurrentlyLoggedIn;
    }
    /**
     * @return {?}
     */
    get currentUser() {
        return this.getUsernameFromStorage();
    }
    /**
     * @return {?}
     */
    get displayName() {
        return this.getDisplayNameFromStorage();
    }
    /**
     * @return {?}
     */
    get token() {
        return this.getTokenFromStorage();
    }
    /**
     * @return {?}
     */
    getAllDomains() {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_DOMAINS);
        this.logService.debug('AuthenticationService.getAllDomains() - url = ' + url);
        return this.http.get(url, this.HTTP_OPTIONS).pipe(tap(x => this.logService.debug(`retreived domain list`)), map(res => (/** @type {?} */ (res.strings))));
    }
    /**
     * @param {?} userInfo
     * @param {?} domain
     * @return {?}
     */
    logIn(userInfo, domain) {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.AUTHENICATE, domain);
        /** @type {?} */
        let authenticationRequest = new AuthenticationRequest(userInfo);
        return this.http.post(url, authenticationRequest, this.HTTP_OPTIONS)
            .pipe(tap(response => {
            this.logService.debug('got authentication response ' + JSON.stringify(response));
            /** @type {?} */
            let authenticationResponse = new AuthenticationResponse(response);
            if (authenticationResponse.authenticated) {
                this.putUserInfoInStorage(JSON.stringify({
                    userName: userInfo.userName,
                    displayName: authenticationResponse.displayName,
                    token: authenticationResponse.token,
                }));
                this.isCurrentlyLoggedIn = true;
            }
        }, error => {
            this.logService.warn('Error authenticating.  [' + error + ']');
        }));
    }
    /**
     * @return {?}
     */
    logOut() {
        localStorage.removeItem(this.USERINFO_KEY);
        this.username = '';
        this.isCurrentlyLoggedIn = false;
        sessionStorage.clear();
        this.redirectToLoginPage();
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: Router },
    { type: LogService }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = defineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(inject(HttpClient), inject(Router), inject(LogService)); }, token: AuthenticationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} formBuilder
     * @param {?} router
     * @param {?} route
     * @param {?} logService
     * @param {?} authenticationService
     */
    constructor(formBuilder, router, route, logService, authenticationService) {
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
    ngOnInit() {
        // this.appName = this.route.snapshot.data['appName'];
        this.route.queryParams.subscribe(params => {
            this.returnUrl = params['return'] || '/';
        });
        /** @type {?} */
        let component = this;
        this.authenticationService.getAllDomains()
            .subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                component.domainList.push(response[i]);
            }
            component.selectedDomain = component.domainList[0];
        });
        this.createForm();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Set the focus to the username (mwt)
        this.username.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    createForm() {
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
                    Validators.required,
                ]],
        });
    }
    /**
     * @return {?}
     */
    logIn() {
        this.submitted = true;
        /** @type {?} */
        let username = this.loginForm.controls.username.value;
        /** @type {?} */
        let password = this.loginForm.controls.password.value;
        this.authenticationService.logIn({
            userName: username,
            password: password
        }, this.selectedDomain)
            .subscribe(res => {
            /** @type {?} */
            let authenticationResponse = new AuthenticationResponse(res);
            if (!authenticationResponse.authenticated) {
                this.loginFailed = true;
            }
            else {
                this.router.navigateByUrl(this.returnUrl);
            }
        }, err => {
            this.logService.debug('Error occured while authenticating.  ' + JSON.stringify(err));
            this.loginFailed = true;
        });
    }
    /**
     * @return {?}
     */
    handleOnFocus() {
        if (this.submitted) {
            this.submitted = false;
            this.loginFailed = false;
            this.loginForm.markAsPristine();
            this.loginForm.markAsUntouched();
        }
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-login',
                template: "<mat-card>\r\n\r\n  <!-- class for styling only -->\r\n  <form class=\"loginForm\" [formGroup]=\"loginForm\" #inputForm=\"ngForm\" (ngSubmit)=\"logIn()\" fxLayout=\"column\">\r\n\r\n    <div fxLayoutAlign=\"space-between start\">\r\n      <img id=\"logo\" src=\"assets/images/Boeing-logo-dark.svg\">\r\n      <h4 class=\"mat-subheading-1\">{{appName}}</h4>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"fill\" hideRequiredMarker=\"true\">\r\n      <input matInput #username formControlName=\"username\" (focus)=\"handleOnFocus()\">\r\n      <mat-label>Username</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <input matInput formControlName=\"password\" (focus)=\"handleOnFocus()\" type=\"password\">\r\n      <mat-label>Password</mat-label>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-select [(value)]=\"selectedDomain\" formControlName=\"domain\">\r\n        <mat-option *ngFor=\"let domain of domainList\" [value]=\"domain\">\r\n          {{domain}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-label>Domain</mat-label>\r\n    </mat-form-field>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"left\">\r\n      <button mat-flat-button id=\"submit\" type=\"submit\" [disabled]=\"username.value.length === 0\">\r\n        SIGN IN\r\n      </button>\r\n    </div>\r\n    \r\n    <!-- Invalid login message. -->\r\n    <div [hidden]=\"!(submitted && loginFailed)\">\r\n      <mat-error id=\"formError\">{{ERROR_MESSAGES.loginMessage}}</mat-error>\r\n    </div>\r\n\r\n  </form>\r\n</mat-card>",
                styles: [".mat-form-field{width:100%}.mat-error{padding:10px;text-align:center}.mat-card{background:inherit}button#submit{width:100%}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Router },
    { type: ActivatedRoute },
    { type: LogService },
    { type: AuthenticationService }
];
LoginComponent.propDecorators = {
    appName: [{ type: Input }],
    username: [{ type: ViewChild, args: ['username',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptyComponent {
    constructor() { }
}
EmptyComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-empty',
                template: ''
            }] }
];
/** @nocollapse */
EmptyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Capability {
    /**
     * @param {?=} json
     */
    constructor(json) {
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
}
class CapabilityMap {
    /**
     * @param {?=} json
     */
    constructor(json) {
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
}
class Observability {
    /**
     * @param {?=} json
     */
    constructor(json) {
        if (json != null) {
            this.observingCapabilityMapId = json.observingCapabilityMapId;
            this.observingCapabilityType = json.observingCapabilityType;
            this.usedCapabilityMapId = json.usedCapabilityMapId;
            this.usedCapabilityType = json.usedCapabilityType;
            this.description = json.description;
            this.capabilityDomain = json.capabilityDomain;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Vulnerability {
    /**
     * @param {?=} json
     */
    constructor(json) {
        if (json) {
            this.fromJson(json);
        }
    }
    /**
     * @param {?} json
     * @return {?}
     */
    fromJson(json) {
        this.id = json.vulnerabilityId;
        this.name = json.vulnerabilityName;
        this.description = json.description;
        this.confidence = json.confidence;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Domain {
    /**
     * @param {?=} json
     */
    constructor(json) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:no-use-before-declare */
class Country {
    /**
     * @param {?=} json
     */
    constructor(json) {
        if (json) {
            this.fromJson(json);
        }
    }
    /**
     * @param {?} json
     * @return {?}
     */
    fromJson(json) {
        this.code = json[0];
        this.name = json[1];
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this);
    }
}
class Entity {
    /**
     * @param {?} json
     */
    constructor(json) {
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
        this.capabilities = json.capabilities ? json.capabilities.map(x => new Capability(x)) : [];
        this.vulnerabilities = json.vulnerabilities ? json.vulnerabilities.map(x => new Vulnerability(x)) : [];
        this.domain = json.domain ? new Domain(json.domain) : new Domain();
        this.agsEntityId = json.agsEntityId;
    }
}
class PartialEntity {
    /**
     * @param {?} json
     */
    constructor(json) {
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
        this.groups = json.groups ? json.groups.map(x => new Group(x)) : [];
        this.capabilityTypes = json.capabilityTypes ? json.capabilityTypes : [];
    }
}
class Group {
    /**
     * @param {?=} json
     */
    constructor(json) {
        this.groupName = '';
        this.groupId = '';
        this.groupName = json.groupName ? json.groupName : json.name;
        this.entityCount = json.entityCount;
        this.groupId = json.groupId ? json.groupId : json.id;
        this.name = json.name ? json.name : json.groupName;
        this.id = json.id ? json.id : json.groupId;
    }
}
// BaseEntity class is only intended to be used as a helper class for service calls.
class BaseEntity {
    /**
     * @param {?} entity
     */
    constructor(entity) {
        this.agsEntityId = entity.agsEntityId;
        this.entityType = entity.entityType ? entity.entityType : '';
        this.name = entity.name;
        this.description = entity.description ? entity.description : '';
        this.owner = entity.owner ? entity.owner : '';
        this.sic = entity.sic ? entity.sic : '';
        this.domainType = entity.domain.domainType ? entity.domain.domainType : '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cache Service is an observables based in-memory cache implementation
 * Keeps track of in-flight observables and sets a default expiry for cached values
 */
class CacheService {
    constructor() {
        this.cache = new Map();
        this.DEFAULT_MAX_AGE = 300000;
    }
    /**
     * Gets the value from cache if the key is provided.
     * @param {?} key
     * @param {?=} fallback
     * @param {?=} maxAge
     * @return {?}
     */
    get(key, fallback, maxAge) {
        if (this.hasValidCachedValue(key)) {
            console.log(`%cGetting from cache ${key}`, 'color: green');
            return of(this.cache.get(key).value);
        }
        if (!maxAge) {
            maxAge = this.DEFAULT_MAX_AGE;
        }
        if (fallback && fallback instanceof Observable) {
            console.log(`%c Calling api for ${key}`, 'color: purple');
            return fallback.pipe(tap((value) => { this.set(key, value, maxAge); /*console.log(`%c added ${key}/${JSON.stringify(value).substr(0, 50)} to cache`, 'color: purple');*/ }));
        }
        else {
            return throwError('Requested key is not available in Cache');
        }
    }
    /**
     * Sets the value with key in the cache
     * Notifies all observers of the new value
     * @param {?} key
     * @param {?} value
     * @param {?=} maxAge
     * @return {?}
     */
    set(key, value, maxAge = this.DEFAULT_MAX_AGE) {
        this.cache.set(key, { value: value, expiry: Date.now() + maxAge });
    }
    /**
     * Checks if the a key exists in cache
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.cache.has(key);
    }
    /**
     * Delete cache entry
     * @param {?} key
     * @return {?}
     */
    delete(key) {
        this.cache.delete(key);
    }
    /**
     * Checks if the key exists and has not expired.
     * @private
     * @param {?} key
     * @return {?}
     */
    hasValidCachedValue(key) {
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
    }
}
CacheService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ CacheService.ngInjectableDef = defineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$1 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class EntityService {
    /**
     * @param {?} http
     * @param {?} logService
     * @param {?} cacheService
     */
    constructor(http, logService, cacheService) {
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
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
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
    getAllCapabilityTypes(useCache = true) {
        this.logService.debug('EntityService.getAllCapabilityTypes()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_CAPABILITY_TYPES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived capability type list`, res)), map((res) => {
            return ((/** @type {?} */ (res['strings']))).sort((n1, n2) => {
                return n1.toLowerCase().localeCompare(n2.toLowerCase());
            });
        }));
    }
    /**
     * ***********************************************************************
     * GET /entity/getAllCapabilityMaps
     * get a list of CapabilityMap
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllCapabilityMaps(useCache = true) {
        this.logService.debug('EntityService.getAllCapabilityMaps()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getAllCapabilityMaps');
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareCapabilityMap = (n1, n2) => {
            return n1.capabilityType.toLowerCase().localeCompare(n2.capabilityType.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived capability map list`, res)), map(res => res.map(item => new CapabilityMap(item)).sort(compareCapabilityMap)));
    }
    /**
     * ***********************************************************************
     * GET /entity/getObservabilitiesByUsedCapabilityMapId
     * get a list of Observability
     * ************************************************************************
     * @param {?} capabilityMapId
     * @return {?}
     */
    getObservabilitiesByUsedCapabilityMapId(capabilityMapId) {
        this.logService.debug('EntityService.getObservabilitiesByUsedCapabilityMapId()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getObservabilitiesByUsedCapabilityMapId/', capabilityMapId);
        return this.http.get(url, httpOptions$1).pipe(tap(res => this.logService.debug(`    retreived capability map list`, res)), map(res => res.map(item => new Observability(item))));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllVulnerabilities(useCache = true) {
        this.logService.debug('EntityService.getAllVulnerabilities()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_VULNERABILITIES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareVulnerability = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived all vulnerabilities`, res)), map(res => res.map(item => new Vulnerability(item)).sort(compareVulnerability)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observableType
     * @param {?=} useCache
     * @return {?}
     */
    getCapabilitiesByObservableType(observableType, useCache = true) {
        this.logService.debug('EntityService.getCapabilitiesByObservableType()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getCapabilitiesByObserverType/', observableType);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived capabilities list`, res)), map(res => res.map(item => new CapabilityMap(item))));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllAffiliations(useCache = true) {
        this.logService.debug('EntityService.getAllAffiliations()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_AFFILIATIONS);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived affiliation list`, res)), map(res => {
            return res.map(item => {
                return item.affiliation;
            });
        }));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllCountries(useCache = true) {
        this.logService.debug('EntityService.getAllCountries()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_COUNTRIES);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareCountry = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived country list`, res)), map(res => res.keyValuePairs.map(item => new Country(item)).sort(compareCountry)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @param {?} entityIds
     * @return {?}
     */
    createGroup(group, entityIds) {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.CREATE_GROUP, encodeURIComponent(group.groupName));
        /** @type {?} */
        let data = {
            strings: entityIds,
        };
        return this.http.post(url, data, httpOptions$1).pipe(tap(res => this.logService.debug(`    created group`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?=} useCache
     * @return {?}
     */
    getAllEntityGroups(useCache = true) {
        this.logService.debug('EntityService.getAllEntityGroups()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ALL_ENTITY_GROUPS);
        if (!useCache) {
            this.cacheService.delete(url);
        }
        // compare function
        /** @type {?} */
        let compareGroup = (n1, n2) => {
            return n1.groupName.toLowerCase().localeCompare(n2.groupName.toLowerCase());
        };
        return this.cacheService.get(url, this.http.get(url, httpOptions$1)).pipe(tap(res => this.logService.debug(`    retreived all groups`, res)), map(res => res.keyValuePairs.map(item => new Group(item)).sort(compareGroup)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    getEntity(id) {
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_ENTITY, id);
        this.logService.debug(url);
        return this.http.get(url, httpOptions$1).pipe(tap(res => this.logService.debug(`    retreived entity`, res)), map(x => new Entity(x)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} id
     * @return {?}
     */
    getEntityById(id) {
        this.logService.debug('EntityService.getEntityById()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getEntityById', id);
        return this.http.get(url, httpOptions$1).pipe(tap(res => this.logService.debug(`    retreived entity`, res)), map(x => new Entity(x)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    addEntity(entity) {
        this.logService.debug('EntityService.addEntity()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY);
        return this.http.post(url, entity, httpOptions$1).pipe(tap(res => this.logService.debug(`    updated entity ${entity.name}`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entity
     * @return {?}
     */
    updateEntity(entity) {
        this.logService.debug('EntityService.updateEntity()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.UPDATE_ENTITY, entity.agsEntityId);
        return this.http.put(url, entity, httpOptions$1).pipe(tap(res => this.logService.debug(`    updated entity ${entity.name}`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    addCapabilityMap(capabilityMap) {
        this.logService.debug('EntityService.addCapabilityMap');
        return this.updateCapabilityMap(capabilityMap);
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityMap
     * @return {?}
     */
    updateCapabilityMap(capabilityMap) {
        this.logService.debug('EntityService.updateCapabilityMap()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_CAPABILITY_MAP);
        return this.http.post(url, capabilityMap, httpOptions$1).pipe(tap(res => this.logService.debug(`    updated capability map ${capabilityMap.capabilityType}`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} group
     * @return {?}
     */
    getPartialEntitiesByGroup(group) {
        this.logService.debug('EntityService.getPartialEntitiesByGroup()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.GET_PARTIAL_ENTITIES_BY_GROUP, encodeURIComponent(group));
        // compare function
        /** @type {?} */
        let comparePartialEntity = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.http.get(url, httpOptions$1).pipe(tap(res => this.logService.debug(`    retreived partial entity list by group`, res)), map(res => res.map(item => new PartialEntity(item)).sort(comparePartialEntity)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} strings
     * @param {?=} searchTypes
     * @return {?}
     */
    partialEntitiesBySubstrings(strings, searchTypes = this.DEFAULT_SEARCH_TYPES) {
        this.logService.debug('EntityService.partialEntitiesBySubstrings()');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.PARTIAL_ENTITIES_BY_SUBSTRINGS);
        /** @type {?} */
        let searchParms = {
            searchTypes: searchTypes,
            strings: strings,
        };
        // compare function
        /** @type {?} */
        let comparePartialEntity = (n1, n2) => {
            return n1.name.toLowerCase().localeCompare(n2.name.toLowerCase());
        };
        return this.http.post(url, searchParms, httpOptions$1).pipe(tap(res => this.logService.debug(`    retreived partial entity list by substrings`, res)), map(res => res.map(item => new PartialEntity(item)).sort(comparePartialEntity)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} entityIds
     * @return {?}
     */
    deleteEntities(entityIds) {
        this.logService.debug('EntityService.deleteEntities');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_ENTITIES);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: entityIds
            },
        };
        // return this.http.delete<any>(url, deleteOptions).pipe(
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted entities successfully`)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} capabilityIds
     * @return {?}
     */
    deleteCapabilities(capabilityIds) {
        this.logService.debug('EntityService.deleteCapabilities');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_CAPABILITY_MAPS);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: capabilityIds
            },
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted capabilities successfully`)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    addObservabilities(observabilities) {
        if (!observabilities || observabilities.length === 0) {
            return of('addObservabilities received empty list.  Consider successful.');
        }
        /** @type {?} */
        let addRequests = [];
        observabilities.forEach(o => {
            addRequests.push(this.addObservability(o));
        });
        return forkJoin(...addRequests);
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    addObservability(observability) {
        this.logService.debug('EntityService.addObservability');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.ADD_OR_UPDATE_OBSERVABILITY);
        return this.http.post(url, observability, httpOptions$1).pipe(tap(res => this.logService.debug(`    added observability successfully`, res)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observabilities
     * @return {?}
     */
    deleteObservabilities(observabilities) {
        if (!observabilities || observabilities.length === 0) {
            return of('deleteObservabilities received empty list.  Consider successful.');
        }
        /** @type {?} */
        let deleteRequests = [];
        observabilities.forEach(o => {
            deleteRequests.push(this.deleteObservability(o));
        });
        return forkJoin(...deleteRequests);
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} observability
     * @return {?}
     */
    deleteObservability(observability) {
        this.logService.debug('EntityService.deleteObservability');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_OBSERVABILITY, observability.observingCapabilityMapId, observability.usedCapabilityMapId);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted observability successfully`)));
    }
    /**
     * ***********************************************************************
     *
     *
     * ************************************************************************
     * @param {?} groupIds
     * @return {?}
     */
    deleteGroups(groupIds) {
        this.logService.debug('EntityService.deleteGroups');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, this.DELETE_GROUPS);
        // NOTE:  In order to specify the return type of 'text', the generic
        //        signature had to be removed.
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: (/** @type {?} */ ('text')),
            body: {
                strings: groupIds
            },
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted groups successfully`)));
    }
    // Rethrow error so client can react.
    /**
     * @private
     * @param {?} err
     * @return {?}
     */
    rethrowError(err) {
        // NOTE:  Not an error.
        if (err.status === 200 || err.status === 204) {
            return of(err);
        }
        if (err instanceof Response) {
            return throwError(err);
        }
        return throwError(err);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    loadEntities(group) {
        this.logService.debug('EntityService.loadEntities');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/entity/getPartialEntitiesByGroup/' + encodeURIComponent(group));
        return this.http.get(url, httpOptions$1).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res));
    }
}
EntityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EntityService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService },
    { type: CacheService }
];
/** @nocollapse */ EntityService.ngInjectableDef = defineInjectable({ factory: function EntityService_Factory() { return new EntityService(inject(HttpClient), inject(LogService), inject(CacheService)); }, token: EntityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const INVALID_ENTITY = new PartialEntity({
    name: '',
    agsEntityId: '',
});
class EntitySelectorComponent {
    /**
     * @param {?} ngControl
     * @param {?} entityService
     * @param {?} logService
     */
    constructor(ngControl, entityService, logService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { this.selectedEntity.entityId = value; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @return {?}
     */
    createForm() {
        this.inputCtrl = new FormControl({ value: '', disabled: false }, { /* validators: Validators.required */});
        this.optionsCtrl = new FormControl();
        this.entitySelectionFormGroup = new FormGroup({
            inputCtrl: this.inputCtrl,
            optionsCtrl: this.optionsCtrl,
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this;
        this.inputCtrl.valueChanges.pipe(debounceTime(500), switchMap((term) => {
            /** @type {?} */
            let termType = typeof term;
            if (!term || (termType.localeCompare('string') !== 0) || (term.length < 2)) {
                component.entities = [];
                component.isSearching = false;
                return empty();
            }
            else {
                component.isSearching = true;
                component.entities = [];
                return component.entityService.partialEntitiesBySubstrings(term.split(' '));
            }
        }))
            .subscribe((result) => {
            component.isSearching = false;
            component.entities = result;
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @param {?=} entity
     * @return {?}
     */
    displayEntityAs(entity) {
        if (entity && entity.name) {
            return entity.name.trim();
        }
        else {
            return '';
        }
    }
    // Ensure no list pops up when entering control.
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.entities = [];
        this.hasFocus = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.entitySelectionFormGroup.reset({
            inputCtrl: this.selectedEntity,
        });
        this.hasFocus = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelected(event) {
        this.selectedEntity = event.source.value;
        this.name = this.selectedEntity.name;
        this.id = this.selectedEntity.entityId;
        this.onChange(this.selectedEntity.entityId);
    }
    /**
     * @return {?}
     */
    onMouseDown() {
        this.selectedEntity = INVALID_ENTITY;
        this.name = '';
        this.id = '';
        this.onChange('');
        if (this.selectedEntity !== this.incomingEntity) {
            this.incomingEntity = INVALID_ENTITY;
        }
        this.entities = [];
        this.entitySelectionFormGroup.get('inputCtrl').setValue('', { emitEvent: false });
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getTitle(entity) {
        /** @type {?} */
        let title = '';
        title += 'SCC:  ' + (entity.scc ? entity.scc.trim() : '');
        title += '\nCountry:  ' + (entity.countryName ? entity.countryName.trim() : '');
        title += '\nAffiliation:  ' + (entity.affiliation ? entity.affiliation.trim() : '');
        return title;
    }
    /**
     * @param {?} entity
     * @param {?} searchTerm
     * @return {?}
     */
    formatResults(entity, searchTerm) {
        /** @type {?} */
        let result = '';
        /** @type {?} */
        let terms = searchTerm.split(' ');
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
            let found = true;
            for (let i = 0; i < termsToSearchFor.length; i++) {
                if (stringToSearch.toUpperCase().indexOf(termsToSearchFor[i].toUpperCase()) < 0) {
                    found = false;
                    break;
                }
            }
            return found;
        }
        // Add matching group name(s)
        /** @type {?} */
        let groupText = '';
        /** @type {?} */
        let firstGroup = true;
        entity.groups.forEach(group => {
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
    }
}
EntitySelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-entity-selector',
                template: "<form [formGroup]=\"entitySelectionFormGroup\">\r\n\r\n  <mat-form-field appearance=\"fill\">\r\n    <input type=\"text\" matInput formControlName=\"inputCtrl\" #inputRef\r\n        [matAutocomplete]=\"autoComplete\"\r\n        (blur)=\"onBlur($event)\"\r\n        (focus)=\"onFocus($event)\">\r\n    <button matSuffix mat-icon-button\r\n        *ngIf=\"inputRef.value.length > 0 && hasFocus\"\r\n        tabindex=\"-1\"\r\n        (mousedown)=\"onMouseDown()\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n\r\n    <mat-label>{{ label }}</mat-label>\r\n    <mat-error>WARNING:  Not a valid Entity</mat-error>\r\n\r\n\r\n    <mat-autocomplete #autoComplete=\"matAutocomplete\"\r\n        [displayWith]=\"displayEntityAs\"\r\n        [class.hidden]=\"entities.length == 0\">\r\n      <mat-option\r\n          *ngIf=\"!isSearching &&\r\n                (!entities || entities.length == 0)\"\r\n          [disabled]=\"true\">\r\n        No Suggestions Found\r\n      </mat-option>\r\n      <mat-option class=\"bower\"\r\n          *ngFor=\"let entity of entities\"\r\n          [value]=\"entity\"\r\n          matTooltip=\"{{ formatResults(entity, inputRef.value) }}\"\r\n          (onSelectionChange)=\"onSelected($event)\">\r\n        <div [innerHTML]=\"formatResults(entity, inputRef.value) | highlight: inputRef.value\"></div>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <mat-progress-bar style=\"top: -20px;\" *ngIf=\"isSearching\"\r\n    color=\"accent\" mode=\"indeterminate\">\r\n  </mat-progress-bar>\r\n\r\n</form>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["ags-lib-entity-selector{overflow-x:visible}ags-lib-entity-selector .mat-form-field{min-width:100%}ags-lib-entity-selector .mat-icon{font-size:18px!important}ags-lib-entity-selector .mat-select-content{background-color:#32cd32}.search-highlight{font-weight:700}.hidden{display:none}"]
            }] }
];
/** @nocollapse */
EntitySelectorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: EntityService },
    { type: LogService }
];
EntitySelectorComponent.propDecorators = {
    label: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChipDisplayComponent {
    //
    /**
     * @param {?} ngControl
     * @param {?} logService
     */
    constructor(ngControl, logService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selectedItems = value;
        this.determineRemainingSelectableItems();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @return {?}
     */
    ngOnInit() { }
    // Gets fired on changes to all inputs, but only need to take some action when
    // selectable items get changed.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectableItems) {
            // If remaining items list hasn't yet been populated, do that now.
            if (!this.remainingSelectableItems) {
                this.remainingSelectableItems = this.selectableItems.slice(0, this.selectableItems.length);
            }
            this.determineRemainingSelectableItems();
        }
    }
    // Item selected from list
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.selectedItems.push(item);
        this.determineRemainingSelectableItems();
        this.onChange(this.selectedItems);
    }
    // Item removed from displayed chips
    /**
     * @param {?} item
     * @return {?}
     */
    onRemoved(item) {
        /** @type {?} */
        const index = this.selectedItems.indexOf(item);
        if (index >= 0) {
            this.selectedItems.splice(index, 1);
        }
        this.determineRemainingSelectableItems();
        this.onChange(this.selectedItems);
    }
    // If "Allow duplicates" flag is "true", keep selectable list the same.
    // If "Allow duplicates" flag is "false", remove selected items from selectable list.
    /**
     * @return {?}
     */
    determineRemainingSelectableItems() {
        if (!this.selectedItems || !this.selectableItems) {
            return;
        }
        if (!this.allowDuplicates) {
            this.remainingSelectableItems = this.selectableItems.filter(x => {
                return !this.findItemInList(x, this.selectedItems);
            });
        }
    }
    // Search for equality of items by comparing value in KeyValue pair
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    findItemInList(item, list) {
        if (!item || list.length === 0) {
            return false;
        }
        /** @type {?} */
        let itemValueType = typeof item.value;
        /** @type {?} */
        let listValueType = typeof list[0].value;
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
    }
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    compareNumbers(item, list) {
        /** @type {?} */
        let index = list.length;
        while (index--) {
            if (list[index].value === item.value) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    compareStrings(item, list) {
        /** @type {?} */
        let index = list.length;
        while (index--) {
            if (list[index].value.localeCompare(item.value) === 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} item
     * @param {?} list
     * @return {?}
     */
    compareObjects(item, list) {
        /** @type {?} */
        let index = list.length;
        while (index--) {
            if (list[index].value[this.equalityProperty] === item.value[this.equalityProperty]) {
                return true;
            }
        }
        return false;
    }
}
ChipDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-chip-display',
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n  \r\n  <mat-form-field appearance=\"fill\" disabled=\"!enabled\">\r\n    <mat-chip-list placeholder=\"label\">\r\n      <mat-chip *ngFor=\"let selectedItem of selectedItems\" \r\n          [selectable]=\"true\" \r\n          [removable]=\"true\" \r\n          (removed)=\"onRemoved(selectedItem)\">\r\n        {{ selectedItem.key }}\r\n        <mat-icon matChipRemove>cancel</mat-icon>\r\n      </mat-chip>\r\n      <div>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"selectableMenu\"\r\n            [disabled]=\"!enabled\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-chip-list>\r\n    <mat-label>{{ label }}</mat-label>\r\n  </mat-form-field>\r\n\r\n  <mat-menu #selectableMenu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let selectableItem of remainingSelectableItems\" \r\n        (click)=\"onSelected(selectableItem)\">\r\n      {{ selectableItem.key }}\r\n    </button>\r\n  </mat-menu>\r\n  \r\n</div>\r\n  ",
                encapsulation: ViewEncapsulation.None,
                styles: ["ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div{flex-grow:1}ags-lib-chip-display .mat-chip-list>.mat-chip-list-wrapper>div button{float:right}"]
            }] }
];
/** @nocollapse */
ChipDisplayComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: LogService }
];
ChipDisplayComponent.propDecorators = {
    label: [{ type: Input }],
    selectableItems: [{ type: Input }],
    allowDuplicates: [{ type: Input }],
    enabled: [{ type: Input }],
    equalityProperty: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MY_CUSTOM_FORMATS = {
    parseInput: 'YYYY-MM-DD HH:mm:ss',
    fullPickerInput: DateFormatPipe.format,
    datePickerInput: 'YYYY-MM',
    timePickerInput: 'hh:mm:ss',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MMM YYYY',
    monthYearA11yLabel: 'MMM YYYY',
};
class DateTimePickerComponent {
    /////////////////////
    /**
     * @param {?} fm
     * @param {?} elRef
     * @param {?} ngControl
     */
    constructor(fm, elRef, ngControl) {
        this.fm = fm;
        this.elRef = elRef;
        this.ngControl = ngControl;
        this.id = `date-time-picker-${DateTimePickerComponent.nextId++}`;
        this.describedBy = '';
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'date-time-picker';
        this._required = false;
        this._disabled = false;
        this._momentValue = moment(); // usa a Moment object internally to store the date value
        // Implementation of MatFormFieldControl interface
        this.fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        } // required for interaction with Angular forms
        /////////////
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() { return this.focused || !this.empty; }
    /**
     * @param {?} inValue
     * @return {?}
     */
    writeValue(inValue) {
        console.log(`date-time-picker input string = ${inValue}`);
        this.value = inValue;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    //////////////////////
    // Implementation of MatFormFieldControl properties
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = 'value';
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._momentValue.utc().toISOString();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */
    set value(newVal) {
        this._momentValue = moment.utc(newVal);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get empty() {
        return !this._momentValue;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    }
    // Implementation of MatFormFieldControl methods
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    ////////////////////
    // My functions
    /**
     * @param {?} event
     * @return {?}
     */
    onDataChanged(event) {
        this._momentValue = moment.utc(this._momentValue.toObject()); // force to UTC
        console.log(`date-time-picker output string = ${this.value}`);
        this.onChange(this.value); // required for interaction with Angular forms
    }
}
// Implementation of MatFormFieldControl
// tslint:disable-next-line:member-ordering
DateTimePickerComponent.nextId = 0;
DateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-date-time-picker',
                template: "<div>\r\n  <input [(ngModel)]=\"_momentValue\" [owlDateTime]=\"dt\" (change)=\"onDataChanged($event)\">\r\n  <svg class=\"icon\" [owlDateTimeTrigger]=\"dt\" fill=\"currentColor\" focusable=\"false\" height=\"20px\" viewBox=\"0 0 24 24\"\r\n    width=\"20px\">\r\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path>\r\n  </svg>\r\n  <owl-date-time #dt (afterPickerClosed)=\"onDataChanged($event)\" showSecondsTimer=\"true\"></owl-date-time>\r\n  <!-- <input type=\"datetime-local\" step=\"1\" [(ngModel)]=\"value\"> -->\r\n</div>\r\n",
                providers: [{ provide: MatFormFieldControl, useExisting: DateTimePickerComponent },
                    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
                    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: ["div .icon{position:absolute;right:0;top:0;cursor:pointer}div input{color:currentcolor;border:none;background:0 0;outline:0;font:inherit}"]
            }] }
];
/** @nocollapse */
DateTimePickerComponent.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ElementRef },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
DateTimePickerComponent.propDecorators = {
    shouldLabelFloat: [{ type: HostBinding, args: ['class.floating',] }],
    id: [{ type: HostBinding, args: ['id',] }],
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }]
};

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
class IconService {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
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
    /**
     * *************************************************************************
     * load custom icons. Use them in HTML like this... <mat-icon svgIcon="add-event"></mat-icon>
     * **************************************************************************
     * @return {?}
     */
    init() {
        this._iconNameToFileNameMap.forEach((v, k) => {
            this.iconRegistry.addSvgIcon(k, this.sanitizer.bypassSecurityTrustResourceUrl(v));
        });
        this._iconNameToFileNameMap.forEach((v, k) => {
            this.iconRegistry.getNamedSvgIcon(k).subscribe(res => {
                this._iconNameToSvgElementMap.set(k, res);
            });
        });
    }
    /**
     * *************************************************************************
     * Get icon SVG element from icon string name
     * **************************************************************************
     * @param {?} iconStrName
     * @return {?}
     */
    getIconSvgElement(iconStrName) {
        /** @type {?} */
        let svg;
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
    }
    /**
     * *************************************************************************
     *
     * **************************************************************************
     * @param {?} state
     * @return {?}
     */
    getIconNameFromState(state) {
        try {
            if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
                state = 'unknown';
            }
            return this._stateToIconNameMap.get(state);
        }
        catch (e) {
            return 'circle-outlined';
        }
    }
    /**
     * *************************************************************************
     *
     * **************************************************************************
     * @param {?} state
     * @return {?}
     */
    getIconSvgElementFromState(state) {
        return this.getIconSvgElement(this.getIconNameFromState(state));
    }
    /**
     * *************************************************************************
     *
     * **************************************************************************
     * @param {?} state
     * @return {?}
     */
    getIconNameFromUciState(state) {
        return this.getIconNameFromState(`uci-${state}`);
    }
    /**
     * *************************************************************************
     *
     * **************************************************************************
     * @param {?} state
     * @return {?}
     */
    getIconSvgElementFromUciState(state) {
        return this.getIconSvgElementFromState(`uci-${state}`);
    }
    /**
     * *************************************************************************
     *
     * **************************************************************************
     * @param {?} state
     * @return {?}
     */
    getStateClass(state) {
        try {
            if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
                state = 'unknown';
            }
            return `state-${state.toLowerCase()}`;
        }
        catch (e) {
            return 'state-unknown';
        }
    }
    /**
     * *************************************************************************
     *
     * **************************************************************************
     * @param {?} state
     * @return {?}
     */
    getUciStateClass(state) {
        try {
            if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
                state = 'unknown';
            }
            return `uci-state-${state.toLowerCase()}`;
        }
        catch (e) {
            return 'uci-state-unknown';
        }
    }
}
IconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IconService.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer }
];
/** @nocollapse */ IconService.ngInjectableDef = defineInjectable({ factory: function IconService_Factory() { return new IconService(inject(MatIconRegistry$1), inject(DomSanitizer)); }, token: IconService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StateIconComponent {
    /**
     * @param {?} iconService
     */
    constructor(iconService) {
        this.iconService = iconService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.iconService.init();
    }
}
StateIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-state-icon',
                template: `
    <mat-icon [svgIcon]="iconService.getIconNameFromState(state)" [ngClass]="iconService.getStateClass(state)"></mat-icon>
    `,
                styles: [":host{display:flex}"]
            }] }
];
/** @nocollapse */
StateIconComponent.ctorParameters = () => [
    { type: IconService }
];
StateIconComponent.propDecorators = {
    state: [{ type: Input }]
};
class UciStateIconComponent {
    /**
     * @param {?} iconService
     */
    constructor(iconService) {
        this.iconService = iconService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.iconService.init();
    }
}
UciStateIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ags-lib-uci-state-icon',
                template: `
    <mat-icon [svgIcon]="iconService.getIconNameFromUciState(state)" [ngClass]="iconService.getUciStateClass(state)"></mat-icon>
    `
            }] }
];
/** @nocollapse */
UciStateIconComponent.ctorParameters = () => [
    { type: IconService }
];
UciStateIconComponent.propDecorators = {
    state: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AgsHmiLibraryModule {
}
AgsHmiLibraryModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule,
                    CommonModule, OwlDateTimeModule, OwlNativeDateTimeModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertService {
    constructor() { }
    /**
     * @private
     * @return {?}
     */
    get wss() {
        if (!this._wss || this._wss.closed) {
            console.log('AlertService: create WebSocketSubject');
            this._wss = new WebSocketSubject(this._wssConfig);
        }
        else {
            console.log('AlertService: WebSocketSubject already created');
        }
        return this._wss;
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        if (this._wss) {
            this._wss.unsubscribe();
            this._wss = null;
        }
        this._wssConfig = {
            url: serviceUrl,
            closeObserver: {
                next: (e) => {
                    console.log(`%c WEBSOCKET CLOSED `, `background: black; color: #fff; font-weight: bold;`, 'Attempting to reconnect...');
                }
            },
            openObserver: {
                next: (e) => {
                    console.log(`%c WEBSOCKET OPEN `, `background: green; color: #fff; font-weight: bold;`);
                }
            }
        };
        this.serviceUrl = serviceUrl;
    }
    /**
     * @return {?}
     */
    getMessages() {
        return this.wss.pipe(
        // Adds ability to reconnect a disconnected websocket
        // @see https://stackoverflow.com/a/44067972
        retry(), map(res => res) // this can be used to modify the incoming message
        );
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    sendMessage(msg) {
        this.wss.next(msg);
    }
}
AlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AlertService.ctorParameters = () => [];
/** @nocollapse */ AlertService.ngInjectableDef = defineInjectable({ factory: function AlertService_Factory() { return new AlertService(); }, token: AlertService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class CalService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * GET /cal/task/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    getTask(uciTaskId) {
        this.logService.debug('CalService.getTask');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/cal/task/byUciTaskId/' + uciTaskId);
        return this.http.get(url, httpOptions$2).pipe(tap(res => this.logService.debug(`    retrieved Task successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * PUT /cal/task/${uciTaskId}/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} planId
     * @param {?} uciTaskId
     * @return {?}
     */
    addTaskToPlan(planId, uciTaskId) {
        this.logService.debug('CalService.addTaskToPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/cal/task/' + planId + '/byUciTaskId/' + uciTaskId);
        return this.http.put(url, httpOptions$2).pipe(tap(res => this.logService.debug(`    added Task successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * PUT /cal/task/reject/byUciTaskId/${uciTaskId}
     * ************************************************************************
     * @param {?} uciTaskId
     * @return {?}
     */
    rejectTask(uciTaskId) {
        this.logService.debug('CalService.rejectTask');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/cal/task/reject/byUciTaskId/' + uciTaskId);
        return this.http.put(url, httpOptions$2).pipe(tap(res => this.logService.debug(`    Task rejected successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * Send task request
     * PUT cal/task/{eventId}/{planId}
     * ************************************************************************
     * @param {?} eventId
     * @param {?} planId
     * @return {?}
     */
    sendTaskingRequest(eventId, planId) {
        this.logService.debug('CalService.sendTaskRequest');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, `/cal/task/${eventId}/${planId}`);
        console.log('   ' + url);
        return this.http.put(url, '', { responseType: 'text' }).pipe(tap(res => this.logService.debug(`    task request sent`)), map(res => res));
    }
}
CalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CalService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ CalService.ngInjectableDef = defineInjectable({ factory: function CalService_Factory() { return new CalService(inject(HttpClient), inject(LogService)); }, token: CalService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$3 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class DraftPlanService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * POST /plan/draftPlan/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    draftPlan(planId) {
        this.logService.debug('PlanService.draftPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/draftPlan/' + planId);
        return this.http.post(url, httpOptions$3).pipe(tap(res => this.logService.debug(`    added PlanAsset successfully`)), map(res => res));
    }
}
DraftPlanService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DraftPlanService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ DraftPlanService.ngInjectableDef = defineInjectable({ factory: function DraftPlanService_Factory() { return new DraftPlanService(inject(HttpClient), inject(LogService)); }, token: DraftPlanService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlanMinTaskData {
    /**
     * @param {?=} json
     */
    constructor(json) {
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
            this.assetEntityId = isNil(json.assetEntityId) ? '' : json.assetEntityId;
            this.assetName = isNil(json.assetName) ? '' : json.assetName;
            this.capability = isNil(json.capability) ? '' : json.capability;
            this.capabilityId = isNil(json.capabilityId) ? '' : json.capabilityId;
            this.missionTaskId = isNil(json.missionTaskId) ? '' : json.missionTaskId;
            this.targetEntityId = isNil(json.targetEntityId) ? '' : json.targetEntityId;
            this.targetName = isNil(json.targetName) ? '' : json.targetName;
            this.startTime = new Date(json.startTime);
            this.endTime = new Date(json.endTime);
            this.isPlanned = json.isPlanned;
            // DELETE:
            this.assetEntityId = this.assetEntityId.trim();
            this.targetEntityId = this.targetEntityId.trim();
            //NEW SERVICE PROPERTIES
            this.planId = isNil(json.planId) ? '' : json.planId;
            this.isPlanned = isNil(json.isPlanned) ? false : json.isPlanned;
            this.missionUuid = isNil(json.missionUuid) ? '' : json.missionUuid;
            this.name = isNil(json.name) ? '' : json.name;
            this.planStatus = isNil(json.planStatus) ? '' : json.planStatus;
            this.type = isNil(json.type) ? '' : json.type;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$4 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class PlanService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * GET /min/task/byPlanId/${planId}
     * get PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    getMinTaskDataByPlanId(planId) {
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug(`PlanService.getMinTaskDataByPlanId()`);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retreived PlanMinTaskData for planId ${planId}`, res)), map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))));
    }
    /**
     * ***********************************************************************
     * POST /min/task/byPlanId/${planId}
     * create PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    createMinTaskDataByPlanId(planId, plan) {
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug(`PlanService.createMinTaskDataByPlanId()`);
        return this.http.post(url, plan, httpOptions$4).pipe(tap(res => this.logService.debug(`    created PlanMinTaskData for planId ${planId}`, res)), map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))));
    }
    /**
     * ***********************************************************************
     * PUT /plan/min/task/byPlanId/${planId}
     * update PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    updatePlanMinTaskData(planId, plan) {
        // const url = `${this.serviceUrl}/plan/min/task/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/min/task/byPlanId/', planId);
        this.logService.debug(`PlanService.updatePlanMinTaskData()`);
        return this.http.put(url, plan, httpOptions$4).pipe(tap(res => this.logService.debug(`    updated planId ${planId}`, res)), map(res => res['planMinTaskData'].map(item => new PlanMinTaskData(item))));
    }
    /**
     * ***********************************************************************
     * DELETE /plan/min/task/byPlanId/${planId}
     * delete PlanMinTaskData
     * ************************************************************************
     * @param {?} planId
     * @param {?} plan
     * @return {?}
     */
    deletePlanMinTaskData(planId, plan) {
        // const url = `${this.serviceUrl}/plan/missionTarget/byPlanId/${planId}`;
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTarget/byPlanId/', planId);
        this.logService.debug(`PlanService.deletePlanMinTaskData()`);
        /** @type {?} */
        let bodyData = { strings: [plan.missionTaskId] };
        // HACK: the whole PlanMinTaskData stuff is all hacked up. Revisit this at some point
        return this.http.request('DELETE', url, Object.assign({}, httpOptions$4, { body: bodyData })).pipe(tap(res => this.logService.debug(`    deleted planId ${planId}`)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadByMissionId(id) {
        this.logService.debug('PlanService.loadByMissionId');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/byMissionId/' + id);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.plans));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    planAssetsByPlanId(id) {
        this.logService.debug('PlanService.planAssetsByPlanId');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/planAssets/' + id);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.planAssets));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    missionTaskDisplay(id) {
        this.logService.debug('PlanService.missionTaskDisplay');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTaskDisplay/byPlanId/' + id);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.missionTasks));
    }
    /**
     * @param {?} planId
     * @param {?} entityIds
     * @return {?}
     */
    addMissionTaskToPlan(planId, entityIds) {
        this.logService.debug('PlanService.addMissionTaskToPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
        /** @type {?} */
        let param = {
            'strings': entityIds
        };
        return this.http.post(url, param, httpOptions$4).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.missionTasks));
    }
    /**
     * @param {?} planId
     * @param {?} strings
     * @return {?}
     */
    removeMissionTasksFromPlan(planId, strings) {
        this.logService.debug('PlanService.removeMissionTasksFromPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/missionTask/byPlanId/' + planId);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: {
                strings: strings
            }
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted tasks successfully`)), map(res => res.missionTasks));
    }
    /**
     * @param {?} plan
     * @return {?}
     */
    copyPlan(plan) {
        this.logService.debug('PlanService.copyPlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/copy/byPlanId/' + plan.planId);
        return this.http.put(url, plan, Object.assign({}, httpOptions$4, { responseType: 'text' })).pipe(tap(res => this.logService.debug(`    added plan successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getByPlanId(planId) {
        this.logService.debug('PlanService.getByPlanId');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retrieved plan successfully`)), map(res => res));
    }
    /**
     * @param {?} planAssets
     * @return {?}
     */
    updatePlanAssets(planAssets) {
        this.logService.debug('PlanService.addPlanAsset');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/planAssets');
        /** @type {?} */
        let param = {
            'planAssets': planAssets
        };
        return this.http.put(url, param, httpOptions$4).pipe(tap(res => this.logService.debug(`    added PlanAsset successfully`)), map(res => res.planAssets));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getOptimizationObjectives(planId) {
        this.logService.debug('PlanService.getOptimizationObjectives');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives/byPlanId/' + planId);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retrieved Optimization Objectives successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getOptimizationMetrics(planId) {
        this.logService.debug('PlanService.getOptimizationMetrics');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/metrics/byPlanId/' + planId);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retrieved Optimization Metrics successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    deletePlan(planId) {
        this.logService.debug('PlanService.deletePlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/byPlanId/' + planId);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted plan successfully`)), map(res => res));
    }
    /**
     * @param {?} plan
     * @return {?}
     */
    updatePlan(plan) {
        this.logService.debug('PlanService.updatePlan');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan');
        return this.http.put(url, plan, httpOptions$4).pipe(tap(res => this.logService.debug(`    updated Plan successfully`)), map(res => res));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getRequestWindows(planId) {
        this.logService.debug('PlanService.getRequestWindow');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/requestWindows/byPlanId/' + planId);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retrieved Request Windows successfully`)), map(res => res.accessWindows));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getDisplayWindows(planId) {
        this.logService.debug('PlanService.getDisplayWindows');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/display/requestWindows/byPlanId/' + planId);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retrieved Request Windows successfully`)), map(res => res.displayWindows));
    }
    /**
     * @param {?} planId
     * @return {?}
     */
    getTaskConstraints(planId) {
        this.logService.debug('PlanService.getTaskConstraints');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints/byPlanId/' + planId);
        return this.http.get(url, httpOptions$4).pipe(tap(res => this.logService.debug(`    retrieved Task Constraint  successfully`)), map(res => res.planMissionTaskConstaintsGroups));
    }
    /**
     * @param {?} constraints
     * @return {?}
     */
    updateTaskConstraints(constraints) {
        this.logService.debug('PlanService.updateTaskConstraints');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/task/constraints');
        return this.http.put(url, constraints, httpOptions$4).pipe(tap(res => this.logService.debug(`    updated Task Constraint  successfully`)), map(res => res.planMissionTaskConstaintsGroups));
    }
    /**
     * @param {?} optimizationObjective
     * @return {?}
     */
    updateOptimizationObjectives(optimizationObjective) {
        this.logService.debug('PlanService.updateOptimizationObjectives');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/plan/optimizationObjectives');
        return this.http.put(url, optimizationObjective, httpOptions$4).pipe(tap(res => this.logService.debug(`    updated Optimization Objectives successfully`)), map(res => res));
    }
}
PlanService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlanService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ PlanService.ngInjectableDef = defineInjectable({ factory: function PlanService_Factory() { return new PlanService(inject(HttpClient), inject(LogService)); }, token: PlanService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressService {
    /**
     * @param {?} logService
     */
    constructor(logService) {
        this.logService = logService;
        this.pendingRequests = 0;
        this.containerName = 'progressContainer';
        this.element = null;
    }
    /**
     * @return {?}
     */
    getElement() {
        if (this.element == null) {
            this.logService.debug('Default element for progress spinner = "' + this.containerName + '"');
            this.element = document.getElementById(this.containerName);
            if (!this.element) {
                this.logService.debug('Progress spinner element not found.  Ensure element is included in document.');
            }
        }
        return this.element;
    }
    /**
     * @param {?} isBusy
     * @return {?}
     */
    setBusy(isBusy) {
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
    }
    //Control the visibility of the busy message div.
    /**
     * @param {?} isVisible
     * @return {?}
     */
    setVisible(isVisible) {
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
    }
}
ProgressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ProgressService.ctorParameters = () => [
    { type: LogService }
];
/** @nocollapse */ ProgressService.ngInjectableDef = defineInjectable({ factory: function ProgressService_Factory() { return new ProgressService(inject(LogService)); }, token: ProgressService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$5 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class TaskOrderService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * @param {?} task
     * @return {?}
     */
    createTask(task) {
        this.logService.debug('TaskService.createTask');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.post(url, task, httpOptions$5).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)));
    }
    /**
     * @param {?} type
     * @return {?}
     */
    loadAll(type) {
        this.logService.debug('TaskService.loadAll');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/allOrders?type=' + type);
        return this.http.get(url, httpOptions$5).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.taskingOrders));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    loadById(id) {
        this.logService.debug('TaskService.loadById');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
        return this.http.get(url, httpOptions$5).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteTaskingOrder(id) {
        this.logService.debug('TaskService.deleteTaskingOrder');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder/' + id);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted task order successfully`)), map(res => res));
    }
    /**
     * @param {?} task
     * @return {?}
     */
    updateTaskingOrder(task) {
        this.logService.debug('TaskService.updateTaskingOrder');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/taskingOrder');
        return this.http.put(url, task, httpOptions$5).pipe(tap(res => this.logService.debug(`     updated task ${task.taskingOrderUuid}`)), map(res => res));
    }
}
TaskOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TaskOrderService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ TaskOrderService.ngInjectableDef = defineInjectable({ factory: function TaskOrderService_Factory() { return new TaskOrderService(inject(HttpClient), inject(LogService)); }, token: TaskOrderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.http.get(this.serviceUrl, { responseType: 'text' })
            .pipe(map(res => res));
    }
}
TimeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TimeService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ TimeService.ngInjectableDef = defineInjectable({ factory: function TimeService_Factory() { return new TimeService(inject(HttpClient)); }, token: TimeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderService {
    /**
     * @param {?} titleService
     */
    constructor(titleService) {
        this.titleService = titleService;
        this._headerPrimaryTitle = '';
        this._headerSubTitle = '';
        this.headerTitle = new BehaviorSubject(titleService.getTitle());
        this.breadcrumb = new BehaviorSubject({});
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set headerPrimaryTitle(value) {
        this._headerPrimaryTitle = value;
        this.titleService.setTitle(value + ' - ' + this.appName); // this is what gets displayed in the browser tab
        this.updateHeaderTitle();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set headerSubTitle(value) {
        this._headerSubTitle = value;
        this.updateHeaderTitle();
        this.updateBreadcrumb();
    }
    /**
     * @param {?} appName
     * @return {?}
     */
    init(appName) {
        this.appName = appName;
    }
    // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
    /**
     * @return {?}
     */
    updateHeaderTitle() {
        /** @type {?} */
        let title = this._headerPrimaryTitle;
        if (this._headerSubTitle) {
            title += ' [' + this._headerSubTitle + ']';
        }
        this.headerTitle.next(title);
    }
    /*
       * Updates the breadcrumb when the title is updated.
       *
       * @returns {object} An object consisting of the primary title, and the subtitle
       */
    /**
     * @return {?}
     */
    updateBreadcrumb() {
        this.breadcrumb.next({
            primaryTitle: this._headerPrimaryTitle,
            subtitle: this._headerSubTitle,
        });
    }
}
HeaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HeaderService.ctorParameters = () => [
    { type: Title }
];
/** @nocollapse */ HeaderService.ngInjectableDef = defineInjectable({ factory: function HeaderService_Factory() { return new HeaderService(inject(Title)); }, token: HeaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$6 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class PlanCollectionService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * @return {?}
     */
    loadAll() {
        this.logService.debug('PlanCollectionService.loadAll');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.get(url, httpOptions$6).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res.planCollections));
    }
    /**
     * @return {?}
     */
    loadAllTypes() {
        this.logService.debug('PlanCollectionService.loadAllTypes');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/Type');
        return this.http.get(url, httpOptions$6).pipe(tap(res => this.logService.debug(`    retreived plan collection types ${name}`, res)), map(res => res.planTypes));
    }
    /**
     * @param {?} missionType
     * @return {?}
     */
    getAssetGroupType(missionType) {
        this.logService.debug('PlanCollectionService.loadAllTypes');
        return this.loadAllTypes().pipe(tap(res => this.logService.debug(`    retreived plan collection types ${name}`, res)), map(res => res.filter(p => p.hmiName === missionType)[0].assetGroup1));
    }
    /**
     * @param {?} missionId
     * @return {?}
     */
    loadById(missionId) {
        this.logService.debug('PlanCollectionService.loadById');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + missionId);
        return this.http.get(url, httpOptions$6).pipe(tap(res => this.logService.debug(`    retreived event model ${name}`, res)), map(res => res));
    }
    /**
     * @param {?} planCollection
     * @return {?}
     */
    create(planCollection) {
        this.logService.debug('PlanCollectionService.createPlanCollection');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.post(url, planCollection, httpOptions$6).pipe(tap(res => this.logService.debug(`    cerated Plan Collection ${name}`, res)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        this.logService.debug('PlanCollectionService.deletePlanCollection');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection/byId/' + id);
        /** @type {?} */
        const deleteOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, deleteOptions).pipe(tap(res => this.logService.debug(`    deleted Plan Collection successfully`)), map(res => res));
    }
    /**
     * @param {?} planCollection
     * @return {?}
     */
    update(planCollection) {
        this.logService.debug('PlanCollectionService.updatePlanCollection');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/PlanCollection');
        return this.http.put(url, planCollection, httpOptions$6).pipe(tap(res => this.logService.debug(`     updated Plan Collection ${planCollection.missionUUId}`)), map(res => res));
    }
}
PlanCollectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlanCollectionService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ PlanCollectionService.ngInjectableDef = defineInjectable({ factory: function PlanCollectionService_Factory() { return new PlanCollectionService(inject(HttpClient), inject(LogService)); }, token: PlanCollectionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$7 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class CzmlService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * @param {?} planId
     * @param {?} targetId
     * @param {?=} missionId
     * @return {?}
     */
    getGroundTrackAndSensorVolume(planId, targetId, missionId) {
        /** @type {?} */
        let endpoint = `/czml/groundTrackAndSensorVolume/${planId}/${targetId}`;
        if (missionId) {
            endpoint = `${endpoint}/${missionId}`;
        }
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, endpoint);
        this.logService.debug('CzmlService.getGroundTrackAndSensorVolume()');
        return this.http.get(url, httpOptions$7).pipe(tap(res => this.logService.debug('    retrieved Czml')), map(res => res));
    }
    /**
     * Handle http operation that failed.
     *
     * @private
     * @template T
     * @param {?=} operation {string} name of the operation that failed
     * @param {?=} result {any} optional value to return as the observable result
     * @return {?}
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            this.logService.error(`${operation} failed: ${error.message}`);
            return of((/** @type {?} */ (result)));
        };
    }
}
CzmlService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CzmlService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ CzmlService.ngInjectableDef = defineInjectable({ factory: function CzmlService_Factory() { return new CzmlService(inject(HttpClient), inject(LogService)); }, token: CzmlService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$8 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class SchedulerService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * GET /schedule/solverTypes/${missionType}
     * ************************************************************************
     * @param {?} missionType
     * @return {?}
     */
    getSolverTypes(missionType) {
        this.logService.debug('SchedulerService.getSolverTypes');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/schedule/solverTypes/' + missionType);
        return this.http.get(url, httpOptions$8).pipe(tap(res => this.logService.debug(`    retrieved Solver Types successfully`)), map(res => res.strings));
    }
}
SchedulerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SchedulerService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ SchedulerService.ngInjectableDef = defineInjectable({ factory: function SchedulerService_Factory() { return new SchedulerService(inject(HttpClient), inject(LogService)); }, token: SchedulerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const httpOptions$9 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class ExternalScheduleService {
    /**
     * @param {?} http
     * @param {?} logService
     */
    constructor(http, logService) {
        this.http = http;
        this.logService = logService;
        this.serviceUrl = '';
    }
    /**
     * @param {?} serviceUrl
     * @return {?}
     */
    init(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }
    /**
     * ***********************************************************************
     * POST /runInternalScheduler/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    runInternalScheduler(planId) {
        this.logService.debug('ExternalScheduleService.runInternalScheduler');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/runInternalScheduler/' + planId);
        return this.http.post(url, httpOptions$9).pipe(tap(res => this.logService.debug(`    RunInternal Scheduler successfull`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * POST /publishToLaso/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    publishToLaso(planId) {
        this.logService.debug('ExternalScheduleService.publishToLaso');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/publishToLaso/' + planId);
        return this.http.post(url, httpOptions$9).pipe(tap(res => this.logService.debug(`    Published To Laso successfully`)), map(res => res.status));
    }
    /**
     * ***********************************************************************
     * POST /spsEvent/${planId}
     * ************************************************************************
     * @param {?} spsEvent
     * @return {?}
     */
    create(spsEvent) {
        this.logService.debug('ExternalScheduleService.spsEvent');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/spsEvent');
        return this.http.post(url, spsEvent, httpOptions$9).pipe(tap(res => this.logService.debug(`    Stored sps Event successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * POST /publishToLaso/${planId}
     * ************************************************************************
     * @param {?} prohibitId
     * @return {?}
     */
    getLasoProhibit(prohibitId) {
        this.logService.debug('ExternalScheduleService.getLasoProhibit');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/getLasoProhibit/' + prohibitId);
        return this.http.get(url, httpOptions$9).pipe(tap(res => this.logService.debug(`    Retrieved Laso Prohibit successfully`)), map(res => res));
    }
    /**
     * ***********************************************************************
     * POST /assetsWithMx/${planId}
     * ************************************************************************
     * @param {?} planId
     * @return {?}
     */
    getAssetsWithMx(planId) {
        this.logService.debug('ExternalScheduleService.assetsWithMx');
        /** @type {?} */
        const url = Util.urlJoin(this.serviceUrl, '/assetsWithMx/' + planId);
        return this.http.get(url, httpOptions$9).pipe(tap(res => this.logService.debug(`    Retrieved assets with Mx successfully`)), map(res => res.strings));
    }
}
ExternalScheduleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExternalScheduleService.ctorParameters = () => [
    { type: HttpClient },
    { type: LogService }
];
/** @nocollapse */ ExternalScheduleService.ngInjectableDef = defineInjectable({ factory: function ExternalScheduleService_Factory() { return new ExternalScheduleService(inject(HttpClient), inject(LogService)); }, token: ExternalScheduleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessWindowLimit {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Alert {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AlertType = {
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
class MissionData {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MissionTarget {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MissionTask {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptimizationMetric {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptimizationObjective {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlanAsset {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PlanSubType = {
    update: 'UPDATE',
    complete: 'DRAFT',
    error: 'ERROR',
    executing: 'Executing',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Task {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TaskSubType {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Optimization {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TaskConstraint {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccessWindow {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimeWindow {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlanCollection {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlanCollectionType {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DisplayWindow {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpsEvent {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} authenticationService
     * @param {?} logService
     */
    constructor(authenticationService, logService) {
        this.authenticationService = authenticationService;
        this.logService = logService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (!this.authenticationService.isLoggedIn) {
            this.logService.debug('guard - not logged in!!');
            this.authenticationService.redirectToLoginPage();
            return false;
        }
        return true;
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: LogService }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(AuthenticationService), inject(LogService)); }, token: AuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Sample = {
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
class JwtInterceptor {
    /**
     * @param {?} authenticationService
     */
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
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
    }
}
JwtInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
JwtInterceptor.ctorParameters = () => [
    { type: AuthenticationService }
];
/**
 * ***************************************************************************
 * Error Interceptor: Handle HTTP errors
 * ****************************************************************************
 */
class ErrorInterceptor {
    /**
     * @param {?} authenticationService
     * @param {?} logService
     */
    constructor(authenticationService, logService) {
        this.authenticationService = authenticationService;
        this.logService = logService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next.handle(request).pipe(catchError(err => {
            // NOTE: err.status is always 0. Research points to backend server not attaching CORS headers to response
            // see this article https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
            // and this https://stackoverflow.com/questions/29547003/angularjs-no-access-control-allow-origin-header-is-present-on-the-requested-r
            // adn this https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logOut();
            }
            else {
                this.logService.error(`ErrorInterceptor: err.status = ${err.status}`, err);
            }
            /** @type {?} */
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
ErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ErrorInterceptor.ctorParameters = () => [
    { type: AuthenticationService },
    { type: LogService }
];
/**
 * ***************************************************************************
 * Data Recorder Interceptor
 * ****************************************************************************
 */
class CacheInterceptor {
    constructor() { }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req).pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                console.log(`>>>>>>>>>>>> CACHE INTERCEPTOR`, event);
            }
            return event;
        }));
    }
}
CacheInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CacheInterceptor.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockBackendInterceptor {
    constructor() { }
    /**
     * @param {?} millisecs
     * @return {?}
     */
    sleep(millisecs) {
        /** @type {?} */
        let initiation = new Date().getTime();
        while ((new Date().getTime() - initiation) < millisecs) { }
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {
            // example GET endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'GET') {
                console.log(`MOCK ${request.url}`);
                this.sleep(500);
                /** @type {?} */
                let dataObj = [{ id: '1234', data: 'data goes here' }, { id: '5678', data: 'data goes here' }];
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // example GET endpoint with id
            if (request.url.match(/\/exampleEndpoint\/\d+$/) && request.method === 'GET') {
                console.log(`MOCK ${request.url}`);
                this.sleep(500);
                /** @type {?} */
                let urlParts = request.url.split('/');
                /** @type {?} */
                let id = parseInt(urlParts[urlParts.length - 1]);
                /** @type {?} */
                let dataObj = { id: id, data: 'data goes here' };
                if (dataObj) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(dataObj) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // example POST endpoint
            if (request.url.endsWith('/exampleEndpoint') && request.method === 'POST') {
                /** @type {?} */
                let reqBody = request.body;
                console.log(`MOCK ${request.url}`, reqBody);
                this.sleep(500);
                if (reqBody) {
                    return of(new HttpResponse({ status: 200, body: JSON.stringify(reqBody) }));
                }
                else {
                    return throwError({ error: { message: 'Error' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }));
    }
}
MockBackendInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MockBackendInterceptor.ctorParameters = () => [];
/** @type {?} */
let MockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
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
        if (isNil(maxLines) || !isNil(Validators.required(control))) {
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
        if (isNil(ltParam) || !isNil(Validators.required(control))) {
            return null;
        }
        /** @type {?} */
        let v = +control.value;
        return v < +ltParam ? null : { lt: true };
    };
}
/** @type {?} */
const CustomValidators = {
    dateRangeValidator,
    dateLessThanValidator,
    dateGreaterThanValidator,
    maxNumLinesValidator,
    lt
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AgsHmiLibraryModule, AnnotationComponent, MY_CUSTOM_FORMATS, DateTimePickerComponent, EmptyComponent, LoginComponent, PageNotFoundComponent, ProgressComponent, StateIconComponent, UciStateIconComponent, TitleComponent, AlertService, AnnotationService, AuthenticationService, CacheService, CalService, DraftPlanService, EntityService, LogService, PlanService, ProgressService, TaskOrderService, TimeService, HeaderService, IconService, PlanCollectionService, CzmlService, SchedulerService, ExternalScheduleService, AccessWindowLimit, Alert, AlertType, Annotation, AuthenticationRequest, AuthenticationResponse, Capability, CapabilityMap, Observability, Country, Entity, PartialEntity, Group, BaseEntity, MissionData, MissionTarget, MissionTask, OptimizationMetric, OptimizationObjective, PlanMinTaskData, PlanAsset, PlanSubType, Task, TaskSubType, Optimization, TaskConstraint, AccessWindow, TimeWindow, Vulnerability, PlanCollection, PlanCollectionType, DisplayWindow, SpsEvent, AuthGuard, Sample, JwtInterceptor, ErrorInterceptor, CacheInterceptor, MockBackendInterceptor, MockBackendProvider, DateFormatPipe, TruncatePipe, OrderByPipe, HighlightPipe, RemoveItemPipe, CustomPipes, Util, CustomValidators, ChipDisplayComponent as ɵb, EntitySelectorComponent as ɵc, MaterialModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdzLWhtaS1saWJyYXJ5LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9vdGhlci9waXBlcy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvYW5ub3RhdGlvbi50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9sb2cuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9vdGhlci91dGlsLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2Fubm90YXRpb24uc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL2F1dGhlbnRpY2F0aW9uLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9lbXB0eS9lbXB0eS5jb21wb25lbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL2NhcGFiaWxpdHkudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL3Z1bG5lcmFiaWxpdHkudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL2RvbWFpbi50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvZW50aXR5LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvZW50aXR5LnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9lbnRpdHktc2VsZWN0b3IvZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9jb21wb25lbnRzL2NoaXAtZGlzcGxheS9jaGlwLWRpc3BsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL2NvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvY29tcG9uZW50cy9zdGF0ZS1pY29uL3N0YXRlLWljb24uY29tcG9uZW50LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL2Fncy1obWktbGlicmFyeS5tb2R1bGUudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvYWxlcnQuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9jYWwuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9kcmFmdFBsYW4uc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvcGxhbi50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy9wbGFuLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvcHJvZ3Jlc3Muc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9zZXJ2aWNlcy90YXNrLW9yZGVyLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvdGltZS5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2hlYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL3BsYW5Db2xsZWN0aW9uLnNlcnZpY2UudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvc2VydmljZXMvY3ptbC5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL3NjaGVkdWxlci5zZXJ2aWNlLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL3NlcnZpY2VzL2V4dGVybmFsU2NoZWR1bGUuc2VydmljZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvYWNjZXNzLXdpbmRvdy1saW1pdC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvYWxlcnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL2FsZXJ0VHlwZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvbWlzc2lvbkRhdGEudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL21pc3Npb25UYXJnZXQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL21pc3Npb25UYXNrLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9vcHRpbWl6YXRpb25NZXRyaWMudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL29wdGltaXphdGlvbk9iamVjdGl2ZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvcGxhbkFzc2V0LnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL21vZGVscy9wbGFuU3ViVHlwZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvdGFzay50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvdGFza1N1YlR5cGUudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL29wdGltaXphdGlvbi50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvdGFza0NvbnN0cmFpbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL2FjY2Vzc1dpbmRvdy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvdGltZVdpbmRvdy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvcGxhbkNvbGxlY3Rpb24udHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvbW9kZWxzL3BsYW5Db2xsZWN0aW9uVHlwZS50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvZGlzcGxheVdpbmRvdy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9tb2RlbHMvc3BzRXZlbnQudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvb3RoZXIvYXV0aC5ndWFyZC50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9vdGhlci9lbnVtcy50cyIsIm5nOi8vYWdzLWhtaS1saWJyYXJ5L2xpYi9vdGhlci9pbnRlcmNlcHRvcnMudHMiLCJuZzovL2Fncy1obWktbGlicmFyeS9saWIvb3RoZXIvbW9jay1iYWNrZW5kLmludGVyY2VwdG9yLnRzIiwibmc6Ly9hZ3MtaG1pLWxpYnJhcnkvbGliL290aGVyL3ZhbGlkYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcclxuICBNYXRDYXJkTW9kdWxlLFxyXG4gIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gIE1hdENoaXBzTW9kdWxlLFxyXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG4gIC8vIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgLy8gTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgTWF0SWNvbk1vZHVsZSxcclxuICBNYXRJbnB1dE1vZHVsZSxcclxuICBNYXRMaXN0TW9kdWxlLFxyXG4gIE1hdE1lbnVNb2R1bGUsXHJcbiAgLy8gTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICBNYXRSYWRpb01vZHVsZSxcclxuICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAvLyBNYXRTbGlkZXJNb2R1bGUsXHJcbiAgLy8gTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgLy8gTWF0U25hY2tCYXJNb2R1bGUsXHJcbiAgLy8gTWF0U29ydE1vZHVsZSxcclxuICBNYXRUYWJsZU1vZHVsZSxcclxuICBNYXRUYWJzTW9kdWxlLFxyXG4gIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAvLyBNYXRTdGVwcGVyTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuLy8gaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuLy8gaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuLy8gaW1wb3J0IHtDZGtBY2NvcmRpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xyXG4vLyBpbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuLy8gaW1wb3J0IHtCaWRpTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbi8vIGltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG4vLyBpbXBvcnQge1BsYXRmb3JtTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG4vLyBpbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbi8vIGltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG4gICAgLy8gTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIC8vIE1hdEdyaWRMaXN0TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0TGlzdE1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICAvLyBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgLy8gTWF0UmlwcGxlTW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcclxuICAgIC8vIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG4gICAgLy8gTWF0U2xpZGVyTW9kdWxlLFxyXG4gICAgLy8gTWF0U25hY2tCYXJNb2R1bGUsXHJcbiAgICAvLyBNYXRTb3J0TW9kdWxlLFxyXG4gICAgLy8gTWF0U3RlcHBlck1vZHVsZSxcclxuICAgIE1hdFRhYnNNb2R1bGUsXHJcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIC8vIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAvLyBDZGtUYWJsZU1vZHVsZSxcclxuICAgIC8vIEExMXlNb2R1bGUsXHJcbiAgICAvLyBCaWRpTW9kdWxlLFxyXG4gICAgLy8gQ2RrQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgLy8gT2JzZXJ2ZXJzTW9kdWxlLFxyXG4gICAgLy8gT3ZlcmxheU1vZHVsZSxcclxuICAgIC8vIFBsYXRmb3JtTW9kdWxlLFxyXG4gICAgLy8gUG9ydGFsTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIC8vIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAvLyBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdExpc3RNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgLy8gTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIC8vIE1hdFJpcHBsZU1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICAvLyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAgIC8vIE1hdFNsaWRlck1vZHVsZSxcclxuICAgIC8vIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gICAgLy8gTWF0U29ydE1vZHVsZSxcclxuICAgIC8vIE1hdFN0ZXBwZXJNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICAvLyBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgLy8gQ2RrVGFibGVNb2R1bGUsXHJcbiAgICAvLyBBMTF5TW9kdWxlLFxyXG4gICAgLy8gQmlkaU1vZHVsZSxcclxuICAgIC8vIENka0FjY29yZGlvbk1vZHVsZSxcclxuICAgIC8vIE9ic2VydmVyc01vZHVsZSxcclxuICAgIC8vIE92ZXJsYXlNb2R1bGUsXHJcbiAgICAvLyBQbGF0Zm9ybU1vZHVsZSxcclxuICAgIC8vIFBvcnRhbE1vZHVsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7fVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtZXM2JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuLypcclxuVGhpcyBwaXBlIHdpbGwgZm9ybWF0IGEgZGF0ZSBhbmQgY29udmVydCBpdCB0byBVVEMgdW5sZXNzICdmb3JjZVV0YycgcGFyYW1ldGVyXHJcbmlzIHNldCB0byBmYWxzZS4gSWYgdGhlIGRhdGUgaXMgZW1wdHksIG51bGwsIG9yIGludmFsaWQgaXQgd2lsbCByZXR1cm4gJ2RlZmF1bHRWYWwnXHJcbiovXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYWdzRGF0ZUZvcm1hdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHN0YXRpYyBmb3JtYXQ6IHN0cmluZyA9ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcclxuXHJcbiAgdHJhbnNmb3JtKHRoZURhdGU6IG1vbWVudC5Nb21lbnQgfCBEYXRlIHwgc3RyaW5nLCBkZWZhdWx0VmFsOiBzdHJpbmcgPSAnbi9hJywgZm9yY2VVdGM6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcclxuICAgIGlmICghbW9tZW50KHRoZURhdGUpLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9yY2VVdGMpIHtcclxuICAgICAgcmV0dXJuIG1vbWVudC51dGModGhlRGF0ZSkuZm9ybWF0KERhdGVGb3JtYXRQaXBlLmZvcm1hdCkudG9VcHBlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtb21lbnQodGhlRGF0ZSkuZm9ybWF0KERhdGVGb3JtYXRQaXBlLmZvcm1hdCArICcgWlonKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cnVuYydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGlmIChzLmxlbmd0aCA8IDEwMCkge1xyXG4gICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHJldHVybiBzLnNsaWNlKDAsIDk5KSArICcuLi4nO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvcmRlckJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGFycmF5LCBhc2MgPSB0cnVlKSB7XHJcblxyXG4gICAgaWYgKGFzYykgeyAvLyBhc2NlbmRpbmdcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXkpLnNvcnQoKGl0ZW0xOiBzdHJpbmcsIGl0ZW0yOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckJ5Q29tcGFyYXRvcihpdGVtMSwgaXRlbTIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7IC8vIGRlc2NlbmRpbmdcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXkpLnNvcnQoKGl0ZW0xOiBzdHJpbmcsIGl0ZW0yOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckJ5Q29tcGFyYXRvcihpdGVtMiwgaXRlbTEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBvcmRlckJ5Q29tcGFyYXRvcihhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAoYS50b0xvd2VyQ2FzZSgpIDwgYi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoYS50b0xvd2VyQ2FzZSgpID4gYi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOT1RFOiAgQWRkcyBjbGFzcyBcInNlYXJjaC1oaWdobGlnaHRcIiB0byBzcGFuIGNvbnRhaW5pbmcgc2VhcmNoIHRlcm0uXHJcbkBQaXBlKHtcclxuICAgbmFtZTogJ2hpZ2hsaWdodCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XHJcblxyXG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHNlYXJjaFRlcm1zKTogU2FmZUh0bWwge1xyXG4gICAgaWYgKHNlYXJjaFRlcm1zICYmIHRleHQpIHtcclxuICAgICAgbGV0IHMgPSBzZWFyY2hUZXJtcztcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlYXJjaFRlcm1zKSkge1xyXG4gICAgICAgIGlmIChzZWFyY2hUZXJtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzID0gc2VhcmNoVGVybXMuam9pbignICcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBsZXQgcGF0dGVybiA9IHMucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcclxuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoJyAnKS5maWx0ZXIoKHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0Lmxlbmd0aCA+IDA7XHJcbiAgICAgIH0pLmpvaW4oJ3wnKTtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnaScpO1xyXG5cclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvIC9nLCAnJm5ic3AnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxyXG4gICAgICAgICAgdGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gpID0+IGA8c3BhbiBjbGFzcz1cInNlYXJjaC1oaWdobGlnaHRcIj4ke21hdGNofTwvc3Bhbj5gKVxyXG4gICAgICApO1xyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGEgbGlzdCAoYXJyYXkpIG9mIGl0ZW1zLiAgTW9zdGx5IHVzZWQgdG8gcmVtb3ZlIGEgc3RyaW5nXHJcbi8vIGZyb20gYSBsaXN0LCBpdCB3aWxsIGFsc28gd29yayB0byByZW1vdmUgYW4gb2JqZWN0IGZyb20gYSBsaXN0IG9mIG9iamVjdHNcclxuLy8gYXMgbG9uZyBhcyB0aGVyZSBpcyBhICduYW1lJyBwcm9wZXJ0eSBvbiB0aGUgb2JqZWN0XHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmVtb3ZlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlSXRlbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgLy8gUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtc1xyXG4gIHRyYW5zZm9ybShpdGVtczogYW55W10sIGl0ZW1Ub1JlbW92ZTogYW55KTogYW55W10ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpdGVtc1swXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IFxyXG4gICAgICAgIGl0ZW0ubG9jYWxlQ29tcGFyZShpdGVtVG9SZW1vdmUpICE9PSAwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpdGVtc1swXS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIGl0ZW1Ub1JlbW92ZS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBcclxuICAgICAgICBpdGVtLm5hbWUubG9jYWxlQ29tcGFyZShpdGVtVG9SZW1vdmUubmFtZSkgIT09IDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tUGlwZXMgPSB7XHJcbiAgRGF0ZUZvcm1hdFBpcGUsXHJcbiAgVHJ1bmNhdGVQaXBlLFxyXG4gIE9yZGVyQnlQaXBlLFxyXG4gIFJlbW92ZUl0ZW1QaXBlXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRXhwb3NlLCBjbGFzc1RvUGxhaW4gfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uIHtcclxuICAgIHVzZXJMb2dvbjogc3RyaW5nID0gJyc7XHJcbiAgICBsYXN0VXBkYXRlZDogc3RyaW5nID0gJyc7XHJcbiAgICBARXhwb3NlKHtuYW1lOiAnYW5ub3RhdGlvbklkJ30pXHJcbiAgICBpZDogc3RyaW5nID0gJyc7XHJcbiAgICBvYmplY3RJZDogc3RyaW5nID0gJyc7XHJcbiAgICBhbm5vdGF0aW9uVHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBub3RlVHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBuYXJyYXRpdmU6IHN0cmluZyA9ICcnO1xyXG4gICAgY29uZmlkZW5jZTpcdG51bWJlciA9IDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICBpZiAoanNvbikge1xyXG4gICAgICB0aGlzLnVzZXJMb2dvbiA9IGpzb24udXNlckxvZ29uO1xyXG4gICAgICB0aGlzLmxhc3RVcGRhdGVkID0ganNvbi5sYXN0VXBkYXRlZDtcclxuICAgICAgdGhpcy5pZCA9IGpzb24uYW5ub3RhdGlvbklkO1xyXG4gICAgICB0aGlzLm9iamVjdElkID0ganNvbi5vYmplY3RJZDtcclxuICAgICAgdGhpcy5hbm5vdGF0aW9uVHlwZSA9IGpzb24uYW5ub3RhdGlvblR5cGU7XHJcbiAgICAgIHRoaXMubm90ZVR5cGUgPSBqc29uLm5vdGVUeXBlO1xyXG4gICAgICB0aGlzLm5hcnJhdGl2ZSA9IGpzb24ubmFycmF0aXZlO1xyXG4gICAgICB0aGlzLmNvbmZpZGVuY2UgPSBqc29uLmNvbmZpZGVuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXJpYWxpemUoKSB7XHJcbiAgICByZXR1cm4gY2xhc3NUb1BsYWluKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XHJcblxyXG4gIGlzTG9jYWxob3N0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNEZXZNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pc0xvY2FsaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnbG9jYWxob3N0JztcclxuICAgIHRoaXMuaXNEZXZNb2RlID0gaXNEZXZNb2RlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBkaXNwbGF5cyBpbiB0aGUgY29uc29sZS4gd2lsbCBub3QgZGlzcGxheSBpbiBhIHByb2R1Y3Rpb24gYnVpbGRcclxuICBkZWJ1ZyguLi5tc2c6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNEZXZNb2RlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICAvLyBvbmx5IGRpc3BsYXkgaWYgcnVubmluZyBvbiBsb2NhbGhvc3RcclxuICBsb2NhbCguLi5tc2c6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNMb2NhbGhvc3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coLi4ubXNnKTtcclxuICB9XHJcblxyXG4gIGluZm8oLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coLi4ubXNnKTtcclxuICB9XHJcblxyXG4gIHdhcm4oLi4ubXNnOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc29sZS53YXJuKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICBlcnJvciguLi5tc2c6IGFueVtdKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmVycm9yKC4uLm1zZyk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHQoYmFja2dyb3VuZDogc3RyaW5nLCBtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYCVjICR7bXNnfSBgLCBgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kfTsgY29sb3I6ICMwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO2ApO1xyXG4gIH1cclxufVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlsIHtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHZW5lcmF0ZSBHdWlkXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgc3RhdGljIG5ld0d1aWQoKSB7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgbGV0IHV1aWQgPSAneHh4eHh4eHh4eHh4NHh4eHl4eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgbGV0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XHJcbiAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XHJcbiAgICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1dWlkO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBUYWtlcyBhIHZhcmlhYmxlIGxpc3Qgb2Ygc3RyaW5ncyBhbmQgY29tYmluZXMgdGhlbSBpbnRvIGEgdmFsaWQgdXJsLiBUaGlzXHJcbiAgICogZnVuY3Rpb24gd2lsbCBhdm9pZCB0aGUgcHJvYmxlbSBvZiBtaXNzaW5nIG9yIGV4dHJhICcvJyBjaGFyYWN0ZXJzLlxyXG4gICAqIEV4YW1wbGU6XHJcbiAgICogICAgaW5wdXQ6ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20vJywgJy9zdHJpbmcxLycsIC9zdHJpbmcyJywgJ3N0cmluZzMnXHJcbiAgICogICAgb3V0cHV0OiAnaHR0cDovL3d3dy5nb29nbGUuY29tL3N0cmluZzEvc3RyaW5nMi9zdHJpbmczJ1xyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHN0YXRpYyB1cmxKb2luKC4uLnN0ckFycmF5OiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IHJlc3VsdEFycmF5ID0gW107XHJcblxyXG4gICAgLy8gSWYgdGhlIGZpcnN0IHBhcnQgaXMgYSBwbGFpbiBwcm90b2NvbCwgd2UgY29tYmluZSBpdCB3aXRoIHRoZSBuZXh0IHBhcnQuXHJcbiAgICBpZiAoc3RyQXJyYXlbMF0ubWF0Y2goL15bXi86XSs6XFwvKiQvKSAmJiBzdHJBcnJheS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGxldCBmaXJzdCA9IHN0ckFycmF5LnNoaWZ0KCk7XHJcbiAgICAgIHN0ckFycmF5WzBdID0gZmlyc3QgKyBzdHJBcnJheVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVyZSBtdXN0IGJlIHR3byBvciB0aHJlZSBzbGFzaGVzIGluIHRoZSBmaWxlIHByb3RvY29sLCB0d28gc2xhc2hlcyBpbiBhbnl0aGluZyBlbHNlLlxyXG4gICAgaWYgKHN0ckFycmF5WzBdLm1hdGNoKC9eZmlsZTpcXC9cXC9cXC8vKSkge1xyXG4gICAgICBzdHJBcnJheVswXSA9IHN0ckFycmF5WzBdLnJlcGxhY2UoL14oW14vOl0rKTpcXC8qLywgJyQxOi8vLycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RyQXJyYXlbMF0gPSBzdHJBcnJheVswXS5yZXBsYWNlKC9eKFteLzpdKyk6XFwvKi8sICckMTovLycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvbXBvbmVudCA9IHN0ckFycmF5W2ldO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVXJsIG11c3QgYmUgYSBzdHJpbmcuIFJlY2VpdmVkICcgKyBjb21wb25lbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29tcG9uZW50ID09PSAnJykgeyBjb250aW51ZTsgfVxyXG5cclxuICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIHN0YXJ0aW5nIHNsYXNoZXMgZm9yIGVhY2ggY29tcG9uZW50IGJ1dCB0aGUgZmlyc3QuXHJcbiAgICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50LnJlcGxhY2UoL15bXFwvXSsvLCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGkgPCBzdHJBcnJheS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGVuZGluZyBzbGFzaGVzIGZvciBlYWNoIGNvbXBvbmVudCBidXQgdGhlIGxhc3QuXHJcbiAgICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50LnJlcGxhY2UoL1tcXC9dKyQvLCAnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRm9yIHRoZSBsYXN0IGNvbXBvbmVudCB3ZSB3aWxsIGNvbWJpbmUgbXVsdGlwbGUgc2xhc2hlcyB0byBhIHNpbmdsZSBvbmUuXHJcbiAgICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50LnJlcGxhY2UoL1tcXC9dKyQvLCAnLycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHRBcnJheS5wdXNoKGNvbXBvbmVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdHIgPSByZXN1bHRBcnJheS5qb2luKCcvJyk7XHJcbiAgICAvLyBFYWNoIGlucHV0IGNvbXBvbmVudCBpcyBub3cgc2VwYXJhdGVkIGJ5IGEgc2luZ2xlIHNsYXNoIGV4Y2VwdCB0aGUgcG9zc2libGUgZmlyc3QgcGxhaW4gcHJvdG9jb2wgcGFydC5cclxuXHJcbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2ggYmVmb3JlIHBhcmFtZXRlcnMgb3IgaGFzaFxyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcLyhcXD98JnwjW14hXSkvZywgJyQxJyk7XHJcblxyXG4gICAgLy8gcmVwbGFjZSA/IGluIHBhcmFtZXRlcnMgd2l0aCAmXHJcbiAgICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoJz8nKTtcclxuICAgIHN0ciA9IHBhcnRzLnNoaWZ0KCkgKyAocGFydHMubGVuZ3RoID4gMCA/ICc/JyA6ICcnKSArIHBhcnRzLmpvaW4oJyYnKTtcclxuXHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBjb25zb2xlLmxvZyBmdW5jdGlvbiB0byB0dXJuIG9mZlxyXG4gICAqIGFsbCBtZXNzYWdlcyBmb3IgcHJvZHVjdGlvbiwgb3IgaW50ZXJjZXB0IHRoZSBjb25zb2xlLmxvZyBmdW5jdGlvbiB0byBkb1xyXG4gICAqIHNvbWUgYWRkaXRpb25hbCBwcm9jZXNzaW5nLlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHN0YXRpYyBvdmVycmlkZUNvbnNvbGUoKSB7XHJcbiAgICBsZXQgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xyXG4gICAgaWYgKCFjb25zb2xlKSB7IHJldHVybjsgfVxyXG4gICAgZnVuY3Rpb24gaW50ZXJjZXB0KG1ldGhvZCkge1xyXG4gICAgICBsZXQgb3JpZ2luYWwgPSBjb25zb2xlW21ldGhvZF07XHJcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBkbyBzbmVha3kgc3R1ZmZcclxuICAgICAgICBpZiAob3JpZ2luYWwuYXBwbHkpIHtcclxuICAgICAgICAgIC8vIERvIHRoaXMgZm9yIG5vcm1hbCBicm93c2Vyc1xyXG4gICAgICAgICAgb3JpZ2luYWwuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gRG8gdGhpcyBmb3IgSUVcclxuICAgICAgICAgIGxldCBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGFyZ3VtZW50cykuam9pbignICcpO1xyXG4gICAgICAgICAgb3JpZ2luYWwobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgbGV0IG1ldGhvZHMgPSBbJ2xvZycsICd3YXJuJywgJ2Vycm9yJ107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaW50ZXJjZXB0KG1ldGhvZHNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHZXQgdGhlIGJlc3QgY29udHJhc3RpbmcgY29sb3IsIGVpdGhlciBibGFjayBvciB3aGl0ZSwgZm9yIGdpdmVuIGlucHV0IGNvbG9yLlxyXG4gICAqIFBhcmFtZXRlcnM6XHJcbiAgICogICAgY29sb3I6IGhleCBjb2xvciBzdWNoIGFzICcjRkYwMDc3J1xyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNvbnRyYXN0Q29sb3IoaGV4Q29sb3IpIHtcclxuICAgIC8vIENvdW50aW5nIHRoZSBwZXJjZXB0aXZlIGx1bWluYW5jZVxyXG4gICAgLy8gaHVtYW4gZXllIGZhdm9ycyBncmVlbiBjb2xvci4uLlxyXG4gICAgbGV0IHJnYiA9IHRoaXMuaGV4VG9SZ2IoaGV4Q29sb3IpO1xyXG4gICAgbGV0IGEgPSAxIC0gKDAuMjk5ICogcmdiLnIgKyAwLjU4NyAqIHJnYi5nICsgMC4xMTQgKiByZ2IuYikgLyAyNTU7XHJcbiAgICBpZiAoYSA8IDAuNSkge1xyXG4gICAgICByZXR1cm4gJyMwMDAwMDAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcjZmZmZmZmJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbG9yRnJvbVJnYihyLCBnLCBiKSB7XHJcbiAgICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50VG9IZXgoYykge1xyXG4gICAgbGV0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XHJcbiAgfVxyXG5cclxuICByZ2JUb0hleChyLCBnLCBiKSB7XHJcbiAgICByZXR1cm4gJyMnICsgdGhpcy5jb21wb25lbnRUb0hleChyKSArIHRoaXMuY29tcG9uZW50VG9IZXgoZykgKyB0aGlzLmNvbXBvbmVudFRvSGV4KGIpO1xyXG4gIH1cclxuXHJcbiAgaGV4VG9SZ2IoaGV4KSB7XHJcbiAgICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXHJcbiAgICBsZXQgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgaGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XHJcbiAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICByZXR1cm4gcmVzdWx0ID8ge1xyXG4gICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXHJcbiAgICB9IDogbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yLCBPYnNlcnZhYmxlLCBvZiwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vb3RoZXIvdXRpbCc7XHJcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi9tb2RlbHMvYW5ub3RhdGlvbic7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uU2VydmljZSB7XHJcblxyXG4gIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkgeyB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9hbm5vdGF0aW9uL3tvYmplY3RJZH1cclxuICAgKiBnZXQgYSBsaXN0IG9mIEFubm90YXRpb25zXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFubm90YXRpb25zKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFubm90YXRpb25bXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uU2VydmljZS5nZXRBbm5vdGF0aW9ucygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCBgL2Fubm90YXRpb24vJHtpZH1gKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGFubm90YXRpb24gbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgQW5ub3RhdGlvbihpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUE9TVCAvYW5ub3RhdGlvblxyXG4gICAqIGNyZWF0ZSBhIG5ldyBldmVudFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjcmVhdGVBbm5vdGF0aW9uKGFubm90YXRpb246IEFubm90YXRpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBbm5vdGF0aW9uU2VydmljZS5jcmVhdGVBbm5vdGF0aW9uKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvYW5ub3RhdGlvbicpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgUE9TVCAke3VybH1gLCBhbm5vdGF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgYW5ub3RhdGlvbi5zZXJpYWxpemUoKSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY3JlYXRlZCBhbm5vdGF0aW9uYCwgcmVzKSksXHJcbiAgICAgIC8vIG1hcChyZXMgPT4gbmV3IEFubm90YXRpb24ocmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL2Fubm90YXRpb25cclxuICAgKiB1cGRhdGUgZXZlbnRcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgdXBkYXRlQW5ub3RhdGlvbihhbm5vdGF0aW9uOiBBbm5vdGF0aW9uKTogT2JzZXJ2YWJsZTxBbm5vdGF0aW9uPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0Fubm90YXRpb25TZXJ2aWNlLnVwZGF0ZUFubm90YXRpb24oKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9hbm5vdGF0aW9uJyk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBQVVQgJHt1cmx9YCwgYW5ub3RhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxBbm5vdGF0aW9uPih1cmwsIGFubm90YXRpb24uc2VyaWFsaXplKCksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgYW5ub3RhdGlvbmAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IG5ldyBBbm5vdGF0aW9uKHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9hbm5vdGF0aW9uJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbm5vdGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLWFubm90YXRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub3RhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5ub3RhdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBvYmplY3RJZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYW5ub3RhdGlvblR5cGU6IHN0cmluZyA9ICcnOyAvLyBFVkVOVExJTkssIEVWRU5UTU9ERUwsIEVWRU5ULCBPQlNFUlZBQklMSVRZLCBQTEFOLCBDT0EsIFRBU0tcclxuXHJcbiAgYW5ub3RhdGlvbnNGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBmYWN0QW5ub3RhdGlvbnM6IEFycmF5PEFubm90YXRpb24+O1xyXG4gIGFzc3VtcHRpb25Bbm5vdGF0aW9uczogQXJyYXk8QW5ub3RhdGlvbj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBhbm5vdGF0aW9uU2VydmljZTogQW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGNvbnRyb2xzXHJcbiAgICB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGZhY3RzQ3RybDogW251bGwsIHsgdXBkYXRlT246ICdibHVyJyB9XSxcclxuICAgICAgYXNzdW1wdGlvbnNDdHJsOiBbbnVsbCwgeyB1cGRhdGVPbjogJ2JsdXInIH1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGFubm90YXRpb25zIHdoZW5ldmVyIGRhdGEgY2hhbmdlc1xyXG4gICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICBpZiAodGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5kaXJ0eSAmJiB0aGlzLmFubm90YXRpb25zRm9ybUdyb3VwLnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbm5vdGF0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvbnNDb21wb25lbnQubmdPbkNoYW5nZXMoKScpO1xyXG4gICAgaWYgKHRoaXMub2JqZWN0SWQpIHtcclxuICAgICAgLy8gR2V0IGFubm90YXRpb25zIGZvciB0aGlzIGV2ZW50IGFuZCBwb3B1bGF0ZSB0aGUgY29udHJvbHMuIElmIG5vIGFubm90YXRpb25zIGV4aXN0LCBjcmVhdGUgdGhlbVxyXG4gICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLmdldEFubm90YXRpb25zKHRoaXMub2JqZWN0SWQpLnN1YnNjcmliZShhbm5vdGF0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoeCA9PiB4Lm5vdGVUeXBlLnRvVXBwZXJDYXNlKCkgPT09ICdGQUNUJyk7XHJcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoeCA9PiB4Lm5vdGVUeXBlLnRvVXBwZXJDYXNlKCkgPT09ICdBU1NVTVBUSU9OJyk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZmFjdCBhbmQgYXNzdW1wdGlvbiBhbm5vdGF0aW9ucyBpZiBub25lIGV4aXN0XHJcbiAgICAgICAgaWYgKCF0aGlzLmZhY3RBbm5vdGF0aW9ucyB8fCB0aGlzLmZhY3RBbm5vdGF0aW9ucy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgbGV0IG5ld0Fubm90YXRpb24gPSBuZXcgQW5ub3RhdGlvbigpO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5vYmplY3RJZCA9IHRoaXMub2JqZWN0SWQ7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLmFubm90YXRpb25UeXBlID0gdGhpcy5hbm5vdGF0aW9uVHlwZTtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ubm90ZVR5cGUgPSAnRmFjdCc7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm5hcnJhdGl2ZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5jb250cm9sc1snZmFjdHNDdHJsJ10uc2V0VmFsdWUodGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9ucyB8fCB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9ucy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgbGV0IG5ld0Fubm90YXRpb24gPSBuZXcgQW5ub3RhdGlvbigpO1xyXG4gICAgICAgICAgbmV3QW5ub3RhdGlvbi5vYmplY3RJZCA9IHRoaXMub2JqZWN0SWQ7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLmFubm90YXRpb25UeXBlID0gdGhpcy5hbm5vdGF0aW9uVHlwZTtcclxuICAgICAgICAgIG5ld0Fubm90YXRpb24ubm90ZVR5cGUgPSAnQXNzdW1wdGlvbic7XHJcbiAgICAgICAgICBuZXdBbm5vdGF0aW9uLm5hcnJhdGl2ZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uc0Zvcm1Hcm91cC5jb250cm9sc1snYXNzdW1wdGlvbnNDdHJsJ10uc2V0VmFsdWUodGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbm5vdGF0aW9uQ29tcG9uZW50OiByZXF1aXJlZCBpbnB1dCBwYXJhbWV0ZXIgJ29iamVjdElkJyBpcyB1bmRlZmluZWRgKTsgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbm5vdGF0aW9ucygpIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQW5ub3RhdGlvbnNDb21wb25lbnQ6OnVwZGF0ZUFubm90YXRpb25zKCknKTtcclxuICAgIFxyXG4gICAgbGV0IGZhY3RzQ3RybCA9IHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuY29udHJvbHNbJ2ZhY3RzQ3RybCddO1xyXG4gICAgbGV0IGFzc3VtcHRpb25zQ3RybCA9IHRoaXMuYW5ub3RhdGlvbnNGb3JtR3JvdXAuY29udHJvbHNbJ2Fzc3VtcHRpb25zQ3RybCddO1xyXG5cclxuICAgIGlmIChmYWN0c0N0cmwuZGlydHkpIHtcclxuICAgICAgdGhpcy5mYWN0QW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlID0gZmFjdHNDdHJsLnZhbHVlO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIGFubm90YXRpb25JZCBpcyBlbXB0eSB0aGF0IGluZGljYXRlcyB0aGF0IHRoaXMgaXMgYSBuZXcgYW5ub3RhdGlvblxyXG4gICAgICBpZiAoIXRoaXMuZmFjdEFubm90YXRpb25zWzBdLmlkKSB7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uU2VydmljZS5jcmVhdGVBbm5vdGF0aW9uKHRoaXMuZmFjdEFubm90YXRpb25zWzBdKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuZmFjdEFubm90YXRpb25zWzBdID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UudXBkYXRlQW5ub3RhdGlvbih0aGlzLmZhY3RBbm5vdGF0aW9uc1swXSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZhY3RBbm5vdGF0aW9uc1swXSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc3N1bXB0aW9uc0N0cmwuZGlydHkpIHtcclxuICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0ubmFycmF0aXZlID0gYXNzdW1wdGlvbnNDdHJsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXS5pZCkge1xyXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvblNlcnZpY2UuY3JlYXRlQW5ub3RhdGlvbih0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFzc3VtcHRpb25Bbm5vdGF0aW9uc1swXSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25TZXJ2aWNlLnVwZGF0ZUFubm90YXRpb24odGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hc3N1bXB0aW9uQW5ub3RhdGlvbnNbMF0gPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1wYWdlLW5vdC1mb3VuZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlTm90Rm91bmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1wcm9ncmVzcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5oaWRlQ29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlQ29tcG9uZW50KCkge1xyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQ29udGFpbmVyJyk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdzZXQgc3R5bGUgb2YgXCJwcm9ncmVzc0NvbnRhaW5lclwiIHRvIFwibm9uZVwiJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCd1bmFibGUgdG8gZmluZCBlbGVtZW50IFwicHJvZ3Jlc3NDb250YWluZXJcIicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItdGl0bGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aXRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGl0bGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5vbkNhbmNlbC5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblJlcXVlc3Qge1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IGpzb24udXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGpzb24ucGFzc3dvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblJlc3BvbnNlIHtcclxuICAgIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgcmVhc29uOlx0c3RyaW5nO1xyXG4gICAgdG9rZW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBqc29uLmF1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IGpzb24uZGlzcGxheU5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWFzb24gPSBqc29uLnJlYXNvbjtcclxuICAgICAgICB0aGlzLnRva2VuID0ganNvbi50b2tlbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXF1ZXN0LCBBdXRoZW50aWNhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBsb2dpblJvdXRlOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIEFVVEhFTklDQVRFID0gJy9hdXRoZW50aWNhdGUnO1xyXG4gIHByaXZhdGUgR0VUX0RPTUFJTlMgPSAnL2RvbWFpbic7XHJcbiAgcHJpdmF0ZSBIVFRQX09QVElPTlMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBwcml2YXRlIFVTRVJJTkZPX0tFWTogc3RyaW5nID0gJ3VzZXJJbmZvJztcclxuXHJcbiAgcHJpdmF0ZSBpc0N1cnJlbnRseUxvZ2dlZEluID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nLCBsb2dpblJvdXRlID0gJy9sb2dpbicpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgICB0aGlzLmxvZ2luUm91dGUgPSBsb2dpblJvdXRlO1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHRoaXMuZ2V0VXNlcm5hbWVGcm9tU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluID0gKCh0aGlzLnVzZXJuYW1lICE9IG51bGwpICYmICh0aGlzLnVzZXJuYW1lLmxlbmd0aCA+IDApKTtcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0VG9Mb2dpblBhZ2UoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMubG9naW5Sb3V0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoZW50aWNhdGlvblNlcnZpY2VQcmVmaXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcm5hbWVGcm9tU3RvcmFnZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHVzZXJuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGxldCB1c2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9Gcm9tU3RvcmFnZSgpO1xyXG5cclxuICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5oYXNPd25Qcm9wZXJ0eSgndXNlck5hbWUnKSAmJlxyXG4gICAgICAodXNlckluZm8udXNlck5hbWUubGVuZ3RoID4gMCkpIHtcclxuICAgICAgdXNlcm5hbWUgPSB1c2VySW5mby51c2VyTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlcm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXREaXNwbGF5TmFtZUZyb21TdG9yYWdlKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgZGlzcGxheU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGV0IHVzZXJJbmZvID0gdGhpcy5nZXRVc2VySW5mb0Zyb21TdG9yYWdlKCk7XHJcblxyXG4gICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmhhc093blByb3BlcnR5KCdkaXNwbGF5TmFtZScpICYmXHJcbiAgICAgICh1c2VySW5mby5kaXNwbGF5TmFtZS5sZW5ndGggPiAwKSkge1xyXG4gICAgICBkaXNwbGF5TmFtZSA9IHVzZXJJbmZvLmRpc3BsYXlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG4gIGdldFRva2VuRnJvbVN0b3JhZ2UoKTogc3RyaW5nIHtcclxuICAgIGxldCB0b2tlbjogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgdXNlckluZm8gPSB0aGlzLmdldFVzZXJJbmZvRnJvbVN0b3JhZ2UoKTtcclxuXHJcbiAgICBpZiAodXNlckluZm8gJiYgdXNlckluZm8uaGFzT3duUHJvcGVydHkoJ3Rva2VuJykgJiZcclxuICAgICAgKHVzZXJJbmZvLnRva2VuLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHRva2VuID0gdXNlckluZm8udG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm9Gcm9tU3RvcmFnZSgpOiBhbnkge1xyXG4gICAgbGV0IHVzZXJJbmZvOiBhbnk7XHJcbiAgICB1c2VySW5mbyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5VU0VSSU5GT19LRVkpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJJbmZvKTtcclxuICB9XHJcblxyXG4gIHB1dFVzZXJJbmZvSW5TdG9yYWdlKHVzZXJJbmZvOiBhbnkpOiB2b2lkIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5VU0VSSU5GT19LRVksIHVzZXJJbmZvKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNDdXJyZW50bHlMb2dnZWRJbjtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50VXNlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFVzZXJuYW1lRnJvbVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlOYW1lRnJvbVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCB0b2tlbigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuRnJvbVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRBbGxEb21haW5zKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0RPTUFJTlMpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdBdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0QWxsRG9tYWlucygpIC0gdXJsID0gJyArIHVybCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIHRoaXMuSFRUUF9PUFRJT05TKS5waXBlKFxyXG4gICAgICB0YXAoeCA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYHJldHJlaXZlZCBkb21haW4gbGlzdGApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMuc3RyaW5ncyBhcyBzdHJpbmdbXSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9nSW4odXNlckluZm8sIGRvbWFpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxBdXRoZW50aWNhdGlvblJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkFVVEhFTklDQVRFLCBkb21haW4pO1xyXG4gICAgbGV0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvblJlcXVlc3QodXNlckluZm8pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBdXRoZW50aWNhdGlvblJlc3BvbnNlPih1cmwsIGF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgdGhpcy5IVFRQX09QVElPTlMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChcclxuICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdnb3QgYXV0aGVudGljYXRpb24gcmVzcG9uc2UgJyArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblJlc3BvbnNlID0gbmV3IMOCwqBBdXRoZW50aWNhdGlvblJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucHV0VXNlckluZm9JblN0b3JhZ2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJJbmZvLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGF1dGhlbnRpY2F0aW9uUmVzcG9uc2UuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYXV0aGVudGljYXRpb25SZXNwb25zZS50b2tlbixcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0N1cnJlbnRseUxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLndhcm4oJ0Vycm9yIGF1dGhlbnRpY2F0aW5nLiAgWycgKyBlcnJvciArICddJyk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2dPdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLlVTRVJJTkZPX0tFWSk7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gJyc7XHJcbiAgICB0aGlzLmlzQ3VycmVudGx5TG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB0aGlzLnJlZGlyZWN0VG9Mb2dpblBhZ2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsICBPbkluaXQsICBJbnB1dCwgIFZpZXdDaGlsZCwgIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQgIHtcclxuXHJcbiAgQElucHV0KCkgYXBwTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQFZpZXdDaGlsZCgndXNlcm5hbWUnKSB1c2VybmFtZTogRWxlbWVudFJlZjtcclxuICBcclxuICBwcml2YXRlIHJldHVyblVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBFUlJPUl9NRVNTQUdFUzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgIGxvZ2luTWVzc2FnZTogJ1VuYWJsZSB0byBTaWduIEluLCB0cnkgYWdhaW4uJyxcclxuICB9O1xyXG4gIHB1YmxpYyBkb21haW5MaXN0OiBzdHJpbmdbXSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgcHVibGljIHNlbGVjdGVkRG9tYWluID0gJ2Nvcyc7XHJcblxyXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgbG9naW5GYWlsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2FwcE5hbWUnXTtcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgIHRoaXMucmV0dXJuVXJsID0gcGFyYW1zWydyZXR1cm4nXSB8fCAnLyc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEFsbERvbWFpbnMoKVxyXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29tcG9uZW50LmRvbWFpbkxpc3QucHVzaChyZXNwb25zZVtpXSk7XHJcbiAgICAgIH1cclxuICAgICAgY29tcG9uZW50LnNlbGVjdGVkRG9tYWluID0gY29tcG9uZW50LmRvbWFpbkxpc3RbMF07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIC8vIFNldCB0aGUgZm9jdXMgdG8gdGhlIHVzZXJuYW1lIChtd3QpXHJcbiAgICB0aGlzLnVzZXJuYW1lLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICB1c2VybmFtZTogWycnLCBbXHJcbiAgICAgICAgLy8gVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSxcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLm1heExlbmd0aCg1MClcclxuICAgICAgXV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtcclxuICAgICAgICAvLyBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIC8vIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgIC8vIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKVxyXG4gICAgICBdXSxcclxuICAgICAgZG9tYWluOiBbe3ZhbHVlOiB0aGlzLnNlbGVjdGVkRG9tYWluLCBkaXNhYmxlZDogZmFsc2V9LCBbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgXV0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ0luKCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGxldCB1c2VybmFtZSA9IHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzLnVzZXJuYW1lLnZhbHVlO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gdGhpcy5sb2dpbkZvcm0uY29udHJvbHMucGFzc3dvcmQudmFsdWU7XHJcblxyXG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nSW4oe1xyXG4gICAgICB1c2VyTmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZH0sIHRoaXMuc2VsZWN0ZWREb21haW4pXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblJlc3BvbnNlID0gbmV3w4LCoEF1dGhlbnRpY2F0aW9uUmVzcG9uc2UocmVzKTtcclxuICAgICAgICAgIGlmICghYXV0aGVudGljYXRpb25SZXNwb25zZS5hdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5GYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnJldHVyblVybCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFcnJvciBvY2N1cmVkIHdoaWxlIGF1dGhlbnRpY2F0aW5nLiAgJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbkZhaWxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT25Gb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnN1Ym1pdHRlZCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmxvZ2luRmFpbGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubG9naW5Gb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgIHRoaXMubG9naW5Gb3JtLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1lbXB0eScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbXB0eUNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFjY2Vzc1dpbmRvd0xpbWl0IH0gZnJvbSAnLi9hY2Nlc3Mtd2luZG93LWxpbWl0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXR5IHtcclxuICAgIGNhcGFiaWxpdHlJZDogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNvbmZpZGVuY2U6IHN0cmluZztcclxuICAgIGNhcGFiaWxpdHlNYXBJZDogc3RyaW5nO1xyXG4gICAgcHJlRXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgcG9zdEV4ZWN1dGlvblRpbWU6IG51bWJlcjtcclxuICAgIHJlbGlhYmlsaXR5UHJvYmFiaWxpdHk6IG51bWJlcjtcclxuICAgIHByb2JhYmlsaXR5T2ZTdWNjZXNzOiBudW1iZXI7XHJcbiAgICBpc0RlZGljYXRlZDogYm9vbGVhbjtcclxuICAgIGFzc2Vzc1RpbWU6IG51bWJlcjtcclxuICAgIHByaW9yaXR5OiBudW1iZXI7XHJcbiAgICBleGVjdXRpb25UaW1lOiBudW1iZXI7XHJcblxyXG4gICAgZWxldmF0aW9uTWluTGltaXQ6IG51bWJlcjtcclxuICAgIGVsZXZhdGlvbk1heExpbWl0OiBudW1iZXI7XHJcbiAgICBlYXJ0aExpbWJBbHRMaW1pdDogbnVtYmVyO1xyXG4gICAgcXVhbGl0eVNjb3JlOiBudW1iZXI7XHJcbiAgICBsdW5hckV4Y2x1c2lvbkFuZ2xlOiBudW1iZXI7XHJcbiAgICBhcHBseUxpZ2h0aW5nQ29uc3RyYWludHM6IGJvb2xlYW47XHJcbiAgICBzb2xhckV4Y2x1c2lvbkFuZ2xlOiBudW1iZXI7XHJcbiAgICBhcHBseVNvbGFyRGFya25lc3NDb25zdHJhaW50OiBib29sZWFuO1xyXG4gICAgcmFuZ2VNaW46IG51bWJlcjtcclxuICAgIHJhbmdlTWF4OiBudW1iZXI7XHJcbiAgICBhemltdXRoTWluTGltaXQ6IG51bWJlcjtcclxuICAgIGF6aW11dGhNYXhMaW1pdDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdHlJZCA9IGpzb24uY2FwYWJpbGl0eUlkO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBqc29uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY29uZmlkZW5jZSA9IGpzb24uY29uZmlkZW5jZTtcclxuICAgICAgICB0aGlzLmNhcGFiaWxpdHlNYXBJZCA9IGpzb24uY2FwYWJpbGl0eU1hcElkO1xyXG4gICAgICAgIHRoaXMucHJlRXhlY3V0aW9uVGltZSA9IGpzb24ucHJlRXhlY3V0aW9uVGltZTtcclxuICAgICAgICB0aGlzLnBvc3RFeGVjdXRpb25UaW1lID0ganNvbi5wb3N0RXhlY3V0aW9uVGltZTtcclxuICAgICAgICB0aGlzLnJlbGlhYmlsaXR5UHJvYmFiaWxpdHkgPSBqc29uLnJlbGlhYmlsaXR5UHJvYmFiaWxpdHk7XHJcbiAgICAgICAgdGhpcy5wcm9iYWJpbGl0eU9mU3VjY2VzcyA9IGpzb24ucHJvYmFiaWxpdHlPZlN1Y2Nlc3M7XHJcbiAgICAgICAgdGhpcy5pc0RlZGljYXRlZCA9IGpzb24uaXNEZWRpY2F0ZWQ7XHJcbiAgICAgICAgdGhpcy5hc3Nlc3NUaW1lID0ganNvbi5hc3Nlc3NUaW1lO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBqc29uLnByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uVGltZSA9IGpzb24uZXhlY3V0aW9uVGltZTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGV2YXRpb25NaW5MaW1pdCA9IGpzb24uZWxldmF0aW9uTWluTGltaXQ7XHJcbiAgICAgICAgdGhpcy5lbGV2YXRpb25NYXhMaW1pdCA9IGpzb24uZWxldmF0aW9uTWF4TGltaXQ7XHJcbiAgICAgICAgdGhpcy5lYXJ0aExpbWJBbHRMaW1pdCA9IGpzb24uZWFydGhMaW1iQWx0TGltaXQ7XHJcbiAgICAgICAgdGhpcy5xdWFsaXR5U2NvcmUgPSBqc29uLnF1YWxpdHlTY29yZTtcclxuICAgICAgICB0aGlzLmx1bmFyRXhjbHVzaW9uQW5nbGUgPSBqc29uLmx1bmFyRXhjbHVzaW9uQW5nbGU7XHJcbiAgICAgICAgdGhpcy5hcHBseUxpZ2h0aW5nQ29uc3RyYWludHMgPSBqc29uLmFwcGx5TGlnaHRpbmdDb25zdHJhaW50cztcclxuICAgICAgICB0aGlzLnNvbGFyRXhjbHVzaW9uQW5nbGUgPSBqc29uLnNvbGFyRXhjbHVzaW9uQW5nbGU7XHJcbiAgICAgICAgdGhpcy5hcHBseVNvbGFyRGFya25lc3NDb25zdHJhaW50ID0ganNvbi5hcHBseVNvbGFyRGFya25lc3NDb25zdHJhaW50O1xyXG4gICAgICAgIHRoaXMucmFuZ2VNaW4gPSBqc29uLnJhbmdlTWluO1xyXG4gICAgICAgIHRoaXMucmFuZ2VNYXggPSBqc29uLnJhbmdlTWF4O1xyXG4gICAgICAgIHRoaXMuYXppbXV0aE1pbkxpbWl0ID0ganNvbi5hemltdXRoTWluTGltaXQ7XHJcbiAgICAgICAgdGhpcy5hemltdXRoTWF4TGltaXQgPSBqc29uLmF6aW11dGhNYXhMaW1pdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcGFiaWxpdHlNYXAge1xyXG4gICAgY2FwYWJpbGl0eU1hcElkOiBzdHJpbmcgPSAnJztcclxuICAgIGNhcGFiaWxpdHlUeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIHVjaUNhcGFiaWxpdHlUeXBlTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICB1Y2lUYXNrVHlwZU5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgaGFzVGFyZ2V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0eU1hcElkID0ganNvbi5jYXBhYmlsaXR5TWFwSWQgPyBqc29uLmNhcGFiaWxpdHlNYXBJZCA6ICcnO1xyXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0eVR5cGUgPSBqc29uLmNhcGFiaWxpdHlUeXBlID8ganNvbi5jYXBhYmlsaXR5VHlwZSA6ICcnO1xyXG4gICAgICAgIHRoaXMudWNpQ2FwYWJpbGl0eVR5cGVOYW1lID0ganNvbi51Y2lDYXBhYmlsaXR5VHlwZU5hbWUgPyBqc29uLnVjaUNhcGFiaWxpdHlUeXBlTmFtZSA6ICcnO1xyXG4gICAgICAgIHRoaXMudWNpVGFza1R5cGVOYW1lID0ganNvbi51Y2lUYXNrVHlwZU5hbWUgPyBqc29uLnVjaVRhc2tUeXBlTmFtZSA6ICcnO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBqc29uLmRlc2NyaXB0aW9uID8ganNvbi5kZXNjcmlwdGlvbiA6ICcnO1xyXG4gICAgICAgIHRoaXMuaGFzVGFyZ2V0ID0ganNvbi5oYXNUYXJnZXQgPyBqc29uLmhhc1RhcmdldCA6ICcnIDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9ic2VydmFiaWxpdHkge1xyXG4gICAgb2JzZXJ2aW5nQ2FwYWJpbGl0eU1hcElkOiBzdHJpbmc7XHJcbiAgICBvYnNlcnZpbmdDYXBhYmlsaXR5VHlwZTogc3RyaW5nO1xyXG4gICAgdXNlZENhcGFiaWxpdHlNYXBJZDogc3RyaW5nO1xyXG4gICAgdXNlZENhcGFiaWxpdHlUeXBlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY2FwYWJpbGl0eURvbWFpbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICBpZiAoanNvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2aW5nQ2FwYWJpbGl0eU1hcElkID0ganNvbi5vYnNlcnZpbmdDYXBhYmlsaXR5TWFwSWQ7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2aW5nQ2FwYWJpbGl0eVR5cGUgPSBqc29uLm9ic2VydmluZ0NhcGFiaWxpdHlUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZWRDYXBhYmlsaXR5TWFwSWQgPSBqc29uLnVzZWRDYXBhYmlsaXR5TWFwSWQ7XHJcbiAgICAgICAgICAgIHRoaXMudXNlZENhcGFiaWxpdHlUeXBlID0ganNvbi51c2VkQ2FwYWJpbGl0eVR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBqc29uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmNhcGFiaWxpdHlEb21haW4gPSBqc29uLmNhcGFiaWxpdHlEb21haW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWdWxuZXJhYmlsaXR5IHtcclxuXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNvbmZpZGVuY2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5mcm9tSnNvbihqc29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUpzb24oanNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGpzb24udnVsbmVyYWJpbGl0eUlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGpzb24udnVsbmVyYWJpbGl0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICBqc29uLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY29uZmlkZW5jZSA9IGpzb24uY29uZmlkZW5jZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRG9tYWluIHtcclxuICAgIGRvbWFpblR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgYWdzRW50aXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgc2NjTnVtOiBzdHJpbmcgPSAnJztcclxuICAgIG9yYml0VHlwZTogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdGVsbGF0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGludGxEZXNpZ25hdG9yOiBzdHJpbmcgPSAnJztcclxuICAgIGxhdW5jaFNpdGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbGF1bmNoRGF0ZTogc3RyaW5nID0gJyc7XHJcbiAgICBkZWNheURhdGU6IHN0cmluZyA9ICcnO1xyXG4gICAgdGxlczogYW55W107XHJcbiAgICB3YXlwb2ludHM6IGFueVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSBqc29uLmRvbWFpblR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuYWdzRW50aXR5SWQgPSBqc29uLmFnc0VudGl0eUlkO1xyXG4gICAgICAgICAgICB0aGlzLnNjY051bSA9IGpzb24uc2NjTnVtO1xyXG4gICAgICAgICAgICB0aGlzLm9yYml0VHlwZSA9IGpzb24ub3JiaXRUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0ZWxsYXRpb24gPSBqc29uLmNvbnN0ZWxsYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuaW50bERlc2lnbmF0b3IgPSBqc29uLmludGxEZXNpZ25hdG9yO1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaFNpdGUgPSBqc29uLmxhdW5jaFNpdGU7XHJcbiAgICAgICAgICAgIHRoaXMubGF1bmNoRGF0ZSA9IGpzb24ubGF1bmNoRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5kZWNheURhdGUgPSBqc29uLmRlY2F5RGF0ZTtcclxuICAgICAgICAgICAgdGhpcy50bGVzID0ganNvbi50bGVzO1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cyA9IGpzb24ud2F5cG9pbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kb21haW5UeXBlID0gJ1NQQUNFJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FwYWJpbGl0eSB9IGZyb20gJy4vY2FwYWJpbGl0eSc7XHJcbmltcG9ydCB7IFZ1bG5lcmFiaWxpdHkgfSBmcm9tICcuL3Z1bG5lcmFiaWxpdHknO1xyXG5pbXBvcnQgeyBEb21haW4gfSBmcm9tICcuL2RvbWFpbic7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuZXhwb3J0IGNsYXNzIENvdW50cnkge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvbUpzb24oanNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyb21Kc29uKGpzb246IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0ganNvblswXTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICAgIGVudGl0eVR5cGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBvd25lcjogc3RyaW5nID0gJyc7XHJcbiAgICBzaWM6IHN0cmluZyA9ICcnO1xyXG4gICAgY291bnRyeUNvZGVBbHBoYTU6IHN0cmluZyA9ICcnO1xyXG4gICAgYWZmaWxpYXRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgcmdiOiBzdHJpbmcgPSAnJztcclxuICAgIGNvbG9yTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwYXJlbnRJZDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY2hpbGRyZW5JZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBncm91cElkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGNhcGFiaWxpdGllczogQ2FwYWJpbGl0eVtdID0gW107XHJcbiAgICB2dWxuZXJhYmlsaXRpZXM6IFZ1bG5lcmFiaWxpdHlbXTtcclxuXHJcbiAgICBkb21haW46XHREb21haW47XHJcbiAgICBhZ3NFbnRpdHlJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5VHlwZSA9IGpzb24uZW50aXR5VHlwZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uLm5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGpzb24uZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5vd25lciA9IGpzb24ub3duZXI7XHJcbiAgICAgICAgdGhpcy5zaWMgPSBqc29uLnNpYztcclxuICAgICAgICB0aGlzLmNvdW50cnlDb2RlQWxwaGE1ID0ganNvbi5jb3VudHJ5Q29kZUFscGhhNTtcclxuICAgICAgICB0aGlzLmFmZmlsaWF0aW9uID0ganNvbi5hZmZpbGlhdGlvbjtcclxuICAgICAgICB0aGlzLnJnYiA9IGpzb24ucmdiO1xyXG4gICAgICAgIHRoaXMuY29sb3JOYW1lID0ganNvbi5jb2xvck5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRJZCA9IGpzb24ucGFyZW50SWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5JZHMgPSBqc29uLmNoaWxkcmVuSWRzID8ganNvbi5jaGlsZHJlbklkcyA6IFtdO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJZHMgPSBqc29uLmdyb3VwSWRzID8ganNvbi5ncm91cElkcyA6IFtdO1xyXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzID0ganNvbi5jYXBhYmlsaXRpZXMgPyBqc29uLmNhcGFiaWxpdGllcy5tYXAoeCA9PiBuZXcgQ2FwYWJpbGl0eSh4KSkgOiBbXTtcclxuICAgICAgICB0aGlzLnZ1bG5lcmFiaWxpdGllcyA9IGpzb24udnVsbmVyYWJpbGl0aWVzID8ganNvbi52dWxuZXJhYmlsaXRpZXMubWFwKHggPT4gbmV3IFZ1bG5lcmFiaWxpdHkoeCkpIDogW107XHJcblxyXG4gICAgICAgIHRoaXMuZG9tYWluID0ganNvbi5kb21haW4gPyBuZXcgRG9tYWluKGpzb24uZG9tYWluKSA6IG5ldyBEb21haW4oKTtcclxuICAgICAgICB0aGlzLmFnc0VudGl0eUlkID0ganNvbi5hZ3NFbnRpdHlJZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpYWxFbnRpdHkge1xyXG4gICAgZW50aXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBjb3VudHJ5TmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBkb21haW5UeXBlOiBzdHJpbmcgPSAnJztcclxuICAgIG93bmVyOiBzdHJpbmcgPSAnJztcclxuICAgIHNjYzogc3RyaW5nID0gJyc7XHJcbiAgICBhZmZpbGlhdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcbiAgICBjYXBhYmlsaXR5VHlwZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuZW50aXR5SWQgPSBqc29uLmFnc0VudGl0eUlkID8ganNvbi5hZ3NFbnRpdHlJZCA6ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGpzb24ubmFtZSA/IGpzb24ubmFtZSA6ICcnO1xyXG4gICAgICAgIHRoaXMuY291bnRyeU5hbWUgPSBqc29uLmNvdW50cnkgPyBqc29uLmNvdW50cnkgOiAnJztcclxuICAgICAgICB0aGlzLmRvbWFpblR5cGUgPSBqc29uLmRvbWFpblR5cGUgPyBqc29uLmRvbWFpblR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLm93bmVyID0ganNvbi5vd25lciA/IGpzb24ub3duZXIgOiAnJztcclxuICAgICAgICB0aGlzLnNjYyA9IGpzb24uc2NjTnVtID8ganNvbi5zY2NOdW0udG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgIHRoaXMuYWZmaWxpYXRpb24gPSBqc29uLmFmZmlsaWF0aW9uID8ganNvbi5hZmZpbGlhdGlvbiA6ICcnO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0ganNvbi5ncm91cHMgPyBqc29uLmdyb3Vwcy5tYXAoeCA9PiBuZXcgR3JvdXAoeCkpIDogW107XHJcbiAgICAgICAgdGhpcy5jYXBhYmlsaXR5VHlwZXMgPSBqc29uLmNhcGFiaWxpdHlUeXBlcyA/IGpzb24uY2FwYWJpbGl0eVR5cGVzIDogW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cCB7XHJcbiAgICBncm91cE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgZW50aXR5Q291bnQ6IG51bWJlcjtcclxuICAgIGdyb3VwSWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vTkVXIE1PREVMIERFRklOSVRJT05cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbj86IGFueSkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0ganNvbi5ncm91cE5hbWUgPyBqc29uLmdyb3VwTmFtZSA6IGpzb24ubmFtZTtcclxuICAgICAgICB0aGlzLmVudGl0eUNvdW50ID0ganNvbi5lbnRpdHlDb3VudDtcclxuICAgICAgICB0aGlzLmdyb3VwSWQgPSBqc29uLmdyb3VwSWQgPyBqc29uLmdyb3VwSWQgOiBqc29uLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGpzb24ubmFtZSA/IGpzb24ubmFtZSA6IGpzb24uZ3JvdXBOYW1lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLmlkID8ganNvbi5pZCA6IGpzb24uZ3JvdXBJZDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQmFzZUVudGl0eSBjbGFzcyBpcyBvbmx5IGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSBoZWxwZXIgY2xhc3MgZm9yIHNlcnZpY2UgY2FsbHMuXHJcbmV4cG9ydCBjbGFzcyBCYXNlRW50aXR5IHtcclxuICAgIGFnc0VudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBlbnRpdHlUeXBlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgb3duZXI6IHN0cmluZztcclxuICAgIHNpYzogc3RyaW5nO1xyXG4gICAgZG9tYWluVHlwZTogc3RyaW5nO1xyXG4gICAgcGFyZW50SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIHRoaXMuYWdzRW50aXR5SWQgPSBlbnRpdHkuYWdzRW50aXR5SWQ7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlUeXBlID0gZW50aXR5LmVudGl0eVR5cGUgPyBlbnRpdHkuZW50aXR5VHlwZSA6ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGVudGl0eS5uYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBlbnRpdHkuZGVzY3JpcHRpb24gPyBlbnRpdHkuZGVzY3JpcHRpb24gOiAnJztcclxuICAgICAgICB0aGlzLm93bmVyID0gZW50aXR5Lm93bmVyID8gZW50aXR5Lm93bmVyIDogJyc7XHJcbiAgICAgICAgdGhpcy5zaWMgPSBlbnRpdHkuc2ljID8gZW50aXR5LnNpYyA6ICcnO1xyXG4gICAgICAgIHRoaXMuZG9tYWluVHlwZSA9IGVudGl0eS5kb21haW4uZG9tYWluVHlwZSA/IGVudGl0eS5kb21haW4uZG9tYWluVHlwZSA6ICcnO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7dGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgIE9ic2VydmFibGUgLCAgU3ViamVjdCAsICBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgQ2FjaGVDb250ZW50IHtcclxuICBleHBpcnk6IG51bWJlcjtcclxuICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQ2FjaGUgU2VydmljZSBpcyBhbiBvYnNlcnZhYmxlcyBiYXNlZCBpbi1tZW1vcnkgY2FjaGUgaW1wbGVtZW50YXRpb25cclxuICogS2VlcHMgdHJhY2sgb2YgaW4tZmxpZ2h0IG9ic2VydmFibGVzIGFuZCBzZXRzIGEgZGVmYXVsdCBleHBpcnkgZm9yIGNhY2hlZCB2YWx1ZXNcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjYWNoZTogTWFwPHN0cmluZywgQ2FjaGVDb250ZW50PiA9IG5ldyBNYXA8c3RyaW5nLCBDYWNoZUNvbnRlbnQ+KCk7XHJcbiAgcmVhZG9ubHkgREVGQVVMVF9NQVhfQUdFOiBudW1iZXIgPSAzMDAwMDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHZhbHVlIGZyb20gY2FjaGUgaWYgdGhlIGtleSBpcyBwcm92aWRlZC5cclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcsIGZhbGxiYWNrPzogT2JzZXJ2YWJsZTxhbnk+LCBtYXhBZ2U/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4gfCBTdWJqZWN0PGFueT4ge1xyXG5cclxuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2FjaGVkVmFsdWUoa2V5KSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWNHZXR0aW5nIGZyb20gY2FjaGUgJHtrZXl9YCwgJ2NvbG9yOiBncmVlbicpO1xyXG4gICAgICByZXR1cm4gb2YodGhpcy5jYWNoZS5nZXQoa2V5KS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFtYXhBZ2UpIHtcclxuICAgICAgbWF4QWdlID0gdGhpcy5ERUZBVUxUX01BWF9BR0U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZhbGxiYWNrICYmIGZhbGxiYWNrIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJWMgQ2FsbGluZyBhcGkgZm9yICR7a2V5fWAsICdjb2xvcjogcHVycGxlJyk7XHJcbiAgICAgIHJldHVybiBmYWxsYmFjay5waXBlKHRhcCgodmFsdWUpID0+IHsgdGhpcy5zZXQoa2V5LCB2YWx1ZSwgbWF4QWdlKTsgIC8qY29uc29sZS5sb2coYCVjIGFkZGVkICR7a2V5fS8ke0pTT04uc3RyaW5naWZ5KHZhbHVlKS5zdWJzdHIoMCwgNTApfSB0byBjYWNoZWAsICdjb2xvcjogcHVycGxlJyk7Ki8gfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKCdSZXF1ZXN0ZWQga2V5IGlzIG5vdCBhdmFpbGFibGUgaW4gQ2FjaGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHZhbHVlIHdpdGgga2V5IGluIHRoZSBjYWNoZVxyXG4gICAqIE5vdGlmaWVzIGFsbCBvYnNlcnZlcnMgb2YgdGhlIG5ldyB2YWx1ZVxyXG4gICAqL1xyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbWF4QWdlOiBudW1iZXIgPSB0aGlzLkRFRkFVTFRfTUFYX0FHRSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZS5zZXQoa2V5LCB7IHZhbHVlOiB2YWx1ZSwgZXhwaXJ5OiBEYXRlLm5vdygpICsgbWF4QWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBhIGtleSBleGlzdHMgaW4gY2FjaGVcclxuICAgKi9cclxuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlLmhhcyhrZXkpO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIERlbGV0ZSBjYWNoZSBlbnRyeVxyXG4gICAqL1xyXG4gIGRlbGV0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUga2V5IGV4aXN0cyBhbmQgaGFzIG5vdCBleHBpcmVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFzVmFsaWRDYWNoZWRWYWx1ZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgaWYgKHRoaXMuY2FjaGUuZ2V0KGtleSkuZXhwaXJ5IDwgRGF0ZS5ub3coKSkge1xyXG4gICAgICAgIHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUsIG9mLCBmb3JrSm9pbiwgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbnRpdHksIFBhcnRpYWxFbnRpdHksIEJhc2VFbnRpdHksIEdyb3VwLCBDb3VudHJ5IH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eSc7XHJcbmltcG9ydCB7IENhcGFiaWxpdHlNYXAsIE9ic2VydmFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvY2FwYWJpbGl0eSc7XHJcbmltcG9ydCB7IFZ1bG5lcmFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvdnVsbmVyYWJpbGl0eSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIHtcclxuXHJcbiAgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIEdFVF9FTlRJVFkgPSAnL2VudGl0eS8nO1xyXG4gIEdFVF9FTlRJVElFU19CWV9TVUJTVFJJTkcgPSAnL2VudGl0eS9nZXRFbnRpdGllc0J5U3Vic3RyaW5nLyc7XHJcbiAgR0VUX0FMTF9DQVBBQklMSVRZX1RZUEVTID0gJy9lbnRpdHkvZ2V0QWxsQ2FwYWJpbGl0eVR5cGVzJztcclxuICBHRVRfQUxMX0NBUEFCSUxJVFlfTUFQUyA9ICcvZW50aXR5L2dldEFsbENhcGFiaWxpdHlNYXBzJztcclxuICBHRVRfQUxMX1ZVTE5FUkFCSUxJVElFUyA9ICcvZW50aXR5L2dldEFsbFZ1bG5lcmFiaWxpdGllcyc7XHJcbiAgR0VUX0FMTF9BRkZJTElBVElPTlMgPSAnL2VudGl0eS9nZXRBbGxBZmZpbGlhdGlvbnMnO1xyXG4gIEdFVF9BTExfQ09VTlRSSUVTID0gJy9lbnRpdHkvZ2V0QWxsQ291bnRyaWVzJztcclxuICBDUkVBVEVfR1JPVVAgPSAnL2VudGl0eS9jcmVhdGVHcm91cEJ5R3JvdXBOYW1lJztcclxuICBHRVRfQUxMX0VOVElUWV9HUk9VUFMgPSAnL2VudGl0eS9nZXRBbGxFbnRpdHlHcm91cHMnO1xyXG4gIEdFVF9FTlRJVElFU19CWV9HUk9VUCA9ICcvZW50aXR5L2dldEVudGl0aWVzQnlHcm91cC8nO1xyXG5cclxuICBHRVRfUEFSVElBTF9FTlRJVElFU19CWV9HUk9VUCA9ICcvZW50aXR5L2dldFBhcnRpYWxFbnRpdGllc0J5R3JvdXAvJztcclxuICBQQVJUSUFMX0VOVElUSUVTX0JZX1NVQlNUUklOR1MgPSAnL2VudGl0eS9wYXJ0aWFsJztcclxuXHJcbiAgVVBEQVRFX0VOVElUWSA9ICcvZW50aXR5Lyc7XHJcbiAgQUREX09SX1VQREFURV9DQVBBQklMSVRZX01BUCA9ICcvZW50aXR5L2FkZE9yVXBkYXRlQ2FwYWJpbGl0eU1hcCc7XHJcbiAgQUREX09SX1VQREFURV9PQlNFUlZBQklMSVRZID0gJy9lbnRpdHkvYWRkT3JVcGRhdGVPYnNlcnZhYmlsaXR5JztcclxuXHJcbiAgREVMRVRFX0VOVElUSUVTID0gJy9lbnRpdHkvZGVsZXRlRW50aXRpZXNCeUlkcyc7XHJcbiAgREVMRVRFX0NBUEFCSUxJVFlfTUFQUyA9ICcvZW50aXR5L2RlbGV0ZUNhcGFiaWxpdHlNYXBzQnlJZHMnO1xyXG4gIERFTEVURV9PQlNFUlZBQklMSVRZID0gJy9lbnRpdHkvZGVsZXRlT2JzZXJ2YWJpbGl0eS8nO1xyXG4gIERFTEVURV9HUk9VUFMgPSAnL2VudGl0eS9kZWxldGVHcm91cHNCeUlkcyc7XHJcblxyXG4gIERFRkFVTFRfU0VBUkNIX1RZUEVTID0gWyduYW1lJywgJ2dyb3VwJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSkgeyB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvLyBnZXRQYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZyhzdWJzdHJpbmc6IEJ5dGVTdHJpbmcpOiBPYnNlcnZhYmxlPFBhcnRpYWxFbnRpdHlbXT4ge1xyXG4gIC8vICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldFBhcnRpYWxFbnRpdGllc0J5U3Vic3RyaW5nKCknKTtcclxuICAvLyAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0VOVElUSUVTX0JZX1NVQlNUUklORywgc3Vic3RyaW5nKTtcclxuXHJcbiAgLy8gICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxQYXJ0aWFsRW50aXR5W10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gIC8vICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBlbnRpdHkgbGlzdCBieSBzdWJzdHJpbmdgLCByZXMpKSxcclxuICAvLyAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IFBhcnRpYWxFbnRpdHkoaXRlbSkpKVxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsQ2FwYWJpbGl0eVR5cGVzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRBbGxDYXBhYmlsaXR5VHlwZXMoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfQUxMX0NBUEFCSUxJVFlfVFlQRVMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgY2FwYWJpbGl0eSB0eXBlIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKChyZXMpID0+IHsgLy8gc29ydCB0aGUgbGlzdFxyXG4gICAgICAgIHJldHVybiAocmVzWydzdHJpbmdzJ10gYXMgc3RyaW5nW10pLnNvcnQoKG4xLCBuMikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG4xLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL2VudGl0eS9nZXRBbGxDYXBhYmlsaXR5TWFwc1xyXG4gICAqIGdldCBhIGxpc3Qgb2YgQ2FwYWJpbGl0eU1hcFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxDYXBhYmlsaXR5TWFwcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPENhcGFiaWxpdHlNYXBbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbENhcGFiaWxpdHlNYXBzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldEFsbENhcGFiaWxpdHlNYXBzJyk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZUNhcGFiaWxpdHlNYXAgPSAobjE6IENhcGFiaWxpdHlNYXAsIG4yOiBDYXBhYmlsaXR5TWFwKSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5jYXBhYmlsaXR5VHlwZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIuY2FwYWJpbGl0eVR5cGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PENhcGFiaWxpdHlNYXBbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNhcGFiaWxpdHkgbWFwIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IENhcGFiaWxpdHlNYXAoaXRlbSkpLnNvcnQoY29tcGFyZUNhcGFiaWxpdHlNYXApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvZW50aXR5L2dldE9ic2VydmFiaWxpdGllc0J5VXNlZENhcGFiaWxpdHlNYXBJZFxyXG4gICAqIGdldCBhIGxpc3Qgb2YgT2JzZXJ2YWJpbGl0eVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRPYnNlcnZhYmlsaXRpZXNCeVVzZWRDYXBhYmlsaXR5TWFwSWQoY2FwYWJpbGl0eU1hcElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9ic2VydmFiaWxpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldE9ic2VydmFiaWxpdGllc0J5VXNlZENhcGFiaWxpdHlNYXBJZCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRPYnNlcnZhYmlsaXRpZXNCeVVzZWRDYXBhYmlsaXR5TWFwSWQvJywgY2FwYWJpbGl0eU1hcElkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNhcGFiaWxpdHkgbWFwIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IE9ic2VydmFiaWxpdHkoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QWxsVnVsbmVyYWJpbGl0aWVzKHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8VnVsbmVyYWJpbGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsVnVsbmVyYWJpbGl0aWVzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9WVUxORVJBQklMSVRJRVMpO1xyXG5cclxuICAgIGlmICghdXNlQ2FjaGUpIHtcclxuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGFyZSBmdW5jdGlvblxyXG4gICAgbGV0IGNvbXBhcmVWdWxuZXJhYmlsaXR5ID0gKG4xOiBWdWxuZXJhYmlsaXR5LCBuMjogVnVsbmVyYWJpbGl0eSkgPT4ge1xyXG4gICAgICByZXR1cm4gbjEubmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldCh1cmwsIHRoaXMuaHR0cC5nZXQ8VnVsbmVyYWJpbGl0eVtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgYWxsIHZ1bG5lcmFiaWxpdGllc2AsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgVnVsbmVyYWJpbGl0eShpdGVtKSkuc29ydChjb21wYXJlVnVsbmVyYWJpbGl0eSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRDYXBhYmlsaXRpZXNCeU9ic2VydmFibGVUeXBlKG9ic2VydmFibGVUeXBlOiBzdHJpbmcsIHVzZUNhY2hlOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8Q2FwYWJpbGl0eU1hcFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0Q2FwYWJpbGl0aWVzQnlPYnNlcnZhYmxlVHlwZSgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2VudGl0eS9nZXRDYXBhYmlsaXRpZXNCeU9ic2VydmVyVHlwZS8nLCBvYnNlcnZhYmxlVHlwZSk7XHJcblxyXG4gICAgaWYgKCF1c2VDYWNoZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxDYXBhYmlsaXR5TWFwW10+KHVybCwgaHR0cE9wdGlvbnMpKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBjYXBhYmlsaXRpZXMgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5tYXAoaXRlbSA9PiBuZXcgQ2FwYWJpbGl0eU1hcChpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxBZmZpbGlhdGlvbnModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbEFmZmlsaWF0aW9ucygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfQUZGSUxJQVRJT05TKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGFmZmlsaWF0aW9uIGxpc3RgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5hZmZpbGlhdGlvbjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEFsbENvdW50cmllcyh1c2VDYWNoZTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmdldEFsbENvdW50cmllcygpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9BTExfQ09VTlRSSUVTKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlQ291bnRyeSA9IChuMTogQ291bnRyeSwgbjI6IENvdW50cnkpID0+IHtcclxuICAgICAgcmV0dXJuIG4xLm5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKG4yLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQodXJsLCB0aGlzLmh0dHAuZ2V0PENvdW50cnlbXT4odXJsLCBodHRwT3B0aW9ucykpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGNvdW50cnkgbGlzdGAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5rZXlWYWx1ZVBhaXJzLm1hcChpdGVtID0+IG5ldyBDb3VudHJ5KGl0ZW0pKS5zb3J0KGNvbXBhcmVDb3VudHJ5KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNyZWF0ZUdyb3VwKGdyb3VwOiBHcm91cCwgZW50aXR5SWRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkNSRUFURV9HUk9VUCwgZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwLmdyb3VwTmFtZSkpO1xyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHN0cmluZ3M6IGVudGl0eUlkcyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY3JlYXRlZCBncm91cGAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRBbGxFbnRpdHlHcm91cHModXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxHcm91cFtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0QWxsRW50aXR5R3JvdXBzKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuR0VUX0FMTF9FTlRJVFlfR1JPVVBTKTtcclxuXHJcbiAgICBpZiAoIXVzZUNhY2hlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmRlbGV0ZSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25cclxuICAgIGxldCBjb21wYXJlR3JvdXAgPSAobjE6IEdyb3VwLCBuMjogR3JvdXApID0+IHtcclxuICAgICAgcmV0dXJuIG4xLmdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobjIuZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KHVybCwgdGhpcy5odHRwLmdldDxHcm91cFtdPih1cmwsIGh0dHBPcHRpb25zKSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgYWxsIGdyb3Vwc2AsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5rZXlWYWx1ZVBhaXJzLm1hcChpdGVtID0+IG5ldyBHcm91cChpdGVtKSkuc29ydChjb21wYXJlR3JvdXApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0RW50aXR5KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eT4ge1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5HRVRfRU5USVRZLCBpZCk7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcodXJsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGVudGl0eWAsIHJlcykpLFxyXG4gICAgICBtYXAoeCA9PiBuZXcgRW50aXR5KHgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0RW50aXR5QnlJZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbnRpdHk+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5nZXRFbnRpdHlCeUlkKCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvZW50aXR5L2dldEVudGl0eUJ5SWQnLCBpZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBlbnRpdHlgLCByZXMpKSxcclxuICAgICAgbWFwKHggPT4gbmV3IEVudGl0eSh4KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZEVudGl0eShlbnRpdHk6IEVudGl0eSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuYWRkRW50aXR5KCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuVVBEQVRFX0VOVElUWSk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBlbnRpdHksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgZW50aXR5ICR7ZW50aXR5Lm5hbWV9YCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHVwZGF0ZUVudGl0eShlbnRpdHk6IEVudGl0eSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UudXBkYXRlRW50aXR5KCknKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIHRoaXMuVVBEQVRFX0VOVElUWSwgZW50aXR5LmFnc0VudGl0eUlkKTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgZW50aXR5LCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIGVudGl0eSAke2VudGl0eS5uYW1lfWAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBhZGRDYXBhYmlsaXR5TWFwKGNhcGFiaWxpdHlNYXA6IENhcGFiaWxpdHlNYXApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmFkZENhcGFiaWxpdHlNYXAnKTtcclxuICAgIHJldHVybiB0aGlzLnVwZGF0ZUNhcGFiaWxpdHlNYXAoY2FwYWJpbGl0eU1hcCk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHVwZGF0ZUNhcGFiaWxpdHlNYXAoY2FwYWJpbGl0eU1hcDogQ2FwYWJpbGl0eU1hcCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UudXBkYXRlQ2FwYWJpbGl0eU1hcCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkFERF9PUl9VUERBVEVfQ0FQQUJJTElUWV9NQVApO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgY2FwYWJpbGl0eU1hcCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBjYXBhYmlsaXR5IG1hcCAke2NhcGFiaWxpdHlNYXAuY2FwYWJpbGl0eVR5cGV9YCwgcmVzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldFBhcnRpYWxFbnRpdGllc0J5R3JvdXAoZ3JvdXA6IHN0cmluZyk6IE9ic2VydmFibGU8UGFydGlhbEVudGl0eVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZ2V0UGFydGlhbEVudGl0aWVzQnlHcm91cCgpJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkdFVF9QQVJUSUFMX0VOVElUSUVTX0JZX0dST1VQLCBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXApKTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZVBhcnRpYWxFbnRpdHkgPSAobjE6IFBhcnRpYWxFbnRpdHksIG4yOiBQYXJ0aWFsRW50aXR5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5uYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQYXJ0aWFsRW50aXR5W10+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIHBhcnRpYWwgZW50aXR5IGxpc3QgYnkgZ3JvdXBgLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKGl0ZW0gPT4gbmV3IFBhcnRpYWxFbnRpdHkoaXRlbSkpLnNvcnQoY29tcGFyZVBhcnRpYWxFbnRpdHkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcGFydGlhbEVudGl0aWVzQnlTdWJzdHJpbmdzKHN0cmluZ3M6IHN0cmluZ1tdLCBzZWFyY2hUeXBlczogc3RyaW5nW10gPSB0aGlzLkRFRkFVTFRfU0VBUkNIX1RZUEVTKTogT2JzZXJ2YWJsZTxQYXJ0aWFsRW50aXR5W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5wYXJ0aWFsRW50aXRpZXNCeVN1YnN0cmluZ3MoKScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5QQVJUSUFMX0VOVElUSUVTX0JZX1NVQlNUUklOR1MpO1xyXG5cclxuICAgIGxldCBzZWFyY2hQYXJtcyA9IHtcclxuICAgICAgc2VhcmNoVHlwZXM6IHNlYXJjaFR5cGVzLFxyXG4gICAgICBzdHJpbmdzOiBzdHJpbmdzLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGZ1bmN0aW9uXHJcbiAgICBsZXQgY29tcGFyZVBhcnRpYWxFbnRpdHkgPSAobjE6IFBhcnRpYWxFbnRpdHksIG4yOiBQYXJ0aWFsRW50aXR5KSA9PiB7XHJcbiAgICAgIHJldHVybiBuMS5uYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShuMi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIHNlYXJjaFBhcm1zLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgcGFydGlhbCBlbnRpdHkgbGlzdCBieSBzdWJzdHJpbmdzYCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcChpdGVtID0+IG5ldyBQYXJ0aWFsRW50aXR5KGl0ZW0pKS5zb3J0KGNvbXBhcmVQYXJ0aWFsRW50aXR5KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZUVudGl0aWVzKGVudGl0eUlkczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5kZWxldGVFbnRpdGllcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5ERUxFVEVfRU5USVRJRVMpO1xyXG5cclxuICAgIC8vIE5PVEU6ICBJbiBvcmRlciB0byBzcGVjaWZ5IHRoZSByZXR1cm4gdHlwZSBvZiAndGV4dCcsIHRoZSBnZW5lcmljXHJcbiAgICAvLyAgICAgICAgc2lnbmF0dXJlIGhhZCB0byBiZSByZW1vdmVkLlxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcgYXMgJ3RleHQnLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogZW50aXR5SWRzXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55Pih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBlbnRpdGllcyBzdWNjZXNzZnVsbHlgKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZUNhcGFiaWxpdGllcyhjYXBhYmlsaXR5SWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmRlbGV0ZUNhcGFiaWxpdGllcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5ERUxFVEVfQ0FQQUJJTElUWV9NQVBTKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyBhcyAndGV4dCcsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBzdHJpbmdzOiBjYXBhYmlsaXR5SWRzXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgY2FwYWJpbGl0aWVzIHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgYWRkT2JzZXJ2YWJpbGl0aWVzKG9ic2VydmFiaWxpdGllczogT2JzZXJ2YWJpbGl0eVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmICghb2JzZXJ2YWJpbGl0aWVzIHx8IG9ic2VydmFiaWxpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG9mKCdhZGRPYnNlcnZhYmlsaXRpZXMgcmVjZWl2ZWQgZW1wdHkgbGlzdC4gIENvbnNpZGVyIHN1Y2Nlc3NmdWwuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFkZFJlcXVlc3RzOiBPYnNlcnZhYmxlPHN0cmluZz5bXSA9IFtdO1xyXG4gICAgb2JzZXJ2YWJpbGl0aWVzLmZvckVhY2gobyA9PiB7XHJcbiAgICAgIGFkZFJlcXVlc3RzLnB1c2godGhpcy5hZGRPYnNlcnZhYmlsaXR5KG8pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JrSm9pbiguLi5hZGRSZXF1ZXN0cyk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKlxyXG4gICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZE9ic2VydmFiaWxpdHkob2JzZXJ2YWJpbGl0eTogT2JzZXJ2YWJpbGl0eSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuYWRkT2JzZXJ2YWJpbGl0eScpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgdGhpcy5BRERfT1JfVVBEQVRFX09CU0VSVkFCSUxJVFkpO1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHN0cmluZz4odXJsLCBvYnNlcnZhYmlsaXR5LCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBvYnNlcnZhYmlsaXR5IHN1Y2Nlc3NmdWxseWAsIHJlcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICpcclxuICAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBkZWxldGVPYnNlcnZhYmlsaXRpZXMob2JzZXJ2YWJpbGl0aWVzOiBPYnNlcnZhYmlsaXR5W10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKCFvYnNlcnZhYmlsaXRpZXMgfHwgb2JzZXJ2YWJpbGl0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gb2YoJ2RlbGV0ZU9ic2VydmFiaWxpdGllcyByZWNlaXZlZCBlbXB0eSBsaXN0LiAgQ29uc2lkZXIgc3VjY2Vzc2Z1bC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVsZXRlUmVxdWVzdHM6IE9ic2VydmFibGU8c3RyaW5nPltdID0gW107XHJcbiAgICBvYnNlcnZhYmlsaXRpZXMuZm9yRWFjaChvID0+IHtcclxuICAgICAgZGVsZXRlUmVxdWVzdHMucHVzaCh0aGlzLmRlbGV0ZU9ic2VydmFiaWxpdHkobykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcmtKb2luKC4uLmRlbGV0ZVJlcXVlc3RzKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlT2JzZXJ2YWJpbGl0eShvYnNlcnZhYmlsaXR5OiBPYnNlcnZhYmlsaXR5KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRW50aXR5U2VydmljZS5kZWxldGVPYnNlcnZhYmlsaXR5Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkRFTEVURV9PQlNFUlZBQklMSVRZLCBvYnNlcnZhYmlsaXR5Lm9ic2VydmluZ0NhcGFiaWxpdHlNYXBJZCwgb2JzZXJ2YWJpbGl0eS51c2VkQ2FwYWJpbGl0eU1hcElkKTtcclxuXHJcbiAgICAvLyBOT1RFOiAgSW4gb3JkZXIgdG8gc3BlY2lmeSB0aGUgcmV0dXJuIHR5cGUgb2YgJ3RleHQnLCB0aGUgZ2VuZXJpY1xyXG4gICAgLy8gICAgICAgIHNpZ25hdHVyZSBoYWQgdG8gYmUgcmVtb3ZlZC5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnIGFzICd0ZXh0JyxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBvYnNlcnZhYmlsaXR5IHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqXHJcbiAgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZGVsZXRlR3JvdXBzKGdyb3VwSWRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0VudGl0eVNlcnZpY2UuZGVsZXRlR3JvdXBzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCB0aGlzLkRFTEVURV9HUk9VUFMpO1xyXG5cclxuICAgIC8vIE5PVEU6ICBJbiBvcmRlciB0byBzcGVjaWZ5IHRoZSByZXR1cm4gdHlwZSBvZiAndGV4dCcsIHRoZSBnZW5lcmljXHJcbiAgICAvLyAgICAgICAgc2lnbmF0dXJlIGhhZCB0byBiZSByZW1vdmVkLlxyXG4gICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcgYXMgJ3RleHQnLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgc3RyaW5nczogZ3JvdXBJZHNcclxuICAgICAgfSxcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCBkZWxldGVPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGRlbGV0ZWQgZ3JvdXBzIHN1Y2Nlc3NmdWxseWApKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFJldGhyb3cgZXJyb3Igc28gY2xpZW50IGNhbiByZWFjdC5cclxuICBwcml2YXRlIHJldGhyb3dFcnJvcihlcnI6IGFueSkge1xyXG4gICAgLy8gTk9URTogIE5vdCBhbiBlcnJvci5cclxuICAgIGlmIChlcnIuc3RhdHVzID09PSAyMDAgfHwgZXJyLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICAgIHJldHVybiBvZihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEVudGl0aWVzKGdyb3VwOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJhc2VFbnRpdHlbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFbnRpdHlTZXJ2aWNlLmxvYWRFbnRpdGllcycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9lbnRpdHkvZ2V0UGFydGlhbEVudGl0aWVzQnlHcm91cC8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QmFzZUVudGl0eVtdPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5nQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsRW50aXR5LCBHcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdHknO1xyXG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZW50aXR5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uJztcclxuXHJcbmNvbnN0IElOVkFMSURfRU5USVRZOiBQYXJ0aWFsRW50aXR5ID0gbmV3IFBhcnRpYWxFbnRpdHkoe1xyXG4gIG5hbWU6ICcnLFxyXG4gIGFnc0VudGl0eUlkOiAnJyxcclxufSk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3MtbGliLWVudGl0eS1zZWxlY3RvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGl0eS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcclxuICAvLyBAT3V0cHV0KCkgZW50aXR5U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhcnRpYWxFbnRpdHk+KCk7XHJcblxyXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG5cclxuICBlbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBpbnB1dEN0cmw6IEZvcm1Db250cm9sO1xyXG4gIG9wdGlvbnNDdHJsOiBGb3JtQ29udHJvbDtcclxuICBlbnRpdGllczogUGFydGlhbEVudGl0eVtdID0gW107XHJcbiAgaGFzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbmNvbWluZ0VudGl0eTogUGFydGlhbEVudGl0eSA9IElOVkFMSURfRU5USVRZO1xyXG4gIHNlbGVjdGVkRW50aXR5OiBQYXJ0aWFsRW50aXR5ID0gSU5WQUxJRF9FTlRJVFk7XHJcbiAgaXNTZWFyY2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgbWV0aG9kc1xyXG4gIHdyaXRlVmFsdWUodmFsdWUpIHsgdGhpcy5zZWxlY3RlZEVudGl0eS5lbnRpdHlJZCA9IHZhbHVlOyB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIGVudGl0eVNlcnZpY2U6IEVudGl0eVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkgeyB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpczsgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRm9ybSgpIHtcclxuICAgIHRoaXMuaW5wdXRDdHJsID0gbmV3IEZvcm1Db250cm9sKFxyXG4gICAgICB7IHZhbHVlOiAnJywgZGlzYWJsZWQ6IGZhbHNlIH0sIFxyXG4gICAgICB7IC8qIHZhbGlkYXRvcnM6IFZhbGlkYXRvcnMucmVxdWlyZWQgKi99XHJcbiAgICApO1xyXG4gICAgdGhpcy5vcHRpb25zQ3RybCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG5cclxuICAgIHRoaXMuZW50aXR5U2VsZWN0aW9uRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgIGlucHV0Q3RybDogdGhpcy5pbnB1dEN0cmwsXHJcbiAgICAgIG9wdGlvbnNDdHJsOiB0aGlzLm9wdGlvbnNDdHJsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmlucHV0Q3RybC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIHN3aXRjaE1hcCgodGVybSkgPT4ge1xyXG4gICAgICAgIGxldCB0ZXJtVHlwZSA9IHR5cGVvZiB0ZXJtO1xyXG4gICAgICAgIGlmICghdGVybSB8fCAodGVybVR5cGUubG9jYWxlQ29tcGFyZSgnc3RyaW5nJykgIT09IDApIHx8ICh0ZXJtLmxlbmd0aCA8IDIpKSB7XHJcbiAgICAgICAgICBjb21wb25lbnQuZW50aXRpZXMgPSBbXTtcclxuICAgICAgICAgIGNvbXBvbmVudC5pc1NlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIGVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29tcG9uZW50LmlzU2VhcmNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbXBvbmVudC5lbnRpdGllcyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbnRpdHlTZXJ2aWNlLnBhcnRpYWxFbnRpdGllc0J5U3Vic3RyaW5ncyh0ZXJtLnNwbGl0KCcgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pKVxyXG4gICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbXBvbmVudC5pc1NlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICBjb21wb25lbnQuZW50aXRpZXMgPSByZXN1bHQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5pbmNvbWluZ0VudGl0eSA9IG5ldyBQYXJ0aWFsRW50aXR5KHtcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgYWdzRW50aXR5SWQ6IHRoaXMuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5jb21pbmdFbnRpdHkgPSBJTlZBTElEX0VOVElUWTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFydCB3aXRoIGluY29taW5nIGVxdWFsIHRvIHNlbGVjdGVkXHJcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gdGhpcy5pbmNvbWluZ0VudGl0eTtcclxuXHJcbiAgICBpZiAodGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXApIHtcclxuICAgICAgdGhpcy5lbnRpdHlTZWxlY3Rpb25Gb3JtR3JvdXAucmVzZXQoe1xyXG4gICAgICAgIGlucHV0Q3RybDogdGhpcy5pbmNvbWluZ0VudGl0eSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RW50aXR5QXMoZW50aXR5PzogUGFydGlhbEVudGl0eSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoZW50aXR5ICYmIGVudGl0eS5uYW1lKSB7XHJcbiAgICAgIHJldHVybiBlbnRpdHkubmFtZS50cmltKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW5zdXJlIG5vIGxpc3QgcG9wcyB1cCB3aGVuIGVudGVyaW5nIGNvbnRyb2wuXHJcbiAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgdGhpcy5lbnRpdGllcyA9IFtdO1xyXG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQpIHtcclxuICAgIHRoaXMuZW50aXR5U2VsZWN0aW9uRm9ybUdyb3VwLnJlc2V0KHtcclxuICAgICAgaW5wdXRDdHJsOiB0aGlzLnNlbGVjdGVkRW50aXR5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZChldmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IGV2ZW50LnNvdXJjZS52YWx1ZTtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMuc2VsZWN0ZWRFbnRpdHkubmFtZTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLnNlbGVjdGVkRW50aXR5LmVudGl0eUlkO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWxlY3RlZEVudGl0eS5lbnRpdHlJZCk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRG93bigpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBJTlZBTElEX0VOVElUWTtcclxuICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgdGhpcy5pZCA9ICcnO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2UoJycpO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkRW50aXR5ICE9PSB0aGlzLmluY29taW5nRW50aXR5KSB7XHJcbiAgICAgIHRoaXMuaW5jb21pbmdFbnRpdHkgPSBJTlZBTElEX0VOVElUWTtcclxuICAgIH1cclxuICAgIHRoaXMuZW50aXRpZXMgPSBbXTtcclxuICAgIHRoaXMuZW50aXR5U2VsZWN0aW9uRm9ybUdyb3VwLmdldCgnaW5wdXRDdHJsJykuc2V0VmFsdWUoJycsIHtlbWl0RXZlbnQ6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZShlbnRpdHk6IFBhcnRpYWxFbnRpdHkpIHtcclxuICAgIGxldCB0aXRsZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgdGl0bGUgKz0gJ1NDQzogICcgKyAoZW50aXR5LnNjYyA/IGVudGl0eS5zY2MudHJpbSgpIDogJycpO1xyXG4gICAgdGl0bGUgKz0gJ1xcbkNvdW50cnk6ICAnICsgKGVudGl0eS5jb3VudHJ5TmFtZSA/IGVudGl0eS5jb3VudHJ5TmFtZS50cmltKCkgOiAnJyk7XHJcbiAgICB0aXRsZSArPSAnXFxuQWZmaWxpYXRpb246ICAnICsgKGVudGl0eS5hZmZpbGlhdGlvbiA/IGVudGl0eS5hZmZpbGlhdGlvbi50cmltKCkgOiAnJyk7XHJcblxyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0UmVzdWx0cyhlbnRpdHk6IFBhcnRpYWxFbnRpdHksIHNlYXJjaFRlcm06IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICBsZXQgdGVybXMgPSBzZWFyY2hUZXJtLnNwbGl0KCcgJyk7XHJcbiAgICByZXN1bHQgKz0gZW50aXR5Lm5hbWUudHJpbSgpO1xyXG5cclxuICAgIC8vIEFkZCBTQ0MgaWYgcHJlc2VudFxyXG4gICAgaWYgKGVudGl0eS5zY2MpIHtcclxuICAgICAgcmVzdWx0ICs9ICcsICcgKyBlbnRpdHkuc2NjO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFyZUFsbFRlcm1zRm91bmQodGVybXNUb1NlYXJjaEZvciwgc3RyaW5nVG9TZWFyY2gpIHtcclxuICAgICAgbGV0IGZvdW5kID0gdHJ1ZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXJtc1RvU2VhcmNoRm9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ1RvU2VhcmNoLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0ZXJtc1RvU2VhcmNoRm9yW2ldLnRvVXBwZXJDYXNlKCkpIDwgMCkge1xyXG4gICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBtYXRjaGluZyBncm91cCBuYW1lKHMpXHJcbiAgICBsZXQgZ3JvdXBUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIGxldCBmaXJzdEdyb3VwOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGVudGl0eS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XHJcblxyXG4gICAgICBpZiAoYXJlQWxsVGVybXNGb3VuZCh0ZXJtcywgZ3JvdXAuZ3JvdXBOYW1lKSkge1xyXG4gICAgICAgIGlmICghZmlyc3RHcm91cCkge1xyXG4gICAgICAgICAgZ3JvdXBUZXh0ICs9ICcsICc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwVGV4dCArPSBncm91cC5ncm91cE5hbWU7XHJcbiAgICAgICAgZmlyc3RHcm91cCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZ3JvdXBUZXh0KSB7XHJcbiAgICAgIHJlc3VsdCArPSAnICgnICsgZ3JvdXBUZXh0ICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsIi8qIFxyXG4gKiAgRGlzcGxheXMgYSBsaXN0IG9mIGl0ZW1zIGFzIEFuZ3VsYXIgTWF0ZXJpYWwgY2hpcHMuXHJcbiAqICAtIGEgYnV0dG9uIGlzIHByZXNzZWQgdG8gZGlzcGxheSBsaXN0IG9mIHNlbGVjdGFibGUgaXRlbXNcclxuICogIC0gXCJvbkNoYW5nZVwiIGlzIGZpcmVkIHVwb24gc2VsZWN0aW9uIGZyb20gbGlzdCAoZWl0aGVyIGJ5IG1vdXNlIG9yIDxlbnRlcj4pXHJcbiAqICAtIGVhY2ggY2hpcCBoYXMgYW4gZW1iZWRkZWQgaWNvbiB3aGljaCByZW1vdmVzIGNoaXAgZnJvbSBsaXN0XHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPcHRpb25hbCwgU2VsZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1jaGlwLWRpc3BsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoaXAtZGlzcGxheS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGlwRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIC8vIExhYmVsIHRvIGJlIGRpc3BsYXllZCBhcyBwbGFjZWhvbGRlclxyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICAvLyBMaXN0IG9mIGl0ZW1zIGZyb20gd2hpY2ggdG8gY2hvb3NlLlxyXG4gIC8vIGtleSA9IGRpc3BsYXllZCB2YWx1ZSAoZS5nLiBncm91cCBuYW1lKVxyXG4gIC8vIHZhbHVlID0gYXMgYSBydWxlLCB0aGUgaW50ZXJuYWwgR1VJRCAoZS5nLiBncm91cCBJRClcclxuICBASW5wdXQoKSBzZWxlY3RhYmxlSXRlbXM6IEtleVZhbHVlPHN0cmluZywgYW55PltdO1xyXG4gIC8vIENhbiBhbiBpdGVtIGJlIGFkZGVkIG1vcmUgdGhhbiBvbmNlP1xyXG4gIEBJbnB1dCgpIGFsbG93RHVwbGljYXRlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgLy8gSXMgY29udHJvbCBkaXNhYmxlZD9cclxuICBASW5wdXQoKSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAvLyBQcm9wZXJ0eSBuYW1lIG9uIHdoaWNoIHRvIGJhc2UgZXF1YWxpdHlcclxuICBASW5wdXQoKSBlcXVhbGl0eVByb3BlcnR5OiBzdHJpbmcgPSAnJztcclxuICBcclxuICAvLyBcInNlbGVjdGVkSXRlbXNcIiBpcyB1cGRhdGVkIGJ5IHNldHRpbmcgdmFsdWUgb2YgZm9ybSBjb250cm9sIGFuZCBub3QgdmlhIGlucHV0IHBhcm1zXHJcbiAgc2VsZWN0ZWRJdGVtczogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W107XHJcbiAgLy8gXCJyZW1haW5pbmdTZWxlY3RhYmxlSXRlbXNcIiBpcyBkZXBlbmRlbnQgb24gdmFsdWUgb2YgXCJhbGxvd0R1cGxpY2F0ZXNcIlxyXG4gIHJlbWFpbmluZ1NlbGVjdGFibGVJdGVtczogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W107XHJcblxyXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG5cclxuICAvL1xyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG1ldGhvZHNcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT5bXSkgeyBcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5kZXRlcm1pbmVSZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMoKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XHJcbiAgLy9cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIFxyXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkgeyBcclxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIC8vIEdldHMgZmlyZWQgb24gY2hhbmdlcyB0byBhbGwgaW5wdXRzLCBidXQgb25seSBuZWVkIHRvIHRha2Ugc29tZSBhY3Rpb24gd2hlblxyXG4gIC8vIHNlbGVjdGFibGUgaXRlbXMgZ2V0IGNoYW5nZWQuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0YWJsZUl0ZW1zKSB7XHJcbiAgICAgIC8vIElmIHJlbWFpbmluZyBpdGVtcyBsaXN0IGhhc24ndCB5ZXQgYmVlbiBwb3B1bGF0ZWQsIGRvIHRoYXQgbm93LlxyXG4gICAgICBpZiAoIXRoaXMucmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMgPSB0aGlzLnNlbGVjdGFibGVJdGVtcy5zbGljZSgwLCB0aGlzLnNlbGVjdGFibGVJdGVtcy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJdGVtIHNlbGVjdGVkIGZyb20gbGlzdFxyXG4gIG9uU2VsZWN0ZWQoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lUmVtYWluaW5nU2VsZWN0YWJsZUl0ZW1zKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyBJdGVtIHJlbW92ZWQgZnJvbSBkaXNwbGF5ZWQgY2hpcHNcclxuICBvblJlbW92ZWQoaXRlbTogS2V5VmFsdWU8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRldGVybWluZVJlbWFpbmluZ1NlbGVjdGFibGVJdGVtcygpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgXCJBbGxvdyBkdXBsaWNhdGVzXCIgZmxhZyBpcyBcInRydWVcIiwga2VlcCBzZWxlY3RhYmxlIGxpc3QgdGhlIHNhbWUuXHJcbiAgLy8gSWYgXCJBbGxvdyBkdXBsaWNhdGVzXCIgZmxhZyBpcyBcImZhbHNlXCIsIHJlbW92ZSBzZWxlY3RlZCBpdGVtcyBmcm9tIHNlbGVjdGFibGUgbGlzdC5cclxuICBkZXRlcm1pbmVSZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtcyB8fCAhdGhpcy5zZWxlY3RhYmxlSXRlbXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5hbGxvd0R1cGxpY2F0ZXMpIHtcclxuICAgICAgdGhpcy5yZW1haW5pbmdTZWxlY3RhYmxlSXRlbXMgPSB0aGlzLnNlbGVjdGFibGVJdGVtcy5maWx0ZXIoeCA9PiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZpbmRJdGVtSW5MaXN0KHgsIHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2VhcmNoIGZvciBlcXVhbGl0eSBvZiBpdGVtcyBieSBjb21wYXJpbmcgdmFsdWUgaW4gS2V5VmFsdWUgcGFpclxyXG4gIGZpbmRJdGVtSW5MaXN0KGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55PiwgbGlzdDogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W10pOiBib29sZWFuIHtcclxuXHJcbiAgICBpZiAoIWl0ZW0gfHwgbGlzdC5sZW5ndGggPT09IDApICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbVZhbHVlVHlwZSA9IHR5cGVvZiBpdGVtLnZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZVR5cGUgPSB0eXBlb2YgbGlzdFswXS52YWx1ZTtcclxuICAgIGlmIChpdGVtVmFsdWVUeXBlICE9PSBsaXN0VmFsdWVUeXBlKSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS53YXJuKCdDaGlwIGRpc3BsYXkgY29tcGFyaW5nIHVuZXF1YWwgdHlwZXMuICBFbnN1cmUgc2VsZWN0YWJsZSBpdGVtcyBhbmQgc2VsZWN0ZWQgaXRlbXMgYXJlIG9mIHNhbWUgdHlwZS4nKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtVmFsdWVUeXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlTnVtYmVycyhpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGl0ZW1WYWx1ZVR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVTdHJpbmdzKGl0ZW0sIGxpc3QpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXRlbVZhbHVlVHlwZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5lcXVhbGl0eVByb3BlcnR5ICYmXHJcbiAgICAgIGl0ZW0udmFsdWUuaGFzT3duUHJvcGVydHkodGhpcy5lcXVhbGl0eVByb3BlcnR5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlT2JqZWN0cyhpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wYXJlTnVtYmVycyhpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleC0tKSB7XHJcbiAgICAgIGlmIChsaXN0W2luZGV4XS52YWx1ZSA9PT0gaXRlbS52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlU3RyaW5ncyhpdGVtOiBLZXlWYWx1ZTxzdHJpbmcsIGFueT4sIGxpc3Q6IEtleVZhbHVlPHN0cmluZywgYW55PltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpbmRleC0tKSB7XHJcbiAgICAgIGlmIChsaXN0W2luZGV4XS52YWx1ZS5sb2NhbGVDb21wYXJlKGl0ZW0udmFsdWUpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVPYmplY3RzKGl0ZW06IEtleVZhbHVlPHN0cmluZywgYW55PiwgbGlzdDogS2V5VmFsdWU8c3RyaW5nLCBhbnk+W10pOiBib29sZWFuIHtcclxuICAgIGxldCBpbmRleCA9IGxpc3QubGVuZ3RoO1xyXG5cclxuICAgIHdoaWxlIChpbmRleC0tKSB7XHJcbiAgICAgIGlmIChsaXN0W2luZGV4XS52YWx1ZVt0aGlzLmVxdWFsaXR5UHJvcGVydHldID09PSBpdGVtLnZhbHVlW3RoaXMuZXF1YWxpdHlQcm9wZXJ0eV0pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG5UaGlzIGN1c3RvbSBjb21wb25lbnQgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgQW5ndWxhciBEYXRlIFRpbWUgUGlja2VyIChuZy1waWNrLWRhdGV0aW1lKVxyXG5odHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uZy1waWNrLWRhdGV0aW1lXHJcbmh0dHBzOi8vZGFuaWVseWtwYW4uZ2l0aHViLmlvL2RhdGUtdGltZS1waWNrZXIvXHJcblxyXG5UaGlzIGNvbnRyb2wgT05MWSBwcm9kdWNlcyBVVEMgZGF0ZS90aW1lc1xyXG5cclxuVGhlcmUgaXMgYSBsaW5lIG9mIGNvZGUgaW4gb25DaGFuZ2VzKCkgbWV0aG9kIHRvIGZvcmNlIHRoZSB2YWx1ZSB0byBhIFVUQyBkYXRlL3RpbWUuXHJcblRoZSBuZy1waWNrLWRhdGV0aW1lIGNvbnRyb2wgKDxvd2wtZGF0ZS10aW1lPikgaW5zaXN0cyBvbiBhcHBlbmRpbmcgdGhlIGxvY2FsIHRpbWV6b25lIGV2ZXJ5IHRpbWVcclxueW91IGNsaWNrIGl0LiBTbyAnbW9tZW50LnRvT2JqZWN0KCknIGlzIHV0aWxpemVkIGJlY2F1c2UgaXQgcmV0dXJucyB0aGUgcGFydHMgb2YgdGhlXHJcbmRhdGUgd2l0aG91dCBhIHRpbWV6b25lLiBUaGlzIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgYSBuZXcgbW9tZW50IG9iamVjdCB3aXRob3V0IGFcclxubG9jYWwgdGltZXpvbmUuIEl0J3MgaGFja3ksIGJ1dCBpdCBnZXRzIHRoZSBqb2IgZG9uZS4gTWF5YmUgc29tZWRheSBBbmd1bGFyIE1hdGVyaWFsXHJcbndpbGwgY3JlYXRlIGEgZGF0ZXRpbWUgcGlja2VyIHRoYXQgY2FuIHByb3Blcmx5IGhhbmRsZSBVVEMuIDpeKFxyXG5cclxubW9tZW50LnRvT2JqZWN0KCkgPSB7XHJcbiAgICB5ZWFyczogMjAxNVxyXG4gICAgbW9udGhzOiA2XHJcbiAgICBkYXRlOiAyNixcclxuICAgIGhvdXJzOiAxLFxyXG4gICAgbWludXRlczogNTMsXHJcbiAgICBzZWNvbmRzOiAxNCxcclxuICAgIG1pbGxpc2Vjb25kczogNjAwXHJcbn1cclxuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIGZvcndhcmRSZWYsIE9wdGlvbmFsLCBTZWxmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LWVzNic7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciwgT1dMX0RBVEVfVElNRV9GT1JNQVRTLCBPV0xfREFURV9USU1FX0xPQ0FMRSB9IGZyb20gJ25nLXBpY2stZGF0ZXRpbWUnO1xyXG5pbXBvcnQgeyBNb21lbnREYXRlVGltZUFkYXB0ZXIgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lLW1vbWVudCc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXRQaXBlIH0gZnJvbSAnLi4vLi4vb3RoZXIvcGlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ZX0NVU1RPTV9GT1JNQVRTID0ge1xyXG4gIHBhcnNlSW5wdXQ6ICdZWVlZLU1NLUREIEhIOm1tOnNzJyxcclxuICBmdWxsUGlja2VySW5wdXQ6IERhdGVGb3JtYXRQaXBlLmZvcm1hdCxcclxuICBkYXRlUGlja2VySW5wdXQ6ICdZWVlZLU1NJyxcclxuICB0aW1lUGlja2VySW5wdXQ6ICdoaDptbTpzcycsXHJcbiAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXHJcbiAgZGF0ZUExMXlMYWJlbDogJ01NTSBZWVlZJyxcclxuICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU0gWVlZWScsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItZGF0ZS10aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9LFxyXG4gIHsgcHJvdmlkZTogRGF0ZVRpbWVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZVRpbWVBZGFwdGVyLCBkZXBzOiBbT1dMX0RBVEVfVElNRV9MT0NBTEVdIH0sXHJcbiAgeyBwcm92aWRlOiBPV0xfREFURV9USU1FX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9DVVNUT01fRk9STUFUUyB9XHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPHN0cmluZz4sIE9uRGVzdHJveSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbG9hdGluZycpIGdldCBzaG91bGRMYWJlbEZsb2F0KCkgeyByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5OyB9XHJcbiAgQEhvc3RCaW5kaW5nKCdpZCcpIGlkID0gYGRhdGUtdGltZS1waWNrZXItJHtEYXRlVGltZVBpY2tlckNvbXBvbmVudC5uZXh0SWQrK31gO1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcclxuXHJcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgTWF0Rm9ybUZpZWxkQ29udHJvbFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcclxuICBzdGF0aWMgbmV4dElkID0gMDtcclxuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBlcnJvclN0YXRlID0gZmFsc2U7XHJcbiAgY29udHJvbFR5cGUgPSAnZGF0ZS10aW1lLXBpY2tlcic7XHJcblxyXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIF9tb21lbnRWYWx1ZTogbW9tZW50Lk1vbWVudCA9IG1vbWVudCgpOyAvLyB1c2EgYSBNb21lbnQgb2JqZWN0IGludGVybmFsbHkgdG8gc3RvcmUgdGhlIGRhdGUgdmFsdWVcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgb25DaGFuZ2U6IEZ1bmN0aW9uO1xyXG4gIG9uVG91Y2hlZDogRnVuY3Rpb247XHJcbiAgd3JpdGVWYWx1ZShpblZhbHVlOiBzdHJpbmcpIHsgXHJcbiAgICBjb25zb2xlLmxvZyhgZGF0ZS10aW1lLXBpY2tlciBpbnB1dCBzdHJpbmcgPSAke2luVmFsdWV9YCk7XHJcbiAgICB0aGlzLnZhbHVlID0gaW5WYWx1ZTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7IHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkOyB9XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBNYXRGb3JtRmllbGRDb250cm9sIHByb3BlcnRpZXNcclxuICBASW5wdXQoKVxyXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cclxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSAndmFsdWUnO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxyXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9tZW50VmFsdWUudXRjKCkudG9JU09TdHJpbmcoKTtcclxuICB9XHJcbiAgc2V0IHZhbHVlKG5ld1ZhbDogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbW9tZW50VmFsdWUgPSBtb21lbnQudXRjKG5ld1ZhbCk7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZW1wdHkoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuX21vbWVudFZhbHVlO1xyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcclxuXHJcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBNYXRGb3JtRmllbGRDb250cm9sIGludGVyZmFjZVxyXG4gICAgdGhpcy5mbS5tb25pdG9yKGVsUmVmLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xyXG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcclxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkgeyB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpczsgfSAvLyByZXF1aXJlZCBmb3IgaW50ZXJhY3Rpb24gd2l0aCBBbmd1bGFyIGZvcm1zXHJcbiAgICAvLy8vLy8vLy8vLy8vXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBNYXRGb3JtRmllbGRDb250cm9sIG1ldGhvZHNcclxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xyXG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAvLyBNeSBmdW5jdGlvbnNcclxuXHJcbiAgb25EYXRhQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLl9tb21lbnRWYWx1ZSA9IG1vbWVudC51dGModGhpcy5fbW9tZW50VmFsdWUudG9PYmplY3QoKSk7IC8vIGZvcmNlIHRvIFVUQ1xyXG4gICAgY29uc29sZS5sb2coYGRhdGUtdGltZS1waWNrZXIgb3V0cHV0IHN0cmluZyA9ICR7dGhpcy52YWx1ZX1gKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7IC8vIHJlcXVpcmVkIGZvciBpbnRlcmFjdGlvbiB3aXRoIEFuZ3VsYXIgZm9ybXNcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRJY29uUmVnaXN0cnkgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuLypcclxuVGhpcyBzZXJ2aWNlIHByb3ZpZGVzIG1ldGhvZHMgdG8gbG9hZCBjdXN0b20gaWNvbnMsIGFuZCBpdCBwcm92aWRlcyBtZXRob2RzIGZvciBcclxuY29udmVydGluZyBzdGF0ZXMgdG8gaWNvbiBuYW1lcy5cclxuXHJcblRvIHVzZSBhIGN1c3RvbSBpY29uIGluIGEgPG1hdC1pY29uPiBlbGVtZW50Li4uXHJcblxyXG4gIDxtYXQtaWNvbiBzdmdJY29uPVwiY3VzdG9tLWljb24tbmFtZVwiPjwvbWF0LWljb24+XHJcblxyXG5UbyBjcmVhdGUgYSBzdGF0ZSBpY29uLCB0aGVyZSBhcmUgMiB3YXlzIG9mIGRvaW5nIGl0LiBZb3UgY2FuIHVzZSB0aGUgPGFncy1saWItc3RhdGUtaWNvbj4gY29tcG9uZW50LFxyXG5PciB5b3UgY2FuIHVzZSB0aGUgaWNvbiBzZXJ2aWNlIGRpcmVjdGx5IGluIGEgPG1hdC1pY29uPiBlbGVtZW50LlxyXG5cclxuICA8YWdzLWxpYi1zdGF0ZS1pY29uIHN0YXRlPVwiZXhlY3V0aW5nXCI+PC9hZ3MtbGliLXN0YXRlLWljb24+XHJcbiAgPG1hdC1pY29uIFtzdmdJY29uXT1cImljb25TZXJ2aWNlLmdldEljb25OYW1lRnJvbVN0YXRlKCdleGVjdXRpbmcnKVwiIFtuZ0NsYXNzXT1cImljb25TZXJ2aWNlLmdldFN0YXRlQ2xhc3MoJ2V4ZWN1dGluZycpXCI+PC9tYXQtaWNvbj5cclxuXHJcblRoZXJlIGFyZSBhbHNvIFVDSSB2ZXJzaW9ucyBvZiB0aGUgZXhhbXBsZXMgYWJvdmUsIGJlY2F1c2UgVUNJIGhhcyBpdCdzIG93biBzdGF0ZXMgYW5kIGNvbG9ycy5cclxuXHJcbiAgPGFncy1saWItdWNpLXN0YXRlLWljb24gc3RhdGU9XCJleGVjdXRpbmdcIj48L2Fncy1saWItdWNpLXN0YXRlLWljb24+XHJcbiAgPG1hdC1pY29uIFtzdmdJY29uXT1cImljb25TZXJ2aWNlLmdldEljb25OYW1lRnJvbVVjaVN0YXRlKCdleGVjdXRpbmcnKVwiIFtuZ0NsYXNzXT1cImljb25TZXJ2aWNlLmdldFVjaVN0YXRlQ2xhc3MoJ2V4ZWN1dGluZycpXCI+PC9tYXQtaWNvbj5cclxuKi9cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfaWNvbk5hbWVUb1N2Z0VsZW1lbnRNYXA6IE1hcDxzdHJpbmcsIFNWR0VsZW1lbnQ+ID0gbmV3IE1hcDxzdHJpbmcsIFNWR0VsZW1lbnQ+KCk7XHJcblxyXG4gIC8vIFRoZXNlIGFyZSB0aGUgY3VzdG9tIGljb25zIHRvIGJlIGxvYWRlZCBpbnRvIHRoZSBNYXRJY29uUmVnaXN0cnlcclxuICAvLyB0aGUgZmlyc3QgaXRlbSBpcyB0aGUgaWNvbiBuYW1lLCBhbmQgdGhlIHNlY29uZCBpdGVtIGlzIHRoZSBmaWxlXHJcbiAgLy8gY29udGFpbmluZyB0aGUgU1ZHIGRlZmluaXRpb24gb2YgdGhlIGljb25cclxuICBwcml2YXRlIF9pY29uTmFtZVRvRmlsZU5hbWVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKFtcclxuICAgIC8vW2N1c3RvbS1pY29uLW5hbWUsIFNWRyBmaWxlIG5hbWVdXHJcbiAgICBbJ2NpcmNsZS1maWxsZWQnLCAnYXNzZXRzL3N2Zy1pY29ucy9jaXJjbGUtZmlsbGVkLnN2ZyddLFxyXG4gICAgWydjaXJjbGUtb3V0bGluZWQnLCAnYXNzZXRzL3N2Zy1pY29ucy9jaXJjbGUtb3V0bGluZWQuc3ZnJ10sXHJcbiAgICBbJ2FkZC1ldmVudCcsICdhc3NldHMvc3ZnLWljb25zL0FkZC1FdmVudC5zdmcnXSxcclxuICAgIFsnYmFjay10by1ub3cnLCAnYXNzZXRzL3N2Zy1pY29ucy9CYWNrLXRvLU5vdy5zdmcnXSxcclxuICAgIFsnY29ubmVjdC1wb2ludHMnLCAnYXNzZXRzL3N2Zy1pY29ucy9Db25uZWN0LVBvaW50cy5zdmcnXSxcclxuICAgIFsnZGVsZXRlJywgJ2Fzc2V0cy9zdmctaWNvbnMvRGVsZXRlLnN2ZyddLFxyXG4gICAgWydwdXNocGluJywgJ2Fzc2V0cy9zdmctaWNvbnMvUHVzaHBpbi5zdmcnXSxcclxuICAgIFsncmVmcmVzaCcsICdhc3NldHMvc3ZnLWljb25zL1JlZnJlc2guc3ZnJ10sXHJcbiAgICBbJ3Jlc3BvbnNlLWFkZCcsICdhc3NldHMvc3ZnLWljb25zL1Jlc3BvbnNlLUFkZC5zdmcnXSxcclxuICAgIFsnc2VxdWVuY2UnLCAnYXNzZXRzL3N2Zy1pY29ucy9TZXF1ZW5jZS5zdmcnXSxcclxuICAgIFsnc2V0dGluZycsICdhc3NldHMvc3ZnLWljb25zL1NldHRpbmcuc3ZnJ10sXHJcbiAgICBbJ3RpbWVsaW5lJywgJ2Fzc2V0cy9zdmctaWNvbnMvVGltZWxpbmUuc3ZnJ10sXHJcbiAgICBbJ3N0YXR1cy1vaycsICdhc3NldHMvc3ZnLWljb25zL1N0YXR1cy1PSy5zdmcnXSxcclxuICAgIFsnc3RhdHVzLWFsZXJ0JywgJ2Fzc2V0cy9zdmctaWNvbnMvU3RhdHVzLUFMRVJULnN2ZyddLFxyXG4gICAgWydzdGF0dXMtY2F1dGlvbicsICdhc3NldHMvc3ZnLWljb25zL1N0YXR1cy1DQVVUSU9OLnN2ZyddLFxyXG4gICAgWydzdGF0dXMtZXJyb3InLCAnYXNzZXRzL3N2Zy1pY29ucy9TdGF0dXMtRVJST1Iuc3ZnJ10sXHJcbiAgICBbJ3N0YXR1cy1vZmYnLCAnYXNzZXRzL3N2Zy1pY29ucy9TdGF0dXMtT0ZGLnN2ZyddLFxyXG4gICAgWydzdGF0dXMtc3RhbmRieScsICdhc3NldHMvc3ZnLWljb25zL1N0YXR1cy1TVEFOREJZLnN2ZyddXHJcbiAgXSk7XHJcblxyXG4gIC8vIG1hcCBzdGF0ZSBuYW1lcyB0byBpY29uIG5hbWVzXHJcbiAgcHJpdmF0ZSBfc3RhdGVUb0ljb25OYW1lTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcChbXHJcbiAgICAvL1tzdGF0ZSwgaWNvbiBuYW1lXVxyXG4gICAgWyd1Y2ktdW5hbGxvY2F0ZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktYWxsb2NhdGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLXByb3Bvc2VkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLXBsYW5uZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktZXhlY3V0aW5nJywgJ2NpcmNsZS1vdXRsaW5lZCddLFxyXG4gICAgWyd1Y2ktY29tcGxldGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLWZhaWxlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS1jYW5jZWxsZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktdW5rbm93bicsICdjaXJjbGUtb3V0bGluZWQnXSxcclxuICAgIFsnb2ZmJywgJ2NpcmNsZS1vdXRsaW5lZCddLFxyXG4gICAgWydvY2N1cnJpbmcnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydleGVjdXRpbmcnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydvY2N1cnJlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ29rJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnY29tcGxldGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnY2F1dGlvbicsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3Byb3Bvc2VkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnbm90X29jY3VycmVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnbm90LW9jY3VycmVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnbm90b2NjdXJyZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydhbGVydCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ2ZhaWxlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ2Vycm9yJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnc3RhbmRieScsICdjaXJjbGUtb3V0bGluZWQnXSxcclxuICAgIFsndW5rbm93bicsICdjaXJjbGUtb3V0bGluZWQnXVxyXG4gIF0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGljb25SZWdpc3RyeTogTWF0SWNvblJlZ2lzdHJ5LFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBsb2FkIGN1c3RvbSBpY29ucy4gVXNlIHRoZW0gaW4gSFRNTCBsaWtlIHRoaXMuLi4gPG1hdC1pY29uIHN2Z0ljb249XCJhZGQtZXZlbnRcIj48L21hdC1pY29uPlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLl9pY29uTmFtZVRvRmlsZU5hbWVNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICB0aGlzLmljb25SZWdpc3RyeS5hZGRTdmdJY29uKGssIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9pY29uTmFtZVRvRmlsZU5hbWVNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICB0aGlzLmljb25SZWdpc3RyeS5nZXROYW1lZFN2Z0ljb24oaykuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5faWNvbk5hbWVUb1N2Z0VsZW1lbnRNYXAuc2V0KGssIHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdldCBpY29uIFNWRyBlbGVtZW50IGZyb20gaWNvbiBzdHJpbmcgbmFtZVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEljb25TdmdFbGVtZW50KGljb25TdHJOYW1lOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIGxldCBzdmc6IFNWR0VsZW1lbnQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIWljb25TdHJOYW1lIHx8IGljb25TdHJOYW1lLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5faWNvbk5hbWVUb1N2Z0VsZW1lbnRNYXAuaGFzKGljb25TdHJOYW1lKSkge1xyXG4gICAgICAgIGljb25TdHJOYW1lID0gJ2NpcmNsZS1vdXRsaW5lZCc7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnID0gdGhpcy5faWNvbk5hbWVUb1N2Z0VsZW1lbnRNYXAuZ2V0KGljb25TdHJOYW1lKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc3ZnID0gbmV3IFNWR0VsZW1lbnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdmc7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEljb25OYW1lRnJvbVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFzdGF0ZSB8fCBzdGF0ZS5sZW5ndGggPT09IDAgfHwgIXRoaXMuX3N0YXRlVG9JY29uTmFtZU1hcC5oYXMoc3RhdGUpKSB7XHJcbiAgICAgICAgc3RhdGUgPSAndW5rbm93bic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlVG9JY29uTmFtZU1hcC5nZXQoc3RhdGUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gJ2NpcmNsZS1vdXRsaW5lZCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEljb25TdmdFbGVtZW50RnJvbVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmdldEljb25TdmdFbGVtZW50KHRoaXMuZ2V0SWNvbk5hbWVGcm9tU3RhdGUoc3RhdGUpKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0SWNvbk5hbWVGcm9tVWNpU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJY29uTmFtZUZyb21TdGF0ZShgdWNpLSR7c3RhdGV9YCk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldEljb25TdmdFbGVtZW50RnJvbVVjaVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmdldEljb25TdmdFbGVtZW50RnJvbVN0YXRlKGB1Y2ktJHtzdGF0ZX1gKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0U3RhdGVDbGFzcyhzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghc3RhdGUgfHwgc3RhdGUubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9zdGF0ZVRvSWNvbk5hbWVNYXAuaGFzKHN0YXRlKSkge1xyXG4gICAgICAgIHN0YXRlID0gJ3Vua25vd24nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgc3RhdGUtJHtzdGF0ZS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAnc3RhdGUtdW5rbm93bic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGdldFVjaVN0YXRlQ2xhc3Moc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXN0YXRlIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5fc3RhdGVUb0ljb25OYW1lTWFwLmhhcyhzdGF0ZSkpIHtcclxuICAgICAgICBzdGF0ZSA9ICd1bmtub3duJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYHVjaS1zdGF0ZS0ke3N0YXRlLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICd1Y2ktc3RhdGUtdW5rbm93bic7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pY29uLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdzLWxpYi1zdGF0ZS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1pY29uIFtzdmdJY29uXT1cImljb25TZXJ2aWNlLmdldEljb25OYW1lRnJvbVN0YXRlKHN0YXRlKVwiIFtuZ0NsYXNzXT1cImljb25TZXJ2aWNlLmdldFN0YXRlQ2xhc3Moc3RhdGUpXCI+PC9tYXQtaWNvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zdGF0ZS1pY29uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXRlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHVibGljIGljb25TZXJ2aWNlOiBJY29uU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pY29uU2VydmljZS5pbml0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fncy1saWItdWNpLXN0YXRlLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwiaWNvblNlcnZpY2UuZ2V0SWNvbk5hbWVGcm9tVWNpU3RhdGUoc3RhdGUpXCIgW25nQ2xhc3NdPVwiaWNvblNlcnZpY2UuZ2V0VWNpU3RhdGVDbGFzcyhzdGF0ZSlcIj48L21hdC1pY29uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVWNpU3RhdGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IHN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWNvblNlcnZpY2U6IEljb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmljb25TZXJ2aWNlLmluaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZU1vZHVsZSwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuXHJcbmltcG9ydCB7IERhdGVGb3JtYXRQaXBlLCBUcnVuY2F0ZVBpcGUsIE9yZGVyQnlQaXBlLCBIaWdobGlnaHRQaXBlLCBSZW1vdmVJdGVtUGlwZSB9IGZyb20gJy4vb3RoZXIvcGlwZXMnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1wdHlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHkvZW1wdHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW50aXR5LXNlbGVjdG9yL2VudGl0eS1zZWxlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGlwRGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGlwLWRpc3BsYXkvY2hpcC1kaXNwbGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGF0ZUljb25Db21wb25lbnQsIFVjaVN0YXRlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS1pY29uL3N0YXRlLWljb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBNYXRlcmlhbE1vZHVsZSwgRmxleExheW91dE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSwgT3dsRGF0ZVRpbWVNb2R1bGUsIE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFubm90YXRpb25Db21wb25lbnQsXHJcbiAgICBDaGlwRGlzcGxheUNvbXBvbmVudCxcclxuICAgIERhdGVGb3JtYXRQaXBlLFxyXG4gICAgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBFbXB0eUNvbXBvbmVudCxcclxuICAgIEVudGl0eVNlbGVjdG9yQ29tcG9uZW50LFxyXG4gICAgSGlnaGxpZ2h0UGlwZSxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgT3JkZXJCeVBpcGUsXHJcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NvbXBvbmVudCxcclxuICAgIFJlbW92ZUl0ZW1QaXBlLFxyXG4gICAgU3RhdGVJY29uQ29tcG9uZW50LFxyXG4gICAgVGl0bGVDb21wb25lbnQsXHJcbiAgICBUcnVuY2F0ZVBpcGUsXHJcbiAgICBVY2lTdGF0ZUljb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFubm90YXRpb25Db21wb25lbnQsXHJcbiAgICBDaGlwRGlzcGxheUNvbXBvbmVudCxcclxuICAgIERhdGVGb3JtYXRQaXBlLFxyXG4gICAgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBFbXB0eUNvbXBvbmVudCxcclxuICAgIEVudGl0eVNlbGVjdG9yQ29tcG9uZW50LFxyXG4gICAgSGlnaGxpZ2h0UGlwZSxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgT3JkZXJCeVBpcGUsXHJcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0NvbXBvbmVudCxcclxuICAgIFJlbW92ZUl0ZW1QaXBlLFxyXG4gICAgU3RhdGVJY29uQ29tcG9uZW50LFxyXG4gICAgVGl0bGVDb21wb25lbnQsXHJcbiAgICBUcnVuY2F0ZVBpcGUsXHJcbiAgICBVY2lTdGF0ZUljb25Db21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFnc0htaUxpYnJhcnlNb2R1bGUgeyB9XHJcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgVGhlIEJvZWluZyBDb21wYW55XHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBCb2VpbmcgQ29tcGFueSAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFdlYlNvY2tldFN1YmplY3QsIFdlYlNvY2tldFN1YmplY3RDb25maWcgIH0gZnJvbSAncnhqcy93ZWJTb2NrZXQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsO1xyXG4gIHByaXZhdGUgX3dzc0NvbmZpZzogV2ViU29ja2V0U3ViamVjdENvbmZpZzxhbnk+O1xyXG4gIHByaXZhdGUgX3dzczogV2ViU29ja2V0U3ViamVjdDxhbnk+O1xyXG4gIHByaXZhdGUgZ2V0IHdzcygpOiBXZWJTb2NrZXRTdWJqZWN0PGFueT4ge1xyXG4gICAgaWYgKCF0aGlzLl93c3MgfHwgdGhpcy5fd3NzLmNsb3NlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnQWxlcnRTZXJ2aWNlOiBjcmVhdGUgV2ViU29ja2V0U3ViamVjdCcpO1xyXG4gICAgICB0aGlzLl93c3MgPSBuZXcgV2ViU29ja2V0U3ViamVjdCh0aGlzLl93c3NDb25maWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0FsZXJ0U2VydmljZTogV2ViU29ja2V0U3ViamVjdCBhbHJlYWR5IGNyZWF0ZWQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl93c3M7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuX3dzcykge1xyXG4gICAgICB0aGlzLl93c3MudW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5fd3NzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl93c3NDb25maWcgPSB7XHJcbiAgICAgIHVybDogc2VydmljZVVybCxcclxuICAgICAgY2xvc2VPYnNlcnZlcjoge1xyXG4gICAgICAgIG5leHQ6IChlOiBDbG9zZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgV0VCU09DS0VUIENMT1NFRCBgLCBgYmFja2dyb3VuZDogYmxhY2s7IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDtgLCAnQXR0ZW1wdGluZyB0byByZWNvbm5lY3QuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5PYnNlcnZlcjoge1xyXG4gICAgICAgIG5leHQ6IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCVjIFdFQlNPQ0tFVCBPUEVOIGAsIGBiYWNrZ3JvdW5kOiBncmVlbjsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkO2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLndzcy5waXBlKFxyXG4gICAgICAvLyBBZGRzIGFiaWxpdHkgdG8gcmVjb25uZWN0IGEgZGlzY29ubmVjdGVkIHdlYnNvY2tldFxyXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NDA2Nzk3MlxyXG4gICAgICByZXRyeSgpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcykgLy8gdGhpcyBjYW4gYmUgdXNlZCB0byBtb2RpZnkgdGhlIGluY29taW5nIG1lc3NhZ2VcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZW5kTWVzc2FnZShtc2cpIHtcclxuICAgIHRoaXMud3NzLm5leHQobXNnKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBHRVQgL2NhbC90YXNrL2J5VWNpVGFza0lkLyR7dWNpVGFza0lkfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRUYXNrKHVjaVRhc2tJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYXNrPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0NhbFNlcnZpY2UuZ2V0VGFzaycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9jYWwvdGFzay9ieVVjaVRhc2tJZC8nICsgdWNpVGFza0lkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUYXNrPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBUYXNrIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUFVUIC9jYWwvdGFzay8ke3VjaVRhc2tJZH0vYnlVY2lUYXNrSWQvJHt1Y2lUYXNrSWR9XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGFkZFRhc2tUb1BsYW4ocGxhbklkOiBzdHJpbmcsIHVjaVRhc2tJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ0NhbFNlcnZpY2UuYWRkVGFza1RvUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9jYWwvdGFzay8nICsgcGxhbklkICsgJy9ieVVjaVRhc2tJZC8nICsgdWNpVGFza0lkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIFRhc2sgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQVVQgL2NhbC90YXNrL3JlamVjdC9ieVVjaVRhc2tJZC8ke3VjaVRhc2tJZH1cclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcmVqZWN0VGFzayh1Y2lUYXNrSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdDYWxTZXJ2aWNlLnJlamVjdFRhc2snKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvY2FsL3Rhc2svcmVqZWN0L2J5VWNpVGFza0lkLycgKyB1Y2lUYXNrSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgVGFzayByZWplY3RlZCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFNlbmQgdGFzayByZXF1ZXN0XHJcbiAgICogUFVUIGNhbC90YXNrL3tldmVudElkfS97cGxhbklkfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBzZW5kVGFza2luZ1JlcXVlc3QoZXZlbnRJZDogc3RyaW5nLCBwbGFuSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdDYWxTZXJ2aWNlLnNlbmRUYXNrUmVxdWVzdCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgYC9jYWwvdGFzay8ke2V2ZW50SWR9LyR7cGxhbklkfWApO1xyXG4gICAgY29uc29sZS5sb2coJyAgICcgKyB1cmwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgJycsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB0YXNrIHJlcXVlc3Qgc2VudGApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZnRQbGFuU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChzZXJ2aWNlVXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBQT1NUIC9wbGFuL2RyYWZ0UGxhbi8ke3BsYW5JZH1cclxuXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRyYWZ0UGxhbihwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmRyYWZ0UGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL2RyYWZ0UGxhbi8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIGFkZGVkIFBsYW5Bc3NldCBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFuTWluVGFza0RhdGEge1xyXG4gICAgYXNzZXRFbnRpdHlJZDogc3RyaW5nID0gJyc7XHJcbiAgICBhc3NldE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgY2FwYWJpbGl0eTogc3RyaW5nID0gJyc7XHJcbiAgICBjYXBhYmlsaXR5SWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbWlzc2lvblRhc2tJZDogc3RyaW5nID0gJyc7XHJcbiAgICB0YXJnZXRFbnRpdHlJZDogc3RyaW5nID0gJyc7XHJcbiAgICB0YXJnZXROYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHN0YXJ0VGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBlbmRUaW1lOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIFxyXG4gICAgLy9ORVcgU0VSVklDRSBQUk9QRVJUSUVTXHJcbiAgICBwbGFuSWQ6IHN0cmluZztcclxuICAgIGlzUGxhbm5lZDogZmFsc2U7XHJcbiAgICBtaXNzaW9uVXVpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGxhblN0YXR1czogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaG1pVHlwZU5hbWU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb24/OiBhbnkpIHtcclxuICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2V0RW50aXR5SWQgPSBfLmlzTmlsKGpzb24uYXNzZXRFbnRpdHlJZCkgPyAnJyA6IGpzb24uYXNzZXRFbnRpdHlJZDtcclxuICAgICAgICAgICAgdGhpcy5hc3NldE5hbWUgPSBfLmlzTmlsKGpzb24uYXNzZXROYW1lKSA/ICcnIDoganNvbi5hc3NldE5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwYWJpbGl0eSA9IF8uaXNOaWwoanNvbi5jYXBhYmlsaXR5KSA/ICcnIDoganNvbi5jYXBhYmlsaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmNhcGFiaWxpdHlJZCA9IF8uaXNOaWwoanNvbi5jYXBhYmlsaXR5SWQpID8gJycgOiBqc29uLmNhcGFiaWxpdHlJZDtcclxuICAgICAgICAgICAgdGhpcy5taXNzaW9uVGFza0lkID0gXy5pc05pbChqc29uLm1pc3Npb25UYXNrSWQpID8gJycgOiBqc29uLm1pc3Npb25UYXNrSWQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RW50aXR5SWQgPSBfLmlzTmlsKGpzb24udGFyZ2V0RW50aXR5SWQpID8gJycgOiBqc29uLnRhcmdldEVudGl0eUlkO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5hbWUgPSBfLmlzTmlsKGpzb24udGFyZ2V0TmFtZSkgPyAnJyA6IGpzb24udGFyZ2V0TmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZShqc29uLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IG5ldyBEYXRlKGpzb24uZW5kVGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQbGFubmVkID0ganNvbi5pc1BsYW5uZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBERUxFVEU6XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXRFbnRpdHlJZCA9IHRoaXMuYXNzZXRFbnRpdHlJZC50cmltKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RW50aXR5SWQgPSB0aGlzLnRhcmdldEVudGl0eUlkLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIC8vTkVXIFNFUlZJQ0UgUFJPUEVSVElFU1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5JZCA9IF8uaXNOaWwoanNvbi5wbGFuSWQpID8gJycgOiBqc29uLnBsYW5JZDtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYW5uZWQgPSBfLmlzTmlsKGpzb24uaXNQbGFubmVkKSA/IGZhbHNlIDoganNvbi5pc1BsYW5uZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWlzc2lvblV1aWQgPSBfLmlzTmlsKGpzb24ubWlzc2lvblV1aWQpID8gJycgOiBqc29uLm1pc3Npb25VdWlkO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBfLmlzTmlsKGpzb24ubmFtZSkgPyAnJyA6IGpzb24ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wbGFuU3RhdHVzID0gXy5pc05pbChqc29uLnBsYW5TdGF0dXMpID8gJycgOiBqc29uLnBsYW5TdGF0dXM7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IF8uaXNOaWwoanNvbi50eXBlKSA/ICcnIDoganNvbi50eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGFuTWluVGFza0RhdGEgfSBmcm9tICcuLi9tb2RlbHMvcGxhbic7XHJcbmltcG9ydCB7IFBsYW5Bc3NldCB9IGZyb20gJy4uL21vZGVscy9wbGFuQXNzZXQnO1xyXG5pbXBvcnQgeyBNaXNzaW9uVGFzayB9IGZyb20gJy4uL21vZGVscy9taXNzaW9uVGFzayc7XHJcbmltcG9ydCB7IE9wdGltaXphdGlvbk9iamVjdGl2ZSB9IGZyb20gJy4uL21vZGVscy9vcHRpbWl6YXRpb25PYmplY3RpdmUnO1xyXG5pbXBvcnQgeyBPcHRpbWl6YXRpb25NZXRyaWMgfSBmcm9tICcuLi9tb2RlbHMvb3B0aW1pemF0aW9uTWV0cmljJztcclxuaW1wb3J0IHsgQWNjZXNzV2luZG93IH0gZnJvbSAnLi4vbW9kZWxzL2FjY2Vzc1dpbmRvdyc7XHJcbmltcG9ydCB7IFRhc2tDb25zdHJhaW50IH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2tDb25zdHJhaW50JztcclxuaW1wb3J0IHsgRGlzcGxheVdpbmRvdyB9IGZyb20gJy4uL21vZGVscy9kaXNwbGF5V2luZG93JztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYW5TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEdFVCAvbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9XHJcbiAgICogZ2V0IFBsYW5NaW5UYXNrRGF0YVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRNaW5UYXNrRGF0YUJ5UGxhbklkKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGFbXT4ge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2aWNlVXJsfS9wbGFuL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfWA7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJywgcGxhbklkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgUGxhblNlcnZpY2UuZ2V0TWluVGFza0RhdGFCeVBsYW5JZCgpYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGxhbk1pblRhc2tEYXRhW10+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIFBsYW5NaW5UYXNrRGF0YSBmb3IgcGxhbklkICR7cGxhbklkfWAsIHJlcykpLFxyXG4gICAgICBtYXAocmVzID0+IHJlc1sncGxhbk1pblRhc2tEYXRhJ10ubWFwKGl0ZW0gPT4gbmV3IFBsYW5NaW5UYXNrRGF0YShpdGVtKSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogUE9TVCAvbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9XHJcbiAgICogY3JlYXRlIFBsYW5NaW5UYXNrRGF0YVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBjcmVhdGVNaW5UYXNrRGF0YUJ5UGxhbklkKHBsYW5JZDogc3RyaW5nLCBwbGFuOiBQbGFuTWluVGFza0RhdGEpOiBPYnNlcnZhYmxlPFBsYW5NaW5UYXNrRGF0YVtdPiB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgJHt0aGlzLnNlcnZpY2VVcmx9L3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJHtwbGFuSWR9YDtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9taW4vdGFzay9ieVBsYW5JZC8nLCBwbGFuSWQpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGBQbGFuU2VydmljZS5jcmVhdGVNaW5UYXNrRGF0YUJ5UGxhbklkKClgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UGxhbk1pblRhc2tEYXRhW10+KHVybCwgcGxhbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgY3JlYXRlZCBQbGFuTWluVGFza0RhdGEgZm9yIHBsYW5JZCAke3BsYW5JZH1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXNbJ3BsYW5NaW5UYXNrRGF0YSddLm1hcChpdGVtID0+IG5ldyBQbGFuTWluVGFza0RhdGEoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIFBVVCAvcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1cclxuICAgKiB1cGRhdGUgUGxhbk1pblRhc2tEYXRhXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHVwZGF0ZVBsYW5NaW5UYXNrRGF0YShwbGFuSWQ6IHN0cmluZywgcGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGFbXT4ge1xyXG4gICAgLy8gY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2aWNlVXJsfS9wbGFuL21pbi90YXNrL2J5UGxhbklkLyR7cGxhbklkfWA7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWluL3Rhc2svYnlQbGFuSWQvJywgcGxhbklkKTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgUGxhblNlcnZpY2UudXBkYXRlUGxhbk1pblRhc2tEYXRhKClgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQbGFuTWluVGFza0RhdGFbXT4odXJsLCBwbGFuLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICB1cGRhdGVkIHBsYW5JZCAke3BsYW5JZH1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXNbJ3BsYW5NaW5UYXNrRGF0YSddLm1hcChpdGVtID0+IG5ldyBQbGFuTWluVGFza0RhdGEoaXRlbSkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIERFTEVURSAvcGxhbi9taW4vdGFzay9ieVBsYW5JZC8ke3BsYW5JZH1cclxuICAgKiBkZWxldGUgUGxhbk1pblRhc2tEYXRhXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGRlbGV0ZVBsYW5NaW5UYXNrRGF0YShwbGFuSWQ6IHN0cmluZywgcGxhbjogUGxhbk1pblRhc2tEYXRhKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGAke3RoaXMuc2VydmljZVVybH0vcGxhbi9taXNzaW9uVGFyZ2V0L2J5UGxhbklkLyR7cGxhbklkfWA7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWlzc2lvblRhcmdldC9ieVBsYW5JZC8nLCBwbGFuSWQpO1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGBQbGFuU2VydmljZS5kZWxldGVQbGFuTWluVGFza0RhdGEoKWApO1xyXG4gICAgbGV0IGJvZHlEYXRhID0geyBzdHJpbmdzOiBbcGxhbi5taXNzaW9uVGFza0lkXSB9O1xyXG5cclxuICAgIC8vIEhBQ0s6IHRoZSB3aG9sZSBQbGFuTWluVGFza0RhdGEgc3R1ZmYgaXMgYWxsIGhhY2tlZCB1cC4gUmV2aXNpdCB0aGlzIGF0IHNvbWUgcG9pbnRcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdDxhbnk+KCdERUxFVEUnLCB1cmwsIHsgLi4uaHR0cE9wdGlvbnMsIGJvZHk6IGJvZHlEYXRhIH0pLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBwbGFuSWQgJHtwbGFuSWR9YCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9hZEJ5TWlzc2lvbklkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBsYW5NaW5UYXNrRGF0YVtdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmxvYWRCeU1pc3Npb25JZCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL2J5TWlzc2lvbklkLycgKyBpZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnBsYW5zKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBsYW5Bc3NldHNCeVBsYW5JZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQbGFuQXNzZXRbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5wbGFuQXNzZXRzQnlQbGFuSWQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9wbGFuQXNzZXRzLycgKyBpZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnBsYW5Bc3NldHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbWlzc2lvblRhc2tEaXNwbGF5KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE1pc3Npb25UYXNrW10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UubWlzc2lvblRhc2tEaXNwbGF5Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vbWlzc2lvblRhc2tEaXNwbGF5L2J5UGxhbklkLycgKyBpZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1pc3Npb25UYXNrcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRNaXNzaW9uVGFza1RvUGxhbihwbGFuSWQ6IHN0cmluZywgZW50aXR5SWRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8TWlzc2lvblRhc2tbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5hZGRNaXNzaW9uVGFza1RvUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pc3Npb25UYXNrL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgJ3N0cmluZ3MnOiBlbnRpdHlJZHNcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBwYXJhbSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIGV2ZW50IG1vZGVsICR7bmFtZX1gLCByZXMpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMubWlzc2lvblRhc2tzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZU1pc3Npb25UYXNrc0Zyb21QbGFuKHBsYW5JZDogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8TWlzc2lvblRhc2tbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5yZW1vdmVNaXNzaW9uVGFza3NGcm9tUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL21pc3Npb25UYXNrL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBzdHJpbmdzOiBzdHJpbmdzXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55Pih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCB0YXNrcyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1pc3Npb25UYXNrcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb3B5UGxhbihwbGFuOiBQbGFuTWluVGFza0RhdGEpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5jb3B5UGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL2NvcHkvYnlQbGFuSWQvJyArIHBsYW4ucGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBsYW4sIHsgLi4uaHR0cE9wdGlvbnMsIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgYWRkZWQgcGxhbiBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEJ5UGxhbklkKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQbGFuTWluVGFza0RhdGE+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0QnlQbGFuSWQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQbGFuTWluVGFza0RhdGE+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIHBsYW4gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQbGFuQXNzZXRzKHBsYW5Bc3NldHM6IFBsYW5Bc3NldFtdKTogT2JzZXJ2YWJsZTxQbGFuQXNzZXRbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5hZGRQbGFuQXNzZXQnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9wbGFuQXNzZXRzJyk7XHJcblxyXG4gICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAncGxhbkFzc2V0cyc6IHBsYW5Bc3NldHNcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55Pih1cmwsIHBhcmFtLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBhZGRlZCBQbGFuQXNzZXQgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFuQXNzZXRzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE9wdGltaXphdGlvbk9iamVjdGl2ZXMocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9wdGltaXphdGlvbk9iamVjdGl2ZT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXRPcHRpbWl6YXRpb25PYmplY3RpdmVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vb3B0aW1pemF0aW9uT2JqZWN0aXZlcy9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcHRpbWl6YXRpb25PYmplY3RpdmU+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIE9wdGltaXphdGlvbiBPYmplY3RpdmVzIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW1pemF0aW9uTWV0cmljcyhwbGFuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3B0aW1pemF0aW9uTWV0cmljPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldE9wdGltaXphdGlvbk1ldHJpY3MnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9tZXRyaWNzL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9wdGltaXphdGlvbk1ldHJpYz4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyaWV2ZWQgT3B0aW1pemF0aW9uIE1ldHJpY3Mgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQbGFuKHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZGVsZXRlUGxhbicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL2J5UGxhbklkLycgKyBwbGFuSWQpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8c3RyaW5nPih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBwbGFuIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxhbihwbGFuOiBQbGFuTWluVGFza0RhdGEpOiBPYnNlcnZhYmxlPFBsYW5NaW5UYXNrRGF0YT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS51cGRhdGVQbGFuJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4nKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KHVybCwgcGxhbiwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBQbGFuIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVxdWVzdFdpbmRvd3MocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFjY2Vzc1dpbmRvd1tdPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLmdldFJlcXVlc3RXaW5kb3cnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9yZXF1ZXN0V2luZG93cy9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIFJlcXVlc3QgV2luZG93cyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLmFjY2Vzc1dpbmRvd3MpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGlzcGxheVdpbmRvd3MocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpc3BsYXlXaW5kb3dbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuU2VydmljZS5nZXREaXNwbGF5V2luZG93cycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL2Rpc3BsYXkvcmVxdWVzdFdpbmRvd3MvYnlQbGFuSWQvJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBSZXF1ZXN0IFdpbmRvd3Mgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5kaXNwbGF5V2luZG93cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrQ29uc3RyYWludHMocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRhc2tDb25zdHJhaW50W10+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhblNlcnZpY2UuZ2V0VGFza0NvbnN0cmFpbnRzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3BsYW4vdGFzay9jb25zdHJhaW50cy9ieVBsYW5JZC8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmlldmVkIFRhc2sgQ29uc3RyYWludCAgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5wbGFuTWlzc2lvblRhc2tDb25zdGFpbnRzR3JvdXBzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRhc2tDb25zdHJhaW50cyhjb25zdHJhaW50czogVGFza0NvbnN0cmFpbnQpOiBPYnNlcnZhYmxlPFRhc2tDb25zdHJhaW50PiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLnVwZGF0ZVRhc2tDb25zdHJhaW50cycpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9wbGFuL3Rhc2svY29uc3RyYWludHMnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KHVybCwgY29uc3RyYWludHMsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHVwZGF0ZWQgVGFzayBDb25zdHJhaW50ICBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnBsYW5NaXNzaW9uVGFza0NvbnN0YWludHNHcm91cHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3B0aW1pemF0aW9uT2JqZWN0aXZlcyhvcHRpbWl6YXRpb25PYmplY3RpdmU6IE9wdGltaXphdGlvbk9iamVjdGl2ZSk6IE9ic2VydmFibGU8T3B0aW1pemF0aW9uT2JqZWN0aXZlPiB7XHJcbiAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5TZXJ2aWNlLnVwZGF0ZU9wdGltaXphdGlvbk9iamVjdGl2ZXMnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvcGxhbi9vcHRpbWl6YXRpb25PYmplY3RpdmVzJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55Pih1cmwsIG9wdGltaXphdGlvbk9iamVjdGl2ZSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgdXBkYXRlZCBPcHRpbWl6YXRpb24gT2JqZWN0aXZlcyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTZXJ2aWNlIHtcclxuXHJcbiAgcGVuZGluZ1JlcXVlc3RzOiBudW1iZXIgPSAwO1xyXG4gIGNvbnRhaW5lck5hbWUgPSAncHJvZ3Jlc3NDb250YWluZXInO1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdEZWZhdWx0IGVsZW1lbnQgZm9yIHByb2dyZXNzIHNwaW5uZXIgPSBcIicgKyB0aGlzLmNvbnRhaW5lck5hbWUgKyAnXCInKTtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJOYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQcm9ncmVzcyBzcGlubmVyIGVsZW1lbnQgbm90IGZvdW5kLiAgRW5zdXJlIGVsZW1lbnQgaXMgaW5jbHVkZWQgaW4gZG9jdW1lbnQuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0QnVzeShpc0J1c3k6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0J1c3kpIHtcclxuICAgICAgLy9LZWVwIHRyYWNrIG9mIGhvdyBtYW55IHJlcXVlc3RzIHRoZXJlIGhhdmUgYmVlbiB0byBzaG93IHRoZSBidXN5IG1lc3NhZ2UuXHJcbiAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzKys7XHJcbiAgICAgIC8vSWYgZm9yY2UgaXMgdHJ1ZSBzaG93IHRoZSBidXN5IG1lc3NhZ2UgaW1tZWRpYXRlbHkuXHJcbiAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvL0tlZXAgdHJhY2sgb2YgaG93IG1hbnkgcmVxdWVzdHMgdGhlcmUgaGF2ZSBiZWVuIHRvIGhpZGUgdGhlIGJ1c3kgbWVzc2FnZS5cclxuICAgICAgaWYgKHRoaXMucGVuZGluZ1JlcXVlc3RzID4gMCkge1xyXG4gICAgICAgIHRoaXMucGVuZGluZ1JlcXVlc3RzLS07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vSWYgdGhlcmUgaXMgbm8gbW9yZSBvdXRzdGFuZGluZyBidXN5IHJlcXVlc3RzIG9yIGlmIGZvcmNlIGlzIHRydWUgdGhlbiBoaWRlIHRoZSBidXN5IG1lc3NhZ2UuXHJcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdSZXF1ZXN0cyA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBlbmRpbmdSZXF1ZXN0cyA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQ29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgYnVzeSBtZXNzYWdlIGRpdi5cclxuICBzZXRWaXNpYmxlKGlzVmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7XHJcbiAgICAgIHRoaXMubG9nU2VydmljZS53YXJuKCdVbmFibGUgdG8gZGlzcGxheSBzcGlubmVyLiAgSXMgXCJhZ3MtbGliLXByb2dyZXNzXCIgY29tcG9uZW50IGluY2x1ZGVkPycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9tb2RlbHMvdGFzayc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIFRhc2tPcmRlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYXNrKHRhc2s6IFRhc2spOiBPYnNlcnZhYmxlPFRhc2s+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmNyZWF0ZVRhc2snKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Rhc2tpbmdPcmRlcicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUYXNrPih1cmwsIHRhc2ssIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBbGwodHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYXNrW10+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1Rhc2tTZXJ2aWNlLmxvYWRBbGwnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Rhc2tpbmdPcmRlci9hbGxPcmRlcnM/dHlwZT0nICsgdHlwZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy50YXNraW5nT3JkZXJzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VGFzaz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnVGFza1NlcnZpY2UubG9hZEJ5SWQnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3Rhc2tpbmdPcmRlci8nICsgaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUYXNrPih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBldmVudCBtb2RlbCAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFza2luZ09yZGVyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnVGFza1NlcnZpY2UuZGVsZXRlVGFza2luZ09yZGVyJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXIvJyArIGlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxzdHJpbmc+KHVybCwgZGVsZXRlT3B0aW9ucykucGlwZShcclxuICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCB0YXNrIG9yZGVyIHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNraW5nT3JkZXIodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnVGFza1NlcnZpY2UudXBkYXRlVGFza2luZ09yZGVyJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy90YXNraW5nT3JkZXInKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VGFzaz4odXJsLCB0YXNrLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICAgdXBkYXRlZCB0YXNrICR7dGFzay50YXNraW5nT3JkZXJVdWlkfWApKSxcclxuICAgICAgICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZVNlcnZpY2Uge1xyXG5cclxuICAgIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmljZVVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxyXG4gICAgICAgICAgLnBpcGUobWFwKFxyXG4gICAgICAgICAgICByZXMgPT4gcmVzXHJcbiAgICAgICAgICApKTtcclxuICAgIFxyXG4gICAgICB9XHJcblxyXG59IiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBUaGUgQm9laW5nIENvbXBhbnlcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIEJvZWluZyBDb21wYW55ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBhcHBOYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGhlYWRlclRpdGxlOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcclxuICBwdWJsaWMgYnJlYWRjcnVtYjogQmVoYXZpb3JTdWJqZWN0PG9iamVjdD47XHJcbiAgcHJpdmF0ZSBfaGVhZGVyUHJpbWFyeVRpdGxlID0gJyc7XHJcbiAgcHJpdmF0ZSBfaGVhZGVyU3ViVGl0bGUgPSAnJztcclxuXHJcbiAgcHVibGljIHNldCBoZWFkZXJQcmltYXJ5VGl0bGUodmFsdWUpIHtcclxuICAgIHRoaXMuX2hlYWRlclByaW1hcnlUaXRsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodmFsdWUgKyAnIC0gJyArIHRoaXMuYXBwTmFtZSk7IC8vIHRoaXMgaXMgd2hhdCBnZXRzIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlciB0YWJcclxuICAgIHRoaXMudXBkYXRlSGVhZGVyVGl0bGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgaGVhZGVyU3ViVGl0bGUodmFsdWUpIHtcclxuICAgIHRoaXMuX2hlYWRlclN1YlRpdGxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRlclRpdGxlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUJyZWFkY3J1bWIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSkge1xyXG4gICAgdGhpcy5oZWFkZXJUaXRsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aXRsZVNlcnZpY2UuZ2V0VGl0bGUoKSk7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG9iamVjdD4oe30pO1xyXG4gIH1cclxuXHJcbiAgaW5pdChhcHBOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYXBwTmFtZSA9IGFwcE5hbWU7XHJcbiAgfVxyXG5cclxuICAvLyBzZWUgaHR0cHM6Ly9rZW5kYWxlaXYuY29tL3N1YnNjcmliaW5nLXRvLWJyb3dzZXItdGl0bGUtY2hhbmdlcy11c2luZy1hbmd1bGFyL1xyXG4gIHVwZGF0ZUhlYWRlclRpdGxlKCkge1xyXG4gICAgbGV0IHRpdGxlID0gdGhpcy5faGVhZGVyUHJpbWFyeVRpdGxlO1xyXG4gICAgaWYgKHRoaXMuX2hlYWRlclN1YlRpdGxlKSB7XHJcbiAgICAgIHRpdGxlICs9ICcgWycgKyB0aGlzLl9oZWFkZXJTdWJUaXRsZSArICddJztcclxuICAgIH1cclxuICAgIHRoaXMuaGVhZGVyVGl0bGUubmV4dCh0aXRsZSk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIFVwZGF0ZXMgdGhlIGJyZWFkY3J1bWIgd2hlbiB0aGUgdGl0bGUgaXMgdXBkYXRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IEFuIG9iamVjdCBjb25zaXN0aW5nIG9mIHRoZSBwcmltYXJ5IHRpdGxlLCBhbmQgdGhlIHN1YnRpdGxlXHJcbiAgICovXHJcbiAgdXBkYXRlQnJlYWRjcnVtYigpIHtcclxuICAgIHRoaXMuYnJlYWRjcnVtYi5uZXh0KHtcclxuICAgICAgcHJpbWFyeVRpdGxlOiB0aGlzLl9oZWFkZXJQcmltYXJ5VGl0bGUsXHJcbiAgICAgIHN1YnRpdGxlOiB0aGlzLl9oZWFkZXJTdWJUaXRsZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiogIFRoZSBCb2VpbmcgQ29tcGFueVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgQm9laW5nIENvbXBhbnkgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgUGxhbkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvcGxhbkNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgeyBQbGFuQ29sbGVjdGlvblR5cGUgfSBmcm9tICcuLi9tb2RlbHMvcGxhbkNvbGxlY3Rpb25UeXBlJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFuQ29sbGVjdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWxsKCk6IE9ic2VydmFibGU8UGxhbkNvbGxlY3Rpb25bXT4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLmxvYWRBbGwnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5wbGFuQ29sbGVjdGlvbnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWxsVHlwZXMoKTogT2JzZXJ2YWJsZTxQbGFuQ29sbGVjdGlvblR5cGVbXT4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLmxvYWRBbGxUeXBlcycpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvUGxhbkNvbGxlY3Rpb24vVHlwZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgcmV0cmVpdmVkIHBsYW4gY29sbGVjdGlvbiB0eXBlcyAke25hbWV9YCwgcmVzKSksXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzLnBsYW5UeXBlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFzc2V0R3JvdXBUeXBlKG1pc3Npb25UeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLmxvYWRBbGxUeXBlcycpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQWxsVHlwZXMoKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJlaXZlZCBwbGFuIGNvbGxlY3Rpb24gdHlwZXMgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcy5maWx0ZXIocCA9PiBwLmhtaU5hbWUgPT09IG1pc3Npb25UeXBlKVswXS5hc3NldEdyb3VwMSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRCeUlkKG1pc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQbGFuQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnUGxhbkNvbGxlY3Rpb25TZXJ2aWNlLmxvYWRCeUlkJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9QbGFuQ29sbGVjdGlvbi9ieUlkLycgKyBtaXNzaW9uSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQbGFuQ29sbGVjdGlvbj4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICByZXRyZWl2ZWQgZXZlbnQgbW9kZWwgJHtuYW1lfWAsIHJlcykpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShwbGFuQ29sbGVjdGlvbjogUGxhbkNvbGxlY3Rpb24pOiBPYnNlcnZhYmxlPFBsYW5Db2xsZWN0aW9uPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuQ29sbGVjdGlvblNlcnZpY2UuY3JlYXRlUGxhbkNvbGxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBsYW5Db2xsZWN0aW9uPih1cmwsIHBsYW5Db2xsZWN0aW9uLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBjZXJhdGVkIFBsYW4gQ29sbGVjdGlvbiAke25hbWV9YCwgcmVzKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ1BsYW5Db2xsZWN0aW9uU2VydmljZS5kZWxldGVQbGFuQ29sbGVjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvUGxhbkNvbGxlY3Rpb24vYnlJZC8nICsgaWQpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8c3RyaW5nPih1cmwsIGRlbGV0ZU9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChyZXMgPT4gdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGAgICAgZGVsZXRlZCBQbGFuIENvbGxlY3Rpb24gc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICAgICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShwbGFuQ29sbGVjdGlvbjogUGxhbkNvbGxlY3Rpb24pOiBPYnNlcnZhYmxlPFBsYW5Db2xsZWN0aW9uPiB7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdQbGFuQ29sbGVjdGlvblNlcnZpY2UudXBkYXRlUGxhbkNvbGxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL1BsYW5Db2xsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFBsYW5Db2xsZWN0aW9uPih1cmwsIHBsYW5Db2xsZWN0aW9uLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICAgdXBkYXRlZCBQbGFuIENvbGxlY3Rpb24gJHtwbGFuQ29sbGVjdGlvbi5taXNzaW9uVVVJZH1gKSksXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4gcmVzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9vdGhlci91dGlsJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN6bWxTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIGdldEdyb3VuZFRyYWNrQW5kU2Vuc29yVm9sdW1lKHBsYW5JZDogc3RyaW5nLCB0YXJnZXRJZDogc3RyaW5nLCBtaXNzaW9uSWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IGVuZHBvaW50ID0gYC9jem1sL2dyb3VuZFRyYWNrQW5kU2Vuc29yVm9sdW1lLyR7cGxhbklkfS8ke3RhcmdldElkfWA7XHJcblxyXG4gICAgaWYgKG1pc3Npb25JZCkge1xyXG4gICAgICBlbmRwb2ludCA9IGAke2VuZHBvaW50fS8ke21pc3Npb25JZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsIGVuZHBvaW50KTtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnQ3ptbFNlcnZpY2UuZ2V0R3JvdW5kVHJhY2tBbmRTZW5zb3JWb2x1bWUoKScpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJyAgICByZXRyaWV2ZWQgQ3ptbCcpKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogSGFuZGxlIGh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxyXG4gICpcclxuICAqIEBwYXJhbSBvcGVyYXRpb24ge3N0cmluZ30gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXHJcbiAgKiBAcGFyYW0gcmVzdWx0IHthbnl9IG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcclxuICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcclxuICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZXJyb3IoYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlclNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHNlcnZpY2VVcmw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGluaXQoc2VydmljZVVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR0VUIC9zY2hlZHVsZS9zb2x2ZXJUeXBlcy8ke21pc3Npb25UeXBlfVxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRTb2x2ZXJUeXBlcyhtaXNzaW9uVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdTY2hlZHVsZXJTZXJ2aWNlLmdldFNvbHZlclR5cGVzJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3NjaGVkdWxlL3NvbHZlclR5cGVzLycgKyBtaXNzaW9uVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIHJldHJpZXZlZCBTb2x2ZXIgVHlwZXMgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5zdHJpbmdzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL290aGVyL3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFNwc0V2ZW50IH0gZnJvbSAnLi4vbW9kZWxzL3Nwc0V2ZW50JztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4dGVybmFsU2NoZWR1bGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KHNlcnZpY2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICogUE9TVCAvcnVuSW50ZXJuYWxTY2hlZHVsZXIvJHtwbGFuSWR9XHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcnVuSW50ZXJuYWxTY2hlZHVsZXIocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFeHRlcm5hbFNjaGVkdWxlU2VydmljZS5ydW5JbnRlcm5hbFNjaGVkdWxlcicpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9ydW5JbnRlcm5hbFNjaGVkdWxlci8nICsgcGxhbklkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFJ1bkludGVybmFsIFNjaGVkdWxlciBzdWNjZXNzZnVsbGApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBQT1NUIC9wdWJsaXNoVG9MYXNvLyR7cGxhbklkfVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHB1Ymxpc2hUb0xhc28ocGxhbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFeHRlcm5hbFNjaGVkdWxlU2VydmljZS5wdWJsaXNoVG9MYXNvJyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL3B1Ymxpc2hUb0xhc28vJyArIHBsYW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBQdWJsaXNoZWQgVG8gTGFzbyBzdWNjZXNzZnVsbHlgKSksXHJcbiAgICAgIG1hcChyZXMgPT4gcmVzLnN0YXR1cylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFBPU1QgL3Nwc0V2ZW50LyR7cGxhbklkfVxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIGNyZWF0ZShzcHNFdmVudDogU3BzRXZlbnQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFeHRlcm5hbFNjaGVkdWxlU2VydmljZS5zcHNFdmVudCcpO1xyXG4gICAgY29uc3QgdXJsID0gVXRpbC51cmxKb2luKHRoaXMuc2VydmljZVVybCwgJy9zcHNFdmVudCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCwgc3BzRXZlbnQsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFN0b3JlZCBzcHMgRXZlbnQgc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqIFBPU1QgL3B1Ymxpc2hUb0xhc28vJHtwbGFuSWR9XHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0TGFzb1Byb2hpYml0KHByb2hpYml0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U3BzRXZlbnQ+IHtcclxuICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZygnRXh0ZXJuYWxTY2hlZHVsZVNlcnZpY2UuZ2V0TGFzb1Byb2hpYml0Jyk7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsLnVybEpvaW4odGhpcy5zZXJ2aWNlVXJsLCAnL2dldExhc29Qcm9oaWJpdC8nICsgcHJvaGliaXRJZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAocmVzID0+IHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgICAgIFJldHJpZXZlZCBMYXNvIFByb2hpYml0IHN1Y2Nlc3NmdWxseWApKSxcclxuICAgICAgbWFwKHJlcyA9PiByZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgKiBQT1NUIC9hc3NldHNXaXRoTXgvJHtwbGFuSWR9XHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0QXNzZXRzV2l0aE14KHBsYW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKCdFeHRlcm5hbFNjaGVkdWxlU2VydmljZS5hc3NldHNXaXRoTXgnKTtcclxuICAgIGNvbnN0IHVybCA9IFV0aWwudXJsSm9pbih0aGlzLnNlcnZpY2VVcmwsICcvYXNzZXRzV2l0aE14LycgKyBwbGFuSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoYCAgICBSZXRyaWV2ZWQgYXNzZXRzIHdpdGggTXggc3VjY2Vzc2Z1bGx5YCkpLFxyXG4gICAgICBtYXAocmVzID0+IHJlcy5zdHJpbmdzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBBY2Nlc3NXaW5kb3dMaW1pdCB7XHJcbiAgICBjYXBhYmlsaXR5SWQ6IHN0cmluZztcclxuICAgIGVsZXZhdGlvbk1heExpbWl0OiBudW1iZXI7XHJcbiAgICBlYXJ0aExpbWJBbHRMaW1pdDogbnVtYmVyO1xyXG4gICAgcmFuZ2VPYnNlcnZhYmxlOiBudW1iZXI7XHJcbiAgICBxdWFsaXR5U2NvcmU6IG51bWJlcjtcclxuICAgIGx1bmFyRXhjbHVzaW9uQW5nbGU6IG51bWJlcjtcclxuICAgIGFwcGx5TGlnaHRpbmdDb25zdHJhaW50czogYm9vbGVhbjtcclxuICAgIHNvbGFyRXhjbHVzaW9uQW5nbGU6IG51bWJlcjtcclxuICAgIGFwcGx5U29sYXJEYXJrbmVzc0NvbnN0cmFpbnQ6IGJvb2xlYW47XHJcbiAgICByYW5nZVRhc2thYmxlOiBudW1iZXI7XHJcbiAgICByYW5nZU1heDogbnVtYmVyO1xyXG4gICAgcmFuZ2VNYXhPYnNlcnZhYmxlOlx0bnVtYmVyO1xyXG4gICAgcmFuZ2VNaW46IG51bWJlcjtcclxuICAgIGVsZXZhdGlvbk1pbkxpbWl0OiBudW1iZXI7XHJcbiAgICBib3Jlc2lnaHRPZmZBbmdsZTogbnVtYmVyO1xyXG4gICAgYm9yZXNpZ2h0OiBudW1iZXI7XHJcbiAgICBhemltdXRoTWluTGltaXQ6IG51bWJlcjtcclxuICAgIGF6aW11dGhNYXhMaW1pdDogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7IFBsYW5TdWJUeXBlIH0gZnJvbSAnLi9wbGFuU3ViVHlwZSc7XHJcbmltcG9ydCB7IEFsZXJ0VHlwZSB9IGZyb20gJy4vYWxlcnRUeXBlJztcclxuaW1wb3J0IHsgVGFza1N1YlR5cGUgfSBmcm9tICcuL3Rhc2tTdWJUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydCB7XHJcblxyXG4gICAgYWxlcnRUeXBlOiBBbGVydFR5cGU7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdXVpZDogc3RyaW5nO1xyXG4gICAgcGxhblN1YlR5cGU6IHtcclxuICAgICAgICB0eXBlOiBQbGFuU3ViVHlwZSxcclxuICAgIH07XHJcbiAgICB0YXNrU3ViVHlwZTogVGFza1N1YlR5cGU7XHJcbiAgICBkb21haW46IHN0cmluZztcclxuICAgIGFzc2V0U3RhdHVzU3ViVHlwZToge1xyXG4gICAgICAgIHN0YXR1c1R5cGU6IHN0cmluZztcclxuICAgICAgICB1dWlkOiBzdHJpbmc7XHJcbiAgICAgICAgdHlwZTogc3RyaW5nO1xyXG4gICAgICAgIGFzc2V0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGFzc2V0SWQ6IHN0cmluZztcclxuICAgICAgICBhc3NldFR5cGU6IHN0cmluZztcclxuICAgICAgICBhc3NldFN0YXRlOiBzdHJpbmc7XHJcbiAgICAgICAgZG9tYWluOiBzdHJpbmc7XHJcbiAgICAgICAgb3duZXI6IHN0cmluZztcclxuICAgICAgICBjYXBhYmlsaXR5U3RhdHVzTGlzdDoge1xyXG4gICAgICAgICAgICBjYXBhYmlsaXR5U3RhdHVzU3VtbWFyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXBhYmlsaXR5SUQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGNhcGFiaWxpdHlUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBjYXBhYmlsaXR5U3RhdHVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVUaW1lOiBzdHJpbmc7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzc2V0UG9zaXRpb246IHtcclxuICAgICAgICAgICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG9yYml0VHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBsYXRpdHVkZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBsb25naXR1ZGU6IHN0cmluZztcclxuICAgICAgICAgICAgYWx0aXR1ZGU6IHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFVwZGF0ZVRpbWU6IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBBbGVydFR5cGUge1xyXG4gICAgcGxhbiA9ICdQTEFOJyxcclxuICAgIHRpbWVVcGRhdGUgPSAndGltZVVwZGF0ZScsXHJcbiAgICB0YXNrID0gJ1RBU0snLFxyXG4gICAgYXNzZXRTdGF0dXMgPSAnQVNTRVRTVEFUVVMnLFxyXG4gICAgdGFza1N0YXR1cyA9ICdUQVNLU1RBVFVTJyxcclxuICAgIHNwcyA9IFwiU1BTXCIsXHJcbiAgICBzcHNfcHJvaGliaXQgPSBcIlNQU19QUk9ISUJJVFwiLFxyXG4gICAgZXNfcHJvaGliaXQgPSBcIkVTX1BST0hJQklUXCJcclxufSIsImV4cG9ydCBjbGFzcyBNaXNzaW9uRGF0YSB7XHJcbiAgICBlbmRUaW1lOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzdGFydFRpbWU6IHN0cmluZztcclxuICAgIGNvbW1hbmRlckd1aWRhbmNlOiBzdHJpbmc7XHJcbiAgICBtaXNzaW9uVXVpZDogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IFRhc2tDb25zdHJhaW50IH0gZnJvbSAnLi90YXNrQ29uc3RyYWludCc7XHJcbmltcG9ydCB7IEdyb3VwLCBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWlzc2lvblRhcmdldCB7XHJcbiAgICBwcmltYXJ5VGFza0lkOiBzdHJpbmc7XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcbiAgICBlbnRpdHlzOiBhbnlbXTtcclxuXHJcbiAgICBjb2FVdWlkOiBzdHJpbmc7XHJcbiAgICBtaXNzaW9uUGFpclV1aWQ6IHN0cmluZztcclxuICAgIGNhcGFiaWxpdHk6IHN0cmluZztcclxuICAgIG51bWJlck9mQ29sbGVjdHM6IG51bWJlcjtcclxuICAgIHByaW9yaXR5OiBudW1iZXI7XHJcbiAgICB0YXNrVHlwZTogc3RyaW5nO1xyXG4gICAgb3B0VHJhY2tpbmdJZDogc3RyaW5nO1xyXG4gICAgb3B0aW1pemVyOiBzdHJpbmc7XHJcbiAgICBwbGF0Zm9ybVV1aWQ6IHN0cmluZztcclxuICAgIHRhcmdldENhdGVnb3J5SWQ6IG51bWJlcjtcclxuICAgIHRhcmdldEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBwcmV2aW91c1Rhc2tVdWlkOiBzdHJpbmc7XHJcbiAgICByZWxhdGl2ZU5vRWFybGllclRoYW46IG51bWJlcjtcclxuICAgIHJlbGF0aXZlTm9MYXRlclRoYW46IG51bWJlcjtcclxuICAgIHByaW1hcnlUYXNrOiBzdHJpbmc7XHJcblxyXG4gICAgdGFyZ2V0Q29uc3RyYWludHM6IFRhc2tDb25zdHJhaW50O1xyXG4gICAgYWNjZXNzV2luZG93czogV2luZG93W107XHJcbiAgICByZXF1ZXN0V2luZG93czogV2luZG93W107XHJcblxyXG5cclxuICAgIC8vaW1wbGVtZW50IHRoaXMgb2JqZWN0IHdoZW4ga25vd25cclxuICAgIHN1cHBvcnRUYXNrczogYW55O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNaXNzaW9uVGFzayB7XHJcbiAgICBjYXBhYmlsaXR5OiBzdHJpbmc7XHJcbiAgICBlYXJsaWVzdFN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgbWlzc2lvblRhc2tJZDogc3RyaW5nO1xyXG4gICAgcHJpb3JpdHk6IHN0cmluZztcclxuICAgIHRhcmdldEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICB0YXJnZXROYW1lOiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE9wdGltaXphdGlvbk1ldHJpYyB7XHJcbiAgICBwbGFuSWQ6IHN0cmluZztcclxuICAgIHBsYW5EdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgdG90YWxNaXNzaW9uVGltZTogbnVtYmVyO1xyXG4gICAgdG90YWxUYXNrQXR0ZW1wdHM6IG51bWJlcjtcclxuICAgIGF2Z1Rhc2tUaW1lOiBudW1iZXI7XHJcbiAgICBtZWRpYW5UYXNrVGltZTogbnVtYmVyO1xyXG4gICAgYXZnUHJvYlRhc2tTdWNjZXNzOiBudW1iZXI7XHJcbiAgICBtaW5Qcm9iVGFza1N1Y2Nlc3M6IG51bWJlcjtcclxuICAgIGF2Z1Byb2JUYXNrQXR0cmliOiBudW1iZXI7XHJcbiAgICBwcm9iTWlzc2lvblN1Y2Nlc3M6IG51bWJlcjtcclxuICAgIG51bVJlc291cmNlc1VzZWQ6IG51bWJlcjtcclxuICAgIG51bVRhc2tzQXNzaWduZWQ6IG51bWJlcjtcclxuICAgIG51bVRhc2tzVW5hc3NpZ25lZDogbnVtYmVyO1xyXG4gICAgcGxhblN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgcGxhbkVuZFRpbWU6IHN0cmluZztcclxuICAgIG9wdERlYnVnOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBPcHRpbWl6YXRpb25PYmplY3RpdmUge1xyXG4gICAgaXNNaW5pbWl6aW5nTnVtYmVyT2ZUYXNrczogYm9vbGVhbjtcclxuICAgIGxvZ0xldmVsOiBzdHJpbmc7XHJcbiAgICBvcHRpbWl6YXRpb25Nb2RlOiBudW1iZXI7XHJcbiAgICBvcHRpbWl6YXRpb25UaW1lTGltaXQ6IG51bWJlcjtcclxuICAgIG9wdGltaXplcjogc3RyaW5nO1xyXG4gICAgcGxhbklkOiBzdHJpbmc7XHJcbiAgICBwcm9iTWlzc2lvblN1Y2Nlc3M6IG51bWJlcjtcclxuICAgIHdlaWdodGluZ01pc3NWc0F2ZVRhc2tUaW1lOiBudW1iZXI7XHJcbiAgICB3ZWlnaHRpbmdUaW1lVnNRdWFsOiBudW1iZXI7XHJcbiAgICBwbGFuU3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgICBwbGFuRW5kVGltZTogc3RyaW5nO1xyXG4gICAgc2NoZWR1bGVyTW9kZTogc3RyaW5nO1xyXG4gICAgbWF4VGFza3NQZXJDeWNsZTpudW1iZXI7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgeyBNaXNzaW9uVGFyZ2V0IH0gZnJvbSAnLi9taXNzaW9uVGFyZ2V0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFuQXNzZXQge1xyXG4gICAgYnlNaXNzaW9uVGFyZ2V0OiBNaXNzaW9uVGFyZ2V0W107XHJcbiAgICBlbnRpdHlzOiBhbnlbXTtcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuICAgIHBsYW5JZDogc3RyaW5nO1xyXG4gICAgYXNzZXRUeXBlOiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gUGxhblN1YlR5cGUge1xyXG4gICAgdXBkYXRlID0gJ1VQREFURScsXHJcbiAgICBjb21wbGV0ZSA9ICdEUkFGVCcsXHJcbiAgICBlcnJvciA9ICdFUlJPUicsXHJcbiAgICBleGVjdXRpbmcgPSAnRXhlY3V0aW5nJ1xyXG59XHJcbiIsImltcG9ydCB7IE1pc3Npb25EYXRhIH0gZnJvbSAnLi9taXNzaW9uRGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICB0YXNraW5nT3JkZXJVdWlkOiBzdHJpbmc7XHJcbiAgICB1Y2lUYXNrSWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIG1pc3Npb25EYXRhOiBNaXNzaW9uRGF0YVtdO1xyXG5cclxuICAgIHRhc2tJZDogc3RyaW5nO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0YXNrVHlwZTogc3RyaW5nO1xyXG4gICAgZW50aXR5SWQ6IHN0cmluZztcclxuICAgIHByZWNlZGVuY2U6IG51bWJlcjtcclxuICAgIHByaW9yaXR5OiBudW1iZXI7XHJcbiAgICBhcHByb3ZhbFJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICBwbGFuSWQ6IHN0cmluZztcclxuXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjbGFzcyBUYXNrU3ViVHlwZSB7XHJcbiAgICB0YXNrVHlwZTogc3RyaW5nO1xyXG4gICAgdXVpZDogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IE9wdGltaXphdGlvbk1ldHJpYyB9IGZyb20gJy4vb3B0aW1pemF0aW9uTWV0cmljJztcclxuaW1wb3J0IHsgTWlzc2lvblRhcmdldCB9IGZyb20gJy4vbWlzc2lvblRhcmdldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW1pemF0aW9uIHtcclxuXHJcbiAgICBtaXNzaW9uVXVpZDogc3RyaW5nO1xyXG4gICAgY29hSWQ6IHN0cmluZztcclxuICAgIGNvYU5hbWU6IHN0cmluZztcclxuICAgIGNvYVN0YXR1czogc3RyaW5nO1xyXG4gICAgZHJhZnRDb2FTdGFydFRpbWU6IGFueTtcclxuICAgIHN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgZW5kVGltZTogc3RyaW5nO1xyXG4gICAgY29sbGVjdEFzc2VzQ29sbGVjdDogYm9vbGVhbjtcclxuICAgIHByb2JhYmlsaXR5T2ZTdWNjZXNzOiBudW1iZXI7XHJcbiAgICBvcHRpbWl6ZXJNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBvcHRpbWl6YXRpb25NZXRyaWNzVXVpZDogc3RyaW5nO1xyXG4gICAgb3B0aW1pemF0aW9uTWV0cmljczogT3B0aW1pemF0aW9uTWV0cmljO1xyXG4gICAgbWlzc2lvblRhcmdldHM6IE1pc3Npb25UYXJnZXQ7XHJcbiAgICBjb2FPYmplY3RpdmVzOiBhbnk7XHJcblxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUYXNrQ29uc3RyYWludCB7XHJcbiAgICB0YXJnZXRDb25zdHJhaW50VXVpZDogc3RyaW5nO1xyXG4gICAgcmVzZXJ2ZWRBOiBzdHJpbmc7XHJcbiAgICByZXNlcnZlZEI6IHN0cmluZztcclxuICAgIGlzQ29sbGVjdEFzc2Vzc0NvbGxlY3Q6IHRydWU7XHJcbiAgICBwcm9iYWJpbGl0eUF0dHJpYnV0aW9uOiBudW1iZXI7XHJcbiAgICBwcm9iYWJpbGl0eUNvbGxlY3Rpb246IG51bWJlcjtcclxuICAgIHByb2JhYmlsaXR5U3VjY2VzczogbnVtYmVyO1xyXG4gICAgZWFybGllc3RTdGFydFRpbWU6IHN0cmluZztcclxuICAgIGxhdGVzdEVuZFRpbWU6IHN0cmluZztcclxuICAgIGRlY29uZmxpY3Rpb25Db25zdHJhaW50czogc3RyaW5nO1xyXG4gICAgdXNlTm9uRGVkaWNhdGVkOiB0cnVlO1xyXG5cclxuICAgIGNhcGFiaWxpdHk6IHN0cmluZztcclxuICAgIG51bWJlck9mQ29sbGVjdHM6IG51bWJlcjtcclxuICAgIHByaW9yaXR5OiBudW1iZXI7XHJcblxyXG4gICAgbWlzc2lvblRhc2tJZHM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGJhbmR3aWR0aDogc3RyaW5nO1xyXG4gICAgcXVhbGl0eVRocmVzaG9sZDogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7IFRpbWVXaW5kb3cgfSBmcm9tICcuL3RpbWVXaW5kb3cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1dpbmRvdyB7XHJcblxyXG4gICAgYXNzZXRVdWlkOiBzdHJpbmc7XHJcbiAgICBtaXNzaW9uVGFza1V1aWQ6IHN0cmluZztcclxuICAgIHRhcmdldFV1aWQ6IHN0cmluZztcclxuICAgIHRpbWVXaW5kb3dzOlRpbWVXaW5kb3dbXTtcclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgVGltZVdpbmRvdyB7XHJcblxyXG4gICAgd2luZG93VXVpZDogc3RyaW5nO1xyXG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgICBlbmRUaW1lOiBzdHJpbmc7XHJcbiAgICB3aW5kb3dUeXBlOiBzdHJpbmc7XHJcbiAgICBhc3NldElkOiBzdHJpbmc7XHJcbiAgICBwcm9iU3VjY2VzczogbnVtYmVyO1xyXG4gICAgcHJvYkF0dHJpYnV0aW9uOiBudW1iZXI7XHJcbiAgICBwcmVFeGVjdXRpb25UaW1lOiBudW1iZXI7XHJcbiAgICBleGVjdXRpb25UaW1lOiBudW1iZXI7XHJcbiAgICBwb3N0RXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgcmVxdWlyZWQ6IHRydWU7XHJcbiAgICByZWFzb25Mb3dlclByb2JTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IHN0cmluZztcclxuICAgIHJldk51bWJlcjogc3RyaW5nO1xyXG4gICAgbnVtYmVyT2ZDb2xsZWN0czogbnVtYmVyO1xyXG4gICAgcXVhbGl0eTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQbGFuQ29sbGVjdGlvbiB7XHJcbiAgICBtaXNzaW9uVVVJZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaG1pVHlwZU5hbWU6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIHN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgZW5kVGltZTogc3RyaW5nO1xyXG4gICAgY29tbWFuZGVyR3VpZGFuY2U6IHN0cmluZztcclxuICAgIHByaW1hcnlQbGFuOiBzdHJpbmc7XHJcbiAgICBwbGFuU3RhdHVzOiBzdHJpbmc7XHJcbiAgICBsYXN0VXNlclVwZGF0ZTogc3RyaW5nO1xyXG4gICAgbGFzdFVwZGF0ZVRpbWU6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUGxhbkNvbGxlY3Rpb25UeXBlIHtcclxuICAgIHBsYW5UeXBlSWQ6IHN0cmluZztcclxuICAgIGhtaU5hbWU6IHN0cmluZztcclxuICAgIGNvYU5hbWU6IHN0cmluZztcclxuICAgIGFzc2V0R3JvdXAxOiBzdHJpbmc7XHJcbiAgICBhc3NldEdyb3VwMjogc3RyaW5nO1xyXG4gICAgYXNzZXRHcm91cDJUYXJnZXRzOiBzdHJpbmc7XHJcbiAgICBzY2hlZHVsZXJUeXBlOiBzdHJpbmdcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGlzcGxheVdpbmRvdyB7XHJcbiAgICBwbGFuSWQ6IHN0cmluZztcclxuICAgIG1pc3Npb25UYXNrSWQ6IHN0cmluZztcclxuICAgIHdpbmRvd0lkOiBzdHJpbmc7XHJcbiAgICBhc3NldElkOiBzdHJpbmc7XHJcbiAgICBhc3NldE5hbWU6IHN0cmluZztcclxuICAgIGFzc2V0UGFyZW50SWQ6IHN0cmluZztcclxuICAgIGFzc2V0UGFyZW50TmFtZTogc3RyaW5nO1xyXG4gICAgdGFyZ2V0SWQ6IHN0cmluZztcclxuICAgIHRhcmdldE5hbWU6IHN0cmluZztcclxuICAgIGNhcGFiaWxpdHlJZDogc3RyaW5nO1xyXG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgICBlbmRUaW1lOiBzdHJpbmc7XHJcbiAgICBwcmlvcml0eTogbnVtYmVyO1xyXG4gICAgcHJvYmFiaWxpdHlPZkF0dHJpYnV0aW9uOiBudW1iZXI7XHJcbiAgICBwcm9iYWJpbGl0eU9mU3VjY2VzczogbnVtYmVyO1xyXG4gICAgcHJvYmFiaWxpdHlSZWFzb246IHN0cmluZztcclxuICAgIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgICBwb3N0RXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgZXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgcHJlRXhlY3V0aW9uVGltZTogbnVtYmVyO1xyXG4gICAgcmV2b2x1dGlvbk51bWJlcjogc3RyaW5nO1xyXG4gICAgbnVtYmVyT2ZDb2xsZWN0czogbnVtYmVyO1xyXG4gICAgcXVhbGl0eTogbnVtYmVyO1xyXG4gICAgaXNQcmltYXJ5OiBib29sZWFuO1xyXG4gICAgd2luZG93VHlwZTogc3RyaW5nO1xyXG4gICAgZ3JvdXBCeU5hbWU6IHN0cmluZztcclxuICAgIHVzZXI6IHN0cmluZ1xyXG59IiwiZXhwb3J0IGNsYXNzIFNwc0V2ZW50e1xyXG4gICAgcGxhbklkOiBzdHJpbmc7XHJcbiAgICBhc3NldE5hbWU6IHN0cmluZztcclxuICAgIHRhc2tUeXBlOiBzdHJpbmc7XHJcbiAgICBzdGFydFRpbWU6IHN0cmluZztcclxuICAgIHN0b3BUaW1lOiBzdHJpbmc7XHJcbiAgICBjaGlsZEFzc2V0czogYW55W107XHJcbiAgfVxyXG4gICIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG5cclxuICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbikge1xyXG4gICAgICB0aGlzLmxvZ1NlcnZpY2UuZGVidWcoJ2d1YXJkIC0gbm90IGxvZ2dlZCBpbiEhJyk7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VG9Mb2dpblBhZ2UoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0aGlzIGlzIGp1c3QgYSBwbGFjZWhvbGRlciBzbyB0aGF0IHRoaXMgZmlsZSBkb2Vzbid0IGdlbmVyYXRlIGEgY29tcGlsZXIgZXJyb3IuXHJcbi8vIG9uY2Ugc29tZSByZWFsIGVudW1zIGhhdmUgYmVlbiBhZGRlZCB0byB0aGlzIGZpbGUgdGhpcyBlbnVtIGNhbiBiZSBkZWxldGVkXHJcbmV4cG9ydCBlbnVtIFNhbXBsZSB7cmVkID0gMSwgd2hpdGUgPSAyLCBibHVlID0gM31cclxuXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBKV1QgSW50ZXJjZXB0b3I6IEluc2VydCBKV1QgaW50byBoZWFkZXIgb2YgYWxsIHJlcXVlc3RzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSnd0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgaWYgKHJlcXVlc3QudXJsLmluZGV4T2YodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0QXV0aGVudGljYXRpb25TZXJ2aWNlUHJlZml4KCkpID09PSAtMSkge1xyXG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgLy8gc2V0SGVhZGVyczoge1xyXG4gICAgICAgIC8vICAgJ3Rva2VuJzogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UudG9rZW4sXHJcbiAgICAgICAgLy8gICAnVXNlck5hbWUnOiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlclxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMuc2V0KCd0b2tlbicsIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnRva2VuKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEVycm9yIEludGVyY2VwdG9yOiBIYW5kbGUgSFRUUCBlcnJvcnNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcclxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgIC8vIE5PVEU6IGVyci5zdGF0dXMgaXMgYWx3YXlzIDAuIFJlc2VhcmNoIHBvaW50cyB0byBiYWNrZW5kIHNlcnZlciBub3QgYXR0YWNoaW5nIENPUlMgaGVhZGVycyB0byByZXNwb25zZVxyXG4gICAgICAgIC8vIHNlZSB0aGlzIGFydGljbGUgaHR0cHM6Ly9kYXZlY2VkZGlhLmNvbS9hY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4tY29ycy1lcnJvcnMtaW4tYW5ndWxhci9cclxuICAgICAgICAvLyBhbmQgdGhpcyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTU0NzAwMy9hbmd1bGFyanMtbm8tYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luLWhlYWRlci1pcy1wcmVzZW50LW9uLXRoZS1yZXF1ZXN0ZWQtclxyXG4gICAgICAgIC8vIGFkbiB0aGlzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvSGVhZGVycy9BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cclxuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAvLyBhdXRvIGxvZ291dCBpZiA0MDEgcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSBhcGlcclxuICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ1NlcnZpY2UuZXJyb3IoYEVycm9ySW50ZXJjZXB0b3I6IGVyci5zdGF0dXMgPSAke2Vyci5zdGF0dXN9YCwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyLmVycm9yLm1lc3NhZ2UgfHwgZXJyLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIERhdGEgUmVjb3JkZXIgSW50ZXJjZXB0b3JcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWNoZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSh0YXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgPj4+Pj4+Pj4+Pj4+IENBQ0hFIElOVEVSQ0VQVE9SYCwgZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBldmVudDtcclxuICAgIH0pKTtcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9ja0JhY2tlbmRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBzbGVlcChtaWxsaXNlY3MpIHtcclxuICAgICAgICBsZXQgaW5pdGlhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdoaWxlICgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbml0aWF0aW9uKSA8IG1pbGxpc2Vjcykge31cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgLy8gd3JhcCBpbiBkZWxheWVkIG9ic2VydmFibGUgdG8gc2ltdWxhdGUgc2VydmVyIGFwaSBjYWxsXHJcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpLnBpcGUobWVyZ2VNYXAoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gZXhhbXBsZSBHRVQgZW5kcG9pbnRcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QudXJsLmVuZHNXaXRoKCcvZXhhbXBsZUVuZHBvaW50JykgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTU9DSyAke3JlcXVlc3QudXJsfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFPYmogPSBbIHsgaWQ6ICcxMjM0JywgZGF0YTogJ2RhdGEgZ29lcyBoZXJlJyB9LCB7IGlkOiAnNTY3OCcsIGRhdGE6ICdkYXRhIGdvZXMgaGVyZScgfSBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IEh0dHBSZXNwb25zZSh7IHN0YXR1czogMjAwLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhT2JqKSB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHsgZXJyb3I6IHsgbWVzc2FnZTogJ0Vycm9yJyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBleGFtcGxlIEdFVCBlbmRwb2ludCB3aXRoIGlkXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybC5tYXRjaCgvXFwvZXhhbXBsZUVuZHBvaW50XFwvXFxkKyQvKSAmJiByZXF1ZXN0Lm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNT0NLICR7cmVxdWVzdC51cmx9YCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsUGFydHMgPSByZXF1ZXN0LnVybC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQodXJsUGFydHNbdXJsUGFydHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFPYmogPSB7IGlkOiBpZCwgZGF0YTogJ2RhdGEgZ29lcyBoZXJlJyB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IEh0dHBSZXNwb25zZSh7IHN0YXR1czogMjAwLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhT2JqKSB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHsgZXJyb3I6IHsgbWVzc2FnZTogJ0Vycm9yJyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBleGFtcGxlIFBPU1QgZW5kcG9pbnRcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QudXJsLmVuZHNXaXRoKCcvZXhhbXBsZUVuZHBvaW50JykgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcUJvZHkgPSByZXF1ZXN0LmJvZHk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTU9DSyAke3JlcXVlc3QudXJsfWAsIHJlcUJvZHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcUJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IEh0dHBSZXNwb25zZSh7IHN0YXR1czogMjAwLCBib2R5OiBKU09OLnN0cmluZ2lmeShyZXFCb2R5KSB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHsgZXJyb3I6IHsgbWVzc2FnZTogJ0Vycm9yJyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwYXNzIHRocm91Z2ggYW55IHJlcXVlc3RzIG5vdCBoYW5kbGVkIGFib3ZlXHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IE1vY2tCYWNrZW5kUHJvdmlkZXIgPSB7XHJcbiAgICAvLyB1c2UgZmFrZSBiYWNrZW5kIGluIHBsYWNlIG9mIEh0dHAgc2VydmljZSBmb3IgYmFja2VuZC1sZXNzIGRldmVsb3BtZW50XHJcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgIHVzZUNsYXNzOiBNb2NrQmFja2VuZEludGVyY2VwdG9yLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC1lczYnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vLyB5b3UgY2FuIGdldCBtb3JlIHZhbGlkYXRvcnMgZnJvbSBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS95dXlhbmcwNDEwNjAxMjAvbmcyLXZhbGlkYXRpb25cclxuXHJcblxyXG4vLyB0aGlzIHZhbGlkYXRvciBtdXN0IGJlIGFwcGxpZWQgdG8gYSBGb3JtR3JvdXAgYmVjYXVzZSBpdCBpcyBjb21wYXJpbmcgMiBjb250cm9sc1xyXG5mdW5jdGlvbiBkYXRlUmFuZ2VWYWxpZGF0b3Ioc3RhcnREYXRlQ29udHJvbFN0cmluZzogc3RyaW5nLCBlbmREYXRlQ29udHJvbFN0cmluZzogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcclxuICAgICAgICBsZXQgc3RhcnREYXRlQ29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW3N0YXJ0RGF0ZUNvbnRyb2xTdHJpbmddO1xyXG4gICAgICAgIGxldCBlbmREYXRlQ29udHJvbCA9IGdyb3VwLmNvbnRyb2xzW2VuZERhdGVDb250cm9sU3RyaW5nXTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PiBEYXRlUmFuZ2VWYWxpZGF0b3IoJHtzdGFydERhdGVDb250cm9sU3RyaW5nfSwgJHtlbmREYXRlQ29udHJvbFN0cmluZ30pOiBmcm9tLnZhbHVlID0gJHtzdGFydERhdGVDb250cm9sLnZhbHVlfSwgdG8udmFsdWUgPSAke2VuZERhdGVDb250cm9sLnZhbHVlfWApO1xyXG4gICAgICAgIGlmIChtb21lbnQoc3RhcnREYXRlQ29udHJvbC52YWx1ZSkuaXNBZnRlcihlbmREYXRlQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2RhdGVSYW5nZSc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRlTGVzc1RoYW5WYWxpZGF0b3IoY29tcGFyZUNvbnRyb2xTdHJpbmc6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfCBudWxsID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wucGFyZW50KSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBjb21wYXJlRGF0ZUNvbnRyb2wgPSBjb250cm9sLnBhcmVudC5jb250cm9sc1tjb21wYXJlQ29udHJvbFN0cmluZ107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYD4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PiBEYXRlTGVzc1RoYW5WYWxpZGF0b3IoJHtjb21wYXJlQ29udHJvbFN0cmluZ30pOiBmcm9tLnZhbHVlID0gJHt0aGlzRGF0ZUNvbnRyb2wudmFsdWV9LCB0by52YWx1ZSA9ICR7Y29tcGFyZURhdGVDb250cm9sLnZhbHVlfWApO1xyXG4gICAgICAgIGlmIChtb21lbnQoY29udHJvbC52YWx1ZSkuaXNBZnRlcihjb21wYXJlRGF0ZUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdkYXRlTGVzc1RoYW4nOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZUdyZWF0ZXJUaGFuVmFsaWRhdG9yKGNvbXBhcmVDb250cm9sU3RyaW5nOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnBhcmVudCkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgY29tcGFyZURhdGVDb250cm9sID0gY29udHJvbC5wYXJlbnQuY29udHJvbHNbY29tcGFyZUNvbnRyb2xTdHJpbmddO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGA+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4gRGF0ZUdyZWF0ZXJUaGFuVmFsaWRhdG9yKCR7Y29tcGFyZUNvbnRyb2xTdHJpbmd9KTogZnJvbS52YWx1ZSA9ICR7dGhpc0RhdGVDb250cm9sLnZhbHVlfSwgdG8udmFsdWUgPSAke2NvbXBhcmVEYXRlQ29udHJvbC52YWx1ZX1gKTtcclxuICAgICAgICBpZiAobW9tZW50KGNvbnRyb2wudmFsdWUpLmlzQmVmb3JlKGNvbXBhcmVEYXRlQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2RhdGVHcmVhdGVyVGhhbic6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXhOdW1MaW5lc1ZhbGlkYXRvcihtYXhMaW5lczogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmIChfLmlzTmlsKG1heExpbmVzKSB8fCAhXy5pc05pbChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG51bUxpbmVzID0gKGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nKS5zcGxpdCgnXFxuJykubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdtYXhOdW1MaW5lcyc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsdChsdFBhcmFtOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0+IHtcclxuICAgICAgICBpZiAoXy5pc05pbChsdFBhcmFtKSB8fCAhXy5pc05pbChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2OiBudW1iZXIgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICByZXR1cm4gdiA8ICtsdFBhcmFtID8gbnVsbCA6IHsgbHQ6IHRydWUgfTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21WYWxpZGF0b3JzID0ge1xyXG4gICAgZGF0ZVJhbmdlVmFsaWRhdG9yLFxyXG4gICAgZGF0ZUxlc3NUaGFuVmFsaWRhdG9yLFxyXG4gICAgZGF0ZUdyZWF0ZXJUaGFuVmFsaWRhdG9yLFxyXG4gICAgbWF4TnVtTGluZXNWYWxpZGF0b3IsXHJcbiAgICBsdFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZGVjb3JhdGUiLCJvYnNlcnZhYmxlVGhyb3dFcnJvciIsImh0dHBPcHRpb25zIiwiXy5pc05pbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlJQSxNQUFhLGNBQWM7OztZQXZGMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxjQUFjO29CQUNkLG9CQUFvQjs7b0JBRXBCLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixrQkFBa0I7O29CQUVsQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixhQUFhOztvQkFFYixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsY0FBYzs7b0JBRWQsZUFBZTtvQkFDZixnQkFBZ0I7Ozs7OztvQkFNaEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtpQkFVakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGNBQWM7O29CQUVkLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixrQkFBa0I7O29CQUVsQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixhQUFhOztvQkFFYixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsY0FBYzs7b0JBRWQsZUFBZTtvQkFDZixnQkFBZ0I7Ozs7OztvQkFNaEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtpQkFVakI7YUFDRjs7Ozs7Ozs7Ozs7QUN2SEQsTUFBYSxjQUFjOzs7Ozs7O0lBSXpCLFNBQVMsQ0FBQyxPQUFzQyxFQUFFLGFBQXFCLEtBQUssRUFBRSxXQUFvQixJQUFJO1FBQ3BHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUIsT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hFO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1RTtLQUNGOztBQVpNLHFCQUFNLEdBQVcscUJBQXFCLENBQUM7O1lBTC9DLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZUFBZTthQUN0Qjs7TUFxQlksWUFBWTs7Ozs7SUFDdkIsU0FBUyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUMvQjs7O1lBWkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2Q7O0FBZ0JELE1BQWEsV0FBVzs7Ozs7O0lBRXRCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUk7UUFFekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEtBQWE7Z0JBQ3pELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM3QyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxLQUFhO2dCQUN6RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDN0MsQ0FBQyxDQUFDO1NBQ0o7S0FFRjs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDcEMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDWDthQUFNLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM1QyxPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7OztZQTNCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7YUFDaEI7OztBQWdDRCxNQUFhLGFBQWE7Ozs7SUFDeEIsWUFBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztLQUFJOzs7Ozs7SUFFOUMsU0FBUyxDQUFDLElBQVksRUFBRSxXQUFXO1FBQ2pDLElBQUksV0FBVyxJQUFJLElBQUksRUFBRTs7Z0JBQ25CLENBQUMsR0FBRyxXQUFXO1lBRW5CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7O2dCQUVHLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLE1BQU0sQ0FBQztZQUN0RSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O2tCQUNQLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1lBRXZDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxLQUFLLGtDQUFrQyxLQUFLLFNBQVMsQ0FBQyxDQUNuRixDQUFDO1NBQ0g7YUFDSTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjs7O1lBL0JGLElBQUksU0FBQztnQkFDSCxJQUFJLEVBQUUsV0FBVzthQUNuQjs7OztZQTFFUSxZQUFZOzs7OztBQWdIckIsTUFBYSxjQUFjOzs7Ozs7O0lBR3pCLFNBQVMsQ0FBQyxLQUFZLEVBQUUsWUFBaUI7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3ZDLENBQUM7U0FDSDthQUNJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9FLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ2pELENBQUM7U0FDSDtLQUNGOzs7WUF6QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2Y7OztBQTJCRCxNQUFhLFdBQVcsR0FBRztJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0NBQ2Y7Ozs7OztNQ3JKWSxVQUFVOzs7O0lBWXJCLFlBQVksSUFBVTtRQVhwQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUl2QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDbkM7S0FDRjs7OztJQUVELFNBQVM7UUFDUCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjtDQUNGO0FBeEJHQTtJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQzs7c0NBQ2Y7Ozs7OztNQ0tQLFVBQVU7SUFLckI7UUFIQSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBR3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxXQUFXLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsR0FBVTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDckI7Ozs7OztJQUdELEtBQUssQ0FBQyxHQUFHLEdBQVU7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLEdBQVU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLEdBQVU7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCOzs7OztJQUVELEtBQUssQ0FBQyxHQUFHLEdBQVU7UUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCOzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBa0IsRUFBRSxHQUFXO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxlQUFlLFVBQVUsbUNBQW1DLENBQUMsQ0FBQztLQUN6Rjs7O1lBM0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7Ozs7Ozs7O0FDSkQsTUFBYSxJQUFJOzs7Ozs7O0lBS2YsT0FBTyxPQUFPOztZQUNSLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFDeEIsSUFBSSxHQUFHLGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDOztnQkFDcEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDekMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyRSxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7Ozs7O0lBU0QsT0FBTyxPQUFPLENBQUMsR0FBRyxRQUFrQjs7WUFDOUIsV0FBVyxHQUFHLEVBQUU7O1FBR3BCLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hELEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DOztRQUdELElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNyQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDcEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFM0IsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDcEU7WUFFRCxJQUFJLFNBQVMsS0FBSyxFQUFFLEVBQUU7Z0JBQUUsU0FBUzthQUFFO1lBRW5DLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBRVQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUUzQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDN0M7aUJBQU07O2dCQUVMLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5QztZQUVELFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FFN0I7O1lBRUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7UUFJL0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7OztZQUd2QyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0RSxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7Ozs7Ozs7SUFPRCxPQUFPLGVBQWU7O1lBQ2hCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTztTQUFFOzs7OztRQUN6QixTQUFTLFNBQVMsQ0FBQyxNQUFNOztnQkFDbkIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHOztnQkFFaEIsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFOztvQkFFbEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNOzs7d0JBRUQsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUM5RCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ25CO2FBQ0YsQ0FBQztTQUNIOztZQUNHLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7Ozs7Ozs7O0lBT0QsYUFBYSxDQUFDLFFBQVE7Ozs7WUFHaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDOztZQUM3QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRztRQUNqRSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDWCxPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7S0FDRjs7Ozs7OztJQUVELFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbEIsT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDN0M7Ozs7O0lBRUQsY0FBYyxDQUFDLENBQUM7O1lBQ1YsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDM0M7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkY7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQUc7OztZQUVOLGNBQWMsR0FBRyxrQ0FBa0M7UUFDdkQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQzs7WUFFQyxNQUFNLEdBQUcsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsRSxPQUFPLE1BQU0sR0FBRztZQUNkLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQzNCLEdBQUcsSUFBSSxDQUFDO0tBQ1Y7Q0FDRjs7Ozs7O0FDMUpEO01BUU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ2pFO0FBS0QsTUFBYSxpQkFBaUI7Ozs7O0lBSTVCLFlBQW9CLElBQWdCLEVBQVUsVUFBc0I7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGcEUsZUFBVSxHQUFXLEVBQUUsQ0FBQztLQUVpRDs7Ozs7SUFFekUsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7Ozs7Ozs7SUFNRCxjQUFjLENBQUMsRUFBVTtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDOztjQUN0RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxFQUFFLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ3ZFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNsRCxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGdCQUFnQixDQUFDLFVBQXNCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7O2NBQ3hELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUVqRSxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGdCQUFnQixDQUFDLFVBQXNCO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7O2NBQ3hELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxHQUFHLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDN0UsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNoRSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2hDLENBQUM7S0FDSDs7O1lBckRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJRLFVBQVU7WUFHVixVQUFVOzs7Ozs7OztBQ0puQixNQVdhLG1CQUFtQjs7Ozs7O0lBUzlCLFlBQW9CLFdBQXdCLEVBQ2xDLGlCQUFvQyxFQUNwQyxVQUFzQjtRQUZaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVR2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLG1CQUFjLEdBQVcsRUFBRSxDQUFDOztRQVduQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakQsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3ZDLGVBQWUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUM5QyxDQUFDLENBQUM7S0FDSjs7OztJQUVELFFBQVE7O1FBRU4sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRTtnQkFDdEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM1QztTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztZQUVqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVztnQkFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRixJQUFJLENBQUMscUJBQXFCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxZQUFZLENBQUMsQ0FBQzs7Z0JBR2hHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs7d0JBQ3pELGFBQWEsR0FBRyxJQUFJLFVBQVUsRUFBRTtvQkFDcEMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN2QyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7b0JBQ25ELGFBQWEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUNoQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzFDO2dCQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRTVGLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7O3dCQUNyRSxhQUFhLEdBQUcsSUFBSSxVQUFVLEVBQUU7b0JBQ3BDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDdkMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUNuRCxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztvQkFDdEMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pHLENBQUMsQ0FBQztTQUNKO2FBQ0k7WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7U0FDMUY7S0FDRjs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7O1lBRS9ELFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzs7WUFDM0QsZUFBZSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFFM0UsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7O1lBR3BELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRztvQkFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQy9CLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUc7b0JBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUMvQixDQUFDLENBQUM7YUFDSjtTQUNGO1FBRUQsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHO29CQUNsRixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUc7b0JBQ2xGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3JDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7S0FDRjs7O1lBeEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixzZUFBMEM7O2FBRTNDOzs7O1lBVG1CLFdBQVc7WUFFdEIsaUJBQWlCO1lBQ2pCLFVBQVU7Ozt1QkFTaEIsS0FBSzs2QkFDTCxLQUFLOzs7Ozs7O0FDZFIsTUFPYSxxQkFBcUI7SUFFaEMsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDZEQUE4Qzs7YUFFL0M7Ozs7Ozs7OztBQ05ELE1BVWUsaUJBQWlCOzs7O0lBRTVCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtLQUM1Qjs7OztJQUVOLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxhQUFhOztZQUNQLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBQ3JELElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDckU7YUFDSTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDckU7S0FDRjs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwrVUFBd0M7Z0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVBRLFVBQVU7Ozs7Ozs7QUNEbkIsTUFRYSxjQUFjO0lBSXpCO1FBRlUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0FFN0I7Ozs7SUFFakIsUUFBUTtLQUNQOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHdXQUFxQzs7YUFFdEM7Ozs7O29CQUdFLEtBQUs7dUJBQ0wsTUFBTTs7Ozs7OztBQ1ZULE1BQWEscUJBQXFCOzs7O0lBSTlCLFlBQVksSUFBUztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ2pDO0NBQ0o7TUFFWSxzQkFBc0I7Ozs7SUFNL0IsWUFBWSxJQUFTO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUMzQjtDQUNKOzs7Ozs7QUN0QkQsTUFZYSxxQkFBcUI7Ozs7OztJQWtCaEMsWUFBb0IsSUFBZ0IsRUFDMUIsTUFBYyxFQUNkLFVBQXNCO1FBRlosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWxCeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUc7WUFDckIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCLENBQUM7U0FDSCxDQUFDO1FBRU0saUJBQVksR0FBVyxVQUFVLENBQUM7UUFFbEMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBVyxFQUFFLENBQUM7S0FLN0I7Ozs7OztJQUVELElBQUksQ0FBQyxVQUFrQixFQUFFLFVBQVUsR0FBRyxRQUFRO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwRjs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDNUM7Ozs7SUFFRCw4QkFBOEI7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsc0JBQXNCOztZQUNoQixRQUFRLEdBQVcsRUFBRTs7WUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtRQUU1QyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUNoRCxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM5QjtRQUVELE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7O0lBRUQseUJBQXlCOztZQUNuQixXQUFXLEdBQVcsRUFBRTs7WUFDeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtRQUU1QyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQzthQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNuQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUNwQztRQUVELE9BQU8sV0FBVyxDQUFDO0tBQ3BCOzs7O0lBRUQsbUJBQW1COztZQUNiLEtBQUssR0FBVyxFQUFFOztZQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1FBRTVDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQzdDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7OztJQUVELHNCQUFzQjs7WUFDaEIsUUFBYTtRQUNqQixRQUFRLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELG9CQUFvQixDQUFDLFFBQWE7UUFDaEMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztLQUN6Qzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDbkM7Ozs7SUFHRCxhQUFhOztjQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUU5RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFDeEQsR0FBRyxDQUFDLEdBQUcsdUJBQUksR0FBRyxDQUFDLE9BQU8sRUFBWSxDQUFDLENBQ3BDLENBQUM7S0FDSDs7Ozs7O0lBRUQsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFjOztjQUN0QixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDOztZQUMvRCxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztRQUUvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF5QixHQUFHLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN6RixJQUFJLENBQ0gsR0FBRyxDQUNELFFBQVE7WUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O2dCQUM3RSxzQkFBc0IsR0FBRyxJQUFLLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztZQUNsRSxJQUFJLHNCQUFzQixDQUFDLGFBQWEsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3ZDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtvQkFDM0IsV0FBVyxFQUFFLHNCQUFzQixDQUFDLFdBQVc7b0JBQy9DLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxLQUFLO2lCQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1NBQ0YsRUFDRCxLQUFLO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2hFLENBQUMsQ0FDUCxDQUFDO0tBQ0g7Ozs7SUFFRCxNQUFNO1FBQ0osWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNqQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7OztZQWxKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxVQUFVO1lBQ1YsTUFBTTtZQUdOLFVBQVU7Ozs7Ozs7O0FDTG5CLE1BY2EsY0FBYzs7Ozs7Ozs7SUFpQnpCLFlBQW9CLFdBQXdCLEVBQ2xDLE1BQWMsRUFDZCxLQUFxQixFQUNyQixVQUFzQixFQUN0QixxQkFBNEM7UUFKbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQW5CN0MsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUd0QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXhCLG1CQUFjLEdBQThCO1lBQ2pELFlBQVksRUFBRSwrQkFBK0I7U0FDOUMsQ0FBQztRQUNLLGVBQVUsR0FBYSxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQzNDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7S0FPakM7Ozs7SUFFRCxRQUFROztRQUVOLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDOUIsTUFBTTtZQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUM1QyxDQUFDLENBQUM7O1lBRUMsU0FBUyxHQUFHLElBQUk7UUFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRTthQUN6QyxTQUFTLENBQUMsQ0FBQyxRQUFhO1lBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUNELFNBQVMsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7Ozs7SUFFRCxrQkFBa0I7O1FBRWhCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFOzs7O2lCQUlkLENBQUM7WUFDRixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Ozs7aUJBSWQsQ0FBQztZQUNGLE1BQU0sRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxFQUFFO29CQUN0RCxVQUFVLENBQUMsUUFBUTtpQkFDcEIsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztZQUVsQixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7O1lBQ2pELFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztRQUVyRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1NBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hDLFNBQVMsQ0FDUixHQUFHOztnQkFDRyxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztZQUM1RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0M7U0FDRixFQUNELEdBQUc7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekIsQ0FDRixDQUFDO0tBQ0w7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNsQztLQUNGOzs7WUF4R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixpbERBQXFDOzthQUV0Qzs7OztZQVhtQixXQUFXO1lBQ3RCLE1BQU07WUFBRSxjQUFjO1lBRXRCLFVBQVU7WUFFVixxQkFBcUI7OztzQkFVM0IsS0FBSzt1QkFDTCxTQUFTLFNBQUMsVUFBVTs7Ozs7OztBQ2pCdkIsTUFNYSxjQUFjO0lBRXpCLGlCQUFpQjs7O1lBTmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7Ozs7Ozs7O0FDSEQsTUFBYSxVQUFVOzs7O0lBMkJuQixZQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQzFELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXhDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUMvQztDQUNKO01BRVksYUFBYTs7OztJQVF0QixZQUFZLElBQVU7UUFQdEIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDMUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUU7S0FDMUQ7Q0FDSjtNQUVZLGFBQWE7Ozs7SUFRdEIsWUFBWSxJQUFVO1FBQ2xCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDOUQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDakQ7S0FDSjtDQUNKOzs7Ozs7QUM5RkQsTUFBYSxhQUFhOzs7O0lBT3RCLFlBQVksSUFBVTtRQUNsQixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7S0FDSjs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3JDO0NBQ0o7Ozs7OztBQ25CRCxNQUFhLE1BQU07Ozs7SUFhZixZQUFZLElBQVU7UUFadEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFLbkIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ25DO2FBQ0k7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztTQUM3QjtLQUNKO0NBQ0o7Ozs7OztBQy9CRDtBQUtBLE1BQWEsT0FBTzs7OztJQUloQixZQUFZLElBQWU7UUFDdkIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0o7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQWM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkI7Ozs7SUFFRCxRQUFRO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9CO0NBQ0o7TUFFWSxNQUFNOzs7O0lBb0JmLFlBQVksSUFBUztRQW5CckIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFPNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV2RyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3ZDO0NBQ0o7TUFFWSxhQUFhOzs7O0lBV3RCLFlBQVksSUFBUztRQVZyQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFLckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0tBQzNFO0NBQ0o7TUFFWSxLQUFLOzs7O0lBU2QsWUFBWSxJQUFVO1FBUnRCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQU9qQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM5QztDQUNKOztBQUdELE1BQWEsVUFBVTs7OztJQVVuQixZQUFZLE1BQWM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDOUU7Q0FDSjs7Ozs7O0FDaElEOzs7O0FBZ0JBLE1BQWEsWUFBWTtJQUh6QjtRQUlVLFVBQUssR0FBOEIsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFDbEUsb0JBQWUsR0FBVyxNQUFNLENBQUM7S0E0RDNDOzs7Ozs7OztJQXZEQyxHQUFHLENBQUMsR0FBVyxFQUFFLFFBQTBCLEVBQUUsTUFBZTtRQUUxRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMzRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMvQjtRQUVELElBQUksUUFBUSxJQUFJLFFBQVEsWUFBWSxVQUFVLEVBQUU7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDMUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsdUdBQXdHLENBQUMsQ0FBQyxDQUFDO1NBQy9LO2FBQU07WUFDTCxPQUFPQyxVQUFvQixDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDeEU7S0FDRjs7Ozs7Ozs7O0lBTUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsU0FBaUIsSUFBSSxDQUFDLGVBQWU7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDcEU7Ozs7OztJQUtELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7Ozs7O0lBS0QsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7Ozs7Ozs7SUFLTyxtQkFBbUIsQ0FBQyxHQUFXO1FBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjs7O1lBaEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7QUNmRDtNQVlNQyxhQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakU7QUFLRCxNQUFhLGFBQWE7Ozs7OztJQTZCeEIsWUFBb0IsSUFBZ0IsRUFBVSxVQUFzQixFQUMxRCxZQUEwQjtRQURoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMxRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTVCcEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLDhCQUF5QixHQUFHLGlDQUFpQyxDQUFDO1FBQzlELDZCQUF3QixHQUFHLCtCQUErQixDQUFDO1FBQzNELDRCQUF1QixHQUFHLDhCQUE4QixDQUFDO1FBQ3pELDRCQUF1QixHQUFHLCtCQUErQixDQUFDO1FBQzFELHlCQUFvQixHQUFHLDRCQUE0QixDQUFDO1FBQ3BELHNCQUFpQixHQUFHLHlCQUF5QixDQUFDO1FBQzlDLGlCQUFZLEdBQUcsZ0NBQWdDLENBQUM7UUFDaEQsMEJBQXFCLEdBQUcsNEJBQTRCLENBQUM7UUFDckQsMEJBQXFCLEdBQUcsNkJBQTZCLENBQUM7UUFFdEQsa0NBQTZCLEdBQUcsb0NBQW9DLENBQUM7UUFDckUsbUNBQThCLEdBQUcsaUJBQWlCLENBQUM7UUFFbkQsa0JBQWEsR0FBRyxVQUFVLENBQUM7UUFDM0IsaUNBQTRCLEdBQUcsa0NBQWtDLENBQUM7UUFDbEUsZ0NBQTJCLEdBQUcsa0NBQWtDLENBQUM7UUFFakUsb0JBQWUsR0FBRyw2QkFBNkIsQ0FBQztRQUNoRCwyQkFBc0IsR0FBRyxtQ0FBbUMsQ0FBQztRQUM3RCx5QkFBb0IsR0FBRyw4QkFBOEIsQ0FBQztRQUN0RCxrQkFBYSxHQUFHLDJCQUEyQixDQUFDO1FBRTVDLHlCQUFvQixHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBR0E7Ozs7O0lBRXpDLElBQUksQ0FBQyxVQUFrQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JELHFCQUFxQixDQUFDLFdBQW9CLElBQUk7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzs7Y0FDekQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFFeEUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDMUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUM1RSxHQUFHLENBQUMsQ0FBQyxHQUFHO1lBQ04sT0FBTyxvQkFBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQWMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQzlDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUN6RCxDQUFDLENBQUM7U0FDSixDQUFDLENBQ0gsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCxvQkFBb0IsQ0FBQyxXQUFvQixJQUFJO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7O2NBQ3hELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsOEJBQThCLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9COzs7WUFHRyxvQkFBb0IsR0FBRyxDQUFDLEVBQWlCLEVBQUUsRUFBaUI7WUFDOUQsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDdkY7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDdEYsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FDaEYsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCx1Q0FBdUMsQ0FBQyxlQUF1QjtRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDOztjQUMzRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGtEQUFrRCxFQUFFLGVBQWUsQ0FBQztRQUU5RyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzNFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELHFCQUFxQixDQUFDLFdBQW9CLElBQUk7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzs7Y0FDekQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFFdkUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9COzs7WUFHRyxvQkFBb0IsR0FBRyxDQUFDLEVBQWlCLEVBQUUsRUFBaUI7WUFDOUQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDdEYsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FDaEYsQ0FBQztLQUNIOzs7Ozs7Ozs7O0lBTUQsK0JBQStCLENBQUMsY0FBc0IsRUFBRSxXQUFvQixJQUFJO1FBQzlFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7O2NBQ25FLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsd0NBQXdDLEVBQUUsY0FBYyxDQUFDO1FBRW5HLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN0RixHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ3pFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLFdBQW9CLElBQUk7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzs7Y0FDdEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFFcEUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDMUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUN4RSxHQUFHLENBQUMsR0FBRztZQUNMLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUNILENBQUM7S0FDSDs7Ozs7Ozs7O0lBTUQsZUFBZSxDQUFDLFdBQW9CLElBQUk7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7Y0FDbkQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFakUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9COzs7WUFHRyxjQUFjLEdBQUcsQ0FBQyxFQUFXLEVBQUUsRUFBVztZQUM1QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hGLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDcEUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDbEYsQ0FBQztLQUNIOzs7Ozs7Ozs7O0lBTUQsV0FBVyxDQUFDLEtBQVksRUFBRSxTQUFtQjs7Y0FDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFHN0YsSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFLFNBQVM7U0FDbkI7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUM1RCxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLFdBQW9CLElBQUk7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzs7Y0FDdEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFFckUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9COzs7WUFHRyxZQUFZLEdBQUcsQ0FBQyxFQUFTLEVBQUUsRUFBUztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUM3RTtRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzlFLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDbEUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDOUUsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCxTQUFTLENBQUMsRUFBVTs7Y0FDWixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDOUQsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN4QixDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGFBQWEsQ0FBQyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7O2NBQ2pELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDO1FBRXRFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDOUQsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN4QixDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7O2NBQzdDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUc3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDbEQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQzVFLENBQUM7S0FDSDs7Ozs7Ozs7O0lBTUQsWUFBWSxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7Y0FDaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFHakYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUM1RSxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGdCQUFnQixDQUFDLGFBQTRCO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDaEQ7Ozs7Ozs7OztJQU1ELG1CQUFtQixDQUFDLGFBQTRCO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7O2NBQ3ZELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1FBRzVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDhCQUE4QixhQUFhLENBQUMsY0FBYyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDckcsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCx5QkFBeUIsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7O2NBQzdELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLDZCQUE2QixFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDOzs7WUFHcEcsb0JBQW9CLEdBQUcsQ0FBQyxFQUFpQixFQUFFLEVBQWlCO1lBQzlELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDcEYsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQ2hGLENBQUM7S0FDSDs7Ozs7Ozs7OztJQU1ELDJCQUEyQixDQUFDLE9BQWlCLEVBQUUsY0FBd0IsSUFBSSxDQUFDLG9CQUFvQjtRQUM5RixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDOztjQUMvRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyw4QkFBOEIsQ0FBQzs7WUFFMUUsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCOzs7WUFHRyxvQkFBb0IsR0FBRyxDQUFDLEVBQWlCLEVBQUUsRUFBaUI7WUFDOUQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBRSxXQUFXLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDNUQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUN6RixHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FDaEYsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCxjQUFjLENBQUMsU0FBbUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7Y0FDaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDOzs7O2NBSXpELGFBQWEsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztZQUNoRSxZQUFZLHFCQUFFLE1BQU0sRUFBVTtZQUM5QixJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLFNBQVM7YUFDbkI7U0FDRjs7UUFJRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLGFBQXVCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O2NBQ3BELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDOztjQUVoRSxhQUFhLEdBQUc7WUFDcEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7WUFDaEUsWUFBWSxxQkFBRSxNQUFNLEVBQVU7WUFDOUIsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxhQUFhO2FBQ3ZCO1NBQ0Y7UUFHRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUMzRSxDQUFDO0tBQ0g7Ozs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLGVBQWdDO1FBQ2pELElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEQsT0FBTyxFQUFFLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUM1RTs7WUFFRyxXQUFXLEdBQXlCLEVBQUU7UUFDMUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztLQUNqQzs7Ozs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsYUFBNEI7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzs7Y0FDbEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUM7UUFHM0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxHQUFHLEVBQUUsYUFBYSxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDL0UsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCxxQkFBcUIsQ0FBQyxlQUFnQztRQUNwRCxJQUFJLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDL0U7O1lBRUcsY0FBYyxHQUF5QixFQUFFO1FBQzdDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xELENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7OztJQU1ELG1CQUFtQixDQUFDLGFBQTRCO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7O2NBQ3JELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUMsbUJBQW1CLENBQUM7Ozs7Y0FJekksYUFBYSxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hFLFlBQVkscUJBQUUsTUFBTSxFQUFVO1NBQy9CO1FBR0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FDNUUsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFNRCxZQUFZLENBQUMsUUFBa0I7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7Y0FDOUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDOzs7O2NBSXZELGFBQWEsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztZQUNoRSxZQUFZLHFCQUFFLE1BQU0sRUFBVTtZQUM5QixJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FFRjtRQUdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQ3JFLENBQUM7S0FDSDs7Ozs7OztJQUdPLFlBQVksQ0FBQyxHQUFROztRQUUzQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQzVDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxHQUFHLFlBQVksUUFBUSxFQUFFO1lBQzNCLE9BQU9ELFVBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPQSxVQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7O2NBQzlDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsb0NBQW9DLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0csT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLEVBQUVDLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDaEIsQ0FBQztLQUNIOzs7WUExZ0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWpCUSxVQUFVO1lBS1YsVUFBVTtZQUNWLFlBQVk7Ozs7Ozs7O0FDUnJCO01BU00sY0FBYyxHQUFrQixJQUFJLGFBQWEsQ0FBQztJQUN0RCxJQUFJLEVBQUUsRUFBRTtJQUNSLFdBQVcsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFTRixNQUFhLHVCQUF1Qjs7Ozs7O0lBd0JsQyxZQUM2QixTQUFvQixFQUN2QyxhQUE0QixFQUM1QixVQUFzQjtRQUZILGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXpCdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFTekIsYUFBUSxHQUFvQixFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFrQixjQUFjLENBQUM7UUFDL0MsbUJBQWMsR0FBa0IsY0FBYyxDQUFDO1FBQy9DLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBV2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQUU7S0FDdkU7Ozs7OztJQVhELFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Ozs7O0lBQzNELGdCQUFnQixDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFOzs7OztJQUM1QyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRTs7OztJQVc5QyxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FDOUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFDOUIsd0NBQXdDLENBQ3pDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksU0FBUyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxRQUFROztjQUNBLFNBQVMsR0FBRyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixTQUFTLENBQUMsQ0FBQyxJQUFJOztnQkFDVCxRQUFRLEdBQUcsT0FBTyxJQUFJO1lBQzFCLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMxRSxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsU0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLE9BQU8sS0FBSyxFQUFFLENBQUM7YUFDaEI7aUJBQ0k7Z0JBQ0gsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdFO1NBQ0osQ0FBQyxDQUFDO2FBQ0YsU0FBUyxDQUFDLENBQUMsTUFBTTtZQUNoQixTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM5QixTQUFTLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBYSxDQUFDO2dCQUN0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFO2FBQ3JCLENBQUMsQ0FBQztTQUNKO2FBQ0k7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUN0Qzs7UUFHRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFMUMsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQztnQkFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQy9CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQXNCO1FBQ3BDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDekIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO2FBQ0k7WUFDSCxPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7Ozs7OztJQUdELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDdEI7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3Qzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ2pGOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFxQjs7WUFDeEIsS0FBSyxHQUFXLEVBQUU7UUFFdEIsS0FBSyxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUQsS0FBSyxJQUFJLGNBQWMsSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEYsS0FBSyxJQUFJLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVwRixPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBcUIsRUFBRSxVQUFrQjs7WUFDakQsTUFBTSxHQUFXLEVBQUU7O1lBQ25CLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7UUFHN0IsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQzdCOzs7Ozs7UUFFRCxTQUFTLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLGNBQWM7O2dCQUNwRCxLQUFLLEdBQUcsSUFBSTtZQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9FLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ2QsTUFBTTtpQkFDUDthQUNGO1lBRUQsT0FBTyxLQUFLLENBQUM7U0FDZDs7O1lBR0csU0FBUyxHQUFXLEVBQUU7O1lBQ3RCLFVBQVUsR0FBWSxJQUFJO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFFekIsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLFNBQVMsSUFBSSxJQUFJLENBQUM7aUJBQ25CO2dCQUNELFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUM3QixVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxTQUFTLEVBQUU7WUFDYixNQUFNLElBQUksSUFBSSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDbEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7WUFoTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG1qREFBK0M7Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQW5CZ0MsU0FBUyx1QkE2Q3JDLFFBQVEsWUFBSSxJQUFJO1lBekNaLGFBQWE7WUFDYixVQUFVOzs7b0JBaUJoQixLQUFLO21CQUNMLEtBQUs7aUJBQ0wsS0FBSzs7Ozs7OztNQ1JLLG9CQUFvQjs7Ozs7O0lBaUMvQixZQUM2QixTQUFvQixFQUN2QyxVQUFzQjtRQURILGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7UUFoQ3ZCLFVBQUssR0FBVyxFQUFFLENBQUM7O1FBTW5CLG9CQUFlLEdBQVksSUFBSSxDQUFDOztRQUVoQyxZQUFPLEdBQVksSUFBSSxDQUFDOztRQUV4QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUF3Qm5DLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0tBQ0Y7Ozs7Ozs7SUFmSCxVQUFVLENBQUMsS0FBOEI7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7S0FDMUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUU7Ozs7O0lBQzVDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFOzs7O0lBWTlDLFFBQVEsTUFBSzs7Ozs7OztJQUliLFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRTs7WUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVGO1lBQ0QsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7U0FDMUM7S0FDRjs7Ozs7O0lBR0QsVUFBVSxDQUFDLElBQTJCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7SUFHRCxTQUFTLENBQUMsSUFBMkI7O2NBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDbkM7Ozs7OztJQUlELGlDQUFpQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDaEQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEQsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7OztJQUdELGNBQWMsQ0FBQyxJQUEyQixFQUFFLElBQTZCO1FBRXZFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUc7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFRyxhQUFhLEdBQUcsT0FBTyxJQUFJLENBQUMsS0FBSzs7WUFDakMsYUFBYSxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDeEMsSUFBSSxhQUFhLEtBQUssYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFHQUFxRyxDQUFDLENBQUM7WUFDNUgsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLGFBQWEsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNsRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hDO2FBQ0k7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7Ozs7OztJQUVELGNBQWMsQ0FBQyxJQUEyQixFQUFFLElBQTZCOztZQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDdkIsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBMkIsRUFBRSxJQUE2Qjs7WUFDbkUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3ZCLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQUVELGNBQWMsQ0FBQyxJQUEyQixFQUFFLElBQTZCOztZQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFFdkIsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNsRixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7WUF2SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHNoQ0FBNEM7Z0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVJRLFNBQVMsdUJBMkNiLFFBQVEsWUFBSSxJQUFJO1lBMUNaLFVBQVU7OztvQkFXaEIsS0FBSzs4QkFJTCxLQUFLOzhCQUVMLEtBQUs7c0JBRUwsS0FBSzsrQkFFTCxLQUFLOzs7Ozs7OztBQ09SLE1BQWEsaUJBQWlCLEdBQUc7SUFDL0IsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxlQUFlLEVBQUUsY0FBYyxDQUFDLE1BQU07SUFDdEMsZUFBZSxFQUFFLFNBQVM7SUFDMUIsZUFBZSxFQUFFLFVBQVU7SUFDM0IsY0FBYyxFQUFFLFVBQVU7SUFDMUIsYUFBYSxFQUFFLFVBQVU7SUFDekIsa0JBQWtCLEVBQUUsVUFBVTtDQUMvQjtBQVlELE1BQWEsdUJBQXVCOzs7Ozs7O0lBbUVsQyxZQUFvQixFQUFnQixFQUFVLEtBQWlCLEVBQ2xDLFNBQW9CO1FBRDdCLE9BQUUsR0FBRixFQUFFLENBQWM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFsRTlCLE9BQUUsR0FBRyxvQkFBb0IsdUJBQXVCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUt2RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsa0JBQWtCLENBQUM7UUFHekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQWtCLE1BQU0sRUFBRSxDQUFDOztRQXVEckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQUU7O0tBRXJFOzs7O0lBNUVELElBQW1DLGdCQUFnQixLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs7Ozs7SUFxQjdGLFVBQVUsQ0FBQyxPQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7S0FDdEI7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUU7Ozs7O0lBQzVDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFOzs7OztJQUM5QyxnQkFBZ0IsQ0FBQyxVQUFtQixJQUFVLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEVBQUU7Ozs7OztJQUkzRSxJQUNJLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTs7Ozs7SUFDdkQsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsSUFDSSxRQUFRLEtBQWMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O0lBQ2xELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsSUFDSSxRQUFRLEtBQWMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O0lBQ2xELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlDOzs7OztJQUNELElBQUksS0FBSyxDQUFDLE1BQXFCO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDM0I7Ozs7SUFlRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2xEOzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxHQUFhO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLG9CQUFDLEtBQUssQ0FBQyxNQUFNLElBQWEsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekQ7S0FDRjs7Ozs7OztJQUtELGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0I7Ozs7QUEvRk0sOEJBQU0sR0FBRyxDQUFDLENBQUM7O1lBakJuQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsK3JCQUFnRDtnQkFFaEQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFO29CQUNsRixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7b0JBQzNGLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTtpQkFDOUQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBOUJRLFlBQVk7WUFFRCxVQUFVO1lBQ0MsU0FBUyx1QkFnR25DLFFBQVEsWUFBSSxJQUFJOzs7K0JBbkVsQixXQUFXLFNBQUMsZ0JBQWdCO2lCQUM1QixXQUFXLFNBQUMsSUFBSTswQkFDaEIsV0FBVyxTQUFDLHVCQUF1QjswQkE2Qm5DLEtBQUs7dUJBT0wsS0FBSzt1QkFPTCxLQUFLO29CQU9MLEtBQUs7Ozs7Ozs7QUM5R1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsTUFBYSxXQUFXOzs7OztJQTJEdEIsWUFBb0IsWUFBNkIsRUFDdkMsU0FBdUI7UUFEYixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTFEekIsNkJBQXdCLEdBQTRCLElBQUksR0FBRyxFQUFzQixDQUFDOzs7O1FBS2xGLDJCQUFzQixHQUF3QixJQUFJLEdBQUcsQ0FBQzs7WUFFNUQsQ0FBQyxlQUFlLEVBQUUsb0NBQW9DLENBQUM7WUFDdkQsQ0FBQyxpQkFBaUIsRUFBRSxzQ0FBc0MsQ0FBQztZQUMzRCxDQUFDLFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQztZQUMvQyxDQUFDLGFBQWEsRUFBRSxrQ0FBa0MsQ0FBQztZQUNuRCxDQUFDLGdCQUFnQixFQUFFLHFDQUFxQyxDQUFDO1lBQ3pELENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDO1lBQ3pDLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDO1lBQzNDLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDO1lBQzNDLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDO1lBQ3JELENBQUMsVUFBVSxFQUFFLCtCQUErQixDQUFDO1lBQzdDLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDO1lBQzNDLENBQUMsVUFBVSxFQUFFLCtCQUErQixDQUFDO1lBQzdDLENBQUMsV0FBVyxFQUFFLGdDQUFnQyxDQUFDO1lBQy9DLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDO1lBQ3JELENBQUMsZ0JBQWdCLEVBQUUscUNBQXFDLENBQUM7WUFDekQsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUM7WUFDckQsQ0FBQyxZQUFZLEVBQUUsaUNBQWlDLENBQUM7WUFDakQsQ0FBQyxnQkFBZ0IsRUFBRSxxQ0FBcUMsQ0FBQztTQUMxRCxDQUFDLENBQUM7O1FBR0ssd0JBQW1CLEdBQXdCLElBQUksR0FBRyxDQUFDOztZQUV6RCxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztZQUNwQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7WUFDbEMsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1lBQ2pDLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztZQUNoQyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztZQUNwQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7WUFDbEMsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO1lBQy9CLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQztZQUNsQyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztZQUNsQyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQztZQUMxQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7WUFDOUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO1lBQzlCLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztZQUM3QixDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7WUFDdkIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO1lBQzlCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztZQUM1QixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7WUFDN0IsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1lBQ2pDLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztZQUNqQyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7WUFDaEMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO1lBQzFCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQztZQUMzQixDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7WUFDMUIsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7WUFDOUIsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0tBSUY7Ozs7Ozs7SUFLRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkYsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHO2dCQUNoRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMzQyxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFLRCxpQkFBaUIsQ0FBQyxXQUFtQjs7WUFDL0IsR0FBZTtRQUNuQixJQUFJO1lBQ0YsSUFBSSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9GLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzthQUNqQztZQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3REO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixHQUFHLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7Ozs7O0lBS0Qsb0JBQW9CLENBQUMsS0FBYTtRQUNoQyxJQUFJO1lBQ0YsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hFLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDbkI7WUFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8saUJBQWlCLENBQUM7U0FDMUI7S0FDRjs7Ozs7Ozs7SUFLRCwwQkFBMEIsQ0FBQyxLQUFhO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2pFOzs7Ozs7OztJQUtELHVCQUF1QixDQUFDLEtBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ2xEOzs7Ozs7OztJQUtELDZCQUE2QixDQUFDLEtBQWE7UUFDekMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3hEOzs7Ozs7OztJQUtELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEUsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELE9BQU8sU0FBUyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztTQUN2QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxlQUFlLENBQUM7U0FDeEI7S0FDRjs7Ozs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEUsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELE9BQU8sYUFBYSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztTQUMzQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtLQUNGOzs7WUE5SkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBekJRLGVBQWU7WUFDZixZQUFZOzs7Ozs7OztBQ0ZyQixNQVlhLGtCQUFrQjs7OztJQUk3QixZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtLQUFLOzs7O0lBRWhELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3pCOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOztLQUVQOzthQUVKOzs7O1lBVFEsV0FBVzs7O29CQVlqQixLQUFLOztNQWVLLHFCQUFxQjs7OztJQUloQyxZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtLQUFLOzs7O0lBRWhELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3pCOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOztLQUVQO2FBQ0o7Ozs7WUExQlEsV0FBVzs7O29CQTZCakIsS0FBSzs7Ozs7OztBQy9CUixNQThEYSxtQkFBbUI7OztZQTNDL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCO29CQUMxRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCO2lCQUN6RDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixjQUFjO29CQUNkLHVCQUF1QjtvQkFDdkIsYUFBYTtvQkFDYixjQUFjO29CQUNkLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixjQUFjO29CQUNkLHVCQUF1QjtvQkFDdkIsYUFBYTtvQkFDYixjQUFjO29CQUNkLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLFlBQVk7b0JBQ1oscUJBQXFCO2lCQUN0QjtnQkFDRCxlQUFlLEVBQUUsRUFDaEI7YUFDRjs7Ozs7OztNQy9DWSxZQUFZO0lBZXZCLGlCQUFpQjs7Ozs7SUFWakIsSUFBWSxHQUFHO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7SUFJRCxJQUFJLENBQUMsVUFBa0I7UUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsR0FBRyxFQUFFLFVBQVU7WUFDZixhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBYTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxvREFBb0QsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO2lCQUN6SDthQUNGO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxDQUFDLENBQVE7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxvREFBb0QsQ0FBQyxDQUFDO2lCQUN6RjthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7UUFHbEIsS0FBSyxFQUFFLEVBQ1AsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7U0FDaEIsQ0FBQztLQUNIOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7OztZQXRERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNiRDtNQVNNQSxhQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakU7QUFLRCxNQUFhLFVBQVU7Ozs7O0lBSXJCLFlBQW9CLElBQWdCLEVBQzFCLFVBQXNCO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSHhCLGVBQVUsR0FBVyxFQUFFLENBQUM7S0FJL0I7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7Ozs7OztJQUtELE9BQU8sQ0FBQyxTQUFpQjtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztjQUN0QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztRQUUvRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsRUFDcEUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDaEIsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFLRCxhQUFhLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2NBQzVDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxHQUFHLE1BQU0sR0FBRyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBRTlGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxFQUNoRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7Ozs7Ozs7O0lBS0QsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2NBQ3pDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsK0JBQStCLEdBQUcsU0FBUyxDQUFDO1FBRXRGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxFQUNuRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7Ozs7Ozs7Ozs7SUFNRCxrQkFBa0IsQ0FBQyxPQUFlLEVBQUUsTUFBYztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztjQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQzFELEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7O1lBbkVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWRRLFVBQVU7WUFLVixVQUFVOzs7Ozs7OztBQ05uQjtNQVFNQSxhQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakU7QUFLRCxNQUFhLGdCQUFnQjs7Ozs7SUFJM0IsWUFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztLQUkvQjs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBa0I7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7Ozs7O0lBTUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Y0FDekMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsR0FBRyxNQUFNLENBQUM7UUFFdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDL0MsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLEVBQ3JFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJRLFVBQVU7WUFLVixVQUFVOzs7Ozs7OztBQ05uQixNQUVhLGVBQWU7Ozs7SUFvQnhCLFlBQVksSUFBVTtRQW5CdEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFZdkIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsYUFBYSxHQUFHQyxLQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUdBLEtBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBR0EsS0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHQSxLQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUdBLEtBQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBR0EsS0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHQSxLQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFHaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFHakQsSUFBSSxDQUFDLE1BQU0sR0FBR0EsS0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHQSxLQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUdBLEtBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDckUsSUFBSSxDQUFDLElBQUksR0FBR0EsS0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHQSxLQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUdBLEtBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbkQ7S0FDSjtDQUNKOzs7Ozs7QUNoREQ7TUFnQk1ELGFBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUtELE1BQWEsV0FBVzs7Ozs7SUFJdEIsWUFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztLQUkvQjs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBa0I7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7Ozs7OztJQU1ELHNCQUFzQixDQUFDLE1BQWM7OztjQUU3QixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQW9CLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUM1RixHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUMxRSxDQUFDO0tBQ0g7Ozs7Ozs7Ozs7SUFNRCx5QkFBeUIsQ0FBQyxNQUFjLEVBQUUsSUFBcUI7OztjQUV2RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQW9CLEdBQUcsRUFBRSxJQUFJLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDbkUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDMUYsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDMUUsQ0FBQztLQUNIOzs7Ozs7Ozs7O0lBTUQscUJBQXFCLENBQUMsTUFBYyxFQUFFLElBQXFCOzs7Y0FFbkQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixHQUFHLEVBQUUsSUFBSSxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ3RFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzFFLENBQUM7S0FDSDs7Ozs7Ozs7OztJQU1ELHFCQUFxQixDQUFDLE1BQWMsRUFBRSxJQUFxQjs7O2NBRW5ELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7O1lBQ3pELFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTs7UUFHaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBTSxRQUFRLEVBQUUsR0FBRyxvQkFBT0EsYUFBVyxJQUFFLElBQUksRUFBRSxRQUFRLElBQUcsQ0FBQyxJQUFJLENBQ25GLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FDbEUsQ0FBQztLQUNIOzs7OztJQUVELGVBQWUsQ0FBQyxFQUFVO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7O2NBQy9DLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1FBRXBFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzNFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUN0QixDQUFDO0tBQ0g7Ozs7O0lBRUQsa0JBQWtCLENBQUMsRUFBVTtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztjQUNsRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUVuRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQztLQUNIOzs7OztJQUVELGtCQUFrQixDQUFDLEVBQVU7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzs7Y0FDbEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxvQ0FBb0MsR0FBRyxFQUFFLENBQUM7UUFFcEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQzdCLENBQUM7S0FDSDs7Ozs7O0lBRUQsb0JBQW9CLENBQUMsTUFBYyxFQUFFLFNBQW1CO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O2NBQ3BELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLEdBQUcsTUFBTSxDQUFDOztZQUU3RSxLQUFLLEdBQUc7WUFDVixTQUFTLEVBQUUsU0FBUztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFFLEtBQUssRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUN0RCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FDN0IsQ0FBQztLQUNIOzs7Ozs7SUFFRCwwQkFBMEIsQ0FBQyxNQUFjLEVBQUUsT0FBaUI7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7Y0FDMUQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsR0FBRyxNQUFNLENBQUM7O2NBRTNFLGFBQWEsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztZQUNoRSxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLE9BQU87YUFDakI7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDbkQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLEVBQ25FLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUM3QixDQUFDO0tBQ0g7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQXFCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2NBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUvRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLG9CQUFPQSxhQUFXLElBQUUsWUFBWSxFQUFFLE1BQU0sSUFBRyxDQUFDLElBQUksQ0FDNUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEVBQ2hFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztjQUMzQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztRQUVyRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDMUQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEVBQ3BFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUF1QjtRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztjQUM1QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDOztZQUV6RCxLQUFLLEdBQUc7WUFDVixZQUFZLEVBQUUsVUFBVTtTQUN6QjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLEtBQUssRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUNyRCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsRUFDckUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUM7S0FDSDs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxNQUFjO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7O2NBQ3pELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsd0NBQXdDLEdBQUcsTUFBTSxDQUFDO1FBRTVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUNoRSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsRUFDdkYsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDaEIsQ0FBQztLQUNIOzs7OztJQUVELHNCQUFzQixDQUFDLE1BQWM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzs7Y0FDdEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSx5QkFBeUIsR0FBRyxNQUFNLENBQUM7UUFFN0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBcUIsR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQzdELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxFQUNwRixHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7Y0FDMUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsR0FBRyxNQUFNLENBQUM7O2NBRS9ELGFBQWEsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztTQUNqRTtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQVMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDdEQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEVBQ2xFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBcUI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7Y0FDMUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7UUFFbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUUsSUFBSSxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxFQUNsRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBYztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOztjQUNoRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQztRQUVwRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsRUFDL0UsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQzlCLENBQUM7S0FDSDs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFjO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7O2NBQ2pELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsd0NBQXdDLEdBQUcsTUFBTSxDQUFDO1FBRTVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxFQUMvRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FDL0IsQ0FBQztLQUNIOzs7OztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzs7Y0FDbEQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxrQ0FBa0MsR0FBRyxNQUFNLENBQUM7UUFFdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLEVBQ2hGLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQ2hELENBQUM7S0FDSDs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxXQUEyQjtRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOztjQUNyRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDO1FBRW5FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLFdBQVcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUMzRCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsRUFDOUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FDaEQsQ0FBQztLQUNIOzs7OztJQUVELDRCQUE0QixDQUFDLHFCQUE0QztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDOztjQUM1RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDhCQUE4QixDQUFDO1FBRXpFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFLHFCQUFxQixFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3JFLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxFQUNyRixHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7OztZQXZRRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFyQlEsVUFBVTtZQUtWLFVBQVU7Ozs7Ozs7O0FDTm5CLE1BTWEsZUFBZTs7OztJQU0xQixZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMaEMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxZQUFPLEdBQWdCLElBQUksQ0FBQztLQUkzQjs7OztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQzthQUN2RztTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFlO1FBQ3JCLElBQUksTUFBTSxFQUFFOztZQUVWLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFFdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUNJOztZQUVILElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4Qjs7WUFHRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQzthQUMxQjtTQUNGO0tBQ0Y7Ozs7OztJQUdELFVBQVUsQ0FBQyxTQUFrQjtRQUMzQixJQUFJO1lBQ0YsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQzFDO2lCQUNJO2dCQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUMxQztTQUNGO1FBQ0QsT0FBTSxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQy9GO0tBQ0Y7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVOzs7Ozs7Ozs7TUNhYkEsYUFBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQ25FO0FBS0QsTUFBYSxnQkFBZ0I7Ozs7O0lBSXpCLFlBQW9CLElBQWdCLEVBQVUsVUFBc0I7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGNUQsZUFBVSxHQUFXLEVBQUUsQ0FBQztLQUV5Qzs7Ozs7SUFFekUsSUFBSSxDQUFDLFVBQWtCO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQ2hDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O2NBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxFQUFFLElBQUksRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUM5RSxDQUFDO0tBQ0w7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Y0FDdkMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsR0FBRyxJQUFJLENBQUM7UUFFakYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQ2hDLENBQUM7S0FDTDs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBVTtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2NBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzNFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2xCLENBQUM7S0FDTDs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxFQUFVO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7O2NBQ2xELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztjQUUxRCxhQUFhLEdBQUc7WUFDcEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDakU7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFTLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3RELEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxFQUN4RSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7Ozs7O0lBRUgsa0JBQWtCLENBQUMsSUFBVTtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztjQUNsRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztRQUUxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDbkQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUMvRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNsQixDQUFDO0tBQ0w7OztZQS9ESixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFiTSxVQUFVO1lBR1YsVUFBVTs7Ozs7Ozs7QUNWbkIsTUFRYSxXQUFXOzs7O0lBSXBCLFlBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUg1QixlQUFVLEdBQVcsRUFBRSxDQUFDO0tBSXZCOzs7OztJQUVELElBQUksQ0FBQyxVQUFrQjtRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUNoQzs7OztJQUVELE9BQU87UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FDUCxHQUFHLElBQUksR0FBRyxDQUNYLENBQUMsQ0FBQztLQUVOOzs7WUF0Qk4sVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBTlEsVUFBVTs7Ozs7Ozs7TUNZTixhQUFhOzs7O0lBb0J4QixZQUFvQixZQUFtQjtRQUFuQixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQWYvQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFlM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBUyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ25EOzs7OztJQWZELElBQVcsa0JBQWtCLENBQUMsS0FBSztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7OztJQUVELElBQVcsY0FBYyxDQUFDLEtBQUs7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7O0lBT0QsSUFBSSxDQUFDLE9BQWU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7Ozs7O0lBR0QsaUJBQWlCOztZQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CO1FBQ3BDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixLQUFLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7Ozs7Ozs7OztJQU9ELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7S0FDSjs7O1lBbkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLEtBQUs7Ozs7Ozs7OztNQ1FSQSxhQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDbkU7QUFLRCxNQUFhLHFCQUFxQjs7Ozs7SUFJOUIsWUFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUY1RCxlQUFVLEdBQVcsRUFBRSxDQUFDO0tBRXlDOzs7OztJQUV6RSxJQUFJLENBQUMsVUFBa0I7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDaEM7Ozs7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Y0FDakQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQztRQUU1RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDbEMsQ0FBQztLQUNMOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7O2NBQ3RELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUM7UUFFakUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDckYsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQzVCLENBQUM7S0FDTDs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDM0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDckYsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUN4RSxDQUFDO0tBQ0w7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQWlCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7O2NBQ2xELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1FBRTlFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUN2RCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNsQixDQUFDO0tBQ0w7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQThCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7O2NBQzlELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsR0FBRyxFQUFFLGNBQWMsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUN4RSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUNoRixDQUFDO0tBQ0w7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOztjQUM5RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHVCQUF1QixHQUFHLEVBQUUsQ0FBQzs7Y0FFakUsYUFBYSxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBUyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsRUFDN0UsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDbEIsQ0FBQztLQUNMOzs7OztJQUVELE1BQU0sQ0FBQyxjQUE4QjtRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOztjQUM5RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsRUFBRSxjQUFjLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDL0YsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDbEIsQ0FBQztLQUNMOzs7WUFsRkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBZFEsVUFBVTtZQUdWLFVBQVU7Ozs7Ozs7O0FDVm5CO01BT01BLGFBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUNqRTtBQUtELE1BQWEsV0FBVzs7Ozs7SUFHdEIsWUFDVSxJQUFnQixFQUNoQixVQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQVk7S0FDM0I7Ozs7O0lBRUwsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7Ozs7O0lBRUQsNkJBQTZCLENBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsU0FBa0I7O1lBQzVFLFFBQVEsR0FBRyxvQ0FBb0MsTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUV2RSxJQUFJLFNBQVMsRUFBRTtZQUNiLFFBQVEsR0FBRyxHQUFHLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUN2Qzs7Y0FFSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQzlDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUN2RCxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7Ozs7Ozs7Ozs7SUFRTyxXQUFXLENBQUksU0FBUyxHQUFHLFdBQVcsRUFBRSxNQUFVO1FBQ3hELE9BQU8sQ0FBQyxLQUFVO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxZQUFZLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sRUFBRSxvQkFBQyxNQUFNLEdBQU0sQ0FBQztTQUN4QixDQUFDO0tBQ0g7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFaUSxVQUFVO1lBR1YsVUFBVTs7Ozs7Ozs7QUNKbkI7TUFRTUEsYUFBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2hFO0FBS0QsTUFBYSxnQkFBZ0I7Ozs7O0lBSTNCLFlBQW9CLElBQWdCLEVBQzFCLFVBQXNCO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSHhCLGVBQVUsR0FBVyxFQUFFLENBQUM7S0FJL0I7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7Ozs7OztJQUtELGNBQWMsQ0FBQyxXQUFtQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDOztjQUNuRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztRQUVqRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsRUFDNUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ3hCLENBQUM7S0FDSDs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJRLFVBQVU7WUFLVixVQUFVOzs7Ozs7OztBQ05uQjtNQVNNQSxhQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDakU7QUFLRCxNQUFhLHVCQUF1Qjs7Ozs7SUFJbEMsWUFBb0IsSUFBZ0IsRUFDMUIsVUFBc0I7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztLQUkvQjs7Ozs7SUFFRCxJQUFJLENBQUMsVUFBa0I7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7Ozs7O0lBS0Qsb0JBQW9CLENBQUMsTUFBYztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDOztjQUNoRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztRQUU1RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsRUFDMUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDaEIsQ0FBQztLQUNIOzs7Ozs7OztJQUtELGFBQWEsQ0FBQyxNQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7O2NBQ3pELEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFFQSxhQUFXLENBQUMsQ0FBQyxJQUFJLENBQy9DLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxFQUN2RSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDdkIsQ0FBQztLQUNIOzs7Ozs7OztJQUtELE1BQU0sQ0FBQyxRQUFrQjtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOztjQUNwRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztRQUV0RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBRSxRQUFRLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDekQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEVBQ3RFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7Ozs7Ozs7SUFLRCxlQUFlLENBQUMsVUFBa0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQzs7Y0FDM0QsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsR0FBRyxVQUFVLENBQUM7UUFFM0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLEVBQzdFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDs7Ozs7Ozs7SUFLRCxlQUFlLENBQUMsTUFBYztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDOztjQUN4RCxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUVwRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRUEsYUFBVyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsRUFDOUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ3hCLENBQUM7S0FDSDs7O1lBOUVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWRRLFVBQVU7WUFLVixVQUFVOzs7Ozs7OztBQ05uQixNQUFhLGlCQUFpQjtDQW1CN0I7Ozs7OztBQ2ZELE1BQWEsS0FBSztDQXFDakI7Ozs7Ozs7O0lDeENHLE1BQU8sTUFBTTtJQUNiLFlBQWEsWUFBWTtJQUN6QixNQUFPLE1BQU07SUFDYixhQUFjLGFBQWE7SUFDM0IsWUFBYSxZQUFZO0lBQ3pCLEtBQU0sS0FBSztJQUNYLGNBQWUsY0FBYztJQUM3QixhQUFjLGFBQWE7Ozs7Ozs7QUNSL0IsTUFBYSxXQUFXO0NBTXZCOzs7Ozs7QUNIRCxNQUFhLGFBQWE7Q0E0QnpCOzs7Ozs7QUMvQkQsTUFBYSxXQUFXO0NBT3ZCOzs7Ozs7QUNQRCxNQUFhLGtCQUFrQjtDQWtCOUI7Ozs7OztBQ2xCRCxNQUFhLHFCQUFxQjtDQWVqQzs7Ozs7O0FDWkQsTUFBYSxTQUFTO0NBTXJCOzs7Ozs7OztJQ1JHLFFBQVMsUUFBUTtJQUNqQixVQUFXLE9BQU87SUFDbEIsT0FBUSxPQUFPO0lBQ2YsV0FBWSxXQUFXOzs7Ozs7O0FDRjNCLE1BQWEsSUFBSTtDQWlCaEI7Ozs7OztBQ2xCRCxNQUFhLFdBQVc7Q0FHdkI7Ozs7OztBQ0RELE1BQWEsWUFBWTtDQWlCeEI7Ozs7OztBQ3BCRCxNQUFhLGNBQWM7Q0FxQjFCOzs7Ozs7QUNuQkQsTUFBYSxZQUFZO0NBT3hCOzs7Ozs7QUNURCxNQUFhLFVBQVU7Q0FrQnRCOzs7Ozs7QUNsQkQsTUFBYSxjQUFjO0NBWTFCOzs7Ozs7QUNaRCxNQUFhLGtCQUFrQjtDQVE5Qjs7Ozs7O0FDUkQsTUFBYSxhQUFhO0NBNkJ6Qjs7Ozs7O0FDN0JELE1BQWEsUUFBUTtDQU9sQjs7Ozs7O0FDUEgsTUFVYSxTQUFTOzs7OztJQUVwQixZQUFvQixxQkFBNEMsRUFDdEQsVUFBc0I7UUFEWiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3RELGVBQVUsR0FBVixVQUFVLENBQVk7S0FDL0I7Ozs7OztJQUVELFdBQVcsQ0FDVCxJQUE0QixFQUM1QixLQUEwQjtRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2pELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEscUJBQXFCO1lBQ3JCLFVBQVU7Ozs7Ozs7Ozs7SUNIQyxNQUFPLEVBQUUsUUFBUyxFQUFFLE9BQVE7Ozs7Ozs7Ozs7QUNGaEQ7Ozs7O0FBWUEsTUFBYSxjQUFjOzs7O0lBRXpCLFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0tBQUs7Ozs7OztJQUVyRSxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7O2dCQUt0QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0I7OztZQWpCRixVQUFVOzs7O1lBTkYscUJBQXFCOzs7Ozs7O0FBOEI5QixNQUFhLGdCQUFnQjs7Ozs7SUFFM0IsWUFBbUIscUJBQTRDLEVBQVUsVUFBc0I7UUFBNUUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7S0FBSzs7Ozs7O0lBRXBHLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBRXBELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLFVBQVUsQ0FBQyxHQUFHOzs7OztZQUtaLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7O2dCQUV0QixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1RTs7a0JBRUssS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxVQUFVO1lBQ2pELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FDSCxDQUFDO0tBQ0g7OztZQXhCRixVQUFVOzs7O1lBN0JGLHFCQUFxQjtZQUNyQixVQUFVOzs7Ozs7O0FBNERuQixNQUFhLGdCQUFnQjtJQUUzQixpQkFBaUI7Ozs7OztJQUVqQixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUVoRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQXFCO1lBQ3JELElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2QsQ0FBQyxDQUFDLENBQUM7S0FFTDs7O1lBZEYsVUFBVTs7Ozs7Ozs7O0FDakVYLE1BTWEsc0JBQXNCO0lBRS9CLGlCQUFpQjs7Ozs7SUFFakIsS0FBSyxDQUFDLFNBQVM7O1lBQ1AsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsSUFBSSxTQUFTLEVBQUUsR0FBRTtLQUM3RDs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7O1FBRWxELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O1lBRzFCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztvQkFDWixPQUFPLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFFO2dCQUNoRyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQy9FO3FCQUFNO29CQUNILE9BQU8sVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDdEQ7YUFDSjs7WUFHRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7b0JBQ1osUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7b0JBQ2pDLEVBQUUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O29CQUM1QyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQkFDaEQsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMvRTtxQkFBTTtvQkFDSCxPQUFPLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3REO2FBQ0o7O1lBR0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFOztvQkFDbkUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQy9FO3FCQUFNO29CQUNILE9BQU8sVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDdEQ7YUFDSjs7WUFHRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FFL0IsQ0FBQyxDQUFDLENBQUM7S0FDUDs7O1lBeERKLFVBQVU7Ozs7O0FBMkRYLElBQVcsbUJBQW1CLEdBQUc7O0lBRTdCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLHNCQUFzQjtJQUNoQyxLQUFLLEVBQUUsSUFBSTtDQUNkOzs7Ozs7QUNyRUQ7Ozs7Ozs7QUFRQSxTQUFTLGtCQUFrQixDQUFDLHNCQUE4QixFQUFFLG9CQUE0QjtJQUNwRixPQUFPLENBQUMsS0FBZ0I7O1lBQ2hCLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7O1lBQ3pELGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDOzs7UUFHekQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFDO0NBQ0w7Ozs7O0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxvQkFBNEI7SUFDdkQsT0FBTyxDQUFDLE9BQXdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUM1QixrQkFBa0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFdEUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFDO0NBQ0w7Ozs7O0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxvQkFBNEI7SUFDMUQsT0FBTyxDQUFDLE9BQXdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFOztZQUM1QixrQkFBa0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFdEUsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmLENBQUM7Q0FDTDs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLFFBQWdCO0lBQzFDLE9BQU8sQ0FBQyxPQUF3QjtRQUM1QixJQUFJQyxLQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQ0EsS0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQztTQUNmOztZQUVHLFFBQVEsR0FBRyxvQkFBQyxPQUFPLENBQUMsS0FBSyxJQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQzNELElBQUksUUFBUSxHQUFHLFFBQVEsRUFBRTtZQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFDO0NBQ0w7Ozs7O0FBRUQsU0FBUyxFQUFFLENBQUMsT0FBZTtJQUN2QixPQUFPLENBQUMsT0FBd0I7UUFDNUIsSUFBSUEsS0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUNBLEtBQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxJQUFJLENBQUM7U0FDZjs7WUFFRyxDQUFDLEdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDN0MsQ0FBQztDQUNMOztBQUVELE1BQWEsZ0JBQWdCLEdBQUc7SUFDNUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLEVBQUU7Q0FDTDs7Ozs7Ozs7Ozs7Ozs7In0=