import { BoletoCodigoComponent } from './component/codigo/boleto.codigo.component';
import { BoletoDetalheComponent } from './component/detalhe/boleto.detalhe.component';
import { BoletoCabecalhoComponent } from './component/cabecalho/boleto.cabecalho.component';
import { BoletoVisualizarComponent } from './visualizar/boleto.visualizar.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { PipeModule } from 'app/@core/pipe/pipe.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { AnaliseService } from 'app/pages/analise/analise.service';
import { NgxMaskModule } from 'ngx-mask';
import { BoletoAdicionarComponent } from './adicionar/boleto.adicionar.component';
import { BoletoRoutingModule } from './boleto-routing.module';
import { BoletoComponent } from './boleto.component';
import { BoletoService } from './boleto.service';
import { BoletoDeletarComponent } from './deletar/boleto.deletar.component';
import { BoletoEditarComponent } from './editar/boleto.editar.component';
import { BoletoListarComponent } from './listar/boleto.listar.component';
import { BoletoAnaliseComponent } from './component/analise/boleto.analise.component';
import { NgxBarcodeModule } from 'ngx-barcode';

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
    PipeModule,
    BoletoRoutingModule,
    NgxMaskModule.forChild(),
    NgxBarcodeModule,
  ],
  declarations: [
    BoletoComponent,
    BoletoListarComponent,
    BoletoAdicionarComponent,
    BoletoEditarComponent,
    BoletoDeletarComponent,
    BoletoVisualizarComponent,
    BoletoCabecalhoComponent,
    BoletoAnaliseComponent,
    BoletoDetalheComponent,
    BoletoCodigoComponent,
  ]
  ,

  exports: [
    BoletoVisualizarComponent,
  ],

  providers: [
    BoletoService,
    AnaliseService,
  ]
})

export class BoletoModule {}
