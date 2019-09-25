import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialControlsComponent, DialogContentComponent } from './material-controls/material-controls.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: MaterialControlsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [DialogContentComponent, MaterialControlsComponent],
  entryComponents: [DialogContentComponent],
  exports: [RouterModule, MaterialControlsComponent]
})
export class MaterialDemoModule { }
