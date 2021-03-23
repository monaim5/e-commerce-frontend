import {Product} from "./product.model";

export interface Photo {
  id: number;
  product: Product;
  title: string;
  url: string;
  fileId: number;

}
