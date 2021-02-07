import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { BoletoStatus } from 'app/@library/enum/boleto-status.enum';
import { Analise } from 'app/pages/analise/analise.model';
import { AnaliseService } from 'app/pages/analise/analise.service';
import { Boleto, Pagamento } from 'app/pages/financeiro/boleto/boleto.model';
import { BoletoService } from '../boleto.service';

@Component({
  selector: 'ngx-boleto-visualizar',
  templateUrl: './boleto.visualizar.component.html'
})

export class BoletoVisualizarComponent implements OnInit {

  public boleto: Boleto;

  public user: any;
  public loaded: boolean = false;
  public analise: Analise;
  public storage: Storage = sessionStorage;

  private dialogRef: any;

  constructor(
    private dialogService: NbDialogService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    public toast: NbToastrService,
    public authService: NbAuthService,
    public boletoService: BoletoService,
    public analiseService: AnaliseService) {

  }

  ngOnInit(): void {

    this.boleto = JSON.parse(this.storage.getItem('boletovisualizar'));
    this.storage.removeItem('boletovisualizar');

    if (!this.boleto) {

      this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });

    } else if (this.boleto) {
      this.loaded = true;

      this.analiseService.buscarPorReferencia(this.boleto.referencia).subscribe(
        (analise: Analise) => {
          if (analise) {
            this.analise = analise;
          }
        },
      );
    }

    this.getUser();

  }

  private getUser(): void {
    this.authService.onTokenChange().subscribe(
      (token: NbAuthJWTToken) => {
        if (token.isValid) {
          this.user = token.getPayload();
        }
      }
    );
  }


  public confimarPagamento(): void {

    const pagamento: Pagamento = {
      motivo: 'Pagamento de Fatura',
      valor: this.boleto.total,
      responsavel: this.user,
      dataCriacao: new Date()
    };

    this.boleto.status = BoletoStatus.PAGO;
    this.boleto.pagamentos = [];
    this.boleto.pagamentos.push(pagamento);

    this.boletoService.salvar(this.boleto).subscribe(
      () => {
        this.dialogRef.close();
        this.router.navigate([ './listar' ], { relativeTo: this.activeRouter.parent });
      },
      (error) => {
        this.toast.danger('erro', error);
      }
    );

  }

  public getStatusCard(): string {
    if (this.boleto.status === BoletoStatus.PAGO || this.boleto.status === BoletoStatus.NEGOCIADO) {
      return 'success';
    }

    return 'basic';
  }

  public disabledboleto(): boolean {
    if ( this.boleto.status === BoletoStatus.PAGO || this.boleto.status === BoletoStatus.NEGOCIADO) {
      return true;
    }

    return false;
  }

  public open(dialog: TemplateRef<any>) {
    this.dialogRef =  this.dialogService.open(dialog, {});
  }

  public getTotalBoleto() {
    return this.boleto.debitos.reduce((sum, current) => sum + current.valor, 0);
  }

}
