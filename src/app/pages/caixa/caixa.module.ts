import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { PipeModule } from 'app/@core/pipe/pipe.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxMaskModule } from 'ngx-mask';
import { ThemeModule } from '../../@theme/theme.module';
import { BoletoModule } from './../financeiro/boleto/boleto.module';
import { BoletoService } from './../financeiro/boleto/boleto.service';
import { CaixaRoutingModule } from './caixa-routing.module';
import { CaixaComponent } from './caixa.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { MovimentacaoService } from './movimentacao/movimentacao.service';
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
    PipeModule,
    BoletoModule,
    NgxMaskModule.forChild(),
  ],

  declarations: [
    ReceberComponent,
    CaixaComponent,
    MovimentacaoComponent,
  ],

  providers: [
    MovimentacaoService,
    BoletoService,
  ]

})

export class CaixaModule {}
