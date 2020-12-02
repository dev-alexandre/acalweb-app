import { Component, Input } from '@angular/core';
import { Boleto } from '../../boleto.model';

@Component({
  selector: 'ngx-boleto-detalhe',
  templateUrl: './boleto.detalhe.component.html',
})

export class BoletoDetalheComponent {

  @Input()
  public boleto: Boleto;

}
