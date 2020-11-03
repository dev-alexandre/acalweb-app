import { Model } from 'app/@core/base/_index';

export interface TipoLogradouro {

  nome?: string;

}

export interface Logradouro extends Model {

  nome?: string;
  tipoLogradouro?: TipoLogradouro;

}
