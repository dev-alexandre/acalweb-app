import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Contrato } from '../contrato.model';
import { ContratoService } from '../contrato.service';

@Component({
  selector: 'ngx-contrato',
  templateUrl: './contrato.editar.component.html',
})

export class ContratoEditarComponent extends EditarComponent<Contrato, ContratoService> implements OnInit  {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {

    this.load();
    this.createForm();

    this.form.setValue(this.data);
  }

  public getModulo(): string {
    return Modulo.CONTRATO;
  }

  public createForm() {

    this.form = new FormGroup({

      id: new FormControl(
        null
      ),

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

      createdDate: new FormControl(
        null
      ),

      lastModifiedDate: new FormControl(
        null
      ),

      }
    );

  }

}
