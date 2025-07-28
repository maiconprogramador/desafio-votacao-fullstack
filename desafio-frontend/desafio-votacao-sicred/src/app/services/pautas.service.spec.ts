import { TestBed } from '@angular/core/testing';

import { PautasService } from './pautas.service';

describe('PautasServiceService', () => {
  let service: PautasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PautasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
