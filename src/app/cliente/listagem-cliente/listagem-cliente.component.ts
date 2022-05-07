import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteFirestoreService} from '../../shared/services/cliente-firestore.service';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  clientes: Array<Cliente>;

  constructor(private clientefirestoreservice: ClienteFirestoreService) {
  }

  ngOnInit(): void {
    this.clientefirestoreservice.listar().subscribe(
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
