import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from './boleto.model';
import { BoletoService } from './boleto.service';

@Component({
  selector: 'ngx-boleto',
  templateUrl: './boleto.component.html',
})
export class BoletoComponent {

  public data: Boleto = {};

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: BoletoService,
    ) {


  }



}
