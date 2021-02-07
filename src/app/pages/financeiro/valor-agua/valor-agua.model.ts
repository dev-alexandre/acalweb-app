import { Model } from 'app/@core/base/model';

export interface ValorAgua extends Model {

  valor?: number;
  data?: Date;
  litrosGratuidade?: number;

}
