import { TestBed } from '@angular/core/testing';

import { WebdevService } from './webdev.service';

describe('WebdevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebdevService = TestBed.get(WebdevService);
    expect(service).toBeTruthy();
  });
});
