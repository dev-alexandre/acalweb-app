import { AbstractControl, Validators } from '@angular/forms';
import * as moment from 'moment';

export class ReferenciaValidator {

  constructor() {}

  static isReferencia() {
    return (control: AbstractControl): Validators => {

      const value = control.value;

      if (!value) {
        return null;
      }

      if (moment(value, 'MMYYYY', true).isValid()) {
        return null;
      }

      return {
        referenciaNotValid: true
      };
    };

  }
}
