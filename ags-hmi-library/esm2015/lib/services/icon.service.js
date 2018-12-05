/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
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
export class IconService {
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
/** @nocollapse */ IconService.ngInjectableDef = i0.defineInjectable({ factory: function IconService_Factory() { return new IconService(i0.inject(i1.MatIconRegistry), i0.inject(i2.DomSanitizer)); }, token: IconService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconService.prototype._iconNameToSvgElementMap;
    /**
     * @type {?}
     * @private
     */
    IconService.prototype._iconNameToFileNameMap;
    /**
     * @type {?}
     * @private
     */
    IconService.prototype._stateToIconNameMap;
    /**
     * @type {?}
     * @private
     */
    IconService.prototype.iconRegistry;
    /**
     * @type {?}
     * @private
     */
    IconService.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWdzLWhtaS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCekQsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBMkR0QixZQUFvQixZQUE2QixFQUN2QyxTQUF1QjtRQURiLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBMUR6Qiw2QkFBd0IsR0FBNEIsSUFBSSxHQUFHLEVBQXNCLENBQUM7Ozs7UUFLbEYsMkJBQXNCLEdBQXdCLElBQUksR0FBRyxDQUFDO1lBQzVELG1DQUFtQztZQUNuQyxDQUFDLGVBQWUsRUFBRSxvQ0FBb0MsQ0FBQztZQUN2RCxDQUFDLGlCQUFpQixFQUFFLHNDQUFzQyxDQUFDO1lBQzNELENBQUMsV0FBVyxFQUFFLGdDQUFnQyxDQUFDO1lBQy9DLENBQUMsYUFBYSxFQUFFLGtDQUFrQyxDQUFDO1lBQ25ELENBQUMsZ0JBQWdCLEVBQUUscUNBQXFDLENBQUM7WUFDekQsQ0FBQyxRQUFRLEVBQUUsNkJBQTZCLENBQUM7WUFDekMsQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUM7WUFDM0MsQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUM7WUFDM0MsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUM7WUFDckQsQ0FBQyxVQUFVLEVBQUUsK0JBQStCLENBQUM7WUFDN0MsQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUM7WUFDM0MsQ0FBQyxVQUFVLEVBQUUsK0JBQStCLENBQUM7WUFDN0MsQ0FBQyxXQUFXLEVBQUUsZ0NBQWdDLENBQUM7WUFDL0MsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUM7WUFDckQsQ0FBQyxnQkFBZ0IsRUFBRSxxQ0FBcUMsQ0FBQztZQUN6RCxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQztZQUNyRCxDQUFDLFlBQVksRUFBRSxpQ0FBaUMsQ0FBQztZQUNqRCxDQUFDLGdCQUFnQixFQUFFLHFDQUFxQyxDQUFDO1NBQzFELENBQUMsQ0FBQzs7UUFHSyx3QkFBbUIsR0FBd0IsSUFBSSxHQUFHLENBQUM7WUFDekQsb0JBQW9CO1lBQ3BCLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO1lBQ3BDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQztZQUNsQyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7WUFDakMsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDO1lBQ2hDLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDO1lBQ3BDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQztZQUNsQyxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7WUFDL0IsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDO1lBQ2xDLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDO1lBQ2xDLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDO1lBQzFCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQztZQUM5QixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7WUFDOUIsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO1lBQzdCLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQztZQUN2QixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7WUFDOUIsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDO1lBQzVCLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztZQUM3QixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7WUFDakMsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO1lBQ2pDLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztZQUNoQyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7WUFDMUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDO1lBQzNCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUMxQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztZQUM5QixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFJSCxDQUFDOzs7Ozs7O0lBS0QsSUFBSTtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFLRCxpQkFBaUIsQ0FBQyxXQUFtQjs7WUFDL0IsR0FBZTtRQUNuQixJQUFJO1lBQ0YsSUFBSSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9GLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzthQUNqQztZQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3REO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixHQUFHLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7Ozs7SUFLRCxvQkFBb0IsQ0FBQyxLQUFhO1FBQ2hDLElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEUsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7Ozs7O0lBS0QsMEJBQTBCLENBQUMsS0FBYTtRQUN0QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7OztJQUtELHVCQUF1QixDQUFDLEtBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7O0lBS0QsNkJBQTZCLENBQUMsS0FBYTtRQUN6QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7SUFLRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hFLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDbkI7WUFDRCxPQUFPLFNBQVMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7U0FDdkM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sZUFBZSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEUsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUNuQjtZQUNELE9BQU8sYUFBYSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztTQUMzQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtJQUNILENBQUM7OztZQTlKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF6QlEsZUFBZTtZQUNmLFlBQVk7Ozs7Ozs7O0lBMkJuQiwrQ0FBMEY7Ozs7O0lBSzFGLDZDQW9CRzs7Ozs7SUFHSCwwQ0EyQkc7Ozs7O0lBRVMsbUNBQXFDOzs7OztJQUMvQyxnQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEljb25SZWdpc3RyeSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG4vKlxyXG5UaGlzIHNlcnZpY2UgcHJvdmlkZXMgbWV0aG9kcyB0byBsb2FkIGN1c3RvbSBpY29ucywgYW5kIGl0IHByb3ZpZGVzIG1ldGhvZHMgZm9yIFxyXG5jb252ZXJ0aW5nIHN0YXRlcyB0byBpY29uIG5hbWVzLlxyXG5cclxuVG8gdXNlIGEgY3VzdG9tIGljb24gaW4gYSA8bWF0LWljb24+IGVsZW1lbnQuLi5cclxuXHJcbiAgPG1hdC1pY29uIHN2Z0ljb249XCJjdXN0b20taWNvbi1uYW1lXCI+PC9tYXQtaWNvbj5cclxuXHJcblRvIGNyZWF0ZSBhIHN0YXRlIGljb24sIHRoZXJlIGFyZSAyIHdheXMgb2YgZG9pbmcgaXQuIFlvdSBjYW4gdXNlIHRoZSA8YWdzLWxpYi1zdGF0ZS1pY29uPiBjb21wb25lbnQsXHJcbk9yIHlvdSBjYW4gdXNlIHRoZSBpY29uIHNlcnZpY2UgZGlyZWN0bHkgaW4gYSA8bWF0LWljb24+IGVsZW1lbnQuXHJcblxyXG4gIDxhZ3MtbGliLXN0YXRlLWljb24gc3RhdGU9XCJleGVjdXRpbmdcIj48L2Fncy1saWItc3RhdGUtaWNvbj5cclxuICA8bWF0LWljb24gW3N2Z0ljb25dPVwiaWNvblNlcnZpY2UuZ2V0SWNvbk5hbWVGcm9tU3RhdGUoJ2V4ZWN1dGluZycpXCIgW25nQ2xhc3NdPVwiaWNvblNlcnZpY2UuZ2V0U3RhdGVDbGFzcygnZXhlY3V0aW5nJylcIj48L21hdC1pY29uPlxyXG5cclxuVGhlcmUgYXJlIGFsc28gVUNJIHZlcnNpb25zIG9mIHRoZSBleGFtcGxlcyBhYm92ZSwgYmVjYXVzZSBVQ0kgaGFzIGl0J3Mgb3duIHN0YXRlcyBhbmQgY29sb3JzLlxyXG5cclxuICA8YWdzLWxpYi11Y2ktc3RhdGUtaWNvbiBzdGF0ZT1cImV4ZWN1dGluZ1wiPjwvYWdzLWxpYi11Y2ktc3RhdGUtaWNvbj5cclxuICA8bWF0LWljb24gW3N2Z0ljb25dPVwiaWNvblNlcnZpY2UuZ2V0SWNvbk5hbWVGcm9tVWNpU3RhdGUoJ2V4ZWN1dGluZycpXCIgW25nQ2xhc3NdPVwiaWNvblNlcnZpY2UuZ2V0VWNpU3RhdGVDbGFzcygnZXhlY3V0aW5nJylcIj48L21hdC1pY29uPlxyXG4qL1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9pY29uTmFtZVRvU3ZnRWxlbWVudE1hcDogTWFwPHN0cmluZywgU1ZHRWxlbWVudD4gPSBuZXcgTWFwPHN0cmluZywgU1ZHRWxlbWVudD4oKTtcclxuXHJcbiAgLy8gVGhlc2UgYXJlIHRoZSBjdXN0b20gaWNvbnMgdG8gYmUgbG9hZGVkIGludG8gdGhlIE1hdEljb25SZWdpc3RyeVxyXG4gIC8vIHRoZSBmaXJzdCBpdGVtIGlzIHRoZSBpY29uIG5hbWUsIGFuZCB0aGUgc2Vjb25kIGl0ZW0gaXMgdGhlIGZpbGVcclxuICAvLyBjb250YWluaW5nIHRoZSBTVkcgZGVmaW5pdGlvbiBvZiB0aGUgaWNvblxyXG4gIHByaXZhdGUgX2ljb25OYW1lVG9GaWxlTmFtZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoW1xyXG4gICAgLy9bY3VzdG9tLWljb24tbmFtZSwgU1ZHIGZpbGUgbmFtZV1cclxuICAgIFsnY2lyY2xlLWZpbGxlZCcsICdhc3NldHMvc3ZnLWljb25zL2NpcmNsZS1maWxsZWQuc3ZnJ10sXHJcbiAgICBbJ2NpcmNsZS1vdXRsaW5lZCcsICdhc3NldHMvc3ZnLWljb25zL2NpcmNsZS1vdXRsaW5lZC5zdmcnXSxcclxuICAgIFsnYWRkLWV2ZW50JywgJ2Fzc2V0cy9zdmctaWNvbnMvQWRkLUV2ZW50LnN2ZyddLFxyXG4gICAgWydiYWNrLXRvLW5vdycsICdhc3NldHMvc3ZnLWljb25zL0JhY2stdG8tTm93LnN2ZyddLFxyXG4gICAgWydjb25uZWN0LXBvaW50cycsICdhc3NldHMvc3ZnLWljb25zL0Nvbm5lY3QtUG9pbnRzLnN2ZyddLFxyXG4gICAgWydkZWxldGUnLCAnYXNzZXRzL3N2Zy1pY29ucy9EZWxldGUuc3ZnJ10sXHJcbiAgICBbJ3B1c2hwaW4nLCAnYXNzZXRzL3N2Zy1pY29ucy9QdXNocGluLnN2ZyddLFxyXG4gICAgWydyZWZyZXNoJywgJ2Fzc2V0cy9zdmctaWNvbnMvUmVmcmVzaC5zdmcnXSxcclxuICAgIFsncmVzcG9uc2UtYWRkJywgJ2Fzc2V0cy9zdmctaWNvbnMvUmVzcG9uc2UtQWRkLnN2ZyddLFxyXG4gICAgWydzZXF1ZW5jZScsICdhc3NldHMvc3ZnLWljb25zL1NlcXVlbmNlLnN2ZyddLFxyXG4gICAgWydzZXR0aW5nJywgJ2Fzc2V0cy9zdmctaWNvbnMvU2V0dGluZy5zdmcnXSxcclxuICAgIFsndGltZWxpbmUnLCAnYXNzZXRzL3N2Zy1pY29ucy9UaW1lbGluZS5zdmcnXSxcclxuICAgIFsnc3RhdHVzLW9rJywgJ2Fzc2V0cy9zdmctaWNvbnMvU3RhdHVzLU9LLnN2ZyddLFxyXG4gICAgWydzdGF0dXMtYWxlcnQnLCAnYXNzZXRzL3N2Zy1pY29ucy9TdGF0dXMtQUxFUlQuc3ZnJ10sXHJcbiAgICBbJ3N0YXR1cy1jYXV0aW9uJywgJ2Fzc2V0cy9zdmctaWNvbnMvU3RhdHVzLUNBVVRJT04uc3ZnJ10sXHJcbiAgICBbJ3N0YXR1cy1lcnJvcicsICdhc3NldHMvc3ZnLWljb25zL1N0YXR1cy1FUlJPUi5zdmcnXSxcclxuICAgIFsnc3RhdHVzLW9mZicsICdhc3NldHMvc3ZnLWljb25zL1N0YXR1cy1PRkYuc3ZnJ10sXHJcbiAgICBbJ3N0YXR1cy1zdGFuZGJ5JywgJ2Fzc2V0cy9zdmctaWNvbnMvU3RhdHVzLVNUQU5EQlkuc3ZnJ11cclxuICBdKTtcclxuXHJcbiAgLy8gbWFwIHN0YXRlIG5hbWVzIHRvIGljb24gbmFtZXNcclxuICBwcml2YXRlIF9zdGF0ZVRvSWNvbk5hbWVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKFtcclxuICAgIC8vW3N0YXRlLCBpY29uIG5hbWVdXHJcbiAgICBbJ3VjaS11bmFsbG9jYXRlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS1hbGxvY2F0ZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktcHJvcG9zZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktcGxhbm5lZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS1leGVjdXRpbmcnLCAnY2lyY2xlLW91dGxpbmVkJ10sXHJcbiAgICBbJ3VjaS1jb21wbGV0ZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWyd1Y2ktZmFpbGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsndWNpLWNhbmNlbGxlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ3VjaS11bmtub3duJywgJ2NpcmNsZS1vdXRsaW5lZCddLFxyXG4gICAgWydvZmYnLCAnY2lyY2xlLW91dGxpbmVkJ10sXHJcbiAgICBbJ29jY3VycmluZycsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ2V4ZWN1dGluZycsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ29jY3VycmVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnb2snLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydjb21wbGV0ZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydjYXV0aW9uJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsncHJvcG9zZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydub3Rfb2NjdXJyZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydub3Qtb2NjdXJyZWQnLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydub3RvY2N1cnJlZCcsICdjaXJjbGUtZmlsbGVkJ10sXHJcbiAgICBbJ2FsZXJ0JywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnZmFpbGVkJywgJ2NpcmNsZS1maWxsZWQnXSxcclxuICAgIFsnZXJyb3InLCAnY2lyY2xlLWZpbGxlZCddLFxyXG4gICAgWydzdGFuZGJ5JywgJ2NpcmNsZS1vdXRsaW5lZCddLFxyXG4gICAgWyd1bmtub3duJywgJ2NpcmNsZS1vdXRsaW5lZCddXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIGxvYWQgY3VzdG9tIGljb25zLiBVc2UgdGhlbSBpbiBIVE1MIGxpa2UgdGhpcy4uLiA8bWF0LWljb24gc3ZnSWNvbj1cImFkZC1ldmVudFwiPjwvbWF0LWljb24+XHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuX2ljb25OYW1lVG9GaWxlTmFtZU1hcC5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgIHRoaXMuaWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oaywgdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHYpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2ljb25OYW1lVG9GaWxlTmFtZU1hcC5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgIHRoaXMuaWNvblJlZ2lzdHJ5LmdldE5hbWVkU3ZnSWNvbihrKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLl9pY29uTmFtZVRvU3ZnRWxlbWVudE1hcC5zZXQoaywgcmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogR2V0IGljb24gU1ZHIGVsZW1lbnQgZnJvbSBpY29uIHN0cmluZyBuYW1lXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0SWNvblN2Z0VsZW1lbnQoaWNvblN0ck5hbWU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xyXG4gICAgbGV0IHN2ZzogU1ZHRWxlbWVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghaWNvblN0ck5hbWUgfHwgaWNvblN0ck5hbWUubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9pY29uTmFtZVRvU3ZnRWxlbWVudE1hcC5oYXMoaWNvblN0ck5hbWUpKSB7XHJcbiAgICAgICAgaWNvblN0ck5hbWUgPSAnY2lyY2xlLW91dGxpbmVkJztcclxuICAgICAgfVxyXG4gICAgICBzdmcgPSB0aGlzLl9pY29uTmFtZVRvU3ZnRWxlbWVudE1hcC5nZXQoaWNvblN0ck5hbWUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzdmcgPSBuZXcgU1ZHRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN2ZztcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0SWNvbk5hbWVGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXN0YXRlIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5fc3RhdGVUb0ljb25OYW1lTWFwLmhhcyhzdGF0ZSkpIHtcclxuICAgICAgICBzdGF0ZSA9ICd1bmtub3duJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGVUb0ljb25OYW1lTWFwLmdldChzdGF0ZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAnY2lyY2xlLW91dGxpbmVkJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0SWNvblN2Z0VsZW1lbnRGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0SWNvblN2Z0VsZW1lbnQodGhpcy5nZXRJY29uTmFtZUZyb21TdGF0ZShzdGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRJY29uTmFtZUZyb21VY2lTdGF0ZShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEljb25OYW1lRnJvbVN0YXRlKGB1Y2ktJHtzdGF0ZX1gKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0SWNvblN2Z0VsZW1lbnRGcm9tVWNpU3RhdGUoc3RhdGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0SWNvblN2Z0VsZW1lbnRGcm9tU3RhdGUoYHVjaS0ke3N0YXRlfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBnZXRTdGF0ZUNsYXNzKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFzdGF0ZSB8fCBzdGF0ZS5sZW5ndGggPT09IDAgfHwgIXRoaXMuX3N0YXRlVG9JY29uTmFtZU1hcC5oYXMoc3RhdGUpKSB7XHJcbiAgICAgICAgc3RhdGUgPSAndW5rbm93bic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGBzdGF0ZS0ke3N0YXRlLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICdzdGF0ZS11bmtub3duJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgZ2V0VWNpU3RhdGVDbGFzcyhzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghc3RhdGUgfHwgc3RhdGUubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9zdGF0ZVRvSWNvbk5hbWVNYXAuaGFzKHN0YXRlKSkge1xyXG4gICAgICAgIHN0YXRlID0gJ3Vua25vd24nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgdWNpLXN0YXRlLSR7c3RhdGUudG9Mb3dlckNhc2UoKX1gO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gJ3VjaS1zdGF0ZS11bmtub3duJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19