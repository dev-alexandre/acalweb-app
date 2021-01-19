import { Component } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { User } from 'app/auth/user.model';

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent {

  public data: User;

  constructor(
    private authService: NbAuthService,
    ) {

    this.authService.onTokenChange()
      .subscribe( (token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.data = token.getPayload();
    }});

    this.data.role.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return  1; }
      return 0;
    });

  }

}
