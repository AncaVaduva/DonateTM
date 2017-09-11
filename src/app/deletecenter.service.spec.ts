import { TestBed, inject } from '@angular/core/testing';

import { DeletecenterService } from './deletecenter.service';

describe('DeletecenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletecenterService]
    });
  });

  it('should ...', inject([DeletecenterService], (service: DeletecenterService) => {
    expect(service).toBeTruthy();
  }));
});
