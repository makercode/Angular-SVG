import { DepartmentInterface } from '../../interfaces/department.interface';
import { Injectable } from '@angular/core';
import departmentsJson from '../../assets/jsons/department.data.json';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: DepartmentInterface[] = departmentsJson;
  private departmentSelect: boolean = false;

  constructor() {
  }

  getDistricts(): Promise<DepartmentInterface[]> {
    return Promise.resolve(this.departments);
  }
  toggleSelectedDistrict(departmentId:string) {
    console.log("toggleSelectedDistrict");

    this.departmentSelect = this.departments.find(item => item.id === departmentId)?.selected!;

    const departmentIndex:number = this.departments.findIndex(department => {
      return department.id === departmentId;
    });

    this.departments[departmentIndex].selected = !this.departmentSelect;
    console.log(this.departmentSelect);
    return Promise.resolve(this.departments);
  }

}
