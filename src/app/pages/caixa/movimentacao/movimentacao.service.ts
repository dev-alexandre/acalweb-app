import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Movimentacao } from 'app/pages/financeiro/boleto/boleto.model';

@Injectable()
export class MovimentacaoService extends Service<Movimentacao> {

  public getModulo(): string {
    return Modulo.MOVIMENTACAO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
