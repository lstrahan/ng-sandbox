import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { MessageComponent } from './message/message.component';
import { MiscComponent } from './misc/misc.component';
import { MultiPartComponent, MultiPartTitleComponent, MultiPartContentComponent } from './multi-part/multi-part.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';


const ROUTES: Routes = [
  { path: '', component: MiscComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  declarations: [MiscComponent, MessageComponent, MultiPartComponent, MultiPartTitleComponent,
    MultiPartContentComponent, PasswordGeneratorComponent],
  entryComponents: [MessageComponent],
  exports: [RouterModule]
})
export class MiscModule { }
