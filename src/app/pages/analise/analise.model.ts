import { Model } from 'app/@core/base/model';

export interface Coleta {

  parametro?: string;
  analisado?: string;
  exigido?: string;
  conforme?: string;

}

export interface Analise extends Model {

  referencia: string;
  coletas: Coleta[];

}
