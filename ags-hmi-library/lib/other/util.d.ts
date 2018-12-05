export declare class Util {
    /****************************************************************************
     * Generate Guid
     ****************************************************************************/
    static newGuid(): string;
    /****************************************************************************
     * Takes a variable list of strings and combines them into a valid url. This
     * function will avoid the problem of missing or extra '/' characters.
     * Example:
     *    input: 'http://www.google.com/', '/string1/', /string2', 'string3'
     *    output: 'http://www.google.com/string1/string2/string3'
     ****************************************************************************/
    static urlJoin(...strArray: string[]): string;
    /****************************************************************************
     * This function can be used to override the console.log function to turn off
     * all messages for production, or intercept the console.log function to do
     * some additional processing.
     ****************************************************************************/
    static overrideConsole(): void;
    /****************************************************************************
     * Get the best contrasting color, either black or white, for given input color.
     * Parameters:
     *    color: hex color such as '#FF0077'
     ****************************************************************************/
    contrastColor(hexColor: any): "#000000" | "#ffffff";
    colorFromRgb(r: any, g: any, b: any): string;
    componentToHex(c: any): any;
    rgbToHex(r: any, g: any, b: any): string;
    hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
}
