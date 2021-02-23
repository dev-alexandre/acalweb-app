import { MatriculaComponent } from './matricula.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculaAdicionarComponent } from './adicionar/matricula.adicionar.component';
import { MatriculaDeletarComponent } from './deletar/matricula.deletar.component';
import { MatriculaEditarComponent } from './editar/matricula.editar.component';
import { MatriculaListarComponent } from './listar/matricula.listar.component';
import { MatriculaVisualizarComponent } from './visualizar/matricula.visualizar.component';

const routes: Routes = [{
  path: '',
  component: MatriculaComponent,
  children: [
    {
      path: 'listar',
      component: MatriculaListarComponent,
    },
    {
      path: 'adicionar',
      component: MatriculaAdicionarComponent,
    },
    {
      path: 'deletar',
      component: MatriculaDeletarComponent,
    },
    {
      path: 'editar',
      component: MatriculaEditarComponent,
    },
    {
      path: 'visualizar',
      component: MatriculaVisualizarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MatriculaRoutingModule {

}
