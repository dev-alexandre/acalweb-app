import { BoletoService } from './../../boleto/boleto.service';
import { Boleto } from './../../boleto/boleto.model';
import { Component, OnInit } from '@angular/core';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';
import { ContratoService } from 'app/pages/cadastro/contrato/contrato.service';
import { ActivatedRoute, Router } from '@angular/router';

interface ContratoAdpter {

  contrato?: Contrato;
  check: boolean;

}

@Component({
  selector: 'ngx-gerar-boleto-adicionar',
  templateUrl: './gerar-boleto.adicionar.component.html',
})

export class GerarBoletoAdicionarComponent implements OnInit {

  private data: {referencia: string, vencimento: string};

  public selectAll: boolean;
  public storage: Storage = sessionStorage;
  public contratos: ContratoAdpter[];
  public loading: boolean = false;
  public boletos: Boleto[];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public boletoService: BoletoService) {

      this.selectAll = true;
  }

  ngOnInit(): void {

    this.data = JSON.parse(this.storage.getItem('[gerar-boleto][adicionar]'));
    this.storage.removeItem('[gerar-boleto][adicionar]');

    if (!this.data) {
      this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
    }

    this.listarContratosPorRefererencia();
  }

  public listarContratosPorRefererencia() {

    this.contratos = [];

    this.service.listarPorReferencia(this.data.referencia).subscribe(
      (contratos: Contrato[]) => {
       contratos.forEach( contrato => {
          this.contratos.push({contrato: contrato, check: true});
       });
    });
  }

  public selecionarTodos() {

    this.contratos.forEach(c => {
      c.check = this.selectAll;
    });

  }

  public gerar(): void {
    /*
    this.loading = true;

    const referencia = this.referencia.value;
    const contratosParaSalvar:  Contrato [] = [];
    const boletosParaSalvar: Boleto [] = [];
    const boleto: Boleto = {};

    this.contratos.forEach(c => {

      boleto.contrato = c;
      boleto.referencia = referencia;
      boleto.movimentacao = null;
      boleto.vencimento = this.vencimento.value;

      boletosParaSalvar.push(boleto);
      contratosParaSalvar.push(c);
    });


    this.service.salvarTodos(contratosParaSalvar).subscribe(
      () => {
        this.boletoService.salvarTodos(boletosParaSalvar).subscribe(
          () => {
            this.loading = false;
            this.listarContratosPorRefererencia();
          },
          () => {
            this.loading = false;
          }

        );
      },
      () => {
        this.loading = false;
      }

    );
    */
  }

}
