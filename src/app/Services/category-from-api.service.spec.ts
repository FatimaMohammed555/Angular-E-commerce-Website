import { TestBed } from '@angular/core/testing';

import { CategoryFromAPIService } from './category-from-api.service';

describe('CategoryFromAPIService', () => {
  let service: CategoryFromAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryFromAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
