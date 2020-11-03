import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoAdicionarComponent } from './adicionar/grupo.adicionar.component';
import { GrupoDeletarComponent } from './deletar/grupo.deletar.component';
import { GrupoEditarComponent } from './editar/grupo.editar.component';
import { GrupoComponent } from './grupo.component';
import { GrupoListarComponent } from './listar/grupo.listar.component';

const routes: Routes = [{
  path: '',
  component: GrupoComponent,
  children: [
    {
      path: 'listar',
      component: GrupoListarComponent,
    },
    {
      path: 'adicionar',
      component: GrupoAdicionarComponent,
    },
    {
      path: 'deletar',
      component: GrupoDeletarComponent,
    },
    {
      path: 'editar',
      component: GrupoEditarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GrupoRoutingModule {

}
