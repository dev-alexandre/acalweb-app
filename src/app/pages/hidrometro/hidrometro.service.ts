import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum/modulo.enum';
import { Hidrometro } from './hidrometro.model';

@Injectable()
export class HidrometroService extends Service<Hidrometro> {

  public getModulo(): string {
    return Modulo.HIDROMETRO;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
