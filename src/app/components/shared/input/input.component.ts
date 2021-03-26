import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field [hidden]="hidden || false" appearance="outline" [formGroup]="group">
      <mat-label>{{label || name | capitalize}}</mat-label>
      <input matInput [formControlName]="name" [type]="inputType || 'text'">
      <div *ngIf="group.get(name).touched && group.get(name).invalid" ngProjectAs="mat-error">
        <ng-container *ngFor="let val of validations">
          <mat-error *ngIf="group.get(name).hasError(val.name)">{{val.message}}</mat-error>
        </ng-container>
      </div>
    </mat-form-field>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  // field: FieldConfig;
  @Input() name: string;
  @Input() label: string;
  @Input() hidden: boolean;
  // @Input() formGroup: string;
  // @Input() type: string;
  @Input() inputType: string;
  @Input() validations: {name: string, message: string}[];
  @Input() group: FormGroup | AbstractControl;
  constructor() { }

  ngOnInit(): void {
  }

}
