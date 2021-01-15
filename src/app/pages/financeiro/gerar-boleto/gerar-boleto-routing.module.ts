import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from 'app/pages/cadastro/cliente/cliente.component';
import { GerarBoletoAdicionarComponent } from './adicionar/gerar-boleto.adicionar.component';
import { GerarBoletoSelecionarComponent } from './selecionar/gerar-boleto.selecionar.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [
    {
      path: 'adicionar',
      component: GerarBoletoAdicionarComponent,
    },
    {
      path: 'selecionar',
      component: GerarBoletoSelecionarComponent,
    },
    { path: '', redirectTo: 'selecionar', pathMatch: 'full' },
    { path: '**', redirectTo: 'selecionar' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GerarBoletoRoutingModule {

}
