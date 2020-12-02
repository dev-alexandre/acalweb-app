import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnaliseAdicionarComponent } from './adicionar/analise.adicionar.component';
import { AnaliseComponent } from './analise.component';
import { AnaliseDeletarComponent } from './deletar/analise.deletar.component';
import { AnaliseEditarComponent } from './editar/analise.editar.component';
import { AnaliseListarComponent } from './listar/analise.listar.component';

const routes: Routes = [{
  path: '',
  component: AnaliseComponent,
  children: [
    {
      path: 'listar',
      component: AnaliseListarComponent,
    },
    {
      path: 'adicionar',
      component: AnaliseAdicionarComponent,
    },
    {
      path: 'deletar',
      component: AnaliseDeletarComponent,
    },
    {
      path: 'editar',
      component: AnaliseEditarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AnaliseRoutingModule {

}
