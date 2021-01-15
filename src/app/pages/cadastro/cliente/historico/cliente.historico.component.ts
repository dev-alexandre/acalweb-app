import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-cliente-historico-deletar',
  templateUrl: './cliente.historico.component.html',
})

export class ClienteHistoricoComponent  implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ClienteService,
    public toast: NbToastrService) {

  }

  ngOnInit(): void {
  }

}
