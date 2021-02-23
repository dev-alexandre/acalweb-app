import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { VisualizarComponent } from 'app/@core/base/visualizar.component';
import { Modulo } from 'app/@library/enum';
import { Contrato } from '../../contrato/contrato.model';
import { ContratoService } from '../../contrato/contrato.service';
import { LogradouroFiltro } from '../logradouro.filtro';
import { Logradouro } from '../logradouro.model';
import { LogradouroService } from '../logradouro.service';

@Component({
  selector: 'ngx-logradouro-visualizar',
  templateUrl: './logradouro.visualizar.component.html',
})

export class LogradouroVisualizarComponent extends VisualizarComponent<Logradouro, LogradouroService> implements OnInit {

  public contratos: Contrato[];
  public ativos: boolean = true;
  public filtro: any;
  public loadClientes: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService,
    public contratoService: ContratoService,
    public toast: NbToastrService) {

    super(router, activeRouter);

    super.load();
    this.initFiltro();
    this.loadContratos();
  }

  ngOnInit(): void {

  }

  public changeAtivos(): void {
    this.ativos = !this.ativos;
    if (this.ativos) {
      this.filtro.ativo = { valor: 'sim' };
    } else {
      this.filtro.ativo = null;
    }
    this.loadContratos();
  }

  private initFiltro(): void {
    this.filtro = {
      idLogradouro: {valor: this.data.id, order: ['matricula.numero', 'matricula.letra']},
      ativo: {valor: 'sim'}
    };
  }

  private loadContratos(): void {
    this.loadClientes = true;

    this.contratoService.listar(this.filtro).subscribe(
      (contratos: Contrato[]) => {
        this.contratos = contratos;
        this.loadClientes = false;
      }
    );
  }



  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }


}
