import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Select } from 'app/@shared';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Matricula } from './matricula.model';

@Injectable()
export class MatriculaService extends Service<Matricula> {

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public selecionar(logradouro: string ): Observable<Select<Matricula>[]> {
    return this.http.get<Select<Matricula>[]>(environment.apiUrl + '/' + this.getModulo() +  '/selecionar/' + logradouro );
  }

  public listarPorReferencia(referencia: string ): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(environment.apiUrl + '/' + this.getModulo() +  '/listarPorReferencia/' + referencia );
  }

  public listarMatriculasHidrometro(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(environment.apiUrl + '/' + this.getModulo() +  '/listar/hidrometro' );
  }

}
