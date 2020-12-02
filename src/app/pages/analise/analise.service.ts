import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Analise } from './analise.model';

@Injectable()
export class AnaliseService extends Service<Analise> {

  public getModulo(): string {
    return Modulo.ANALISE;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public buscarPorReferencia(referencia: String): Observable<Analise> {
    return this.http.get<Analise>(environment.apiUrl  + '/' + Modulo.ANALISE + '/buscarPorReferencia/' + referencia);
  }


}
