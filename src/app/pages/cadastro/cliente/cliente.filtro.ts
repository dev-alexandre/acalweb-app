import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface ClienteFiltro extends Filtro {

  nome?: ElementoFiltro;
  documento?: ElementoFiltro;
  socio?: ElementoFiltro;
  letra?: ElementoFiltro;

}
