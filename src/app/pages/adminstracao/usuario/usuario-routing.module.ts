import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioAdicionarComponent } from './adicionar/usuario.adicionar.component';
import { UsuarioDeletarComponent } from './deletar/usuario.deletar.component';
import { UsuarioEditarComponent } from './editar/usuario.editar.component';
import { UsuarioListarComponent } from './listar/usuario.listar.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [{
  path: '',
  component: UsuarioComponent,
  children: [
    {
      path: 'listar',
      component: UsuarioListarComponent,
    },
    {
      path: 'adicionar',
      component: UsuarioAdicionarComponent,
    },
    {
      path: 'deletar',
      component: UsuarioDeletarComponent,
    },
    {
      path: 'editar',
      component: UsuarioEditarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UsuarioRoutingModule {

}
