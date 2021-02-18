import { GrupoFiltro } from './../grupo.filtro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Grupo } from '../grupo.model';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'ngx-grupo',
  styleUrls: ['./grupo.listar.component.scss'],
  templateUrl: './grupo.listar.component.html',
})

export class GrupoListarComponent extends ListarComponent<Grupo, GrupoService> implements OnInit {

  public filtro: GrupoFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoService) {

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
      valor: {valor: null, asc: null},
      valorSocio: {valor: null, asc: null},
      nome: {valor: null, asc: null},
      categoria: {valor: null, asc: null},
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

    if (nome === 'valor') {

      if (!this.filtro.valor.asc) {
        this.filtro.valor.asc = true;
        this.filtro.valor.order = ['valor'];
      } else {
        this.filtro.valor.asc = !this.filtro.valor.asc;
      }

    } else {

      this.filtro.valor.asc = null;
      this.filtro.valor.order = null;

    }

    if (nome === 'valorSocio') {

      if (!this.filtro.valorSocio.asc) {
        this.filtro.valorSocio.asc = true;
        this.filtro.valorSocio.order = ['valorSocio'];
      } else {
        this.filtro.valorSocio.asc = !this.filtro.valorSocio.asc;
      }

    } else {

      this.filtro.valorSocio.asc = null;
      this.filtro.valorSocio.order = null;

    }

    if (nome === 'categoria') {

      if (!this.filtro.categoria.asc) {
        this.filtro.categoria.asc = true;
        this.filtro.categoria.order = ['categoria.nome'];
      } else {
        this.filtro.categoria.asc = !this.filtro.categoria.asc;
      }

    } else {

      this.filtro.categoria.asc = null;
      this.filtro.categoria.order = null;

    }


    this.load();
  }

  public getModulo(): string {
    return Modulo.GRUPO;
  }
}
