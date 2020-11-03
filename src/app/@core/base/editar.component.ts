import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Acao } from 'app/@library/enum/index';
import { TransacionalComponent } from './transacional.component';
import { Model, Service } from './_index';

export abstract class EditarComponent <T extends Model, S extends Service<T>> extends TransacionalComponent<T> {

  public abstract getModulo(): string;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: S,
    public toast: NbToastrService) {

    super(router, activeRouter);

  }


  public getAcao(): string {
    return Acao.EDITAR;
  }

  public onSubmit() {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.service
      .editar(this.form.value)
        .subscribe(
          () => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {

          }
    );
  }


}
