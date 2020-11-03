import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DeletarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Grupo } from '../grupo.model';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'ngx-grupo',
  templateUrl: './grupo.deletar.component.html',
})

export class GrupoDeletarComponent extends DeletarComponent<Grupo, GrupoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
  }

  public getModulo(): string {
    return Modulo.GRUPO;
  }

}
