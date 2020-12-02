import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Analise } from '../analise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'ngx-analise-listar',
  styleUrls: ['./analise.listar.component.scss'],
  templateUrl: './analise.listar.component.html',
})

export class AnaliseListarComponent extends ListarComponent<Analise, AnaliseService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AnaliseService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.ANALISE;
  }

}
