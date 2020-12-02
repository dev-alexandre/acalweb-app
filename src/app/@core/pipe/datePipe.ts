import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'datePipe'
})

export class DateFormat implements PipeTransform {

  transform(value: any, args: string[]): any {

    if (value) {

      const date = moment(value, 'DDMMYYYY', true);

      if (date.isValid()) {
        return date.format('DD/MM/YYYY');
      }

    }


    return 'invalido';
  }

}
