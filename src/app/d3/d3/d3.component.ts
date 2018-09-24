import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {

  circleInfos = [
    { x: 10, y: 10, color: "red" },
    { x: 40, y: 40, color: "yellow" },
    { x: 70, y: 70, color: "blue" }
  ];

  mydrag = d3.drag();
  msg: string;

  constructor() { }

  ngOnInit() {
    this.initDragHandlers();
    this.initCircles();
  }

  initDragHandlers() {
    let thisClass = this;
    // register drag with start/drag/end
    this.mydrag
      .on("start", function (d) {
        thisClass.msg = 'drag start';
        d3.select(this)
          .classed("active", true);   // apply highlight style
      })
      .on("drag", function (d: { x: number, y: number, color: string }) {
        thisClass.msg = `dragging: dx: ${d3.event.dx}, dy: ${d3.event.dy}, x: ${d3.event.x}, y: ${d3.event.y}`;
        d3.select(this)
          .attr("cx", d.x += d3.event.dx)   // update data in the object and set cx at the same time
          .attr("cy", d.y += d3.event.dy);
      })
      .on("end", function (d) {
        thisClass.msg = 'drag end';
        d3.select(this)
          .classed("active", false);  // remove highlight style
      });
  }
  
  /**
   * creates circles using databinding and attaches them to the drag
   * object
   */
  initCircles() {
    let sel = d3.select("g#chartContents").selectAll(".mycircle").data(this.circleInfos);
  
    // not needed since this is executed only once but shown for completeness
    sel.exit().remove();
  
    sel.enter()
      .append("circle")
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("r", 10)
      .attr("fill", function (d) {
        return d.color;
      })
      .call(<any>this.mydrag); // add drag behavior
  }

}
