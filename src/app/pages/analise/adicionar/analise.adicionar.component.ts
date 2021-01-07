import { ReferenciaValidator } from './../../../@core/validator/referenciaValidator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { DateValidator } from 'app/@core/validator/dataValidator';
import { Modulo } from 'app/@library/enum';
import { Mensagem } from 'app/@library/enum/mensagem.enum';
import { Analise } from '../analise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'ngx-analise-adicionar',
  templateUrl: './analise.adicionar.component.html',
})

export class AnaliseAdicionarComponent extends AdicionarComponent<Analise, AnaliseService> implements OnInit {

  parametros: {nome: string, analisado: string, exigido: string, conforme: string }[] = [];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AnaliseService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

    this.parametros.push({nome: 'Cor Aparente – 15 UH', analisado: '10', exigido: '10', conforme: '10' });
    this.parametros.push({nome: 'Turbidez – 5 UT', analisado: '10', exigido: '10', conforme: '10' });
    this.parametros.push({nome: 'Cloro – Min 0,2 mg/L', analisado: '10', exigido: '10', conforme: '10' });
    this.parametros.push({nome: 'Escherichia coli', analisado: '10', exigido: '10', conforme: '10' });
    this.parametros.push({nome: 'Cor Aparente – 15 UH', analisado: '10', exigido: '10', conforme: '10' });
  }

  ngOnInit(): void {
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.ANALISE;
  }

  public createForm() {

    this.form = new FormGroup({

      referencia: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        ReferenciaValidator.isReferencia(),
      ]),

      coletas: new FormBuilder().array([
        new FormGroup({
          parametro: new FormControl('Cor Aparente – 15 UH', [Validators.required]),
          analisado: new FormControl('10', [Validators.required]),
          exigido: new FormControl('10', [Validators.required]),
          conforme: new FormControl('10', [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl('Turbidez – 5 UT', [Validators.required]),
          analisado: new FormControl('10', [Validators.required]),
          exigido: new FormControl('10', [Validators.required]),
          conforme: new FormControl('10', [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl('Cloro – Min 0,2 mg/L', [Validators.required]),
          analisado: new FormControl('10', [Validators.required]),
          exigido: new FormControl('10', [Validators.required]),
          conforme: new FormControl('10', [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl('Escherichia coli', [Validators.required]),
          analisado: new FormControl('10', [Validators.required]),
          exigido: new FormControl('10', [Validators.required]),
          conforme: new FormControl('10', [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl('Coliformes Totais', [Validators.required]),
          analisado: new FormControl('10', [Validators.required]),
          exigido: new FormControl('10', [Validators.required]),
          conforme: new FormControl('10', [Validators.required]),
        }),
      ]),

    });

  }

  public get nome() {
    return this.form.get('nome');
  }

  public get referencia() {
    return this.form.get('referencia');
  }

  public get coletas() {
    return (this.form.get('coletas') as FormArray).controls;
  }

}
