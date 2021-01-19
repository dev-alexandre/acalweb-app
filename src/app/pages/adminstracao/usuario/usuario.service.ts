import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';

@Injectable()
export class UsuarioService extends Service<Usuario> {

  public getModulo(): string {
    return Modulo.USUARIO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

  public listarCargos(): Observable<{nome: string}[]> {
    return this.http.get<{nome: string}[]>('assets/data/cargos.json');
  }

  public listarAutorizacoes(): Observable<{name: string}[]> {
    return this.http.get<{name: string}[]>('assets/data/autorizacoes.json');
  }

}
