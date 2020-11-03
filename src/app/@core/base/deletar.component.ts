import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Acao } from 'app/@library/enum';
import { Mensagem } from 'app/@library/enum/mensagem.enum';
import { TransacionalComponent } from './transacional.component';
import { Model, Service } from './_index';

export abstract class DeletarComponent <T extends Model, S extends Service<T>> extends TransacionalComponent <T> {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: S,
    public toast: NbToastrService) {

    super(router, activeRouter);
    this.load();
  }

  public createForm(): void {

  }

  public getAcao(): string {
    return Acao.DELETAR;
  }

  public onSubmit() {

    this.service
      .deletar(this.data)
        .subscribe(
          () => {
            this.toast.success(Mensagem.DELETAR, this.getModulo());
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {

          }
    );
  }
}
