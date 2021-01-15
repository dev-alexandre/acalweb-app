import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'ngx-adicionar-usuario',
  templateUrl: './usuario.adicionar.component.html',
})

export class UsuarioAdicionarComponent extends AdicionarComponent<Usuario, UsuarioService> implements OnInit {

  public isPessoaFisica: boolean = true;
  public currentDate: string;
  public cargos: {nome: string} [];
  public showPassword: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: UsuarioService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
    this.showPassword = true;
  }

  ngOnInit(): void {
    this.createForm();

    this.service.listarCargos().subscribe(
      (cargos) => {
        this.cargos = cargos;
      }
    );
  }

  public getModulo(): string {
    return Modulo.USUARIO;
  }

  public createForm() {

    this.form = new FormGroup({

      email: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),

      name: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),

      title: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),

      password: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),

      accountNonExpired: new FormControl(
        true, [
        Validators.required,
      ]),

      accountNonLocked: new FormControl(
        true, [
        Validators.required,
      ]),

      credentialsNonExpired: new FormControl(
        true, [
        Validators.required,
      ]),

      enabled: new FormControl(
        true, [
        Validators.required,
      ]),

      funcoes: new FormControl(
        [{nome: 'ROLE_ROOT'},{nome: 'ROLE_DEV'}  ], [
        Validators.required,
      ]),

      }
    );
  }

  public get email() {
    return this.form.get('email');
  }

  public get name() {
    return this.form.get('name');
  }

  public get password() {
    return this.form.get('password');
  }

  public get title() {
    return this.form.get('title');
  }

}
