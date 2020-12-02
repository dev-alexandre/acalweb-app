import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { BarraComponent } from './barra/barra.component';
import { GraficoRoutingModule } from './grafico-routing.module';
import { GraficoComponent } from './grafico.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
    GraficoRoutingModule,
  ],

  declarations: [
    PizzaComponent,
    BarraComponent,
    GraficoComponent,
  ],

  exports: [
    PizzaComponent,
    BarraComponent,
  ]
})

export class GraficoModule {

}
