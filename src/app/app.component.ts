import {Component} from '@angular/core';
import {Cliente} from "./shared/model/cliente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Projeto-Pweb1-Fase1';

  constructor() {
  }

}
