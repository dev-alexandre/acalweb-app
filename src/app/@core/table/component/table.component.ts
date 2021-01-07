import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Service } from 'app/@core/base/service';
import { Filtro } from '../filtro.model';
import { Table } from '../table.model';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
})

export class TableComponent<T> {

  @Input()
  loading: boolean = false;

  @Input()
  title: string;

  @Input()
  public table: Table<Object>;

  @Input()
  public filtro: Filtro;

  @Output()
  private buscar = new EventEmitter();

  constructor(public toast: NbToastrService){

  }

  public loadByName(){

    if(this.filtro?.name.length >= 1 && this.filtro?.name.length <3){
      this.toast.default( "Digite pelo menos 3 Caracteres", "Cancelado");
      return;
    }

    this.load();
  }


  public load(): void {
    this.loading = true;
    this.buscar.emit();
  }

  public changeSize(): void {
    this.load();
  }

  public anterior(): void {
    this.filtro.page--;
    this.load();
  }

  public avancar(): void {
    this.filtro.page++;
    this.load();
  }

}
