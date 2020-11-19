import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select } from 'app/@component/select.model';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
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
    return this.http.get<Select<Matricula>[]>(environment.apiUrl + '/matricula/selecionar/' + logradouro );
  }

}