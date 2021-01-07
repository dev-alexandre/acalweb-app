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

  loaded: boolean = false;

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

    this.form.patchValue({id: this.data.id});
    this.form.patchValue({createdDate: this.data.createdDate});
    this.form.patchValue({lastModifiedDate: this.data.lastModifiedDate});
    this.form.patchValue({referencia: this.data.referencia});

    this.form.get('coletas').setValue(this.data.coletas);
    this.loaded = true;
  }

  public getModulo(): string {
    return Modulo.ANALISE;
  }

  public createForm() {

    this.form = new FormGroup({

      id: new FormControl(
        null
      ),

      createdDate: new FormControl(
        null
      ),

      referencia: new FormControl(
        null
      ),

      lastModifiedDate: new FormControl(
        null
      ),

      coletas: new FormBuilder().array([
        new FormGroup({
          parametro: new FormControl(null, [Validators.required]),
          analisado: new FormControl(null, [Validators.required]),
          exigido: new FormControl(null, [Validators.required]),
          conforme: new FormControl(null, [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl(null, [Validators.required]),
          analisado: new FormControl(null, [Validators.required]),
          exigido: new FormControl(null, [Validators.required]),
          conforme: new FormControl(null, [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl(null, [Validators.required]),
          analisado: new FormControl(null, [Validators.required]),
          exigido: new FormControl(null, [Validators.required]),
          conforme: new FormControl(null, [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl(null, [Validators.required]),
          analisado: new FormControl(null, [Validators.required]),
          exigido: new FormControl(null, [Validators.required]),
          conforme: new FormControl(null, [Validators.required]),
        }),
        new FormGroup({
          parametro: new FormControl(null, [Validators.required]),
          analisado: new FormControl(null, [Validators.required]),
          exigido: new FormControl(null, [Validators.required]),
          conforme: new FormControl(null, [Validators.required]),
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
