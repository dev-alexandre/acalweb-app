import { LogradouroService } from './../../logradouro/logradouro.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { ContratoService } from '../contrato.service';
import { Contrato } from '../contrato.model';

@Component({
  selector: 'ngx-contrato',
  templateUrl: './contrato.adicionar.component.html',
})

export class ContratoAdicionarComponent extends AdicionarComponent<Contrato, ContratoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
    this.data = {};
  }

  ngOnInit(): void {
    this.createForm();
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
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

      }
    );
  }

}
