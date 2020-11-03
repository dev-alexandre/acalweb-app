import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { PerfilService } from './perfil.service';
import { User } from 'app/auth/user.model';

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent {

  public form: FormGroup;
  public submited: boolean;
  public data: User;
  public load = false;
  public imagemPath: SafeResourceUrl;
  public storage: Storage = sessionStorage;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: PerfilService,
    public sanitizer: DomSanitizer,
    private authService: NbAuthService,
    ) {

    this.authService.onTokenChange()
      .subscribe( (token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.data = token.getPayload();
          this.buscar();
    }});

  }

  public buscar(): void {

    this.service.buscar(this.data.key).subscribe(
      (data) => {
        this.data = data;
        this.imagemPath = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.img);
        this.createForm();
        this.load = true;
      },
      (error) => {
      }

    );

  }

  public onSubmit() {
    this.submited = true;

    if (!this.form.valid) {
      return;
    }

    this.service
      .editar(this.form.value)
        .subscribe(
          () => {

          },
          (error) => {

          }
    );
  }

  public createForm() {

    this.form = new FormGroup({
      email: new FormControl(this.data.email, [Validators.required]),
      name: new FormControl(this.data.name, [Validators.required]),
      title: new FormControl(this.data.title, [Validators.required]),
      img: new FormControl(this.data.img, [Validators.required]),
    });
  }

  public getStatus(field: string) {
    if (!this.submited) {
      return 'basic';
    }

    return this.form.get(field).valid ? 'success' : 'danger';
  }


  public get email() {
    return this.form.get('email');
  }

  public get name() {
    return this.form.get('name');
  }

  public get title() {
    return this.form.get('title');
  }

  public get img() {
    return this.form.get('img');
  }


}
