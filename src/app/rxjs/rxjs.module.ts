import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CustomerService } from '../customer.service';

const ROUTES: Routes = [
  { path: '', component: RxjsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
  declarations: [RxjsComponent],
  providers: [CustomerService],
  exports: [RouterModule]
})
export class RxjsModule { }