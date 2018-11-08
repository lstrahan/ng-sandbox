import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

import { MessageComponent } from './message/message.component';
import { MiscComponent } from './misc/misc.component';


const ROUTES: Routes = [
  { path: '', component: MiscComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MaterialModule
  ],
  providers: [],
  declarations: [MiscComponent, MessageComponent],
  entryComponents: [MessageComponent],
  exports: [RouterModule]
})
export class MiscModule { }
