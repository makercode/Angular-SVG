import { Component, Input, OnInit } from '@angular/core';

import { DivisionServiceInterface } from 'src/app/business/division/interfaces/services/division.service.interface';
import { DivisionInterface } from '../../business/division/interfaces/division.interface';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styleUrls: ['./todoist.component.css']
})
export class TodoistComponent implements OnInit {

  divisions!: DivisionInterface[];

  constructor() {
  }

  @Input() divisionService!: DivisionServiceInterface;

  ngOnInit(): (void) {

    this.observeDivisions();

  }

  observeDivisions(): (void)  {

    console.log('observeDivisions!');
    this.divisionService.getDivisions().subscribe(
      ( resultDivisions:DivisionInterface[] ) => {
        this.divisions = resultDivisions;
        console.log( resultDivisions );
      }
    )

  }

  onTodoClick( divisionId:string ): (void)  {

    console.log('onPathClick!');
    this.divisionService.toggleSelectedDivision(divisionId);

  }

  onTodoOver( divisionId:string ): (void)  {

    // console.log('onPathOver!');
    this.divisionService.activeOveredDivision(divisionId);

  }

  onTodoOut( divisionId:string ): (void)  {

    // console.log('onPathOut!');
    this.divisionService.inactiveOveredDivision(divisionId);

  }

}
