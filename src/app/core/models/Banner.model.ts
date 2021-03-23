/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {Promo} from './promo.model';

export interface Banner {
  id: number;
  title: string;
  url: string;
  fileId: string;
  promo: Promo;

}
