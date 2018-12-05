import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
export declare class IconService {
    private iconRegistry;
    private sanitizer;
    private _iconNameToSvgElementMap;
    private _iconNameToFileNameMap;
    private _stateToIconNameMap;
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    /****************************************************************************
     * load custom icons. Use them in HTML like this... <mat-icon svgIcon="add-event"></mat-icon>
     ****************************************************************************/
    init(): void;
    /****************************************************************************
     * Get icon SVG element from icon string name
     ****************************************************************************/
    getIconSvgElement(iconStrName: string): SVGElement;
    /****************************************************************************
     *
     ****************************************************************************/
    getIconNameFromState(state: string): string;
    /****************************************************************************
     *
     ****************************************************************************/
    getIconSvgElementFromState(state: string): SVGElement;
    /****************************************************************************
     *
     ****************************************************************************/
    getIconNameFromUciState(state: string): string;
    /****************************************************************************
     *
     ****************************************************************************/
    getIconSvgElementFromUciState(state: string): SVGElement;
    /****************************************************************************
     *
     ****************************************************************************/
    getStateClass(state: string): string;
    /****************************************************************************
     *
     ****************************************************************************/
    getUciStateClass(state: string): string;
}
