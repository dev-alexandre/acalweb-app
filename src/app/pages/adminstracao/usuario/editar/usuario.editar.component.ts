import { Component, OnInit } from '@angular/core';
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

  public currentDate: string;
  public cargos: {nome: string} [];
  public autorizacoes: { name: string; } [];
  public autorizacoesSelecionadas: { name: string; } [];
  public autorizacao: {name: string};

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

    this.data.funcoes?.forEach(funcao => {
        funcao.name = funcao.name.replace('ROLE_', '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
      }
    );


    this.form.patchValue({
      email: this.data?.email,
      title: this.data?.title,
      password: this.data.password,
      accountNonExpired: this.data.accountNonExpired,
      accountNonLocked: this.data.accountNonLocked,
      credentialsNonExpired: this.data.credentialsNonExpired,
      funcoes: this.data.funcoes,
      name: this.data?.name,
    });

    this.service.listarCargos().subscribe(
      (cargos) => {
        this.cargos = cargos;

        this.cargos.sort(function(a, b) {
          if (a.nome < b.nome) { return -1; }
          if (a.nome > b.nome) { return  1; }
          return 0;
        });
      }
    );

    this.service.listarAutorizacoes().subscribe(
      (autorizacoes) => {
        this.autorizacoes = autorizacoes;

        this.autorizacoes.sort(function(a, b) {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return  1; }
          return 0;
        });

      }
    );

    this.autorizacoesSelecionadas = this.data.funcoes;
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

      title: new FormControl(
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
        [], [
        Validators.required,
      ]),

      }
    );
  }

  public removerAutorizacao(autorizacao:  { name: string; }) {

    const index = this.autorizacoesSelecionadas.indexOf(autorizacao, 0);
    if (index > -1) {
      this.autorizacoesSelecionadas.splice(index, 1);
      this.form.get('funcoes').setValue(this.autorizacoesSelecionadas);
    }
  }

  public onSelectAutorizacao(): void {

    if (!this.autorizacoesSelecionadas) {
      this.autorizacoesSelecionadas = [];
    }

    if (!this.autorizacoesSelecionadas.some(a => a.name === this.autorizacao.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase())) {
      this.autorizacoesSelecionadas.push(this.autorizacao);
      this.form.get('funcoes').setValue(this.autorizacoesSelecionadas);
    }

    this.autorizacoesSelecionadas.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return  1; }
      return 0;
    });

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

  public get funcoes() {
    return this.form.get('funcoes');
  }

}
