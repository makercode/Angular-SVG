import { Subject } from "rxjs";
import { DepartmentInterface } from "src/app/business/department/interfaces/department.interface";

export interface DivisionServiceInterface {
  getDepartments(): Subject<DepartmentInterface[]>;
  toggleSelectedDepartment(departmentId:string): Subject<DepartmentInterface[]>;
  activeOveredDepartment(departmentId:string): Subject<DepartmentInterface[]>;
  inactiveOveredDepartment(departmentId:string): Subject<DepartmentInterface[]>;
}
