import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Logradouro, TipoLogradouro } from './logradouro.model';

@Injectable()
export class LogradouroService extends Service<Logradouro> {

  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public listarTipoLogradouro(): TipoLogradouro[] {

    return [
      {nome: 'Avenida'},
      {nome: 'Assentamento'},
      {nome: 'Chácara'},
      {nome: 'Condomínio'},
      {nome: 'Conjunto'},
      {nome: 'Estrada'},
      {nome: 'Feira'},
      {nome: 'Loteamento'},
      {nome: 'Praça'},
      {nome: 'Quadra'},
      {nome: 'Rodovia'},
      {nome: 'Rua'},
      {nome: 'Sítio'},
      {nome: 'Travessa'},
      ];

  }

}
