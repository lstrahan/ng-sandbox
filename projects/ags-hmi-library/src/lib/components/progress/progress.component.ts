import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'ags-lib-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

  export class ProgressComponent implements AfterViewInit {

    constructor(
      private logService: LogService
    ) {}

  ngAfterViewInit() {
    this.hideComponent();
  }

  hideComponent() {
    let el = document.getElementById('progressContainer');
    if (el) {
      el.style.display = 'none';
      this.logService.debug('set style of "progressContainer" to "none"');
    }
    else {
      this.logService.debug('unable to find element "progressContainer"');
    }
  }
}
