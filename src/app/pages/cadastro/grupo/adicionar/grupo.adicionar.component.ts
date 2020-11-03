import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { Grupo } from '../grupo.model';
import { GrupoService } from '../grupo.service';
import { Big } from 'big.js';

@Component({
  selector: 'ngx-grupo',
  templateUrl: './grupo.adicionar.component.html',
})

export class GrupoAdicionarComponent extends AdicionarComponent<Grupo, GrupoService> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);
  }

  ngOnInit(): void {
    this.createForm();

   // this.form.patchValue({valor: Big(0).precision(2)});
  }

  public getModulo(): string {
    return Modulo.GRUPO;
  }

  public createForm() {

    this.form = new FormGroup({

      nome: new FormControl(
        null, [
        Validators.required,
      ]),

      valor: new FormControl(
        null, [
        Validators.required,
        Validators.min(0)
      ]),

      categoria: new FormControl(
        null, [
        Validators.required,
      ]),

      }
    );
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get valor() {
    return this.form.get('valor');
  }

  public get categoria() {
    return this.form.get('categoria');
  }

}
