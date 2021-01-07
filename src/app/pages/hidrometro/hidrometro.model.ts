import { Model } from 'app/@core/base/model';

export interface Hidrometro extends Model {

  referencia: String;
  atual: number;
  anterior: number;

}
