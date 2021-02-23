import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule, NbToggleModule, NbTooltipModule, NbSpinnerModule } from '@nebular/theme';
import { PipeModule } from 'app/@core/pipe/pipe.module';
import { TableModule } from 'app/@core/table/table.module';
import { SelecionarModule } from 'app/@shared';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { ContratoAdicionarComponent } from './adicionar/contrato.adicionar.component';
import { ContratoRoutingModule } from './contrato-routing.module';
import { ContratoComponent } from './contrato.component';
import { ContratoService } from './contrato.service';
import { ContratoDeletarComponent } from './deletar/contrato.deletar.component';
import { ContratoEditarComponent } from './editar/contrato.editar.component';
import { ContratoListarComponent } from './listar/contrato.listar.component';

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
    ContratoRoutingModule,
    NbAutocompleteModule,
    NbToggleModule,
    SelecionarModule,
    NbCheckboxModule,
    NbListModule,
    NbTooltipModule,
    PipeModule,
    NbSpinnerModule,
    TableModule,
    NgxMaskModule.forChild(),
    NbDialogModule.forChild(),
  ],
  declarations: [
    ContratoComponent,
    ContratoAdicionarComponent,
    ContratoDeletarComponent,
    ContratoEditarComponent,
    ContratoListarComponent,
  ],
  providers: [
    ContratoService
  ]
})

export class ContratoModule {}
