import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DeletarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Matricula } from '../matricula.model';
import { MatriculaService } from '../matricula.service';

@Component({
  selector: 'ngx-matricula',
  templateUrl: './matricula.deletar.component.html',
})

export class MatriculaDeletarComponent extends DeletarComponent<Matricula, MatriculaService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

}
