import {DataStat} from '../enums/data-stat.enum';
import {ServerException} from './server-exception.model';

export interface Payload<T> {
  stat: DataStat;
  data?: T;
  error?: ServerException;
}
