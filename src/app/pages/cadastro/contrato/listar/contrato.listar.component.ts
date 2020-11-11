import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Contrato } from '../contrato.model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'ngx-contrato',
  styleUrls: ['./contrato.listar.component.scss'],
  templateUrl: './contrato.listar.component.html',
})

export class ContratoListarComponent extends ListarComponent<Contrato, ContratoService> implements OnInit {

  public contrato: Contrato;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    private dialogService: NbDialogService,

    ) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

  public changeContrato(): void {

    this.contrato.habilitado = !this.contrato.habilitado;

    this.service.editar(this.contrato).subscribe(
      () => {
      },
    );
  }


}
