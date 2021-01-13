import { Model } from 'app/@core/base/model';
import { Hidrometro } from 'app/pages/hidrometro/hidrometro.model';
import { Logradouro } from '../logradouro/logradouro.model';

export interface HidrometroMatricula {

  matricula: Matricula;
  hidrometro: Hidrometro;
  valido: boolean;
}

export interface Matricula extends Model {

  numero: string;
  logradouro: Logradouro;
  letra?: string;

  possuiHidrometro?: boolean;
  hidrometro?: string;
  hidrometroList?: Hidrometro[];

}
