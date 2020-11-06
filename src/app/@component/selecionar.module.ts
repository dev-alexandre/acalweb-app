import { GrupoService } from './../pages/cadastro/grupo/grupo.service';
import { SelecionarMatriculaComponent } from './selecionar.matricula/selecionar.matricula.component';
import { MatriculaService } from './../pages/cadastro/matricula/matricula.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule, NbCardModule, NbFormFieldModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { ClienteService } from 'app/pages/cadastro/cliente/cliente.service';
import { NgxMaskModule } from 'ngx-mask';
import { SelecionarClienteComponent } from './selecionar.cliente/selecionar.cliente.component';
import { SelecionarGrupoComponent } from './selecionar.grupo/selecionar.grupo.component';

@NgModule({

  imports: [
    ThemeModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    NbListModule,
    NbCardModule,
    NbSelectModule,
    NbFormFieldModule,
  ],

  declarations: [
    SelecionarClienteComponent,
    SelecionarMatriculaComponent,
    SelecionarGrupoComponent,
  ],

  exports: [
    SelecionarClienteComponent,
    SelecionarMatriculaComponent,
    SelecionarGrupoComponent,
  ],

  providers: [
    ClienteService,
    MatriculaService,
    GrupoService,
  ]

})

export class SelecionarModule {}
