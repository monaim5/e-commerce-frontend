/**
 * This class has genearate by ecommerce-mda
 * Author: monaim
 */
import {Promo} from './promo.model';
import {FormControl, FormGroup} from '@angular/forms';

export interface PromoType {
  id: number;
  name: string;
  description: string;
  promos: Promo[];

}

export class PromoTypeModel {
  fields: Array<keyof PromoType> = ['id', 'name', 'description', 'promos'];

  static getFormGroup(data?: PromoType): FormGroup {
    return new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      description: new FormControl(data.description),
      // promos: new FormGroup({id: new FormControl()}),
    });
  }
}
