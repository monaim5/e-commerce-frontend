import {Component, Input, OnInit} from '@angular/core';
import {FieldConfig} from '../../../shared/field.interface';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field appearance="outline" [formGroup]="group">
      <mat-label>{{label}}</mat-label>
      <mat-select [placeholder]="label" [formControlName]="name">
        <mat-option *ngFor="let item of options" [value]="item.key">{{item.value}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class SelectComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() options: {key: number, value: string}[];
  @Input() group: FormGroup | AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

}
