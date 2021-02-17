import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { DateValidator } from 'app/@core/validator/dataValidator';
import { DocumentoValidator } from 'app/@core/validator/documentoValidator';
import { Modulo } from 'app/@library/enum';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-adicionar-cliente',
  templateUrl: './cliente.adicionar.component.html',
})

export class ClienteAdicionarComponent extends AdicionarComponent<Cliente, ClienteService> implements OnInit {

  public isPessoaFisica: boolean = true;
  public currentDate: string;

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
        DocumentoValidator.isDocument(),
      ]),

      socio: new FormControl(
        null, [
      ]),

      letra: new FormControl(
        null, [
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

  public changeTipoPessoa(): void {
    this.isPessoaFisica = !this.isPessoaFisica;
    this.form.get('documento').setValue(null);

    if (!this.isPessoaFisica) {
      this.form.get('socio').setValue(null);
      this.form.get('numero').setValue(null);
      this.form.get('socio').disable();
      this.form.get('numero').disable();
    } else {
      this.form.get('socio').enable();
      this.form.get('numero').enable();
    }

  }

  public get nome() {
    return this.form.get('nome');
  }

  public get socio() {
    return this.form.get('socio');
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

  public get letra() {
    return this.form.get('letra');
  }

}
