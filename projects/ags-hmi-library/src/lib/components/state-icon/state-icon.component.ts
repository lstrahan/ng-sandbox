import { Component, OnInit, Input } from '@angular/core';

import { IconService } from '../../services/icon.service';


@Component({
  selector: 'ags-lib-state-icon',
  template: `
    <mat-icon [svgIcon]="iconService.getIconNameFromState(state)" [ngClass]="iconService.getStateClass(state)"></mat-icon>
    `,
    styleUrls: ['./state-icon.component.scss']
})
export class StateIconComponent implements OnInit {

  @Input() state: string;
  
  constructor(public iconService: IconService) { }

  ngOnInit() {
    this.iconService.init();
  }
}

@Component({
  selector: 'ags-lib-uci-state-icon',
  template: `
    <mat-icon [svgIcon]="iconService.getIconNameFromUciState(state)" [ngClass]="iconService.getUciStateClass(state)"></mat-icon>
    `
})
export class UciStateIconComponent implements OnInit {

  @Input() state: string;
  
  constructor(public iconService: IconService) { }

  ngOnInit() {
    this.iconService.init();
  }
}
