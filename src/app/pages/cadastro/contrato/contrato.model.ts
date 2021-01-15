import { Model } from 'app/@core/base/model';
import { Usuario } from 'app/pages/adminstracao/usuario/usuario.model';
import { Cliente } from './../cliente/cliente.model';
import { Grupo } from './../grupo/grupo.model';
import { Matricula } from './../matricula/matricula.model';

export interface Corte {

  data: Date;
  usuario: Usuario;
  ligacao: boolean;

}

export interface Contrato extends Model {

  cliente?: Cliente;
  matricula?: Matricula;
  matriculaCorrespondencia?: Matricula;
  grupo?: Grupo;
  habilitado?: boolean;
  contratoPrincipal?: boolean;
  valor?: number;
  ativo?: boolean;
  referencias?: string[];
  corte?: Corte[];

}
