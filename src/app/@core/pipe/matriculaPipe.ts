import { Pipe, PipeTransform } from '@angular/core';
import { Matricula } from 'app/pages/cadastro/matricula/matricula.model';

@Pipe({
    name: 'matricula'
})

export class MatriculaFormat implements PipeTransform {

  transform(matricula: Matricula, args: string[]): any {
    if (!matricula) {
      return '';
    }

    if (!matricula.letra) {
      return matricula.logradouro.tipoLogradouro.nome + ' ' +
      matricula.logradouro.nome + ' ' +
      matricula.numero;

    } else {
      return matricula.logradouro.tipoLogradouro.nome + ' ' +
        matricula.logradouro.nome + ' ' +
        matricula.numero + ' ' +
        matricula.letra ;    }

  }
}
