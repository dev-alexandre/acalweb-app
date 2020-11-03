import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from 'app/pages/cadastro/cliente/cliente.component';
import { GerarBoletoAdicionarComponent } from './adicionar/gerar-boleto.adicionar.listar.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [
    {
      path: 'adicionar',
      component: GerarBoletoAdicionarComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GerarBoletoRoutingModule {

}
