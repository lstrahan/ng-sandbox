import { ValidatorFn } from '@angular/forms';
declare function dateRangeValidator(startDateControlString: string, endDateControlString: string): ValidatorFn;
declare function dateLessThanValidator(compareControlString: string): ValidatorFn;
declare function dateGreaterThanValidator(compareControlString: string): ValidatorFn;
declare function maxNumLinesValidator(maxLines: number): ValidatorFn;
declare function lt(ltParam: number): ValidatorFn;
export declare const CustomValidators: {
    dateRangeValidator: typeof dateRangeValidator;
    dateLessThanValidator: typeof dateLessThanValidator;
    dateGreaterThanValidator: typeof dateGreaterThanValidator;
    maxNumLinesValidator: typeof maxNumLinesValidator;
    lt: typeof lt;
};
export {};
