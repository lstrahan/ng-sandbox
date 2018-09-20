import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { WebSocketSubjectService } from '../web-socket-subject.service';

@Component({
  selector: 'app-web-socket-subject-client',
  templateUrl: './websocket-client.component.html',
  styleUrls: ['./websocket-client.component.scss']
})
export class WebSocketSubjectClientComponent implements OnInit, OnDestroy {

  @Input() name: string;
  output: string;
  getMessages$: Subscription;
  alive: boolean = true;
  get isConnected(): boolean {
    return this.getMessages$ ? !this.getMessages$.closed : false;
  }

  constructor(private wssService: WebSocketSubjectService) { }

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
    console.log('WebSocketSubjectClientComponent::ngOnDestroy()');
    this.alive = false;
    this.disconnect();
  }

  connect() {
    console.log('WebSocketSubjectClientComponent::connect()');
    this.getMessages$ = this.wssService.getMessages().pipe(takeWhile(() => this.alive)).subscribe(
      {
        next: (res) => this.output = `received msg ${res}`,
        complete: () => console.log('COMPLETE')
      });
  }

  disconnect() {
    if (this.isConnected) {
      console.log('WebSocketSubjectClientComponent::disconnect()');
      this.getMessages$.unsubscribe();
    }
    this.output = '';
  }
}