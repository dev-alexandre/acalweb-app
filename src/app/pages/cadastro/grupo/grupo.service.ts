import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Grupo } from './grupo.model';

@Injectable()
export class GrupoService extends Service<Grupo> {

  public getModulo(): string {
    return Modulo.GRUPO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
