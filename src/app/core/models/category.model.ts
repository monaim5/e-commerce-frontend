import {Product} from './product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Category {
  id?: number;
  name?: string;
  description?: string;
  icon?: string;
  products?: Product[];

  getFormGroup(): FormGroup;
}


export class CategoryModel {
  fields: Array<keyof Category> = ['id', 'name', 'description', 'icon', 'products'];

  static getFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required, Validators.min(5)]),
      description: new FormControl(),
      icon: new FormControl(),
    });
  }
}
