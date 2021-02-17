import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface MatriculaFiltro extends Filtro {

  numero?: ElementoFiltro;
  letra?: ElementoFiltro;
  hidrometro?: ElementoFiltro;
  logradouro?: ElementoFiltro;
  tipoLogradouro?: ElementoFiltro;

}
