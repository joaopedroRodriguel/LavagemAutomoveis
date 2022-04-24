import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CadastroClienteComponent} from './cliente/cadastro-cliente/cadastro-cliente.component';
import {ListagemClienteComponent} from './cliente/listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  {
    path: 'cadastrarcliente',
    component: CadastroClienteComponent
  },
  {
    path: 'listarclientes',
    component: ListagemClienteComponent
  },
  {
    path: '',
    component: ListagemClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
