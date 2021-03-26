import {Photo} from './photo.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartItem} from './cart-item.model';
import {OrderItem} from './order-item.model';
import {Category} from './category.model';
import {Promo} from './promo.model';

// export const productFormFields = (categories: Category[], product?: Product): FieldConfig[] => [
//   {
//     name: 'title', type: 'input', inputType: 'text', label: 'Title', value: product?.title,
//     validations: [
//       {
//         name: 'required',
//         validator: Validators.required,
//         message: 'Name Required'
//       }
//     ]},
//   {
//     name: 'categoryId', type: 'select', label: 'Category',
//     value: product?.categoryId.toString(),
//     options: (categories)
//       ? categories.map((cat: Category) => ({value: cat.id.toString(), viewValue: cat.name}))
//       : [{value: '0', viewValue: 'No category'}]
//   },
//   {
//     name: 'designation', type: 'input', inputType: 'text', label: 'Designation', value: product?.designation
//   },
//   {
//     name: 'description', type: 'textarea', label: 'Description', value: product?.description
//   },
//   {
//     name: 'price', type: 'input', inputType: 'number', label: 'Price', value: product?.grossPrice
//   },
//   {
//     name: 'quantity', type: 'input', inputType: 'number', label: 'Quantity', value: product?.quantity
//   },
//   {
//     name: 'available', type: 'checkbox', label: 'Available', value: product?.available
//   },
//   // {
//   //   type: 'button', label: 'Save', inputType: 'submit'
//   // }
// ];

export interface Product {
  id?: number;
  title?: string;
  designation?: string;
  description?: string;
  grossPrice?: number;
  sales?: number;
  quantity?: number;
  available?: boolean;
  VATRate?: number;
  rate?: number;
  netPrice?: number;
  photos?: Photo[];
  cartItems?: CartItem[];
  orderItems?: OrderItem[];
  category?: Category;
  promo?: Promo;

}

export class ProductModel {
  fields: Array<keyof Product> = ['id', 'title', 'description', 'designation', 'available', 'rate',
                                  'grossPrice', 'netPrice', 'VATRate',
                                  'quantity', 'sales', 'promo', 'category'];

  static getFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, [Validators.required, Validators.min(5)]),
      description: new FormControl(),
      designation: new FormControl(),
      available: new FormControl(),
      rate: new FormControl(),
      grossPrice: new FormControl(),
      netPrice: new FormControl(),
      VATRate: new FormControl(),
      quantity: new FormControl(),
      sales: new FormControl(),
      promo: new FormGroup({id: new FormControl()}),
      category: new FormGroup({id: new FormControl()}),
    });
  }
}
