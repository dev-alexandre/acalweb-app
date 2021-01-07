import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateTimePipe'
})

export class DateTimeFormat implements PipeTransform {

  transform(value: any, args: string[]): any {

    if (value) {

      const date = moment(value, 'DD/MM/YYYY HH:m:s', true);

      if (date.isValid()) {
        return date.format('DD/MM/YYYY HH:m:s');
      }

    }

    return 'invalido';
  }

}
