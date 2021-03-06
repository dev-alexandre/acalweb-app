import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { ContratoService } from 'app/pages/cadastro/contrato/contrato.service';
import { NgxMaskModule } from 'ngx-mask';
import { BoletoService } from '../boleto/boleto.service';
import { PipeModule } from './../../../@core/pipe/pipe.module';
import { GerarBoletoAdicionarComponent } from './adicionar/gerar-boleto.adicionar.component';
import { GerarBoletoRoutingModule } from './gerar-boleto-routing.module';
import { GerarBoletoComponent } from './gerar-boleto.component';
import { GerarBoletoService } from './gerar-boleto.service';
import { GerarBoletoSelecionarComponent } from './selecionar/gerar-boleto.selecionar.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSpinnerModule,
    GerarBoletoRoutingModule,
    NbCheckboxModule,
    NbUserModule,
    NgxMaskModule.forChild(),
    NbDatepickerModule.forRoot(),
    PipeModule,
    NbFormFieldModule,
  ],
  declarations: [
    GerarBoletoComponent,
    GerarBoletoAdicionarComponent,
    GerarBoletoSelecionarComponent,
  ],
  exports: [
  ],
  providers: [
    GerarBoletoService,
    ContratoService,
    BoletoService,
  ]
})

export class GerarBoletoModule {}
