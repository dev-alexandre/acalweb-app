import { DateValidator } from 'app/@core/validator/dataValidator';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'ngx-usuario-editar',
  templateUrl: './usuario.editar.component.html',
})

export class UsuarioEditarComponent extends EditarComponent<Usuario, UsuarioService> implements OnInit {

  public isPessoaFisica: boolean = true;
  public currentDate: string;
  public cargos: {nome: string} [];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: UsuarioService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {

    this.load();
    this.createForm();

    this.form.patchValue({
      email: this.data.email,
      name: this.data.name,
      title: this.data.title,
      password: this.data.password,
      accountNonExpired: this.data.isAccountNonExpired,
      accountNonLocked: this.data.isAccountNonLocked,
      credentialsNonExpired: this.data.isCredentialsNonExpired,
      enabled: this.data.isEnabled,
      funcoes: this.data.funcoes,
    });

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
        [{nome: 'ROLE_ROOT'}, {nome: 'ROLE_DEV'}  ], [
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
