import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Select } from 'app/@shared';
import { Logradouro } from '../../logradouro/logradouro.model';
import { LogradouroService } from '../../logradouro/logradouro.service';
import { MatriculaService } from '../matricula.service';
import { Matricula } from './../matricula.model';

@Component({
  selector: 'ngx-matricula',
  templateUrl: './matricula.editar.component.html',
})

export class MatriculaEditarComponent extends EditarComponent<Matricula, MatriculaService> implements OnInit  {

  public opcoes: Select<Logradouro>[] = [];
  public logradouros: Logradouro [];
  public hasHidrometro: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService,
    public logradouroService: LogradouroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  public changeDataBeforeSave(matricula: Matricula): Matricula {
    matricula.logradouro = this.logradouros.find(i => i.nome === this.logradouro.value.nome);
    return matricula;
  }

  ngOnInit(): void {

    this.loadLograoduro();
    this.load();
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

  public loadLograoduro(): void {
    this.logradouroService.listarTodos().subscribe(
      (logradouros) => {
        this.logradouros = logradouros;
        this.form.patchValue({logradouro: this.data.logradouro});
      }
    );
  }

  public createForm() {

    this.hasHidrometro = this.data.hidrometro ? true : false;

    this.form = new FormGroup({

      numero: new FormControl(
        this.data.numero, [
        Validators.required,
        Validators.maxLength(5),
        Validators.min(1)
      ]),

      letra: new FormControl(
        this.data.letra, [
        Validators.maxLength(5),
        Validators.min(1),
      ]),

      logradouro: new FormControl(
        {}, [
        Validators.required,
      ]),

      possuiHidrometro: new FormControl(
        this.data.possuiHidrometro, [
      ]),

      hidrometro: new FormControl(
        this.data.hidrometro, [
      ]),

      }
    );

  }

  public toggle() {
    this.hasHidrometro = !this.hasHidrometro;
  }

  public get logradouro() {
    return this.form.get('logradouro');
  }

  public get numero() {
    return this.form.get('numero');
  }

  public get letra() {
    return this.form.get('letra');
  }

  public get hidrometro() {
    return this.form.get('hidrometro');
  }

  public get possuiHidrometro() {
    return this.form.get('possuiHidrometro');
  }

}
