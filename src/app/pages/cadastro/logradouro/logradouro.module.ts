import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LogradouroAdicionarComponent } from './adicionar/logradouro.adicionar.component';
import { LogradouroDeletarComponent } from './deletar/logradouro.deletar.component';
import { LogradouroEditarComponent } from './editar/logradouro.editar.component';
import { LogradouroListarComponent } from './listar/logradouro.listar.component';
import { LogradouroRoutingModule } from './logradouro-routing.module';
import { LogradouroComponent } from './logradouro.component';
import { LogradouroService } from './logradouro.service';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    LogradouroRoutingModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
  ],
  declarations: [
    LogradouroComponent,
    LogradouroAdicionarComponent,
    LogradouroDeletarComponent,
    LogradouroEditarComponent,
    LogradouroListarComponent,
  ],
  exports: [
  ],
  providers: [
    LogradouroService
  ]
})

export class LogradouroModule {}
