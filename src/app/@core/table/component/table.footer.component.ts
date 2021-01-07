import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from 'app/@core/base/service';
import { Filtro } from '../filtro.model';
import { Table } from '../table.model';

@Component({
  selector: 'ngx-table-footer',
  templateUrl: './table.footer.component.html',
})

export class TableFooterComponent {

  @Input()
  public table: Table<Object>;

  @Input()
  public qtdColunas: number;

}
