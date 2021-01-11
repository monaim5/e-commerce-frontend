import { Component, OnInit } from '@angular/core';
import {FieldConfig} from "../../../shared/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{field.label}}</mat-label>
      <mat-date-range-input
        [formGroup]="group"
        [rangePicker]="picker">
        <input matStartDate placeholder="Start date" [formControlName]="field.startDate">
        <input matEndDate placeholder="End date" [formControlName]="field.endDate">
      </mat-date-range-input>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker #picker></mat-date-range-picker>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class RangePickerComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

}
