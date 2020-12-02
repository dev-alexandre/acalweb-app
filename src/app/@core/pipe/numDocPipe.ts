import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numDocPipe'
})

export class NumDocFormat implements PipeTransform {

  transform(value: any, args: string[]): any {

    if (value) {

      let val: string = value;

      val = val.substring(0, 4) + '.' + val.substring(4, val.length);
      return val;
    }


    return 'invalido';
  }

}
