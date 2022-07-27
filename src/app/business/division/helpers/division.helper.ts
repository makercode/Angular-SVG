import { Injectable } from '@angular/core';
import { DivisionInterface } from '../interfaces/division.interface';

@Injectable({
  providedIn: 'root'
})
export class DivisionHelper {

  constructor() { }

  getDepartmentIndexById ( departments:DivisionInterface[] , departmentId:string ): number {
    const departmentIndex:number = departments.findIndex(department => {
      return department.id === departmentId;
    });
    return departmentIndex;

  }
  getDepartmentIsSelectedValue ( departments:DivisionInterface[] , departmentId:string ): boolean {
    let departmentIsSelectedValue:boolean = departments.find(item => item.id === departmentId)?.selected!;
    return departmentIsSelectedValue;
  }

}
