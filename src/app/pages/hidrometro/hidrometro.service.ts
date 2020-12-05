import { Hidrometro } from './hidrometro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class HidrometroService extends Service<Hidrometro> {

  public getModulo(): string {
    return Modulo.HIDROMETRO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public listarPorReferencia(referencia: string ): Observable<Hidrometro[]> {
    return this.http.get<Hidrometro[]>(environment.apiUrl + '/hidrometro' +  '/listarPorReferencia/' + referencia );
  }

}
