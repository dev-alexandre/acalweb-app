import { Model } from 'app/@core/base/model';

export interface Categoria {

  nome?: string;

}

export interface Grupo extends Model {

  valor?: any;
  nome?: string;
  categoria?: Categoria;

}
