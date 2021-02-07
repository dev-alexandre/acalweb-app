import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ValorAgua } from './valor-agua.model';

@Injectable()
export class ValorAguaService  {

  private rota: string;

  constructor(public http: HttpClient) {
    this.rota = environment.apiUrl + '/valor-agua';
  }

  public salvar(valorAgua: ValorAgua): Observable<ValorAgua> {
    return this.http.post<ValorAgua>(this.rota + '/salvar', valorAgua);
  }

  public buscarAtual(): Observable<ValorAgua> {
    return this.http.get<ValorAgua>(this.rota + '/buscar/atual');
  }

}
