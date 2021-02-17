import { Pagamento } from './../../financeiro/boleto/boleto.model';
import { MovimentacaoService } from './movimentacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-movimentacao',
  templateUrl: './movimentacao.component.html'
})

export class MovimentacaoComponent implements OnInit {

  public pagamentos: any[] = [];

  constructor(public movimentacaoService: MovimentacaoService) {

  }

  ngOnInit(): void {
    this.movimentacaoService.listarTodos().subscribe(
      (pagamentos: any[]) => {
        this.pagamentos = pagamentos;
      },
      () => {}
    );
  }

}
