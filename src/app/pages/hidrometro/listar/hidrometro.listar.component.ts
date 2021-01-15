import { Matricula } from 'app/pages/cadastro/matricula/matricula.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { MatriculaService } from 'app/pages/cadastro/matricula/matricula.service';
import { Modulo } from 'app/@library/enum';

@Component({
  selector: 'ngx-hidrometro-listar',
  styleUrls: ['./hidrometro.listar.component.scss'],
  templateUrl: './hidrometro.listar.component.html',
})

export class HidrometroListarComponent  extends ListarComponent<Matricula, MatriculaService> implements OnInit {

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

  public selecionar(): void {
    this.router.navigate([ './selecionar' ], { relativeTo: this.activeRouter.parent });
  }

}
