import { Component, Input } from '@angular/core';
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
