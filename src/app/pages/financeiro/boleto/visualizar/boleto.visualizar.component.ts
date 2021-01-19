import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Analise } from 'app/pages/analise/analise.model';
import { AnaliseService } from 'app/pages/analise/analise.service';
import { Boleto } from 'app/pages/financeiro/boleto/boleto.model';

@Component({
  selector: 'ngx-boleto-visualizar',
  templateUrl: './boleto.visualizar.component.html'
})

export class BoletoVisualizarComponent implements OnInit {

  @Input()
  public boleto: Boleto;

  public loaded: boolean = false;
  public analise: Analise;
  public storage: Storage = sessionStorage;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public analiseService: AnaliseService) {

  }

  ngOnInit(): void {

    this.boleto = JSON.parse(this.storage.getItem('boletovisualizar'));
    this.storage.removeItem('boletovisualizar');

    if (!this.boleto) {

      this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });

    } else if (this.boleto) {
      this.loaded = true;

      this.analiseService.buscarPorReferencia(this.boleto.referencia).subscribe(
        (analise: Analise) => {
          this.analise = analise;
        },
      );
    }

  }

}
