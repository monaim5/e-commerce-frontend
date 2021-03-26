import {Observable} from 'rxjs';
import {Payload} from './payload.model';

export type DataSet<T> = Observable<Payload<T>>;
