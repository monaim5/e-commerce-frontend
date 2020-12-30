import {Byte} from "@angular/compiler/src/util";
import {Photo} from "./photo.model";

export interface Product {
  id: number;
  name: string;
  // designation: string;
  // price: number;
  // quantity: number;
  photos: Photo[];
  // available: boolean;
  // category: string;

}
