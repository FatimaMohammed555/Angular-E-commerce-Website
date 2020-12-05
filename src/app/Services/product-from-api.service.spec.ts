import { TestBed } from '@angular/core/testing';

import { ProductFromAPIService } from './product-from-api.service';

describe('ProductFromAPIService', () => {
  let service: ProductFromAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFromAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
