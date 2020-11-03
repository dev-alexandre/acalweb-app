import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratoAdicionarComponent } from './adicionar/contrato.adicionar.component';
import { ContratoComponent } from './contrato.component';
import { ContratoDeletarComponent } from './deletar/contrato.deletar.component';
import { ContratoEditarComponent } from './editar/contrato.editar.component';
import { ContratoListarComponent } from './listar/contrato.listar.component';

const routes: Routes = [{
  path: '',
  component: ContratoComponent,
  children: [
    {
      path: 'listar',
      component: ContratoListarComponent,
    },
    {
      path: 'adicionar',
      component: ContratoAdicionarComponent,
    },
    {
      path: 'deletar',
      component: ContratoDeletarComponent,
    },
    {
      path: 'editar',
      component: ContratoEditarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContratoRoutingModule {

}
