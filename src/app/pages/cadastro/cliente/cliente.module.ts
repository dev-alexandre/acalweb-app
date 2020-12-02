import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteAdicionarComponent } from './adicionar/cliente.adicionar.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';
import { ClienteDeletarComponent } from './deletar/cliente.deletar.component';
import { ClienteEditarComponent } from './editar/cliente.editar.component';
import { ClienteListarComponent } from './listar/cliente.listar.component';

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
    ClienteRoutingModule,
    NbLayoutModule,
    NgxMaskModule.forChild(),
    NbFormFieldModule,
  ],
  declarations: [
    ClienteComponent,
    ClienteAdicionarComponent,
    ClienteDeletarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
  ],
  exports: [
  ],
  providers: [
    ClienteService
  ]
})

export class ClienteModule {}
