import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Matricula } from '../matricula.model';
import { MatriculaService } from '../matricula.service';


@Component({
  selector: 'ngx-matricula',
  styleUrls: ['./matricula.listar.component.scss'],
  templateUrl: './matricula.listar.component.html',
})

export class MatriculaListarComponent extends ListarComponent<Matricula, MatriculaService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }
}
