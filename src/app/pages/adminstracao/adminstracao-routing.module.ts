import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'usuario',
    canActivate: [AuthGuard],
    loadChildren: () => import('./usuario/usuario.module')
      .then(m => m.UsuarioModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminstracaoRoutingModule {

}
