import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { ReceberComponent } from './receber/receber.component';


const routes: Routes = [

  {
    path: 'movimentacao',
    component: MovimentacaoComponent,
  },

  {
    path: 'receber',
    component: ReceberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CaixaRoutingModule {

}
