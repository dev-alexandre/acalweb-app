import { Logradouro } from './../../../cadastro/logradouro/logradouro.model';
import { BoletoService } from './../../boleto/boleto.service';
import { Boleto } from './../../boleto/boleto.model';
import { Component, OnInit } from '@angular/core';
import { Contrato } from 'app/pages/cadastro/contrato/contrato.model';
import { ContratoService } from 'app/pages/cadastro/contrato/contrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletoStatus } from 'app/@library/enum/boleto-status.enum';
import { ValorDescricaoStatus } from 'app/@library/enum/valor-descriacao.enum';

interface LogradouroDTO {
  nome: string;
  linhas: Linha[];
  check: boolean;
}

interface Linha {
  contrato?: Contrato;
  check: boolean;
}

@Component({
  selector: 'ngx-gerar-boleto-adicionar',
  templateUrl: './gerar-boleto.adicionar.component.html',
})

export class GerarBoletoAdicionarComponent implements OnInit {

  public data: {referencia: string, vencimento: string};
  public storage: Storage = sessionStorage;

  public logradouroGrupo: LogradouroDTO[];
  public boletos: Boleto[];
  public contratos: Contrato [];
  public selectAll: boolean;
  public loading: boolean;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContratoService,
    public boletoService: BoletoService) {

      this.selectAll = true;
      this.loading =  false;
      this.logradouroGrupo = [];
  }

  ngOnInit(): void {

    this.data = JSON.parse(this.storage.getItem('[gerar-boleto][adicionar]'));
    this.storage.removeItem('[gerar-boleto][adicionar]');

    if (!this.data) {
      this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
    }

    this.listarContratosPorRefererencia();
  }

  public listarContratosPorRefererencia() {

    this.service.listarPorReferencia(this.data.referencia).subscribe(
      (contratos: Contrato[]) => {
        this.contratos = contratos;
        this.gerarVisualizacao();
      }
    );
  }

  public gerarVisualizacao(): void {
    this.logradouroGrupo = [];
    const logradourosUnicos: Logradouro [] = [];

    this.contratos.forEach(c => {
      if ( !(logradourosUnicos.some( l => l.id === c.matricula.logradouro.id))) {
        logradourosUnicos.push(c.matricula.logradouro);
      }
    });

    logradourosUnicos.forEach(lu => {
      const line: LogradouroDTO = {nome: lu.tipoLogradouro.nome + ' ' + lu.nome, linhas: [], check : true};

      this.contratos.filter(c => c.matricula.logradouro.id === lu.id).forEach( l =>
        line.linhas.push({contrato: l, check: true})
      );

      this.logradouroGrupo.push(line);
    });

    this.logradouroGrupo.sort(function(a, b) {
      if (a.nome < b.nome) { return -1; }
      if (a.nome > b.nome) { return 1; }
      return 0;
    });

    this.logradouroGrupo.forEach(lg => {
      lg.linhas.sort(function(a, b) {
        if (a.contrato.matricula.numero < b.contrato.matricula.numero) { return -1; }
        if (a.contrato.matricula.numero > b.contrato.matricula.numero ) { return 1; }
        return 0;
      });
    });

    this.contratos.forEach(c => {
      c.valorExibido = c.grupo.valor + c.grupo.valorSocio;
    });

  }

  public selecionarTodos(): void {

    this.logradouroGrupo.forEach(lg => {
      lg.check = !this.selectAll;

      lg.linhas.forEach(l => {
        l.check = !this.selectAll;
      });

    });
  }

  public selecionarRua(logradouro: LogradouroDTO): void {

    logradouro.linhas.forEach(l => {
      l.check = !logradouro.check;
    });

  }

  public selecionarLinha(linha: Linha, logradouro: LogradouroDTO ): void {
    linha.check = !linha.check;
  }

  public gerar(): void {
    this.loading = true;
    const boletosParaSalvar = [];

    this.logradouroGrupo.forEach(lg => {
      lg.linhas.forEach(
        l => {
          if (l.check) {
            boletosParaSalvar.push({
              numero: '',
              referencia: this.data.referencia,
              vencimento: this.data.vencimento,
              status: BoletoStatus.ABERTO,
              contrato: l.contrato,
              debitos: [
                {valor: l.contrato.grupo.valor, nome: ValorDescricaoStatus.GRUPO, responsavel: null, criacao: new Date()},
                {valor: l.contrato.grupo.valorSocio, nome: ValorDescricaoStatus.VALOR_SOCIO, responsavel: null, criacao: new Date()},
              ]
            });
          }
        }
      );
    });

    this.boletoService.salvarTodos(boletosParaSalvar).subscribe( () => {
      this.loading = false;
      this.listarContratosPorRefererencia();
    });

  }

  public voltar(): void {
    this.router.navigate([ './selecionar' ], { relativeTo: this.activeRouter.parent });
  }

}
