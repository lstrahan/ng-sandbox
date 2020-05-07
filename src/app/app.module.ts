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
import { ClassTransformerComponent } from './class-transformer/class-transformer.component';
import { NgxsModule } from '@ngxs/store';
import { CustomerState } from './ngxs/store/customer.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

const ROUTES: Routes = [
  { path: '', redirectTo: '/material', pathMatch: 'full' },
  {
    path: 'material',
    loadChildren: () => import('./material-demo/material-demo.module').then(m => m.MaterialDemoModule)
  },
  {
    path: 'formcontrols',
    loadChildren: () => import('./custom-form-controls/custom-form-controls.module').then(m => m.CustomFormControlsModule)
  },
  {
    path: 'flexlayout1',
    loadChildren: () => import('./flex-layout/flex-layout.module').then(m => m.FlexLayoutExampleModule)
  },
  {
    path: 'flexlayout2',
    loadChildren: () => import('./flex-layout-2/flex-layout-2.module').then(m => m.FlexLayout2Module)
  },
  {
    path: 'ag-grid',
    loadChildren: () => import('./ag-grid/ag-grid.module').then(m => m.MyAgGridModule)
  },
  {
    path: 'websockets',
    loadChildren: () => import('./websockets/websockets.module').then(m => m.WebsocketsModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  {
    path: 'class-transformer',
    component: ClassTransformerComponent
  },
  {
    path: 'd3',
    loadChildren: () => import('./d3/d3.module').then(m => m.D3Module)
  },
  {
    path: 'ngxs',
    loadChildren: () => import('./ngxs/ngxs-demo.module').then(m => m.NgxsDemoModule)
  },
  {
    path: 'misc',
    loadChildren: () => import('./misc/misc.module').then(m => m.MiscModule)
  },
  {
    path: 'sp500',
    loadChildren: () => import('./sp500/sp500.module').then(m => m.SP500Module)
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ClassTransformerComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MaterialDemoModule,
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    CustomerService,
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
