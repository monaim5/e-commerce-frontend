import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <mat-form-field appearance="outline" [formGroup]="group" style="width: 300px;">
      <mat-label>{{label || name | capitalize}}</mat-label>
      <textarea matInput cdkTextareaAutosize placeholder style="overflow:hidden"
                [rows]="10" [formControlName]="name"></textarea>
      <div *ngIf="group.get(name).touched && group.get(name).invalid" ngProjectAs="mat-error">
        <ng-container *ngFor="let val of validations">
          <mat-error *ngIf="group.get(name).hasError(val.name)">{{val.message}}</mat-error>
        </ng-container>
      </div>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class TextareaComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() validations: { name: string, message: string }[];
  @Input() group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
