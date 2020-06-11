import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'my-multi-part',
  templateUrl: './multi-part.component.html',
  styleUrls: ['./multi-part.component.scss']
})
export class MultiPartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'my-multi-part-title',
  template: '<ng-content></ng-content>'
})
export class MultiPartTitleComponent { }

@Component({
  selector: 'my-multi-part-content',
  template: '<ng-content></ng-content>'
})
export class MultiPartContentComponent { }
