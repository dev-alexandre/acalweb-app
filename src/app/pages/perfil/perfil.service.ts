import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Perfil } from './perfil.model';

@Injectable()
export class PerfilService extends Service<Perfil> {

  public getModulo(): string {
    return Modulo.USUARIO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }



}
