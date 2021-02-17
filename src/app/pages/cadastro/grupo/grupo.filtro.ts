import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';


export interface GrupoFiltro extends Filtro {

  valor?: ElementoFiltro;
  valorSocio?: ElementoFiltro;
  nome?: ElementoFiltro;
  categoria?: ElementoFiltro;

}
