import { Injectable } from '@angular/core';

import { DepartmentHelper } from './../../helpers/department.helper';
import { DepartmentInterface } from '../../interfaces/department.interface';
import departmentsJson from '../../assets/jsons/department.data.json';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: DepartmentInterface[] = departmentsJson;
  private departmentIsSelectedValue: boolean = false;
  private departmentIndex: number = 0;

  constructor( private departmentHelper: DepartmentHelper ) {
  }

  getDistricts(): Promise<DepartmentInterface[]> {
    return Promise.resolve(this.departments);
  }

  toggleSelectedDistrict(departmentId:string): Promise<DepartmentInterface[]> {
    console.log("toggleSelectedDistrict");
    let dhelper = this.departmentHelper;

    this.departmentIsSelectedValue  = dhelper.getDepartmentIsSelectedValue( this.departments, departmentId);
    this.departmentIndex            = dhelper.getDepartmentIndexById( this.departments, departmentId);

    this.departments[this.departmentIndex].selected  = !this.departmentIsSelectedValue;

    return Promise.resolve(this.departments);
  }

}
