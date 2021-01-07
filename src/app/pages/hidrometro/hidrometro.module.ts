import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule, NbTooltipModule } from '@nebular/theme';
import { PipeModule } from 'app/@core/pipe/pipe.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { MatriculaService } from '../cadastro/matricula/matricula.service';
import { HidrometroAdicionarComponent } from './adicionar/hidrometro.adicionar.component';
import { HidrometroDeletarComponent } from './deletar/hidrometro.deletar.component';
import { HidrometroEditarComponent } from './editar/hidrometro.editar.component';
import { HidrometroRoutingModule } from './hidrometro-routing.module';
import { HidrometroComponent } from './hidrometro.component';
import { HidrometroService } from './hidrometro.service';
import { HidrometroListarComponent } from './listar/hidrometro.listar.component';

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
    HidrometroRoutingModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    PipeModule,
    NbTooltipModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    HidrometroComponent,
    HidrometroAdicionarComponent,
    HidrometroDeletarComponent,
    HidrometroEditarComponent,
    HidrometroListarComponent,
  ],
  providers: [
    MatriculaService,
    HidrometroService
  ]
})

export class HidrometroModule {}
