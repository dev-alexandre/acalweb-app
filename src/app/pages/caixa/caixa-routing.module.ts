import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluxoComponent } from './fluxo/fluxo.component';
import { ReceberComponent } from './receber/receber.component';


const routes: Routes = [

  {
    path: 'fluxo',
    component: FluxoComponent,
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
