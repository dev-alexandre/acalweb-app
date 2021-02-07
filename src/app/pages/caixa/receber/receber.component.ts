import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Boleto } from 'app/pages/financeiro/boleto/boleto.model';
import { BoletoService } from 'app/pages/financeiro/boleto/boleto.service';
import { MovimentacaoService } from '../movimentacao/movimentacao.service';

@Component({
  selector: 'ngx-receber',
  templateUrl: './receber.component.html'
})

export class ReceberComponent implements OnInit {

  public loaded: boolean = false;
  public boleto: Boleto;

  public numero: string = '2020000016';

  constructor(

    public toast: NbToastrService,
    public boletoService: BoletoService,
    public movimentacaoService: MovimentacaoService,
    private dialogService: NbDialogService) {

  }

  ngOnInit(): void {

  }

  buscar() {
    this.boletoService.buscarPorNumero(this.numero).subscribe(
      (boleto: Boleto) => {
        if (boleto) {
          this.boleto = boleto;
          this.loaded = true;
        } else {
          this.toast.show('Número não registrado', 'Não foi possivel completar');
        }
      },
    );
  }

  receber(): void {
    
  }

}
