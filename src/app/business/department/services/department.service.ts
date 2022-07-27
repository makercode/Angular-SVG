import { Injectable } from '@angular/core';

import { DepartmentHelper } from './../helpers/department.helper';
import { DepartmentInterface } from '../interfaces/department.interface';
import departmentsJson from '../assets/jsons/department.data.json';

import { Observer, Subject, BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: DepartmentInterface[] = [{} as DepartmentInterface];
  public departmentObserver: Subject<DepartmentInterface[]> = new BehaviorSubject( this.departments );

  private departmentIsSelectedValue: boolean = false;
  private departmentIndex: number = 0;

  constructor( private departmentHelper: DepartmentHelper ) {
  }

  getDepartments(): Subject<DepartmentInterface[]> {

    console.log("getDepartments");
    this.departmentObserver.subscribe({
      next( departments ) {
        return departments;
      },
      complete() { console.log('Finished sequence'); }
    });
    this.departmentObserver.next(this.departments);
    return this.departmentObserver;

  }

  setDepartments( departmentsJson:DepartmentInterface[] ): Subject<DepartmentInterface[]> {

    console.log("setDepartments");
    this.departments = departmentsJson;
    this.departmentObserver.next(this.departments);
    return this.departmentObserver;

  }

  toggleSelectedDepartment( departmentId:string ): Subject<DepartmentInterface[]> {

    console.log("toggleSelectedDepartment");
    let dhelper = this.departmentHelper;

    this.departmentIsSelectedValue  = dhelper.getDepartmentIsSelectedValue( this.departments, departmentId);
    this.departmentIndex            = dhelper.getDepartmentIndexById( this.departments, departmentId);
    this.departments[this.departmentIndex].selected  = !this.departmentIsSelectedValue;
    this.departmentObserver.next(this.departments);

    return this.departmentObserver;

  }

  activeOveredDepartment( departmentId:string ): Subject<DepartmentInterface[]> {

    console.log("activeOveredDepartment");
    let dhelper = this.departmentHelper;

    this.departmentIndex            = dhelper.getDepartmentIndexById( this.departments, departmentId);
    this.departments[this.departmentIndex].overed  = true;
    this.departmentObserver.next(this.departments);

    return this.departmentObserver;
  }

  inactiveOveredDepartment( departmentId:string ): Subject<DepartmentInterface[]> {

    console.log("inactiveOveredDepartment");
    let dhelper = this.departmentHelper;

    this.departmentIndex            = dhelper.getDepartmentIndexById( this.departments, departmentId);
    this.departments[this.departmentIndex].overed  = false;
    this.departmentObserver.next(this.departments);

    return this.departmentObserver;
  }

}
