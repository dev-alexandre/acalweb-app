import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { AnaliseFiltro } from '../analise.filtro';
import { Analise } from '../analise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'ngx-analise-listar',
  styleUrls: ['./analise.listar.component.scss'],
  templateUrl: './analise.listar.component.html',
})

export class AnaliseListarComponent extends ListarComponent<Analise, AnaliseService> implements OnInit {

  public filtro: AnaliseFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AnaliseService) {

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
      referencia: {valor: null, asc: null},
      parametro: {valor: null, asc: null},
      exigido: {valor: null, asc: null},
      analisado: {valor: null, asc: null},
      conforme: {valor: null, asc: null},
    };

  }


  public order(nome: string): void {

    if (nome === 'referencia') {

      if (!this.filtro.referencia.asc) {
        this.filtro.referencia.asc = true;
        this.filtro.referencia.order = ['referencia'];
      } else {
        this.filtro.referencia.asc = !this.filtro.referencia.asc;
      }

    } else {

      this.filtro.referencia.asc = null;
      this.filtro.referencia.order = null;

    }

    if (nome === 'parametro') {

      if (!this.filtro.parametro.asc) {
        this.filtro.parametro.asc = true;
        this.filtro.parametro.order = ['coletas.parametro'];
      } else {
        this.filtro.parametro.asc = !this.filtro.parametro.asc;
      }

    } else {

      this.filtro.parametro.asc = null;
      this.filtro.parametro.order = null;

    }

    if (nome === 'exigido') {

      if (!this.filtro.exigido.asc) {
        this.filtro.exigido.asc = true;
        this.filtro.exigido.order = ['coletas.exigido'];
      } else {
        this.filtro.exigido.asc = !this.filtro.exigido.asc;
      }

    } else {

      this.filtro.exigido.asc = null;
      this.filtro.exigido.order = null;

    }

    if (nome === 'analisado') {

      if (!this.filtro.analisado.asc) {
        this.filtro.analisado.asc = true;
        this.filtro.analisado.order = ['coletas.analisado'];
      } else {
        this.filtro.analisado.asc = !this.filtro.analisado.asc;
      }

    } else {

      this.filtro.analisado.asc = null;
      this.filtro.analisado.order = null;

    }

    if (nome === 'conforme') {

      if (!this.filtro.conforme.asc) {
        this.filtro.conforme.asc = true;
        this.filtro.conforme.order = ['coletas.conforme'];
      } else {
        this.filtro.conforme.asc = !this.filtro.conforme.asc;
      }

    } else {

      this.filtro.conforme.asc = null;
      this.filtro.conforme.order = null;

    }


    this.load();
  }


  public getModulo(): string {
    return Modulo.ANALISE;
  }

}
