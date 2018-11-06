import { FormGroup, AbstractControl, ValidatorFn, Validators, NG_VALIDATORS } from '@angular/forms';
import moment from 'moment-es6';
import * as _ from 'lodash';

// you can get more validators from here https://github.com/yuyang041060120/ng2-validation


// this validator must be applied to a FormGroup because it is comparing 2 controls
function dateRangeValidator(startDateControlString: string, endDateControlString: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: boolean } | null => {
        let startDateControl = group.controls[startDateControlString];
        let endDateControl = group.controls[endDateControlString];
        // tslint:disable-next-line:max-line-length
        // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> DateRangeValidator(${startDateControlString}, ${endDateControlString}): from.value = ${startDateControl.value}, to.value = ${endDateControl.value}`);
        if (moment(startDateControl.value).isAfter(endDateControl.value)) {
            return { 'dateRange': true };
        }
        return null;
    };
}

function dateLessThanValidator(compareControlString: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (!control.parent) { return; }
        let compareDateControl = control.parent.controls[compareControlString];
        // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> DateLessThanValidator(${compareControlString}): from.value = ${thisDateControl.value}, to.value = ${compareDateControl.value}`);
        if (moment(control.value).isAfter(compareDateControl.value)) {
            return { 'dateLessThan': true };
        }
        return null;
    };
}

function dateGreaterThanValidator(compareControlString: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (!control.parent) { return; }
        let compareDateControl = control.parent.controls[compareControlString];
        // console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> DateGreaterThanValidator(${compareControlString}): from.value = ${thisDateControl.value}, to.value = ${compareDateControl.value}`);
        if (moment(control.value).isBefore(compareDateControl.value)) {
            return { 'dateGreaterThan': true };
        }
        return null;
    };
}

function maxNumLinesValidator(maxLines: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (_.isNil(maxLines) || !_.isNil(Validators.required(control))) {
            return null;
        }
        
        let numLines = (control.value as string).split('\n').length;
        if (numLines > maxLines) {
            return { 'maxNumLines': true };
        }
        return null;
    };
}

function lt(ltParam: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
        if (_.isNil(ltParam) || !_.isNil(Validators.required(control))) {
            return null;
        }

        let v: number = +control.value;
        return v < +ltParam ? null : { lt: true };
    };
}

export const CustomValidators = {
    dateRangeValidator,
    dateLessThanValidator,
    dateGreaterThanValidator,
    maxNumLinesValidator,
    lt
};





