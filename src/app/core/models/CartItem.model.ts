/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {Product} from "./product.model";
import {Cart} from "./Cart.model";

export interface CartItem {
  id: number;
  quantity: number;
  discount: number;
  product: Product;
  cart: Cart;

}
