import { TestBed } from '@angular/core/testing';

import { DepartmentHelper } from './department.helper';

describe('DepartmentService', () => {
  let service: DepartmentHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
