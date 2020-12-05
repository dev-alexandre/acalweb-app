import { HidrometroService } from './../hidrometro.service';
import { Component, OnInit } from '@angular/core';
import { Hidrometro } from '../hidrometro.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-hidrometro-adicionar',
  templateUrl: './hidrometro.adicionar.component.html',
})

export class HidrometroAdicionarComponent implements OnInit {

  hidrometros: Hidrometro[] = [];
  referencia: string;
  load: boolean = false;

  constructor(
    public hidrometroService: HidrometroService,
    public activeRouter: ActivatedRoute,
    public router: Router,
    ) {

  }

  ngOnInit(): void {
    this.hidrometroService.listarPorReferencia(this.referencia).subscribe(
      (hidrometros) => {
        this.hidrometros = hidrometros;
      },
      () => {}
    );
  }

  public previsualizar(): void {
    this.hidrometroService.listarPorReferencia(this.referencia).subscribe(
      (hidrometros) => {
        this.hidrometros = hidrometros;
        this.load = true;
      },
      () => {}
    );
  }

  public salvar(){
    this.hidrometroService.salvarTodos(this.hidrometros).subscribe(
      () => {
        this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
      }
    );
  }

}
