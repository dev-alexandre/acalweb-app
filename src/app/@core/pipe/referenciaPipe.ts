import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'referenciaPipe'
})

export class ReferenciaFormat implements PipeTransform {

  transform(value: any, args: string[]): any {

    if (value) {

      const date = moment(value, 'MMYYYY', true);

      if (date.isValid()) {
        return date.format('MM/YYYY');
      }

    }


    return 'invalido';
  }

}
