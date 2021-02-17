import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';

@Injectable()
export class MovimentacaoService extends Service<Object> {

  public getModulo(): string {
    return Modulo.PAGAMENTO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
