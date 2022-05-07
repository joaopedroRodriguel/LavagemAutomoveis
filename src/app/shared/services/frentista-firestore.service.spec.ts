import { TestBed } from '@angular/core/testing';

import { FrentistaFirestoreService } from './frentista-firestore.service';

describe('FrentistaFirestoreService', () => {
  let service: FrentistaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrentistaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
