/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public appName: string;
  public headerTitle: BehaviorSubject<string>;
  public breadcrumb: BehaviorSubject<object>;
  private _headerPrimaryTitle = '';
  private _headerSubTitle = '';

  public set headerPrimaryTitle(value) {
    this._headerPrimaryTitle = value;
    this.titleService.setTitle(value + ' - ' + this.appName); // this is what gets displayed in the browser tab
    this.updateHeaderTitle();
  }

  public set headerSubTitle(value) {
    this._headerSubTitle = value;
    this.updateHeaderTitle();
    this.updateBreadcrumb();
  }

  constructor(private titleService: Title) {
    this.headerTitle = new BehaviorSubject<string>(titleService.getTitle());
    this.breadcrumb = new BehaviorSubject<object>({});
  }

  init(appName: string) {
    this.appName = appName;
  }

  // see https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
  updateHeaderTitle() {
    let title = this._headerPrimaryTitle;
    if (this._headerSubTitle) {
      title += ' [' + this._headerSubTitle + ']';
    }
    this.headerTitle.next(title);
  }

  /*
   * Updates the breadcrumb when the title is updated.
   *
   * @returns {object} An object consisting of the primary title, and the subtitle
   */
  updateBreadcrumb() {
    this.breadcrumb.next({
      primaryTitle: this._headerPrimaryTitle,
      subtitle: this._headerSubTitle,
    });
  }
}
