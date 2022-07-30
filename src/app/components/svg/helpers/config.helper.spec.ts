import { TestBed } from '@angular/core/testing';

import { ConfigHelper } from './config.helper';

describe('ConfigHelper', () => {
  let service: ConfigHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
