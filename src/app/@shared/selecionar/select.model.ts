import { Model } from 'app/@core/base/model';

export interface Select<T> extends Model {

  title: string;
  values: T[];

}
