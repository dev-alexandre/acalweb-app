import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Logradouro } from '../logradouro.model';
import { LogradouroService } from '../logradouro.service';
import { TipoLogradouro } from './../logradouro.model';

@Component({
  selector: 'ngx-logradouro',
  templateUrl: './logradouro.editar.component.html',
})

export class LogradouroEditarComponent extends EditarComponent<Logradouro, LogradouroService> implements OnInit  {

  public tipos: TipoLogradouro[];
  public currentDate: string;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: LogradouroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {

    this.load();
    this.createForm();
    this.service.listarTipoLogradouro().subscribe(
      (tipos) => {
        this.tipos = tipos;
      }
    );


    this.form.patchValue({tipoLogradouro: this.data.tipoLogradouro});
  }

  public getModulo(): string {
    return Modulo.LOGRADOURO;
  }

  public changeDataBeforeSave(logradouro: Logradouro): Logradouro {
    logradouro.nome = logradouro.nome.trim();

    return logradouro;
  }

  public createForm() {

    this.form = new FormGroup({

      nome: new FormControl(
        this.data.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),

      tipoLogradouro: new FormControl(
        {}, [
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
