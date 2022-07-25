import { ElementInterface } from '../../division/element/element.interface';
import { DivisionInterface } from '../../division/interfaces/division.interface'
export interface DepartmentInterface extends DivisionInterface, ElementInterface {
  id: string,
  title: string,
  transform: string,
  data: string,
  selected: boolean,
  overed: boolean
}
