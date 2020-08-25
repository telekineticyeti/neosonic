import { TestBed } from '@angular/core/testing';

import { AirsonicApiService } from './airsonic-api.service';

describe('AirsonicApiService', () => {
  let service: AirsonicApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirsonicApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
