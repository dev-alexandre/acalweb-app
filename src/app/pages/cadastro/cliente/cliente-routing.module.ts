import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteAdicionarComponent } from './adicionar/cliente.adicionar.component';
import { ClienteComponent } from './cliente.component';
import { ClienteDeletarComponent } from './deletar/cliente.deletar.component';
import { ClienteEditarComponent } from './editar/cliente.editar.component';
import { ClienteHistoricoComponent } from './historico/cliente.historico.component';
import { ClienteListarComponent } from './listar/cliente.listar.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [
    {
      path: 'listar',
      component: ClienteListarComponent,
    },
    {
      path: 'adicionar',
      component: ClienteAdicionarComponent,
    },
    {
      path: 'deletar',
      component: ClienteDeletarComponent,
    },
    {
      path: 'editar',
      component: ClienteEditarComponent,
    },
    {
      path: 'historico',
      component: ClienteHistoricoComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ClienteRoutingModule {

}
