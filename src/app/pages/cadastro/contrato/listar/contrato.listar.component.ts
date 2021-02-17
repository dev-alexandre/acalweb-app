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
import { ContratoFiltro } from '../contrato.filtro';

@Component({
  selector: 'ngx-contrato',
  styleUrls: ['./contrato.listar.component.scss'],
  templateUrl: './contrato.listar.component.html',
})

export class ContratoListarComponent extends ListarComponent<Contrato, ContratoService> implements OnInit {

  public contrato: Contrato;
  public user: User;
  public filtro: ContratoFiltro;

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
    super.init();
    this.initFiltro();
    super.filtro = this.filtro;
    this.getUser();
  }

  private initFiltro(): void {

    this.filtro = {
      page: 0,
      size: 5,
      ativo: true,
      nome: {valor: null, asc: null},
      matricula: {valor: null, asc: null},
      grupo: {valor: null, asc: null},
      principal: {valor: 'indeterminado', asc: null},
    };


  }

  public order(nome: string): void {

    if (nome === 'nome') {
      if (!this.filtro.nome.asc) {
        this.filtro.nome.asc = true;
      } else {
        this.filtro.nome.asc = !this.filtro.nome.asc;
      }

      this.filtro.matricula.asc = null;
      this.filtro.grupo.asc = null;
      this.filtro.principal.asc = null;

    } else if (nome === 'matricula') {

      if (!this.filtro.matricula.asc) {
        this.filtro.matricula.asc = true;
      } else {
        this.filtro.matricula.asc = !this.filtro.matricula.asc;
      }

      this.filtro.nome.asc = null;
      this.filtro.grupo.asc = null;
      this.filtro.principal.asc = null;

    } else if (nome === 'grupo') {

      if (!this.filtro.grupo.asc) {
        this.filtro.grupo.asc = true;
      } else {
        this.filtro.grupo.asc = !this.filtro.grupo.asc;
      }

      this.filtro.nome.asc = null;
      this.filtro.matricula.asc = null;
      this.filtro.principal.asc = null;

    } else if (nome === 'principal') {

      if (!this.filtro.principal.asc) {
        this.filtro.principal.asc = true;
      } else {
        this.filtro.principal.asc = !this.filtro.principal.asc;
      }
    }

    this.load();
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
