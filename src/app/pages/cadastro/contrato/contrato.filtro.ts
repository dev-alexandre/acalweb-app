import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface ContratoFiltro extends Filtro {

  nome?: ElementoFiltro;
  matricula?: ElementoFiltro;
  grupo?: ElementoFiltro;
  principal?: ElementoFiltro;

}
