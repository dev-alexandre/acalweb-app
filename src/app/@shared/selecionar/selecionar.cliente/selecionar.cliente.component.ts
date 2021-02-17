import { ElementoFiltro } from 'app/@core/table/elemento-filtro.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'app/pages/cadastro/cliente/cliente.model';
import { ClienteService } from 'app/pages/cadastro/cliente/cliente.service';

@Component({
  selector: 'ngx-selecionar-cliente',
  templateUrl: './selecionar.cliente.component.html',
})

export class SelecionarClienteComponent implements OnInit {

  @Input()
  public submited: boolean;

  @Output()
  private setData = new EventEmitter();

  public textSeach: string = '';
  public controle: number = 0;
  public cliente: Cliente;
  public clientes: Cliente[];
  public onFocus: boolean = false;
  public seaching: boolean = false;

  constructor(public service: ClienteService) {

  }


  ngOnInit(): void {
  }

  public atualizar(): void {

    if (this.textSeach.length >= 3) {

      const filtro = {
        nome: {valor: this.textSeach, asc: true},
      };

      if (!this.seaching) {
        this.seaching = true;
        this.service.listar(filtro).subscribe(
          (clientes: Cliente[]) => {
            this.clientes = clientes;
            this.seaching = false;
          }
        );
      }
    } else {
      this.clientes = [];
     }

  }

  public selecionar(cliente: Cliente): void {
    this.setData.emit(cliente);
  }

  public getStatus(): string {
    if (!this.submited) {
      return 'basic';
    } else {

      if (this.cliente) {
        return 'success';
      } else {
        return 'danger';
      }

    }
  }

}
