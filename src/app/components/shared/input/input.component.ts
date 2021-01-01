import { Component, OnInit } from '@angular/core';
import {FieldConfig} from "../../../shared/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field appearance="outline" [formGroup]="group">
      <mat-label>{{field.label}}</mat-label>
      <input  matInput [formControlName]="field.name" [type]="field.inputType">
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: [`
    ::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}
    ::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }

    ::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {
      transform: translateY(-1.1em) scale(.75);
      width: 133.33333%;
    }
  `]
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
