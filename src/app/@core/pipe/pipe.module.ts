import { MatriculaFormat } from './matriculaPipe';
import { NumDocFormat } from './numDocPipe';
import { NgModule } from '@angular/core';
import { DateFormat } from './datePipe';
import { ReferenciaFormat } from './referenciaPipe';
import { DateTimeFormat } from './dateTimePipe';

@NgModule({
  imports: [
  ],

  declarations: [
    DateFormat,
    ReferenciaFormat,
    NumDocFormat,
    DateTimeFormat,
    MatriculaFormat,
  ],

  exports: [
    DateFormat,
    ReferenciaFormat,
    NumDocFormat,
    DateTimeFormat,
    MatriculaFormat,
  ],

  providers: [
  ]
})

export class PipeModule {}
