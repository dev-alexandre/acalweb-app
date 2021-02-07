import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AdicionarComponent } from 'app/@core/base/adicionar.component';
import { Modulo } from 'app/@library/enum';
import { DateValidator } from 'app/@core/validator/dataValidator';
import { BoletoService } from '../boleto.service';
import { Boleto } from '../boleto.model';

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
