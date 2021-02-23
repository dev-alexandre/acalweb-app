import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface AnaliseFiltro extends Filtro {

  referencia?: ElementoFiltro;
  parametro?: ElementoFiltro;
  exigido?: ElementoFiltro;
  analisado?: ElementoFiltro;
  conforme?: ElementoFiltro;

}

