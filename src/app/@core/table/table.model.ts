import { Pageable } from './pageable.model';
import { Sort } from './sort.model';

export interface Table<T> {

  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;

}
