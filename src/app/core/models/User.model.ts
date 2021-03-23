/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {Cart} from './Cart.model';
import {UserStatus} from '../enums/UserStatus.enum';
import {Order} from './Order.model';

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
