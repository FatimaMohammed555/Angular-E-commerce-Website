import { TestBed } from '@angular/core/testing';

import { OrderFromAPIService } from './order-from-api.service';

describe('OrderFromAPIService', () => {
  let service: OrderFromAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFromAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
