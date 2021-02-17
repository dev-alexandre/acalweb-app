import { HidrometroService } from './../hidrometro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Matricula } from 'app/pages/cadastro/matricula/matricula.model';
import { MatriculaService } from 'app/pages/cadastro/matricula/matricula.service';
import { ValorAgua } from 'app/pages/financeiro/valor-agua/valor-agua.model';
import { ValorAguaService } from 'app/pages/financeiro/valor-agua/valor-agua.service';
import * as moment from 'moment';
import { HidrometroMatricula } from './../../cadastro/matricula/matricula.model';
import { Hidrometro } from './../hidrometro.model';

@Component({
  selector: 'ngx-hidrometro-adicionar',
  styleUrls: ['./hidrometro.adicionar.component.scss'],
  templateUrl: './hidrometro.adicionar.component.html',
})

export class HidrometroAdicionarComponent implements OnInit {

  public storage: Storage = sessionStorage;
  public referencia: string;
  public referenciaAnterior: string;
  public matriculas: Matricula[];
  public hidrometros: HidrometroMatricula[];
  public valorAgua: ValorAgua;

  constructor(
    private toast: NbToastrService,
    public matriculaService: MatriculaService,
    public hidrometroService: HidrometroService,
    public activeRouter: ActivatedRoute,
    public router: Router,
    public valorAguaService: ValorAguaService,
    ) {
  }

  ngOnInit(): void {
    this.load();

    this.valorAguaService.buscarAtual().subscribe(
      (valorAgua) => {
        this.valorAgua = valorAgua;
        this.loadData();
      }
    );
  }

  private load(): void {
    this.referencia = JSON.parse(this.storage.getItem('[hidrometro][adicionar]'));
    this.storage.removeItem('[hidrometro][adicionar]');

    if (!this.referencia) {
      this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
    }

    this.referenciaAnterior = this.getReferenciaAnterior(this.referencia);
  }

  private getReferenciaAnterior(referencia: string): string {
    return moment(referencia, '', true).subtract(1, 'M').format('MMYYYY');
  }

  private loadData(): void {

    this.hidrometros = [];

    this.matriculaService.listarMatriculasHidrometro().subscribe(
      (matriculas: Matricula[]) => {
        this.matriculas = matriculas;

        this.matriculas.forEach(
          m => {
            const matriculaString =
              (m.logradouro.tipoLogradouro.nome + ' ') +
              (m.logradouro.nome + ' ') +
              (m.numero + ' ') +
              (m.letra ? m.letra : ' ');

            let h: Hidrometro = this.hidrometroByReferencia(m, this.referencia);

            if (!h) {

              const referenciaAnterior = this.hidrometroByReferencia(m, this.referenciaAnterior) ;

              if (referenciaAnterior) {
                h = {
                  referencia: this.referencia,
                  atual: 0, anterior: referenciaAnterior.atual,
                  valorLitroAgua: this.valorAgua.valor / 1000 ,
                  litrosGratuidade: this.valorAgua.litrosGratuidade,
                  matricula: matriculaString,
                };
              } else {
                h = {
                  referencia: this.referencia,
                  atual: 0,
                  anterior: 0,
                  valorLitroAgua : this.valorAgua.valor / 1000 ,
                  litrosGratuidade: this.valorAgua.litrosGratuidade,
                  matricula: matriculaString ,
                };
              }

            }

            this.hidrometros.push({matricula: m, hidrometro: h, valido: true});
          }
        );

      }
    );
  }

  public valorFinal(){}

  public validar(): boolean {

    this.hidrometros.forEach(h => {
      if (h.hidrometro.atual  < h.hidrometro.anterior) {
        h.valido = false;
      }
    });

    return (this.hidrometros.some(h => !h.valido ));
  }

  public hidrometroByReferencia(matricula: Matricula, referencia: string): Hidrometro {
    if (!matricula.hidrometroList) {
      matricula.hidrometroList = [];
    }

    return matricula.hidrometroList.find(h => h.referencia === referencia );
  }

  public salvar(): void {

    if (this.validar()) {
      this.toast.danger('Erro', 'Dados invalidos');
      return;
    }

    this.hidrometros.forEach(h => {
      h.hidrometro.valorLitroAgua = this.valorAgua.valor / 1000 ;
      h.matricula.hidrometroList.push(h.hidrometro);
    });

    this.matriculaService.salvarTodos(this.matriculas).subscribe(
      () => {
        this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
      },
      (error) => {
        this.toast.danger('Erro', error);
      }
    );
  }


  public voltar(): void {
    this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
  }

}
