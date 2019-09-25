import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SP500Component } from './sp500/sp500.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: SP500Component }
];

@NgModule({
  declarations: [SP500Component],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class SP500Module { }
