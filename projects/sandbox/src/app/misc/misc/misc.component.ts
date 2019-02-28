import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Type } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { IconService } from 'ags-hmi-library';

// https://jaxenter.com/dynamically-create-component-angular-142720.html
// https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d

@Component({
  selector: 'ags-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  @ViewChild('componentcontainer', { read: ViewContainerRef }) container: ViewContainerRef;

  scrollableCols = [
    { field: 'lastUpdated', header: 'Last Updated' },
    { field: 'userLogon', header: 'Last Updated By' },
    { field: 'lastUpdated', header: 'Last Updated' },
    { field: 'userLogon', header: 'Last Updated By' },
    { field: 'lastUpdated', header: 'Last Updated' },
    { field: 'userLogon', header: 'Last Updated By' }
  ];

  frozenCols = [
    { field: 'name', header: 'Name' }
  ];

  constructor(private resolver: ComponentFactoryResolver,
    public  iconService: IconService) { }

  ngOnInit() {
    this.iconService.init();
  }

  button1Click() {
    this.loadComponent('aaa');
  }

  button2Click() {
    this.loadComponentGeneric<MessageComponent>(MessageComponent, 'bbb');
  }

  loadComponent(data: string) {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    let componentRef = this.container.createComponent(factory);
    componentRef.instance.message = data;
  }

  loadComponentGeneric<T>(component: Type<T>, data: string) {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    let componentRef = this.container.createComponent(factory);
    (<MessageComponent><any>componentRef.instance).message = data;
  }
}
