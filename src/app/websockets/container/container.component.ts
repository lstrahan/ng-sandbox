import { Component, OnInit } from '@angular/core';
import { WebSocketSubjectService } from '../web-socket-subject.service';
import { SocketIoService } from '../socket-io.service';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  echoServer: string = 'wss://echo.websocket.org';
  broadcastServer: string = 'ws://localhost:8080';
  isBroadcastServerAvailable: boolean = true;
  serverUrl: string = this.echoServer;


  constructor(private wssService: WebSocketSubjectService, private socketIoService: SocketIoService) { }

  ngOnInit() {
    this.wssService.init(this.serverUrl);
    // this.socketIoService.init(this.serverUrl);
  }

  changeConnection(event: MatRadioChange) {
    console.log('changeConnection', event.value);
    this.serverUrl = event.value
    this.wssService.init(this.serverUrl);
    // this.socketIoService.init(this.serverUrl);
  }

  sendMessage() {
    this.wssService.sendMessage(`test msg ${Date.now()}`);
  }

  isSocketOpen(url: string) {
    var webSocket = new WebSocket(url);
    webSocket.onopen = () => {
      this.isBroadcastServerAvailable = true;
      console.log('open');
    };
    webSocket.onerror = () => {
      this.isBroadcastServerAvailable = false;
      console.log('closed');
    };
  }
}