import { EmbreveComponent } from './miscellaneous/embreve/embreve.component';
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
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
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
      path: 'adminstracao',
      loadChildren: () => import('./adminstracao/adminstracao.module')
        .then(m => m.AdminstracaoModule),
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
      path: 'analise',
      loadChildren: () => import('./analise/analise.module')
        .then(m => m.AnaliseModule),
    },
    {
      path: 'hidrometro',
      loadChildren: () => import('./hidrometro/hidrometro.module')
        .then(m => m.HidrometroModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },


    {
      path: 'embreve',
      component: EmbreveComponent,
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
