import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {filter, map} from 'rxjs/operators';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {DataStat} from '../enums/data-stat.enum';
import {FileResponse} from '../models/file-response.model';
import {DataSet} from "../models/custom.type";


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private api: ApiService,
              private httpClient: HttpClient) { }

  getFirstPhoto(id): string{
    return this.api.host + '/photos/' + id;
  }

  upload(filePayload: File): DataSet<FileResponse> {
    const formData = new FormData();
    formData.append('file', filePayload);

    return this.httpClient.post(this.api.host + '/photos/upload',
      formData, {reportProgress: true, observe: 'events'})
      .pipe(
        filter(value => value.type === HttpEventType.Response || value.type === HttpEventType.UploadProgress),
        map((res: any) => {
          console.log(res);
          switch (res.type) {
            case(HttpEventType.UploadProgress):
              return  {
                stat: DataStat.LOADING,
                data: {progress: Math.round((res.loaded / res.total) * 100), oldFilename: filePayload.name},
              };
            case (HttpEventType.Response):
              return {
                stat: DataStat.LOADED,
                data: {
                  ...res.body.data,
                  oldFilename: filePayload.name
                }
              };
      }}));
  }

}
