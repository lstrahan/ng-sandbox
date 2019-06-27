import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private _iconNameToSvgElementMap: Map<string, SVGElement> = new Map<string, SVGElement>();

  // These are the custom icons to be loaded into the MatIconRegistry
  // the first item is the icon name, and the second item is the file
  // containing the SVG definition of the icon
  private _iconNameToFileNameMap: Map<string, string> = new Map([
    //[custom-icon-name, SVG file name]
    ['circle-filled', 'assets/svg-icons/circle-filled.svg'],
    ['circle-outlined', 'assets/svg-icons/circle-outlined.svg'],
    ['add-event', 'assets/svg-icons/Add-Event.svg'],
    ['back-to-now', 'assets/svg-icons/Back-to-Now.svg'],
    ['connect-points', 'assets/svg-icons/Connect-Points.svg'],
    ['delete', 'assets/svg-icons/Delete.svg'],
    ['meteor', 'assets/svg-icons/Meteor.svg'],
    ['pushpin', 'assets/svg-icons/Pushpin.svg'],
    ['pushpin2', 'assets/svg-icons/Pushpin2.svg'],
    ['meteor', 'assets/svg-icons/Meteor.svg'],
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
  private _stateToIconNameMap: Map<string, string> = new Map([
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

  constructor(private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
  }

  /****************************************************************************
   * load custom icons. Use them in HTML like this... <mat-icon svgIcon="add-event"></mat-icon>
   ****************************************************************************/
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

  /****************************************************************************
   * Get icon SVG element from icon string name
   ****************************************************************************/
  getIconSvgElement(iconStrName: string): SVGElement {
    let svg: SVGElement;
    try {
      if (!iconStrName || iconStrName.length === 0 || !this._iconNameToSvgElementMap.has(iconStrName)) {
        iconStrName = 'circle-outlined';
      }
      svg = this._iconNameToSvgElementMap.get(iconStrName);
    } catch (e) {
      svg = new SVGElement();
    }
    return svg;
  }

  /****************************************************************************
   *
   ****************************************************************************/
  getIconNameFromState(state: string): string {
    try {
      if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
        state = 'unknown';
      }
      return this._stateToIconNameMap.get(state);
    } catch (e) {
      return 'circle-outlined';
    }
  }

  /****************************************************************************
   *
   ****************************************************************************/
  getIconSvgElementFromState(state: string): SVGElement {
    return this.getIconSvgElement(this.getIconNameFromState(state));
  }

  /****************************************************************************
   *
   ****************************************************************************/
  getIconNameFromUciState(state: string): string {
    return this.getIconNameFromState(`uci-${state}`);
  }

  /****************************************************************************
   *
   ****************************************************************************/
  getIconSvgElementFromUciState(state: string): SVGElement {
    return this.getIconSvgElementFromState(`uci-${state}`);
  }

  /****************************************************************************
   *
   ****************************************************************************/
  getStateClass(state: string): string {
    try {
      if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
        state = 'unknown';
      }
      return `state-${state.toLowerCase()}`;
    } catch (e) {
      return 'state-unknown';
    }
  }

  /****************************************************************************
   *
   ****************************************************************************/
  getUciStateClass(state: string): string {
    state = `uci-${state}`;
    try {
      if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
        state = 'uci-unknown';
      }
      return `state-${state.toLowerCase()}`;
    } catch (e) {
      return 'state-uci-unknown';
    }
  }
}
