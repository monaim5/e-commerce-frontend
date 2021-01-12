import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from './input/input.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {TextareaComponent} from './textarea/textarea.component';
import {ButtonComponent} from './button/button.component';
import {SelectComponent} from './select/select.component';
import {RadiobuttonComponent} from './radiobutton/radiobutton.component';
import {DynamicFieldDirective} from './dynamic-field/dynamic-field.directive';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RangePickerComponent} from './range-picker/range-picker';
import {ItemsListComponent} from './items-list/items-list.component';
import {TruncateTextPipe} from './truncate-text.pipe';


@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    RangePickerComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ItemsListComponent,
    TruncateTextPipe
  ],
    exports: [
      InputComponent,
      CheckboxComponent,
      TextareaComponent,
      ButtonComponent,
      SelectComponent,
      RadiobuttonComponent,
      RangePickerComponent,
      DynamicFieldDirective,
      DynamicFormComponent,
      ItemsListComponent,
      TruncateTextPipe
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
