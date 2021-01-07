import { DateValidator } from 'app/@core/validator/dataValidator';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Logradouro } from '../../logradouro/logradouro.model';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-cliente-editar',
  templateUrl: './cliente.editar.component.html',
})

export class ClienteEditarComponent extends EditarComponent<Cliente, ClienteService> implements OnInit{

  public logradouros: Logradouro [];
  public isPessoaFisica: boolean = true;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }


  public changeDataBeforeSave(cliente: Cliente): Cliente {
    this.form.get('documento').setValue(this.data.documento);
    return cliente;
  }

  ngOnInit(): void {

    this.load();
    this.createForm();

    this.form.patchValue(
      {
        nome: this.data.nome,
        telefone: this.data.telefone,
        documento: this.data.documento,
        dataNascimento: this.data.dataNascimento,
        socio: this.data.socio
      });

    this.isPessoaFisica = (this.data.documento.length === 11);

    if (!this.isPessoaFisica) {
      this.form.get('socio').disable();
    } else {
      this.form.get('socio').enable();
    }

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
      ]),

      dataNascimento: new FormControl(
        null, [
        Validators.minLength(8),
        Validators.maxLength(8),
        DateValidator.isDate(),
      ]),

      socio: new FormControl(
        null, [
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

  public get socio() {
    return this.form.get('socio');
  }

}
