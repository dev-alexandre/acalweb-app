import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { ThemeModule } from '../../@theme/theme.module';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FinanceiroComponent } from './financeiro.component';
import { ValorAguaComponent } from './valor-agua/valor-agua.component';
import { ValorAguaService } from './valor-agua/valor-agua.service';


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
    FinanceiroRoutingModule,
    NbDatepickerModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    ValorAguaComponent,
    FinanceiroComponent,
  ],
  providers: [
    ValorAguaService,
  ],
  exports: [
  ]
})

export class FinanceiroModule {}
