import { DepartmentInterface } from './../../interfaces/department.interface';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
  activeDepartment: string = '';

  constructor() { }

  @Input() department: DepartmentInterface = {
    id: "",
    title: "",
    transform: "",
    data: "",
  };

  ngOnInit(): void {
  }

}
