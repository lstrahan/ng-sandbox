import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { MockBackendInterceptor } from './library/mock-backend-interceptor';
import { CustomerService } from './library/customer.service';

import { AppComponent } from './app.component';

import { MaterialDemoModule } from './material-demo/material-demo.module';
import { FlexLayoutExampleModule } from './flex-layout/flex-layout.module';
import { FlexLayout2Module } from './flex-layout-2/flex-layout-2.module';
import { MyAgGridModule } from './ag-grid/ag-grid.module';
import { WebsocketsModule } from './websockets/websockets.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { D3Module } from './d3/d3.module';
import { IndexedDbModule } from './indexed-db/indexed-db.module';

const ROUTES: Routes = [
  { path: '', redirectTo: '/material', pathMatch: 'full' },
  {
    path: 'material',
    loadChildren: './material-demo/material-demo.module#MaterialDemoModule'
  },
  {
    path: 'formcontrols',
    loadChildren: './custom-form-controls/custom-form-controls.module#CustomFormControlsModule'
  },
  {
    path: 'flexlayout1',
    loadChildren: './flex-layout/flex-layout.module#FlexLayoutExampleModule'
  },
  {
    path: 'flexlayout2',
    loadChildren: './flex-layout-2/flex-layout-2.module#FlexLayout2Module'
  },
  {
    path: 'ag-grid',
    loadChildren: './ag-grid/ag-grid.module#MyAgGridModule'
  },
  {
    path: 'websockets',
    loadChildren: './websockets/websockets.module#WebsocketsModule'
  },
  {
    path: 'rxjs',
    loadChildren: './rxjs/rxjs.module#RxjsModule'
  },
  {
    path: 'd3',
    loadChildren: './d3/d3.module#D3Module'
  },
  {
    path: 'indexed-db',
    loadChildren: './indexed-db/indexed-db.module#IndexedDbModule'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MaterialDemoModule
  ],
  providers: [
    CustomerService,
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
