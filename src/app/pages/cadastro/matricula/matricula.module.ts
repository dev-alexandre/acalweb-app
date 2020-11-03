import { LogradouroModule } from './../logradouro/logradouro.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatriculaAdicionarComponent } from './adicionar/matricula.adicionar.component';
import { MatriculaDeletarComponent } from './deletar/matricula.deletar.component';
import { MatriculaEditarComponent } from './editar/matricula.editar.component';
import { MatriculaListarComponent } from './listar/matricula.listar.component';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaComponent } from './matricula.component';
import { MatriculaService } from './matricula.service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    MatriculaRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    LogradouroModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    MatriculaComponent,
    MatriculaAdicionarComponent,
    MatriculaDeletarComponent,
    MatriculaEditarComponent,
    MatriculaListarComponent,
  ],
  providers: [
    MatriculaService
  ]
})

export class MatriculaModule {}
