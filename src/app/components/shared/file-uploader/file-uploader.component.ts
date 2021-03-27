import {Component, Input, OnInit} from '@angular/core';
import {FileResponse} from '../../../core/models/file-response.model';
import {DataStat} from '../../../core/enums/data-stat.enum';
import {Payload} from '../../../core/models/payload.model';
import {tap} from 'rxjs/operators';
import {DataSet} from '../../../core/models/custom.type';

@Component({
  selector: 'app-file-uploader',
  template: `
    <input #fileUploader hidden (change)="onFileSelected(fileUploader.files)" type="file">
    <button mat-raised-button color="accent" (click)="fileUploader.click()">Upload file</button>
    <div fxLayout="column">

      <ng-container *ngFor="let file$ of filesOnProgress">

        <mat-card class="mt-2" *ngIf=" file$ | async as file">
          <mat-card-subtitle>
            {{ file.data.oldFilename }}
          </mat-card-subtitle>
          <mat-card-content fxLayout="row" fxLayoutAlign="space-between center">

            <ng-container [ngSwitch]="file.stat">
              <mat-progress-bar *ngSwitchCase="DataStat.LOADING" mode="determinate"
                                [value]="file.data.progress || (file.stat === DataStat.LOADED) * 100"></mat-progress-bar>
              <ng-container *ngSwitchCase="DataStat.LOADED">
                <img [src]="file.data.url" height="20" width="40" alt="could not load this file">
                Downloaded
              </ng-container>
            </ng-container>
            <button mat-icon-button (click)="delete(file$, file)">
              <mat-icon>close</mat-icon>
            </button>
          </mat-card-content>

        </mat-card>
      </ng-container>
    </div>
  `,
  styles: [
  ]
})
export class FileUploaderComponent {

  filesOnProgress: Array<DataSet<FileResponse>> = [];

  uploadedFiles: Array<FileResponse> = [];

  @Input() service;
  @Input() uploadMethod: string;
  @Input() deleteMethod: string;
  @Input() multiple: boolean;

  DataStat = DataStat;
  constructor() { }

  onFileSelected(files): void {
    this.filesOnProgress.push(
        this.service[this.uploadMethod](files.item(0)).pipe(tap(
          (x: Payload<FileResponse>) => {if (x.stat === DataStat.LOADED) { console.log(x); this.uploadedFiles.push(x.data); } }))
    );
  }

  delete(file$: any, file: Payload<FileResponse>): void {
    if (file.stat === DataStat.LOADED) {
      this.service[this.deleteMethod](file.data.id).subscribe();
    }
    this.filesOnProgress.splice(this.filesOnProgress.indexOf(file$), 1);
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(file.data), 1);
  }

  get files(): Array<any> {
    return this.uploadedFiles;
  }

}
