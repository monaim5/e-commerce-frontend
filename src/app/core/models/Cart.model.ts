/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {CartStatus} from "../enums/CartStatus.enum";
import {User} from "./User.model";
import {CartItem} from "./CartItem.model";

export interface Cart {
  id: number;
  title: string;
  description: string;
  status: CartStatus;
  user: User;
  cartItems: CartItem[];
}
