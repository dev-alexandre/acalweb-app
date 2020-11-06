import { Matricula } from './../matricula.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { EditarComponent } from 'app/@core/base/_index';
import { Modulo } from 'app/@library/enum';
import { Logradouro, TipoLogradouro } from '../../logradouro/logradouro.model';
import { MatriculaService } from '../matricula.service';
import { LogradouroService } from '../../logradouro/logradouro.service';

@Component({
  selector: 'ngx-matricula',
  templateUrl: './matricula.editar.component.html',
})

export class MatriculaEditarComponent extends EditarComponent<Matricula, MatriculaService> implements OnInit  {

  public logradouros: Logradouro [];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: MatriculaService,
    public logradouroService: LogradouroService,
    public toast: NbToastrService) {

    super(router, activeRouter, service, toast);

  }

  public onSubmit() {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.getLogradourobyId();

    this.service
      .editar(this.form.value)
        .subscribe(
          () => {
            this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
          },
          (error) => {

          }
    );
  }

  getLogradourobyId(){
    const id = this.logradouro.value.id;
    const item1 = this.logradouros.find(i => i.id === id);
    this.logradouro.setValue(item1);

  }

  ngOnInit(): void {

    this.loadLograoduro();
    this.load();
    this.createForm();

    this.form.setValue(this.data);
  }

  public getModulo(): string {
    return Modulo.MATRICULA;
  }

  public loadLograoduro(): void {
    this.logradouroService.listarTodos().subscribe(
      (logradouros) => {
        this.logradouros = logradouros;
        this.form.patchValue({logradouro: this.data.logradouro});
      }
    );
  }
  public createForm() {

    this.form = new FormGroup({

      id: new FormControl(
        null
      ),

      createdDate: new FormControl(
        null
      ),

      lastModifiedDate: new FormControl(
        null
      ),

      logradouro: new FormControl(
        {}, [
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
