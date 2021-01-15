import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'ngx-usuario-listar',
  styleUrls: ['./usuario.listar.component.scss'],
  templateUrl: './usuario.listar.component.html',
})

export class UsuarioListarComponent extends ListarComponent<Usuario, UsuarioService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: UsuarioService) {

    super(router, activeRouter, service);
  }

  ngOnInit(): void {
    super.init();
  }

  public getModulo(): string {
    return Modulo.USUARIO;
  }
}
