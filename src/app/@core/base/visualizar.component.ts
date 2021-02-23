import { ActivatedRoute, Router } from '@angular/router';
import { Acao } from 'app/@library/enum';
import { Model, Service } from './_index';

export abstract class VisualizarComponent <T extends Model, S extends Service<T>> {

  public abstract getModulo(): string;

  public storage: Storage = sessionStorage;
  public loading: boolean = false;
  public data: T;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {
  }

  public getAcao(): string {
    return Acao.VISUALIZAR;
  }

  public load(): void {

    this.data = JSON.parse(this.storage.getItem(this.getModulo() + this.getAcao()));
    this.storage.removeItem(this.getModulo() + this.getAcao());

    if (!this.data) {
      this.voltar();
    }

  }

  public voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
