import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, retry } from 'rxjs/operators';
import { WebSocketSubject, WebSocketSubjectConfig  } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketSubjectService {

  private serviceUrl: string = '';

  private _wssConfig: WebSocketSubjectConfig<any>;
  private _wss: WebSocketSubject<any>;
  private get wss(): WebSocketSubject<any> {
    if (!this._wss || this._wss.closed) {
      console.log('WebSocketSubjectService: create WebSocketSubject');
      this._wss = new WebSocketSubject(this._wssConfig);
    } else {
      console.log('WebSocketSubjectService: WebSocketSubject already created');
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
        next: (e: CloseEvent) => { console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> closeObserver', e);
        console.log(this.wss.observers); }
      },
      openObserver: {
        next: (e: Event) => { console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> openObserver', e); }
      }
    };

    // this.serviceUrl = serviceUrl;
  }

  getMessages(): Observable<string> {
    return this.wss.pipe(
      tap(res => console.log('WebSocketSubjectService::getMessages() received a message', res)),
      retry(),
      map(res => res) // this can be used to modify the incoming message
    );
  }

  sendMessage(msg) {
    this.wss.next(msg);
  }
}
