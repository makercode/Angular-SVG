import { Component, Input, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/business/department/services/department.service';
import { DivisionServiceInterface } from 'src/app/business/division/interfaces/services/division.service.interface';
import { DepartmentInterface } from '../../business/department/interfaces/department.interface';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styleUrls: ['./todoist.component.css']
})
export class TodoistComponent implements OnInit {

  departments!: DepartmentInterface[];

  constructor( public departmentService: DepartmentService ) {
  }

  @Input() divisionService!: DivisionServiceInterface;

  ngOnInit(): (void) {

    this.observeDepartments();

  }

  observeDepartments(): (void)  {

    console.log('observeDepartments!');
    this.divisionService.getDepartments().subscribe(
      ( resultDepartments:DepartmentInterface[] ) => {
        this.departments = resultDepartments;
        console.log( resultDepartments );
      }
    )

  }

  onTodoClick( departmentId:string ): (void)  {

    console.log('onPathClick!');
    this.divisionService.toggleSelectedDepartment(departmentId);

  }

  onTodoOver( departmentId:string ): (void)  {

    // console.log('onPathOver!');
    this.divisionService.activeOveredDepartment(departmentId);

  }

  onTodoOut( departmentId:string ): (void)  {

    // console.log('onPathOut!');
    this.divisionService.inactiveOveredDepartment(departmentId);

  }

}
