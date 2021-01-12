
export interface PromoType {
  name: string;
  description: string;
}

export interface Promo {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  discountAmount: number;
  active: boolean;
  type: PromoType;
  productIds: number[];
}
export const promoTypeFormFields = [
  {
    name: 'name', type: 'input', label: 'Name'
  },
  {
    name: 'description', type: 'textarea', label: 'Description'
  }
];
export const promoFormFields = (promoTypes, promo?) => [
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
    name: 'type', type: 'select', label: 'Promo Type', value: promo?.type,
    options: promoTypes.map(promoT => ({value: promoT.name, viewValue: promoT.name}))
  },
  {
    name: 'active', type: 'checkbox', label: 'Active', value: promo?.active
  }
];

