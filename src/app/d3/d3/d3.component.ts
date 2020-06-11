import { Component, OnInit, ViewEncapsulation, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import * as d3 from 'd3';
import { MatComponent } from '../mat-component/mat.component';

@Component({
  selector: 'my-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class D3Component implements OnInit {

  circleInfos = [
    { x: 30, y: 30, color: 'red' },
    { x: 60, y: 60, color: 'yellow' },
    { x: 90, y: 90, color: 'blue' }
  ];

  mydrag = d3.drag();
  msg: string;

  @ViewChild('componentcontainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.initDragHandlers();
    this.initCircles();

    const svg = d3.select('svg');

    // svg.on('mousedown', () => { console.log('mousedown'); svg.on('mousemove', () => console.log('mousemove')); })
    //   .on('mouseup', () => { console.log('mouseup'); svg.on('mousemove', null); });

    // svg.on('mousedown', () => { console.log('mousedown.classed'); svg.on('mousemove.classed', () => console.log('mousemove.classed')); })
    //   .on('mouseup', () => { console.log('mouseup.classed'); svg.on('mousemove.classed', null); });
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

}
