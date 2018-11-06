/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/

import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  isLocalhost: boolean = false;
  isDevMode: boolean = false;

  constructor() {
    this.isLocalhost = window.location.hostname.toLocaleLowerCase() === 'localhost';
    this.isDevMode = isDevMode();
  }

  // displays in the console. will not display in a production build
  debug(...msg: any[]): void {
    if (!this.isDevMode) {
      return;
    }
    console.log(...msg);
  }

  // only display if running on localhost
  local(...msg: any[]): void {
    if (!this.isLocalhost) {
      return;
    }
    console.log(...msg);
  }

  info(...msg: any[]): void {
    console.log(...msg);
  }

  warn(...msg: any[]): void {
    console.warn(...msg);
  }

  error(...msg: any[]): void {
    console.error(...msg);
  }

  highlight(background: string, msg: string): void {
    console.log(`%c ${msg} `, `background: ${background}; color: #000; font-weight: bold;`);
  }
}
