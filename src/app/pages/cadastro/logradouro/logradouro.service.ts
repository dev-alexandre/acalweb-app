import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Observable } from 'rxjs';
import { Logradouro, TipoLogradouro } from './logradouro.model';

@Injectable()
export class LogradouroService extends Service<Logradouro> {

  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public listarTipoLogradouro(): Observable<TipoLogradouro[]> {
    return this.http.get<TipoLogradouro[]>('assets/data/tipo-logradouro.json');
  }

}
