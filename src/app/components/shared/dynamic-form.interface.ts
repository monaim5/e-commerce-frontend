import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {FieldConfig} from '../../shared/field.interface';

export interface DynamicFormInterface {
  form: DynamicFormComponent;
  fields: FieldConfig[];
  submit(event: any): void;
}
