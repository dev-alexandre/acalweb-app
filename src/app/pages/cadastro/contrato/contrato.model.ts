import { Model } from 'app/@core/base/model';
import { Referencia } from 'app/pages/financeiro/boleto/boleto.model';
import { Cliente } from './../cliente/cliente.model';
import { Grupo } from './../grupo/grupo.model';
import { Matricula } from './../matricula/matricula.model';

export interface Contrato extends Model {

  cliente?: Cliente;
  matricula?: Matricula;
  matriculaCorrespondencia?: Matricula;
  grupo?: Grupo;
  indContratoPrincipal?: boolean;
  valor?: number;
  habilitado?: boolean;
  referencias?: Referencia[];

}
