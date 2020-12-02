import { NumDocFormat } from './numDocPipe';
import { NgModule } from '@angular/core';
import { DateFormat } from './datePipe';
import { ReferenciaFormat } from './referenciaPipe';

@NgModule({
  imports: [
  ],

  declarations: [
    DateFormat,
    ReferenciaFormat,
    NumDocFormat,
  ],

  exports: [
    DateFormat,
    ReferenciaFormat,
    NumDocFormat,
  ],

  providers: [
  ]
})

export class PipeModule {}
