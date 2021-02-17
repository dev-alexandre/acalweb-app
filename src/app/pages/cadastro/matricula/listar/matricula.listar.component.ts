import { MatriculaFiltro } from './../matricula.filtro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Matricula } from '../matricula.model';
import { MatriculaService } from '../matricula.service';


@Component({
  selector: 'ngx-matricula',
  styleUrls: ['./matricula.listar.component.scss'],
  templateUrl: './matricula.listar.component.html',
})

export class MatriculaListarComponent extends ListarComponent<Matricula, MatriculaService> implements OnInit {

  public filtro: MatriculaFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService) {

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
      numero: {valor: null, asc: null},
      letra: {valor: null, asc: null},
      hidrometro: {valor: null, asc: null},
      logradouro: {valor: null, asc: null, order: 'logradouro.nome' },
      tipoLogradouro: {valor: null, asc: null, order: 'logradouro.tipoLogradouro.nome'},
    };
  }


  public order(nome: string): void {

    if (nome === 'numero') {
      if (!this.filtro.numero.asc) {
        this.filtro.numero.asc = true;
      } else {
        this.filtro.numero.asc = !this.filtro.numero.asc;
      }
      this.filtro.letra.asc = null;
      this.filtro.hidrometro.asc = null;
      this.filtro.logradouro.asc = null;
      this.filtro.tipoLogradouro.asc = null;

    } else if (nome === 'letra') {

      if (!this.filtro.letra.asc) {
        this.filtro.letra.asc = true;
      } else {
        this.filtro.letra.asc = !this.filtro.letra.asc;
      }

      this.filtro.numero.asc = null;
      this.filtro.hidrometro.asc = null;
      this.filtro.logradouro.asc = null;
      this.filtro.tipoLogradouro.asc = null;

    }  else if (nome === 'hidrometro') {

      if (!this.filtro.hidrometro.asc) {
        this.filtro.hidrometro.asc = true;
      } else {
        this.filtro.hidrometro.asc = !this.filtro.hidrometro.asc;
      }

      this.filtro.numero.asc = null;
      this.filtro.letra.asc = null;
      this.filtro.logradouro.asc = null;
      this.filtro.tipoLogradouro.asc = null;

    } else if (nome === 'logradouro') {

      if (!this.filtro.logradouro.asc) {
        this.filtro.logradouro.asc = true;
      } else {
        this.filtro.logradouro.asc = !this.filtro.logradouro.asc;
      }

      this.filtro.numero.asc = null;
      this.filtro.letra.asc = null;
      this.filtro.hidrometro.asc = null;
      this.filtro.tipoLogradouro.asc = null;

    } else if (nome === 'tipoLogradouro') {

      if (!this.filtro.tipoLogradouro.asc) {
        this.filtro.tipoLogradouro.asc = true;
      } else {
        this.filtro.tipoLogradouro.asc = !this.filtro.tipoLogradouro.asc;
      }

      this.filtro.numero.asc = null;
      this.filtro.letra.asc = null;
      this.filtro.hidrometro.asc = null;
      this.filtro.logradouro.asc = null;
    }


    this.load();
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }
}
