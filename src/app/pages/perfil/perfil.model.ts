import { Model } from 'app/@core/base/model';

export interface Perfil extends Model {

  email?: string;
  isAccountNonExpired?: boolean;
  isAccountNonLocked?: boolean;
  isCredentialsNonExpired?: boolean;
  isEnabled: boolean;
  name: string;
  title: string;
  img: string;
  funcoes: [];

}
