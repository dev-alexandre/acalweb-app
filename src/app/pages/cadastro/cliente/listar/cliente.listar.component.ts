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
      ativo: true,
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
      } else {
        this.filtro.nome.asc = !this.filtro.nome.asc;
      }

      this.filtro.documento.asc = null;
      this.filtro.socio.asc = null;
      this.filtro.letra.asc = null;

    } else if (nome === 'documento') {

      if (!this.filtro.documento.asc) {
        this.filtro.documento.asc = true;
      } else {
        this.filtro.documento.asc = !this.filtro.documento.asc;
      }

      this.filtro.nome.asc = null;
      this.filtro.socio.asc = null;
      this.filtro.letra.asc = null;

    } else if (nome === 'socio') {

      if (!this.filtro.socio.asc) {
        this.filtro.socio.asc = true;
      } else {
        this.filtro.socio.asc = !this.filtro.socio.asc;
      }

      this.filtro.nome.asc = null;
      this.filtro.documento.asc = null;
      this.filtro.letra.asc = null;

    } else if (nome === 'letra') {

      if (!this.filtro.letra.asc) {
        this.filtro.letra.asc = true;
      } else {
        this.filtro.letra.asc = !this.filtro.letra.asc;
      }

      this.filtro.nome.asc = null;
      this.filtro.documento.asc = null;
      this.filtro.socio.asc = null;
    }


    this.load();
  }

  public getModulo(): string {
    return Modulo.CLIENTE;
  }
}
