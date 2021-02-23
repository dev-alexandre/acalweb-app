import { LogradouroVisualizarComponent } from './visualizar/logradouro.visualizar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { LogradouroAdicionarComponent } from './adicionar/logradouro.adicionar.component';
import { LogradouroDeletarComponent } from './deletar/logradouro.deletar.component';
import { LogradouroEditarComponent } from './editar/logradouro.editar.component';
import { LogradouroListarComponent } from './listar/logradouro.listar.component';
import { LogradouroComponent } from './logradouro.component';

const routes: Routes = [{
  path: '',
  component: LogradouroComponent,
  children: [
    {
      path: 'listar',
      canActivate: [AuthGuard],
      component: LogradouroListarComponent,
    },
    {
      path: 'adicionar',
      canActivate: [AuthGuard],
      component: LogradouroAdicionarComponent,
    },
    {
      path: 'deletar',
      canActivate: [AuthGuard],
      component: LogradouroDeletarComponent,
    },
    {
      path: 'editar',
      canActivate: [AuthGuard],
      component: LogradouroEditarComponent,
    },
    {
      path: 'visualizar',
      canActivate: [AuthGuard],
      component: LogradouroVisualizarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LogradouroRoutingModule {

}
