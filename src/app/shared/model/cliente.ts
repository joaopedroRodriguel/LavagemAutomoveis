export class Cliente {
  id?: string;
  nome?: string;
  numero?: string;
  idade?: number;

  constructor(id?: string, cliente: Cliente = {}) {
    this.id = id;
    this.nome = cliente.nome;
    this.numero = cliente.numero;
    this.idade = cliente.idade;
  }
}
