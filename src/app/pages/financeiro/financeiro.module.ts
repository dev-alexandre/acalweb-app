import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FinanceiroComponent } from './financeiro.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
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
    FinanceiroRoutingModule,
  ],
  declarations: [
    FinanceiroComponent,
  ],
  providers: [
  ]
})

export class FinanceiroModule {}
