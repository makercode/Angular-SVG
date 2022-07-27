import { Subject } from "rxjs";
import { DivisionInterface } from "src/app/business/division/interfaces/division.interface";

export interface DivisionServiceInterface {

  getDivisions(): Subject<DivisionInterface[]>;
  toggleSelectedDivision(divisionId:string): Subject<DivisionInterface[]>;
  activeOveredDivision(divisionId:string): Subject<DivisionInterface[]>;
  inactiveOveredDivision(divisionId:string): Subject<DivisionInterface[]>;

}
