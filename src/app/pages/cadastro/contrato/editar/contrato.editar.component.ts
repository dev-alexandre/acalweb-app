import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Contrato } from '../contrato.model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'ngx-contrato',
  templateUrl: './contrato.editar.component.html',
})

export class ContratoEditarComponent extends EditarComponent<Contrato, ContratoService> implements OnInit  {

  public loading: boolean = false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {
    this.load();
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }

  public createForm(): void {
  }


}
