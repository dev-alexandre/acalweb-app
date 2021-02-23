import { Model } from 'app/@core/base/model';
import { Cliente } from './../cliente/cliente.model';
import { Grupo } from './../grupo/grupo.model';
import { Matricula } from './../matricula/matricula.model';

export interface Corte {

  data: string;
  usuario: string;
  ligacao: boolean;

}

export interface Contrato extends Model {

  cliente?: Cliente;
  matricula?: Matricula;
  matriculaCorrespondencia?: Matricula;
  grupo?: Grupo;
  habilitado?: boolean;
  contratoPrincipal?: boolean;
  ativo?: boolean;
  referencias?: string[];
  corte?: Corte[];
  valorExibido?: number;
  encerrado?: string;

}
