import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface ContratoFiltro extends Filtro {

  nome?: ElementoFiltro;
  tipoLogradouro?: ElementoFiltro;
  logradouro?: ElementoFiltro;
  numero?: ElementoFiltro;
  letra?: ElementoFiltro;
  grupo?: ElementoFiltro;
  categoria?: ElementoFiltro;
  principal?: ElementoFiltro;

}
