import { TestBed } from '@angular/core/testing';

import { ShowsListingService } from './shows-listing.service';

describe('ShowsListingService', () => {
  let service: ShowsListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowsListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
