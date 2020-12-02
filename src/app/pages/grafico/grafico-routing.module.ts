import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import { GraficoComponent } from './grafico.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [{
  path: '',
  component: GraficoComponent,

    children: [
    {
      path: 'echarts',
      component: PizzaComponent,
    },
    {
      path: 'barra',
      component: BarraComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GraficoRoutingModule { }

