import {Component, OnInit, ViewChild} from '@angular/core';
import {FieldConfig} from '../../../shared/field.interface';
import {Validators} from '@angular/forms';
import {CategoryService} from '../../../core/services/category.service';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {DynamicFormInterface} from '../../shared/dynamic-form.interface';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, DynamicFormInterface {

  categoryPayload;
  fields: FieldConfig[];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fields = [
      {
        name: 'name',
        type: 'input',
        inputType: 'text',
        label: 'Name',
        value: '',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Name Required'
          }
        ]},
      {
        name: 'description',
        type: 'textarea',
        label: 'Description',
        value: ''
      },
      {
        name: 'icon',
        type: 'input',
        inputType: 'text',
        label: 'Icon',
        value: ''
      },
      {
        type: 'button',
        label: 'Save',
        inputType: 'submit'
      }
    ];
  }

  submit($event: any): any {
    this.categoryPayload = this.form.value;
    this.categoryService.create(this.categoryPayload).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
