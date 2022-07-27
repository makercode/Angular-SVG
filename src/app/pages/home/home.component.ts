import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '../../business/department/services/department.service';
import departmentsJson from 'src/app/business/department/assets/jsons/department.data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ DepartmentService ]
})
export class HomeComponent implements OnInit {

  constructor( public departmentService: DepartmentService ) {
    this.departmentService.setDepartments(departmentsJson);
  }

  ngOnInit(): void {
  }

}
