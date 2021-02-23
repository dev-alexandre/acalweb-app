import { ClienteHistoricoComponent } from './historico/cliente.historico.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteAdicionarComponent } from './adicionar/cliente.adicionar.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';
import { ClienteDeletarComponent } from './deletar/cliente.deletar.component';
import { ClienteEditarComponent } from './editar/cliente.editar.component';
import { ClienteListarComponent } from './listar/cliente.listar.component';
import { TableModule } from 'app/@core/table/table.module';

@NgModule({
  imports: [
    CommonModule,
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
    ClienteRoutingModule,
    NbLayoutModule,
    NbSpinnerModule,
    NbFormFieldModule,
    TableModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    ClienteComponent,
    ClienteAdicionarComponent,
    ClienteDeletarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClienteHistoricoComponent,
  ],
  exports: [
  ],
  providers: [
    ClienteService
  ]
})

export class ClienteModule {}
