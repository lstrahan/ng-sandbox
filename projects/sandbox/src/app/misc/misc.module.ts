import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { TableModule } from 'primeng/table';
import { AgsHmiLibraryModule } from 'ags-hmi-library';

import { MessageComponent } from './message/message.component';
import { MiscComponent } from './misc/misc.component';
import { MultiPartComponent, MultiPartTitleComponent, MultiPartContentComponent } from './multi-part/multi-part.component';


const ROUTES: Routes = [
  { path: '', component: MiscComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MaterialModule,
    TableModule,
    FlexLayoutModule,
    AgsHmiLibraryModule
  ],
  providers: [],
  declarations: [MiscComponent, MessageComponent, MultiPartComponent, MultiPartTitleComponent, MultiPartContentComponent],
  entryComponents: [MessageComponent],
  exports: [RouterModule]
})
export class MiscModule { }