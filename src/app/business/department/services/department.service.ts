import { Injectable } from '@angular/core';

import { DepartmentHelper } from './../helpers/department.helper';
import { DepartmentInterface } from '../interfaces/department.interface';
import departmentsJson from '../assets/jsons/department.data.json';

import { Observer, Subject, BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: DepartmentInterface[] = departmentsJson;

  private departmentIsSelectedValue: boolean = false;
  private departmentIndex: number = 0;
  public departmentObserver: Subject<DepartmentInterface[]> = new BehaviorSubject( this.departments );

  constructor( private departmentHelper: DepartmentHelper ) {
  }

  getDepartments(): Subject<DepartmentInterface[]> {

    console.log("getSuscribeDepartments");
    this.departmentObserver.subscribe({
      next( departments ) {
        return departments;
      },
      complete() { console.log('Finished sequence'); }
    });
    this.departmentObserver.next(this.departments);
    return this.departmentObserver;

  }

  toggleSelectedDepartment(departmentId:string): Subject<DepartmentInterface[]> {

    console.log("toggleSelectedDepartment");
    let dhelper = this.departmentHelper;

    this.departmentIsSelectedValue  = dhelper.getDepartmentIsSelectedValue( this.departments, departmentId);
    this.departmentIndex            = dhelper.getDepartmentIndexById( this.departments, departmentId);

    this.departments[this.departmentIndex].selected  = !this.departmentIsSelectedValue;

    this.departmentObserver.next(this.departments);
    return this.departmentObserver;

  }

}
