import { Component, Input, OnInit } from '@angular/core';
import { DivisionInterface } from '../../../../business/division/interfaces/division.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() division!: DivisionInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
