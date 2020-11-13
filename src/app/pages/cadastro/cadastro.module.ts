import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { LogradouroService } from './logradouro/logradouro.service';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    CadastroRoutingModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CadastroComponent,
  ],
  providers: [
    LogradouroService
  ]
})

export class CadastroModule {}
