import { Injectable } from '@angular/core';
import {Frentista} from '../model/frentista';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FrentistaFirestoreService {

  colecaoFrentistas: AngularFirestoreCollection<Frentista>;
  NOME_COLECAO = 'frentistas';
  frentistas: Frentista;

  constructor(private afs: AngularFirestore) {
    this.colecaoFrentistas = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Frentista[]> {
    return this.colecaoFrentistas.valueChanges({idField: 'id'});
  }

  inserir(frentista: Frentista): Observable<object> {
    delete frentista.id;
    return from(this.colecaoFrentistas.add(Object.assign({}, this.frentistas)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoFrentistas.doc(id).delete());
  }



  atualizar(frentista: Frentista): Observable<void> {
    delete frentista.id;
    return from(this.colecaoFrentistas.doc(frentista.id).update(Object.assign({}, frentista)));
  }

}

