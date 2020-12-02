import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgxMaskModule } from 'ngx-mask';
import { InputMoneyComponent } from './input.money.component';

@NgModule({

  imports: [
    ThemeModule,
    NbIconModule,
    NbInputModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    NbFormFieldModule,
  ],

  declarations: [
    InputMoneyComponent,
  ],

  exports: [
    InputMoneyComponent,
  ],

  providers: [
  ]

})

export class InputModule {}
