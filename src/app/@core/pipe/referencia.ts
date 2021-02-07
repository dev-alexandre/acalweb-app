import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'referencia'
})

export class ReferenciaEscritaFormat implements PipeTransform {
  transform(value: any, args: string[]): any {
    moment.locale('pt-br');

    if (value) {

      const date = moment(value, 'MMYYYY', true);

      if (date.isValid()) {

        const referencia = date.format('MMMM/YYYY');
        return referencia.charAt(0).toUpperCase() + referencia.slice(1);
      }

    }

    return 'invalido';
  }

}
