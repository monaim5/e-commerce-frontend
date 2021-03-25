/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {PaymentStatus} from "../enums/payment-status.enum";
import {PaymentMode} from "../enums/payment-mode.enum";
import {Order} from "./order.model";

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
