import { AbstractControl, Validators } from '@angular/forms';

export class DocumentoValidator {

  constructor() {}

  static isDocument() {

    return (control: AbstractControl): Validators => {

      const documento: string = control.value;
      if (documento) {
        if (documento.length !== 11 && documento.length !== 14) {
          return { cpfNotValid: true };
        }

        let numbers: any;
        let digits: any;
        let sum: number;
        let i: number;
        let result: number;

        let equalDigits: boolean = true;

        for (i = 0; i < documento.length - 1; i++) {
          if (documento.charAt(i) !== documento.charAt(i + 1)) {
            equalDigits = false;
            break;
          }
        }

        if (equalDigits) {
          return { notValid: true };
        }

        if (documento.length === 11) {

          numbers = documento.substring(0, 9);
          digits = documento.substring(9);
          sum = 0;

          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { cpfNotValid: true };
          }

          numbers = documento.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { cpfNotValid: true };
          }

          return null;

        } else if (documento.length === 14) {
            /*
            escrever aqui a validação de cnpj
            */
        }

      }

      return null;
    };

  }

}
