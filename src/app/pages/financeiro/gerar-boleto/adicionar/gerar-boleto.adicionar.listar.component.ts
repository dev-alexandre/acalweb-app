import { BoletoService } from './../../boleto/boleto.service';
import { Boleto } from 'app/pages/financeiro/boleto/boleto.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { User } from 'app/@core/data/users';
import { ReferenciaValidator } from 'app/@core/validator/referenciaValidator';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';
import { ContratoService } from 'app/pages/cadastro/contrato/contrato.service';
import { DateValidator } from 'app/@core/validator/dataValidator';

@Component({
  selector: 'ngx-gerar-boleto-adicionar',
  templateUrl: './gerar-boleto.adicionar.component.html',
})

export class GerarBoletoAdicionarComponent implements OnInit{

  public showSelectReferencia: boolean = true;
  public form: FormGroup;

  public loading: boolean = false;
  public submited: boolean = false;

  public contratos: Contrato[];
  public boletos: Boleto[];
  private user: User;

  constructor(
    private authService: NbAuthService,
    public service: ContratoService,
    public boletoService: BoletoService) {
  }

  ngOnInit(): void {
    this.loadForm();

    this.authService.onTokenChange()
      .subscribe( (token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
        }}
      );
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

    this.listarContratosPorRefererencia();
  }


  public listarContratosPorRefererencia() {

    this.contratos = [];

    this.service.listarPorReferencia(this.referencia.value).subscribe(
      (contratos: Contrato[]) => {
       contratos.forEach( contrato => {
          contrato.check = true;
          this.contratos.push(contrato);
       });
    });
  }

  public gerar(): void {
    this.loading = true;

    const referencia = this.referencia.value;
    const contratosParaSalvar:  Contrato [] = [];
    const boletosParaSalvar: Boleto [] = [];
    const boleto: Boleto = {};

    this.contratos.forEach(c => {
      if (c.check) {

        if (!c.referencias) {
          c.referencias = [];
        }
        c.referencias.push(referencia);
      }

      boleto.contrato = c;
      boleto.referencia = referencia;
      boleto.movimentacao = null;
      boleto.vencimento = this.vencimento.value;

      boletosParaSalvar.push(boleto);
      contratosParaSalvar.push(c);
    });


    this.service.salvarTodos(contratosParaSalvar).subscribe(
      () => {
        this.boletoService.salvarTodos(boletosParaSalvar).subscribe(
          () => {
            this.loading = false;
            this.listarContratosPorRefererencia();
          },
          () => {
            this.loading = false;
          }

        );
      },
      () => {
        this.loading = false;
      }

    );
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
