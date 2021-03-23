import {Product} from "./product.model";

export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  product: Product[];
}
