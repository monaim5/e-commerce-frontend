import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-range-picker',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{label}}</mat-label>
      <mat-date-range-input
        [formGroup]="group"
        [rangePicker]="picker">
        <input matStartDate placeholder="Start date" [formControl]="startDateControl">
        <input matEndDate placeholder="End date" [formControl]="endDateControl">
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
  @Input() startDateName: string;
  @Input() endDateName: string;
  @Input() group: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

  get startDateControl(): FormControl {
    return this.group.controls[this.startDateName] as FormControl;
  }
  get endDateControl(): FormControl {
    return this.group.controls[this.startDateName] as FormControl;
  }

}
