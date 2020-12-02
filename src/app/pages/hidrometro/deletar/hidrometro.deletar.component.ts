import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DeletarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Hidrometro } from '../hidrometro.model';
import { HidrometroService } from '../hidrometro.service';

@Component({
  selector: 'ngx-hidrometro-deletar',
  templateUrl: './hidrometro.deletar.component.html',
})

export class HidrometroDeletarComponent extends DeletarComponent<Hidrometro, HidrometroService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: HidrometroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
  }

  public getModulo(): string {
    return Modulo.ANALISE;
  }

}
