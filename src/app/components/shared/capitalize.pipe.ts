import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0) {
      return value[0].toUpperCase() + value.substr(1);
    } else {
      return value;
    }
  }

}
