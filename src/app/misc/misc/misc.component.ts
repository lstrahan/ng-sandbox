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

  ngOnInit() {
    console.log('\n\n\n');

    let jan1 = moment.utc('1900-01-01T00:00:00');

    console.log(`jan1 initial value = ${jan1.utc().toISOString()}`);

    let jan2 = jan1.utc().add(1, 'days');

    console.log(`:\> jan2 = jan1.add('days', 1)`);
    console.log(`jan1 = ${jan1.utc().toISOString()}`);
    console.log(`jan2 = ${jan2.utc().toISOString()}`);

    let jan3 = jan2.utc().add(1, 'days');

    console.log(`:\> jan3 = jan2.add('days', 1)`);
    console.log(`jan1 = ${jan1.utc().toISOString()}`);
    console.log(`jan2 = ${jan2.utc().toISOString()}`);
    console.log(`jan3 = ${jan3.utc().toISOString()}`);

    console.log('\nusing clone()\n\n');

    jan1 = moment.utc('1900-01-01T00:00:00');

    console.log(`jan1 initial value = ${jan1.utc().toISOString()}`);

    jan2 = jan1.utc().clone().add(1, 'days');

    console.log(`:\> jan2 = jan1.clone().add('days', 1)`);
    console.log(`jan1 = ${jan1.utc().toISOString()}`);
    console.log(`jan2 = ${jan2.utc().toISOString()}`);

    jan3 = jan2.utc().clone().add(1, 'days');

    console.log(`:\> jan3 = jan2.clone().add('days', 1)`);
    console.log(`jan1 = ${jan1.utc().toISOString()}`);
    console.log(`jan2 = ${jan2.utc().toISOString()}`);
    console.log(`jan3 = ${jan3.utc().toISOString()}`);
    console.log('\n\n\n');
  }

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
