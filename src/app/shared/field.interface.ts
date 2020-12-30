export interface Validator {
  name: string;
  validators: any;
  message: string;
}

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: any;
  value: any;
  validations?: Validator[];
}
