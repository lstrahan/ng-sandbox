import { OnInit, OnChanges } from '@angular/core';
import { KeyValue } from '@angular/common';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { LogService } from '../../services/log.service';
export declare class ChipDisplayComponent implements OnInit, OnChanges, ControlValueAccessor {
    ngControl: NgControl;
    private logService;
    label: string;
    selectableItems: KeyValue<string, any>[];
    allowDuplicates: boolean;
    enabled: boolean;
    equalityProperty: string;
    selectedItems: KeyValue<string, any>[];
    remainingSelectableItems: KeyValue<string, any>[];
    onChange: Function;
    onTouched: Function;
    writeValue(value: KeyValue<string, any>[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    constructor(ngControl: NgControl, logService: LogService);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    onSelected(item: KeyValue<string, any>): void;
    onRemoved(item: KeyValue<string, any>): void;
    determineRemainingSelectableItems(): void;
    findItemInList(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean;
    compareNumbers(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean;
    compareStrings(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean;
    compareObjects(item: KeyValue<string, any>, list: KeyValue<string, any>[]): boolean;
}
