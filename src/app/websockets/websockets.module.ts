import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContainerComponent } from './container/container.component';
import { WebSocketSubjectService } from './web-socket-subject.service';
import { WebSocketSubjectClientComponent } from './web-socket-subject-client/websocket-client.component';

const ROUTES: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  declarations: [WebSocketSubjectClientComponent, ContainerComponent],
  providers: [
    WebSocketSubjectService
  ],
  exports: [RouterModule]
})
export class WebsocketsModule { }
