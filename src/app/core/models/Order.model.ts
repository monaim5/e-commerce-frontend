/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {User} from "./User.model";
import {OrderItem} from "./OrderItem.model";
import {Payment} from "./Payment.model";

export interface Order {
  id: number;
  orderDate: Date;
  code: string;
  user: User;
  orderItems: OrderItem[];
  payments: Payment[];
}
