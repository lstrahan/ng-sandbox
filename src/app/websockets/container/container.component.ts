import { Component, OnInit } from '@angular/core';
import { WebSocketSubjectService } from '../web-socket-subject.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'my-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  wsServer: string = 'ws://localhost:8080';

  constructor(private wssService: WebSocketSubjectService) { }

  ngOnInit() {
    this.wssService.init(this.wsServer);
  }

  sendMessage() {
    this.wssService.sendMessage(`test msg ${Date.now()}`);
  }
}
