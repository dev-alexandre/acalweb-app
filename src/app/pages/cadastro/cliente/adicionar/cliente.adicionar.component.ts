import { CPFValidator } from './../../../../@core/validator/cpfValidator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { DateValidator } from 'app/@core/validator/dataValidator';

@Component({
  selector: 'ngx-adicionar-cliente',
  templateUrl: './cliente.adicionar.component.html',
})

export class ClienteAdicionarComponent extends AdicionarComponent<Cliente, ClienteService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
    this.data = {};
  }

  ngOnInit(): void {
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.CLIENTE;
  }

  public createForm() {

    this.form = new FormGroup({

      nome: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),

      documento: new FormControl(
        null, [
        Validators.required,
        CPFValidator.isCPF(),
      ]),

      dataNascimento: new FormControl(
        null, [
        Validators.minLength(8),
        Validators.maxLength(8),
        DateValidator.isDate(),
      ]),

      telefone: new FormControl(
        null, [
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),

      }
    );
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get documento() {
    return this.form.get('documento');
  }

  public get dataNascimento() {
    return this.form.get('dataNascimento');
  }

  public get telefone() {
    return this.form.get('telefone');
  }

}