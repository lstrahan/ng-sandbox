import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private _iconNameToSvgElementMap: Map<string, SVGElement> = new Map<string, SVGElement>();
  private _iconNameToFileNameMap: Map<string, string> = new Map([
    //[icon name, file name]
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
    ['timeline', 'assets/svg-icons/Timeline.svg']
  ]);
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
    } finally {
      return svg;
    }
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
    try {
      if (!state || state.length === 0 || !this._stateToIconNameMap.has(state)) {
        state = 'unknown';
      }
      return `uci-state-${state.toLowerCase()}`;
    } catch (e) {
      return 'uci-state-unknown';
    }
  }
}
