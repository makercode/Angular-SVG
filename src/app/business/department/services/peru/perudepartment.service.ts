import { Injectable } from '@angular/core';

import { DivisionHelper } from '../../../division/helpers/division.helper';
import { DepartmentInterface } from '../../interfaces/department.interface';
import peruDepartmentsJson from '../../assets/jsons/peru.department.data.json';

import { Subject, BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeruDepartmentService {

  private departments: DepartmentInterface[] = peruDepartmentsJson;
  private departmentObserver: Subject<DepartmentInterface[]> = new BehaviorSubject( this.departments );

  private departmentIsSelectedValue: boolean = false;
  private departmentIndex: number = 0;

  constructor( private divisionHelper: DivisionHelper ) {
  }

  getDivisions(): Subject<DepartmentInterface[]> {

    console.log("getSuscribeDepartments");
    this.departmentObserver.subscribe({
      next( departments: DepartmentInterface[] ) {
        return departments;
      },
      complete() { console.log('Finished sequence'); }
    });
    this.departmentObserver.next(this.departments);
    return this.departmentObserver;

  }

  toggleSelectedDivision( departmentId:string ): Subject<DepartmentInterface[]> {

    console.log("toggleSelectedDepartment");
    let dhelper = this.divisionHelper;

    this.departmentIsSelectedValue  = dhelper.getDepartmentIsSelectedValue( this.departments, departmentId);
    this.departmentIndex            = dhelper.getDepartmentIndexById( this.departments, departmentId);
    this.departments[this.departmentIndex].selected  = !this.departmentIsSelectedValue;
    this.departmentObserver.next(this.departments);

    return this.departmentObserver;

  }

  activeOveredDivision( departmentId:string ): Subject<DepartmentInterface[]> {

    console.log("activeOveredDepartment");
    let dhelper = this.divisionHelper;

    this.departmentIndex                             = dhelper.getDepartmentIndexById( this.departments, departmentId);
    this.departments[this.departmentIndex].overed    = true;
    this.departmentObserver.next(this.departments);

    return this.departmentObserver;

  }

  inactiveOveredDivision( departmentId:string ): Subject<DepartmentInterface[]> {

    console.log("inactiveOveredDepartment");
    let dhelper = this.divisionHelper;

    this.departmentIndex                             = dhelper.getDepartmentIndexById( this.departments, departmentId);
    this.departments[this.departmentIndex].overed    = false;
    this.departmentObserver.next(this.departments);

    return this.departmentObserver;

  }

}
