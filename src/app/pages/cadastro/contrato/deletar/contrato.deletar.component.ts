import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DeletarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Mensagem } from 'app/@library/enum/mensagem.enum';
import { Contrato } from '../contrato.model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'ngx-contrato',
  templateUrl: './contrato.deletar.component.html',
})

export class ContratoDeletarComponent extends DeletarComponent<Contrato, ContratoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }

  public onSubmit() {
    this.loading = true;
    this.data.ativo = false;

    this.service
      .salvar(this.data)
        .subscribe(
          () => {
            this.loading = false;
            this.toast.success(Mensagem.DELETAR, this.getModulo());
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          () => {
            this.loading = false;
          }
    );
  }


}
