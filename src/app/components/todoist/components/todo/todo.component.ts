import { Component, Input, OnInit } from '@angular/core';
import { DepartmentInterface } from '../../../../business/department/interfaces/department.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() department: DepartmentInterface = {
    id: "",
    title: "",
    transform: "",
    data: "",
    selected: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
