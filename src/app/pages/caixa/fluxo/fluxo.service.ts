import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Fluxo } from './fluxo.model';

@Injectable()
export class FluxoService extends Service<Fluxo> {

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
