import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoletoAdicionarComponent } from './adicionar/boleto.adicionar.component';
import { BoletoComponent } from './boleto.component';
import { BoletoDeletarComponent } from './deletar/boleto.deletar.component';
import { BoletoListarComponent } from './listar/boleto.listar.component';
import { BoletoReceberComponent } from './receber/boleto.receber.component';
import { BoletoVisualizarComponent } from './visualizar/boleto.visualizar.component';


const routes: Routes = [
  {
    path: '',
    component: BoletoComponent,
  },
  {
    path: 'adicionar',
    component: BoletoAdicionarComponent,
  },
  {
    path: 'editar',
    component: BoletoListarComponent,
  },
  {
    path: 'deletar',
    component: BoletoDeletarComponent,
  },
  {
    path: 'listar',
    component: BoletoListarComponent,
  },
  {
    path: 'visualizar',
    component: BoletoVisualizarComponent,
  },
  {
    path: 'receber',
    component: BoletoReceberComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BoletoRoutingModule {

}
