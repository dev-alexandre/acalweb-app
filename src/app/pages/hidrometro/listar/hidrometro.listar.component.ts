import { HidrometroFiltro } from './../hidrometro.filtro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Hidrometro } from '../hidrometro.model';
import { HidrometroService } from '../hidrometro.service';

@Component({
  selector: 'ngx-hidrometro-listar',
  styleUrls: ['./hidrometro.listar.component.scss'],
  templateUrl: './hidrometro.listar.component.html',
})

export class HidrometroListarComponent  extends ListarComponent<Hidrometro, HidrometroService> implements OnInit {

  public filtro: HidrometroFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: HidrometroService) {

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
      matricula: {valor: null, asc: null},
      referencia: {valor: null, asc: null},
      atual: {valor: null, asc: null},
      anterior: {valor: null, asc: null},
      valorLitroAgua: {valor: null, asc: null},
      litrosGratuidade: {valor: null, asc: null},
    };
  }


  public order(nome: string): void {

    if (nome === 'matricula') {

      if (!this.filtro.matricula.asc) {
        this.filtro.matricula.asc = true;
        this.filtro.matricula.order = ['matricula'];
      } else {
        this.filtro.matricula.asc = !this.filtro.matricula.asc;
      }

    } else {

      this.filtro.matricula.asc = null;
      this.filtro.matricula.order = null;

    }

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

    if (nome === 'atual') {

      if (!this.filtro.atual.asc) {
        this.filtro.atual.asc = true;
        this.filtro.atual.order = ['atual'];
      } else {
        this.filtro.atual.asc = !this.filtro.atual.asc;
      }

    } else {

      this.filtro.atual.asc = null;
      this.filtro.atual.order = null;

    }

    if (nome === 'anterior') {

      if (!this.filtro.anterior.asc) {
        this.filtro.anterior.asc = true;
        this.filtro.anterior.order = ['anterior'];
      } else {
        this.filtro.anterior.asc = !this.filtro.anterior.asc;
      }

    } else {

      this.filtro.anterior.asc = null;
      this.filtro.anterior.order = null;

    }

    if (nome === 'valorLitroAgua') {

      if (!this.filtro.valorLitroAgua.asc) {
        this.filtro.valorLitroAgua.asc = true;
        this.filtro.valorLitroAgua.order = ['valorLitroAgua'];
      } else {
        this.filtro.valorLitroAgua.asc = !this.filtro.valorLitroAgua.asc;
      }

    } else {

      this.filtro.valorLitroAgua.asc = null;
      this.filtro.valorLitroAgua.order = null;

    }

    if (nome === 'litrosGratuidade') {

      if (!this.filtro.litrosGratuidade.asc) {
        this.filtro.litrosGratuidade.asc = true;
        this.filtro.litrosGratuidade.order = ['litrosGratuidade'];
      } else {
        this.filtro.litrosGratuidade.asc = !this.filtro.litrosGratuidade.asc;
      }

    } else {

      this.filtro.litrosGratuidade.asc = null;
      this.filtro.litrosGratuidade.order = null;

    }

    this.load();
  }

  public getModulo(): string {
    return Modulo.HIDROMETRO;
  }

  public selecionar(): void {
    this.router.navigate([ './selecionar' ], { relativeTo: this.activeRouter.parent });
  }

}
