import { Matricula } from './../../matricula/matricula.model';
import { Grupo } from './../../grupo/grupo.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { ContratoService } from '../contrato.service';
import { Contrato } from '../contrato.model';
import { Cliente } from '../../cliente/cliente.model';

@Component({
  selector: 'ngx-contrato',
  templateUrl: './contrato.adicionar.component.html',
})

export class ContratoAdicionarComponent extends AdicionarComponent<Contrato, ContratoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
    this.data = {};
  }

  ngOnInit(): void {
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }


  public createForm() {

    this.form = new FormGroup({

      cliente: new FormControl(
        null, [
        Validators.required,
      ]),

      matricula: new FormControl(
        null, [
        Validators.required,
      ]),

      matriculaCorrespondencia: new FormControl(
        null, [
        Validators.required,
      ]),

      grupo: new FormControl(
        null, [
        Validators.required,
      ]),

      indContratoPrincipal: new FormControl(
        false, [
        Validators.required,
      ]),

      valor: new FormControl(
        null, [
        Validators.required,
      ]),

      habilitado: new FormControl(
        true, [
        Validators.required,
      ]),

    });
  }

  public selecionarCliente(cliente: Cliente): void {
    this.cliente.setValue(cliente);
  }

  public selecionarGrupo(grupo: Grupo): void {
    this.grupo.setValue(grupo);
    this.valor.setValue(grupo.valor);
  }

  public selecionarMatricula(matricula: Matricula): void {
    this.matricula.setValue(matricula);
  }

  public selecionarMatriculaCorrespondencia(matricula: Matricula): void {
    this.matriculaCorrespondencia.setValue(matricula);
  }

  public get cliente() {
    return this.form.get('cliente');
  }

  public get matricula() {
    return this.form.get('matricula');
  }

  public get matriculaCorrespondencia() {
    return this.form.get('matriculaCorrespondencia');
  }

  public get grupo() {
    return this.form.get('grupo');
  }

  public get indContratoPrincipal() {
    return this.form.get('indContratoPrincipal');
  }

  public get valor() {
    return this.form.get('valor');
  }

}
