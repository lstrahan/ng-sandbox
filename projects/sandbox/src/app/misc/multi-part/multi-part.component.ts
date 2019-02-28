import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'ags-multi-part',
  templateUrl: './multi-part.component.html',
  styleUrls: ['./multi-part.component.scss']
})
export class MultiPartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'ags-multi-part-title',
  template: '<ng-content></ng-content>'
})
export class MultiPartTitleComponent { }

@Component({
  selector: 'ags-multi-part-content',
  template: '<ng-content></ng-content>'
})
export class MultiPartContentComponent { }
