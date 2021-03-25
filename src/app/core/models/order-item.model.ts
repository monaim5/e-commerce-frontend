/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {Product} from "./product.model";
import {Order} from "./order.model";

export interface OrderItem {
  id: number;
  quantity: number;
  product: Product;
  order: Order;
}
