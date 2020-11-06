import { Select } from './../../../@component/select.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { environment } from 'environments/environment';
import { Grupo } from './grupo.model';
import { Observable } from 'rxjs';

@Injectable()
export class GrupoService extends Service<Grupo> {

  public getModulo(): string {
    return Modulo.GRUPO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public selecionar(): Observable<Select<Grupo>[]> {
    return this.http.get<Select<Grupo>[]>(environment.apiUrl + '/grupo/selecionar' );
  }


}
