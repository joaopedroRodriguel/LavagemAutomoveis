import {Component, OnInit} from '@angular/core';
import {CLIENTES} from '../../shared/model/CLIENTES';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  clientes: Array<Cliente>;

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      clientes => this.clientes = clientes
    );
  }

  editar(cliente: Cliente): void {
    cliente.nome += ' Alterado';
  }

  remover(cliente: Cliente): void {
    const indxClienteARemover = this.clientes.findIndex(c => c.numero === cliente.numero);
    if (indxClienteARemover > -1) {
      this.clientes.splice(indxClienteARemover, 1);
    }
  }

}
