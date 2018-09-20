import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-socketio-client',
  templateUrl: './socketio-client.component.html',
  styleUrls: ['./socketio-client.component.scss']
})
export class SocketioClientComponent implements OnInit {

  @Input() name: string;
  output: string;
  onMessage$: Subscription;
  alive: boolean = true;
  get isConnected(): boolean {
    return this.onMessage$ ? !this.onMessage$.closed : false;
  }

  constructor(private socketIoService: SocketIoService) { }

  ngOnInit() {
    this.alive = true;
  }

  toggleConnection() {
    if (this.isConnected) {
      this.disconnect();
    } else {
      this.connect();
    }
  }

  ngOnDestroy() {
    console.log('SocketioClientComponent::ngOnDestroy()');
    this.alive = false;
    this.disconnect();
  }

  connect() {
    console.log('SocketioClientComponent::connect()');
    // this.onMessage$ = this.socketIoService.onMessage()
    //   //.pipe(takeWhile(() => this.alive))
    //   .subscribe(
    //   {
    //     next: (res) => this.output = `received msg ${res}`,
    //     complete: () => console.log('COMPLETE')
    //   });
  }

  disconnect() {
    if (this.isConnected) {
      console.log('SocketioClientComponent::disconnect()');
      this.onMessage$.unsubscribe();
    }
    this.output = '';
  }

}
