import { BoletoService } from './../financeiro/boleto/boleto.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ContratoService } from '../cadastro/contrato/contrato.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  public isLoadFaturas: boolean = false;
  public isLoadCategorias: boolean = false;

  public fatias: { name: string, value: number}[] = [];
  public barras: { name: string, value: number}[] = [];

  private categorias = [{nome: 'Sócio Fundador'}, {nome: 'Sócio Efetivo'}, {nome: 'Sócio Temporário'}];
  private referencias: string[] = [] ;

  constructor(public service: ContratoService, public boletoService: BoletoService) {

  }

  ngOnInit(): void {
    this.loadCategorias();
    this.loadFaturas();
  }

  public loadCategorias (): void {
    let count = 0;
    this.categorias.forEach(c => {
      this.service.countByCategoria(c).subscribe(
        (value) => {
          if (value !== 0) {
            this.fatias.push( {name : c.nome, value: value});
          }
          count++;
          if (count === this.categorias.length) {
            this.isLoadCategorias = true;
          }
        }
      );
    });
  }

  public loadFaturas (): void {
    for (let x = 5 ; x >= 0; x--) {
      this.referencias.push(moment().subtract(x, 'M').format('MMYYYY'));
    }

    this.boletoService.countByReferencia(this.referencias).subscribe(
      (value: { name: string, value: number}[] ) => {

        this.barras = value;
        this.isLoadFaturas = true;

      });
  }
}
