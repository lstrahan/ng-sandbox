import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import io from 'socket.io-client';

@Injectable()
export class SocketIoService {

  private socket: WebSocket;
  private serverUrl: string

  public init(serverUrl: string): void {
    this.serverUrl = serverUrl;

    console.log('SocketIoService::init()', serverUrl);
    // this.socket = io(serverUrl);
    // this.socket.on('connect', () => console.log('SocketIoService connect'));
    // this.socket.on('message', (msg) => console.log('SocketIoService message'));
    // this.socket.on('event', (data) => console.log('SocketIoService event', data));
    // this.socket.on('disconnect', () => console.log('SocketIoService disconnect'));
    // this.socket.send('asdadadasd');

    setInterval(() => {
      if (!this.socket || this.socket.readyState == WebSocket.CLOSED) {
        this.socket = null;
        this.connect();
      }
    }, 5000);
  }

  connect() {
    console.log('SocketIoService::connect()');
    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.onopen = (event) => {
      console.log('onopen', event);
      this.socket.onmessage = (event) => console.log('onmessage', event.data);
      this.socket.onerror = (event) => console.log('onmessage', event);
      this.socket.onclose = (event) => console.log('onclose', event);
    }
  }
}