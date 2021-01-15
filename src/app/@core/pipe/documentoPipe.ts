import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'documento'
})

export class DocumentoFormat implements PipeTransform {

  private dot = '.';
  private travessal = '/';

  transform(documento: string, args: string[]): any {
    if (!documento) {
      return '';
    }

    if (documento.length === 11) {

      return  documento.substring(0, 3) + this.dot +
              documento.substring(3, 6) + this.dot +
              documento.substring(6, 9) + this.dot +
              documento.substring(9, 11);

    } else if (documento.length === 14) {

      return  documento.substring(0, 2) + this.dot +
              documento.substring(2, 5) + this.dot +
              documento.substring(5, 8) + this.dot +
              documento.substring(8, 12) + this.travessal +
              documento.substring(12, 14);
    }

  }
}
