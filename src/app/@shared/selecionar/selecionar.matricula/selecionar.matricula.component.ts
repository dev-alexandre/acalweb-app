import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Matricula } from 'app/pages/cadastro/matricula/matricula.model';
import { MatriculaService } from 'app/pages/cadastro/matricula/matricula.service';
import { Select } from '../select.model';

@Component({
  selector: 'ngx-selecionar-matricula',
  templateUrl: './selecionar.matricula.component.html',
})

export class SelecionarMatriculaComponent implements OnInit {

  @Input()
  public submited: boolean;

  @Input()
  public title: string;

  @Output()
  private setData = new EventEmitter();

  public textSeach: string = '';
  public textOutput: string = '';
  public controle: number = 0;
  public matricula: Matricula;
  public matriculas: Select<Matricula>[];
  public onFocus: boolean = false;
  public seaching: boolean = false;

  constructor(public service: MatriculaService) {

  }

  ngOnInit(): void {
  }

  public atualizar(): void {

    if (this.textSeach.length >= 3) {

      if (!this.seaching) {
        this.seaching = true;

        this.service.selecionar(this.textSeach).subscribe(
          (matriculas: Select<Matricula>[]) => {
            this.matriculas = matriculas;
            this.seaching = false;
          }
        );

      }
    } else {
      this.matriculas = [];
     }

  }

  public selecionar(matricula: Matricula): void {
    this.setData.emit(matricula);

    if (matricula) {

      this.textOutput =
        matricula.logradouro.tipoLogradouro.nome + ' ' +
        matricula.logradouro.nome +
        ' Nº ' + matricula.numero + ' ' +
        ( matricula.letra ? matricula.letra : '') ;

    } else {
      this.textOutput = '';
    }

    this.matricula = matricula;
  }

  public getStatus(): string {
    if (!this.submited) {
      return 'basic';
    } else {

      if (this.matricula) {
        return 'success';
      } else {
        return 'danger';
      }

    }
  }

}
