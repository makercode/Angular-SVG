import { TestBed } from '@angular/core/testing';

import { PeruDepartmentService } from './perudepartment.service';

describe('DistrictListService', () => {
  let service: PeruDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeruDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
