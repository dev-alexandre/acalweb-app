import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable()
export class ClienteService extends Service<Cliente> {

  public getModulo(): string {
    return Modulo.CLIENTE;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public listarPorNome(nome: String): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.apiUrl + '/cliente/listar/' + nome  );
  }

}
