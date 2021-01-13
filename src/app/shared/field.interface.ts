'https://medium.com/@mail.bahurudeen/create-a-dynamic-form-with-configurable-fields-and-validations-using-angular-6-994db56834da'
export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: {value: string; viewValue: string}[];
  collections?: any;
  type: any;
  hidden?: boolean;
  value?: any;
  validations?: Validator[];
  service?: string;
  startDate?: string;
  endDate?: string;
  startDateValue?: Date;
  endDateValue?: Date;
}
