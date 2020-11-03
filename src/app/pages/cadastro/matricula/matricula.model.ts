import { Model } from 'app/@core/base/model';
import { Logradouro } from '../logradouro/logradouro.model';

export interface Matricula extends Model {

  numero: string;
  logradouro: Logradouro;
  letra?: string;
  hidrometro?: string;

}
