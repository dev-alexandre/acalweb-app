import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { GrupoAdicionarComponent } from './adicionar/grupo.adicionar.component';
import { GrupoDeletarComponent } from './deletar/grupo.deletar.component';
import { GrupoEditarComponent } from './editar/grupo.editar.component';
import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';
import { GrupoService } from './grupo.service';
import { GrupoListarComponent } from './listar/grupo.listar.component';
import { TableModule } from 'app/@core/table/table.module';

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
    GrupoRoutingModule,
    NbSpinnerModule,
    TableModule,
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
