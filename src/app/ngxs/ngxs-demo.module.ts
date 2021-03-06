import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { NgxsModule } from '@ngxs/store';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { CustomerState } from './store/customer.state';

const ROUTES: Routes = [
  { path: '', component: ComponentOneComponent }
];

@NgModule({
  declarations: [ComponentTwoComponent, ComponentOneComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxsModule.forFeature([CustomerState])
  ],
  exports: [RouterModule]
})
export class NgxsDemoModule { }
