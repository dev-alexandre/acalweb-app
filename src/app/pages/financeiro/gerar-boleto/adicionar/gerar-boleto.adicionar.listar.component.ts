import { BoletoService } from './../../boleto/boleto.service';
import { Boleto } from './../../boleto/boleto.model';
import { ContratoService } from './../../../cadastro/contrato/contrato.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';
import * as moment from 'moment';

@Component({
  selector: 'ngx-gerar-boleto-adicionar',
  templateUrl: './gerar-boleto.adicionar.component.html',
})

export class GerarBoletoAdicionarComponent {

  public loading: boolean = false;
  public contratos: Contrato[] = [];
  public boletos: Boleto[];

  public ngDataInicial: Date = new Date();
  public ngDataFinal: Date = new Date();
  public ngDataVencimento: Date = new Date();

  public mes: string = '';
  public ano: string = '';

  constructor(public service: ContratoService, public boletoService: BoletoService) {
  }


  public listarContratosPorRefererencia() {

    const data = moment(this.ngDataVencimento).subtract(1, 'months');
    this.mes = data.format('MM');
    this.ano = data.format('YYYY');

    this.service.listarPorReferencia(this.mes, this.ano).subscribe(
      (contratos: Contrato[]) => {
        this.contratos = contratos;
      }
    );

  }

  public gerar(): void {
    this.boletos = [];
    this.loading = true;


    this.contratos.forEach(
      c => {

        if (!c.referencias) {
          c.referencias = [];
        }
        c.referencias.push({'mes': this.mes , 'ano': this.ano});

        this.boletos.push({
          'numero' : '20201',
          'contrato' : c,
          'referencia': {'mes': this.mes, 'ano': this.ano},
          'vencimento': this.ngDataVencimento,
          'valores' : [{'valor': c.valor }]
      });
    });

    this.service.salvarTodos(this.contratos).subscribe(
      () => {
        this.boletoService.salvarTodos(this.boletos).subscribe(
          () => {
            this.listarContratosPorRefererencia();
            this.loading = false;
          }
        );
      }
    );
  }

}
