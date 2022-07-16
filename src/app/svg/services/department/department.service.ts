import { DepartmentInterface } from '../../interfaces/department.interface';
import { Injectable } from '@angular/core';
import departments from '../../assets/jsons/department.data.json';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: DepartmentInterface[] = departments;

  constructor() { }

  getDistricts(): Promise<DepartmentInterface[]> {
    // Function to get districts - necessary
    return Promise.resolve(this.departments);
  }
  /*
  getDistrict(id:string): Promise<DistrictInterface> {
    // Function to get district - not necessary
  }*/

}
