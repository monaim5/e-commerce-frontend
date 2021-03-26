import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToSelectOptions'
})
export class MapToSelectOptionsPipe implements PipeTransform {

  transform(data: Array<any>, key: string, value: string): Array<any> {
    return (data) ? data.map(x => ({key: x[key], value: x[value]})) : [];
  }
}
