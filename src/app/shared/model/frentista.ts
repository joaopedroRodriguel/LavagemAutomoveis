export class Frentista{
  id?: string;
  nome?: string;
  numerotel?: number;
  status?: string;

  constructor(id?: string, frentista: Frentista = {}) {
    this.id = id;
    this.nome = frentista.nome;
    this.numerotel = frentista.numerotel;
    this.status = frentista.status;
  }
}
