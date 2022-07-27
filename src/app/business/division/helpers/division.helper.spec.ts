import { TestBed } from '@angular/core/testing';

import { DivisionHelper } from './division.helper';

describe('DivisionService', () => {
  let service: DivisionHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
