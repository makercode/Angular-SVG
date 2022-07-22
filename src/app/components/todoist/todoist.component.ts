import { Component, OnInit } from '@angular/core';
import { DepartmentInterface } from '../../business/department/interfaces/department.interface';
import { DepartmentService } from '../../business/department/services/department.service';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styleUrls: ['./todoist.component.css']
})
export class TodoistComponent implements OnInit {

  departments: DepartmentInterface[];

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

  onItemClick( departmentId:string ): (void)  {

    console.log('onPathClick!');
    this.departmentService.toggleSelectedDepartment(departmentId);

  }

}
