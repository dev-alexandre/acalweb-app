import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DeletarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-cliente-deletar',
  templateUrl: './cliente.deletar.component.html',
})

export class ClienteDeletarComponent extends DeletarComponent<Cliente, ClienteService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
  }

  public getModulo(): string {
    return Modulo.CLIENTE;
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get documento() {
    return this.form.get('documento');
  }

  public get nascimento() {
    return this.form.get('nascimento');
  }

  public get telefone() {
    return this.form.get('telefone');
  }
}
