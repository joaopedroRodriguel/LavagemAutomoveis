import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteFirestoreService} from '../../shared/services/cliente-firestore.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente;


  constructor(private clientefirestoreservice: ClienteFirestoreService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  inserirCliente(): void {
    this.clientefirestoreservice.inserir(this.cliente).subscribe(
      cliente => console.log(cliente)
    );
    this.cliente = new Cliente();
  }

}
