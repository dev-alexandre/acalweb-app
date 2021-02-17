import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface LogradouroFiltro extends Filtro {

  nome?: ElementoFiltro;
  tipoLogradouro?: ElementoFiltro;

}
