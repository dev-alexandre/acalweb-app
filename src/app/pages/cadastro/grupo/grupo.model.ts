import { Model } from 'app/@core/base/model';

export interface Categoria {

  nome?: string;

}

export interface Grupo extends Model {

  valor?: number;
  valorSocio?: number;
  nome?: string;
  categoria?: Categoria;

}
