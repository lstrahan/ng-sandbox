import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IndexedDbComponent } from './indexed-db/indexed-db.component';
import { CacheInterceptor } from './interceptor';

const ROUTES: Routes = [
  { path: '', component: IndexedDbComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
  declarations: [ IndexedDbComponent ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  exports: [RouterModule]
})
export class IndexedDbModule { }