import { Model } from 'app/@core/base/model';

export interface Cliente extends Model {

  nome?: string;
  telefone?: string;
  documento?: string;
  dataNascimento?: Date;
  socio?: number;

  letra?: string;
}
