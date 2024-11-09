import { TestBed } from '@angular/core/testing';

import { AgregacionLogosService } from './agregacion-logos.service';

describe('AgregacionLogosService', () => {
  let service: AgregacionLogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregacionLogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
