import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { BoletoRoutingModule } from './boleto-routing.module';
import { BoletoComponent } from './boleto.component';
import { BoletoService } from './boleto.service';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    BoletoRoutingModule,
  ],
  declarations: [
    BoletoComponent,
  ],
  providers: [
    BoletoService
  ]
})

export class BoletoModule {}
