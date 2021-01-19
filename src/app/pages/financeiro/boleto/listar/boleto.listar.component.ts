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

  public getTotal(boleto: Boleto): number {
   return boleto.debitos?.reduce((sum, current) => sum + current.valor, 0);
  }
}
