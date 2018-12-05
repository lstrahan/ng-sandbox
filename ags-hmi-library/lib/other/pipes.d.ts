import { PipeTransform } from '@angular/core';
import moment from 'moment-es6';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class DateFormatPipe implements PipeTransform {
    static format: string;
    transform(theDate: moment.Moment | Date | string, defaultVal?: string, forceUtc?: boolean): string;
}
export declare class TruncatePipe implements PipeTransform {
    transform(s: string): string;
}
export declare class OrderByPipe implements PipeTransform {
    transform(array: any, asc?: boolean): {}[];
    orderByComparator(a: string, b: string): number;
}
export declare class HighlightPipe implements PipeTransform {
    sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(text: string, searchTerms: any): SafeHtml;
}
export declare class RemoveItemPipe implements PipeTransform {
    transform(items: any[], itemToRemove: any): any[];
}
export declare const CustomPipes: {
    DateFormatPipe: typeof DateFormatPipe;
    TruncatePipe: typeof TruncatePipe;
    OrderByPipe: typeof OrderByPipe;
    RemoveItemPipe: typeof RemoveItemPipe;
};
