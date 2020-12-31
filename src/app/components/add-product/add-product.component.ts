import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicFormComponent} from '../shared/dynamic-form/dynamic-form.component';
import {FieldConfig} from '../../shared/field.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productPayload;
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  fields: FieldConfig[] = [
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
        },
        // {
        //   name: 'pattern',
        //   validator: Validators.pattern('^[a-zA-Z]+$'),
        //   message: 'Accept only text'
        // }
      ]
    },
    // {
    //   type: 'select',
    //   label: 'Country',
    //   name: 'country',
    //   value: 'UK',
    //   options: ['India', 'UAE', 'UK', 'US']
    // },
    // {
    //   type: 'checkbox',
    //   label: 'Accept Terms',
    //   name: 'term',
    //   value: true
    // },
    {
      type: 'button',
      label: 'Save',
      inputType: 'reset'
    }
  ];
  constructor() { }

  ngOnInit(): void { }

  submit($event: any): any {
    const form = this.form.form;
    console.log(form);
  }
}
