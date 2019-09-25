import { Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import * as d3 from 'd3';
import { MatComponent } from '../mat-component/mat.component';

@Component({
  selector: 'ags-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class D3Component implements OnInit {

  circleInfos = [
    { x: 10, y: 10, color: 'red' },
    { x: 40, y: 40, color: 'yellow' },
    { x: 70, y: 70, color: 'blue' }
  ];

  mydrag = d3.drag();
  msg: string;

  @ViewChild('componentcontainer', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.initDragHandlers();
    this.initForeignObject();
    this.initCircles();
  }

  initDragHandlers() {
    let thisClass = this;
    // register drag with start/drag/end
    this.mydrag
      .on('start', function (d) {
        thisClass.msg = 'drag start';
        d3.select(this)
          .classed('active', true);   // apply highlight style
      })
      .on('drag', function (d: { x: number, y: number, color: string }) {
        thisClass.msg = `dragging: dx: ${d3.event.dx}, dy: ${d3.event.dy}, x: ${d3.event.x}, y: ${d3.event.y}`;
        d3.select(this)
          .attr('cx', d.x += d3.event.dx)   // update data in the object and set cx at the same time
          .attr('cy', d.y += d3.event.dy);
      })
      .on('end', function (d) {
        thisClass.msg = 'drag end';
        d3.select(this)
          .classed('active', false);  // remove highlight style
      });
  }

  /**
   * creates circles using databinding and attaches them to the drag
   * object
   */
  initCircles() {
    let sel = d3.select('g#chartContents').selectAll('circle').data(this.circleInfos);

    // not needed since this is executed only once but shown for completeness
    sel.exit().remove();

    sel.enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 10)
      .attr('fill', (d) => d.color)
      .call(<any>this.mydrag); // add drag behavior
  }

  initForeignObject() {
    let c = d3.select<HTMLCanvasElement, {}>('canvas').node();
    let ctx = c.getContext('2d');
    console.log(`length = ${ctx.measureText('sdlkhsdfkjlhsdhj').width}`);


    let fo = d3.select('g#chartContents').append<SVGForeignObjectElement>('foreignObject')
      .attr('x', 150).attr('y', 50).attr('width', 200);
    // fo.html(`
    // <h1>xxxxxx xxxxxx xxxx</h1>
    // <div matTooltip="sdfsfsdfsdfs" style="color: red; background: blue;">thisisred</div>
    // `);

    // const factory = this.resolver.resolveComponentFactory(MatComponent);
    // const componentRef = this.container.createComponent(factory);
    // fo.node().appendChild(componentRef.instance);

    // d3.select('g#chartContents').append('g').attr('app-mat-component', '')
    //   .attr('transform', 'translate(400,50)');

    // d3.select('g#chartContents').append('text')
    // .attr('x', 150).attr('y', 50).html('<span>XXXXXXXXXX</span>ZZZZZZZZZZ');

    // let x = d3.select('g#chartContents').append('rect')
    // .attr('x', 150).attr('y', 50).attr('width', 20).attr('height', 20)
    // .attr('fill', 'red');

    // let y = x.clone().attr('x', 200).attr('y', 50).attr('width', 20).attr('height', 20)
    // .attr('fill', 'blue');
    // let z = x.clone().attr('x', 250).attr('y', 50).attr('width', 20).attr('height', 20)
    // .attr('fill', 'green');
    // x.remove();
    // d3.select('g#chartContents').append(() => y.node());
    // d3.select('g#chartContents').append(() => z.node());

    // let el = d3.create('rect')
    //   .attr('x', 200).attr('y', 50).attr('width', 20).attr('height', 20)
    //   .attr('fill', 'red');
    //   d3.select('g#chartContents').append(() => el.node());
  }


}
