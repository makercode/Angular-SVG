import { Injectable } from '@angular/core';
import { DepartmentInterface } from '../interfaces/department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentHelper {

  constructor() { }

  getDepartmentIndexById ( departments:DepartmentInterface[] , departmentId:string ): number {
    const departmentIndex:number = departments.findIndex(department => {
      return department.id === departmentId;
    });
    return departmentIndex;

  }
  getDepartmentIsSelectedValue ( departments:DepartmentInterface[] , departmentId:string ): boolean {
    let departmentIsSelectedValue:boolean = departments.find(item => item.id === departmentId)?.selected!;
    return departmentIsSelectedValue;
  }

}
