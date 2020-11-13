import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { Logradouro } from '../../logradouro/logradouro.model';
import { Matricula } from '../matricula.model';
import { MatriculaService } from '../matricula.service';
import { LogradouroService } from './../../logradouro/logradouro.service';

@Component({
  selector: 'ngx-matricula',
  templateUrl: './matricula.adicionar.component.html',
})

export class MatriculaAdicionarComponent extends AdicionarComponent<Matricula, MatriculaService> implements OnInit {

  public logradouros: Logradouro [];

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
    this.lograoduroService.listarTodos().subscribe(
      (logradouros) => {
         this.logradouros = logradouros;
      }

    );
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
      }
    );
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

}
