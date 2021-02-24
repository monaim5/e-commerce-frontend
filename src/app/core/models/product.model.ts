import {Photo} from './photo.model';
import {Validators} from "@angular/forms";

export const productFormFields = (categories, product?) => [
  {
    name: 'title', type: 'input', inputType: 'text', label: 'Title', value: product?.name,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required'
      }
    ]},
  {
    name: 'categoryId', type: 'select', label: 'Category',
    value: product?.categoryId.toString(),
    options: categories.map(cat => ({value: cat.id.toString(), viewValue: cat.name}))
  },
  {
    name: 'designation', type: 'input', inputType: 'text', label: 'Designation', value: product?.designation
  },
  {
    name: 'description', type: 'textarea', label: 'Description', value: product?.description
  },
  {
    name: 'price', type: 'input', inputType: 'number', label: 'Price', value: product?.price
  },
  {
    name: 'quantity', type: 'input', inputType: 'number', label: 'Quantity', value: product?.quantity
  },
  {
    name: 'available', type: 'checkbox', label: 'Available', value: product?.available
  },
  // {
  //   type: 'button', label: 'Save', inputType: 'submit'
  // }
];

export interface Product {
  id: number;
  title: string;
  designation: string;
  description: string;
  price: number;
  sales?: number;
  quantity: number;
  available: boolean;
  photos: Photo[];
  categoryId: number;

}


