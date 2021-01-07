import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Acao } from 'app/@library/enum/index';
import * as moment from 'moment';
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

    if (!this.hasModification()) {
      return;
    }

    this.loading = true;

    this.service
      .editar(this.form.value)
        .subscribe(
          () => {
            this.loading = false;
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {
            this.loading = false;
            this.toast.danger('Não foi possível completar', error?.message);
          }
    );
  }

  public hasModification(): boolean {
    this.addDate();

    const dataForm = Object.entries(this.form.value).sort((a, b) => a[0].localeCompare(b[0]) );
    const dataValue = Object.entries(this.data).sort((a, b) => a[0].localeCompare(b[0])).filter(f => {
      dataForm.some(df => {f[0]});
    } );

    if ( JSON.stringify(dataForm) === JSON.stringify(dataValue)) {
      this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
      return false;
    }

    this.updateDate();

    return true;
  }

  public addDate() {
    this.form.addControl('id', new FormControl(this.data.id));
    this.form.addControl('createdDate', new FormControl(this.data.createdDate));
    this.form.addControl('lastModifiedDate', new FormControl(this.data.lastModifiedDate));
  }

  public updateDate(): void {
    const currentDate = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    this.form.addControl('lastModifiedDate', new FormControl(currentDate));
  }

  public changeDataBeforeSave(t: T): T {
    return t;
  }

}
