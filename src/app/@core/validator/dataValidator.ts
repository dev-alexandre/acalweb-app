import { AbstractControl, Validators } from '@angular/forms';
import * as moment from 'moment';

export class DateValidator {

  constructor() {}

  static isDate() {
    return (control: AbstractControl): Validators => {

      const date = control.value;

      if (!date) {
        return null;
      }

      if (moment(date, 'DDMMYYYY', true).isValid()) {
        return null;
      }

      return {
        cpfNotValid: true
      };
    };

  }
}
