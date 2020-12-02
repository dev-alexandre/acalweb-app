import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Contrato } from './contrato.model';

@Injectable()
export class ContratoService extends Service<Contrato> {

  public getModulo(): string {
    return Modulo.CONTRATO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public listarPorReferencia(referencia: string): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(environment.apiUrl + '/contrato' + '/listar/' + referencia );
  }

  public countByCategoria(categoria: {nome: string} ): Observable<number> {
    return this.http.get<number>(environment.apiUrl + '/contrato' + '/countByCategoria/' + categoria.nome );
  }

}
