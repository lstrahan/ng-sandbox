import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Type, AfterViewInit } from '@angular/core';
import moment from 'moment-es6';
import { MessageComponent } from '../message/message.component';
import { ToolbarService } from 'src/app/library/toolbar.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit, AfterViewInit {

  @ViewChild('componentcontainer', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('button1') submenu: HTMLButtonElement;

  constructor(private resolver: ComponentFactoryResolver,
    private toolBarService: ToolbarService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    // this.toolBarService.setSubmenu(MessageComponent);
  }

  button1Click() {
    this.loadComponent(MessageComponent);
  }

  button2Click() {
    this.loadComponent(MessageComponent);
  }

  loadComponent<T>(component: Type<T>) {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    this.container.createComponent(factory);
  }
}
