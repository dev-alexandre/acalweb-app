import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Hidrometro } from '../hidrometro.model';
import { HidrometroService } from '../hidrometro.service';

@Component({
  selector: 'ngx-hidrometro-editar',
  templateUrl: './hidrometro.editar.component.html',
})

export class HidrometroEditarComponent extends EditarComponent<Hidrometro, HidrometroService> implements OnInit  {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: HidrometroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {

    this.load();
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.HIDROMETRO;
  }

  public createForm() {

  }


}
