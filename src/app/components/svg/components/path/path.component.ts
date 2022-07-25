import { DepartmentInterface } from '../../../../business/department/interfaces/department.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-path]',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {

  constructor() { }

  @Input() department!: DepartmentInterface;

  ngOnInit(): void {
  }

}
