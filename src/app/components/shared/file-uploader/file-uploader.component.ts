import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpEvent, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-file-uploader',
  template: `
    <input #fileUploader hidden (change)="onFileSelected(fileUploader.files)" type="file">
    <button mat-raised-button color="accent" (click)="fileUploader.click()">Upload file</button>
    <div fxLayout="column" *ngFor="let file of filesOnProgress">
      <mat-card class="mt-2" *ngIf=" file.progress | async as res">
        <mat-card-subtitle>
          {{ file.title }}
        </mat-card-subtitle>
        <mat-card-content fxLayout="row" fxLayoutAlign="space-between center">
          <mat-progress-bar mode="determinate" [value]="res"></mat-progress-bar>
          <button mat-icon-button (click)="delete(file.title)"><mat-icon>close</mat-icon></button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
  ]
})
export class FileUploaderComponent implements OnInit {

  filesOnProgress: {title: string, progress: Observable<any> }[] = [];
  private uploadedFiles = [];
  @Input() service;
  @Input() uploadMethod;
  @Input() multiple: boolean;

  constructor() { }

  onFileSelected(files): void {
    this.filesOnProgress.push({
        title: files.item(0).name,
        progress: this.service[this.uploadMethod]({ title: files.item(0).name, file: files.item(0)})
          .pipe(map((event: HttpEvent<any>) => {
            switch (event.type) {
              case(HttpEventType.UploadProgress):
                return Math.round((event.loaded / event.total) * 100);
              case (HttpEventType.Response):
                this.uploadedFiles.push(event.body);
                return 100;
            }
          }))
      }
    );
  }

  delete(title): void {
    const iFileOnProgress = this.filesOnProgress.findIndex(o => o.title === title);
    this.filesOnProgress.splice(iFileOnProgress, 1);
    const iUploadedFile = this.uploadedFiles.findIndex(o => o.title === title);
    if (iUploadedFile > -1) {
      this.uploadedFiles.splice(iUploadedFile, 1);
      // this.service[deleteMethod](iUploadedFile);
    }
  }

  get files(): Array<any> {
    return this.uploadedFiles;
  }

  ngOnInit(): void {
  }

}
