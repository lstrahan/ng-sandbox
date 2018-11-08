import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Type } from '@angular/core';
import { MessageComponent } from '../message/message.component';

// https://jaxenter.com/dynamically-create-component-angular-142720.html
// https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d

@Component({
  selector: 'ags-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  @ViewChild('componentcontainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() { }

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
