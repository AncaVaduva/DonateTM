import { TestBed, inject } from '@angular/core/testing';

import { SearchdonatorService } from './searchdonator.service';

describe('SearchdonatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchdonatorService]
    });
  });

  it('should ...', inject([SearchdonatorService], (service: SearchdonatorService) => {
    expect(service).toBeTruthy();
  }));
});
