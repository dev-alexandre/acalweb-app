import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { VisualizarComponent } from 'app/@core/base/visualizar.component';
import { Modulo } from 'app/@library/enum';
import { Contrato } from '../../contrato/contrato.model';
import { ContratoService } from '../../contrato/contrato.service';
import { Matricula } from '../matricula.model';
import { MatriculaService } from '../matricula.service';

@Component({
  selector: 'ngx-matricula-visualizar',
  templateUrl: './matricula.visualizar.component.html',
})

export class MatriculaVisualizarComponent extends VisualizarComponent<Matricula, MatriculaService> implements OnInit {

  public ativos: boolean = false;
  public detalhes: boolean = false;
  public filtro: any;
  public contratos: Contrato[];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public contratoService: ContratoService,
    public service: MatriculaService,
    public toast: NbToastrService) {

    super(router, activeRouter);

    super.load();
    this.initFiltro();
  }

  ngOnInit(): void {
    this.initFiltro();
    this.loadDetalhes();
  }

  private initFiltro(): void {
    this.filtro = {
      idMatricula: {valor: this.data.id},
      ativo: {valor: 'sim'}
    };
  }

  public changeAtivos(): void {
    this.ativos = !this.ativos;
    if (this.ativos) {
      this.filtro.ativo = { valor: 'sim' };
    } else {
      this.filtro.ativo = null;
    }
    this.loadDetalhes();
  }

  private loadDetalhes(): void {
    this.detalhes = true;

    this.contratoService.listar(this.filtro).subscribe(
      (contratos: Contrato[]) => {
        this.contratos = contratos;
        this.detalhes = false;
      }
    );
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

}
