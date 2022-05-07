import { Component, OnInit } from '@angular/core';
import {Frentista} from '../../shared/model/frentista';
import {FrentistaFirestoreService} from '../../shared/services/frentista-firestore.service';

@Component({
  selector: 'app-listagem-frentista',
  templateUrl: './listagem-frentista.component.html',
  styleUrls: ['./listagem-frentista.component.scss']
})
export class ListagemFrentistaComponent implements OnInit {

  frentistas: Array<Frentista>;

  constructor(private frentistafirestoreservice: FrentistaFirestoreService) { }

  ngOnInit(): void {
    this.frentistafirestoreservice.listar().subscribe(
      frentistas => this.frentistas = frentistas
    );
  }

  remover(frentista: Frentista): void {
    const indxFrentistaARemover = this.frentistas.findIndex(f => f.numerotel === frentista.numerotel);
    if (indxFrentistaARemover > -1) {
      this.frentistas.splice(indxFrentistaARemover, 1);
    }
  }

}
