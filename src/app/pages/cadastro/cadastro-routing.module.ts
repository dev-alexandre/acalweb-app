import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'logradouro',
    canActivate: [AuthGuard],
    loadChildren: () => import('./logradouro/logradouro.module')
      .then(m => m.LogradouroModule),
  },
  {
    path: 'matricula',
    loadChildren: () => import('./matricula/matricula.module')
      .then(m => m.MatriculaModule),
  },
  {
    path: 'grupo',
    loadChildren: () => import('./grupo/grupo.module')
      .then(m => m.GrupoModule),
  },
  {
    path: 'contrato',
    loadChildren: () => import('./contrato/contrato.module')
      .then(m => m.ContratoModule),
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module')
      .then(m => m.ClienteModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CadastroRoutingModule {

}
