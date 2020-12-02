import { GraficoModule } from './../grafico/grafico.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ContratoService } from '../cadastro/contrato/contrato.service';
import { BoletoService } from '../financeiro/boleto/boleto.service';
import { InputModule } from 'app/@component';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    GraficoModule,
    NbSpinnerModule,
    InputModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    ContratoService,
    BoletoService,
  ]
})

export class DashboardModule { }
