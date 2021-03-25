import {Product} from './product.model';
import {FieldConfig} from '../../shared/field.interface';
import {Validators} from '@angular/forms';
import {Banner} from './banner.model';
import {PromoType} from './promo-type.model';

// export interface PromoType {
//   name: string;
//   description: string;
// }

export interface Promo {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  discountAmount: number;
  active: boolean;
  products?: Product[];
  promoType?: PromoType;
  banners?: Banner[];
}
export const promoTypeFormFields = (promoType?: PromoType) => [
  {
    name: 'name', type: 'input', label: 'Name', value: promoType?.name
  },
  {
    name: 'description', type: 'textarea', label: 'Description', value: promoType?.description
  }
];
export const promoFormFields = (promoTypes: PromoType[], promo?: Promo): FieldConfig[] => [
  {
    name: 'id', type: 'input', hidden: true, value: promo?.id
  },
  {
    name: 'title', type: 'input', label: 'Title', value: promo?.title
  },
  {
    type: 'rangePicker', startDate: 'startDate', endDate: 'endDate', label: 'Promo date',
    startDateValue: promo?.startDate, endDateValue: promo?.endDate
  },
  {
    name: 'discountAmount', type: 'input', label: 'Discount Amount', inputType: 'number', value: promo?.discountAmount
  },
  {
    // name: 'promoType', type: 'select', label: 'Promo Type', value: promo?.promoType.id,
    name: 'promoType', type: 'select', label: 'Promo Type', value: '1',
    // options: promoTypes.map(promoT => ({value: promoT.name, viewValue: promoT.name})),
    options: [{value: '1', viewValue: '1'}, {value: '2', viewValue: '2'}],
    // validations: [{name: 'required', validator: Validators.required, message: 'Please specify a promo type'}]
  },
  {
    name: 'active', type: 'checkbox', label: 'Active', value: promo?.active
  }
];

