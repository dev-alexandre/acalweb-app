import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Grupo } from '../grupo.model';
import { GrupoService } from '../grupo.service';

@Component({
  selector: 'ngx-grupo',
  templateUrl: './grupo.editar.component.html',
})

export class GrupoEditarComponent extends EditarComponent<Grupo, GrupoService> implements OnInit  {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GrupoService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  ngOnInit(): void {

    this.load();
    this.createForm();
    this.form.patchValue({categoria: this.data.categoria});
  }

  public getModulo(): string {
    return Modulo.GRUPO;
  }

  public createForm() {

    this.form = new FormGroup({

      id: new FormControl(
        this.data.id
      ),

      createdDate: new FormControl(
        this.data.createdDate
      ),

      lastModifiedDate: new FormControl(
        this.data.lastModifiedDate
      ),

      nome: new FormControl(
        this.data.nome, [
        Validators.required,
      ]),

      valor: new FormControl(
        this.data.valor, [
        Validators.required,
        Validators.min(0)
      ]),

      categoria: new FormControl(
        this.data.categoria, [
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
