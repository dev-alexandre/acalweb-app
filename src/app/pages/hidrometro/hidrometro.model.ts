import { Matricula } from './../cadastro/matricula/matricula.model';
import { Model } from 'app/@core/base/model';


export interface Hidrometro extends Model {

  matricula: Matricula;
  referencia: String;
  atual: number;
  anterior: number;

}
