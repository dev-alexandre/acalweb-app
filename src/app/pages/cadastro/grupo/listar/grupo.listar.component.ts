import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Grupo } from '../grupo.model';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'ngx-grupo',
  styleUrls: ['./grupo.listar.component.scss'],
  templateUrl: './grupo.listar.component.html',
})

export class GrupoListarComponent extends ListarComponent<Grupo, GrupoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.GRUPO;
  }
}
