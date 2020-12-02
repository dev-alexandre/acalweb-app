import { Model } from 'app/@core/base/model';

export interface Movimentacao extends Model {

  valor: number;
  criacao: Date;
  vencimento: Date;
  pagamento: Date;

}
