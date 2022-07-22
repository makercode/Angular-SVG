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

  ngOnInit(): (void) {

    this.observeDepartments();

  }

  observeDepartments(): (void)  {

    console.log('observeDepartments!');
    this.departmentService.getDepartments().subscribe(
      ( resultDepartments:DepartmentInterface[] ) => {
        this.departments = resultDepartments;
        console.log( resultDepartments );
      }
    )

  }

  onPathOver( title:string ): (void)  {

    console.log('onPathOver!');
    this.overlabel = title;

  }

  onPathOut(): (void)  {

    console.log('onPathOut!');
    d3.select('.tooltip').style('left','-300px');

  }

  onPathMouseMove ( event: MouseEvent ): (void) {

    console.log('onPathMove!');
    this.mouseX = event.x;
    this.mouseY = event.y;
    d3.select('.tooltip').style('top', ( this.mouseY+10 ) + 'px').style('left',(this.mouseX+10) + 'px');

  }

  onPathClick( departmentId:string ): (void)  {

    console.log('onPathClick!');
    this.departmentService.toggleSelectedDepartment(departmentId);

  }

}
