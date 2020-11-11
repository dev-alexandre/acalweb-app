import { BoletoService } from './../financeiro/boleto/boleto.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { CaixaRoutingModule } from './caixa-routing.module';
import { CaixaComponent } from './caixa.component';
import { FluxoComponent } from './fluxo/fluxo.component';
import { FluxoService } from './fluxo/fluxo.service';
import { ReceberComponent } from './receber/receber.component';


@NgModule({

  imports: [
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    CaixaRoutingModule,
  ],

  declarations: [
    ReceberComponent,
    CaixaComponent,
    FluxoComponent,
  ],

  providers: [
    FluxoService,
    BoletoService,
  ]

})

export class CaixaModule {}
