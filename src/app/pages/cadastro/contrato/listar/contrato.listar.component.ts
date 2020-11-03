import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Contrato } from '../contrato.model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'ngx-contrato',
  styleUrls: ['./contrato.listar.component.scss'],
  templateUrl: './contrato.listar.component.html',
})

export class ContratoListarComponent extends ListarComponent<Contrato, ContratoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }
}
