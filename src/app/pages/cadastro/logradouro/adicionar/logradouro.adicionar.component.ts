import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import * as moment from 'moment';
import { Logradouro } from '../logradouro.model';
import { LogradouroService } from '../logradouro.service';
import { TipoLogradouro } from './../logradouro.model';

@Component({
  selector: 'ngx-logradouro',
  templateUrl: './logradouro.adicionar.component.html',
})

export class LogradouroAdicionarComponent extends AdicionarComponent<Logradouro, LogradouroService> implements OnInit {

  public tipos: TipoLogradouro[];
  public data: Logradouro;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

    this.data = {nome: '', tipoLogradouro: {nome: 'Avenida'}};
  }

  ngOnInit(): void {
    this.tipos = this.service.listarTipoLogradouro();
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }

  public createForm() {

    this.form = new FormGroup({

      nome: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      tipoLogradouro: new FormControl(
        null, [
        Validators.required,
      ]),
      }
    );

  }

  public get tipoLogradouro() {
    return this.form.get('tipoLogradouro');
  }

  public get nome() {
    return this.form.get('nome');
  }

}
