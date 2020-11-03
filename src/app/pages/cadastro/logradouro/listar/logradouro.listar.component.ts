import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Logradouro } from '../logradouro.model';
import { LogradouroService } from '../logradouro.service';


@Component({
  selector: 'ngx-logradouro',
  styleUrls: ['./logradouro.listar.component.scss'],
  templateUrl: './logradouro.listar.component.html',
})

export class LogradouroListarComponent extends ListarComponent<Logradouro, LogradouroService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public logradouroService: LogradouroService) {

    super(router, activeRouter, logradouroService);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }
}
