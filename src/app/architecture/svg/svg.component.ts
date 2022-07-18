import { Component, OnInit } from '@angular/core';
import { DepartmentInterface } from '../../business/department/interfaces/department.interface';
import { DepartmentService } from '../../business/department/services/department.service';

import * as d3 from 'd3';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
  providers: [ DepartmentService ]
})

export class SvgComponent implements OnInit {
  overlabel: string = "deparment";
  departments: DepartmentInterface[];
  mouseX: number= 0;
  mouseY: number= 0;

  constructor( private departmentService: DepartmentService ) {
    this.departments = [
      {
        id: "",
        title: "",
        transform: "",
        data: "",
        selected: false
      }
    ];
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


  onPathMouseMove: { (event: MouseEvent): void } = (event: MouseEvent) => {
    console.log('onPathMove!');
    // console.log(event.screenX);
    // console.log(event.screenY);
    this.mouseX = event.x;
    this.mouseY = event.y;
    d3.select('.tooltip').style('top', ( this.mouseY+10 ) + 'px').style('left',(this.mouseX+10) + 'px');
  }

  onPathClick( departmentId:string ) {
    this.departmentService.toggleSelectedDistrict(departmentId).then( ( departments: DepartmentInterface[] ) => {
      this.departments = departments;
      console.log(this.departments);
    });
    console.log('onPathClick!');
  }

}
