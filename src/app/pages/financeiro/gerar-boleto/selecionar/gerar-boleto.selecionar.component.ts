import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateValidator } from 'app/@core/validator/dataValidator';
import { ReferenciaValidator } from 'app/@core/validator/referenciaValidator';
import { ContratoService } from 'app/pages/cadastro/contrato/contrato.service';
import * as moment from 'moment';
import { BoletoService } from '../../boleto/boleto.service';

@Component({
  selector: 'ngx-gerar-boleto-selecionar',
  templateUrl: './gerar-boleto.selecionar.component.html',
})

export class GerarBoletoSelecionarComponent implements OnInit {
  public storage: Storage = sessionStorage;
  public form: FormGroup;

  public loading: boolean = false;
  public submited: boolean = false;

  constructor(
    public service: ContratoService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    public boletoService: BoletoService) {
  }

  ngOnInit(): void {
    this.loadForm();
    const a = moment(new Date()).subtract(1, 'months').format('MMYYYY');
    const b = moment(new Date()).set('day', 15).format('DDMMYYYY');
    this.referencia.setValue(a);
    this.vencimento.setValue(b);

  }

  public loadForm(): void {

    this.form = new FormGroup({
      referencia: new FormControl(
        null, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          ReferenciaValidator.isReferencia(),
        ]
      ),
      vencimento: new FormControl(
        null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          DateValidator.isDate(),
        ]
      )
    });
  }

  public OnSubmit(): void {

    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    this.storage.setItem('[gerar-boleto][adicionar]' , JSON.stringify(this.form.value));
    this.router.navigate([ './adicionar' ], { relativeTo: this.activeRouter.parent });

  }

  public getStatus(field: string) {
    if (!this.submited) {
      return 'basic';
    }

    return this.form.get(field).valid ? 'success' : 'danger';
  }

  public get referencia() {
    return this.form.get('referencia');
  }

  public get vencimento() {
    return this.form.get('vencimento');
  }

}
