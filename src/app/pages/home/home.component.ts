import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { DepartmentService } from '../../business/department/services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ DepartmentService ]
})
export class HomeComponent implements OnInit {

  constructor( public departmentService: DepartmentService ) {
  }

  ngOnInit(): void {
  }

}
