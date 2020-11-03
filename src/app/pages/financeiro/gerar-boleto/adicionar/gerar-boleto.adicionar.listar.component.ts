import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-gerar-boleto-adicionar',
  templateUrl: './gerar-boleto.adicionar.component.html',
})

export class GerarBoletoAdicionarComponent {

  formControl = new FormControl(new Date());
  ngModelDate = new Date();


}
