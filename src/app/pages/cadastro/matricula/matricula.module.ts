import { SelecionarModule } from 'app/@shared';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbListModule, NbPopoverModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { PipeModule } from 'app/@core/pipe/pipe.module';
import { TableModule } from 'app/@core/table/table.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { LogradouroModule } from './../logradouro/logradouro.module';
import { MatriculaAdicionarComponent } from './adicionar/matricula.adicionar.component';
import { MatriculaDeletarComponent } from './deletar/matricula.deletar.component';
import { MatriculaEditarComponent } from './editar/matricula.editar.component';
import { MatriculaListarComponent } from './listar/matricula.listar.component';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaComponent } from './matricula.component';
import { MatriculaService } from './matricula.service';
import { MatriculaVisualizarComponent } from './visualizar/matricula.visualizar.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    MatriculaRoutingModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbCheckboxModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    LogradouroModule,
    NbSpinnerModule,
    NgxMaskModule.forChild(),
    TableModule,
    NbListModule,
    PipeModule,
    NbPopoverModule,
    SelecionarModule,
  ],
  declarations: [
    MatriculaComponent,
    MatriculaAdicionarComponent,
    MatriculaDeletarComponent,
    MatriculaEditarComponent,
    MatriculaListarComponent,
    MatriculaVisualizarComponent,
  ],
  providers: [
    MatriculaService
  ]
})

export class MatriculaModule {}
