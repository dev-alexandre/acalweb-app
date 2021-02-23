import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Filtro } from 'app/@core/table/filtro.model';

export interface HidrometroFiltro extends Filtro {

  matricula: ElementoFiltro;
  referencia: ElementoFiltro;
  atual: ElementoFiltro;
  anterior: ElementoFiltro;
  valorLitroAgua: ElementoFiltro;
  litrosGratuidade: ElementoFiltro;

}
