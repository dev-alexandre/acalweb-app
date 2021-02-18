import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { ClienteFiltro } from '../cliente.filtro';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-cliente-listar',
  styleUrls: ['./cliente.listar.component.scss'],
  templateUrl: './cliente.listar.component.html',
})

export class ClienteListarComponent extends ListarComponent<Cliente, ClienteService> implements OnInit {

  public filtro: ClienteFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
    this.initFiltro();
    super.filtro = this.filtro;
  }

  private initFiltro(): void {

    this.filtro = {
      page: 0,
      size: 5,
      ativo: {valor: null, asc: null},
      nome: {valor: null, asc: null},
      documento: {valor: null, asc: null},
      socio: {valor: null, asc: null},
      letra: {valor: null, asc: null},
    };

  }

  public order(nome: string): void {

    if (nome === 'nome') {

      if (!this.filtro.nome.asc) {
        this.filtro.nome.asc = true;
        this.filtro.nome.order = ['nome'];
      } else {
        this.filtro.nome.asc = !this.filtro.nome.asc;
      }

    } else {

      this.filtro.nome.asc = null;
      this.filtro.nome.order = null;

    }

    if (nome === 'documento') {

      if (!this.filtro.documento.asc) {
        this.filtro.documento.asc = true;
        this.filtro.documento.order = ['documento'];
      } else {
        this.filtro.documento.asc = !this.filtro.documento.asc;
      }

    } else {

      this.filtro.documento.asc = null;
      this.filtro.documento.order = null;

    }

    if (nome === 'socio') {

      if (!this.filtro.socio.asc) {
        this.filtro.socio.asc = true;
        this.filtro.socio.order = ['socio'];
      } else {
        this.filtro.socio.asc = !this.filtro.socio.asc;
      }

    } else {

      this.filtro.socio.asc = null;
      this.filtro.socio.order = null;

    }

    if (nome === 'letra') {

      if (!this.filtro.letra.asc) {
        this.filtro.letra.asc = true;
        this.filtro.letra.order = ['letra'];
      } else {
        this.filtro.letra.asc = !this.filtro.letra.asc;
      }

    } else {

      this.filtro.letra.asc = null;
      this.filtro.letra.order = null;

    }


    this.load();
  }


  public getModulo(): string {
    return Modulo.CLIENTE;
  }
}
