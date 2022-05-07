import { Injectable } from '@angular/core';
import {Frentista} from '../model/frentista';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FrentistaService {

  URL_FRENTISTA = 'http://localhost:3000/frentistas';

  constructor(private httpClient: HttpClient) {
  }

  listarfrentistas(): Observable<Frentista[]> {
    return this.httpClient.get<Frentista[]>(this.URL_FRENTISTA);
  }
}


