import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  @ViewChild('componentcontainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    
  }

  button1Click() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.message = 'COMPONENT #1 was loaded!';
  }

  button2Click() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.message = 'COMPONENT #2 was loaded!';
  }
}
