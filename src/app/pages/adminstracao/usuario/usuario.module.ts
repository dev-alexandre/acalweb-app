import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule, NbToggleModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { UsuarioAdicionarComponent } from './adicionar/usuario.adicionar.component';
import { UsuarioDeletarComponent } from './deletar/usuario.deletar.component';
import { UsuarioEditarComponent } from './editar/usuario.editar.component';
import { UsuarioListarComponent } from './listar/usuario.listar.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';

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
    NbLayoutModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NgxMaskModule.forChild(),
    NbToggleModule,
    UsuarioRoutingModule,
  ],
  declarations: [
    UsuarioComponent,
    UsuarioAdicionarComponent,
    UsuarioDeletarComponent,
    UsuarioEditarComponent,
    UsuarioListarComponent,
  ],
  exports: [
  ],
  providers: [
    UsuarioService
  ]
})

export class UsuarioModule {}
