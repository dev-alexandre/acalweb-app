import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'perfil',
      loadChildren: () => import('./perfil/perfil.module')
        .then(m => m.PerfilModule),
    },
    {
      path: 'cadastro',
      loadChildren: () => import('./cadastro/cadastro.module')
        .then(m => m.CadastroModule),
    },
    {
      path: 'perfil',
      loadChildren: () => import('./cadastro/cadastro.module')
        .then(m => m.CadastroModule),
    },
    {
      path: 'caixa',
      loadChildren: () => import('./caixa/caixa.module')
        .then(m => m.CaixaModule),
    },
    {
      path: 'financeiro',
      loadChildren: () => import('./financeiro/financeiro.module')
        .then(m => m.FinanceiroModule),
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'coleta',
      loadChildren: () => import('./coleta/coleta.module')
        .then(m => m.ColetaModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
