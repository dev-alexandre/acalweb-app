import { Component, Input } from '@angular/core';
import { Analise } from 'app/pages/analise/analise.model';

@Component({
  selector: 'ngx-boleto-analise',
  templateUrl: './boleto.analise.component.html',
})

export class BoletoAnaliseComponent {

  @Input()
  public analise: Analise;


}
