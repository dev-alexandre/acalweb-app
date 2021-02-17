import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { LogradouroFiltro } from '../logradouro.filtro';
import { Logradouro } from '../logradouro.model';
import { LogradouroService } from '../logradouro.service';


@Component({
  selector: 'ngx-logradouro',
  styleUrls: ['./logradouro.listar.component.scss'],
  templateUrl: './logradouro.listar.component.html',
})

export class LogradouroListarComponent extends ListarComponent<Logradouro, LogradouroService> implements OnInit {

  public filtro: LogradouroFiltro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public logradouroService: LogradouroService,
    ) {

    super(router, activeRouter, logradouroService);
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
      tipoLogradouro: {valor: null, asc: null}
    };

  }

  public order(nome: string): void {

    if (nome === 'nome') {
      if (!this.filtro.nome.asc) {
        this.filtro.nome.asc = true;
      } else {
        this.filtro.nome.asc = !this.filtro.nome.asc;
      }
      this.filtro.tipoLogradouro.asc = null;

    } else if (nome === 'tipoLogradouro') {

      if (!this.filtro.tipoLogradouro.asc) {
        this.filtro.tipoLogradouro.asc = true;
      } else {
        this.filtro.tipoLogradouro.asc = !this.filtro.tipoLogradouro.asc;
      }

      this.filtro.nome.asc = null;
    }

    this.load();
  }


  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }

}
