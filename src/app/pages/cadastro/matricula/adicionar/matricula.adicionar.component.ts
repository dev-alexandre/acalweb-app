import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { Select } from 'app/@shared';
import { LogradouroFiltro } from '../../logradouro/logradouro.filtro';
import { Logradouro } from '../../logradouro/logradouro.model';
import { Matricula } from '../matricula.model';
import { MatriculaService } from '../matricula.service';
import { LogradouroService } from './../../logradouro/logradouro.service';
@Component({
  selector: 'ngx-matricula',
  templateUrl: './matricula.adicionar.component.html',
})

export class MatriculaAdicionarComponent extends AdicionarComponent<Matricula, MatriculaService> implements OnInit {

  public opcoes: Select<Logradouro>[] = [];
  public logradouros: Logradouro [];
  public hasHidrometro: boolean = false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService,
    public lograoduroService: LogradouroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
    this.data = {numero: '', logradouro: {nome: '',  tipoLogradouro: {nome: ''}  }};
  }

  ngOnInit(): void {
    this.createForm();
    this.loadLograoduro();
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

  public loadLograoduro(): void {

    const filtro: LogradouroFiltro = {
      nome: {asc: true, order: ['nome'], prioridade: 1 },
      tipoLogradouro: {asc: true, order: ['tipoLogradouro.nome'], prioridade: 0 }
    };

    this.lograoduroService.listar(filtro).subscribe(
      (logradouros) => {
         this.logradouros = logradouros;
         this.agruparLogradouro(this.logradouros);
      }
    );
  }

  private agruparLogradouro(logradouros: Logradouro[]): void {

    const grupos: string [] =  [];

    logradouros.forEach(logradouro => {

      if (grupos.indexOf(logradouro.tipoLogradouro.nome) === -1) {
        grupos.push(logradouro.tipoLogradouro.nome);
      }

    });

    grupos.forEach(grupo => {
        this.opcoes.push({
          title: grupo,
          values: this.logradouros.filter(l => l.tipoLogradouro.nome === grupo),
        });
    });
  }

  public changeDataBeforeSave(matricula: Matricula): Matricula {
    matricula.possuiHidrometro = matricula.hidrometro ? true : false;

    return matricula;
  }

  public createForm() {

    this.form = new FormGroup({

      logradouro: new FormControl(
        null, [
        Validators.required,
      ]),

      numero: new FormControl(
        null, [
        Validators.required,
        Validators.maxLength(5),
        Validators.min(1)
      ]),

      letra: new FormControl(
        null, [
        Validators.maxLength(5),
        Validators.min(1),
      ]),

      hidrometro: new FormControl(
        null, [
      ]),

      possuiHidrometro: new FormControl(
        null, [
      ]),
      }
    );
  }


  public toggle(checked: boolean) {
    this.hasHidrometro = checked;
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
