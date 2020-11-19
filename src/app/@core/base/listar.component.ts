import { ActivatedRoute, Router } from '@angular/router';
import { Filtro } from 'app/@core/table/filtro.model';
import { Table } from 'app/@core/table/table.model';
import { Acao } from 'app/@library/enum';
import { Model } from './model';
import { Service } from './service';

export abstract class ListarComponent <T extends Model, S extends Service<T>> {

  public table: Table<T>;
  public filtro: Filtro;
  public storage: Storage = sessionStorage;

  public abstract getModulo(): string;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: S) {

    this.init();
  }

  public init(): void {
    this.filtro = {page: 0, size: 5};
    this.load();
  }

  public load(): void {

    this.service
      .paginar(this.filtro)
      .subscribe(
        (table) => {
          this.table = table;
        }
      );
  }

  public adicionar(): void {
    this.router.navigate([ './adicionar' ], { relativeTo: this.activeRouter.parent });
  }

  public editar(t: T): void {
    this.storage.setItem(this.getModulo() + Acao.EDITAR, JSON.stringify(t));
    this.router.navigate([ './editar' ], { relativeTo: this.activeRouter.parent });
  }

  public deletar(t: T): void {
    this.storage.setItem(this.getModulo() + Acao.DELETAR, JSON.stringify(t));
    this.router.navigate([ './deletar' ], { relativeTo: this.activeRouter.parent });
  }

  public visualizar(t: T): void {
    this.storage.setItem(this.getModulo() + Acao.VISUALIZAR, JSON.stringify(t));
    this.router.navigate([ './visualizar' ], { relativeTo: this.activeRouter.parent });
  }

  public changeSize(): void {
    this.load();
  }

  public anterior(): void {
    this.filtro.page--;
    this.load();
  }

  public avancar(): void {
    this.filtro.page++;
    this.load();
  }

}
