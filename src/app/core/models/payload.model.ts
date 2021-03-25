import {DataStat} from '../enums/data-stat.enum';
import {ExceptionDto} from './ExceptionDto.model';

export interface Payload<T> {
  stat: DataStat;
  data?: T;
  error?: ExceptionDto;
}
