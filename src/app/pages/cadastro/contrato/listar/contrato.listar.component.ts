import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbDialogService } from '@nebular/theme';
import { ListarComponent } from 'app/@core/base/_index';
import { User } from 'app/auth/user.model';
import { Modulo } from 'app/@library/enum';
import * as moment from 'moment';
import { Contrato } from '../contrato.model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'ngx-contrato',
  styleUrls: ['./contrato.listar.component.scss'],
  templateUrl: './contrato.listar.component.html',
})

export class ContratoListarComponent extends ListarComponent<Contrato, ContratoService> implements OnInit {
  public contrato: Contrato;
  public user: User;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    private dialogService: NbDialogService,
    public authService: NbAuthService,
    ) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void  {

    this.authService.onTokenChange()
    .subscribe( (token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
      }}
      );
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {});
  }

  public changeContrato(ligacao: boolean): void {

    this.contrato.habilitado = ligacao;

    if (!this.contrato.corte) {
      this.contrato.corte = [];
    }

    this.contrato.corte.push({ data:  moment(new Date()).format('DDMMYYYYHHmmss'), usuario: this.user.name , ligacao: ligacao});
    this.service.editar(this.contrato).subscribe(() => {});

  }

}
