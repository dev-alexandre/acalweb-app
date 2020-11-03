import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DeletarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Logradouro, TipoLogradouro } from '../logradouro.model';
import { LogradouroService } from '../logradouro.service';

@Component({
  selector: 'ngx-logradouro',
  templateUrl: './logradouro.deletar.component.html',
})

export class LogradouroDeletarComponent extends DeletarComponent<Logradouro, LogradouroService> implements OnInit {

  public tipos: TipoLogradouro[];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
  }

  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }

}
