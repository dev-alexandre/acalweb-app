import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Acao } from 'app/@library/enum';
import { Mensagem } from 'app/@library/enum/mensagem.enum';
import * as moment from 'moment';
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

  public addDate(){
    const currentDate = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    this.form.addControl('createdDate', new FormControl(currentDate));
    this.form.addControl('lastModifiedDate', new FormControl(currentDate));
  }

  public changeDataBeforeSave(t: T): T {
    return t;
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

    this.loading = true;
    this.addDate();
    this.data = this.form.value;

    this.service
      .salvar(this.data)
        .subscribe(
          () => {
            this.toast.success( Mensagem.ADICIONAR, this.getModulo());
            this.loading = false;
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {
            this.loading = false;
            this.toast.danger('Não foi possível completar', error?.message);
          }
    );
  }

}
