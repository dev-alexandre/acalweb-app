import { Model } from 'app/@core/base/model';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';

export interface Referencia {

  mes: string;
  ano: string;

}

export interface Debito {

  valor: number;

}

export interface Boleto extends Model {

  numero?: string;
  contrato?: Contrato;
  referencia?: Referencia;
  vencimento?: Date;
  valores?: Debito[];

}
