import { ClienteModule } from './../cliente/cliente.module';
import { LogradouroModule } from './../logradouro/logradouro.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContratoAdicionarComponent } from './adicionar/contrato.adicionar.component';
import { ContratoService } from './contrato.service';
import { ContratoEditarComponent } from './editar/contrato.editar.component';
import { ContratoListarComponent } from './listar/contrato.listar.component';
import { ContratoComponent } from './contrato.component';
import { ContratoDeletarComponent } from './deletar/contrato.deletar.component';
import { ContratoRoutingModule } from './contrato-routing.module';

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
