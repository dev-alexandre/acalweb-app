import { Model } from 'app/@core/base/model';
import { User } from 'app/@core/data/users';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';

export interface Entrada extends Model {

  valor: number;
  responsavel: User;
  criacao: Date;

}

export interface Espectativa extends Model {

  valor: number;
  motivo: string;
  responsavel: User;
  criacao: Date;

}

export interface Movimentacao extends Model {

  valor: number;
  pagamento: Date;
  responsavel: User;
  objetoRelacionado: Model;
  criacao: Date;
  vencimento: Date;
  espectativa: Espectativa[];
  entradas: Entrada[];

}


export interface Boleto extends Model {

  numero?: string;
  referencia?: string;
  contrato?: Contrato;
  vencimento?: Date;

  pagamento?: Date;
  movimentacao?: Movimentacao;

  total?: number;
  status?: string;

}



