/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {Cart} from './cart.model';
import {UserStatus} from '../enums/user-status.enum';
import {Order} from './order.model';

export interface User {
  id: number;
  carts: Cart[];
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  lastLogin: Date;
  admin: boolean;
  vendor: boolean;
  customer: boolean;
  status: UserStatus;
  order: Order[];

}
