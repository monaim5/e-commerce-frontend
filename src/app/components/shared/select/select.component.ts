import { Component, OnInit } from '@angular/core';
import {FieldConfig} from '../../../shared/field.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field appearance="outline" [formGroup]="group">
      <mat-select [placeholder]="field.label" [formControlName]="field.name">
        <mat-option *ngFor="let item of field.options" [value]="item.value">{{item.viewValue}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
