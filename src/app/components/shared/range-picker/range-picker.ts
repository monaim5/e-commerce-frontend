import {Component, Input, OnInit} from '@angular/core';
import {FieldConfig} from "../../../shared/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-range-picker',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{label}}</mat-label>
      <mat-date-range-input
        [formGroup]="group"
        [rangePicker]="picker">
        <input matStartDate placeholder="Start date" [formControlName]="startDate">
        <input matEndDate placeholder="End date" [formControlName]="endDate">
      </mat-date-range-input>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker #picker></mat-date-range-picker>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class RangePickerComponent implements OnInit {

  @Input() label: string;
  @Input() startDate: string; // TODO: need to work with date type
  @Input() endDate: string;
  @Input() group: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

}
