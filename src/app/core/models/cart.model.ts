/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {CartStatus} from "../enums/cart-status.enum";
import {User} from "./user.model";
import {CartItem} from "./cart-item.model";

export interface Cart {
  id: number;
  title: string;
  description: string;
  status: CartStatus;
  user: User;
  cartItems: CartItem[];
}
