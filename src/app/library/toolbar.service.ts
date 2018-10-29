import { Injectable, Type } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  submenu: any;

  constructor() { }

  setSubmenu<T>(component: Type<T>) {
    this.submenu = component;
  }
}
