import { Component, Input, OnInit } from '@angular/core';
import { Analise } from 'app/pages/analise/analise.model';
import { BoletoService } from '../../boleto.service';

@Component({
  selector: 'ngx-boleto-analise',
  templateUrl: './boleto.analise.component.html',
})

export class BoletoAnaliseComponent implements OnInit {

  @Input()
  public analise: Analise;

  public teste: Analise;

  constructor(public service: BoletoService) {

  }

  ngOnInit(): void {

    this.service.getAnaliseExemplo().subscribe(
      (analise) => {
        this.analise = analise;
      }
    );
  }

}
