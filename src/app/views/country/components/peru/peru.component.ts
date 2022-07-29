import { Component, OnInit } from '@angular/core';
import { PeruDepartmentService } from '../../../../business/department/services/peru/perudepartment.service';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css'],
  providers: [ PeruDepartmentService ]
})
export class PeruComponent implements OnInit {

  constructor( public divisionService: PeruDepartmentService ) {
  }

  ngOnInit(): void {
  }

}
