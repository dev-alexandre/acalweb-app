import { Model } from 'app/@core/base/model';

export interface Hidrometro extends Model {

  matricula: string;
  referencia: string;
  atual: number;
  anterior: number;
  valorLitroAgua: number;
  litrosGratuidade: number;
}
