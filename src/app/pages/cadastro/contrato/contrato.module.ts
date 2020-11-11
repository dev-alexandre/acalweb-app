import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbSelectModule, NbToggleModule, NbTooltipModule } from '@nebular/theme';
import { SelecionarModule } from 'app/@component/selecionar.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
    Ng2SmartTableModule,
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
    NbTooltipModule,
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
