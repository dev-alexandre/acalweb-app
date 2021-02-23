import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Grupo } from 'app/pages/cadastro/grupo/grupo.model';
import { GrupoService } from 'app/pages/cadastro/grupo/grupo.service';
import { Select } from '../select.model';

@Component({
  selector: 'ngx-selecionar-grupo',
  styleUrls: ['./selecionar.grupo.component.scss'],
  templateUrl: './selecionar.grupo.component.html',
})

export class SelecionarGrupoComponent implements OnInit {

  @Input()
  public submited: boolean;

  @Output()
  private setData = new EventEmitter();

  public textSeach: string = '';
  public controle: number = 0;
  public grupo: Grupo;
  public grupos: Grupo[];
  public onFocus: boolean = false;
  public seaching: boolean = false;
  public opcoes: Select<Grupo>[];

  constructor(public service: GrupoService) {

  }

  ngOnInit(): void {

    this.service.selecionar().subscribe(
      (opcoes: Select<Grupo>[]) => {
        this.opcoes = opcoes;
      }
    );

  }

  public selecionar(grupo: Grupo): void {
    this.setData.emit(grupo);
  }

  public getStatus(): string {
    if (!this.submited) {
      return 'basic';
    } else {

      if (this.grupo) {
        return 'success';
      } else {
        return 'danger';
      }

    }
  }

}
