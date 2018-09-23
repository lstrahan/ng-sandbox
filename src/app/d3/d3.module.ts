import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { D3Component } from './d3/d3.component';

const ROUTES: Routes = [
  { path: '', component: D3Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
  declarations: [D3Component],
  exports: [RouterModule]
})
export class D3Module { }
