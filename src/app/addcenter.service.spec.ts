import { TestBed, inject } from '@angular/core/testing';

import { AddcenterService } from './addcenter.service';

describe('AddcenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcenterService]
    });
  });

  it('should ...', inject([AddcenterService], (service: AddcenterService) => {
    expect(service).toBeTruthy();
  }));
});
