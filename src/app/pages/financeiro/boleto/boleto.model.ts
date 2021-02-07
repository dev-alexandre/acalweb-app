import { Model } from 'app/@core/base/model';
import { User } from 'app/@core/data/users';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';

export interface Debito extends Model {

  valor: number;
  nome: string;
  responsavel: User;
  dataCriacao: Date;

}

export interface Pagamento extends Model {

  motivo: string;
  valor: number;
  responsavel: User;
  dataCriacao: Date;

}

export interface Boleto extends Model {

  numero?: string;
  referencia?: string;
  vencimento?: string;

  pagamentos?: Pagamento[];
  debitos?: Debito [];

  total?: number;
  status?: string;

  contrato?: Contrato;

}



