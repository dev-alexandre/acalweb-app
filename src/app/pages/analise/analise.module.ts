import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { PipeModule } from 'app/@core/pipe/pipe.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { AnaliseAdicionarComponent } from './adicionar/analise.adicionar.component';
import { AnaliseRoutingModule } from './analise-routing.module';
import { AnaliseComponent } from './analise.component';
import { AnaliseService } from './analise.service';
import { AnaliseDeletarComponent } from './deletar/analise.deletar.component';
import { AnaliseEditarComponent } from './editar/analise.editar.component';
import { AnaliseListarComponent } from './listar/analise.listar.component';

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
    AnaliseRoutingModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    PipeModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    AnaliseComponent,
    AnaliseAdicionarComponent,
    AnaliseDeletarComponent,
    AnaliseEditarComponent,
    AnaliseListarComponent,
  ],
  providers: [
    AnaliseService
  ]
})

export class AnaliseModule {}
