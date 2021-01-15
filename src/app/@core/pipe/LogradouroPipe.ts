import { Pipe, PipeTransform } from '@angular/core';
import { Matricula } from 'app/pages/cadastro/matricula/matricula.model';

@Pipe({
    name: 'logradouro'
})

export class LogradouroFormat implements PipeTransform {
  private space = ' ';

  transform(matricula: Matricula, args: string[]): any {
    if (!matricula) {
      return '';
    }

    return matricula.logradouro.tipoLogradouro.nome + this.space +
        matricula.logradouro.nome;
  }
}
