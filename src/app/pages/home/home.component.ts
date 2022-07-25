import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { DepartmentInterface } from '../../business/department/interfaces/department.interface';
import { DepartmentService } from '../../business/department/services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ DepartmentService ]
})
export class HomeComponent implements OnInit {

  departments: DepartmentInterface[] = [
    {
      id: "",
      title: "",
      transform: "",
      data: "",
      selected: false,
      overed: false,
    }
  ];

  departmentsObserver: Subject<DepartmentInterface[]> = new BehaviorSubject( this.departments );

  constructor( public departmentService: DepartmentService ) {
    this.departmentsObserver = this.departmentService.getDepartments()
  }

  ngOnInit(): void {
  }

}
