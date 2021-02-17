import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ValorAguaService } from './valor-agua.service';

@Component({
  selector: 'ngx-valor-agua',
  templateUrl: './valor-agua.component.html',
})

export class ValorAguaComponent implements OnInit {

  public valor: number;
  public litrosGratuidade: number;

  constructor(public service: ValorAguaService, public toast: NbToastrService) {

  }

  ngOnInit(): void {
    this.valor = 0;

    this.service.buscarAtual().subscribe(
      (valorAgua) => {
        this.valor = valorAgua.valor;
        this.litrosGratuidade = valorAgua.litrosGratuidade;
      }
    );
  }

  salvar() {
    this.service.salvar({valor: this.valor, litrosGratuidade: this.litrosGratuidade}).subscribe(
      () => {
        this.toast.success('Salvo', 'Salvo com sucesso');
      },
      (error) => {
        this.toast.danger('Erro', error);
      }
    );
  }

}
