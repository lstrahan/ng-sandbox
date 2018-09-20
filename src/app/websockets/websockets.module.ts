import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule, MatRadioModule } from '@angular/material';
import { WebSocketSubjectService } from './web-socket-subject.service';
import { WebSocketSubjectClientComponent } from './web-socket-subject-client/websocket-client.component';
import { ContainerComponent } from './container/container.component';
import { SocketioClientComponent } from './socketio-client/socketio-client.component';
import { SocketIoService } from './socket-io.service';

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
  declarations: [WebSocketSubjectClientComponent, ContainerComponent, SocketioClientComponent],
  providers: [WebSocketSubjectService, SocketIoService],
  exports: [RouterModule]
})
export class WebsocketsModule { }