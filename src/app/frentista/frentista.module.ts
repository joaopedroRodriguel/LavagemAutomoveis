import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemFrentistaComponent } from './listagem-frentista/listagem-frentista.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [ListagemFrentistaComponent],
    exports: [
        ListagemFrentistaComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class FrentistaModule { }
