import { Component, Input } from '@angular/core';
import { Boleto } from '../../boleto.model';

@Component({
  selector: 'ngx-boleto-codigo',
  templateUrl: './boleto.codigo.component.html',
})

export class BoletoCodigoComponent {

  @Input()
  public boleto: Boleto;

}
