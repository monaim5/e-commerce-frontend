/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {User} from "./user.model";
import {OrderItem} from "./order-item.model";
import {Payment} from "./payment.model";

export interface Order {
  id: number;
  orderDate: Date;
  code: string;
  user: User;
  orderItems: OrderItem[];
  payments: Payment[];
}
