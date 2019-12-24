import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxsComponent } from './ngxs/ngxs.component';

const ROUTES: Routes = [
  { path: '', component: NgxsComponent }
];

@NgModule({
  declarations: [NgxsComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
  exports: [RouterModule]
})
export class NgxsModule { }
