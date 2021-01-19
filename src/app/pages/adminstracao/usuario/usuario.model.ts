import { Model } from 'app/@core/base/model';

export interface Funcao {

  name: string;

}

export interface Usuario extends Model {

  email: string;
  password: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  isEnabled: boolean;
  name: string;
  title: string;
  funcoes: Funcao[];

}
