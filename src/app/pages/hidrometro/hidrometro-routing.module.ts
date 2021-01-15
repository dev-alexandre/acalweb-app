import { HidrometroComponent } from './hidrometro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HidrometroAdicionarComponent } from './adicionar/hidrometro.adicionar.component';
import { HidrometroDeletarComponent } from './deletar/hidrometro.deletar.component';
import { HidrometroEditarComponent } from './editar/hidrometro.editar.component';
import { HidrometroListarComponent } from './listar/hidrometro.listar.component';
import { HidrometroSelecionarComponent } from './selecionar/hidrometro.selecionar.component';

const routes: Routes = [{
  path: '',
  component: HidrometroComponent,
  children: [
    {
      path: 'listar',
      component: HidrometroListarComponent,
    },
    {
      path: 'adicionar',
      component: HidrometroAdicionarComponent,
    },
    {
      path: 'deletar',
      component: HidrometroDeletarComponent,
    },
    {
      path: 'editar',
      component: HidrometroEditarComponent,
    },
    {
      path: 'selecionar',
      component: HidrometroSelecionarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HidrometroRoutingModule {

}
