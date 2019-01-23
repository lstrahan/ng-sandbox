import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../primeng.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { SimpleCustomFormControlComponent } from './simple-custom-form-control/simple-custom-form-control.component';
import { CustomMatFormControlComponent } from './custom-mat-form-control/custom-mat-form-control.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { MyFormComponent } from './my-form/my-form.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

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
  ],
  declarations: [MyFormComponent, SimpleCustomFormControlComponent, CustomMatFormControlComponent,
    DateTimePickerComponent,
    InlineEditComponent],
  exports: [RouterModule]
})
export class CustomFormControlsModule { }
