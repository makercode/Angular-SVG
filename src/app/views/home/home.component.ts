import { Component, OnInit } from '@angular/core';

import { PeruDepartmentService } from '../../business/department/services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PeruDepartmentService ]
})
export class HomeComponent implements OnInit {

  constructor( public divisionService: PeruDepartmentService ) {
  }

  ngOnInit(): void {
  }

}
