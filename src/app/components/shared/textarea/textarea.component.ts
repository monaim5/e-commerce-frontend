import {Component, Input, OnInit} from '@angular/core';
import {FieldConfig} from "../../../shared/field.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  template: `
    <mat-form-field appearance="outline" [formGroup]="group" style="width: 300px;">
      <mat-label>{{field.label}}</mat-label>
      <textarea matInput cdkTextareaAutosize placeholder style="overflow:hidden"
                [rows]="10" [formControlName]="field.name"></textarea>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class TextareaComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
