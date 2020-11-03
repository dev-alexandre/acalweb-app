import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})

export class NgxLoginComponent  extends NbLoginComponent {

  public showPassword: boolean = false;

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

}
