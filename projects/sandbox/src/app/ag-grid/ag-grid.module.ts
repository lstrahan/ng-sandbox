import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { MyAgGridComponent } from './ag-grid/ag-grid.component';
import { MyGridComponent } from './my-grid-component/my-grid.component';

const ROUTES: Routes = [
  { path: '', component: MyAgGridComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MaterialModule,
    AgGridModule.withComponents([MyGridComponent]),
    FlexLayoutModule
  ],
  declarations: [MyAgGridComponent, MyGridComponent],
  exports: [RouterModule]
})
export class MyAgGridModule { }
