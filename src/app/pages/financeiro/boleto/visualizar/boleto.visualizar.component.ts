import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public analiseService: AnaliseService) {

  }

  ngOnInit(): void {

    if (this.boleto) {
      this.loaded = true;

      this.analiseService.buscarPorReferencia(this.boleto.referencia).subscribe(
        (analise: Analise) => {
          this.analise = analise;
        },
      );
    }

  }

}
