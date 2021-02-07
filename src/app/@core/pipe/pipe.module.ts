import { DocumentoFormat } from './documentoPipe';
import { MatriculaFormat } from './matriculaPipe';
import { NumDocFormat } from './numDocPipe';
import { NgModule } from '@angular/core';
import { DateFormat } from './datePipe';
import { ReferenciaFormat } from './referenciaPipe';
import { DateTimeFormat } from './dateTimePipe';
import { LogradouroFormat } from './LogradouroPipe';
import { ReferenciaEscritaFormat } from './referencia';

@NgModule({
  imports: [
  ],

  declarations: [
    DateFormat,
    ReferenciaFormat,
    ReferenciaEscritaFormat,
    NumDocFormat,
    DateTimeFormat,
    MatriculaFormat,
    DocumentoFormat,
    LogradouroFormat,
  ],

  exports: [
    DateFormat,
    ReferenciaFormat,
    ReferenciaEscritaFormat,
    NumDocFormat,
    DateTimeFormat,
    MatriculaFormat,
    DocumentoFormat,
    LogradouroFormat,
  ],

  providers: [
  ]
})

export class PipeModule {}
