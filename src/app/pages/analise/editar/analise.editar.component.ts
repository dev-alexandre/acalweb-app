import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { DateValidator } from 'app/@core/validator/dataValidator';
import { ReferenciaValidator } from 'app/@core/validator/referenciaValidator';
import { Modulo } from 'app/@library/enum';
import { Analise } from '../analise.model';
import { AnaliseService } from '../analise.service';

@Component({
  selector: 'ngx-analise-editar',
  templateUrl: './analise.editar.component.html',
})

export class AnaliseEditarComponent extends EditarComponent<Analise, AnaliseService> implements OnInit  {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AnaliseService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {

    this.load();
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.ANALISE;
  }

  public createForm() {

    this.form = new FormGroup({

      id: new FormControl(
        this.data.id
      ),

      referenciaInicial: new FormControl(
        this.data.referencia, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          ReferenciaValidator.isReferencia(),
      ]),

      coletas: new FormBuilder().array([]),

    });

    this.data.coletas.forEach( (c) => {
      this.coletas.push(
        new FormGroup({
          parametro: new FormControl(c.parametro, [Validators.required]),
          analisado: new FormControl(c.analisado, [Validators.required]),
          exigido: new FormControl( c.exigido, [Validators.required]),
          conforme: new FormControl(c.conforme, [Validators.required]),
        })
      );
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
