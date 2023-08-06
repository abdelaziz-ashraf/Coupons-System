import { TestBed } from '@angular/core/testing';

import { ConsumptionHistoryService } from './consumption-history.service';

describe('ConsumptionHistoryService', () => {
  let service: ConsumptionHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumptionHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
