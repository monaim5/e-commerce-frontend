/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {PaymentStatus} from "../enums/PaymentStatus.enum";
import {PaymentMode} from "../enums/PaymentMode.enum";
import {Order} from "./Order.model";

export interface Payment {
  id: number;
  transactionId: string;
  status: PaymentStatus;
  mode: PaymentMode;
  paymentDate: Date;
  amount: number;
  details: string;
  order: Order;

}
