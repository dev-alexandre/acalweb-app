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
      ativo: {valor: 'sim', asc: null},
      nome: {valor: null, asc: null},
      tipoLogradouro: {valor: null, asc: null},
      logradouro: {valor: null, asc: null},
      numero: {valor: null, asc: null},
      letra: {valor: null, asc: null},
      grupo: {valor: null, asc: null},
      categoria: {valor: null, asc: null},
      principal: {valor: 'indeterminado', asc: null},
    };

  }

  public order(nome: string): void {

    if (nome === 'nome') {

      if (!this.filtro.nome.asc) {
        this.filtro.nome.asc = true;
        this.filtro.nome.order = ['cliente.nome'];
      } else {
        this.filtro.nome.asc = !this.filtro.nome.asc;
      }

    } else {

      this.filtro.nome.asc = null;
      this.filtro.nome.asc = null;
    }

    if (nome === 'tipoLogradouro') {

      if (!this.filtro.tipoLogradouro.asc) {
        this.filtro.tipoLogradouro.asc = true;
        this.filtro.tipoLogradouro.order = ['matricula.logradouro.tipoLogradouro.nome'];

      } else {
        this.filtro.tipoLogradouro.asc = !this.filtro.tipoLogradouro.asc;
      }

    } else {

      this.filtro.tipoLogradouro.asc = null;
      this.filtro.tipoLogradouro.order = null;

    }

    if (nome === 'logradouro') {

      if (!this.filtro.logradouro.asc) {
        this.filtro.logradouro.asc = true;
        this.filtro.logradouro.order = ['matricula.logradouro.nome'];

      } else {
        this.filtro.logradouro.asc = !this.filtro.logradouro.asc;
      }

    } else {

      this.filtro.logradouro.asc = null;
      this.filtro.logradouro.order = null;

    }

    if (nome === 'numero') {

      if (!this.filtro.numero.asc) {
        this.filtro.numero.asc = true;
        this.filtro.numero.order = ['matricula.numero'];

      } else {
        this.filtro.numero.asc = !this.filtro.numero.asc;
      }

    } else {

      this.filtro.numero.asc = null;
      this.filtro.numero.order = null;

    }

    if (nome === 'letra') {

      if (!this.filtro.letra.asc) {
        this.filtro.letra.asc = true;
        this.filtro.letra.order = ['matricula.letra'];

      } else {
        this.filtro.letra.asc = !this.filtro.letra.asc;
      }

    } else {

      this.filtro.letra.asc = null;
      this.filtro.letra.order = null;

    }

    if (nome === 'categoria') {

      if (!this.filtro.categoria.asc) {
        this.filtro.categoria.asc = true;
        this.filtro.categoria.order = ['grupo.categoria.nome'];
      } else {
        this.filtro.categoria.asc = !this.filtro.categoria.asc;
      }

    } else {
      this.filtro.categoria.asc = null;
      this.filtro.categoria.order = null;
    }

    if (nome === 'grupo') {

      if (!this.filtro.grupo.asc) {
        this.filtro.grupo.asc = true;
        this.filtro.grupo.order = ['grupo.nome'];
      } else {
        this.filtro.grupo.asc = !this.filtro.grupo.asc;
      }

    } else {
      this.filtro.grupo.asc = null;
      this.filtro.grupo.order = null;
    }

    if (nome === 'principal') {

      if (!this.filtro.principal.asc) {
        this.filtro.principal.asc = true;
        this.filtro.principal.order = ['contratoPrincipal'];
      } else {
        this.filtro.principal.asc = !this.filtro.principal.asc;
      }

    } else {
      this.filtro.principal.asc = null;
      this.filtro.principal.order = null;
    }

    if (nome === 'ativo') {

      if (!this.filtro.ativo.asc) {
        this.filtro.ativo.asc = true;
        this.filtro.ativo.order = ['ativo'];
      } else {
        this.filtro.ativo.asc = !this.filtro.ativo.asc;
      }
    } else {

      this.filtro.ativo.asc = null;
      this.filtro.ativo.order = null;

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
