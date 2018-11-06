import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  pendingRequests: number = 0;
  containerName = 'progressContainer';
  element: HTMLElement = null;

  constructor(
    private logService: LogService) {
  }

  getElement() {
    if (this.element == null) {
      this.logService.debug('Default element for progress spinner = "' + this.containerName + '"');
      this.element = document.getElementById(this.containerName);
      
      if (!this.element) {
        this.logService.debug('Progress spinner element not found.  Ensure element is included in document.');
      }
    }

    return this.element;
  }

  setBusy(isBusy: boolean) {
    if (isBusy) {
      //Keep track of how many requests there have been to show the busy message.
      this.pendingRequests++;
      //If force is true show the busy message immediately.
      this.setVisible(true);
    }
    else {
      //Keep track of how many requests there have been to hide the busy message.
      if (this.pendingRequests > 0) {
        this.pendingRequests--;
      }

      //If there is no more outstanding busy requests or if force is true then hide the busy message.
      if (this.pendingRequests <= 0) {
        this.setVisible(false);
        this.pendingRequests = 0;
      }
    }
  }

  //Control the visibility of the busy message div.
  setVisible(isVisible: boolean) {
    try {
      if (isVisible) {
        this.getElement().style.display = 'flex';
      }
      else {
        this.getElement().style.display = 'none';
      }
    }
    catch(err) {
      this.logService.warn('Unable to display spinner.  Is "ags-lib-progress" component included?');
    }
  }
}
