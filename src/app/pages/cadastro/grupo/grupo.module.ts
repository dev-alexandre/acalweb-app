import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GrupoAdicionarComponent } from './adicionar/grupo.adicionar.component';
import { GrupoDeletarComponent } from './deletar/grupo.deletar.component';
import { GrupoEditarComponent } from './editar/grupo.editar.component';
import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';
import { GrupoService } from './grupo.service';
import { GrupoListarComponent } from './listar/grupo.listar.component';

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
    GrupoRoutingModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    GrupoComponent,
    GrupoAdicionarComponent,
    GrupoDeletarComponent,
    GrupoEditarComponent,
    GrupoListarComponent,
  ],
  providers: [
    GrupoService
  ]
})

export class GrupoModule {}
