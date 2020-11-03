import { DateValidator } from 'app/@core/validator/dataValidator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { CPFValidator } from 'app/@core/validator/cpfValidator';
import { Modulo } from 'app/@library/enum';
import { Logradouro } from '../../logradouro/logradouro.model';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-cliente-editar',
  templateUrl: './cliente.editar.component.html',
})

export class ClienteEditarComponent extends EditarComponent<Cliente, ClienteService> implements OnInit  {

  public logradouros: Logradouro [];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {

    this.load();
    this.createForm();

    this.form.setValue(this.data);
  }

  public getModulo(): string {
    return Modulo.CLIENTE;
  }


  public createForm() {

    this.form = new FormGroup({

      id: new FormControl(
        null
      ),

      createdDate: new FormControl(
        null
      ),

      lastModifiedDate: new FormControl(
        null
      ),

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
