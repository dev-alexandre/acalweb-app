import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Analise } from 'app/pages/analise/analise.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Boleto } from './boleto.model';

@Injectable()
export class BoletoService extends Service<Boleto> {

  public getModulo(): string {
    return Modulo.BOLETO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public countByReferencia(referencias: string[] ): Observable<{ name: string, value: number}[]> {
    return this.http.get<{ name: string, value: number}[]>(environment.apiUrl + '/boleto' + '/countByReferencia/' + referencias );
  }

  public buscarPorNumero(numero: string ): Observable<Boleto> {
    return this.http.get<Boleto>(environment.apiUrl + '/boleto' + '/buscarPorNumero/' + numero );
  }

  public getAnaliseExemplo(): Observable<Analise> {
    return this.http.get<Analise>('assets/data/analise.json');
  }

}
