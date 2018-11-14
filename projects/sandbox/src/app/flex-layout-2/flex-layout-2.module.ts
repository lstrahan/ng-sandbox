import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';

const ROUTES: Routes = [
  { path: '', component: FlexLayoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [FlexLayoutComponent],
  exports: [RouterModule]
})
export class FlexLayout2Module { }
