import { AreaInterface } from "../area/area.interface";
import { ElementInterface } from "../element/element.interface";


export interface DivisionInterface  extends ElementInterface, AreaInterface {
  id: string,
  title: string,
  transform: string,
  data: string,
  selected: boolean,
  overed: boolean
}
