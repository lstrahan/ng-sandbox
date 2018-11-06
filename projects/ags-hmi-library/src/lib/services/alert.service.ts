/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { WebSocketSubject, WebSocketSubjectConfig  } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private serviceUrl;
  private _wssConfig: WebSocketSubjectConfig<any>;
  private _wss: WebSocketSubject<any>;
  private get wss(): WebSocketSubject<any> {
    if (!this._wss || this._wss.closed) {
      console.log('AlertService: create WebSocketSubject');
      this._wss = new WebSocketSubject(this._wssConfig);
    } else {
      console.log('AlertService: WebSocketSubject already created');
    }
    return this._wss;
  }

  constructor() { }

  init(serviceUrl: string) {
    if (this._wss) {
      this._wss.unsubscribe();
      this._wss = null;
    }

    this._wssConfig = {
      url: serviceUrl,
      closeObserver: {
        next: (e: CloseEvent) => {
          console.log(`%c WEBSOCKET CLOSED `, `background: black; color: #fff; font-weight: bold;`, 'Attempting to reconnect...');
        }
      },
      openObserver: {
        next: (e: Event) => {
          console.log(`%c WEBSOCKET OPEN `, `background: green; color: #fff; font-weight: bold;`);
        }
      }
    };

    this.serviceUrl = serviceUrl;
  }

  getMessages(): Observable<any> {
    return this.wss.pipe(
      // Adds ability to reconnect a disconnected websocket
      // @see https://stackoverflow.com/a/44067972
      retry(),
      map(res => res) // this can be used to modify the incoming message
    );
  }

  sendMessage(msg) {
    this.wss.next(msg);
  }

}
