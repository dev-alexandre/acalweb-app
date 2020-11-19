import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Acao } from 'app/@library/enum';
import { Mensagem } from 'app/@library/enum/mensagem.enum';
import { Model } from './model';
import { Service } from './service';
import { TransacionalComponent } from './transacional.component';

export abstract class AdicionarComponent<T extends Model, S extends Service<T>> extends TransacionalComponent<T> {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: S,
    public toast: NbToastrService) {

    super(router, activeRouter);

  }

  public load(): void {
    this.createForm();
  }

  public getAcao(): string {
    return Acao.SALVAR;
  }

  public onSubmit() {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.service
      .salvar(this.form.value)
        .subscribe(
          () => {
            this.toast.success( Mensagem.ADICIONAR, this.getModulo());
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {

          }
    );
  }

}