import { Component, OnInit } from '@angular/core';
import { DepartmentInterface } from './interfaces/department.interface';
import { DepartmentService } from './services/department/department.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
  providers: [ DepartmentService ]
})

export class SvgComponent implements OnInit {
  overlabel: string = "deparment";
  departments: DepartmentInterface[] = [
    {
      id: "",
      title: "",
      transform: "",
      data: ""
    }
  ];
  mouseX: number=0;
  mouseY: number=0;

  constructor( private departmentService: DepartmentService ) {
  }

  ngOnInit(): void {
    this.departmentService.getDistricts().then( ( departments: DepartmentInterface[] ) => {
      this.departments = departments;
      console.log(this.departments);
    });
  }


  onPathOver( title:string ) {
    this.overlabel = title;
    console.log('onPathOver!');
  }

  onPathOut() {
    console.log('onPathOut!');
    d3.select('.tooltip').style('left','-300px');
    console.log('onPathOut!');
  }


  onMouseMove: { (event: MouseEvent): void } = (event: MouseEvent) => {
    console.log(event.screenX);
    console.log(event.screenY);
    this.mouseX = event.x;
    this.mouseY = event.y;
    d3.select('.tooltip').style('top', ( this.mouseY+10 ) + 'px').style('left',(this.mouseX+10) + 'px');
    console.log('onPathMove!');
  }

  onPathClick( departmentId:string ) {
    console.log('onPathClick!');
  }

}
