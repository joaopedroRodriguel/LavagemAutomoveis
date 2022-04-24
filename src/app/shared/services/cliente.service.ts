import { Injectable } from '@angular/core';
import {Cliente} from '../model/cliente';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  URL_CLIENTES = 'http://localhost:3000/clientes';

  constructor(private httpClient: HttpClient) {

  }

  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTES);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTES, cliente);

  }
}
