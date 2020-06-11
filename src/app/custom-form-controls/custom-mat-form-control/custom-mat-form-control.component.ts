import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy, HostBinding, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-custom-mat-form-control',
  templateUrl: './custom-mat-form-control.component.html',
  styleUrls: ['./custom-mat-form-control.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CustomMatFormControlComponent }]
})
export class CustomMatFormControlComponent implements ControlValueAccessor, MatFormFieldControl<string>, OnDestroy {
  // Implementation of ControlValueAccessor to integrate with Angular Forms
  onChange: Function;
  onTouched: Function;

  writeValue(value) { this.value = value; }

  registerOnChange(fn) { this.onChange = fn; }

  registerOnTouched(fn) { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  // Implementation of MatFormFieldControl so that control can be used inside a <mat-form-field> container
  static nextId = 0;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'custom-mat-form-control';

  @HostBinding('class.floating') get shouldLabelFloat() { return this.focused || !this.empty; }
  @HostBinding('id') id = `custom-mat-form-control-${CustomMatFormControlComponent.nextId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = 'value';
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): string | null {
    return this._valuePart1 + '-' + this._valuePart2 + '-' + this._valuePart3;
  }
  set value(newVal: string | null) {
    let strAry = newVal.split('-');
    this._valuePart1 = strAry[0] ? strAry[0] : 'n/a';
    this._valuePart2 = strAry[1] ? strAry[1] : 'n/a';
    this._valuePart3 = strAry[2] ? strAry[2] : 'n/a';
    this.stateChanges.next();
  }
  _valuePart1: string = '';
  _valuePart2: string = '';
  _valuePart3: string = '';

  get empty() {
    return !this._valuePart1 && !this._valuePart2;
  }

  constructor(private fm: FocusMonitor, private elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl) {

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; } // required for interaction with Angular forms
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  // Implementation of MatFormFieldControl so that control can be used inside a <mat-form-field> container
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  // My functions

  onDataChanged(event: any) {
    this.onChange(this.value); // required for interaction with Angular forms
  }
}
