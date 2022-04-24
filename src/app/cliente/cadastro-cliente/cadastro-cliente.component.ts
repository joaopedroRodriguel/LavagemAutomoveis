import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente;


  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  inserirCliente(): void {
    this.clienteService.inserir(this.cliente).subscribe(
      cliente => console.log(cliente)
    );
    this.cliente = new Cliente();
  }

}
