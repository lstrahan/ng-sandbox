import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'ags-contextual-action-bar',
  templateUrl: './contextual-action-bar.component.html',
  styleUrls: ['./contextual-action-bar.component.css']
})
export class ContextualActionBarComponent implements OnInit {

  @ViewChild('componentcontainer', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('menucontainer', { read: ViewContainerRef }) menucontainer: ViewContainerRef;
  @Input() sidenav: MatSidenav;
  @Input() title: string;

  get submenu() {
    return this.toolBarService.submenu;
  }

  constructor(private resolver: ComponentFactoryResolver,
    private toolBarService: ToolbarService) { }

  ngOnInit() {
    // const factory = this.resolver.resolveComponentFactory(this.toolBarService.submenu);
    // this.menucontainer.createComponent(factory);
  }

}
