import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferenciaValidator } from 'app/@core/validator/referenciaValidator';
import { HidrometroService } from '../hidrometro.service';

@Component({
  selector: 'ngx-hidrometro-listar',
  styleUrls: ['./hidrometro.listar.component.scss'],
  templateUrl: './hidrometro.listar.component.html',
})

export class HidrometroListarComponent  implements OnInit {

  public storage: Storage = sessionStorage;
  public submited: boolean = false;
  public form: FormGroup;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: HidrometroService) {

  }

  ngOnInit(): void {
    this.loadForm();
  }

  public loadForm(): void {

    this.form = new FormGroup({
      referencia: new FormControl(
        null, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          ReferenciaValidator.isReferencia()
        ]
      ),
    });
  }

  public OnSubmit(): void {
    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    this.storage.setItem('[hidrometro][adicionar]' , JSON.stringify(this.referencia.value) );
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

}
