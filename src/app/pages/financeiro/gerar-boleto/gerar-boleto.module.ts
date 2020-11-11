import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { ContratoService } from 'app/pages/cadastro/contrato/contrato.service';
import { NgxMaskModule } from 'ngx-mask';
import { BoletoService } from '../boleto/boleto.service';
import { GerarBoletoAdicionarComponent } from './adicionar/gerar-boleto.adicionar.listar.component';
import { GerarBoletoRoutingModule } from './gerar-boleto-routing.module';
import { GerarBoletoComponent } from './gerar-boleto.component';
import { GerarBoletoService } from './gerar-boleto.service';

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
    NgxMaskModule.forChild(),
    NbDatepickerModule.forRoot(),
  ],
  declarations: [
    GerarBoletoComponent,
    GerarBoletoAdicionarComponent,
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
