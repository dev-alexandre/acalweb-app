import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValorAguaComponent } from './valor-agua/valor-agua.component';


const routes: Routes = [
  {
    path: 'gerar-boleto',
    loadChildren: () => import('./gerar-boleto/gerar-boleto.module')
      .then(m => m.GerarBoletoModule),
  },
  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module')
      .then(m => m.BoletoModule),
  },

  {
    path: 'valor-agua',
    component: ValorAguaComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FinanceiroRoutingModule {

}
