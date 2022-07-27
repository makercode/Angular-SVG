import { Component, OnInit, Input } from '@angular/core';
import { DepartmentInterface } from '../../business/department/interfaces/department.interface';

import { DivisionServiceInterface } from 'src/app/business/division/interfaces/services/division.service.interface';

import * as d3 from 'd3';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})

export class SvgComponent implements OnInit {

  overlabel: string = "division";
  departments!: DepartmentInterface[];

  mouseX: number= 0;
  mouseY: number= 0;

  constructor() {
  }

  @Input() divisionService!: DivisionServiceInterface;


  ngOnInit(): (void) {

    this.observeDepartments();

  }

  observeDepartments(): (void)  {

    // console.log('observeDepartments!');
    this.divisionService.getDepartments().subscribe(
      ( resultDepartments:DepartmentInterface[] ) => {
        this.departments = resultDepartments;
        console.log( resultDepartments );
      }
    )

  }

  onPathOver( title:string,departmentId:string ): (void)  {

    // console.log('onPathOver!');
    this.overlabel = title;
    this.divisionService.activeOveredDepartment(departmentId);

  }

  onPathOut( departmentId:string ): (void)  {

    // console.log('onPathOut!');
    d3.select('.tooltip').style('left','-300px');
    this.divisionService.inactiveOveredDepartment(departmentId);

  }

  onPathMouseMove ( event: MouseEvent ): (void) {

    // console.log('onPathMove!');
    this.mouseX = event.x;
    this.mouseY = event.y;
    d3.select('.tooltip').style('top', ( this.mouseY+10 ) + 'px').style('left',(this.mouseX+10) + 'px');

  }

  onPathClick( departmentId:string ): (void)  {

    // console.log('onPathClick!');
    this.divisionService.toggleSelectedDepartment(departmentId);

  }

}
