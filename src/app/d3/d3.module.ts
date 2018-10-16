import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { D3Component } from './d3/d3.component';
import { MatComponent } from './mat-component/mat.component';

const ROUTES: Routes = [
  { path: '', component: D3Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MaterialModule
  ],
  declarations: [D3Component, MatComponent],
  exports: [RouterModule]
})
export class D3Module { }
