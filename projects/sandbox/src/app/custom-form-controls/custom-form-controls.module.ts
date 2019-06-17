import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { SimpleCustomFormControlComponent } from './simple-custom-form-control/simple-custom-form-control.component';
import { CustomMatFormControlComponent } from './custom-mat-form-control/custom-mat-form-control.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { MyFormComponent } from './my-form/my-form.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { SelectWithClearComponent } from './select-with-clear/select-with-clear.component';

import { PortalModule } from '@angular/cdk/portal';
import { PrimeNgModule } from '../primeng.module';
import { CustomSelectComponent } from './custom-dropdown/custom-select.component';
import { CustomSelectOptionComponent } from './custom-dropdown/custom-select-option.component';
import { DropdownComponent } from './custom-dropdown/dropdown.component';

const ROUTES: Routes = [
  { path: '', component: MyFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
    FlexLayoutModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    OverlayModule, PortalModule
  ],
  declarations: [MyFormComponent, SimpleCustomFormControlComponent, CustomMatFormControlComponent,
    DateTimePickerComponent, InlineEditComponent, SelectWithClearComponent, DropdownComponent, CustomSelectComponent, CustomSelectOptionComponent],
  exports: [RouterModule]
})
export class CustomFormControlsModule { }
