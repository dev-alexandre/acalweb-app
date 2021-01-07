import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from './_index';

export abstract class TransacionalComponent <T extends Model> {

  public loading: boolean = false;
  public abstract getModulo(): string;
  public abstract getAcao(): string;
  public abstract createForm(): void;

  public form: FormGroup;
  public submited: boolean;
  public data: T;
  public dataAsBeforeEdit: T;
  public storage: Storage = sessionStorage;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute) {

  }

  public load(): void {

    this.data = JSON.parse(this.storage.getItem(this.getModulo() + this.getAcao()));
    this.storage.removeItem(this.getModulo() + this.getAcao());

    if (!this.data) {
      this.voltar();
    }

  }

  public getStatus(field: string) {
    if (!this.submited) {
      return 'basic';
    }

    return this.form.get(field).valid ? 'success' : 'danger';
  }

  public voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

  public limpar(): void {
    this.storage.removeItem(this.storage.getItem(this.getModulo() + this.getAcao()));
  }

}
