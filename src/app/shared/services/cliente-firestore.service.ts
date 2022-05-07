import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Cliente} from '../model/cliente';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteFirestoreService {
  colecaoClientes: AngularFirestoreCollection<Cliente>;
  NOME_COLECAO = 'clientes';

  constructor(private afs: AngularFirestore) {
    this.colecaoClientes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Cliente[]> {
    return this.colecaoClientes.valueChanges({idField: 'id'});
  }

  inserir(cliente: Cliente): Observable<object> {
    delete cliente.id;
    return from(this.colecaoClientes.add(Object.assign({}, cliente)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoClientes.doc(id).delete());
  }
}

