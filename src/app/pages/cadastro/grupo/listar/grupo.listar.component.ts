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
      ativo: true,
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
      } else {
        this.filtro.nome.asc = !this.filtro.nome.asc;
      }

      this.filtro.valor.asc = null;
      this.filtro.valorSocio.asc = null;
      this.filtro.categoria.asc = null;

    } else if (nome === 'valor') {

      if (!this.filtro.valor.asc) {
        this.filtro.valor.asc = true;
      } else {
        this.filtro.valor.asc = !this.filtro.valor.asc;
      }

      this.filtro.valorSocio.asc = null;
      this.filtro.categoria.asc = null;
      this.filtro.nome.asc = null;


    } else if (nome === 'valorSocio') {

      if (!this.filtro.valorSocio.asc) {
        this.filtro.valorSocio.asc = true;
      } else {
        this.filtro.valorSocio.asc = !this.filtro.valorSocio.asc;
      }

      this.filtro.valor.asc = null;
      this.filtro.categoria.asc = null;
      this.filtro.nome.asc = null;

    } else if (nome === 'categoria') {

      if (!this.filtro.categoria.asc) {
        this.filtro.categoria.asc = true;
      } else {
        this.filtro.categoria.asc = !this.filtro.categoria.asc;
      }

      this.filtro.valor.asc = null;
      this.filtro.valorSocio.asc = null;
      this.filtro.nome.asc = null;

    }


    this.load();
  }

  public getModulo(): string {
    return Modulo.GRUPO;
  }
}
