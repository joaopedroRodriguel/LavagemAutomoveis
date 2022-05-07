import { TestBed } from '@angular/core/testing';

import { FrentistaService } from './frentista.service';

describe('FrentistaService', () => {
  let service: FrentistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrentistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
