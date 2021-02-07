import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Hidrometro } from '../hidrometro.model';
import { HidrometroService } from '../hidrometro.service';

@Component({
  selector: 'ngx-hidrometro-listar',
  styleUrls: ['./hidrometro.listar.component.scss'],
  templateUrl: './hidrometro.listar.component.html',
})

export class HidrometroListarComponent  extends ListarComponent<Hidrometro, HidrometroService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: HidrometroService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.HIDROMETRO;
  }

  public selecionar(): void {
    this.router.navigate([ './selecionar' ], { relativeTo: this.activeRouter.parent });
  }

}
