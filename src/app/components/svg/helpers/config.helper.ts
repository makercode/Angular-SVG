import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class ConfigHelper {
  zoom!: any;

  constructor() { }

  dragable(d3svg:any, d3transformableGroup:any) {
    
    console.log("dragable");

    let width = 400, height = 600;

    this.zoom = d3.zoom()
      .scaleExtent([1, 5])
      .translateExtent([[0, 0], [width, height]]).on('zoom', (e) => {
        d3transformableGroup.attr('transform', e.transform);
      });


    this.initZoom(d3svg);

  }

  
  private initZoom(d3svg:any) {

    console.log("initZoom");
    d3svg.call(this.zoom);

  }

}
