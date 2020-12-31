import { Component, OnInit } from '@angular/core';
import {FieldConfig} from "../../../shared/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-button',
  template: `
    <div [formGroup]="group">
      <button [type]="field.inputType" mat-raised-button color="primary">{{field.label}}</button>
    </div>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
