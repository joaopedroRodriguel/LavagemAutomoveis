import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFrentistaComponent } from './listagem-frentista.component';

describe('ListagemFrentistaComponent', () => {
  let component: ListagemFrentistaComponent;
  let fixture: ComponentFixture<ListagemFrentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemFrentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemFrentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
