import { Component, OnInit } from '@angular/core';
import {FieldConfig} from "../../../shared/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field [hidden]="field.hidden" appearance="outline" [formGroup]="group">
      <mat-label>{{field.label}}</mat-label>
      <input matInput [formControlName]="field.name" [type]="field.inputType">
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
