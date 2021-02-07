import { BoletoStatus } from 'app/@library/enum/boleto-status.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Acao, Modulo } from 'app/@library/enum';
import * as moment from 'moment';
import { Boleto } from '../boleto.model';
import { BoletoService } from '../boleto.service';

@Component({
  selector: 'ngx-boleto-listar',
  styleUrls: ['./boleto.listar.component.scss'],
  templateUrl: './boleto.listar.component.html',
})

export class BoletoListarComponent extends ListarComponent<Boleto, BoletoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: BoletoService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.BOLETO;
  }

  public getStatusBoleto(boleto: Boleto): string {

    const vencimento = moment(boleto.vencimento, 'DDMMYYYYHHmmss').toDate();
    const ultimaSemana = moment(new Date()).add(7, 'days').toDate();

    if (boleto.status !== BoletoStatus.PAGO &&
        boleto.status !== BoletoStatus.NEGOCIADO &&
        vencimento < new Date()
      ) {
        return 'table-danger';
    } else if (boleto.status === BoletoStatus.PAGO) {
      return 'table-success';
    } else if (vencimento < ultimaSemana) {
      return 'table-info';
    }

    return 'table-light';
  }

  public negociar(boleto: Boleto): void {
    this.storage.setItem(this.getModulo() + Acao.DELETAR, JSON.stringify(boleto));
    this.router.navigate([ './receber' ], { relativeTo: this.activeRouter.parent });
  }

  public getTotal(boleto: Boleto): number {
    return boleto.debitos?.reduce((sum, current) => sum + current.valor, 0);
  }
}
