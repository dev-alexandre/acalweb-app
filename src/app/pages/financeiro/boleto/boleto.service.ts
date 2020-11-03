import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Boleto } from './boleto.model';

@Injectable()
export class BoletoService extends Service<Boleto> {

  public getModulo(): string {
    return Modulo.BOLETO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
