import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FieldConfig} from '../../../shared/field.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldConfig[] = [];
  @Output() submitt: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createControl();
  }

  get value(): any{
    return this.form.value;
  }

  bindValidations(validations: any): any {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  createControl(): FormGroup {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') { return; }
      if (field.type === 'rangePicker') {
        const startDateControl = this.fb.control(
          field.startDateValue,
          this.bindValidations(field.validations || [])
        );
        const endDateControl = this.fb.control(
          field.endDateValue,
          this.bindValidations(field.validations || [])
        );
        group.addControl(field.startDate, startDateControl);
        group.addControl(field.endDate, endDateControl);
      } else {
        const control = this.fb.control(
          field.value,
          this.bindValidations(field.validations || [])
        );
        group.addControl(field.name, control);
      }
    });
    return group;
  }

  validateAllFormFields(formGroup: FormGroup): any {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit(event): void{
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submitt.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }
}
