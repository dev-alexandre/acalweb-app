import { TableFooterComponent } from './component/table.footer.component';
import { NbCardModule, NbSelectModule, NbSpinnerModule, NbButtonModule, NbInputModule, NbFormFieldModule, NbIconModule, NbListModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { TableComponent } from './component/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({

  imports: [
    NbCardModule,
    NbSpinnerModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    CommonModule,
    NbIconModule,
    NbFormFieldModule,
    NbListModule,
  ],

  declarations: [
    TableFooterComponent,
    TableComponent,
  ],

  exports: [
    TableFooterComponent,
    TableComponent,
  ],

  providers: [
  ]
})

export class TableModule {}
