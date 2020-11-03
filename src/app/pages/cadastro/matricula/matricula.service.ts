import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Matricula } from './matricula.model';

@Injectable()
export class MatriculaService extends Service<Matricula> {

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
