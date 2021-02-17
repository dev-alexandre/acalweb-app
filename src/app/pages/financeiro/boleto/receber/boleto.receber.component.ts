import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BoletoService } from '../boleto.service';

@Component({
  selector: 'ngx-boleto-receber',
  templateUrl: './boleto.receber.component.html',
})

export class BoletoReceberComponent implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: BoletoService,
    public toast: NbToastrService) {

  }

  ngOnInit(): void {
  }


}
