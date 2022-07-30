import { Component, OnInit, Input } from '@angular/core';

import { DivisionInterface } from '../../business/division/interfaces/division.interface';
import { DivisionServiceInterface } from 'src/app/business/division/interfaces/services/division.service.interface';

import { ConfigHelper } from './helpers/config.helper';

import * as d3 from 'd3';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})

export class SvgComponent implements OnInit {

  overlabel: string = "division";
  divisions!: DivisionInterface[];

  mouseX: number= 0;
  mouseY: number= 0;

  constructor( public configHelper: ConfigHelper ) {
  }

  @Input() divisionService!: DivisionServiceInterface;


  ngOnInit(): (void) {

    this.observeDivisions();
    this.startSvgConfig();

  }

  observeDivisions(): (void)  {

    // console.log('observeDivisions!');
    this.divisionService.getDivisions().subscribe(
      ( resultDivisions:DivisionInterface[] ) => {
        this.divisions = resultDivisions;
        console.log( resultDivisions );
      }
    )

  }

  startSvgConfig(): void {

    // console.log('startSvgConfig!');
    let d3svg = d3.select('svg');
    let d3transformableGroup = d3.select('svg g.transformable');
    this.configHelper.dragable( d3svg, d3transformableGroup );

  }

  onPathOver( title:string,divisionId:string ): (void)  {

    // console.log('onPathOver!');
    this.overlabel = title;
    this.divisionService.activeOveredDivision(divisionId);

  }

  onPathOut( divisionId:string ): (void)  {

    // console.log('onPathOut!');
    d3.select('.tooltip').style('left','-300px');
    this.divisionService.inactiveOveredDivision(divisionId);

  }

  onPathMouseMove ( event: MouseEvent ): (void) {

    // console.log('onPathMove!');
    this.mouseX = event.x;
    this.mouseY = event.y;
    d3.select('.tooltip').style('top', ( this.mouseY+10 ) + 'px').style('left',(this.mouseX+10) + 'px');

  }

  onPathClick( divisionId:string ): (void)  {

    // console.log('onPathClick!');
    this.divisionService.toggleSelectedDivision(divisionId);

  }

}
