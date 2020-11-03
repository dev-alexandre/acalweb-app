import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-cliente-listar',
  styleUrls: ['./cliente.listar.component.scss'],
  templateUrl: './cliente.listar.component.html',
})

export class ClienteListarComponent extends ListarComponent<Cliente, ClienteService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.CLIENTE;
  }
}
