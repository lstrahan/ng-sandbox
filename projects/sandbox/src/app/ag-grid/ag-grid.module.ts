import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MyAgGridComponent } from './ag-grid/ag-grid.component';
import { RedComponentComponent } from './red-component/red-component.component';

const ROUTES: Routes = [
  { path: '', component: MyAgGridComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    AgGridModule.withComponents([RedComponentComponent])
  ],
  declarations: [MyAgGridComponent, RedComponentComponent],
  exports: [RouterModule]
})
export class MyAgGridModule { }