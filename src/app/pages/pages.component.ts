import { Component } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { User } from 'app/auth/user.model';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  public menu: NbMenuItem[];
  public options: NbMenuItem[];
  private user: User;

  constructor(public authService: NbAuthService) {
    this.options = MENU_ITEMS;
    this.menu = [];
    this.loadUser();
  }

  public loadUser(): void {
    this.authService.onTokenChange()
    .subscribe( (token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.loadOptions();
      }});
  }

  public loadOptions(): void {

    this.user.role?.forEach(role => { role.name = role.name.replace('ROLE_', '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase() ; });

    this.options.forEach(option => {

      const permissao = option.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
      if (this.user.role.some(role => role.name === permissao )) {
        this.menu.push(option);
      }
    });

    this.menu.sort(function(a, b) {
      if (a.title === 'HOME' || b.title === 'HOME') { return 1; }
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1;  }
      return 0;
    });

  }

}
