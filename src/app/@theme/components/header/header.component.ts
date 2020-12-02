import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { User } from 'app/auth/user.model';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  userPictureOnly: boolean = false;
  hideMenuOnClick: boolean = false;

  user: User;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'dark';

  userMenu = [
    { title: 'Perfil'},
    { title: 'Sair'}
  ];
  window: any;

  constructor(
    private authService: NbAuthService,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    private breakpointService: NbMediaBreakpointsService) {


    this.authService.onTokenChange()
      .subscribe( (token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
        }}
      );
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    const { is } = this.breakpointService.getBreakpointsMap();

    this.themeService.onMediaQueryChange()
    .pipe(
      map(([, currentBreakpoint]) => currentBreakpoint),
      takeUntil(this.destroy$),
    )
    .subscribe(currentBreakpoint => {
      this.userPictureOnly = currentBreakpoint.width < xl;
      this.hideMenuOnClick = currentBreakpoint.width <= is;
    });

    this.menuService.onItemClick().subscribe(() => {
      if (this.hideMenuOnClick) {
        this.sidebarService.collapse('menu-sidebar');
      }
    });

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

      this.actions();

  }

  public actions(): void {

    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'header-user-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title === 'Perfil') {
          this.router.navigate([ './pages/perfil' ]);
        } else if (title === 'Sair') {
          localStorage.removeItem('auth_app_token');
          this.authService.logout('email');
          this.router.navigateByUrl('/auth/login');
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
