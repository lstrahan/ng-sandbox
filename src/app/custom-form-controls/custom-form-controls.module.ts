import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { SimpleCustomFormControlComponent } from './simple-custom-form-control/simple-custom-form-control.component';
import { CustomMatFormControlComponent } from './custom-mat-form-control/custom-mat-form-control.component';
import { MyFormComponent } from './my-form/my-form.component';

const ROUTES: Routes = [
  { path: '', component: MyFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [MyFormComponent, SimpleCustomFormControlComponent, CustomMatFormControlComponent],
  exports: [RouterModule]
})
export class CustomFormControlsModule { }
