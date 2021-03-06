import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { environment } from 'environments/environment';
import { Categoria, Grupo } from './grupo.model';
import { Observable } from 'rxjs';
import { Select } from 'app/@shared';

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

  public getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('assets/data/categoria.json');
  }

}
